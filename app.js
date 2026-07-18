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
      vision: [
        "Keep a tactile or consistently organized path to your exits and avoid moving essential items during a storm.",
        "Store emergency instructions in an accessible format and identify someone who can describe changing conditions."
      ],
      hearing: [
        "Enable visual and vibration alerts for severe weather and power loss.",
        "Choose a person who can relay spoken emergency announcements by text or another accessible method."
      ],
      alone: [
        "Set specific check-in times with at least one trusted person before severe weather begins.",
        "Share your building access instructions and backup contact information with that person."
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
      vision: [
        "Mantén una ruta táctil u organizada de forma constante hacia las salidas.",
        "Guarda instrucciones de emergencia en un formato accesible e identifica a alguien que pueda describir las condiciones."
      ],
      hearing: [
        "Activa alertas visuales y por vibración para clima severo y cortes de electricidad.",
        "Elige a una persona que pueda enviarte por texto los anuncios de emergencia hablados."
      ],
      alone: [
        "Acuerda horarios específicos de comunicación con una persona de confianza antes del mal tiempo.",
        "Comparte con esa persona las instrucciones de acceso al edificio y contactos alternativos."
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


  const priorityText = {
    en: {
      labels:{high:"High priority",medium:"Elevated priority",standard:"Standard preparation"},
      summaries:{high:"Your answers suggest that flooding or loss of building access could create an immediate safety or health problem. Make the first actions below part of your near-term plan.",medium:"Your answers suggest that building conditions or access needs could make a flood more disruptive. A few specific preparations would meaningfully reduce that risk.",standard:"Your answers do not raise an immediate high-priority concern, but basic preparation still matters because FEMA maps do not capture every kind of flooding."},
      actions:{highZone:"Decide now where you would go if a flood warning affects this address.",basement:"Plan to leave a basement or below-grade unit before water begins entering.",ground:"Move essential items and mobility equipment off the floor before severe rain.",elevator:"Identify an accessible exit that does not depend on the elevator.",power:"Confirm backup power and a safe destination before batteries run low.",medication:"Prepare temperature control and a current medication list.",communication:"Set up accessible alerts and a backup person who can relay warnings.",alone:"Arrange scheduled check-ins with a trusted person.",animal:"Prepare a carrier, leash, food, water, and medication for your animal.",standard:"Save emergency alerts, protect important documents, and review your exits."},
      landlord:{pastFlooding:"Has water ever entered this unit, basement, lobby, or mechanical room?",sewer:"Has the building had sewer backups or recurring drainage problems?",elevator:"What is the accessible evacuation plan if the elevator loses power?",power:"Does the building have generator power, and what systems does it support?",exits:"Which exits remain usable during flooding or a power outage?",alerts:"How does management notify tenants who cannot hear or see standard alerts?",maintenance:"Who should tenants contact after hours for flooding or water intrusion?",storage:"Is there a safer place above ground level for essential equipment or belongings?"}
    },
    es: {
      labels:{high:"Prioridad alta",medium:"Prioridad elevada",standard:"Preparación estándar"},
      summaries:{high:"Tus respuestas sugieren que una inundación o la pérdida de acceso al edificio podría crear un problema inmediato de salud o seguridad. Incluye pronto las primeras acciones.",medium:"Tus respuestas sugieren que el edificio o tus necesidades de acceso podrían hacer una inundación más perjudicial. Algunas preparaciones específicas reducirían ese riesgo.",standard:"Tus respuestas no muestran una preocupación inmediata de alta prioridad, pero la preparación básica sigue siendo importante porque FEMA no refleja todos los tipos de inundación."},
      actions:{highZone:"Decide ahora adónde irías si una advertencia afecta esta dirección.",basement:"Planea salir de un sótano antes de que empiece a entrar agua.",ground:"Levanta del piso los artículos esenciales y el equipo de movilidad antes de lluvias severas.",elevator:"Identifica una salida accesible que no dependa del ascensor.",power:"Confirma energía de respaldo y un destino seguro antes de que se agoten las baterías.",medication:"Prepara control de temperatura y una lista actualizada de medicamentos.",communication:"Configura alertas accesibles y una persona alternativa que pueda comunicar avisos.",alone:"Organiza horarios de comunicación con una persona de confianza.",animal:"Prepara transportadora, correa, comida, agua y medicamentos para tu animal.",standard:"Guarda alertas de emergencia, protege documentos y revisa tus salidas."},
      landlord:{pastFlooding:"¿Ha entrado agua antes en esta unidad, sótano, vestíbulo o sala mecánica?",sewer:"¿Ha tenido el edificio desbordamientos de alcantarillado o problemas de drenaje?",elevator:"¿Cuál es el plan de evacuación accesible si el ascensor pierde electricidad?",power:"¿Tiene el edificio generador y qué sistemas mantiene?",exits:"¿Qué salidas siguen disponibles durante una inundación o corte eléctrico?",alerts:"¿Cómo avisa la administración a inquilinos que no pueden oír o ver las alertas estándar?",maintenance:"¿A quién deben llamar los inquilinos fuera de horario por agua o inundación?",storage:"¿Existe un lugar más seguro sobre el nivel del suelo para equipo o pertenencias esenciales?"}
    }
  };

  const state = {
    lang: localStorage.getItem("floodrisk-language") === "es" ? "es" : "en",
    map: null,
    marker: null,
    zone: "NONE",
    address: "",
    zip: "",
    matchScore: 0
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


  function resultUrl() {
    const url = new URL(window.location.href);
    if (state.address) url.searchParams.set("address", state.address);
    else url.searchParams.delete("address");
    return url.toString();
  }

  function updateBrowserUrl() {
    if (!state.address) return;
    const url = new URL(window.location.href);
    url.searchParams.set("address", state.address);
    window.history.replaceState({ address: state.address }, "", url);
  }

  function planAsText() {
    const lines = [];
    lines.push("FloodRisk Philly");
    if (state.address) lines.push(state.address);
    if (state.zone) lines.push(`FEMA zone: ${state.zone}`);
    lines.push("");

    document.querySelectorAll(".checklist-group").forEach((group) => {
      const heading = group.querySelector("h3")?.textContent || "";
      lines.push(heading);
      group.querySelectorAll(".checklist-item").forEach((item) => {
        const checked = item.querySelector("input")?.checked ? "[x]" : "[ ]";
        const text = item.querySelector("span")?.textContent || "";
        lines.push(`${checked} ${text}`);
      });
      lines.push("");
    });

    lines.push(
      state.lang === "en"
        ? "Educational guidance only. Follow official emergency instructions."
        : "Solo orientación educativa. Sigue las instrucciones oficiales de emergencia."
    );
    return lines.join("\n");
  }


  function reportListItems(selector) {
    return Array.from(document.querySelectorAll(selector))
      .map((item) => item.textContent.trim())
      .filter(Boolean);
  }

  function generateReport() {
    const planner = new FormData(el("planner-form"));
    const contactName = String(planner.get("contactName") || "").trim();
    const contactPhone = String(planner.get("contactPhone") || "").trim();
    const buildingContact = String(planner.get("buildingContact") || "").trim();
    const priority = el("priority-badge").textContent.trim() || "—";
    const actions = reportListItems("#priority-now-list li");
    const questions = reportListItems("#landlord-question-list li");
    const checklist = Array.from(document.querySelectorAll(".checklist-item")).map((item) => ({
      checked: Boolean(item.querySelector("input")?.checked),
      text: item.querySelector("span")?.textContent.trim() || ""
    }));
    const alerts = state.alerts.map((feature) => feature.properties?.event).filter(Boolean);
    const date = new Date().toLocaleDateString();

    const esc = (value) =>
      String(value || "").replace(/[&<>"']/g, (char) => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
      }[char]));

    const report = `<!doctype html>
<html lang="${state.lang}">
<head>
<meta charset="utf-8">
<title>FloodRisk Philly preparedness report</title>
<style>
  @page { size: letter; margin: .45in; }
  * { box-sizing: border-box; }
  body { margin: 0; color: #0b2940; font: 12px/1.35 Arial, sans-serif; }
  header { display:flex; justify-content:space-between; border-bottom:4px solid #0b716f; padding-bottom:10px; }
  h1 { margin:0; font-size:25px; }
  h2 { margin:12px 0 6px; font-size:15px; }
  p { margin:4px 0; }
  .tag { display:inline-block; padding:5px 9px; background:#0b2940; color:white; border-radius:20px; font-weight:bold; }
  .grid { display:grid; grid-template-columns:1fr 1fr; gap:10px; }
  .box { border:1px solid #cbd7dc; border-radius:8px; padding:9px; break-inside:avoid; }
  ul { margin:5px 0; padding-left:18px; }
  li { margin:3px 0; }
  .check { list-style:none; padding:0; columns:2; column-gap:20px; }
  .check li { break-inside:avoid; }
  footer { margin-top:10px; padding-top:7px; border-top:1px solid #cbd7dc; color:#526a78; font-size:9px; }
  @media print { button { display:none; } }
</style>
</head>
<body>
<header>
  <div><h1>FloodRisk Philly</h1><p>${state.lang === "en" ? "My Flood Preparedness Plan" : "Mi plan de preparación para inundaciones"}</p></div>
  <div><span class="tag">${esc(priority)}</span><p>${esc(date)}</p></div>
</header>
<section class="grid">
  <div class="box"><h2>${state.lang === "en" ? "Address and mapped hazard" : "Dirección y peligro cartografiado"}</h2>
    <p><strong>${esc(state.address)}</strong></p><p>ZIP: ${esc(state.zip || "—")}</p><p>FEMA: ${esc(state.zone || "—")}</p>
  </div>
  <div class="box"><h2>${state.lang === "en" ? "Current official alerts" : "Alertas oficiales actuales"}</h2>
    ${alerts.length ? `<ul>${alerts.map(a => `<li>${esc(a)}</li>`).join("")}</ul>` : `<p>${state.lang === "en" ? "No relevant active alerts loaded when generated." : "No se cargaron alertas activas relevantes."}</p>`}
  </div>
  <div class="box"><h2>${state.lang === "en" ? "Do first" : "Haz esto primero"}</h2><ul>${actions.map(a => `<li>${esc(a)}</li>`).join("")}</ul></div>
  <div class="box"><h2>${state.lang === "en" ? "Ask your landlord" : "Preguntas para el propietario"}</h2><ul>${questions.map(q => `<li>${esc(q)}</li>`).join("")}</ul></div>
  <div class="box"><h2>${state.lang === "en" ? "Emergency contacts" : "Contactos de emergencia"}</h2>
    <p><strong>${state.lang === "en" ? "Trusted contact" : "Contacto de confianza"}:</strong> ${esc(contactName || "—")} ${esc(contactPhone)}</p>
    <p><strong>${state.lang === "en" ? "Building contact" : "Contacto del edificio"}:</strong> ${esc(buildingContact || "—")}</p>
    <p><strong>911</strong> — ${state.lang === "en" ? "Immediate danger" : "Peligro inmediato"}</p>
    <p><strong>311</strong> — ${state.lang === "en" ? "Philadelphia non-emergency services" : "Servicios no urgentes de Filadelfia"}</p>
  </div>
  <div class="box"><h2>${state.lang === "en" ? "Checklist" : "Lista"}</h2>
    <ul class="check">${checklist.map(i => `<li>${i.checked ? "☑" : "☐"} ${esc(i.text)}</li>`).join("")}</ul>
  </div>
</section>
<footer>
  ${state.lang === "en"
    ? "Educational planning aid only. This is not an emergency warning, engineering assessment, insurance determination, or guarantee that a property will not flood. Follow official instructions."
    : "Solo ayuda educativa. No es una advertencia de emergencia, evaluación de ingeniería, determinación de seguro ni garantía. Sigue las instrucciones oficiales."}
</footer>
<script>window.addEventListener("load", () => window.print());<\/script>
</body></html>`;

    const reportWindow = window.open("", "_blank", "noopener,noreferrer");
    if (!reportWindow) {
      setStatus(
        state.lang === "en"
          ? "Your browser blocked the report window. Allow pop-ups and try again."
          : "El navegador bloqueó la ventana del informe. Permite ventanas emergentes.",
        "error"
      );
      return;
    }
    reportWindow.document.open();
    reportWindow.document.write(report);
    reportWindow.document.close();
  }


  async function shareResult() {
    const shareData = {
      title: "FloodRisk Philly",
      text:
        state.lang === "en"
          ? `Flood information for ${state.address}`
          : `Información de inundación para ${state.address}`,
      url: resultUrl()
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        setStatus(
          state.lang === "en" ? "Result link copied." : "Enlace copiado.",
          "success"
        );
      }
    } catch (error) {
      if (error?.name !== "AbortError") {
        setStatus(
          state.lang === "en"
            ? "The result could not be shared."
            : "No se pudo compartir el resultado.",
          "error"
        );
      }
    }
  }

  async function copyPlan() {
    try {
      await navigator.clipboard.writeText(planAsText());
      setStatus(
        state.lang === "en" ? "Plan copied." : "Plan copiado.",
        "success"
      );
    } catch {
      setStatus(
        state.lang === "en"
          ? "The plan could not be copied. Try downloading it instead."
          : "No se pudo copiar el plan. Intenta descargarlo.",
        "error"
      );
    }
  }

  function downloadPlan() {
    const blob = new Blob([planAsText()], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "floodrisk-philly-plan.txt";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  function startNewSearch() {
    el("results").hidden = true;
    el("checklist-section").hidden = true;
    el("priority-section").hidden = true;
    state.address = "";
    state.zone = "NONE";
    document.title = "FloodRisk Philly";
    const url = new URL(window.location.href);
    url.searchParams.delete("address");
    window.history.replaceState({}, "", url);
    el("address").value = "";
    el("address").focus();
    setStatus("");
    el("search-card").scrollIntoView({ behavior: "smooth", block: "start" });
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

  async function fetchWithTimeout(url, options = {}, timeoutMs = 12000) {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), timeoutMs);
    try {
      return await fetch(url, { ...options, signal: controller.signal });
    } finally {
      window.clearTimeout(timeout);
    }
  }

  async function geocodeAddress(address) {
    const params = new URLSearchParams({
      SingleLine: address,
      outFields: "Match_addr,Addr_type,City,Subregion,Region,Postal",
      outSR: "4326",
      maxLocations: "5",
      f: "json"
    });

    const response = await fetchWithTimeout(`${PHILLY_GEOCODER}?${params}`);
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
      score: Number(best.score || 0),
      zip: String(best.attributes?.Postal || "").trim(),
      addressType: String(best.attributes?.Addr_type || "").trim()
    };
  }


  function weatherCopy() {
    return state.lang === "en"
      ? {
          clear: "No active flood or severe-weather alerts",
          active: (count) => `${count} active alert${count === 1 ? "" : "s"}`,
          unavailable: "Alerts unavailable",
          none: "No active flood or severe-weather alerts were returned for this point. Conditions can still change quickly.",
          unavailableText: "Current alerts could not be loaded. Check the National Weather Service before making weather decisions.",
          details: "Read official alert"
        }
      : {
          clear: "No hay alertas activas de inundación o clima severo",
          active: (count) => `${count} alerta${count === 1 ? "" : "s"} activa${count === 1 ? "" : "s"}`,
          unavailable: "Alertas no disponibles",
          none: "No se devolvieron alertas activas para este punto. Las condiciones todavía pueden cambiar rápidamente.",
          unavailableText: "No se pudieron cargar las alertas actuales. Consulta el Servicio Meteorológico Nacional.",
          details: "Leer alerta oficial"
        };
  }

  function renderWeatherAlerts(alerts, failed = false) {
    const copy = weatherCopy();
    const badge = el("weather-status-badge");
    const list = el("weather-alert-list");
    list.innerHTML = "";

    if (failed) {
      badge.textContent = copy.unavailable;
      badge.className = "weather-status-badge unavailable";
      el("weather-summary").textContent = copy.unavailableText;
      return;
    }

    if (!alerts.length) {
      badge.textContent = copy.clear;
      badge.className = "weather-status-badge clear";
      el("weather-summary").textContent = copy.none;
      return;
    }

    badge.textContent = copy.active(alerts.length);
    badge.className = "weather-status-badge alert";
    el("weather-summary").textContent =
      state.lang === "en"
        ? "An active alert can change what you should do today. Follow official instructions."
        : "Una alerta activa puede cambiar lo que debes hacer hoy. Sigue las instrucciones oficiales.";

    alerts.slice(0, 4).forEach((feature) => {
      const p = feature.properties || {};
      const card = document.createElement("article");
      card.className = "weather-alert-card";

      const title = document.createElement("h3");
      title.textContent = p.event || (state.lang === "en" ? "Weather alert" : "Alerta meteorológica");

      const timing = document.createElement("p");
      const end = p.ends || p.expires;
      timing.textContent = end
        ? `${state.lang === "en" ? "Until" : "Hasta"} ${new Date(end).toLocaleString()}`
        : "";

      const desc = document.createElement("p");
      desc.textContent = String(p.headline || p.description || "").replace(/\s+/g, " ").slice(0, 280);

      const link = document.createElement("a");
      link.href = p["@id"] || feature.id || "https://www.weather.gov/phi/";
      link.target = "_blank";
      link.rel = "noopener";
      link.textContent = copy.details;

      card.append(title, timing, desc, link);
      list.appendChild(card);
    });
  }

  async function loadWeatherAlerts(lat, lng) {
    const badge = el("weather-status-badge");
    badge.textContent = state.lang === "en" ? "Checking…" : "Consultando…";
    badge.className = "weather-status-badge";
    try {
      const response = await fetchWithTimeout(
        `https://api.weather.gov/alerts/active?point=${lat},${lng}`,
        { headers: { Accept: "application/geo+json" } },
        10000
      );
      if (!response.ok) throw new Error("weather");
      const data = await response.json();
      const relevant = (data.features || []).filter((feature) => {
        const event = String(feature.properties?.event || "").toLowerCase();
        return /flood|flash|thunderstorm|tornado|hurricane|tropical|storm surge|coastal/.test(event);
      });
      state.alerts = relevant;
      renderWeatherAlerts(relevant);
    } catch {
      state.alerts = [];
      renderWeatherAlerts([], true);
    }
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

    const response = await fetchWithTimeout(`${FEMA_LAYER_URL}?${params}`);
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


  function renderMeaning(zone) {
    const info = zoneInfo[zone] || zoneInfo.NONE;
    const level = info.level;
    const messages = {
      en: {
        high: "FEMA maps a high flood hazard at this point. Early action and a clear evacuation plan matter.",
        moderate: "FEMA maps some flood hazard at this point. Building conditions and intense rain still deserve attention.",
        lower: "FEMA maps lower river or coastal hazard here, but that does not rule out street, sewer, or basement flooding.",
        unknown: "FEMA has not determined the flood hazard here. Lack of a determination is not proof of safety."
      },
      es: {
        high: "FEMA muestra un peligro alto en este punto. Actuar temprano y tener un plan claro de evacuación es importante.",
        moderate: "FEMA muestra cierto peligro en este punto. Las condiciones del edificio y la lluvia intensa aún importan.",
        lower: "FEMA muestra menor peligro fluvial o costero, pero esto no descarta inundaciones de calles, alcantarillado o sótanos.",
        unknown: "FEMA no ha determinado el peligro aquí. La falta de una determinación no demuestra seguridad."
      }
    };
    el("meaning-hazard").textContent = messages[state.lang][level] || messages[state.lang].unknown;
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
    renderMeaning(zone);
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

    if (!navigator.onLine) {
      setStatus(
        state.lang === "en"
          ? "You are offline. Reconnect to check a new address."
          : "No tienes conexión. Vuelve a conectarte para consultar una dirección nueva.",
        "error"
      );
      updateConnectivityBanner();
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
      state.zip = place.zip;
      state.lat = place.lat;
      state.lng = place.lng;
      updateBrowserUrl();
      state.matchScore = place.score;
      document.title = `${place.address} | FloodRisk Philly`;
      el("matched-address").textContent = place.address;
      el("zip-code").textContent = place.zip || (state.lang === "en" ? "Not returned" : "No disponible");
      el("match-score").textContent = `${Math.round(place.score)}%`;
      renderMap(place.lat, place.lng, place.address);
      buildFemaLink(place.lat, place.lng);
      loadWeatherAlerts(place.lat, place.lng);

      try {
        state.zone = await queryFemaZone(place.lat, place.lng);
        renderZone(state.zone);
        saveLastResult(place);
        setStatus(t("found"), "success");
      } catch {
        state.zone = "NONE";
        renderZone(state.zone);
        saveLastResult(place);
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
    if (needs.includes("vision")) groups.week.push(...copy.vision);
    if (needs.includes("hearing")) groups.week.push(...copy.hearing);
    if (needs.includes("alone")) groups.now.push(...copy.alone);
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
    restoreChecklistState();
    el("checklist-section").scrollIntoView({ behavior: "smooth", block: "start" });
  }


  const PLAN_STORAGE_KEY = "floodrisk-philly-plan-v1";
  const LAST_RESULT_STORAGE_KEY = "floodrisk-philly-last-result-v1";
  const PLANNER_STORAGE_KEY = "floodrisk-philly-planner-v1";
  let deferredInstallPrompt = null;


  function saveLastResult(place) {
    const payload = {
      address: state.address,
      zone: state.zone,
      zip: state.zip,
      matchScore: state.matchScore,
      lat: place.lat,
      lng: place.lng,
      savedAt: new Date().toISOString()
    };
    localStorage.setItem(LAST_RESULT_STORAGE_KEY, JSON.stringify(payload));
  }

  function getLastResult() {
    try {
      return JSON.parse(localStorage.getItem(LAST_RESULT_STORAGE_KEY) || "null");
    } catch {
      return null;
    }
  }

  function clearLocalData() {
    localStorage.removeItem(PLAN_STORAGE_KEY);
    localStorage.removeItem(LAST_RESULT_STORAGE_KEY);
    localStorage.removeItem(PLANNER_STORAGE_KEY);
    document.querySelectorAll(".checklist-item input").forEach((box) => {
      box.checked = false;
    });
    ["emergency-contact-name", "emergency-contact-phone", "building-contact"].forEach((id) => {
      if (el(id)) el(id).value = "";
    });
    updateProgress();
    updateConnectivityBanner();
    setStatus(
      state.lang === "en"
        ? "Saved address and checklist removed from this device."
        : "La dirección y la lista guardadas se eliminaron de este dispositivo.",
      "success"
    );
  }

  function updateConnectivityBanner() {
    const banner = el("connectivity-banner");
    const message = el("connectivity-message");
    const savedButton = el("use-saved-result-button");

    if (navigator.onLine) {
      banner.hidden = true;
      savedButton.hidden = true;
      return;
    }

    const saved = getLastResult();
    banner.hidden = false;
    message.textContent =
      state.lang === "en"
        ? "You are offline. New address and FEMA lookups are unavailable."
        : "No tienes conexión. No se pueden consultar direcciones nuevas ni FEMA.";
    savedButton.hidden = !saved;
  }

  function renderSavedResult() {
    const saved = getLastResult();
    if (!saved) return;

    state.address = saved.address || "";
    state.zone = saved.zone || "NONE";
    state.zip = saved.zip || "";
    state.matchScore = Number(saved.matchScore || 0);
    state.lat = Number(saved.lat);
    state.lng = Number(saved.lng);

    el("address").value = state.address;
    el("matched-address").textContent = state.address;
    el("zip-code").textContent =
      state.zip || (state.lang === "en" ? "Not returned" : "No disponible");
    el("match-score").textContent = state.matchScore
      ? `${Math.round(state.matchScore)}%`
      : "—";

    renderZone(state.zone);
    if (Number.isFinite(saved.lat) && Number.isFinite(saved.lng)) {
      renderMap(saved.lat, saved.lng, state.address);
      buildFemaLink(saved.lat, saved.lng);
      if (navigator.onLine) loadWeatherAlerts(saved.lat, saved.lng);
      else renderWeatherAlerts([], true);
    }

    el("results").hidden = false;
    setStatus(
      state.lang === "en"
        ? "Showing the last result saved on this device."
        : "Mostrando el último resultado guardado en este dispositivo.",
      "success"
    );
    el("results").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  async function installApp() {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    el("install-button").hidden = true;
    el("install-section-button").hidden = true;
  }

  function setupInstallPrompt() {
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      deferredInstallPrompt = event;
      el("install-button").hidden = false;
      el("install-section-button").hidden = false;
    });

    window.addEventListener("appinstalled", () => {
      deferredInstallPrompt = null;
      el("install-button").hidden = true;
      el("install-section-button").hidden = true;
      setStatus(
        state.lang === "en"
          ? "FloodRisk Philly was installed."
          : "FloodRisk Philly se instaló.",
        "success"
      );
    });
  }

  function registerServiceWorker() {
    if (!("serviceWorker" in navigator)) return;
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").catch(() => {});
    });
  }


  function saveChecklistState() {
    const boxes = [...document.querySelectorAll(".checklist-item input")];
    const payload = {
      address: state.address,
      zone: state.zone,
      zip: state.zip,
      checked: boxes.map((box) => box.checked),
      updatedAt: new Date().toISOString()
    };
    localStorage.setItem(PLAN_STORAGE_KEY, JSON.stringify(payload));
  }

  function restoreChecklistState() {
    let saved;
    try {
      saved = JSON.parse(localStorage.getItem(PLAN_STORAGE_KEY) || "null");
    } catch {
      return;
    }
    if (!saved || saved.address !== state.address || saved.zone !== state.zone) return;
    const boxes = [...document.querySelectorAll(".checklist-item input")];
    saved.checked?.forEach((value, index) => {
      if (boxes[index]) boxes[index].checked = Boolean(value);
    });
    updateProgress();
  }

  function resetChecklist() {
    document.querySelectorAll(".checklist-item input").forEach((box) => {
      box.checked = false;
    });
    ["emergency-contact-name", "emergency-contact-phone", "building-contact"].forEach((id) => {
      if (el(id)) el(id).value = "";
    });
    localStorage.removeItem(PLAN_STORAGE_KEY);
    updateProgress();
    setStatus(
      state.lang === "en" ? "Checklist reset." : "Lista reiniciada.",
      "success"
    );
  }


  function updateProgress() {
    const boxes = [...document.querySelectorAll(".checklist-item input")];
    const completed = boxes.filter((box) => box.checked).length;
    const percent = boxes.length ? Math.round((completed / boxes.length) * 100) : 0;
    el("progress-text").textContent = `${percent}% ${t("complete")}`;
    el("progress-bar").style.width = `${percent}%`;
    const progress = document.querySelector(".progress-track");
    progress.setAttribute("aria-valuenow", String(percent));
    if (boxes.length) saveChecklistState();
  }


  function savePlannerState(){const data=new FormData(el("planner-form"));localStorage.setItem(PLANNER_STORAGE_KEY,JSON.stringify({floor:data.get("floor")||"unknown",needs:data.getAll("needs")}));}
  function restorePlannerState(){let saved;try{saved=JSON.parse(localStorage.getItem(PLANNER_STORAGE_KEY)||"null")}catch{return}if(!saved)return;const floor=document.querySelector(`input[name="floor"][value="${saved.floor||"unknown"}"]`);if(floor)floor.checked=true;document.querySelectorAll('input[name="needs"]').forEach(i=>i.checked=Array.isArray(saved.needs)&&saved.needs.includes(i.value));}
  function priorityLevel(floor,needs){const z=(zoneInfo[state.zone]||zoneInfo.NONE).level;let s=0;if(z==="high")s+=3;if(z==="moderate")s+=1;if(floor==="basement")s+=3;if(floor==="ground")s+=1;if(needs.includes("elevator"))s+=2;if(needs.includes("power"))s+=3;if(needs.includes("medication"))s+=2;if(needs.includes("communication"))s+=1;if(needs.includes("vision"))s+=1;if(needs.includes("hearing"))s+=1;if(needs.includes("alone"))s+=2;if(needs.includes("animal"))s+=1;return s>=6?"high":s>=3?"medium":"standard";}
  function renderPriority(floor,needs){const c=priorityText[state.lang],level=priorityLevel(floor,needs),actions=[],questions=[c.landlord.pastFlooding,c.landlord.maintenance];if((zoneInfo[state.zone]||zoneInfo.NONE).level==="high")actions.push(c.actions.highZone);if(floor==="basement")actions.push(c.actions.basement);if(floor==="ground")actions.push(c.actions.ground);if(needs.includes("elevator"))actions.push(c.actions.elevator);if(needs.includes("power"))actions.push(c.actions.power);if(needs.includes("medication"))actions.push(c.actions.medication);if(needs.some(n=>["communication","vision","hearing"].includes(n)))actions.push(c.actions.communication);if(needs.includes("alone"))actions.push(c.actions.alone);if(needs.includes("animal"))actions.push(c.actions.animal);if(!actions.length)actions.push(c.actions.standard);if(["basement","ground"].includes(floor))questions.push(c.landlord.sewer,c.landlord.storage);if(needs.includes("elevator"))questions.push(c.landlord.elevator,c.landlord.exits);if(needs.includes("power"))questions.push(c.landlord.power);if(needs.some(n=>["communication","vision","hearing"].includes(n)))questions.push(c.landlord.alerts);const b=el("priority-badge");b.textContent=c.labels[level];b.className=`priority-badge ${level}`;el("priority-summary").textContent=c.summaries[level];const al=el("priority-now-list");al.innerHTML="";[...new Set(actions)].slice(0,5).forEach(x=>{const li=document.createElement("li");li.textContent=x;al.appendChild(li)});const ql=el("landlord-question-list");ql.innerHTML="";[...new Set(questions)].slice(0,6).forEach(x=>{const li=document.createElement("li");li.textContent=x;ql.appendChild(li)});el("priority-section").hidden=false;}

  function handlePlannerSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const floor = data.get("floor") || "unknown";
    const needs = data.getAll("needs");
    savePlannerState();
    renderPriority(floor, needs);
    renderChecklist(makeChecklist(floor, needs));
  }

  function init() {
    setLanguage(state.lang);
    el("language-toggle").addEventListener("click", () => {
      setLanguage(state.lang === "en" ? "es" : "en");
    });
    el("address-form").addEventListener("submit", handleAddressSubmit);
    el("planner-form").addEventListener("submit", handlePlannerSubmit);
    el("planner-form").addEventListener("change", savePlannerState);
    el("print-button").addEventListener("click", () => window.print());
    el("reset-button").addEventListener("click", resetChecklist);
    el("share-result-button").addEventListener("click", shareResult);
    el("new-search-button").addEventListener("click", startNewSearch);
    el("copy-plan-button").addEventListener("click", copyPlan);
    el("download-plan-button").addEventListener("click", downloadPlan);
    el("report-button").addEventListener("click", generateReport);
    el("clear-local-data-button").addEventListener("click", clearLocalData);
    el("use-saved-result-button").addEventListener("click", renderSavedResult);
    el("install-button").addEventListener("click", installApp);
    el("install-section-button").addEventListener("click", installApp);

    window.addEventListener("online", updateConnectivityBanner);
    window.addEventListener("offline", updateConnectivityBanner);
    setupInstallPrompt();
    registerServiceWorker();
    updateConnectivityBanner();
    restorePlannerState();

    const sharedAddress = new URL(window.location.href).searchParams.get("address");
    if (sharedAddress) {
      el("address").value = sharedAddress;
      el("address-form").requestSubmit();
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();
