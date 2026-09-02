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
    "Structured Text",
    "C++",
    "Objective-C"
  ],
  technicalSkills: [
    "Autodesk AutoCAD",
    "P&ID / Electrical / Logic Diagrams",
    "Project Management",
    "Gantt Charts",
    "PSpice",
    "Osmond PCB",
    "Modbus / Ethernet / DeviceNet / ControlNet",
    "SCPI",
    "EtherCAT",
    "Networking",
    "Factory / Site Acceptance Testing (FAT/SAT)",
    "Document Control",
    "Linux Command Line",
    "VMWare Virtualization",
    "Risk Assessments",
    "Execution Planning",
    "Budget Planning",
    "HV Safety",
    "Umbilical Design",
    "Operator Training",
    "Altium Designer",
    "Siemens NX",
    "WireViz",
    "Palantir & PowerBI",
    "Plant Triage"
  ],
  certifications: [
    "Studio 5000 Logix Designer Level 1: ControlLogix System Fundamentals",
    "Aerial Lift Operator Safety Training - General Industry",
    "Group 1 Social and Behavioral Research"
  ],
  languages: [
    "Vietnamese (Native or Bilingual)",
    "English (Native)",
    "Russian (Limited Working)",
    "Spanish (Limited Working)"
  ],
  honorsAwards: [
    "Creators Award at HackTJ",
    "National Merit Scholar",
    "Botball Robotics Programming Award"
  ]
};

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    company: "Relativity Space",
    role: "Avionics Test GSE Engineer II",
    period: "December 2025 – Present",
    location: "Los Angeles, CA",
    url: "https://www.relativityspace.com",
    description: "Responsible engineer of a two-person team for the design, integration, and ongoing development of high-reliability ground support systems, ensuring mission readiness and supporting Terran R's integration, test, and launch phases.",
    highlights: [
      "System owner of a two-person team for the design, integration, and ongoing development of high-reliability ground support systems, ensuring mission readiness and supporting Terran R's integration and testing phases.",
      "Delivered Engine Checkout Racks to propulsion team, ensuring robust testing and validation of flight engines and Terran R Engines with <1 us accuracy.",
      "Support design of ground support racks for low and high voltage electrical buses used to interface with flight hardware.",
      "Collaborated with avionics, propulsion, software, manufacturing, and integration teams to ensure reliable operation for vehicle test and launch.",
      "Contributed to the design of umbilical and junction boxes and wiring harnesses for electrical power distribution and signal transmission, ensuring seamless connections between ground systems and the vehicle.",
      "Oversaw fabrication, commissioning, and validation of GSE systems, including electrical testing and calibration.",
      "Contributed design ideas for Interface Control Documents (ICDs), collaborating with the team to create finalized documentation.",
      "Ensured strict compliance with industry standards for high-voltage (HV) safety and operational efficiency.",
      "Integrated electrical systems using communication protocols such as Ethernet, Modbus, and SCPI for reliable data transfer and control."
    ],
    logo: "https://static.wixstatic.com/media/32e826_7b22e35adb244ee7a1fbd45fa552af2c~mv2.jpg",
    badge: "Current"
  },
  {
    company: "Relativity Space",
    role: "Factory Test Data and Controls Engineer II",
    period: "June 2025 – December 2025",
    location: "Los Angeles, CA",
    url: "https://www.relativityspace.com",
    description: "Designed, built, and commissioned control systems supporting test sites at the component- and system-level as Responsible Engineer (RE) for Stage 2 and Thrust Structure testing. Developed automated data acquisition and control systems (DACs), test infrastructure, and checkout cabinets for hardware verification.",
    highlights: [
      "Designed, built, and commissioned control systems supporting test sites at the component- and system-level as Responsible Engineer (RE) for Stage 2 and Thrust Structure testing.",
      "Developed test infrastructure, including checkout cabinets, instrumentation boxes, and portable data systems for hardware verification ensuring 0.01% accuracy.",
      "Integrated instrumentation and sensors (pressure transducers, RTDs, thermocouples, accelerometers, actuators, etc.) into test systems, including channel mapping and signal scaling/conditioning.",
      "Collaborated with software, network, operations, test, and infrastructure teams to develop and deploy PLC nodes for reliable and efficient data acquisition from test systems.",
      "Created work instructions using tools such as NX, Altium, and WireViz to document and communicate assembly and integration procedures with a 100% on-time completion and reliability rate.",
      "Developed PLC automation using a proprietary company framework and EtherCAT/Modbus.",
      "Reviewed and modified PCB Schematics using Altium to simplify and release boards for specific test campaigns.",
      "Managed multiple projects simultaneously, became a subject matter expert on DACs backend, and mentored engineers on specialized topics."
    ],
    logo: "https://static.wixstatic.com/media/32e826_7b22e35adb244ee7a1fbd45fa552af2c~mv2.jpg",
    badge: "Aerospace"
  },
  {
    company: "British Petroleum (bp)",
    role: "Controls and Automation / Electrical Engineer – Atlantis",
    period: "June 2023 – June 2025",
    location: "Houston, TX",
    url: "https://www.bp.com",
    description: "Led multi-disciplinary teams and contractors to execute high-budget instrumentation, controls, and electrical engineering projects for offshore production and operations.",
    highlights: [
      "Lead multi-disciplinary teams and engineering contractors to execute large-scale, high-budget projects spanning throughout the year, achieving a 95% on-time completion rate and delivering 80% under budget.",
      "Provide general operational support through weekly process surveillance meetings to identify preliminary issues and explore root causes before failure.",
      "Manage alarm databases through a Hexagon data collector, creating optimized set-points by observing process trends through tools such as Palantir and PowerBI; implemented dynamic alarm suppression, reducing high/urgent alarm KPIs by 50%.",
      "Enhance plant reliability by conducting RCFA (Root Cause Failure Analysis) studies, performing risk assessments, and implementing barrier reviews, reducing deficiencies by 80%.",
      "Ensure conformance with operational regulations by conducting self-verifications, Factory Acceptance Tests (FAT), and Site Acceptance Tests (SAT) on brownfield projects before implementation.",
      "Utilize tools such as Plant Triage to observe control loop performance and optimize efficiency of valves by applying PID Control Concepts.",
      "Implement advanced control loops to promote efficiency in production, provided operator trainings, and conducted qualification tests to ensure conformance.",
      "Specify instrumentation given performance standards and replace field instrumentation with suited hardware to reduce failure rates on facility by up to 50%.",
      "Design and develop custom HMI screens and faceplates to improve usability and efficiency for offshore operators.",
      "Maintain and troubleshoot Rockwell, Honeywell, and Allen-Bradley PLCs, tracing I/O, implementing control loops, creating loop diagrams for new instrumentation, and redlining drawings.",
      "Implement communication with DCS through industrial protocols such as RS232, RS485/Modbus, Ethernet/IP, and ControlNet/DeviceNet."
    ],
    logo: "https://static.wixstatic.com/media/32e826_9a5c269cad9d43b5b824c23f7e3f408e~mv2.jpg",
    badge: "Energy & Automation"
  },
  {
    company: "British Petroleum (bp)",
    role: "Controls and Instrumentation Engineer – Thunderhorse",
    period: "May 2022 – June 2023",
    location: "Houston, TX",
    url: "https://www.bp.com",
    description: "Engineered cascading compressor control loops and mobile instrument safety workflows for the Thunderhorse offshore facility.",
    highlights: [
      "Implemented a cascading control loop on the export gas compressors, resulting in a measurable reduction of CO2e emissions.",
      "Built the control loop within Control Builder, authored custom HMI faceplates, verified functionality through internal factory acceptance tests (FAT), and validated control loop operation at Kongsberg.",
      "Populated instrumentation data from all fire and gas detectors into enterprise mobile maintenance tools, enabling operators and technicians to access vital safety data on the fly."
    ],
    logo: "https://static.wixstatic.com/media/32e826_9a5c269cad9d43b5b824c23f7e3f408e~mv2.jpg",
    badge: "Offshore Controls"
  },
  {
    company: "DMV-BMW",
    role: "Automotive Engineer / Business Partner",
    period: "September 2019 – April 2023",
    location: "Virginia",
    description: "Managed customer pipelines and specialized in high-performance BMW powertrain engineering, ECU board-level diagnostics, wiring harness integration, and PID calibration tuning.",
    highlights: [
      "Managed customer interest pipeline and focused on expanding the business by promoting specialized services through word of mouth and proof-of-concept track demonstrations.",
      "Specialization in fully disassembling, blueprinting, rebuilding, and bench testing high-performance BMW engines for customers.",
      "Diagnosed damaged vehicle ECUs by repairing circuit boards, wiring in new performance management computers, completing wiring harness restorations/retrofits, and installing android radios with performance data-logging capabilities into customer vehicles.",
      "Tuned customer cars by leveraging knowledge in PID Control to create smooth performance curves and optimize efficiency."
    ],
    logo: "https://static.wixstatic.com/media/32e826_9762744883f34551a0215b497b76a0d0~mv2.jpg",
    badge: "Powertrain & Controls"
  },
  {
    company: "TradersAI.com",
    role: "Software Developer",
    period: "September 2021 – September 2022",
    location: "Fairfax, VA",
    url: "https://tradersai.com",
    description: "Assisted in developing an algorithm-based quantitative trading strategy for /ES futures, contributing to a 351% return since 2018. Designed cross-platform mobile apps and automated market execution infrastructure.",
    highlights: [
      "Assisted in developing an algorithm-based trading strategy for /ES futures, contributing to a 351% return since 2018.",
      "Leveraged multiple languages (Python, C++, Java) to send real-time long and short signals off a mobile app, choosing each language for its computational strengths.",
      "Developed a design for the app UI using Figma studio to be implemented across Android and iOS platforms.",
      "OneSignal API and Firebase API were used to document data and send real-time notifications to app users for long and short signals through C++.",
      "IBKR API used to pull real-time stock prices of the SPX Index to be used against proprietary levels produced by the TradersAI Algo. Data processed through the Pandas API on Python and imported to Firebase for later processing.",
      "Leveraged threading to allow multiple processes to run in conjunction with each other and gather data as well as evaluate data against set 'levels' by gathering 5-minute candle close prices for long/short signals.",
      "Analyzed AI Performance through a research study published on the CFA Institute Enterprising Investor Blog, highlighting the AI's returns against the S&P 500.",
      "Built Python-based automation for data processing, real-time market retrieval, and trade signal execution."
    ],
    logo: "https://static.wixstatic.com/media/32e826_1c2a04f9188448cf9dcc6eb5cf31b996~mv2.png",
    badge: "Quant & Software"
  },
  {
    company: "vRealm Inc.",
    role: "vRealm Private Tutor",
    period: "September 2022 – June 2023",
    location: "Virginia",
    description: "Provided private STEM tutoring in Physics, Calculus, and Statistics, along with college essay preparation and diagnostic learning plans.",
    highlights: [
      "Assisted high school students with challenging concepts in Physics, Calculus, and Statistics.",
      "Help students prepare for college essays and SAT exams.",
      "Developed performance surveys, checking with students and parents once a month to identify areas of focus needed.",
      "Promoted student participation by creating targeted practice exercises that target specific weak skills identified in monthly performance surveys and test reviews."
    ],
    logo: "https://static.wixstatic.com/media/32e826_cbbf386a3d934bbbb9c57d81966a3d82~mv2.png",
    badge: "STEM Education"
  },
  {
    company: "George Mason University – Robotics Lab",
    role: "Robotics Research Developer",
    period: "September 2018 – June 2019",
    location: "Fairfax County, VA",
    url: "https://www.gmu.edu",
    description: "Developed autonomous multi-agent swarm algorithms and collision avoidance systems at the GMU College of Engineering and Computing Robotics Lab.",
    highlights: [
      "Developed an obstacle avoidance algorithm in Objective-C and Python for a small-scale $500 robot capable of 'swarm' style collaboration.",
      "Maintained laboratory robots to diagnose hardware issues and improve sensor configurations.",
      "Created 'swarm' algorithm to enable robots to communicate live location between each other, allowing for a collaborative working environment for the robots.",
      "Optimized underlying 'swarm' algorithm to lower runtime complexity for resource savings on the onboard microprocessor."
    ],
    logo: "https://static.wixstatic.com/media/32e826_cbbf386a3d934bbbb9c57d81966a3d82~mv2.png",
    badge: "Swarm Robotics"
  }
];

