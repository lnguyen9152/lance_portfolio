/**
 * Lance Nguyen — Portfolio Data Store
 * All information, project case studies, images, and texts preserved and verified.
 */
import { Project, ExperienceItem, EducationItem, PublicationItem } from '../types';
import { PROJECTS as VERIFIED_PROJECTS } from './projectsData';

export type { Project, ExperienceItem, EducationItem, PublicationItem };

export const PERSONAL_INFO = {
  name: "Lance Nguyen",
  title: "Avionics GSE, Test, Electrical, and Control Systems",
  tagline: "Avionics Test GSE Engineer II at Relativity Space. Former Instrumentation, Controls, & Electrical Engineer at BP plc.",
  bioShort: "Now based in Los Angeles, CA working in the aerospace industry on rocket avionics test ground support equipment. George Mason University Electrical Engineering alum.",
  bioLong: [
    "Now based in Los Angeles, CA. I currently work in the Aerospace Industry as an Avionics Test Ground Support Equipment Engineer at Relativity Space. I graduated from George Mason University with a B.S. in Electrical Engineering.",
    "I aspire to continue to improve my professional knowledge through the opportunities I'm presented with in both a professional and personal setting. I'm glad to always be curious about how things work, and I hope to learn as much as I can throughout my career.",
    "In my free time, I'm a huge fan of finance and enjoy learning about the commodities and equity markets. My favorite books include 'Reminiscences of a Stock Operator' by Edwin Lefèvre and 'Stock Market Wizards' by Jack D. Schwager. I also have a passion for automotive engineering, performance engine building, and track telemetry."
  ],
  avatarUrl: "https://static.wixstatic.com/media/32e826_9557d7fe6d8e4adabaf0018629a0577e~mv2.jpeg",
  email: "lnguyen9152@gmail.com",
  linkedin: "https://www.linkedin.com/in/lance-p-nguyen/",
  resumeUrl: "/resume.html",
  location: "Los Angeles, CA",
  status: "Designing Avionics Test GSE & Control Systems",
};

export const RESUME_SKILLS = {
  programmingLanguages: [
    "Java",
    "Python",
    "MatLab",
    "Simulink",
    "Verilog",
    "Assembly",
    "Ladder Logic",
    "Functional Block",
    "Structured Text"
  ],
  technicalSkills: [
    "Autodesk AutoCAD",
    "P&ID / Electrical / Logic Diagrams",
    "Project Management",
    "Gantt Charts",
    "PSpice",
    "Osmond PCB",
    "Modbus / Ethernet / DeviceNet / ControlNet",
    "Networking",
    "Factory / Site Acceptance Testing (FAT/SAT)",
    "Document Control",
    "Linux Command Line",
    "VMWare Virtualization",
    "Risk Assessments",
    "Execution Planning",
    "Budget Planning"
  ]
};

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    company: "Relativity Space",
    role: "Ground Support Equipment Engineer II – Avionics Test",
    period: "2026 – Present",
    location: "Los Angeles, CA",
    url: "https://www.relativityspace.com",
    description: "Responsible engineer of a two-person team for the design, integration, and ongoing development of high-reliability ground support systems, ensuring mission readiness and supporting Terran R's integration, test, and launch phases.",
    highlights: [
      "Responsible engineer of a two-person team for the design, integration, and ongoing development of high-reliability ground support systems, ensuring mission readiness and supporting Terran R's integration, test, and launch phases.",
      "Design and deliver Engine Checkout Racks to the propulsion team, ensuring robust testing and validation of flight engines with <1 us accuracy.",
      "Support design of ground support racks for low and high voltage electrical buses used to interface with flight hardware.",
      "Collaborate with avionics, propulsion, software, manufacturing, and integration teams to ensure reliable operation for vehicle test and launch.",
      "Design harnesses and junction boxes for electrical power distribution and signal transmission, ensuring seamless connections between ground systems and the vehicle.",
      "Oversee fabrication, commissioning, and validation of GSE systems, including electrical testing and calibration.",
      "Integrate electrical systems using protocols such as Ethernet, Modbus, and SCPI for reliable data transfer and control."
    ],
    logo: "https://static.wixstatic.com/media/32e826_7b22e35adb244ee7a1fbd45fa552af2c~mv2.jpg",
    badge: "Current"
  },
  {
    company: "Relativity Space",
    role: "Data and Controls Engineer II – Factory Test",
    period: "2025 – 2026",
    location: "Los Angeles, CA",
    url: "https://www.relativityspace.com",
    description: "Developed automated data acquisition and control systems (DACs), test infrastructure, and checkout cabinets for launch vehicle hardware verification ensuring 0.01% accuracy.",
    highlights: [
      "Develop test infrastructure, checkout cabinets, instrumentation boxes, and data systems for hardware verification ensuring 0.01% accuracy.",
      "Integrate instrumentation (pressure transducers, RTDs, thermocouples, accelerometers, actuators, etc.) into test systems, including channel mapping and signal scaling/conditioning.",
      "Design test systems and create work instructions using tools such as NX, Altium, and WireViz to document and communicate assembly and integration procedures with a 100% on time completion and reliability rate.",
      "Develop PLC automation using a proprietary company framework and EtherCAT/Modbus.",
      "Manage multiple projects simultaneously, became a subject matter expert on DACs backend, and mentor engineers on specialized topics."
    ],
    logo: "https://static.wixstatic.com/media/32e826_7b22e35adb244ee7a1fbd45fa552af2c~mv2.jpg",
    badge: "Aerospace"
  },
  {
    company: "British Petroleum",
    role: "Instrumentation, Controls, and Electrical Engineer – Production and Operations",
    period: "2023 – 2025",
    location: "Houston, TX",
    url: "https://www.bp.com",
    description: "Led multi-disciplinary teams and executed high-budget instrumentation, controls, and electrical engineering projects for offshore production and operations.",
    highlights: [
      "Lead multi-disciplinary teams and contractors to execute high-budget projects, achieving a 95% on-time completion rate and delivering 80% under budget.",
      "Optimize alarm management, implementing dynamic alarm suppression and reducing high/urgent alarm KPIs by 50%.",
      "Enhance plant reliability by conducting RCFA (Root Cause Failure Analysis) studies, performing risk assessments, and implementing mitigation strategies, reducing deficiencies by 80%.",
      "Conduct FAT (Factory Acceptance Test) and SAT (Site Acceptance Test) tests on brownfield projects, ensuring system functionality, integration, and compliance with design requirements.",
      "Maintain and troubleshoot Rockwell, Honeywell, and Allen-Bradley PLCs, tracing I/O, implementing control loops, and redlining documents for accuracy.",
      "Design and develop custom HMI screens and faceplates to improve usability and efficiency for offshore operators."
    ],
    logo: "https://static.wixstatic.com/media/32e826_9a5c269cad9d43b5b824c23f7e3f408e~mv2.jpg",
    badge: "Energy & Automation"
  },
  {
    company: "TradersAI",
    role: "Software Developer",
    period: "2021 – 2022",
    location: "Fairfax, VA",
    url: "https://tradersai.com",
    description: "Assisted in developing an algorithm-based trading strategy for /ES futures, contributing to a 351% return since 2018.",
    highlights: [
      "Assisted in developing an algorithm-based trading strategy for /ES futures, contributing to a 351% return since 2018.",
      "Designed and built a mobile app to send real-time trading signals using OneSignal for notifications, BeautifulSoup for web data extraction, and Pandas & NumPy for data processing.",
      "Built Python-based automation for data processing, real-time market retrieval, and trade signal execution.",
      "Developed an automated system to generate and send real-time trade alerts based on market data.",
      "Created a cross-platform mobile interface using Figma and AirTable, ensuring a seamless user experience."
    ],
    logo: "https://static.wixstatic.com/media/32e826_1c2a04f9188448cf9dcc6eb5cf31b996~mv2.png",
    badge: "Quant & Software"
  }
];

