const I18N = {
  en: {
    skipLink: "Skip to main content",
    navHow: "How it works",
    navAbout: "Why renters",

    heroEyebrow: "Flood information for Philadelphia renters",
    heroTitleOne: "Know your risk",
    heroTitleTwo: "before the storm.",
    heroLede:
      "Check an official FEMA flood zone, understand what the result can and cannot tell you, and make a plan for your actual apartment.",
    featureOne: "No login or saved address history",
    featureTwo: "English and Spanish",
    featureThree: "Built for renters and disabled residents",

    lookupEyebrow: "Start with an address",
    lookupTitle: "Check your location",
    addressLabel: "Philadelphia street address",
    lookupButton: "Check risk",
    addressHelp:
      "Use a full street address for the most precise result. Apartment numbers are ignored.",
    privacyLabel: "Privacy:",
    privacySummary:
      "Your search is sent to OpenStreetMap to locate the address and to FEMA to check the mapped flood zone. FloodRisk Philly does not save it.",

    resultsEyebrow: "Your result",
    resultsTitle: "What we found",
    startOver: "Start over",
    bestNextStep: "Best next step",

    limitsTitle: "What this result does not tell you",
    limitsText:
      "FEMA maps focus on mapped flood hazards. They may not capture sewer backups, blocked drains, intense rainfall on one block, basement conditions, or whether your building has safe exits. Lower federal risk never means no flood risk.",

    officialEyebrow: "Official map result",
    officialTitle: "FEMA flood zone",
    zoneLabel: "Zone",
    classificationLabel: "Federal classification",
    lookupStatusLabel: "Lookup status",
    howCalculated: "How we calculated this",
    howCalculatedText:
      "FloodRisk Philly converts the address to coordinates and queries FEMA's National Flood Hazard Layer at that point. The displayed zone is FEMA's returned classification translated into plain language. No custom score is blended into the official result.",
    readMethodology: "Read the full methodology",

    apartmentEyebrow: "Your actual apartment",
    personalizeTitle: "Personalize the guidance",
    personalizeIntro:
      "These answers stay in your browser and do not change the FEMA result.",
    floorLegend: "Where is the unit?",
    floorBelow: "Below street level or in a basement",
    floorStreet: "At street or ground level",
    floorAbove: "Above ground level",
    notSure: "Not sure",
    needsLegend: "Which apply?",
    needElevator: "I rely on an elevator or cannot use stairs",
    needPower:
      "I use powered medical, mobility, or communication equipment",
    needAssistance: "I may need help evacuating",
    needPets: "I need to plan for pets",
    needExit: "My unit has only one usable exit",

    checklistEyebrow: "A plan you can use",
    checklistTitle: "Your renter flood checklist",
    printPlan: "Print plan",

    mapEyebrow: "Location context",
    mapTitle: "Map",
    verifyFema: "Verify on FEMA's official map",
    mapDescription:
      "The map shows the searched location. All decision-relevant findings also appear as text above.",

    sourcesTitle: "Sources and methodology",
    sourcesIntro:
      "FloodRisk Philly separates official flood-zone data from personalized preparedness guidance.",

    howEyebrow: "How it works",
    howTitle: "Three kinds of information, kept separate.",
    stepOneTitle: "Official mapped hazard",
    stepOneText:
      "We query FEMA's flood map at the searched point and report the zone returned by FEMA.",
    stepTwoTitle: "Local limits and context",
    stepTwoText:
      "We explain what the federal map may miss, including sewer backups, intense rain, and building-specific conditions.",
    stepThreeTitle: "Your renter plan",
    stepThreeText:
      "You can add floor, exit, disability, power, and pet information to personalize preparedness guidance.",

    aboutEyebrow: "Why this exists",
    aboutTitle: "Flood tools rarely start with renters.",
    aboutText:
      "Renters may not control drainage, building repairs, elevators, or emergency procedures, but they still face damaged belongings, displacement, missed work, and inaccessible exits. FloodRisk Philly turns a map result into practical questions and actions.",

    disclaimerTitle: "Important limitation",
    disclaimerText:
      "FloodRisk Philly provides educational information and renter preparedness guidance. It is not an insurance determination, engineering assessment, emergency warning, legal opinion, or guarantee that a property will or will not flood.",

    footerTagline:
      "Plain-language flood information for Philadelphia renters.",
    footerMethodology: "Methodology",
    footerPrivacy: "Privacy",
    footerSource: "View source",

    languageButtonAria: "Cambiar a español",

    statusEmpty: "Enter a Philadelphia street address.",
    statusLoading: "Checking the address and FEMA flood data…",
    statusAddressNotFound:
      "We could not locate that address in Philadelphia. Try including the street number and ZIP code.",
    statusAmbiguous:
      "We found more than one possible address. Add the ZIP code or more street details.",
    statusOutside:
      "That result appears to be outside Philadelphia. Enter a Philadelphia address.",
    statusGeocoderUnavailable:
      "The address service did not respond. Your address was not saved. Please try again later.",
    statusFemaUnavailable:
      "We found the address, but FEMA's service did not respond. Treat this as missing information, not a lower-risk result.",
    statusUnexpected:
      "Something went wrong during the lookup. Your address was not saved.",
    statusAddressConfirmed: "Address confirmed.",
    statusLookupComplete: "Flood-zone lookup complete.",

    dataLive: "Live FEMA lookup",
    dataUnavailable: "FEMA lookup unavailable",
    dataNoFeature: "No conclusive FEMA feature returned",

    riskHighBadge: "Higher federal flood hazard",
    riskModerateBadge: "Moderate federal flood hazard",
    riskLowerBadge: "Lower federal flood hazard",
    riskUnknownBadge: "Flood hazard undetermined",

    riskHighTitle:
      "This location is in a FEMA higher-hazard flood zone.",
    riskModerateTitle:
      "This location is in a FEMA moderate-hazard flood zone.",
    riskLowerTitle:
      "This location is outside FEMA's mapped higher-hazard zones.",
    riskUnknownTitle:
      "FEMA did not return a conclusive flood-zone result.",

    riskHighText:
      "Flooding is more likely here under FEMA's mapped standard. Your floor, exits, building condition, and mobility or power needs can affect your practical risk.",
    riskModerateText:
      "The federal map shows some flood exposure. Intense rain, sewer backups, and building conditions may create additional risk.",
    riskLowerText:
      "The federal map indicates lower mapped risk, not zero risk. Urban flooding and sewer backups can happen outside mapped higher-hazard zones.",
    riskUnknownText:
      "No reliable federal classification was returned. Treat this as missing information, not proof that the property is safe.",

    nextHigh:
      "Ask the landlord or property manager about prior flooding and identify two ways out before the next major storm.",
    nextModerate:
      "Ask about prior water or sewer backups and keep essential belongings above floor level.",
    nextLower:
      "Check the basement, drains, and building flood history, especially if the unit is at or below street level.",
    nextUnknown:
      "Verify the address on FEMA's official map and ask the landlord for the building's flood history.",

    classHigh: "Special Flood Hazard Area",
    classModerate: "Moderate mapped flood hazard",
    classLower: "Lower mapped flood hazard",
    classUnknown: "Undetermined",

    lookupCompleted: "Live point query completed",
    lookupNoFeature: "No conclusive feature returned",
    lookupFailed: "FEMA service unavailable",

    checklistNow: "Right now",
    checklistWeek: "This week",
    checklistSeason: "Before storm season",

    checklistNowOne:
      "Put medications, identification, insurance information, and charging cables in a waterproof bag.",
    checklistNowTwo:
      "Identify two ways to leave the building and a place on higher ground.",
    checklistNowThree:
      "Save the landlord or property manager's emergency number.",

    checklistWeekOne:
      "Ask in writing whether the unit or building has flooded or had sewer backups before.",
    checklistWeekTwo:
      "Photograph valuable belongings and save copies somewhere outside the apartment.",
    checklistWeekThree:
      "Sign up for ReadyPhiladelphia emergency alerts.",

    checklistSeasonOne:
      "Keep a flashlight, power bank, water, shelf-stable food, and basic supplies together.",
    checklistSeasonTwo:
      "Check whether renters insurance covers belongings damaged by flooding or sewer backup.",
    checklistSeasonThree:
      "Move irreplaceable belongings above floor level and away from basement storage.",

    guidanceHeading: "Personalized guidance",
    guidanceBelow:
      "Because the unit is below street level, move medications, documents, electronics, and mobility equipment off the floor.",
    guidanceStreet:
      "A street-level unit can take on water quickly. Identify an exit that does not require crossing rising water.",
    guidanceAbove:
      "An upper-floor unit may reduce direct water exposure, but elevators, power, and building exits can still fail during flooding.",
    guidanceElevator:
      "Elevators may stop during outages or flooding. Make a building-specific plan that does not depend on the elevator.",
    guidancePower:
      "Keep backup power information, charging cables, and equipment instructions together in a waterproof bag.",
    guidanceAssistance:
      "Choose at least two people who know what assistance you need and how to reach you.",
    guidancePets:
      "Keep carriers, leashes, food, medication, and vaccination records ready.",
    guidanceOneExit:
      "One usable exit is a serious constraint. Ask the landlord what the alternate evacuation procedure is.",

    mapPopupPrefix: "Searched address",
    mapAriaPrefix: "Map centered on",
    printTitle: "FloodRisk Philly renter flood plan"
  },

  es: {
    skipLink: "Saltar al contenido principal",
    navHow: "Cómo funciona",
    navAbout: "Por qué inquilinos",

    heroEyebrow: "Información sobre inundaciones para inquilinos de Filadelfia",
    heroTitleOne: "Conoce tu riesgo",
    heroTitleTwo: "antes de la tormenta.",
    heroLede:
      "Consulta una zona oficial de inundación de FEMA, entiende lo que el resultado puede y no puede decirte y crea un plan para tu apartamento.",
    featureOne: "Sin cuenta ni historial de direcciones guardado",
    featureTwo: "Inglés y español",
    featureThree: "Diseñado para inquilinos y residentes con discapacidades",

    lookupEyebrow: "Comienza con una dirección",
    lookupTitle: "Consulta tu ubicación",
    addressLabel: "Dirección en Filadelfia",
    lookupButton: "Consultar riesgo",
    addressHelp:
      "Usa una dirección completa para obtener el resultado más preciso. Se ignoran los números de apartamento.",
    privacyLabel: "Privacidad:",
    privacySummary:
      "Tu búsqueda se envía a OpenStreetMap para ubicar la dirección y a FEMA para consultar la zona cartografiada. FloodRisk Philly no la guarda.",

    resultsEyebrow: "Tu resultado",
    resultsTitle: "Lo que encontramos",
    startOver: "Empezar de nuevo",
    bestNextStep: "Mejor próximo paso",

    limitsTitle: "Lo que este resultado no te dice",
    limitsText:
      "Los mapas de FEMA se enfocan en peligros de inundación cartografiados. Es posible que no incluyan desbordamientos de alcantarillado, drenajes bloqueados, lluvia intensa en una cuadra, condiciones del sótano o si el edificio tiene salidas seguras. Menor riesgo federal nunca significa ausencia de riesgo.",

    officialEyebrow: "Resultado del mapa oficial",
    officialTitle: "Zona de inundación de FEMA",
    zoneLabel: "Zona",
    classificationLabel: "Clasificación federal",
    lookupStatusLabel: "Estado de la consulta",
    howCalculated: "Cómo calculamos esto",
    howCalculatedText:
      "FloodRisk Philly convierte la dirección en coordenadas y consulta la Capa Nacional de Riesgo de Inundación de FEMA en ese punto. La zona mostrada es la clasificación devuelta por FEMA, explicada en lenguaje sencillo. No mezclamos una puntuación personalizada con el resultado oficial.",
    readMethodology: "Leer la metodología completa",

    apartmentEyebrow: "Tu apartamento",
    personalizeTitle: "Personaliza la orientación",
    personalizeIntro:
      "Estas respuestas permanecen en tu navegador y no cambian el resultado de FEMA.",
    floorLegend: "¿Dónde está la unidad?",
    floorBelow: "Debajo del nivel de la calle o en un sótano",
    floorStreet: "Al nivel de la calle o en la planta baja",
    floorAbove: "Por encima de la planta baja",
    notSure: "No estoy seguro/a",
    needsLegend: "¿Cuáles se aplican?",
    needElevator: "Dependo de un ascensor o no puedo usar escaleras",
    needPower:
      "Uso equipo médico, de movilidad o comunicación que necesita electricidad",
    needAssistance: "Puedo necesitar ayuda para evacuar",
    needPets: "Necesito planificar para mascotas",
    needExit: "Mi unidad tiene una sola salida utilizable",

    checklistEyebrow: "Un plan que puedes usar",
    checklistTitle: "Tu lista de preparación como inquilino/a",
    printPlan: "Imprimir plan",

    mapEyebrow: "Contexto de ubicación",
    mapTitle: "Mapa",
    verifyFema: "Verificar en el mapa oficial de FEMA",
    mapDescription:
      "El mapa muestra la ubicación buscada. Toda la información importante para tomar decisiones también aparece en texto arriba.",

    sourcesTitle: "Fuentes y metodología",
    sourcesIntro:
      "FloodRisk Philly mantiene separados los datos oficiales de la zona y la orientación personalizada.",

    howEyebrow: "Cómo funciona",
    howTitle: "Tres tipos de información, mantenidos por separado.",
    stepOneTitle: "Peligro oficial cartografiado",
    stepOneText:
      "Consultamos el mapa de FEMA en el punto buscado e informamos la zona devuelta por FEMA.",
    stepTwoTitle: "Límites y contexto local",
    stepTwoText:
      "Explicamos lo que el mapa federal puede no mostrar, como desbordamientos, lluvia intensa y condiciones específicas del edificio.",
    stepThreeTitle: "Tu plan como inquilino/a",
    stepThreeText:
      "Puedes agregar información sobre el piso, las salidas, la discapacidad, la electricidad y las mascotas para personalizar la preparación.",

    aboutEyebrow: "Por qué existe",
    aboutTitle:
      "Las herramientas de inundación rara vez comienzan con los inquilinos.",
    aboutText:
      "Los inquilinos quizá no controlen el drenaje, las reparaciones, los ascensores ni los procedimientos de emergencia, pero aun así enfrentan daños a sus pertenencias, desplazamiento, pérdida de trabajo y salidas inaccesibles. FloodRisk Philly convierte un resultado del mapa en preguntas y acciones prácticas.",

    disclaimerTitle: "Limitación importante",
    disclaimerText:
      "FloodRisk Philly ofrece información educativa y orientación de preparación para inquilinos. No es una determinación de seguro, evaluación de ingeniería, alerta de emergencia, opinión legal ni garantía de que una propiedad se inundará o no.",

    footerTagline:
      "Información sobre inundaciones en lenguaje sencillo para inquilinos de Filadelfia.",
    footerMethodology: "Metodología",
    footerPrivacy: "Privacidad",
    footerSource: "Ver código fuente",

    languageButtonAria: "Switch to English",

    statusEmpty: "Ingresa una dirección de Filadelfia.",
    statusLoading:
      "Consultando la dirección y los datos de inundación de FEMA…",
    statusAddressNotFound:
      "No pudimos localizar esa dirección en Filadelfia. Incluye el número de la calle y el código postal.",
    statusAmbiguous:
      "Encontramos más de una dirección posible. Agrega el código postal o más detalles.",
    statusOutside:
      "El resultado parece estar fuera de Filadelfia. Ingresa una dirección de Filadelfia.",
    statusGeocoderUnavailable:
      "El servicio de direcciones no respondió. Tu dirección no fue guardada. Inténtalo más tarde.",
    statusFemaUnavailable:
      "Encontramos la dirección, pero el servicio de FEMA no respondió. Considera esto información faltante, no un resultado de menor riesgo.",
    statusUnexpected:
      "Ocurrió un problema durante la consulta. Tu dirección no fue guardada.",
    statusAddressConfirmed: "Dirección confirmada.",
    statusLookupComplete: "Consulta de zona completada.",

    dataLive: "Consulta en vivo de FEMA",
    dataUnavailable: "Consulta de FEMA no disponible",
    dataNoFeature: "FEMA no devolvió una zona concluyente",

    riskHighBadge: "Mayor peligro federal de inundación",
    riskModerateBadge: "Peligro federal moderado",
    riskLowerBadge: "Menor peligro federal",
    riskUnknownBadge: "Peligro no determinado",

    riskHighTitle:
      "Esta ubicación está en una zona de mayor peligro de FEMA.",
    riskModerateTitle:
      "Esta ubicación está en una zona de peligro moderado de FEMA.",
    riskLowerTitle:
      "Esta ubicación está fuera de las zonas de mayor peligro cartografiadas por FEMA.",
    riskUnknownTitle:
      "FEMA no devolvió un resultado concluyente de la zona.",

    riskHighText:
      "Las inundaciones son más probables aquí según el estándar cartografiado de FEMA. El piso, las salidas, el estado del edificio y las necesidades de movilidad o electricidad pueden afectar el riesgo práctico.",
    riskModerateText:
      "El mapa federal muestra cierta exposición. La lluvia intensa, los desbordamientos y las condiciones del edificio pueden crear riesgo adicional.",
    riskLowerText:
      "El mapa federal indica menor riesgo cartografiado, no riesgo cero. Las inundaciones urbanas y los desbordamientos pueden ocurrir fuera de las zonas de mayor peligro.",
    riskUnknownText:
      "No se devolvió una clasificación federal confiable. Considera esto información faltante, no prueba de que la propiedad sea segura.",

    nextHigh:
      "Pregunta al propietario o administrador sobre inundaciones anteriores e identifica dos salidas antes de la próxima tormenta fuerte.",
    nextModerate:
      "Pregunta sobre agua o desbordamientos anteriores y mantén las pertenencias esenciales por encima del piso.",
    nextLower:
      "Revisa el sótano, los drenajes y el historial de inundaciones del edificio, especialmente si la unidad está al nivel de la calle o debajo.",
    nextUnknown:
      "Verifica la dirección en el mapa oficial de FEMA y solicita al propietario el historial de inundaciones del edificio.",

    classHigh: "Área especial de riesgo de inundación",
    classModerate: "Peligro moderado cartografiado",
    classLower: "Menor peligro cartografiado",
    classUnknown: "No determinado",

    lookupCompleted: "Consulta en vivo completada",
    lookupNoFeature: "No se devolvió una zona concluyente",
    lookupFailed: "Servicio de FEMA no disponible",

    checklistNow: "Ahora",
    checklistWeek: "Esta semana",
    checklistSeason: "Antes de la temporada de tormentas",

    checklistNowOne:
      "Coloca medicamentos, identificación, información de seguro y cables de carga en una bolsa impermeable.",
    checklistNowTwo:
      "Identifica dos formas de salir del edificio y un lugar en terreno más alto.",
    checklistNowThree:
      "Guarda el número de emergencia del propietario o administrador.",

    checklistWeekOne:
      "Pregunta por escrito si la unidad o el edificio se ha inundado o ha tenido desbordamientos.",
    checklistWeekTwo:
      "Fotografía las pertenencias valiosas y guarda copias fuera del apartamento.",
    checklistWeekThree:
      "Inscríbete para recibir alertas de emergencia de ReadyPhiladelphia.",

    checklistSeasonOne:
      "Mantén juntos una linterna, batería portátil, agua, alimentos no perecederos y suministros básicos.",
    checklistSeasonTwo:
      "Verifica si el seguro para inquilinos cubre pertenencias dañadas por inundaciones o desbordamientos.",
    checklistSeasonThree:
      "Coloca las pertenencias irremplazables por encima del piso y lejos del almacenamiento en sótanos.",

    guidanceHeading: "Orientación personalizada",
    guidanceBelow:
      "Como la unidad está debajo del nivel de la calle, coloca medicamentos, documentos, aparatos electrónicos y equipo de movilidad por encima del piso.",
    guidanceStreet:
      "Una unidad al nivel de la calle puede inundarse rápidamente. Identifica una salida que no requiera cruzar agua creciente.",
    guidanceAbove:
      "Una unidad en un piso superior puede reducir la exposición directa al agua, pero los ascensores, la electricidad y las salidas del edificio aún pueden fallar.",
    guidanceElevator:
      "Los ascensores pueden dejar de funcionar durante apagones o inundaciones. Crea un plan específico que no dependa del ascensor.",
    guidancePower:
      "Mantén información sobre energía de respaldo, cables e instrucciones del equipo en una bolsa impermeable.",
    guidanceAssistance:
      "Elige al menos dos personas que sepan qué ayuda necesitas y cómo comunicarse contigo.",
    guidancePets:
      "Ten listos transportadores, correas, comida, medicamentos y registros de vacunación.",
    guidanceOneExit:
      "Una sola salida utilizable es una limitación seria. Pregunta al propietario cuál es el procedimiento alternativo de evacuación.",

    mapPopupPrefix: "Dirección buscada",
    mapAriaPrefix: "Mapa centrado en",
    printTitle: "Plan de inundación para inquilinos de FloodRisk Philly"
  }
};
