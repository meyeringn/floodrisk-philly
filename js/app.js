(() => {
  "use strict";

  const CONFIG = Object.freeze({
    defaultLanguage: "en",
    languageStorageKey: "floodrisk-philly-language",
    requestTimeoutMs: 12000,
    geocodeCacheMs: 15 * 60 * 1000,
    minimumLookupIntervalMs: 1100,
    philadelphiaBounds: Object.freeze({
      south: 39.85,
      north: 40.15,
      west: -75.30,
      east: -74.95
    }),
    nominatimEndpoint: "https://nominatim.openstreetmap.org/search",
    femaLayerEndpoint:
      "https://hazards.fema.gov/gis/nfhl/rest/services/public/NFHL/MapServer/28/query",
    femaMapUrl: "https://msc.fema.gov/portal/home",
    defaultMapZoom: 15
  });

  const HIGH_HAZARD_ZONES = new Set([
    "A",
    "A1",
    "A2",
    "A3",
    "A4",
    "A5",
    "A6",
    "A7",
    "A8",
    "A9",
    "A10",
    "A11",
    "A12",
    "A13",
    "A14",
    "A15",
    "A16",
    "A17",
    "A18",
    "A19",
    "A20",
    "A21",
    "A22",
    "A23",
    "A24",
    "A25",
    "A26",
    "A27",
    "A28",
    "A29",
    "A30",
    "AE",
    "AH",
    "AO",
    "AR",
    "A99",
    "V",
    "V1",
    "V2",
    "V3",
    "V4",
    "V5",
    "V6",
    "V7",
    "V8",
    "V9",
    "V10",
    "V11",
    "V12",
    "V13",
    "V14",
    "V15",
    "V16",
    "V17",
    "V18",
    "V19",
    "V20",
    "V21",
    "V22",
    "V23",
    "V24",
    "V25",
    "V26",
    "V27",
    "V28",
    "V29",
    "V30",
    "VE"
  ]);

  const LOWER_HAZARD_ZONES = new Set([
    "X",
    "C",
    "B"
  ]);

  const CHECKLIST_GROUPS = Object.freeze([
    Object.freeze({
      headingKey: "checklistNow",
      items: Object.freeze([
        "checklistNowOne",
        "checklistNowTwo",
        "checklistNowThree"
      ])
    }),
    Object.freeze({
      headingKey: "checklistWeek",
      items: Object.freeze([
        "checklistWeekOne",
        "checklistWeekTwo",
        "checklistWeekThree"
      ])
    }),
    Object.freeze({
      headingKey: "checklistSeason",
      items: Object.freeze([
        "checklistSeasonOne",
        "checklistSeasonTwo",
        "checklistSeasonThree"
      ])
    })
  ]);

  const state = {
    language: readStoredLanguage(),
    result: null,
    map: null,
    marker: null,
    activeRequestController: null,
    lastLookupStartedAt: 0,
    geocodeCache: new Map()
  };

  const elements = {};

  document.addEventListener("DOMContentLoaded", initialize);

  function initialize() {
    cacheElements();
    bindEvents();
    applyLanguage();
    renderChecklist();
    setDocumentPrintTitle();
  }

  function cacheElements() {
    elements.languageToggle = document.getElementById("language-toggle");
    elements.addressForm = document.getElementById("address-form");
    elements.addressInput = document.getElementById("address-input");
    elements.lookupButton = document.getElementById("lookup-button");
    elements.formStatus = document.getElementById("form-status");

    elements.results = document.getElementById("results");
    elements.resultsTitle = document.getElementById("results-title");
    elements.matchedAddress = document.getElementById("matched-address");
    elements.startOverButton = document.getElementById("start-over-button");

    elements.resultSummary = document.getElementById("result-summary");
    elements.riskBadge = document.getElementById("risk-badge");
    elements.dataStatus = document.getElementById("data-status");
    elements.resultSummaryTitle = document.getElementById(
      "result-summary-title"
    );
    elements.resultSummaryText = document.getElementById(
      "result-summary-text"
    );
    elements.nextStepText = document.getElementById("next-step-text");

    elements.zoneValue = document.getElementById("zone-value");
    elements.classificationValue = document.getElementById(
      "classification-value"
    );
    elements.lookupStatusValue = document.getElementById(
      "lookup-status-value"
    );

    elements.profileForm = document.getElementById("profile-form");
    elements.personalizedGuidance = document.getElementById(
      "personalized-guidance"
    );
    elements.checklist = document.getElementById("checklist");
    elements.printPlanButton = document.getElementById("print-plan-button");

    elements.map = document.getElementById("map");
    elements.mapDescription = document.getElementById("map-description");
    elements.femaMapLink = document.getElementById("fema-map-link");
  }

  function bindEvents() {
    elements.addressForm.addEventListener("submit", handleLookup);
    elements.languageToggle.addEventListener("click", toggleLanguage);
    elements.startOverButton.addEventListener("click", resetApplication);
    elements.profileForm.addEventListener("change", renderPersonalizedGuidance);
    elements.printPlanButton.addEventListener("click", handlePrint);

    window.addEventListener("beforeprint", setDocumentPrintTitle);
    window.addEventListener("afterprint", restoreDocumentTitle);
  }

  function t(key) {
    return (
      I18N[state.language]?.[key] ??
      I18N[CONFIG.defaultLanguage]?.[key] ??
      key
    );
  }

  function readStoredLanguage() {
    try {
      const saved = localStorage.getItem(CONFIG.languageStorageKey);
      return saved === "es" ? "es" : CONFIG.defaultLanguage;
    } catch {
      return CONFIG.defaultLanguage;
    }
  }

  function storeLanguage() {
    try {
      localStorage.setItem(CONFIG.languageStorageKey, state.language);
    } catch {
      // Language persistence is optional. The interface still works.
    }
  }

  function toggleLanguage() {
    state.language = state.language === "en" ? "es" : "en";
    storeLanguage();
    applyLanguage();
  }

  function applyLanguage() {
    document.documentElement.lang = state.language;

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.dataset.i18n;
      node.textContent = t(key);
    });

    elements.languageToggle.setAttribute(
      "aria-pressed",
      String(state.language === "es")
    );
    elements.languageToggle.setAttribute(
      "aria-label",
      t("languageButtonAria")
    );

    renderChecklist();
    renderPersonalizedGuidance();
    setDocumentPrintTitle();

    if (state.result) {
      renderResult(state.result, { moveFocus: false });
    }
  }

  function setStatus(message, type = "neutral") {
    elements.formStatus.textContent = message;
    elements.formStatus.classList.toggle("is-error", type === "error");
    elements.formStatus.classList.toggle("is-success", type === "success");
  }

  function setLoading(isLoading) {
    elements.lookupButton.disabled = isLoading;
    elements.addressInput.setAttribute(
      "aria-busy",
      String(isLoading)
    );
  }

  async function handleLookup(event) {
    event.preventDefault();

    const rawAddress = elements.addressInput.value.trim();

    if (!rawAddress) {
      setStatus(t("statusEmpty"), "error");
      elements.addressInput.focus();
      return;
    }

    abortActiveRequest();
    state.activeRequestController = new AbortController();

    setLoading(true);
    setStatus(t("statusLoading"));

    try {
      await respectLookupInterval();

      const geocodeResult = await geocodeAddress(
        rawAddress,
        state.activeRequestController.signal
      );

      if (!geocodeResult) {
        throw createLookupError("ADDRESS_NOT_FOUND");
      }

      const latitude = Number(geocodeResult.lat);
      const longitude = Number(geocodeResult.lon);

      if (!isFiniteCoordinate(latitude, longitude)) {
        throw createLookupError("UNEXPECTED");
      }

      if (!isInsidePhiladelphia(latitude, longitude)) {
        throw createLookupError("OUTSIDE_PHILADELPHIA");
      }

      const normalizedAddress =
        geocodeResult.display_name || cleanAddress(rawAddress);

      let femaResult;
      let femaStatus = "live";

      try {
        femaResult = await queryFemaZone(
          latitude,
          longitude,
          state.activeRequestController.signal
        );

        if (!femaResult.conclusive) {
          femaStatus = "no-feature";
        }
      } catch (error) {
        if (error.name === "AbortError") {
          throw error;
        }

        femaResult = createEmptyFemaResult();
        femaStatus = "unavailable";
      }

      const result = {
        inputAddress: rawAddress,
        displayAddress: normalizedAddress,
        latitude,
        longitude,
        geocoder: {
          type: geocodeResult.type || "",
          category: geocodeResult.category || "",
          importance: Number(geocodeResult.importance) || 0
        },
        fema: femaResult,
        femaStatus,
        riskLevel:
          femaStatus === "live"
            ? classifyFemaResult(femaResult)
            : "unknown",
        checkedAt: new Date().toISOString()
      };

      state.result = result;

      if (femaStatus === "unavailable") {
        setStatus(t("statusFemaUnavailable"), "error");
      } else {
        setStatus(t("statusLookupComplete"), "success");
      }

      renderResult(result, { moveFocus: true });
    } catch (error) {
      if (error.name === "AbortError") {
        return;
      }

      handleLookupError(error);
    } finally {
      setLoading(false);
      state.activeRequestController = null;
    }
  }

  function handleLookupError(error) {
    const messages = {
      ADDRESS_NOT_FOUND: "statusAddressNotFound",
      AMBIGUOUS: "statusAmbiguous",
      OUTSIDE_PHILADELPHIA: "statusOutside",
      GEOCODER_UNAVAILABLE: "statusGeocoderUnavailable",
      UNEXPECTED: "statusUnexpected"
    };

    const key = messages[error.code] || "statusUnexpected";
    setStatus(t(key), "error");
  }

  function createLookupError(code) {
    const error = new Error(code);
    error.code = code;
    return error;
  }

  function abortActiveRequest() {
    if (state.activeRequestController) {
      state.activeRequestController.abort();
      state.activeRequestController = null;
    }
  }

  async function respectLookupInterval() {
    const elapsed = Date.now() - state.lastLookupStartedAt;
    const delay = Math.max(0, CONFIG.minimumLookupIntervalMs - elapsed);

    if (delay > 0) {
      await wait(delay);
    }

    state.lastLookupStartedAt = Date.now();
  }

  function wait(milliseconds) {
    return new Promise((resolve) => {
      window.setTimeout(resolve, milliseconds);
    });
  }

  function cleanAddress(address) {
    return address
      .replace(
        /\b(?:apt|apartment|unit|suite|ste|floor|fl|#)\s*[\w-]+\b/gi,
        ""
      )
      .replace(/\s+,/g, ",")
      .replace(/\s{2,}/g, " ")
      .trim();
  }

  async function geocodeAddress(rawAddress, signal) {
    const cleaned = cleanAddress(rawAddress);
    const cacheKey = cleaned.toLowerCase();
    const cached = state.geocodeCache.get(cacheKey);

    if (
      cached &&
      Date.now() - cached.savedAt < CONFIG.geocodeCacheMs
    ) {
      return cached.value;
    }

    const parameters = new URLSearchParams({
      q: `${cleaned}, Philadelphia, Pennsylvania`,
      format: "jsonv2",
      addressdetails: "1",
      limit: "5",
      countrycodes: "us",
      viewbox: [
        CONFIG.philadelphiaBounds.west,
        CONFIG.philadelphiaBounds.north,
        CONFIG.philadelphiaBounds.east,
        CONFIG.philadelphiaBounds.south
      ].join(","),
      bounded: "1"
    });

    let response;

    try {
      response = await fetchJson(
        `${CONFIG.nominatimEndpoint}?${parameters.toString()}`,
        {
          signal,
          headers: {
            Accept: "application/json",
            "Accept-Language": state.language
          }
        }
      );
    } catch (error) {
      if (error.name === "AbortError") {
        throw error;
      }

      throw createLookupError("GEOCODER_UNAVAILABLE");
    }

    if (!Array.isArray(response) || response.length === 0) {
      return null;
    }

    const candidates = response
      .map(normalizeGeocodeCandidate)
      .filter(Boolean)
      .filter((candidate) =>
        isInsidePhiladelphia(
          Number(candidate.lat),
          Number(candidate.lon)
        )
      );

    if (candidates.length === 0) {
      throw createLookupError("OUTSIDE_PHILADELPHIA");
    }

    const best = chooseBestGeocodeCandidate(candidates);

    state.geocodeCache.set(cacheKey, {
      savedAt: Date.now(),
      value: best
    });

    return best;
  }

  function normalizeGeocodeCandidate(candidate) {
    if (!candidate || candidate.lat == null || candidate.lon == null) {
      return null;
    }

    const address = candidate.address || {};
    const cityText = [
      address.city,
      address.town,
      address.village,
      address.county,
      address.state_district,
      candidate.display_name
    ]
      .filter(Boolean)
      .join(" ");

    if (!/philadelphia/i.test(cityText)) {
      return null;
    }

    return candidate;
  }

  function chooseBestGeocodeCandidate(candidates) {
    const sorted = [...candidates].sort((a, b) => {
      const aHouseNumber = Boolean(a.address?.house_number);
      const bHouseNumber = Boolean(b.address?.house_number);

      if (aHouseNumber !== bHouseNumber) {
        return aHouseNumber ? -1 : 1;
      }

      return (
        (Number(b.importance) || 0) -
        (Number(a.importance) || 0)
      );
    });

    return sorted[0];
  }

  async function queryFemaZone(latitude, longitude, signal) {
    const parameters = new URLSearchParams({
      where: "1=1",
      geometry: `${longitude},${latitude}`,
      geometryType: "esriGeometryPoint",
      inSR: "4326",
      spatialRel: "esriSpatialRelIntersects",
      outFields: "FLD_ZONE,ZONE_SUBTY,SFHA_TF,STATIC_BFE,DEPTH",
      returnGeometry: "false",
      f: "json"
    });

    const response = await fetchJson(
      `${CONFIG.femaLayerEndpoint}?${parameters.toString()}`,
      {
        signal,
        headers: {
          Accept: "application/json"
        }
      }
    );

    if (response?.error) {
      throw new Error(
        response.error.message || "FEMA service returned an error."
      );
    }

    const attributes = response?.features?.[0]?.attributes;

    if (!attributes) {
      return createEmptyFemaResult();
    }

    return {
      zone: normalizeZone(attributes.FLD_ZONE),
      subtype: normalizeString(attributes.ZONE_SUBTY),
      specialFloodHazardArea:
        normalizeString(attributes.SFHA_TF).toUpperCase(),
      staticBaseFloodElevation:
        normalizeOptionalNumber(attributes.STATIC_BFE),
      depth: normalizeOptionalNumber(attributes.DEPTH),
      conclusive: Boolean(attributes.FLD_ZONE)
    };
  }

  async function fetchJson(url, options = {}) {
    const timeoutController = new AbortController();
    const externalSignal = options.signal;

    const timeoutId = window.setTimeout(() => {
      timeoutController.abort();
    }, CONFIG.requestTimeoutMs);

    const abortFromExternalSignal = () => timeoutController.abort();

    if (externalSignal) {
      if (externalSignal.aborted) {
        timeoutController.abort();
      } else {
        externalSignal.addEventListener(
          "abort",
          abortFromExternalSignal,
          { once: true }
        );
      }
    }

    try {
      const response = await fetch(url, {
        ...options,
        signal: timeoutController.signal
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}.`);
      }

      return await response.json();
    } finally {
      window.clearTimeout(timeoutId);

      if (externalSignal) {
        externalSignal.removeEventListener(
          "abort",
          abortFromExternalSignal
        );
      }
    }
  }

  function createEmptyFemaResult() {
    return {
      zone: "—",
      subtype: "",
      specialFloodHazardArea: "",
      staticBaseFloodElevation: null,
      depth: null,
      conclusive: false
    };
  }

  function normalizeZone(value) {
    return normalizeString(value)
      .toUpperCase()
      .replace(/\s+/g, " ");
  }

  function normalizeString(value) {
    if (value == null) {
      return "";
    }

    return String(value).trim();
  }

  function normalizeOptionalNumber(value) {
    const number = Number(value);
    return Number.isFinite(number) ? number : null;
  }

  function classifyFemaResult(fema) {
    if (!fema.conclusive) {
      return "unknown";
    }

    const zone = fema.zone;
    const subtype = fema.subtype.toUpperCase();

    if (
      HIGH_HAZARD_ZONES.has(zone) ||
      fema.specialFloodHazardArea === "T"
    ) {
      return "high";
    }

    if (
      /0\.2\s*PCT|0\.2\s*PERCENT|500[-\s]?YEAR/.test(subtype)
    ) {
      return "moderate";
    }

    if (zone === "X" && subtype) {
      if (/0\.2|500/.test(subtype)) {
        return "moderate";
      }
    }

    if (LOWER_HAZARD_ZONES.has(zone)) {
      return "lower";
    }

    return "unknown";
  }

  function isFiniteCoordinate(latitude, longitude) {
    return (
      Number.isFinite(latitude) &&
      Number.isFinite(longitude)
    );
  }

  function isInsidePhiladelphia(latitude, longitude) {
    const bounds = CONFIG.philadelphiaBounds;

    return (
      latitude >= bounds.south &&
      latitude <= bounds.north &&
      longitude >= bounds.west &&
      longitude <= bounds.east
    );
  }

  function getRiskContent(level) {
    const content = {
      high: {
        badge: "riskHighBadge",
        title: "riskHighTitle",
        text: "riskHighText",
        next: "nextHigh",
        classification: "classHigh"
      },
      moderate: {
        badge: "riskModerateBadge",
        title: "riskModerateTitle",
        text: "riskModerateText",
        next: "nextModerate",
        classification: "classModerate"
      },
      lower: {
        badge: "riskLowerBadge",
        title: "riskLowerTitle",
        text: "riskLowerText",
        next: "nextLower",
        classification: "classLower"
      },
      unknown: {
        badge: "riskUnknownBadge",
        title: "riskUnknownTitle",
        text: "riskUnknownText",
        next: "nextUnknown",
        classification: "classUnknown"
      }
    };

    return content[level] || content.unknown;
  }

  function renderResult(result, options = {}) {
    const risk = getRiskContent(result.riskLevel);
    const shouldMoveFocus = options.moveFocus !== false;

    elements.matchedAddress.textContent = result.displayAddress;

    elements.resultSummary.classList.remove(
      "is-high",
      "is-moderate",
      "is-lower",
      "is-unknown"
    );
    elements.resultSummary.classList.add(
      `is-${result.riskLevel}`
    );

    elements.riskBadge.textContent = t(risk.badge);
    elements.resultSummaryTitle.textContent = t(risk.title);
    elements.resultSummaryText.textContent = t(risk.text);
    elements.nextStepText.textContent = t(risk.next);

    elements.zoneValue.textContent =
      result.fema.zone || "—";
    elements.classificationValue.textContent = t(
      risk.classification
    );
    elements.lookupStatusValue.textContent =
      getLookupStatusText(result.femaStatus);
    elements.dataStatus.textContent =
      getDataStatusText(result.femaStatus);

    elements.results.hidden = false;

    renderPersonalizedGuidance();
    renderMap(result);
    updateMapText(result);

    if (shouldMoveFocus) {
      window.requestAnimationFrame(() => {
        elements.resultsTitle.focus();
        elements.results.scrollIntoView({
          behavior: prefersReducedMotion() ? "auto" : "smooth",
          block: "start"
        });
      });
    }
  }

  function getLookupStatusText(status) {
    if (status === "live") {
      return t("lookupCompleted");
    }

    if (status === "no-feature") {
      return t("lookupNoFeature");
    }

    return t("lookupFailed");
  }

  function getDataStatusText(status) {
    if (status === "live") {
      return t("dataLive");
    }

    if (status === "no-feature") {
      return t("dataNoFeature");
    }

    return t("dataUnavailable");
  }

  function renderChecklist() {
    if (!elements.checklist) {
      return;
    }

    elements.checklist.replaceChildren(
      ...CHECKLIST_GROUPS.map(createChecklistGroup)
    );
  }

  function createChecklistGroup(group, groupIndex) {
    const section = document.createElement("section");
    section.className = "checklist-group";

    const heading = document.createElement("h4");
    heading.textContent = t(group.headingKey);
    section.appendChild(heading);

    group.items.forEach((translationKey, itemIndex) => {
      const label = document.createElement("label");
      label.className = "checklist-item";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = `checklist-${groupIndex}-${itemIndex}`;

      const text = document.createElement("span");
      text.textContent = t(translationKey);

      label.htmlFor = checkbox.id;
      label.append(checkbox, text);
      section.appendChild(label);
    });

    return section;
  }

  function getProfileSelections() {
    const floor =
      document.querySelector(
        'input[name="floor"]:checked'
      )?.value || "";

    const needs = new Set(
      Array.from(
        document.querySelectorAll(
          'input[name="needs"]:checked'
        )
      ).map((input) => input.value)
    );

    return { floor, needs };
  }

  function renderPersonalizedGuidance() {
    if (!elements.personalizedGuidance) {
      return;
    }

    const selections = getProfileSelections();
    const guidanceKeys = [];

    if (selections.floor === "below") {
      guidanceKeys.push("guidanceBelow");
    } else if (selections.floor === "street") {
      guidanceKeys.push("guidanceStreet");
    } else if (selections.floor === "above") {
      guidanceKeys.push("guidanceAbove");
    }

    if (selections.needs.has("elevator")) {
      guidanceKeys.push("guidanceElevator");
    }

    if (selections.needs.has("power")) {
      guidanceKeys.push("guidancePower");
    }

    if (selections.needs.has("assistance")) {
      guidanceKeys.push("guidanceAssistance");
    }

    if (selections.needs.has("pets")) {
      guidanceKeys.push("guidancePets");
    }

    if (selections.needs.has("one-exit")) {
      guidanceKeys.push("guidanceOneExit");
    }

    elements.personalizedGuidance.replaceChildren();

    if (guidanceKeys.length === 0) {
      return;
    }

    const heading = document.createElement("strong");
    heading.textContent = t("guidanceHeading");

    const list = document.createElement("ul");

    guidanceKeys.forEach((key) => {
      const item = document.createElement("li");
      item.textContent = t(key);
      list.appendChild(item);
    });

    elements.personalizedGuidance.append(heading, list);
  }

  function renderMap(result) {
    if (!window.L || !elements.map) {
      return;
    }

    const coordinates = [
      result.latitude,
      result.longitude
    ];

    if (!state.map) {
      state.map = L.map(elements.map, {
        keyboard: true,
        scrollWheelZoom: false,
        zoomControl: true
      }).setView(coordinates, CONFIG.defaultMapZoom);

      L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
          maxZoom: 19,
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
        }
      ).addTo(state.map);
    } else {
      state.map.setView(
        coordinates,
        CONFIG.defaultMapZoom
      );
    }

    if (state.marker) {
      state.marker.remove();
    }

    const popupText =
      `${t("mapPopupPrefix")}: ${result.displayAddress}`;

    state.marker = L.marker(coordinates, {
      keyboard: true,
      title: popupText,
      alt: popupText
    })
      .addTo(state.map)
      .bindPopup(popupText);

    window.setTimeout(() => {
      state.map.invalidateSize();
    }, 100);
  }

  function updateMapText(result) {
    const ariaLabel =
      `${t("mapAriaPrefix")} ${result.displayAddress}`;

    elements.map.setAttribute("aria-label", ariaLabel);
    elements.mapDescription.textContent =
      `${t("mapDescription")} ${result.displayAddress}`;
    elements.femaMapLink.href = CONFIG.femaMapUrl;
  }

  function resetApplication() {
    abortActiveRequest();

    state.result = null;

    elements.addressForm.reset();
    elements.profileForm.reset();
    elements.results.hidden = true;
    elements.matchedAddress.textContent = "";
    elements.personalizedGuidance.replaceChildren();

    setStatus("");
    setLoading(false);

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion() ? "auto" : "smooth"
    });

    elements.addressInput.focus();
  }

  function handlePrint() {
    setDocumentPrintTitle();
    window.print();
  }

  let originalDocumentTitle = document.title;

  function setDocumentPrintTitle() {
    if (!originalDocumentTitle) {
      originalDocumentTitle = document.title;
    }

    if (window.matchMedia("print").matches) {
      document.title = t("printTitle");
    }
  }

  function restoreDocumentTitle() {
    document.title = originalDocumentTitle;
  }

  function prefersReducedMotion() {
    return window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }
})();
