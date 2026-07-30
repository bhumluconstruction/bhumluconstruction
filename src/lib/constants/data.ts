import type { ContactDetail, FooterSection, GalleryItem, HeroHighlight, ProjectItem, ServiceItem, StatItem } from "@/types/common.types";
import type { NavItem } from "@/types/navbar.types";

export const navItems: NavItem[] = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "About", url: "/about" },
  {
    id: 3,
    title: "Services",
    url: "/services",
    children: [
      { title: "Survey", url: "/services/survey" },
      { title: "Construction", url: "/services/construction" },
    ],
  },
  { id: 4, title: "Projects", url: "/projects" },
  { id: 5, title: "Gallery", url: "/gallery" },
  { id: 6, title: "Contact", url: "/contact" },
];

export const footerSections: FooterSection[] = [
  {
    title: "Company",
    itemsmenu: [
      { item: "About" },
      { item: "Projects" },
      { item: "Gallery" },
    ],
  },
  {
    title: "Services",
    itemsmenu: [
      { item: "Survey" },
      { item: "Construction" },
      { item: "Route Planning" },
    ],
  },
  {
    title: "Reach Us",
    itemsmenu: [
      { item: "Kathmandu, Nepal" },
      { item: "+977 98-XXXXXXXX" },
      { item: "info@bhumlu.com" },
    ],
  },
];

export const heroHighlights: HeroHighlight[] = [
  { label: "Services", value: "Survey · Construction" },
  { label: "Coverage", value: "Nepal · Hills & high-altitude zones" },
  { label: "Delivery", value: "Route to commissioning" },
];

export const statsData: StatItem[] = [
  { value: "120+", title: "Projects", detail: "Survey and build milestones" },
  { value: "650 km", title: "Survey Routes", detail: "Road, ridge and corridor coverage" },
  { value: "45+", title: "Engineers", detail: "Field and design specialists" },
  { value: "10+", title: "Years", detail: "Reliable delivery in Nepal" },
];

export const servicesData: ServiceItem[] = [
  {
    eyebrow: "Survey",
    title: "Transmission Line Survey",
    description: "Route alignment, topographic surveys, tower spotting and corridor planning.",
    overview: "Precision survey services for corridor planning and tower spotting across demanding terrain.",
    features: [
      "Topographic and profile surveys with GIS deliverables.",
      "Tower spotting, route alignment and corridor optimization.",
      "Stakeout support and field coordination during pre-construction.",
    ],
    image: "/Gallery/image1.png",
    href: "/services/survey",
  },
  {
    eyebrow: "Construction",
    title: "Transmission Line Construction",
    description: "Foundation works, tower erection, conductor stringing, testing and commissioning.",
    overview: "Civil execution and line delivery from foundations through commissioning.",
    features: [
      "Foundations, access planning and tower erection.",
      "Conductor stringing, sagging and live-line safety.",
      "Testing, commissioning and handover support.",
    ],
    image: "/Gallery/image2.png",
    href: "/services/construction",
  },
];

export const projectsData: ProjectItem[] = [
  {
    eyebrow: "Project 01",
    title: "132kV Transmission Line",
    slug: "132kv-transmission-line",
    href: "/projects/132kv-transmission-line",
    location: "Kavrepalanchok",
    status: "In progress",
    description: "Route survey, tower spotting and conductor installation for a critical uphill corridor.",
    scope: "Complete route planning, tower spotting, foundation design and conductor stringing across challenging terrain.",
    timeline: "12 months from survey mobilization to commissioning.",
    client: "Nepal Electricity Authority",
    outcome: "Improved line reliability, reduced corridor risk, and optimized tower placement for steep slopes.",
    details: [
      "Topographic survey across 72 km of ridge and valley.",
      "Tower foundation design with local material adaptation.",
      "Stringing and sagging with live-line safety protocols.",
    ],
    image: "/Gallery/image1.png",
  },
  {
    eyebrow: "Project 02",
    title: "Tower Foundation Work",
    slug: "tower-foundation-work",
    href: "/projects/tower-foundation-work",
    location: "Sindhupalchok",
    status: "Planning",
    description: "Foundations and access design for mountainous tower pad construction.",
    scope: "Advance site preparation, soil stabilization and access road layout for tower foundations.",
    timeline: "8 months of design, permitting and foundation execution.",
    client: "Regional transmission developer",
    outcome: "Secure tower bases with minimal slope disturbance and reliable load-bearing capacity.",
    details: [
      "Geotechnical study for steep embankments.",
      "Access road alignment for heavy equipment.",
      "Concrete tower pad design with drainage management.",
    ],
    image: "/Gallery/image2.png",
  },
  {
    eyebrow: "Project 03",
    title: "Survey & Alignment",
    slug: "survey-alignment",
    href: "/projects/survey-alignment",
    location: "Dolakha",
    status: "Complete",
    description: "Precision topographic survey and alignment optimization for rugged terrain.",
    scope: "Corridor analysis, GIS mapping, profile drawing and environmental coordination.",
    timeline: "6 months from initial reconnaissance to final alignment approval.",
    client: "Infrastructure planning authority",
    outcome: "A constructible alignment that balanced terrain, access and long-term reliability.",
    details: [
      "GIS-based route refinement with slope analysis.",
      "Stakeout and tower spotting for minimum disruption.",
      "Final alignment plan with stakeholder review.",
    ],
    image: "/Gallery/image3.png",
  },
];

export const galleryData: GalleryItem[] = [
  { title: "Route Survey", accent: "amber", src: "/Gallery/image1.png", alt: "Survey team in the field" },
  { title: "Foundation Site", accent: "teal", src: "/Gallery/image2.png", alt: "Tower foundation preparation" },
  { title: "Tower Assembly", accent: "amber", src: "/Gallery/image3.png", alt: "Transmission tower erection" },
  { title: "Line Stringing", accent: "teal", src: "/Gallery/image4.png", alt: "Conductor stringing operation" },
  { title: "Field Coordination", accent: "amber", src: "/Gallery/image5.png", alt: "Field team coordination" },
  { title: "Commissioning", accent: "teal", src: "/Gallery/image.png", alt: "Final line commissioning" },
];

export const aboutValues = [
  {
    title: "Vision",
    description: "To make Nepal’s power grid more reliable by delivering transmission line work that is precise, resilient and ready for future expansion.",
  },
  {
    title: "Mission",
    description: "To unite surveying discipline, engineering know-how and local execution so every line is delivered safely, on time and on budget.",
  },
  {
    title: "Values",
    description: "We build with integrity, respect the land and communities, and place safety and quality at the center of every project.",
  },
];

export const contactDetails: ContactDetail[] = [
  { label: "Office", value: "Kathmandu, Nepal", href: "https://maps.google.com" },
  { label: "Phone", value: "+977 98-XXXXXXXX", href: "tel:+9779899999999" },
  { label: "Email", value: "info@bhumlu.com", href: "mailto:info@bhumlu.com" },
];

export const marqueeWords = [
  "Route Alignment",
  "Topographic Survey",
  "Tower Spotting",
  "Foundation Works",
  "Tower Erection",
  "Stringing & Sagging",
  "Testing & Commissioning",
];
