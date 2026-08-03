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
  { title: "Commissioning", accent: "teal", src: "/Gallery/image(1).jpg", alt: "Final line commissioning" },
  { title: "Site Survey", accent: "amber", src: "/Gallery/image (2).jpg", alt: "Initial site survey and layout" },
  { title: "Groundbreaking", accent: "cyan", src: "/Gallery/image (3).jpg", alt: "Groundbreaking at project site" },
  { title: "Excavation", accent: "teal", src: "/Gallery/image (4).jpg", alt: "Excavation work in progress" },
  { title: "Foundation Laying", accent: "amber", src: "/Gallery/image (5).jpg", alt: "Foundation laying underway" },
  { title: "Rebar Placement", accent: "cyan", src: "/Gallery/image (6).jpg", alt: "Rebar placement for structural support" },
  { title: "Formwork Setup", accent: "teal", src: "/Gallery/image (7).jpg", alt: "Formwork setup before concrete pour" },
  { title: "Concrete Pour", accent: "amber", src: "/Gallery/image (8).jpg", alt: "Concrete pour for foundation" },
  { title: "Curing Process", accent: "cyan", src: "/Gallery/image (9).jpg", alt: "Concrete curing process" },
  { title: "Structural Framing", accent: "teal", src: "/Gallery/image (10).jpg", alt: "Structural framing installation" },
  { title: "Column Erection", accent: "amber", src: "/Gallery/image (11).jpg", alt: "Column erection on site" },
  { title: "Beam Installation", accent: "cyan", src: "/Gallery/image (12).jpg", alt: "Beam installation in progress" },
  { title: "Slab Work", accent: "teal", src: "/Gallery/image (13).jpg", alt: "Slab construction work" },
  { title: "Scaffolding", accent: "amber", src: "/Gallery/image (14).jpg", alt: "Scaffolding setup around structure" },
  { title: "Masonry Work", accent: "cyan", src: "/Gallery/image (15).jpg", alt: "Masonry and brickwork in progress" },
  { title: "Wall Construction", accent: "teal", src: "/Gallery/image (16).jpg", alt: "Wall construction underway" },
  { title: "Roof Framing", accent: "amber", src: "/Gallery/image (17).jpg", alt: "Roof framing installation" },
  { title: "Roofing Work", accent: "cyan", src: "/Gallery/image (18).jpg", alt: "Roofing work in progress" },
  { title: "Plastering", accent: "teal", src: "/Gallery/image (19).jpg", alt: "Plastering of interior walls" },
  { title: "Electrical Rough-in", accent: "amber", src: "/Gallery/image (20).jpg", alt: "Electrical rough-in work" },
  { title: "Plumbing Installation", accent: "cyan", src: "/Gallery/image (21).jpg", alt: "Plumbing installation in progress" },
  { title: "HVAC Setup", accent: "teal", src: "/Gallery/image (22).jpg", alt: "HVAC system setup" },
  { title: "Insulation Work", accent: "amber", src: "/Gallery/image (23).jpg", alt: "Insulation installation" },
  { title: "Drywall Installation", accent: "cyan", src: "/Gallery/image (24).jpg", alt: "Drywall installation underway" },
  { title: "Flooring Work", accent: "teal", src: "/Gallery/image (25).jpg", alt: "Flooring installation" },
  { title: "Ceiling Work", accent: "amber", src: "/Gallery/image (26).jpg", alt: "Ceiling installation in progress" },
  { title: "Window Installation", accent: "cyan", src: "/Gallery/image (27).jpg", alt: "Window installation on site" },
  { title: "Door Fitting", accent: "teal", src: "/Gallery/image (28).jpg", alt: "Door fitting and framing" },
  { title: "Exterior Cladding", accent: "amber", src: "/Gallery/image (29).jpg", alt: "Exterior cladding installation" },
  { title: "Painting Work", accent: "cyan", src: "/Gallery/image (30).jpg", alt: "Painting work in progress" },
  { title: "Tiling Work", accent: "teal", src: "/Gallery/image (31).jpg", alt: "Tiling installation" },
  { title: "Fixture Installation", accent: "amber", src: "/Gallery/image (32).jpg", alt: "Fixture installation on site" },
  { title: "Landscaping", accent: "cyan", src: "/Gallery/image (33).jpg", alt: "Landscaping around the site" },
  { title: "Pathway Construction", accent: "teal", src: "/Gallery/image (34).jpg", alt: "Pathway and walkway construction" },
  { title: "Boundary Wall", accent: "amber", src: "/Gallery/image (35).jpg", alt: "Boundary wall construction" },
  { title: "Gate Installation", accent: "cyan", src: "/Gallery/image (36).jpg", alt: "Gate installation at entrance" },
  { title: "Site Safety Check", accent: "teal", src: "/Gallery/image (37).jpg", alt: "Site safety inspection" },
  { title: "Quality Inspection", accent: "amber", src: "/Gallery/image (38).jpg", alt: "Quality inspection of works" },
  { title: "Machinery Deployment", accent: "cyan", src: "/Gallery/image (39).jpg", alt: "Heavy machinery on site" },
  { title: "Material Delivery", accent: "teal", src: "/Gallery/image (40).jpg", alt: "Construction material delivery" },
  { title: "Labor Team", accent: "amber", src: "/Gallery/image (41).jpg", alt: "Labor team at work" },
  { title: "Site Progress", accent: "cyan", src: "/Gallery/image (42).jpg", alt: "Overall site progress view" },
  { title: "Aerial View", accent: "teal", src: "/Gallery/image (43).jpg", alt: "Aerial view of construction site" },
  { title: "Structural Testing", accent: "amber", src: "/Gallery/image (44).jpg", alt: "Structural testing on site" },
  { title: "Waterproofing", accent: "cyan", src: "/Gallery/image (45).jpg", alt: "Waterproofing application" },
  { title: "Fire Safety Setup", accent: "teal", src: "/Gallery/image (46).jpg", alt: "Fire safety system setup" },
  { title: "Elevator Installation", accent: "amber", src: "/Gallery/image (47).jpg", alt: "Elevator installation in progress" },
  { title: "Parking Layout", accent: "cyan", src: "/Gallery/image (48).jpg", alt: "Parking area layout work" },
  { title: "Signage Installation", accent: "teal", src: "/Gallery/image (49).jpg", alt: "Signage installation on site" },
  { title: "Interior Finishing", accent: "amber", src: "/Gallery/image (50).jpg", alt: "Interior finishing work" },
  { title: "Lighting Setup", accent: "cyan", src: "/Gallery/image (51).jpg", alt: "Lighting fixtures setup" },
  { title: "Furniture Installation", accent: "teal", src: "/Gallery/image (52).jpg", alt: "Furniture installation on site" },
  { title: "Final Cleaning", accent: "amber", src: "/Gallery/image (53).jpg", alt: "Final site cleaning" },
  { title: "Client Walkthrough", accent: "cyan", src: "/Gallery/image (54).jpg", alt: "Client walkthrough of finished site" },
  { title: "Handover Preparation", accent: "teal", src: "/Gallery/image (55).jpg", alt: "Handover preparation activities" },
  { title: "Documentation", accent: "amber", src: "/Gallery/image (56).jpg", alt: "Project documentation review" },
  { title: "Team Meeting", accent: "cyan", src: "/Gallery/image (57).jpg", alt: "On-site team meeting" },
  { title: "Site Review", accent: "teal", src: "/Gallery/image (58).jpg", alt: "Comprehensive site review" },
  { title: "Progress Milestone", accent: "amber", src: "/Gallery/image (59).jpg", alt: "Project progress milestone" },
  { title: "Night Work", accent: "cyan", src: "/Gallery/image (60).jpg", alt: "Night shift construction work" },
  { title: "Weather Protection", accent: "teal", src: "/Gallery/image (61).jpg", alt: "Weather protection measures" },
  { title: "Equipment Maintenance", accent: "amber", src: "/Gallery/image (62).jpg", alt: "Equipment maintenance on site" },
  { title: "Sub-Contractor Work", accent: "cyan", src: "/Gallery/image (63).jpg", alt: "Sub-contractor team at work" },
  { title: "Final Inspection", accent: "teal", src: "/Gallery/image (64).jpg", alt: "Final inspection before handover" },
  { title: "Testing & Commissioning", accent: "amber", src: "/Gallery/image (65).jpg", alt: "Systems testing and commissioning" },
  { title: "Commissioning", accent: "teal", src: "/Gallery/image (66).jpg", alt: "Final line commissioning" },
  { title: "Opening Preparation", accent: "cyan", src: "/Gallery/image (67).jpg", alt: "Preparation for site opening" },
  { title: "Ribbon Cutting", accent: "amber", src: "/Gallery/image (68).jpg", alt: "Ribbon cutting ceremony" },
  { title: "Site Handover", accent: "teal", src: "/Gallery/image (69).jpg", alt: "Official site handover" },
  { title: "Completed Project", accent: "cyan", src: "/Gallery/image (70).jpg", alt: "Completed project overview" },
  { title: "Final Overview", accent: "amber", src: "/Gallery/image (71).jpg", alt: "Final project overview shot" },
];
export const galleryDatas:GalleryItem[]=[
 { title: "Site Survey", accent: "amber", src: "/Gallery/image (2).jpg", alt: "Initial site survey and layout" },
  { title: "Groundbreaking", accent: "cyan", src: "/Gallery/image (3).jpg", alt: "Groundbreaking at project site" },
  { title: "Excavation", accent: "teal", src: "/Gallery/image (4).jpg", alt: "Excavation work in progress" },
  { title: "Foundation Laying", accent: "amber", src: "/Gallery/image (5).jpg", alt: "Foundation laying underway" },
  { title: "Rebar Placement", accent: "cyan", src: "/Gallery/image (6).jpg", alt: "Rebar placement for structural support" },
  { title: "Formwork Setup", accent: "teal", src: "/Gallery/image (7).jpg", alt: "Formwork setup before concrete pour" },
]

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
