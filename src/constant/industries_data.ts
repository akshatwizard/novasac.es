import { HardHat, Wheat, FlaskConical, Recycle, Pickaxe, LucideIcon } from "lucide-react";

export interface Industry {
  title: string;
  slug: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

export const industries: Industry[] = [
  {
    slug: "industria-de-la-construccion",
    title: "Industria de la Construcción",
    description:
      "Bolsas de embalaje duraderas y resistentes diseñadas para transportar cemento, arena y materiales de construcción de forma segura.",
    icon: HardHat,
    image: "/images/industry/img-1.png",
  },
  {
    slug: "sector-de-alimentos-y-agricultura",
    title: "Sector de Alimentos y Agricultura",
    description:
      "Bolsas de grado alimenticio y resistentes a la humedad, ideales para almacenar y transportar granos y productos agrícolas.",
    icon: Wheat,
    image: "/images/industry/img-2.png",
  },
  {
    slug: "industria-quimica",
    title: "Industria Química",
    description:
      "Soluciones de embalaje especializadas diseñadas para manejar de forma segura productos químicos, polvos y materiales industriales.",
    icon: FlaskConical,
    image: "/images/industry/img-3.png",
  },
  {
    slug: "reciclaje-y-gestion-de-residuos",
    title: "Reciclaje y Gestión de Residuos",
    description:
      "Bolsas resistentes y ecológicas adecuadas para la recolección y el transporte de materiales reciclables.",
    icon: Recycle,
    image: "/images/industry/img-4.png",
  },
  {
    slug: "mineria-y-minerales",
    title: "Minería y Minerales",
    description:
      "Bolsas industriales de alta resistencia diseñadas para transportar minerales, menas y materiales mineros pesados.",
    icon: Pickaxe,
    image: "/images/industry/img-5.png",
  },
];

interface Section {
  title: string;
  content: string;
}


interface IndustryDetail {
  slug: string;
  label: string;         // e.g. "Alimentos y Agricultura"
  tagline: string;       // e.g. "Cosechado Bien, Empacado Firme"
  accentColor: string;   // Tailwind bg class for the accent pill / icon bg
  accentText: string;    // Tailwind text class
  accentBorder: string;  // Tailwind border class
  // bgColor:string;
  heroImage: string;     // path or URL
  sections: Section[];
  recommendedProducts: string[];
}

export const industryDetails: IndustryDetail[] = [
  {
    slug: "industria-de-la-construccion",
    label: "Industria de la Construcción",
    tagline: "Soluciones de Embalaje que Soportan la Carga",
    accentColor: "bg-amber-600",
    accentText: "text-amber-700",
    accentBorder: "border-amber-300",
    // bgColor:"bg-amber-100",
    heroImage: "/images/industry/construction.png",
    sections: [
      {
        title: "Acerca de Nuestras Soluciones",
        content:
          "Las soluciones de embalaje de NOVASAC están especialmente diseñadas para satisfacer las exigentes necesidades de la industria de la construcción. Ya sea arena, grava, cemento o áridos, nuestras bolsas garantizan un manejo seguro y eficiente de materiales pesados. Fabricadas con un fuerte enfoque en la durabilidad y la capacidad de carga, nuestro embalaje ayuda a reducir el riesgo de daños durante el transporte y el movimiento en obra.\n\nNuestras soluciones están creadas para mejorar la logística, haciendo que el manejo sea más fácil, rápido y organizado. Con una excelente apilabilidad y diseños que ahorran espacio, permiten una mejor gestión del almacenamiento en las obras de construcción. Esto no solo mejora la eficiencia operativa, sino que también aumenta la seguridad de los trabajadores. Al elegir un embalaje confiable y de alto rendimiento, las empresas pueden garantizar flujos de trabajo más fluidos y un mejor control de costos en todas sus operaciones.",
      },
      {
        title: "Embalaje Inteligente para sus Necesidades",
        content:
          "Elegir el embalaje adecuado puede marcar una diferencia significativa en la eficiencia de sus operaciones. En Novasac, ofrecemos opciones flexibles que pueden adaptarse a sus necesidades específicas. Desde la selección de características de elevación adecuadas, como asas o mangas, hasta la decisión entre bolsas de un solo uso o reutilizables, cada detalle está diseñado para mejorar la facilidad de manejo y el rendimiento.\n\nTambién ofrecemos opciones de personalización que le permiten agregar su marca o logotipo, ayudando a que su empresa destaque en el mercado. Nuestro equipo trabaja estrechamente con los clientes para comprender sus necesidades y recomendar las soluciones de embalaje más adecuadas. Con la combinación correcta de diseño, funcionalidad y personalización, le ayudamos a lograr mayor eficiencia, ahorro de costos y una presentación más profesional para sus productos.",
      },
      {
        title: "Principales Beneficios de Nuestras Soluciones de Embalaje para la Construcción",
        content:
          "Nuestras soluciones de embalaje están diseñadas para ofrecer tanto rendimiento como seguridad en todas las etapas de uso. Garantizan un manejo eficiente y una protección sólida de los materiales de construcción durante el almacenamiento, el transporte y el movimiento. El diseño duradero ayuda a reducir los riesgos relacionados con la seguridad de los trabajadores, minimizando también el impacto ambiental.\n\nNuestros productos cumplen con todas las normas legales y regulatorias pertinentes, brindándole confianza en cuanto a cumplimiento y fiabilidad. Proporcionan una contención segura, incluso para materiales que puedan requerir un manejo especial. Además, las opciones de impresión personalizables ofrecen sólidas oportunidades de branding, permitiendo que su embalaje represente eficazmente a su empresa. Con un enfoque en la sostenibilidad, nuestras soluciones también apoyan prácticas ambientalmente responsables, ayudando a su empresa a avanzar hacia operaciones más eficientes y ecológicas.",
      },
      {
        title: "Apoyando sus Productos",
        content:
          "Nuestro embalaje está diseñado para apoyar sus productos en cada etapa, desde el almacenamiento hasta el transporte. Utilizando materiales de alta calidad y características de diseño prácticas, garantizamos resistencia, estabilidad y protección incluso en condiciones difíciles. Esto ayuda a prevenir daños, reducir la pérdida de material y mantener la consistencia en la entrega.\n\nAl mejorar la eficiencia del manejo y minimizar los riesgos durante el tránsito, nuestras soluciones contribuyen a operaciones más fluidas y a un mejor rendimiento general. Un embalaje confiable también desempeña un papel clave en la mejora de la satisfacción del cliente, garantizando que los productos lleguen a su destino de forma segura y en buenas condiciones. Con un fuerte enfoque en la durabilidad y la fiabilidad, el embalaje de Novasac le permite gestionar sus operaciones con confianza mientras mantiene altos estándares de calidad.",
      },
    ],
    recommendedProducts: [
      "FIBC / Jumbo Bags",
      "PP Woven Sacks",
      "Valve Bags",
      "BOPP Laminated Bags",
      "Liner Bags",
    ],
  },
  {
    slug: "alimentos-y-agricultura",
    label: "Alimentos y Agricultura",
    tagline: "Cosechado Bien, Empacado Firme",
    accentColor: "bg-green-700",
    accentText: "text-green-800",
    accentBorder: "border-green-300",
    heroImage: "/images/industry/food-agriculture.png",
    sections: [
      {
        title: "Acerca de Nuestras Soluciones",
        content:
          "Las soluciones de embalaje de NOVASAC han transformado la forma en que se manejan, almacenan y transportan los productos agrícolas y alimentarios. Desde fertilizantes y semillas hasta cultivos cosechados como granos y tubérculos, nuestras bolsas están diseñadas para gestionar grandes cantidades de manera eficiente y segura. Fabricadas con materiales resistentes y duraderos, garantizan un rendimiento confiable incluso en condiciones exigentes.\n\nPara la industria alimentaria, ofrecemos Big Bags de grado alimenticio especialmente desarrolladas, ideales para productos a granel como granos, azúcar y sal. Estas bolsas se fabrican bajo estrictos estándares de higiene y seguridad para proteger los productos de la contaminación en toda la cadena de suministro. Con características como opciones de ventilación para productos sensibles, nuestro embalaje ayuda a mantener la calidad y frescura del producto. Al mejorar la eficiencia del manejo y reducir las pérdidas, NOVASAC desempeña un papel clave en el apoyo a los sistemas modernos de agricultura y distribución de alimentos.",
      },
      {
        title: "Embalaje Inteligente para sus Necesidades",
        content:
          "Seleccionar el embalaje adecuado es esencial para mantener la calidad y seguridad de los productos alimentarios y agrícolas. En Novasac, le ayudamos a elegir soluciones que garanticen un transporte seguro y un almacenamiento eficiente. Si bien opciones tradicionales como las bolsas de yute se usaban comúnmente en el pasado, los embalajes modernos como los FIBC, las bolsas de polipropileno tejido (WPP) y las soluciones laminadas avanzadas ofrecen una mejor protección y manejo.\n\nNuestro enfoque está en ofrecer embalaje de grado alimenticio de alta calidad que minimice el riesgo de contaminación y preserve la integridad del producto. Invertimos continuamente en procesos de fabricación avanzados y mantenemos un estricto control de calidad para cumplir con los estándares globales. Nuestras soluciones FIBC se producen en entornos de sala limpia certificados, garantizando los más altos niveles de higiene. Con orientación experta y soluciones personalizadas, ayudamos a las empresas a mejorar la eficiencia mientras mantienen la seguridad y el cumplimiento en todas sus operaciones.",
      },
      {
        title: "Principales Beneficios de Nuestras Soluciones de Embalaje para Alimentos y Agricultura",
        content:
          "Nuestras soluciones de embalaje están diseñadas para preservar la frescura, la calidad y la higiene durante el almacenamiento y el transporte. Son adecuadas para el manejo a granel de granos, semillas, fertilizantes y otros productos agrícolas, garantizando un movimiento seguro y eficiente en toda la cadena de suministro. Con características que minimizan la contaminación y reducen el deterioro, nuestras soluciones ayudan a mantener la integridad del producto desde el origen hasta el destino.\n\nOfrecemos opciones de grado alimenticio que cumplen con estrictos estándares de seguridad para el manejo de productos consumibles. Las características de ventilación están disponibles cuando se requieren para mantener un flujo de aire adecuado y la condición del producto. Nuestro embalaje también mejora la eficiencia del manejo, reduce la pérdida de producto y optimiza el espacio de almacenamiento mediante diseños flexibles y apilables. Además, todas las soluciones cumplen con las normativas pertinentes de seguridad alimentaria e industria, al tiempo que apoyan prácticas de embalaje rentables y sostenibles.",
      },
      {
        title: "Apoyando sus Productos",
        content:
          "Nuestro embalaje está diseñado para apoyar sus productos en cada etapa, garantizando resistencia, protección y comodidad durante el manejo, almacenamiento y transporte. Utilizando materiales de alta calidad y estructuras bien diseñadas, ayudamos a mantener la estabilidad del producto y prevenir daños, incluso en condiciones difíciles. Esto resulta en una calidad consistente y menores pérdidas durante el tránsito.\n\nAl minimizar los riesgos relacionados con el manejo y almacenamiento, nuestras soluciones mejoran la eficiencia operativa y simplifican la logística. Un embalaje confiable también desempeña un papel importante en el mantenimiento de la satisfacción del cliente, garantizando que los productos lleguen a su destino de forma segura y en las mejores condiciones posibles. Con un enfoque en la durabilidad, la higiene y el rendimiento, el embalaje de Novasac ayuda a las empresas a gestionar sus cadenas de suministro con confianza y consistencia.",
      },
    ],
    recommendedProducts: [
      "PP Woven Bags (Food Grade)",
      "BOPP Laminated Bags",
      "Leno Bags (for ventilation)",
      "FIBC Bags (bulk storage)",
      "Liner Bags (for hygiene protection)",
    ],
  },
  {
    slug: "industria-quimica",
    label: "Industria Química",
    tagline: "Soluciones Seguras para una Química Compleja",
    accentColor: "bg-blue-700",
    accentText: "text-blue-800",
    accentBorder: "border-blue-300",
    heroImage: "/images/industry/chemical.png",
    sections: [
      {
        title: "Acerca de Nuestras Soluciones",
        content:
          "Las soluciones de embalaje de NOVASAC desempeñan un papel fundamental en la industria química, donde la seguridad, la fiabilidad y la contención segura son esenciales. Nuestras bolsas están diseñadas específicamente para manejar productos químicos en forma de polvo, gránulos o pellets, garantizando un almacenamiento y transporte seguros en cada etapa de la cadena de suministro. Fabricadas con materiales resistentes y duraderos, ayudan a minimizar los riesgos de fugas, contaminación y exposición, incluso al tratar con sustancias sensibles o peligrosas.\n\nPara satisfacer las necesidades específicas de las aplicaciones químicas, nuestro embalaje incluye características avanzadas como forros internos, barreras de humedad y propiedades antiestáticas o conductivas. Estas características ayudan a prevenir reacciones no deseadas y a mantener la estabilidad del producto. Diseñadas en cumplimiento con estrictas regulaciones de la industria, las soluciones de NOVASAC garantizan tanto la integridad del producto como la seguridad ambiental, convirtiéndolas en una opción confiable para los requisitos modernos de embalaje químico.",
      },
      {
        title: "Embalaje Inteligente para sus Necesidades",
        content:
          "En Novasac, comprendemos los complejos requisitos que implica el embalaje y manejo de productos químicos. Con sólidas capacidades internas y una red confiable de socios de producción, ofrecemos soluciones que abordan los desafíos de almacenar y transportar materiales sensibles al medio ambiente. Nuestra experiencia abarca una amplia gama de aplicaciones, incluidos polímeros especiales, dióxido de titanio (TiO₂), fibras de vidrio, pigmentos, recubrimientos en polvo, resinas, detergentes, polvos de carbono, intermedios, granulados, pesticidas y fertilizantes.\n\nNos enfocamos en ofrecer soluciones de embalaje que combinen seguridad, eficiencia y cumplimiento normativo. Cada solución está diseñada para garantizar un manejo seguro mientras se mantiene la calidad del material. Nuestro equipo trabaja estrechamente con los clientes para comprender sus necesidades específicas y recomendar las opciones de embalaje más adecuadas. Con el enfoque correcto, ayudamos a las empresas a mejorar la eficiencia operativa garantizando al mismo tiempo un manejo seguro y conforme de los productos químicos.",
      },
      {
        title: "Principales Beneficios de Nuestras Soluciones de Embalaje Químico",
        content:
          "Nuestras soluciones de embalaje químico están diseñadas para garantizar la máxima seguridad y fiabilidad durante el almacenamiento y transporte. Proporcionan una contención segura de los productos químicos, reduciendo significativamente los riesgos de fugas, exposición y contaminación. Adecuadas para el manejo de polvos, gránulos y materiales peligrosos, nuestro embalaje respalda operaciones eficientes y seguras en diversas aplicaciones.\n\nEquipadas con características avanzadas como forros internos, barreras de humedad y propiedades antiestáticas, nuestras soluciones ayudan a mantener la estabilidad del producto y prevenir reacciones no deseadas. Todo el embalaje se desarrolla en cumplimiento con estrictas normas de seguridad y regulación, garantizando confianza en el rendimiento y la fiabilidad. Al mejorar las condiciones de almacenamiento y simplificar el transporte, nuestras soluciones contribuyen a operaciones más fluidas en la cadena de suministro, protegiendo tanto a las personas como al medio ambiente.",
      },
      {
        title: "Apoyando sus Productos",
        content:
          "Nuestro embalaje está diseñado para apoyar sus productos en cada etapa, ofreciendo resistencia, protección y comodidad durante el manejo, almacenamiento y transporte. Utilizando materiales de alta calidad y diseños cuidadosamente elaborados, garantizamos la estabilidad del producto y reducimos el riesgo de daños, incluso en condiciones exigentes. Esto ayuda a mantener la consistencia y fiabilidad en todas las operaciones.\n\nAl minimizar los riesgos durante el manejo y el tránsito, nuestras soluciones mejoran la eficiencia general y reducen la pérdida de material. Un embalaje confiable también desempeña un papel clave en el mantenimiento de la satisfacción del cliente, garantizando que los productos lleguen a su destino de forma segura y en condiciones óptimas. Con un fuerte enfoque en el rendimiento, la seguridad y la fiabilidad, el embalaje de Novasac permite a las empresas manejar productos químicos con confianza y control.",
      },
    ],
    recommendedProducts: [
      "FIBC Bags (UN Certified options)",
      "PP Woven Bags with Liners",
      "BOPP Laminated Bags",
    ],
  },
  {
    slug: "reciclaje-y-gestion-de-residuos",
    label: "Reciclaje y Gestión de Residuos",
    tagline: "Soluciones Sostenibles para una Gestión de Residuos más Inteligente",
    accentColor: "bg-teal-700",
    accentText: "text-teal-800",
    accentBorder: "border-teal-300",
    heroImage: "/images/industry/recycle-and-wast-management.png",
    sections: [
      {
        title: "Acerca de Nuestras Soluciones",
        content:
          "Las soluciones de embalaje de NOVASAC ofrecen una forma confiable y eficiente de gestionar las operaciones de reciclaje y residuos. Diseñadas para ser resistentes y duraderas, nuestras bolsas son capaces de manejar cargas pesadas, así como materiales de forma irregular, sin comprometer la seguridad ni el rendimiento. Se utilizan ampliamente para la recolección, segregación y transporte de materiales reciclables y residuos en diferentes industrias.\n\nCon un enfoque en la practicidad, nuestro embalaje simplifica los procesos de manejo y mejora la eficiencia operativa. La naturaleza reutilizable de nuestras bolsas ayuda a reducir los residuos de embalaje y apoya prácticas ambientalmente responsables. Al reducir la necesidad de materiales de un solo uso, las empresas pueden disminuir su huella de carbono general. Al combinar durabilidad con sostenibilidad, las soluciones de NOVASAC desempeñan un papel importante en la creación de sistemas de gestión de residuos más limpios, seguros y eficientes.",
      },
      {
        title: "Embalaje Inteligente para sus Necesidades",
        content:
          "Nuestras soluciones de embalaje inteligente están diseñadas para hacer que los procesos de reciclaje y gestión de residuos sean más organizados y eficientes. Desde la recolección hasta la segregación y el transporte, nuestras bolsas ofrecen flexibilidad y durabilidad para manejar una amplia gama de materiales de desecho, incluidas cargas pesadas y desiguales. Esto garantiza operaciones más fluidas y reduce los desafíos comúnmente enfrentados en el manejo de residuos.\n\nNos enfocamos en ofrecer soluciones que sean tanto prácticas como sostenibles. Nuestro embalaje ayuda a optimizar el almacenamiento, mejorar la eficiencia del manejo y reducir el impacto ambiental. Con estructuras bien diseñadas y materiales confiables, nuestras soluciones respaldan prácticas de gestión de residuos seguras y efectivas. Al elegir el embalaje adecuado, las empresas pueden gestionar los recursos de manera más eficiente mientras mantienen la limpieza, la seguridad y la responsabilidad ambiental en sus operaciones.",
      },
      {
        title: "Principales Beneficios de Nuestras Soluciones de Embalaje para Reciclaje y Gestión de Residuos",
        content:
          "Nuestras soluciones de embalaje están construidas para satisfacer los exigentes requisitos de las operaciones de gestión de residuos. Cuentan con diseños fuertes y duraderos que pueden transportar de forma segura materiales de desecho pesados e irregulares sin riesgo de daño. Esto garantiza una recolección, segregación y transporte eficientes de materiales reciclables en las diferentes etapas del proceso.\n\nAl minimizar los derrames y mejorar la seguridad durante el manejo y el tránsito, nuestras soluciones ayudan a crear un flujo de trabajo más controlado y organizado. La naturaleza reutilizable y duradera de nuestro embalaje respalda las prácticas sostenibles y reduce la necesidad de reemplazos frecuentes. Además, estas soluciones ayudan a reducir el impacto ambiental y contribuyen a disminuir la huella de carbono general. Con una mayor eficiencia en el almacenamiento y la logística, las empresas pueden gestionar los residuos de manera más efectiva y responsable.",
      },
      {
        title: "Apoyando sus Productos",
        content:
          "Nuestras soluciones de embalaje están diseñadas para apoyar los materiales de desecho y reciclables en cada etapa, desde la recolección y segregación hasta el almacenamiento y transporte. Fabricadas con materiales de alta calidad, ofrecen la resistencia y fiabilidad necesarias para manejar cargas voluminosas, pesadas o irregulares con facilidad. Esto ayuda a reducir el riesgo de derrames y garantiza un manejo más seguro durante todo el proceso.\n\nAl mejorar la organización y reducir los desafíos operativos, nuestro embalaje contribuye a sistemas de gestión de residuos más fluidos y eficientes. La durabilidad y reutilización de nuestras soluciones también respaldan los objetivos de sostenibilidad a largo plazo. Con un fuerte enfoque en el rendimiento y la responsabilidad ambiental, el embalaje de Novasac ayuda a las empresas a mantener operaciones eficientes mientras contribuyen a prácticas más limpias y sostenibles.",
      },
    ],
    recommendedProducts: ["FIBC / Jumbo Bags", "Heavy-duty PP Woven Sacks"],
  },
  {
    slug: "mineria-y-minerales",
    label: "Minería y Minerales",
    tagline: "Apoyando una Minería Segura y Eficiente",
    accentColor: "bg-stone-700",
    accentText: "text-stone-800",
    accentBorder: "border-stone-400",
    heroImage: "/images/industry/mining.png",
    sections: [
      {
        title: "Acerca de Nuestras Soluciones",
        content:
          "Las soluciones de embalaje de NOVASAC están diseñadas para satisfacer los exigentes requisitos de la industria minera, donde la resistencia, la seguridad y la eficiencia son fundamentales. Nuestras bolsas ofrecen una solución confiable para el manejo de minerales, concentrados y otros materiales extraídos, desde el punto de extracción hasta el procesamiento y la distribución final. Garantizan un movimiento fluido y organizado de materiales a granel en cada etapa de la cadena de suministro.\n\nFabricado para funcionar en condiciones extremas, nuestro embalaje ofrece una durabilidad excepcional y una alta capacidad de carga. Esto lo hace ideal para gestionar materiales pesados y abrasivos comúnmente presentes en las operaciones mineras. La construcción robusta ayuda a prevenir derrames, reduce la pérdida de material y favorece un manejo más seguro en entornos exigentes. Con un fuerte enfoque en la fiabilidad y el rendimiento, NOVASAC ofrece soluciones de embalaje que ayudan a mejorar la eficiencia y la seguridad en las operaciones mineras.",
      },
      {
        title: "Embalaje Inteligente para sus Necesidades",
        content:
          "Nuestras soluciones de embalaje inteligente para la industria minera están diseñadas para manejar materiales pesados, abrasivos y a granel con la máxima eficiencia. Diseñadas con durabilidad y alta capacidad de carga, ofrecen un soporte confiable para el almacenamiento, transporte y manejo de minerales y concentrados. Esto garantiza operaciones fluidas incluso en entornos difíciles y exigentes.\n\nNos enfocamos en mejorar la eficiencia operativa reduciendo la pérdida de material y simplificando los procesos de manejo. Nuestras soluciones de embalaje están diseñadas para mejorar la seguridad durante la carga, descarga y tránsito, ayudando a las empresas a mantener un mejor control sobre sus operaciones. Con un rendimiento sólido y confiable, nuestras soluciones apoyan a las empresas mineras en la optimización de sus flujos de trabajo, manteniendo al mismo tiempo la seguridad y la consistencia en toda la cadena de suministro.",
      },
      {
        title: "Principales Beneficios de Nuestras Soluciones de Embalaje Minero",
        content:
          "Nuestras soluciones de embalaje ofrecen una alta capacidad de carga, lo que las hace adecuadas para manejar minerales y concentrados pesados con facilidad. La construcción duradera está diseñada para resistir materiales abrasivos y condiciones ambientales adversas comúnmente presentes en las operaciones mineras. Esto garantiza un rendimiento confiable incluso en las situaciones más exigentes.\n\nAl minimizar los derrames y reducir la pérdida de material durante el tránsito, nuestras soluciones ayudan a mejorar la eficiencia y el control de costos. También respaldan el manejo, almacenamiento y transporte seguros de materiales a granel, reduciendo los riesgos durante las operaciones. Con características que mejoran los procesos de carga, descarga y logística, nuestro embalaje contribuye a flujos de trabajo más fluidos. En general, proporcionan un rendimiento consistente y confiable en toda la cadena de suministro minera.",
      },
      {
        title: "Apoyando sus Productos",
        content:
          "Nuestras soluciones de embalaje están construidas para apoyar la naturaleza exigente de las operaciones mineras en cada etapa. Desde los sitios de extracción hasta las unidades de procesamiento y el transporte, ofrecen la resistencia y fiabilidad necesarias para manejar materiales pesados y abrasivos de manera efectiva. Esto ayuda a garantizar un movimiento seguro y eficiente de los productos a granel.\n\nCon un enfoque en la durabilidad y el rendimiento, nuestro embalaje minimiza la pérdida de material y mejora la eficiencia del manejo. También mejora la seguridad al reducir los riesgos asociados con cargas pesadas y entornos difíciles. Diseñadas para rendir consistentemente en condiciones adversas, nuestras soluciones ayudan a optimizar las operaciones y respaldar una mejor productividad. Con el embalaje de Novasac, las empresas pueden gestionar sus procesos mineros con confianza y fiabilidad.",
      },
    ],
    recommendedProducts: ["FIBC Bags (Heavy-duty)", "PP Woven Sacks"],
  },
];
