import type {
  ContactDetail,
  FooterSection,
  GalleryItem,
  HeroHighlight,
  ProjectItem,
  ServiceItem,
  StatItem,
} from "@/types/common.types";
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
    itemsmenu: [{ item: "About" }, { item: "Projects" }, { item: "Gallery" }],
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
      { item: "+977 9865591950" },
      { item: "bhumluconstruction@gmail.com" },
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
  {
    value: "1000 km",
    title: "Survey Routes",
    detail: "Road, ridge and corridor coverage",
  },
  { value: "10+", title: "Engineers", detail: "Field and design specialists" },
  { value: "10+", title: "Years", detail: "Reliable delivery in Nepal" },
];

export const servicesData: ServiceItem[] = [
  {
    eyebrow: "Survey",
    title: "Transmission Line Survey",
    description:
      "Route alignment, topographic surveys, tower spotting and corridor planning.",
    overview:
      "Precision survey services for corridor planning and tower spotting across demanding terrain.",
    features: [
      "Topographic and profile surveys with GIS deliverables.",
      "Tower spotting, route alignment and corridor optimization.",
      "Stakeout support and field coordination during pre-construction.",
    ],
    image: "/Gallery/image(1).jpg ",
    href: "/services/survey",
  },
  {
    eyebrow: "Construction",
    title: "Transmission Line Construction",
    description:
      "Foundation works, tower erection, conductor stringing, testing and commissioning.",
    overview:
      "Civil execution and line delivery from foundations through commissioning.",
    features: [
      "Foundations, access planning and tower erection.",
      "Conductor stringing, sagging and live-line safety.",
      "Testing, commissioning and handover support.",
    ],
    image: "/Gallery/image (2).jpg ",
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
    description:
      "Route survey, tower spotting and conductor installation for a critical uphill corridor.",
    scope:
      "Complete route planning, tower spotting, foundation design and conductor stringing across challenging terrain.",
    timeline: "12 months from survey mobilization to commissioning.",
    client: "Nepal Electricity Authority",
    outcome:
      "Improved line reliability, reduced corridor risk, and optimized tower placement for steep slopes.",
    details: [
      "Topographic survey across 72 km of ridge and valley.",
      "Tower foundation design with local material adaptation.",
      "Stringing and sagging with live-line safety protocols.",
    ],
    image: "/Gallery/image(1).jpg ",
  },
  {
    eyebrow: "Project 02",
    title: "Tower Foundation Work",
    slug: "tower-foundation-work",
    href: "/projects/tower-foundation-work",
    location: "Sindhupalchok",
    status: "Planning",
    description:
      "Foundations and access design for mountainous tower pad construction.",
    scope:
      "Advance site preparation, soil stabilization and access road layout for tower foundations.",
    timeline: "8 months of design, permitting and foundation execution.",
    client: "Regional transmission developer",
    outcome:
      "Secure tower bases with minimal slope disturbance and reliable load-bearing capacity.",
    details: [
      "Geotechnical study for steep embankments.",
      "Access road alignment for heavy equipment.",
      "Concrete tower pad design with drainage management.",
    ],
    image: "/Gallery/image (2).jpg ",
  },
  {
    eyebrow: "Project 03",
    title: "Survey & Alignment",
    slug: "survey-alignment",
    href: "/projects/survey-alignment",
    location: "Dolakha",
    status: "Complete",
    description:
      "Precision topographic survey and alignment optimization for rugged terrain.",
    scope:
      "Corridor analysis, GIS mapping, profile drawing and environmental coordination.",
    timeline:
      "6 months from initial reconnaissance to final alignment approval.",
    client: "Infrastructure planning authority",
    outcome:
      "A constructible alignment that balanced terrain, access and long-term reliability.",
    details: [
      "GIS-based route refinement with slope analysis.",
      "Stakeout and tower spotting for minimum disruption.",
      "Final alignment plan with stakeholder review.",
    ],
    image: "/Gallery/image (3).jpg ",
  },
  {
    eyebrow: "Project 04",
    title: "Ghorahi-khungri Madichaur 132kV Transmission Line",
    slug: "ghorahi-khungri-madichaur-132kv-transmission-line",
    href: "/projects/ghorahi-khungri-madichaur-132kv-transmission-line",
    location: "Dang",
    status: "Complete",
    description:
      "Delivered the full 132kV transmission line survey and construction support for the Dang corridor, including route validation, tower spotting and commissioning readiness.",
    scope:
      "Detailed route alignment, topographic survey, tower spot checks, foundation design reviews and conductor stringing planning for a 132kV line across remote terrain.",
    timeline: "12 months from survey mobilization to commissioning.",
    client: "KEC international Ltd",
    outcome:
      "A fully commissioned transmission route with safer tower placement, optimized corridor alignment and reliable delivery for the Dang region.",
    details: [
      "Topographic survey across 72 km of ridge and valley.",
      "Tower foundation design with local material adaptation.",
      "Stringing and sagging with live-line safety protocols.",
    ],
    image: "/Gallery/image (4).jpg ",
  },
  {
    eyebrow: "Project 05",
    title: "Damauli-bharatpur220kV Transmission Line",
    slug: "damauli-bharatpur220kv-transmission-line",
    href: "/projects/damauli-bharatpur220kv-transmission-line",
    location: "Bharatpur",
    status: "Complete",
    description:
      "Route survey, tower spotting and conductor installation for a critical uphill corridor.",
    scope:
      "Complete route planning, tower spotting, foundation design and conductor stringing across challenging terrain.",
    timeline: "12 months from survey mobilization to commissioning.",
    client: "Nepal Electricity Authority",
    outcome:
      "Improved line reliability, reduced corridor risk, and optimized tower placement for steep slopes.",
    details: [
      "Topographic survey across 72 km of ridge and valley.",
      "Tower foundation design with local material adaptation.",
      "Stringing and sagging with live-line safety protocols.",
    ],
    image: "/Gallery/image (5).jpg",
  },
  {
    eyebrow: "Project 05",
    title: "MCC",
    slug: "mcc",
    href: "/projects/mcc",
    location: "Nuwakot-Chitwan",
    status: "In-process",
    description:
      "This project is in starting phase and will be completed in 2029. It involves route survey, tower spotting and conductor installation for a critical uphill corridor.",
    scope:
      "Complete route planning, tower spotting, foundation design and conductor stringing across challenging terrain.",
    timeline: "12 months from survey mobilization to commissioning.",
    client: "Nepal Electricity Authority",
    outcome:
      "Improved line reliability, reduced corridor risk, and optimized tower placement for steep slopes.",
    details: [
      "Topographic survey across 72 km of ridge and valley.",
      "Tower foundation design with local material adaptation.",
      "Stringing and sagging with live-line safety protocols.",
    ],
    image: "/Gallery/image (5).jpg",
  },
];

