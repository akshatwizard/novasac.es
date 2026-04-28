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
    slug: "construction",
    title: "Construction Industry",
    description:
      "Durable and heavy-duty packaging bags designed for transporting cement, sand, and construction materials safely.",
    icon: HardHat,
    image: "/images/industry/img-1.png",
  },
  {
    slug: "food-agriculture",
    title: "Food and Agriculture Sector",
    description:
      "Food-grade and moisture-resistant bags ideal for storing and transporting grains and agricultural products.",
    icon: Wheat,
    image: "/images/industry/img-2.png",
  },
  {
    slug: "chemical",
    title: "Chemical Industry",
    description:
      "Specialized packaging solutions built to safely handle chemicals, powders, and industrial materials.",
    icon: FlaskConical,
    image: "/images/industry/img-3.png",
  },
  {
    slug: "recycling-waste",
    title: "Recycling and Waste Management",
    description:
      "Strong and eco-friendly bags suitable for collecting and transporting recyclable materials.",
    icon: Recycle,
    image: "/images/industry/img-4.png",
  },
  {
    slug: "mining",
    title: "Mining and Minerals",
    description:
      "High-strength industrial bags designed to carry minerals, ores, and heavy mining materials.",
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
  label: string;         // e.g. "Food & Agriculture"
  tagline: string;       // e.g. "Harvested Right, Packed Tight"
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
    slug: "construction",
    label: "Construction Industry",
    tagline: "Packaging Solutions That Carry the Load",
    accentColor: "bg-amber-600",
    accentText: "text-amber-700",
    accentBorder: "border-amber-300",
    // bgColor:"bg-amber-100",
    heroImage: "/images/industry/construction.png",
    sections: [
      {
        title: "About Our Solutions",
        content:
          "NOVASAC packaging solutions are specially designed to meet the demanding needs of the construction industry. Whether it is sand, gravel, cement, or aggregates, our bags ensure safe and efficient handling of heavy materials. Built with a strong focus on durability and load-bearing capacity, our packaging helps reduce the risk of damage during transportation and on-site movement.\n\nOur solutions are created to improve logistics by making handling easier, faster, and more organized. With excellent stackability and space-saving designs, they allow better storage management at construction sites. This not only improves operational efficiency but also enhances safety for workers. By choosing reliable and high-performance packaging, businesses can ensure smoother workflows and better cost control across their operations.",
      },
      {
        title: "Smart Packaging for Your Needs",
        content:
          "Choosing the right packaging can make a significant difference in how efficiently your operations run. At Novasac, we offer flexible options that can be tailored to your specific requirements. From selecting suitable lifting features such as loops or sleeves to deciding between single-use or reusable bags, every detail is designed to improve ease of handling and performance.\n\nWe also provide customization options that allow you to add your branding or logo, helping your business stand out in the market. Our team works closely with clients to understand their needs and recommend the most suitable packaging solutions. With the right combination of design, functionality, and customization, we help you achieve better efficiency, cost savings, and a more professional presentation for your products.",
      },
      {
        title: "Key Benefits of Our Construction Packaging Solutions",
        content:
          "Our packaging solutions are designed to deliver both performance and safety across all stages of use. They ensure efficient handling and strong protection of construction materials during storage, transportation, and movement. The durable design helps reduce risks related to worker safety while also minimizing environmental impact.\n\nOur products meet all relevant legal and regulatory standards, giving you confidence in compliance and reliability. They provide secure containment, even for materials that may require extra care or handling. In addition, customizable printing options offer strong branding opportunities, allowing your packaging to represent your business effectively. With a focus on sustainability, our solutions also support environmentally responsible practices, helping your company move towards more efficient and eco-conscious operations.",
      },
      {
        title: "Supporting Your Products",
        content:
          "Our packaging is designed to support your products at every stage, from storage to transportation. Using high-quality materials and practical design features, we ensure strength, stability, and protection even in challenging conditions. This helps prevent damage, reduce material loss, and maintain consistency in delivery.\n\nBy improving handling efficiency and minimizing risks during transit, our solutions contribute to smoother operations and better overall performance. Reliable packaging also plays a key role in enhancing customer satisfaction by ensuring that products reach their destination safely and in good condition. With a strong focus on durability and dependability, Novasac packaging allows you to manage your operations with confidence while maintaining high standards of quality.",
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
    slug: "food-agriculture",
    label: "Food & Agriculture",
    tagline: "Harvested Right, Packed Tight",
    accentColor: "bg-green-700",
    accentText: "text-green-800",
    accentBorder: "border-green-300",
    heroImage: "/images/industry/food-agriculture.png",
    sections: [
      {
        title: "About Our Solutions",
        content:
          "NOVASAC packaging solutions have transformed the way agricultural and food products are handled, stored, and transported. From fertilizers and seeds to harvested crops like grains and tubers, our bags are designed to manage large quantities efficiently and safely. Built with strong and durable materials, they ensure reliable performance even in demanding conditions.\n\nFor the food industry, we offer specially developed food-grade Big Bags that are ideal for bulk products such as grains, sugar, and salt. These bags are manufactured under strict hygiene and safety standards to protect products from contamination throughout the supply chain. With features like ventilation options for sensitive produce, our packaging helps maintain product quality and freshness. By improving handling efficiency and reducing losses, NOVASAC plays a key role in supporting modern agriculture and food distribution systems.",
      },
      {
        title: "Smart Packaging for Your Needs",
        content:
          "Selecting the right packaging is essential for maintaining the quality and safety of food and agricultural products. At Novasac, we help you choose solutions that ensure secure transportation and efficient storage. While traditional options like jute bags were commonly used in the past, modern packaging such as FIBCs, woven polypropylene (WPP) bags, and advanced laminated solutions offer better protection and handling.\n\nOur focus is on delivering high-quality, food-grade packaging that minimizes the risk of contamination and preserves product integrity. We continuously invest in advanced manufacturing processes and maintain strict quality control to meet global standards. Our FIBC solutions are produced in certified cleanroom environments, ensuring the highest levels of hygiene. With expert guidance and customized solutions, we help businesses improve efficiency while maintaining safety and compliance across operations.",
      },
      {
        title: "Key Benefits of Our Food & Agriculture Packaging Solutions",
        content:
          "Our packaging solutions are designed to preserve freshness, quality, and hygiene throughout storage and transportation. They are suitable for bulk handling of grains, seeds, fertilizers, and other agricultural products, ensuring safe and efficient movement across the supply chain. With features that minimize contamination and reduce spoilage, our solutions help maintain product integrity from origin to destination.\n\nWe offer food-grade options that meet strict safety standards for handling consumable products. Ventilation features are available where required to maintain proper airflow and product condition. Our packaging also improves handling efficiency, reduces product loss, and optimizes storage space through flexible and stackable designs. In addition, all solutions comply with relevant food safety and industry regulations while supporting cost-effective and sustainable packaging practices.",
      },
      {
        title: "Supporting Your Products",
        content:
          "Our packaging is designed to support your products at every stage, ensuring strength, protection, and convenience during handling, storage, and transportation. Using high-quality materials and well-designed structures, we help maintain product stability and prevent damage, even in challenging conditions. This results in consistent quality and reduced losses during transit.\n\nBy minimizing risks related to handling and storage, our solutions improve operational efficiency and simplify logistics. Reliable packaging also plays an important role in maintaining customer satisfaction by ensuring that products reach their destination safely and in the best possible condition. With a focus on durability, hygiene, and performance, Novasac packaging helps businesses manage their supply chains with confidence and consistency.",
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
    slug: "chemical",
    label: "Chemical Industry",
    tagline: "Safe Solutions for Complex Chemistry",
    accentColor: "bg-blue-700",
    accentText: "text-blue-800",
    accentBorder: "border-blue-300",
    heroImage: "/images/industry/chemical.png",
    sections: [
      {
        title: "About Our Solutions",
        content:
          "NOVASAC packaging solutions play a critical role in the chemical industry, where safety, reliability, and secure containment are essential. Our bags are specifically engineered to handle chemicals in powder, granular, or pellet form, ensuring safe storage and transportation across every stage of the supply chain. Built with strong and durable materials, they help minimize the risks of leakage, contamination, and exposure, even when dealing with sensitive or hazardous substances.\n\nTo meet the specific needs of chemical applications, our packaging includes advanced features such as inner liners, moisture barriers, and anti-static or conductive properties. These features help prevent unwanted reactions and maintain product stability. Designed in compliance with strict industry regulations, NOVASAC solutions ensure both product integrity and environmental safety, making them a reliable choice for modern chemical packaging requirements.",
      },
      {
        title: "Smart Packaging for Your Needs",
        content:
          "At Novasac, we understand the complex requirements involved in packaging and handling chemical products. With strong in-house capabilities and a reliable network of production partners, we offer solutions that address the challenges of storing and transporting environmentally sensitive materials. Our experience covers a wide range of applications, including specialty polymers, titanium dioxide (TiO₂), glass fibres, pigments, powder coatings, resins, detergents, carbon powders, intermediates, granulates, pesticides, and fertilizers.\n\nWe focus on delivering packaging solutions that combine safety, efficiency, and regulatory compliance. Each solution is designed to ensure secure handling while maintaining the quality of the material. Our team works closely with clients to understand their specific needs and recommend the most suitable packaging options. With the right approach, we help businesses improve operational efficiency while ensuring safe and compliant handling of chemical products.",
      },
      {
        title: "Key Benefits of Our Chemical Packaging Solutions",
        content:
          "Our chemical packaging solutions are designed to ensure maximum safety and reliability during storage and transportation. They provide secure containment of chemicals, significantly reducing the risks of leakage, exposure, and contamination. Suitable for handling powders, granules, and hazardous materials, our packaging supports efficient and safe operations across various applications.\n\nEquipped with advanced features such as inner liners, moisture barriers, and anti-static properties, our solutions help maintain product stability and prevent unwanted reactions. All packaging is developed in compliance with strict safety and regulatory standards, ensuring confidence in performance and reliability. By enhancing storage conditions and simplifying transportation, our solutions contribute to smoother supply chain operations while protecting both people and the environment.",
      },
      {
        title: "Supporting Your Products",
        content:
          "Our packaging is designed to support your products at every stage, delivering strength, protection, and convenience throughout handling, storage, and transportation. Using high-quality materials and carefully engineered designs, we ensure product stability and reduce the risk of damage, even in demanding conditions. This helps maintain consistency and reliability across all operations.\n\nBy minimizing risks during handling and transit, our solutions improve overall efficiency and reduce material loss. Reliable packaging also plays a key role in maintaining customer satisfaction by ensuring that products reach their destination safely and in optimal condition. With a strong focus on performance, safety, and dependability, Novasac packaging enables businesses to handle chemical products with confidence and control.",
      },
    ],
    recommendedProducts: [
      "FIBC Bags (UN Certified options)",
      "PP Woven Bags with Liners",
      "BOPP Laminated Bags",
    ],
  },
  {
    slug: "recycling-waste",
    label: "Recycling & Waste Management",
    tagline: "Sustainable Solutions for Smarter Waste Management",
    accentColor: "bg-teal-700",
    accentText: "text-teal-800",
    accentBorder: "border-teal-300",
    heroImage: "/images/industry/recycle-and-wast-management.png",
    sections: [
      {
        title: "About Our Solutions",
        content:
          "NOVASAC packaging solutions provide a reliable and efficient way to manage recycling and waste operations. Designed for strength and durability, our bags are capable of handling heavy loads as well as irregularly shaped materials without compromising safety or performance. They are widely used for the collection, segregation, and transportation of recyclable materials and waste across different industries.\n\nWith a focus on practicality, our packaging simplifies handling processes and improves operational efficiency. The reusable nature of our bags helps reduce packaging waste and supports environmentally responsible practices. By lowering the need for single-use materials, businesses can reduce their overall carbon footprint. Combining durability with sustainability, NOVASAC solutions play an important role in creating cleaner, safer, and more efficient waste management systems.",
      },
      {
        title: "Smart Packaging for Your Needs",
        content:
          "Our smart packaging solutions are designed to make recycling and waste management processes more organized and efficient. From collection to segregation and transportation, our bags offer flexibility and durability to handle a wide range of waste materials, including heavy and uneven loads. This ensures smoother operations and reduces the challenges commonly faced in waste handling.\n\nWe focus on providing solutions that are both practical and sustainable. Our packaging helps optimize storage, improve handling efficiency, and reduce environmental impact. With well-designed structures and reliable materials, our solutions support safe and effective waste management practices. By choosing the right packaging, businesses can manage resources more efficiently while maintaining cleanliness, safety, and environmental responsibility across their operations.",
      },
      {
        title: "Key Benefits of Our Recycling & Waste Management Packaging Solutions",
        content:
          "Our packaging solutions are built to handle the demanding requirements of waste management operations. They feature strong and durable designs that can safely carry heavy and irregular waste materials without risk of damage. This ensures efficient collection, segregation, and transportation of recyclable materials across different stages of the process.\n\nBy minimizing spillage and improving safety during handling and transit, our solutions help create a more controlled and organized workflow. The reusable and long-lasting nature of our packaging supports sustainable practices and reduces the need for frequent replacements. In addition, these solutions help lower environmental impact and contribute to reducing the overall carbon footprint. With improved storage and logistics efficiency, businesses can manage waste more effectively and responsibly.",
      },
      {
        title: "Supporting Your Products",
        content:
          "Our packaging solutions are designed to support waste and recyclable materials at every stage, from collection and segregation to storage and transportation. Built with high-quality materials, they provide the strength and reliability needed to handle bulky, heavy, or irregular loads with ease. This helps reduce the risk of spillage and ensures safer handling throughout the process.\n\nBy improving organization and reducing operational challenges, our packaging contributes to smoother and more efficient waste management systems. The durability and reusability of our solutions also support long-term sustainability goals. With a strong focus on performance and environmental responsibility, Novasac packaging helps businesses maintain efficient operations while contributing to cleaner and more sustainable practices.",
      },
    ],
    recommendedProducts: ["FIBC / Jumbo Bags", "Heavy-duty PP Woven Sacks"],
  },
  {
    slug: "mining",
    label: "Mining & Minerals",
    tagline: "Supporting Safe and Efficient Mining",
    accentColor: "bg-stone-700",
    accentText: "text-stone-800",
    accentBorder: "border-stone-400",
    heroImage: "/images/industry/mining.png",
    sections: [
      {
        title: "About Our Solutions",
        content:
          "NOVASAC packaging solutions are designed to meet the demanding requirements of the mining industry, where strength, safety, and efficiency are critical. Our bags provide a reliable solution for handling minerals, concentrates, and other extracted materials from the point of extraction to processing and final distribution. They ensure smooth and organized movement of bulk materials across every stage of the supply chain.\n\nBuilt to perform in extreme conditions, our packaging offers exceptional durability and high load-bearing capacity. This makes it ideal for managing heavy and abrasive materials commonly found in mining operations. The robust construction helps prevent spillage, reduces material loss, and supports safer handling in challenging environments. With a strong focus on reliability and performance, NOVASAC delivers packaging solutions that help improve efficiency and safety in mining operations.",
      },
      {
        title: "Smart Packaging for Your Needs",
        content:
          "Our smart packaging solutions for the mining industry are engineered to handle heavy, abrasive, and bulk materials with maximum efficiency. Designed with durability and high load capacity, they provide reliable support for the storage, transportation, and handling of minerals and concentrates. This ensures smooth operations even in tough and demanding environments.\n\nWe focus on improving operational efficiency by reducing material loss and simplifying handling processes. Our packaging solutions are built to enhance safety during loading, unloading, and transit, helping businesses maintain better control over their operations. With strong and dependable performance, our solutions support mining companies in optimizing their workflows while maintaining safety and consistency across the supply chain.",
      },
      {
        title: "Key Benefits of Our Mining Packaging Solutions",
        content:
          "Our packaging solutions offer high load-bearing capacity, making them suitable for handling heavy minerals and concentrates with ease. The durable construction is designed to withstand abrasive materials and harsh environmental conditions commonly found in mining operations. This ensures reliable performance even in the most challenging situations.\n\nBy minimizing spillage and reducing material loss during transit, our solutions help improve efficiency and cost control. They also support safe handling, storage, and transportation of bulk materials, reducing risks during operations. With features that enhance loading, unloading, and logistics processes, our packaging contributes to smoother workflows. Overall, they provide consistent and dependable performance across the entire mining supply chain.",
      },
      {
        title: "Supporting Your Products",
        content:
          "Our packaging solutions are built to support the demanding nature of mining operations at every stage. From extraction sites to processing units and transportation, they provide the strength and reliability needed to handle heavy and abrasive materials effectively. This helps ensure safe and efficient movement of bulk products.\n\nWith a focus on durability and performance, our packaging minimizes material loss and improves handling efficiency. It also enhances safety by reducing risks associated with heavy loads and difficult environments. Designed to perform consistently in tough conditions, our solutions help streamline operations and support better productivity. With Novasac packaging, businesses can manage their mining processes with confidence and reliability.",
      },
    ],
    recommendedProducts: ["FIBC Bags (Heavy-duty)", "PP Woven Sacks"],
  },
];