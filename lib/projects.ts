export interface Project {
    title: string;
    category: string;
    description: string;
    tags: string[];
    image: string;
    bg: string;
    link: string;
}

export const projects: Project[] = [
    {
        title: "Zuraiq Textiles",
        category: "Textile & Fashion",
        description:
            "Oman's preferred destination for high-quality fabrics, offering a curated selection for everyday wear and seasonal uniforms.",
        tags: ["Next.js", "Tailwind CSS", "E-Commerce"],
        image: "/images/zuraiq-textiles-hero.png",
        bg: "bg-[#0A2E36]",
        link: "https://www.zuraiqtextiles.com",
    },
    {
        title: "EasYourTour",
        category: "Travel & Tourism",
        description:
            "Comprehensive travel platform offering tour packages, flight bookings, and visa assistance for global destinations.",
        tags: ["React", "Node.js", "Travel Tech"],
        image: "/images/easyourtour-hero.png",
        bg: "bg-[#DB504A]",
        link: "https://www.easyourtour.com",
    },
    {
        title: "Zuraiq Group",
        category: "Corporate",
        description:
            "A diversified business group serving retailers and contractors across Oman, from IT systems to fashion and fittings.",
        tags: ["Corporate", "Web Systems", "Enterprise"],
        image: "/images/zuraiq-group-hero.png",
        bg: "bg-[#E3B505]",
        link: "https://www.zuraiqgroup.com",
    },
    {
        title: "Zuraiq BM",
        category: "Building Materials",
        description:
            "Premium building materials, tools, and home finishes — featuring the Jawaher brand, designed for modern living and lasting performance.",
        tags: ["Next.js", "E-Commerce", "Product Catalog"],
        image: "/images/zuraiqbm-hero.png",
        bg: "bg-[#6B3A1F]",
        link: "https://zuraiqbm.com",
    },
    {
        title: "Bytesize",
        category: "Technology Agency",
        description:
            "A digital solutions agency helping businesses transform and scale by integrating modern technology into their operations.",
        tags: ["React", "Digital Transformation", "Agency"],
        image: "/images/bytesize-hero.png",
        bg: "bg-[#1A2332]",
        link: "https://bytesize.co.in",
    },
    {
        title: "SCANiD Systems",
        category: "EdTech & RFID",
        description:
            "Specialists in RFID-based library management, electronic identity card systems, and comprehensive ERP solutions for schools and colleges.",
        tags: ["RFID", "ERP", "Android Apps"],
        image: "/images/scanid-hero.png",
        bg: "bg-[#E8476C]",
        link: "https://scanidsystems.com",
    },
];
