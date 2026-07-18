(() => {
  "use strict";

  const PHILLY_BOUNDS = {
    minLat: 39.867,
    maxLat: 40.138,
    minLng: -75.281,
    maxLng: -74.955
  };

  const PHILLY_GEOCODER =
    "https://citygeo-geocoder-pub.databridge.phila.gov/arcgis/rest/services/Geocoders/Address_Locator/GeocodeServer/findAddressCandidates";

  const FEMA_LAYER_URL =
    "https://hazards.fema.gov/gis/nfhl/rest/services/public/NFHL/MapServer/28/query";

  const translations = {
    en: {
      skip: "Skip to main content",
      navHow: "How it works",
      navWhy: "Why renters",
      eyebrow: "Flood information for Philadelphia renters",
      headline: "Know your risk before the storm.",
      lede: "Check an official FEMA flood zone, understand what the result can and cannot tell you, and make a plan for your actual apartment.",
      trust1: "No login or saved address history",
      trust2: "English and Spanish",
      trust3: "Built for renters and Disabled residents",
      searchTitle: "Start with an address",
      addressLabel: "Philadelphia street address",
      addressHelp: "Use a full street address for the most precise result. Apartment numbers are ignored.",
      searchButton: "Check risk",
      privacy: "Privacy: Your search is sent to Philadelphia's public geocoder and FEMA to check the mapped flood zone. FloodRisk Philly does not save it.",
      resultsEyebrow: "Your result",
      resultsTitle: "Flood information for this location",
      femaKicker: "Official FEMA map",
      rainKicker: "What the map may miss",
      rainTitle: "Heavy rain and sewer flooding",
      rainText: "FEMA maps focus mainly on river and coastal flooding. They do not fully capture basement backups, overwhelmed street drains, or water entering during intense rainfall.",
      rentKicker: "For renters",
      rentTitle: "Your unit and building matter",
      rentText: "Floor level, exits, elevators, power needs, landlord maintenance, and where you keep essential items can change your personal risk.",
      mapTitle: "Map of the searched location",
      mapHelp: "The marker shows the geocoded address. Use FEMA's official map link for a formal map review.",
      femaLink: "Open FEMA Map Service Center",
      plannerEyebrow: "Personalize your plan",
      plannerTitle: "Tell us about your apartment",
      plannerIntro: "These answers stay in your browser and are used only to build the checklist below.",
      floorLegend: "Where is your unit?",
      floorBasement: "Basement or below grade",
      floorGround: "Ground or garden level",
      floorUpper: "Second floor or higher",
      notSure: "Not sure",
      needsLegend: "What should the plan account for?",
      needElevator: "I depend on an elevator or cannot use stairs",
      needPower: "I use powered medical or accessibility equipment",
      needMedication: "I need temperature-sensitive or essential medication",
      needCommunication: "I need accessible alerts or communication support",
      needAnimal: "I have a pet or service animal",
      buildPlan: "Build my checklist",
      checklistEyebrow: "What to do next",
      checklistTitle: "Your flood preparedness checklist",
      printPlan: "Print or save plan",
      howEyebrow: "How it works",
      howTitle: "Three kinds of information, kept separate.",
      step1Title: "Official mapped hazard",
      step1Text: "We query FEMA's National Flood Hazard Layer at the searched point and report the zone returned.",
      step2Title: "Local limits and context",
      step2Text: "We explain what the federal map may miss, including sewer backups, intense rain, and building-specific conditions.",
      step3Title: "Your renter plan",
      step3Text: "You can add floor, exit, disability, power, medication, and animal information to personalize preparedness guidance.",
      whyEyebrow: "Why this exists",
      whyTitle: "Flood tools rarely start with renters.",
      whyText: "Renters may not control drainage, building repairs, elevators, or emergency procedures, but they still face damaged belongings, displacement, missed work, and inaccessible exits. FloodRisk Philly turns a map result into practical questions and actions.",
      limitTitle: "Important limitation",
      limitText: "FloodRisk Philly provides educational information and renter preparedness guidance. It is not an insurance determination, engineering assessment, emergency warning, legal opinion, or guarantee that a property will or will not flood.",
      footerTag: "Plain-language flood information for Philadelphia renters.",
      methodology: "Methodology",
      privacyLink: "Privacy",
      source: "View source",
      searching: "Checking the address and FEMA map…",
      noAddress: "Enter a Philadelphia street address.",
      noMatch: "I couldn't find that address in Philadelphia. Check the street number and spelling.",
      outsidePhilly: "That result appears to be outside Philadelphia. This tool currently supports Philadelphia addresses only.",
      femaUnavailable: "The address was found, but FEMA's service did not return a zone. Try again later or open the official FEMA map.",
      found: "Address found. Your flood information is ready.",
      networkError: "The lookup service did not respond. Check your connection and try again.",
      rightNow: "Right now",
      thisWeek: "This week",
      beforeStorm: "Before storm season",
      complete: "complete"
    },
    es: {
      skip: "Saltar al contenido principal",
      navHow: "Cómo funciona",
      navWhy: "Por qué inquilinos",
      eyebrow: "Información sobre inundaciones para inquilinos de Filadelfia",
      headline: "Conoce tu riesgo antes de la tormenta.",
      lede: "Consulta una zona oficial de inundación de FEMA, entiende lo que el resultado puede y no puede decirte, y crea un plan para tu apartamento.",
      trust1: "Sin cuenta ni historial de direcciones",
      trust2: "Inglés y español",
      trust3: "Diseñado para inquilinos y residentes con discapacidad",
      searchTitle: "Comienza con una dirección",
      addressLabel: "Dirección en Filadelfia",
      addressHelp: "Usa una dirección completa para obtener el resultado más preciso. Se ignoran los números de apartamento.",
      searchButton: "Consultar riesgo",
      privacy: "Privacidad: Tu búsqueda se envía al geocodificador público de Filadelfia y a FEMA para consultar la zona. FloodRisk Philly no la guarda.",
      resultsEyebrow: "Tu resultado",
      resultsTitle: "Información sobre inundaciones para esta ubicación",
      femaKicker: "Mapa oficial de FEMA",
      rainKicker: "Lo que el mapa puede omitir",
      rainTitle: "Lluvia intensa e inundaciones de alcantarillado",
      rainText: "Los mapas de FEMA se enfocan principalmente en inundaciones fluviales y costeras. No reflejan por completo los desbordamientos en sótanos, los desagües saturados o el agua que entra durante lluvias intensas.",
      rentKicker: "Para inquilinos",
      rentTitle: "Tu unidad y tu edificio importan",
      rentText: "El piso, las salidas, los ascensores, las necesidades de energía, el mantenimiento del propietario y dónde guardas artículos esenciales pueden cambiar tu riesgo personal.",
      mapTitle: "Mapa de la ubicación buscada",
      mapHelp: "El marcador muestra la dirección geocodificada. Usa el enlace oficial de FEMA para una revisión formal.",
      femaLink: "Abrir el Centro de Mapas de FEMA",
      plannerEyebrow: "Personaliza tu plan",
      plannerTitle: "Cuéntanos sobre tu apartamento",
      plannerIntro: "Estas respuestas permanecen en tu navegador y solo se usan para crear la lista de abajo.",
      floorLegend: "¿Dónde está tu unidad?",
      floorBasement: "Sótano o debajo del nivel del suelo",
      floorGround: "Planta baja o nivel jardín",
      floorUpper: "Segundo piso o más arriba",
      notSure: "No estoy seguro",
      needsLegend: "¿Qué debe considerar el plan?",
      needElevator: "Dependo de un ascensor o no puedo usar escaleras",
      needPower: "Uso equipo médico o de accesibilidad con electricidad",
      needMedication: "Necesito medicamentos esenciales o sensibles a la temperatura",
      needCommunication: "Necesito alertas accesibles o apoyo de comunicación",
      needAnimal: "Tengo una mascota o animal de servicio",
      buildPlan: "Crear mi lista",
      checklistEyebrow: "Qué hacer ahora",
      checklistTitle: "Tu lista de preparación para inundaciones",
      printPlan: "Imprimir o guardar el plan",
      howEyebrow: "Cómo funciona",
      howTitle: "Tres tipos de información, claramente separados.",
      step1Title: "Peligro oficial cartografiado",
      step1Text: "Consultamos la Capa Nacional de Riesgo de Inundación de FEMA en el punto buscado y mostramos la zona devuelta.",
      step2Title: "Límites y contexto local",
      step2Text: "Explicamos lo que el mapa federal puede omitir, como desbordamientos, lluvias intensas y condiciones específicas del edificio.",
      step3Title: "Tu plan como inquilino",
      step3Text: "Puedes añadir información sobre piso, salidas, discapacidad, electricidad, medicamentos y animales para personalizar la orientación.",
      whyEyebrow: "Por qué existe",
      whyTitle: "Las herramientas de inundación rara vez comienzan con los inquilinos.",
      whyText: "Los inquilinos quizá no controlen el drenaje, las reparaciones, los ascensores o los procedimientos de emergencia, pero aun así enfrentan daños, desplazamiento, pérdida de trabajo y salidas inaccesibles. FloodRisk Philly convierte un resultado cartográfico en preguntas y acciones prácticas.",
      limitTitle: "Limitación importante",
      limitText: "FloodRisk Philly ofrece información educativa y orientación de preparación. No es una determinación de seguro, evaluación de ingeniería, alerta de emergencia, opinión legal ni garantía de que una propiedad se inundará o no.",
      footerTag: "Información clara sobre inundaciones para inquilinos de Filadelfia.",
      methodology: "Metodología",
      privacyLink: "Privacidad",
      source: "Ver código",
      searching: "Consultando la dirección y el mapa de FEMA…",
      noAddress: "Ingresa una dirección en Filadelfia.",
      noMatch: "No pude encontrar esa dirección en Filadelfia. Revisa el número y la ortografía.",
      outsidePhilly: "Ese resultado parece estar fuera de Filadelfia. La herramienta solo admite direcciones de Filadelfia.",
      femaUnavailable: "Se encontró la dirección, pero FEMA no devolvió una zona. Inténtalo más tarde o abre el mapa oficial.",
      found: "Dirección encontrada. La información está lista.",
      networkError: "El servicio no respondió. Revisa tu conexión e inténtalo otra vez.",
      rightNow: "Ahora mismo",
      thisWeek: "Esta semana",
      beforeStorm: "Antes de la temporada de tormentas",
      complete: "completado"
    }
  };

  const zoneInfo = {
    AE: {
      level: "high",
      en: ["High mapped flood risk", "This area has a 1% or greater annual chance of flooding, with flood elevations calculated by FEMA.", "A FEMA zone does not predict exactly when or how deep a specific apartment will flood."],
      es: ["Riesgo alto cartografiado", "Esta zona tiene una probabilidad anual de inundación del 1% o más, con elevaciones calculadas por FEMA.", "La zona no predice cuándo ni a qué profundidad se inundará un apartamento específico."]
    },
    A: {
      level: "high",
      en: ["High mapped flood risk", "This area has a 1% or greater annual flood chance, but FEMA has not provided detailed flood elevations here.", "Building elevation and unit level are especially important."],
      es: ["Riesgo alto cartografiado", "Esta zona tiene una probabilidad anual de inundación del 1% o más, pero FEMA no ofrece elevaciones detalladas aquí.", "La elevación del edificio y el piso de la unidad son especialmente importantes."]
    },
    AO: {
      level: "high",
      en: ["High mapped flood risk", "FEMA maps shallow sheet-flow flooding here, often from water moving across the ground.", "Check the mapped depth on FEMA's official map and plan for blocked ground-level exits."],
      es: ["Riesgo alto cartografiado", "FEMA muestra inundación superficial por agua que se desplaza sobre el terreno.", "Consulta la profundidad en el mapa oficial y planifica salidas bloqueadas a nivel del suelo."]
    },
    AH: {
      level: "high",
      en: ["High mapped flood risk", "FEMA maps shallow ponding or flooding, generally one to three feet deep.", "Low entrances, garden units, and basement spaces may face serious risk."],
      es: ["Riesgo alto cartografiado", "FEMA muestra acumulación o inundación poco profunda, generalmente de uno a tres pies.", "Las entradas bajas, unidades jardín y sótanos pueden enfrentar riesgo grave."]
    },
    VE: {
      level: "high",
      en: ["High coastal flood risk", "This is a coastal high-hazard area where waves can add destructive force to flooding.", "Use FEMA's official map and city emergency guidance for detailed planning."],
      es: ["Riesgo costero alto", "Esta es una zona costera de alto peligro donde las olas pueden aumentar la fuerza destructiva.", "Usa el mapa oficial y la orientación municipal para planificar."]
    },
    V: {
      level: "high",
      en: ["High coastal flood risk", "This is a coastal high-hazard area without detailed flood elevation data.", "Wave action and access routes may be significant concerns."],
      es: ["Riesgo costero alto", "Esta es una zona costera de alto peligro sin datos detallados de elevación.", "Las olas y las rutas de acceso pueden ser preocupaciones importantes."]
    },
    X500: {
      level: "moderate",
      en: ["Moderate mapped flood risk", "This area is outside the highest-risk zone but still has a mapped 0.2% to 1% annual flood chance.", "Intense rain, drainage problems, and sewer backups can still cause damaging flooding."],
      es: ["Riesgo moderado cartografiado", "Esta zona está fuera del riesgo más alto, pero aún tiene una probabilidad anual cartografiada de entre 0.2% y 1%.", "La lluvia intensa, el drenaje y los desbordamientos aún pueden causar daños."]
    },
    X: {
      level: "lower",
      en: ["Lower mapped river or coastal risk", "FEMA places this point outside its mapped 1% and 0.2% annual-chance flood areas.", "Lower mapped risk does not mean no risk. Street flooding, sewer backups, and building failures may not appear on this map."],
      es: ["Menor riesgo fluvial o costero cartografiado", "FEMA ubica este punto fuera de sus zonas de probabilidad anual del 1% y 0.2%.", "Menor riesgo no significa riesgo cero. Las inundaciones de calles y alcantarillado pueden no aparecer."]
    },
    D: {
      level: "unknown",
      en: ["Risk not determined", "FEMA has not completed a detailed flood analysis for this area.", "No mapped determination is not the same as no flood risk."],
      es: ["Riesgo no determinado", "FEMA no ha completado un análisis detallado para esta zona.", "La falta de una determinación no significa que no exista riesgo."]
    },
    NONE: {
      level: "lower",
      en: ["No FEMA flood zone returned at this point", "The FEMA layer did not identify a mapped special flood hazard zone at the searched point.", "This does not rule out street flooding, sewer backups, or rainfall-related flooding."],
      es: ["FEMA no devolvió una zona en este punto", "La capa de FEMA no identificó una zona especial de peligro en el punto buscado.", "Esto no descarta inundaciones de calles, alcantarillado o lluvias intensas."]
    }
  };

  const checklistText = {
    en: {
      baseNow: [
        "Save the address of your safest exit and a backup exit.",
        "Put identification, medication information, and key phone numbers in a waterproof bag.",
        "Charge your phone and a portable battery before severe weather."
      ],
      baseWeek: [
        "Ask your landlord or property manager about past water entry, sewer backups, and the building's emergency plan.",
        "Photograph your belongings and save the images somewhere you can access away from home.",
        "Review whether renters insurance covers your belongings and whether separate flood coverage is available."
      ],
      baseSeason: [
        "Sign up for ReadyPhiladelphia emergency alerts.",
        "Keep essential items above floor level and away from basement storage.",
        "Choose a person outside your building who can check in during a storm."
      ],
      basement: [
        "Do not remain in a basement unit when water begins entering or a flood warning affects your area.",
        "Keep shoes, mobility equipment, medication, and a go-bag within reach of the exit."
      ],
      ground: [
        "Keep a clear route from your unit to higher ground or an upper floor.",
        "Move irreplaceable and essential items off the floor before heavy rain."
      ],
      elevator: [
        "Ask building management what happens when elevators lose power and identify an accessible alternative exit.",
        "Arrange assistance in advance without relying on firefighters to carry you."
      ],
      power: [
        "Write down the wattage and backup-power requirements for essential equipment.",
        "Plan where you can safely go if power is unavailable for longer than your battery supply."
      ],
      medication: [
        "Keep an insulated container and reusable cold packs available for temperature-sensitive medication.",
        "Maintain a current medication list and refill essential prescriptions before major storms when possible."
      ],
      communication: [
        "Enable emergency alerts in the format that works for you and identify a backup way to receive warnings.",
        "Prepare a short communication card explaining your access needs."
      ],
      animal: [
        "Pack food, water, medication, identification, and a leash or carrier for your animal.",
        "Confirm that your evacuation destination can accommodate your pet or service animal."
      ],
      high: [
        "Treat flood watches and warnings seriously and decide early where you will go.",
        "Avoid storing essential belongings or mobility equipment below the expected flood level."
      ]
    },
    es: {
      baseNow: [
        "Guarda la dirección de tu salida más segura y una salida alternativa.",
        "Pon identificación, información médica y teléfonos importantes en una bolsa impermeable.",
        "Carga tu teléfono y una batería portátil antes del mal tiempo."
      ],
      baseWeek: [
        "Pregunta al propietario sobre entradas de agua anteriores, desbordamientos y el plan de emergencia del edificio.",
        "Fotografía tus pertenencias y guarda las imágenes en un lugar accesible fuera de casa.",
        "Revisa qué cubre tu seguro de inquilino y si existe cobertura separada contra inundaciones."
      ],
      baseSeason: [
        "Inscríbete en las alertas de emergencia ReadyPhiladelphia.",
        "Mantén artículos esenciales por encima del piso y fuera del sótano.",
        "Elige a una persona fuera del edificio que pueda comunicarse contigo durante una tormenta."
      ],
      basement: [
        "No permanezcas en un sótano cuando entre agua o haya una advertencia de inundación.",
        "Mantén zapatos, equipo de movilidad, medicamentos y una bolsa de emergencia cerca de la salida."
      ],
      ground: [
        "Mantén una ruta libre hacia terreno más alto o un piso superior.",
        "Levanta del piso los artículos esenciales antes de lluvias intensas."
      ],
      elevator: [
        "Pregunta qué ocurre cuando el ascensor pierde electricidad e identifica una salida accesible alternativa.",
        "Organiza ayuda con anticipación sin depender de que los bomberos te carguen."
      ],
      power: [
        "Anota el consumo y los requisitos de batería de tu equipo esencial.",
        "Planifica un lugar seguro si la electricidad falta más tiempo que la duración de tus baterías."
      ],
      medication: [
        "Ten un recipiente aislado y paquetes fríos para medicamentos sensibles a la temperatura.",
        "Mantén una lista actualizada y renueva medicamentos esenciales antes de tormentas importantes cuando sea posible."
      ],
      communication: [
        "Activa alertas en un formato accesible e identifica una forma alternativa de recibir avisos.",
        "Prepara una tarjeta breve que explique tus necesidades de acceso."
      ],
      animal: [
        "Empaca comida, agua, medicamentos, identificación y correa o transportadora.",
        "Confirma que tu destino pueda recibir a tu mascota o animal de servicio."
      ],
      high: [
        "Toma en serio las vigilancias y advertencias y decide temprano adónde irás.",
        "No guardes pertenencias esenciales ni equipo de movilidad debajo del nivel esperado del agua."
      ]
    }
  };

  const state = {
    lang: localStorage.getItem("floodrisk-language") === "es" ? "es" : "en",
    map: null,
    marker: null,
    zone: "NONE",
    address: ""
  };

  const el = (id) => document.getElementById(id);
  const t = (key) => translations[state.lang][key] || key;

  function setLanguage(lang) {
    state.lang = lang;
    document.documentElement.lang = lang;
    localStorage.setItem("floodrisk-language", lang);

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.dataset.i18n;
      if (translations[lang][key]) node.textContent = translations[lang][key];
    });

    el("language-toggle").setAttribute(
      "aria-label",
      lang === "en" ? "Cambiar a español" : "Switch to English"
    );

    if (!el("results").hidden) renderZone(state.zone);
  }

  function setStatus(message, type = "") {
    const status = el("status");
    status.textContent = message;
    status.className = `status ${type}`.trim();
  }

  function normalizeAddress(value) {
    return value
      .replace(/\s+(apt|apartment|unit|#)\s*[\w-]+.*$/i, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function isInPhiladelphia(lat, lng) {
    return (
      lat >= PHILLY_BOUNDS.minLat &&
      lat <= PHILLY_BOUNDS.maxLat &&
      lng >= PHILLY_BOUNDS.minLng &&
      lng <= PHILLY_BOUNDS.maxLng
    );
  }

  async function geocodeAddress(address) {
    const params = new URLSearchParams({
      SingleLine: address,
      outFields: "Match_addr,Addr_type,City,Subregion,Region,Postal",
      outSR: "4326",
      maxLocations: "5",
      f: "json"
    });

    const response = await fetch(`${PHILLY_GEOCODER}?${params}`);
    if (!response.ok) throw new Error("geocoder");
    const data = await response.json();

    const candidates = (data.candidates || [])
      .filter((candidate) => candidate.location)
      .sort((a, b) => (b.score || 0) - (a.score || 0));

    if (!candidates.length) return null;

    const best = candidates[0];
    return {
      address: best.address || best.attributes?.Match_addr || address,
      lat: Number(best.location.y),
      lng: Number(best.location.x),
      score: Number(best.score || 0)
    };
  }

  async function queryFemaZone(lat, lng) {
    const params = new URLSearchParams({
      where: "1=1",
      geometry: `${lng},${lat}`,
      geometryType: "esriGeometryPoint",
      inSR: "4326",
      spatialRel: "esriSpatialRelIntersects",
      outFields: "FLD_ZONE,ZONE_SUBTY,SFHA_TF",
      returnGeometry: "false",
      f: "json"
    });

    const response = await fetch(`${FEMA_LAYER_URL}?${params}`);
    if (!response.ok) throw new Error("fema");
    const data = await response.json();
    if (data.error) throw new Error("fema");

    const feature = data.features?.[0];
    if (!feature) return "NONE";

    const attrs = feature.attributes || {};
    const raw = String(attrs.FLD_ZONE || "").toUpperCase().trim();
    const subtype = String(attrs.ZONE_SUBTY || "").toUpperCase();

    if (raw === "X" && /0\.2|500|MODERATE/.test(subtype)) return "X500";
    if (zoneInfo[raw]) return raw;
    return raw || "NONE";
  }

  function renderZone(zone) {
    const info = zoneInfo[zone] || zoneInfo.NONE;
    const copy = info[state.lang];
    const badge = el("zone-badge");

    badge.textContent = zone === "NONE" ? "N/A" : zone;
    badge.className = `zone-badge ${info.level}`;
    el("zone-title").textContent = copy[0];
    el("risk-level").textContent =
      info.level === "high"
        ? (state.lang === "en" ? "High risk" : "Riesgo alto")
        : info.level === "moderate"
          ? (state.lang === "en" ? "Moderate risk" : "Riesgo moderado")
          : info.level === "lower"
            ? (state.lang === "en" ? "Lower mapped risk" : "Menor riesgo cartografiado")
            : (state.lang === "en" ? "Undetermined" : "No determinado");
    el("zone-explanation").textContent = copy[1];
    el("zone-caveat").textContent = copy[2];
  }

  function renderMap(lat, lng, label) {
    if (!window.L) return;

    if (!state.map) {
      state.map = L.map("map", { scrollWheelZoom: false }).setView([lat, lng], 14);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(state.map);
    } else {
      state.map.setView([lat, lng], 14);
    }

    if (state.marker) state.marker.remove();
    state.marker = L.marker([lat, lng]).addTo(state.map).bindPopup(label).openPopup();
    window.setTimeout(() => state.map.invalidateSize(), 100);
  }

  function buildFemaLink(lat, lng) {
    const url = new URL("https://msc.fema.gov/portal/search");
    url.searchParams.set("AddressQuery", `${lat},${lng}`);
    el("fema-link").href = url.toString();
  }

  async function handleAddressSubmit(event) {
    event.preventDefault();
    const input = el("address");
    const address = normalizeAddress(input.value);

    if (!address) {
      setStatus(t("noAddress"), "error");
      input.focus();
      return;
    }

    const button = el("search-button");
    button.disabled = true;
    setStatus(t("searching"));

    try {
      const place = await geocodeAddress(`${address}, Philadelphia, PA`);
      if (!place || place.score < 70) {
        setStatus(t("noMatch"), "error");
        return;
      }

      if (!isInPhiladelphia(place.lat, place.lng)) {
        setStatus(t("outsidePhilly"), "error");
        return;
      }

      state.address = place.address;
      el("matched-address").textContent = place.address;
      renderMap(place.lat, place.lng, place.address);
      buildFemaLink(place.lat, place.lng);

      try {
        state.zone = await queryFemaZone(place.lat, place.lng);
        renderZone(state.zone);
        setStatus(t("found"), "success");
      } catch {
        state.zone = "NONE";
        renderZone(state.zone);
        setStatus(t("femaUnavailable"), "error");
      }

      el("results").hidden = false;
      el("checklist-section").hidden = true;
      requestAnimationFrame(() => {
        el("results-title").focus?.();
        el("results").scrollIntoView({ behavior: "smooth", block: "start" });
      });
    } catch {
      setStatus(t("networkError"), "error");
    } finally {
      button.disabled = false;
    }
  }

  function unique(items) {
    return [...new Set(items)];
  }

  function makeChecklist(floor, needs) {
    const copy = checklistText[state.lang];
    const groups = {
      now: [...copy.baseNow],
      week: [...copy.baseWeek],
      season: [...copy.baseSeason]
    };

    if (floor === "basement") groups.now.push(...copy.basement);
    if (floor === "ground") groups.week.push(...copy.ground);
    if (needs.includes("elevator")) groups.week.push(...copy.elevator);
    if (needs.includes("power")) groups.now.push(copy.power[0], copy.power[1]);
    if (needs.includes("medication")) groups.now.push(copy.medication[0], copy.medication[1]);
    if (needs.includes("communication")) groups.week.push(...copy.communication);
    if (needs.includes("animal")) groups.season.push(...copy.animal);

    const level = (zoneInfo[state.zone] || zoneInfo.NONE).level;
    if (level === "high") groups.now.push(...copy.high);

    return {
      now: unique(groups.now),
      week: unique(groups.week),
      season: unique(groups.season)
    };
  }

  function renderChecklist(groups) {
    const container = el("checklist-groups");
    container.innerHTML = "";

    const sections = [
      ["now", t("rightNow")],
      ["week", t("thisWeek")],
      ["season", t("beforeStorm")]
    ];

    let itemIndex = 0;
    sections.forEach(([key, heading]) => {
      const section = document.createElement("section");
      section.className = "checklist-group";

      const title = document.createElement("h3");
      title.textContent = heading;
      section.appendChild(title);

      groups[key].forEach((text) => {
        itemIndex += 1;
        const id = `check-${itemIndex}`;
        const label = document.createElement("label");
        label.className = "checklist-item";
        label.htmlFor = id;

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = id;
        checkbox.addEventListener("change", updateProgress);

        const span = document.createElement("span");
        span.textContent = text;

        label.append(checkbox, span);
        section.appendChild(label);
      });

      container.appendChild(section);
    });

    el("checklist-section").hidden = false;
    updateProgress();
    el("checklist-section").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function updateProgress() {
    const boxes = [...document.querySelectorAll(".checklist-item input")];
    const completed = boxes.filter((box) => box.checked).length;
    const percent = boxes.length ? Math.round((completed / boxes.length) * 100) : 0;
    el("progress-text").textContent = `${percent}% ${t("complete")}`;
    el("progress-bar").style.width = `${percent}%`;
    const progress = document.querySelector(".progress-track");
    progress.setAttribute("aria-valuenow", String(percent));
  }

  function handlePlannerSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const floor = data.get("floor") || "unknown";
    const needs = data.getAll("needs");
    renderChecklist(makeChecklist(floor, needs));
  }

  function init() {
    setLanguage(state.lang);
    el("language-toggle").addEventListener("click", () => {
      setLanguage(state.lang === "en" ? "es" : "en");
    });
    el("address-form").addEventListener("submit", handleAddressSubmit);
    el("planner-form").addEventListener("submit", handlePlannerSubmit);
    el("print-button").addEventListener("click", () => window.print());
  }

  document.addEventListener("DOMContentLoaded", init);
})();
