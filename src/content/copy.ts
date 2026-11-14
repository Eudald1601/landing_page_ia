// Tots els textos de la landing. `ca` i `es` tenen exactament la mateixa estructura:
// si afegeixes una nota, un pas o una situació a un idioma, afegeix-la també a l'altre.

export type Lang = "ca" | "es";

export const languages: { code: Lang; label: string; name: string; href: string }[] = [
  { code: "ca", label: "CA", name: "Català", href: "/" },
  { code: "es", label: "ES", name: "Castellano", href: "/es" },
];

type Pair = [string, string];

const ca = {
  meta: {
    title: "TasklessAI | Consultoria IA a Lleida",
    description:
      "Consultoria d'IA a Lleida per a freelancers i petites empreses. Automatitzacions de tasques repetitives, resums d'informes i assistents interns.",
  },
  skip: "Salta al contingut",
  nav: { cta: "Reserva 20 min", sections: "Seccions", language: "Idioma" },
  sections: ["Inici", "Situacions", "Serveis", "Prova-ho", "Procés", "Qui sóc", "Contacte"],
  hero: {
    kicker: "IA · Lleida · Catalunya",
    title: ["Automatitzacions", "amb", "IA", "per al", "teu negoci"],
    lead:
      "Desenvolupo solucions d'IA a mida per estalviar-te hores de feina repetitiva: resums d'informes, automatitzacions de processos i assistents interns sobre la teva documentació.",
    cta: "Reserva 20 min gratuïts",
    note: "Sense compromís, només veiem si et puc ajudar.",
    stats: [
      ["3", "Serveis clars"],
      ["20'", "Primera trucada"],
      ["0€", "Sense compromís"],
    ] as Pair[],
    scroll: "Fes scroll",
    board: {
      title: "La teva setmana",
      saved: "−9 h a la setmana",
      auto: "automàtic",
      tasks: [
        ["Llegir i resumir l'informe mensual", "3 h"],
        ["Passar comandes del correu a l'Excel", "2 h"],
        ["Respondre les mateixes preguntes de clients", "2 h"],
        ["Buscar dades en PDFs i carpetes", "2 h"],
      ] as Pair[],
    },
  },
  track: {
    kicker: "Per a qui és",
    title: ["Reconeixeràs alguna", "d'aquestes situacions?"],
    lead:
      "Treballo amb professionals independents i petites empreses de Lleida i Catalunya que volen treure profit de la IA sense necessitat d'un gran equip tècnic.",
    cards: [
      [
        "Perds hores llegint informes",
        "Documents llargs, actes de reunió, informes periòdics... tota setmana consumint temps que podries dedicar al que importa de debò.",
      ],
      [
        "Les mateixes tasques cada setmana",
        "Copies dades d'un lloc a un altre, actualitzes fulls de càlcul, envies emails iguals... una i altra vegada, sense que ningú ho resolgui.",
      ],
      [
        "La informació, dispersa per tot arreu",
        "PDFs, Notion, Google Drive, correus... trobar una dada senzilla es converteix en una expedició de deu minuts.",
      ],
    ] as Pair[],
    outro: [
      "No cal que siguis «tecnològic»",
      "Tu m'expliques com treballes i jo busco on l'IA et pot estalviar temps.",
    ] as Pair,
  },
  stage: {
    label: "Serveis",
    scenes: [
      {
        tab: "Automatització",
        kicker: "Servei 01 · Ideal si repeteixes les mateixes accions cada setmana",
        title: "Automatització de tasques",
        notes: [
          ["Analitzem", "el teu procés actual, pas a pas"],
          ["A mida", "dissenyo l'automatització amb IA"],
          ["Sola", "funciona sense que hagis de tocar res"],
          ["Revisable", "tu veus què ha fet i quan"],
        ] as Pair[],
      },
      {
        tab: "Resums",
        kicker: "Servei 02 · Ideal si treballes amb documents llargs o informes",
        title: "Resums intel·ligents",
        notes: [
          ["Llegeix per tu", "documents, informes i reunions"],
          ["L'essencial", "mostra el que importa"],
          ["Accions", "i les properes passes, amb responsable"],
          ["El teu estil", "adaptat al teu to i format"],
        ] as Pair[],
      },
      {
        tab: "Assistent",
        kicker: "Servei 03 · Ideal si esteu cansats de buscar informació a mà",
        title: "Assistent intern documental",
        notes: [
          ["Tot junt", "centralitzem la teva documentació"],
          ["Al dia", "s'actualitza quan canvien els documents"],
          ["Entén", "el teu contingut, no només paraules clau"],
          ["Bilingüe", "preguntes en català o castellà"],
        ] as Pair[],
      },
    ],
  },
  demos: {
    flow: [
      ["Correu nou", "Comanda de Fruites Segrià"],
      ["La IA llegeix", "Client, productes i data"],
      ["Full de càlcul", "Fila afegida a «Comandes»"],
      ["Confirmació", "Resposta enviada al client"],
    ] as Pair[],
    flowRows: [
      ["09:12", "Fruites Segrià", "3 productes · entrega dijous"],
      ["09:47", "Agrícola Pons", "12 caixes · entrega divendres"],
      ["10:05", "Cal Ramon", "1 palet · recollida a magatzem"],
    ] as [string, string, string][],
    flowLog: "Avui: 14 comandes processades · 0 errors",
    doc: { name: "Acta reunió comercial — 42 pàgines", summary: "Resum", points: "Punts clau", actions: "Properes accions" },
    summaryPoints: [
      "Les vendes del trimestre pugen un 12%",
      "Dos clients demanen canviar les condicions",
      "Cal decidir el proveïdor de transport",
    ],
    summaryActions: [
      ["Enviar la proposta a Agrícola Pons", "Marta · dijous"],
      ["Comparar dos pressupostos de transport", "Jordi · divendres"],
    ] as Pair[],
    sources: ["Contractes.pdf", "Google Drive", "Notion", "Correus"],
    indexLabel: "Coneixement de l'empresa",
    indexStat: "1.240 documents · actualitzat fa 5 min",
  },
  rise: {
    title: ["Pregunta-ho.", "Respon amb els teus documents."],
    kicker: "Així respon l'assistent",
    text: "Respon a partir de la documentació de la teva empresa i et diu d'on ho ha tret, perquè ho puguis comprovar.",
    chat: {
      header: "Assistent intern · TasklessAI",
      question: "Quin termini de pagament tenim amb Agrícola Pons?",
      answer: "60 dies des de la data de factura. Si l'import supera els 5.000 €, es pot fraccionar en dos pagaments.",
      source: "Contracte_Agricola_Pons_2026.pdf · pàg. 4",
      placeholder: "Escriu una pregunta…",
    },
  },
  fan: {
    kicker: "Com treballo",
    title: ["Senzill per a tu,", "potent en el resultat"],
    cards: [
      ["Trucada introductòria", "20 min per entendre com treballes i on perds temps"],
      ["Proposta simple", "Solució concreta, temps estimat i preu tancat"],
      ["Implementació", "Em faig càrrec de la part tècnica completament"],
      ["Entrega i ajustos", "T'ensenyo com funciona i finem els detalls junts"],
    ] as Pair[],
  },
  about: {
    kicker: "Qui sóc",
    title: ["Sóc ", "Eudald Brils", ",", "consultor IA full stack"],
    paragraphs: [
      "Treballo en consultoria tecnològica i, a banda, ajudo petites empreses i professionals a automatitzar processos repetitius, integrar IA als seus fluxos de treball i guanyar temps sense haver de contractar un gran equip tècnic.",
      "Si m'expliques el teu dia a dia en llenguatge normal, en tinc prou per entendre el teu procés i buscar-hi millores concretes.",
    ],
    role: "Full Stack AI Consultant",
    tags: ["IA aplicada", "Automatització", "RAG / LLMs", "Lleida · Catalunya"],
  },
  fit: {
    kicker: "Adequació",
    title: "Aquest servei és per tu si…",
    yes: {
      title: "És per tu si",
      items: [
        "Vols estalviar temps en tasques repetitives i avorrides",
        "Estàs obert a provar solucions noves amb IA",
        "Prefereixes un projecte petit i concret a un macroprojecte IT",
      ],
    },
    no: {
      title: "No és per tu si",
      items: [
        "Busques un projecte molt gran de molts mesos",
        "Necessites molta burocràcia i informes llargs",
        "Vols «fer IA» per moda, però sense un problema real",
      ],
    },
  },
  closing: {
    kicker: "Contacte",
    title: ["Fem una primera", "trucada?"],
    lead:
      "Si tens algun procés que creus que es podria automatitzar, o simplement vols explorar què pot fer la IA pel teu negoci, podem fer una trucada curta de 20 minuts i veure-ho plegats.",
    cta: "Escriu-me ara",
    or: "O contacta directament a",
  },
  footer: { tagline: "Lleida", top: "Torna a dalt" },
};