export const galleryData: GalleryItem[] = [
  
  { src: "/Gallery/image(1).jpg", alt: "Final line commissioning" },
  { src: "/Gallery/image (2).jpg", alt: "Initial site survey and layout" },
  { src: "/Gallery/image (3).jpg", alt: "Groundbreaking at project site" },
  { src: "/Gallery/image (4).jpg", alt: "Excavation work in progress" },
  { src: "/Gallery/image (5).jpg", alt: "Foundation laying underway" },
  {
    src: "/Gallery/image (6).jpg",
    alt: "Rebar placement for structural support",
  },
  { src: "/Gallery/image (7).jpg", alt: "Formwork setup before concrete pour" },
  { src: "/Gallery/image (8).jpg", alt: "Concrete pour for foundation" },
  { src: "/Gallery/image (9).jpg", alt: "Concrete curing process" },
  { src: "/Gallery/image (10).jpg", alt: "Structural framing installation" },
  { src: "/Gallery/image (11).jpg", alt: "Column erection on site" },
  { src: "/Gallery/image (12).jpg", alt: "Beam installation in progress" },
  { src: "/Gallery/image (13).jpg", alt: "Slab construction work" },
  { src: "/Gallery/image (14).jpg", alt: "Scaffolding setup around structure" },
  { src: "/Gallery/image (15).jpg", alt: "Masonry and brickwork in progress" },
  { src: "/Gallery/image (16).jpg", alt: "Wall construction underway" },
  { src: "/Gallery/image (17).jpg", alt: "Roof framing installation" },
  { src: "/Gallery/image (18).jpg", alt: "Roofing work in progress" },
  { src: "/Gallery/image (19).jpg", alt: "Plastering of interior walls" },
  { src: "/Gallery/image (20).jpg", alt: "Electrical rough-in work" },
  { src: "/Gallery/image (21).jpg", alt: "Plumbing installation in progress" },
  { src: "/Gallery/image (22).jpg", alt: "HVAC system setup" },
  { src: "/Gallery/image (23).jpg", alt: "Insulation installation" },
  { src: "/Gallery/image (24).jpg", alt: "Drywall installation underway" },
  { src: "/Gallery/image (25).jpg", alt: "Flooring installation" },
  { src: "/Gallery/image (26).jpg", alt: "Ceiling installation in progress" },
  { src: "/Gallery/image (27).jpg", alt: "Window installation on site" },
  { src: "/Gallery/image (28).jpg", alt: "Door fitting and framing" },
  { src: "/Gallery/image (29).jpg", alt: "Exterior cladding installation" },
  { src: "/Gallery/image (30).jpg", alt: "Painting work in progress" },
  { src: "/Gallery/image (31).jpg", alt: "Tiling installation" },
  { src: "/Gallery/image (32).jpg", alt: "Fixture installation on site" },
  { src: "/Gallery/image (33).jpg", alt: "Landscaping around the site" },
  { src: "/Gallery/image (34).jpg", alt: "Pathway and walkway construction" },
  { src: "/Gallery/image (35).jpg", alt: "Boundary wall construction" },
  { src: "/Gallery/image (36).jpg", alt: "Gate installation at entrance" },
  { src: "/Gallery/image (37).jpg", alt: "Site safety inspection" },
  { src: "/Gallery/image (38).jpg", alt: "Quality inspection of works" },
  { src: "/Gallery/image (39).jpg", alt: "Heavy machinery on site" },
  { src: "/Gallery/image (40).jpg", alt: "Construction material delivery" },
  { src: "/Gallery/image (41).jpg", alt: "Labor team at work" },
  { src: "/Gallery/image (42).jpg", alt: "Overall site progress view" },
  { src: "/Gallery/image (43).jpg", alt: "Aerial view of construction site" },
  { src: "/Gallery/image (44).jpg", alt: "Structural testing on site" },
  { src: "/Gallery/image (45).jpg", alt: "Waterproofing application" },
  { src: "/Gallery/image (46).jpg", alt: "Fire safety system setup" },
  { src: "/Gallery/image (47).jpg", alt: "Elevator installation in progress" },
  { src: "/Gallery/image (48).jpg", alt: "Parking area layout work" },
  { src: "/Gallery/image (49).jpg", alt: "Signage installation on site" },
  { src: "/Gallery/image (50).jpg", alt: "Interior finishing work" },
  { src: "/Gallery/image (51).jpg", alt: "Lighting fixtures setup" },
  { src: "/Gallery/image (52).jpg", alt: "Furniture installation on site" },
  { src: "/Gallery/image (53).jpg", alt: "Final site cleaning" },
  {
    src: "/Gallery/image (54).jpg",
    alt: "Client walkthrough of finished site",
  },
  { src: "/Gallery/image (55).jpg", alt: "Handover preparation activities" },
  { src: "/Gallery/image (56).jpg", alt: "Project documentation review" },
  { src: "/Gallery/image (57).jpg", alt: "On-site team meeting" },
  { src: "/Gallery/image (58).jpg", alt: "Comprehensive site review" },
  { src: "/Gallery/image (59).jpg", alt: "Project progress milestone" },
  { src: "/Gallery/image (60).jpg", alt: "Night shift construction work" },
  { src: "/Gallery/image (61).jpg", alt: "Weather protection measures" },
  { src: "/Gallery/image (62).jpg", alt: "Equipment maintenance on site" },
  { src: "/Gallery/image (63).jpg", alt: "Sub-contractor team at work" },
  { src: "/Gallery/image (64).jpg", alt: "Final inspection before handover" },
  { src: "/Gallery/image (65).jpg", alt: "Systems testing and commissioning" },
  { src: "/Gallery/image (66).jpg", alt: "Final line commissioning" },
  { src: "/Gallery/image (67).jpg", alt: "Preparation for site opening" },
  { src: "/Gallery/image (68).jpg", alt: "Ribbon cutting ceremony" },
  { src: "/Gallery/image (69).jpg", alt: "Official site handover" },
  { src: "/Gallery/image (70).jpg", alt: "Completed project overview" },
  { src: "/Gallery/image (71).jpg", alt: "Final project overview shot" },

  { src: "/image2/img1 (1).jpg", alt: "Cropped site view near a utility pole" },
  {
    src: "/image2/img1 (1)-2.jpg",
    alt: "Interior room with safety cone at doorway",
  },
  { src: "/image2/img1 (2).jpg", alt: "Riverside survey view" },
  { src: "/image2/img1 (3).jpg", alt: "GNSS survey equipment on tripod" },
  {
    src: "/image2/img1 (4).jpg",
    alt: "Paved site access road under construction",
  },
  { src: "/image2/img1 (5).jpg", alt: "Riverside survey view" },
  { src: "/image2/img1 (6).jpg", alt: "Rocky riverside terrain near hills" },
  {
    src: "/image2/img1 (7).jpg",
    alt: "Outdoor seating area at construction site",
  },
  {
    src: "/image2/img1 (8).jpg",
    alt: "Total station survey equipment on site",
  },
  { src: "/image2/img1 (9).jpg", alt: "Riverbed with construction debris" },
  {
    src: "/image2/img1 (10).jpg",
    alt: "Panoramic mountain view of construction site",
  },
  {
    src: "/image2/img1 (11).jpg",
    alt: "Transmission tower against overcast sky",
  },
  { src: "/image2/img1 (12).jpg", alt: "Concrete foundation work in progress" },
  { src: "/image2/img1 (13).jpg", alt: "Rebar grid laid for foundation" },
  { src: "/image2/img1 (14).jpg", alt: "Rural site setup with tools" },
  { src: "/image2/img1 (15).jpg", alt: "Excavation work with erosion netting" },
  {
    src: "/image2/img1 (16).jpg",
    alt: "Workers placing rebar and pouring concrete",
  },
  { src: "/image2/img1 (17).jpg", alt: "Close-up of survey instrument" },
  {
    src: "/image2/img1 (18).jpg",
    alt: "Stone retaining wall under construction",
  },
  {
    src: "/image2/img1 (19).jpg",
    alt: "Workers on hillside site with mountain backdrop",
  },
  { src: "/image2/img1 (20).jpg", alt: "Riverbed site with wooden planks" },
  { src: "/image2/img1 (21).jpg", alt: "Workers building a stone wall" },
  {
    src: "/image2/img1 (22).jpg",
    alt: "Workers excavating with a wheelbarrow",
  },
  { src: "/image2/img1 (23).jpg", alt: "Workers pouring foundation concrete" },
  {
    src: "/image2/img1 (24).jpg",
    alt: "Circular foundation pit filled with water",
  },
];
export const galleryDatas: GalleryItem[] = [
  { src: "/Gallery/image (2).jpg", alt: "Initial site survey and layout" },
  { src: "/Gallery/image (3).jpg", alt: "Groundbreaking at project site" },
  { src: "/Gallery/image (4).jpg", alt: "Excavation work in progress" },
  { src: "/Gallery/image (5).jpg", alt: "Foundation laying underway" },
  {
    src: "/Gallery/image (6).jpg",
    alt: "Rebar placement for structural support",
  },
  { src: "/Gallery/image (7).jpg", alt: "Formwork setup before concrete pour" },
];

export const aboutValues = [
  {
    title: "Vision",
    description:
      "To make Nepal’s power grid more reliable by delivering transmission line work that is precise, resilient and ready for future expansion.",
  },
  {
    title: "Mission",
    description:
      "To unite surveying discipline, engineering know-how and local execution so every line is delivered safely, on time and on budget.",
  },
  {
    title: "Values",
    description:
      "We build with integrity, respect the land and communities, and place safety and quality at the center of every project.",
  },
];

export const contactDetails: ContactDetail[] = [
  {
    label: "Office",
    value: "Kathmandu, Nepal",
    href: "https://maps.google.com",
  },
  { label: "Phone", value: "+977 9865591950", href: "tel:+9779865591950" },
  {
    label: "Email",
    value: "bhumluconstruction@gmail.com",
    href: "mailto:bhumluconstruction@gmail.com",
  },
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