export const EDUCATION: EducationItem[] = [
  {
    institution: "George Mason University – Volgenau School of Engineering",
    degree: "Bachelor of Science in Electrical Engineering",
    period: "2019 – 2023",
    url: "https://www.gmu.edu",
    honors: "Volgenau School of Engineering",
    details: [
      "Bachelor of Science in Electrical Engineering.",
      "Relevant Coursework: Embedded System Hardware Interfaces, Physics 3, System/Control Theory, Computer Networking, Computer Organization, Linear Electronics II, Digital System Design II, Electrical Circuit Analysis II, Communication Theory.",
      "Personal Portfolio: https://lnguyen9152.wixsite.com/portfolio"
    ],
    coursework: [
      "Embedded System Hardware Interfaces",
      "Physics 3 (Electromagnetism & Waves)",
      "System / Classical Control Theory",
      "Computer Networking Protocols",
      "Computer Organization (Assembly)",
      "Linear Electronics II",
      "Digital System Design II",
      "Electrical Circuit Analysis II",
      "Communication Theory"
    ],
    logo: "https://static.wixstatic.com/media/32e826_9db7237de6144ba588c1ee1a07fc48fa~mv2.jpg"
  }
];

export const PUBLICATIONS: PublicationItem[] = [
  {
    title: "What Can AI Do for Investment Portfolios? A Case Study",
    type: "Case Study",
    description: "Published research case study featured on the CFA Institute Enterprising Investor examining quantitative algorithmic methods, portfolio optimization, and machine learning models in modern asset allocation.",
    date: "Dec 2022",
    url: "https://blogs.cfainstitute.org/investor/2022/12/15/what-can-ai-do-for-investment-portfolios-a-case-study/",
    isExternal: true,
    downloadLabel: "Read on CFA Institute"
  },
  {
    title: "GMU 9-Meter Satellite Dish Space Tracker System",
    type: "Research",
    description: "Engineering research publication documenting the design of an automated azimuth-elevation tracking controller using NASA Skyfield ephemeris calculation on embedded microcontrollers.",
    date: "2023",
    url: "https://cca90530-5079-40f5-b8c1-5c80ca4ef4e0.filesusr.com/ugd/32e826_c152373d53f64f26bb94ef2216ea3ba9.pdf",
    isExternal: true,
    downloadLabel: "Download Paper (PDF)"
  },
  {
    title: "A Short Paper on Network Security & Protocol Verification",
    type: "Paper",
    description: "Academic paper investigating modern transport layer security protocols, vulnerability attack surfaces in industrial control networks, and cryptographic integrity verification methods.",
    date: "2023",
    url: "https://cca90530-5079-40f5-b8c1-5c80ca4ef4e0.filesusr.com/ugd/32e826_e8093d4f0fbe463f99c9652e8d6fce75.pdf",
    isExternal: true,
    downloadLabel: "Download Paper (PDF)"
  }
];

export const PROJECTS: Project[] = VERIFIED_PROJECTS;