export type Copy = typeof ca;

const es: Copy = {
  meta: {
    title: "TasklessAI | Consultoría IA en Lleida",
    description:
      "Consultoría de IA en Lleida para freelancers y pequeñas empresas. Automatización de tareas repetitivas, resúmenes de informes y asistentes internos.",
  },
  skip: "Saltar al contenido",
  nav: { cta: "Reserva 20 min", sections: "Secciones", language: "Idioma" },
  sections: ["Inicio", "Situaciones", "Servicios", "Pruébalo", "Proceso", "Quién soy", "Contacto"],
  hero: {
    kicker: "IA · Lleida · Cataluña",
    title: ["Automatizaciones", "con", "IA", "para", "tu negocio"],
    lead:
      "Desarrollo soluciones de IA a medida para ahorrarte horas de trabajo repetitivo: resúmenes de informes, automatización de procesos y asistentes internos sobre tu documentación.",
    cta: "Reserva 20 min gratuitos",
    note: "Sin compromiso, solo vemos si te puedo ayudar.",
    stats: [
      ["3", "Servicios claros"],
      ["20'", "Primera llamada"],
      ["0€", "Sin compromiso"],
    ],
    scroll: "Haz scroll",
    board: {
      title: "Tu semana",
      saved: "−9 h a la semana",
      auto: "automático",
      tasks: [
        ["Leer y resumir el informe mensual", "3 h"],
        ["Pasar pedidos del correo al Excel", "2 h"],
        ["Responder las mismas preguntas de clientes", "2 h"],
        ["Buscar datos en PDFs y carpetas", "2 h"],
      ],
    },
  },
  track: {
    kicker: "Para quién es",
    title: ["¿Reconocerás alguna", "de estas situaciones?"],
    lead:
      "Trabajo con profesionales independientes y pequeñas empresas de Lleida y Cataluña que quieren sacar partido de la IA sin necesidad de un gran equipo técnico.",
    cards: [
      [
        "Pierdes horas leyendo informes",
        "Documentos largos, actas de reunión, informes periódicos... toda la semana consumiendo tiempo que podrías dedicar a lo que de verdad importa.",
      ],
      [
        "Las mismas tareas cada semana",
        "Copias datos de un sitio a otro, actualizas hojas de cálculo, envías emails iguales... una y otra vez, sin que nadie lo resuelva.",
      ],
      [
        "La información, repartida por todas partes",
        "PDFs, Notion, Google Drive, correos... encontrar un dato sencillo se convierte en una expedición de diez minutos.",
      ],
    ],
    outro: [
      "No hace falta que seas «tecnológico»",
      "Tú me explicas cómo trabajas y yo busco dónde la IA te puede ahorrar tiempo.",
    ],
  },
  stage: {
    label: "Servicios",
    scenes: [
      {
        tab: "Automatización",
        kicker: "Servicio 01 · Ideal si repites las mismas acciones cada semana",
        title: "Automatización de tareas",
        notes: [
          ["Analizamos", "tu proceso actual, paso a paso"],
          ["A medida", "diseño la automatización con IA"],
          ["Sola", "funciona sin que tengas que tocar nada"],
          ["Revisable", "tú ves qué ha hecho y cuándo"],
        ],
      },
      {
        tab: "Resúmenes",
        kicker: "Servicio 02 · Ideal si trabajas con documentos largos o informes",
        title: "Resúmenes inteligentes",
        notes: [
          ["Lee por ti", "documentos, informes y reuniones"],
          ["Lo esencial", "muestra lo que importa"],
          ["Acciones", "y los próximos pasos, con responsable"],
          ["Tu estilo", "adaptado a tu tono y formato"],
        ],
      },
      {
        tab: "Asistente",
        kicker: "Servicio 03 · Ideal si estáis cansados de buscar información a mano",
        title: "Asistente interno documental",
        notes: [
          ["Todo junto", "centralizamos tu documentación"],
          ["Al día", "se actualiza cuando cambian los documentos"],
          ["Entiende", "tu contenido, no solo palabras clave"],
          ["Bilingüe", "preguntas en castellano o catalán"],
        ],
      },
    ],
  },
  demos: {
    flow: [
      ["Correo nuevo", "Pedido de Fruites Segrià"],
      ["La IA lee", "Cliente, productos y fecha"],
      ["Hoja de cálculo", "Fila añadida a «Pedidos»"],
      ["Confirmación", "Respuesta enviada al cliente"],
    ],
    flowRows: [
      ["09:12", "Fruites Segrià", "3 productos · entrega jueves"],
      ["09:47", "Agrícola Pons", "12 cajas · entrega viernes"],
      ["10:05", "Cal Ramon", "1 palé · recogida en almacén"],
    ],
    flowLog: "Hoy: 14 pedidos procesados · 0 errores",
    doc: { name: "Acta reunión comercial — 42 páginas", summary: "Resumen", points: "Puntos clave", actions: "Próximas acciones" },
    summaryPoints: [
      "Las ventas del trimestre suben un 12%",
      "Dos clientes piden cambiar las condiciones",
      "Hay que decidir el proveedor de transporte",
    ],
    summaryActions: [
      ["Enviar la propuesta a Agrícola Pons", "Marta · jueves"],
      ["Comparar dos presupuestos de transporte", "Jordi · viernes"],
    ],
    sources: ["Contratos.pdf", "Google Drive", "Notion", "Correos"],
    indexLabel: "Conocimiento de la empresa",
    indexStat: "1.240 documentos · actualizado hace 5 min",
  },
  rise: {
    title: ["Pregúntalo.", "Responde con tus documentos."],
    kicker: "Así responde el asistente",
    text: "Responde a partir de la documentación de tu empresa y te dice de dónde lo ha sacado, para que lo puedas comprobar.",
    chat: {
      header: "Asistente interno · TasklessAI",
      question: "¿Qué plazo de pago tenemos con Agrícola Pons?",
      answer: "60 días desde la fecha de factura. Si el importe supera los 5.000 €, se puede fraccionar en dos pagos.",
      source: "Contrato_Agricola_Pons_2026.pdf · pág. 4",
      placeholder: "Escribe una pregunta…",
    },
  },
  fan: {
    kicker: "Cómo trabajo",
    title: ["Sencillo para ti,", "potente en el resultado"],
    cards: [
      ["Llamada introductoria", "20 min para entender cómo trabajas y dónde pierdes tiempo"],
      ["Propuesta simple", "Solución concreta, tiempo estimado y precio cerrado"],
      ["Implementación", "Me encargo de la parte técnica completamente"],
      ["Entrega y ajustes", "Te enseño cómo funciona y afinamos los detalles juntos"],
    ],
  },
  about: {
    kicker: "Quién soy",
    title: ["Soy ", "Eudald Brils", ",", "consultor IA full stack"],
    paragraphs: [
      "Trabajo en consultoría tecnológica y, aparte, ayudo a pequeñas empresas y profesionales a automatizar procesos repetitivos, integrar IA en sus flujos de trabajo y ganar tiempo sin tener que contratar un gran equipo técnico.",
      "Si me explicas tu día a día en lenguaje normal, tengo suficiente para entender tu proceso y buscar mejoras concretas.",
    ],
    role: "Full Stack AI Consultant",
    tags: ["IA aplicada", "Automatización", "RAG / LLMs", "Lleida · Cataluña"],
  },
  fit: {
    kicker: "Encaje",
    title: "Este servicio es para ti si…",
    yes: {
      title: "Es para ti si",
      items: [
        "Quieres ahorrar tiempo en tareas repetitivas y aburridas",
        "Estás abierto a probar soluciones nuevas con IA",
        "Prefieres un proyecto pequeño y concreto a un macroproyecto IT",
      ],
    },
    no: {
      title: "No es para ti si",
      items: [
        "Buscas un proyecto muy grande de muchos meses",
        "Necesitas mucha burocracia e informes largos",
        "Quieres «hacer IA» por moda, pero sin un problema real",
      ],
    },
  },
  closing: {
    kicker: "Contacto",
    title: ["¿Hacemos una primera", "llamada?"],
    lead:
      "Si tienes algún proceso que crees que se podría automatizar, o simplemente quieres explorar qué puede hacer la IA por tu negocio, podemos hacer una llamada corta de 20 minutos y verlo juntos.",
    cta: "Escríbeme ahora",
    or: "O contacta directamente en",
  },
  footer: { tagline: "Lleida", top: "Volver arriba" },
};

export const copy: Record<Lang, Copy> = { ca, es };

export const CONTACT_EMAIL = "contact@task-less-ai.com";
export const PERSONAL_EMAIL = "brilscreuseudald@gmail.com";