export const EDUCATION: EducationItem[] = [
  {
    institution: "George Mason University – Volgenau School of Engineering",
    degree: "Bachelor of Science in Electrical Engineering",
    period: "August 2019 – May 2023",
    url: "https://www.gmu.edu",
    degreeVerificationUrl: "https://www.parchment.com/u/award/47670ba30839c14dfa1d0d764305d4fa",
    honors: "Cum Laude • Volgenau School of Engineering",
    details: [
      "Bachelor of Science in Electrical Engineering (Cum Laude).",
      "Coursework in embedded systems hardware interfacing, control theory, RF & electromagnetic theory, communication theory, and networking protocols.",
      "Clubs & Organizations: Pi Kappa Alpha Fraternity, Vietnamese Student Association."
    ],
    coursework: [
      "MATH 203 - Linear Algebra",
      "MATH 213 - Calculus III",
      "MATH 214 - Differential Equations",
      "CS 222 - Computer Programming for Engineers (C++)",
      "ECE 231 - Digital System Design II",
      "PHYS 262 - University Physics 3",
      "ECE 285 - Electrical Circuit Analysis II",
      "ECE 305 - Electromagnetic Theory",
      "STAT 346 - Probability for Engineers",
      "ECE 350 - Embedded System Hardware Interfaces",
      "ECE 417 - Smart Grid and Cyber Security",
      "ECE 421 - Classical System and Control Theory",
      "ECE 433 - Linear Electronics II",
      "ECE 445 - Computer Organization",
      "ECE 460 - Communication and Information Theory",
      "ECE 465 - Computer Networking Protocols",
      "SYST 469 - Human Computer Interaction"
    ],
    clubs: [
      "Pi Kappa Alpha",
      "Vietnamese Student Association"
    ],
    logo: "https://static.wixstatic.com/media/32e826_9db7237de6144ba588c1ee1a07fc48fa~mv2.jpg"
  },
  {
    institution: "Thomas Jefferson High School for Science and Technology",
    degree: "High School Diploma",
    period: "August 2015 – May 2019",
    url: "https://tjhsst.fcps.edu",
    honors: "National Merit Scholar • HackTJ Creators Award • Botball Robotics Programming Award",
    details: [
      "SAT: 1580 / 1600 • PSAT: 1490 / 1520.",
      "Awards & Honors: National Merit Scholar, HackTJ Creators Award, Botball Robotics Programming Award.",
      "Athletics: Varsity Football, Baseball, Basketball."
    ],
    clubs: [
      "Botball Robotics",
      "Reboot for Youth",
      "Cybersecurity Club",
      "Model UN"
    ],
    logo: "https://static.wixstatic.com/media/32e826_ecae226886574e27bdb8930985b1e414~mv2.png"
  }
];

export const PUBLICATIONS: PublicationItem[] = [
  {
    title: "A Study on the Impacts of Data Science and Machine Learning",
    type: "Paper",
    description: "Academic paper investigating the functional integration of artificial intelligence, machine learning algorithms, and large-scale data science pipelines, analyzing their evolution and societal, environmental, and economic impacts.",
    date: "2024",
    url: "https://cca90530-5079-40f5-b8c1-5c80ca4ef4e0.filesusr.com/ugd/32e826_15f3552920f14a4a9a46b21633a8968a.pdf",
    isExternal: true,
    downloadLabel: "Download Paper (PDF)"
  },
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
