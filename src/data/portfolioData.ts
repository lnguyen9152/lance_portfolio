/**
 * Lance Nguyen — Portfolio Data Store
 * All information, project case studies, images, and texts preserved verbatim from lnguyen9152.wixsite.com/portfolio
 */

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  tags: string[];
  shortDesc: string;
  heroImage: string;
  featured: boolean;
  year: string;
  organization: string;
  pdfUrl?: string;
  extractedKey?: string;
  paragraphs: string[];
  images: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  logo: string;
  badge: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  honors?: string;
  details: string[];
  coursework?: string[];
  clubs?: string[];
  logo: string;
}

export interface PublicationItem {
  title: string;
  type: 'Paper' | 'Case Study' | 'Report' | 'Research';
  description: string;
  date: string;
  url: string;
  isExternal: boolean;
  downloadLabel?: string;
}

export const PERSONAL_INFO = {
  name: "Lance Nguyen",
  title: "Electrical & Avionics Engineer",
  tagline: "Avionics Test GSE Engineer II at Relativity Space. Former Instrumentation, Controls, & Electrical Engineer at BP plc.",
  bioShort: "Born in Minnesota and raised in Northern Virginia, now working in the aerospace industry on rocket avionics test ground support equipment. George Mason University Electrical Engineering alum (Cum Laude).",
  bioLong: [
    "Born in Minnesota and raised in Northern Virginia, I find myself far from home. Currently, I work in the Aerospace Industry as an Avionics Test Ground Support Equipment Engineer at Relativity Space. I graduated from George Mason University in 2023 with a B.S. in Electrical Engineering (Cum Laude).",
    "I aspire to continue to improve my professional knowledge through the opportunities I'm presented with in both a professional and personal setting. I'm glad to always be curious about how things work, and I hope to learn as much as I can throughout my career.",
    "In my free time, I'm a huge fan of finance and enjoy learning about the commodities and equity markets. My favorite books include 'Reminiscences of a Stock Operator' by Edwin Lefèvre and 'Stock Market Wizards' by Jack D. Schwager. I also have a passion for automotive engineering, performance engine building, and track telemetry."
  ],
  avatarUrl: "https://static.wixstatic.com/media/32e826_9557d7fe6d8e4adabaf0018629a0577e~mv2.jpeg",
  email: "lnguyen9152@gmail.com",
  linkedin: "https://www.linkedin.com/in/lance-nguyen-15956b141/",
  location: "Los Angeles, CA / Washington, D.C. Metro",
  status: "Designing Avionics Test GSE & Control Systems",
};

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    company: "Relativity Space",
    role: "Avionics Test GSE Engineer II / Factory Test DACs Engineer II",
    period: "2024 – Present",
    location: "Long Beach, CA",
    description: "Engineering and qualifying specialized ground support equipment (GSE) and data acquisition and control systems (DACs) for automated avionics integration and launch vehicle test campaigns.",
    highlights: [
      "Architect and commission high-reliability ground support electrical interfaces for rocket stage avionics validation.",
      "Develop automated data acquisition, sensor telemetry calibration, and closed-loop test procedures.",
      "Support rapid iteration and hardware-in-the-loop (HIL) qualification cycles for launch vehicle subsystems."
    ],
    logo: "https://static.wixstatic.com/media/32e826_7b22e35adb244ee7a1fbd45fa552af2c~mv2.jpg",
    badge: "Current"
  },
  {
    company: "BP plc",
    role: "Instrumentation, Controls, and Electrical (I&C) Engineer",
    period: "2022 – 2024",
    location: "Houston, TX & Gulf of Mexico Assets",
    description: "Responsible for critical instrumentation, process automation, and safety-critical control system upgrades on BP's flagship offshore deepwater facilities in the Gulf of Mexico.",
    highlights: [
      "Led full asset replacement of marine collision avoidance systems (RACON, lanterns, NOMAN controller, and fog horns).",
      "Engineered Honeywell Experion C200 to UOC controller upgrade including ControlNet/DeviceNet modules, power supplies, and thin client operator workstations.",
      "Implemented closed-loop differential pressure control algorithm reducing CO2e flare emissions on BP's largest Gulf asset.",
      "Delivered high-accuracy ultrasonic metering upgrades replacing legacy DP orifice flow meters."
    ],
    logo: "https://static.wixstatic.com/media/32e826_9a5c269cad9d43b5b824c23f7e3f408e~mv2.jpg",
    badge: "Industry"
  },
  {
    company: "TradersAI",
    role: "Software Engineer",
    period: "2023",
    location: "Remote",
    description: "Developed automated algorithmic trading engines and quantitative analysis software for index futures and commodities markets.",
    highlights: [
      "Designed quantitative price action level detection algorithms running on 4-hour timeframe candlestick data.",
      "Engineered backtesting pipelines for S&P 500 E-mini (/ES) futures contracts achieving 351% net algorithmic return since 2018 benchmark inception.",
      "Built cross-platform client interfaces and alert distribution systems in Python."
    ],
    logo: "https://static.wixstatic.com/media/32e826_1c2a04f9188448cf9dcc6eb5cf31b996~mv2.png",
    badge: "Quant & Software"
  },
  {
    company: "///DMVBMW",
    role: "Lead Mechanic & Partner",
    period: "2020 – 2024",
    location: "Northern Virginia",
    description: "Spearheaded advanced performance diagnostics, powertrain builds, ECU recalibration, and suspension setup for BMW N54/N55 platforms.",
    highlights: [
      "Executed complete teardowns, block overhauls, twin-turbo upgrades, and high-pressure fuel pump (HPFP) enhancements.",
      "Utilized INPA, ISTA, and MHD for deep CAN bus diagnostics, sensor logging, and boost/timing tuning.",
      "Prepared track-ready vehicles with custom cooling, braking, and differential enhancements."
    ],
    logo: "https://static.wixstatic.com/media/32e826_3d982e2bef5b4dd287f5457fd728f2ff~mv2.png",
    badge: "Automotive"
  }
];

export const EDUCATION: EducationItem[] = [
  {
    institution: "George Mason University",
    degree: "B.S. in Electrical Engineering (BSEE)",
    period: "August 2019 – May 2023",
    honors: "Cum Laude",
    details: [
      "Graduated with honors in Electrical and Computer Engineering.",
      "Concentration in Control Systems, Digital Signal Processing, Embedded Systems, and RF/Communications.",
      "Active Member of Pi Kappa Alpha and Vietnamese Student Association."
    ],
    coursework: [
      "MATH 203 - Linear Algebra",
      "MATH 213 - Analytic Geometry and Calculus III",
      "MATH 214 - Elementary Differential Equations",
      "CS 222 - Computer Programming for Engineers (C++)",
      "ECE 231 - Digital System Design II (Verilog/VHDL)",
      "PHYS 262 - University Physics III (Electromagnetism & Waves)",
      "ECE 285 - Electrical Circuit Analysis II",
      "ECE 305 - Electromagnetic Theory",
      "STAT 346 - Probability for Engineers",
      "ECE 350 - Embedded System Hardware Interfaces",
      "ECE 417 - Smart Grid and Cyber Security",
      "ECE 421 - Classical System and Control Theory",
      "ECE 433 - Linear Electronics II",
      "ECE 445 - Computer Organization (MIPS Assembly)",
      "ECE 460 - Communication and Information Theory",
      "ECE 465 - Computer Networking Protocols",
      "SYST 469 - Human Computer Interaction"
    ],
    logo: "https://static.wixstatic.com/media/32e826_9db7237de6144ba588c1ee1a07fc48fa~mv2.jpg"
  },
  {
    institution: "Thomas Jefferson High School for Science and Technology (TJHSST)",
    degree: "High School Diploma with Science & Technology Honors",
    period: "August 2015 – May 2019",
    honors: "National Merit Scholar • HackTJ Creators Award • Botball Robotics Programming Award",
    details: [
      "Standardized Testing: SAT 1580 / 1600, PSAT 1490 / 1520.",
      "Extracurriculars: Botball Robotics, Reboot for Youth, Cybersecurity Club, Model UN.",
      "Athletics: Varsity Football, Baseball, Basketball."
    ],
    logo: "https://static.wixstatic.com/media/32e826_ecae226886574e27bdb8930985b1e414~mv2.png"
  }
];

export const PUBLICATIONS: PublicationItem[] = [
  {
    title: "BP Offshore Engineering Projects: Controls & Instrumentation",
    type: "Report",
    description: "Detailed overview of multi-discipline offshore instrumentation, control architecture upgrades, Honeywell C200 modernizations, and emissions minimization strategies executed on Gulf assets.",
    date: "2024",
    url: "https://cca90530-5079-40f5-b8c1-5c80ca4ef4e0.filesusr.com/ugd/32e826_15f3552920f14a4a9a46b21633a8968a.pdf",
    isExternal: true,
    downloadLabel: "Download Technical Report (PDF)"
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

export const PROJECTS: Project[] = [
  {
    "id": "nav-aid-replacement",
    "slug": "nav-aid-replacement",
    "title": "Nav-Aid Replacement",
    "category": "Controls & Marine Systems",
    "tags": [
      "BP plc",
      "Marine Safety",
      "PLC",
      "Industrial Automation",
      "RACON"
    ],
    "shortDesc": "Full replacement of an asset's marine collision avoidance system including RACON, lanterns, NOMAN controller, and fog horns.",
    "heroImage": "https://static.wixstatic.com/media/32e826_e2522b05c0024e51b1ebc21aff374834~mv2.jpg",
    "featured": true,
    "year": "2024",
    "organization": "BP plc",
    "pdfUrl": "https://cca90530-5079-40f5-b8c1-5c80ca4ef4e0.filesusr.com/ugd/32e826_15f3552920f14a4a9a46b21633a8968a.pdf",
    "extractedKey": "nav-aid-replacement",
    "paragraphs": [
      "The Nav-Aid replacement was one of the larger projects that I had to deliver during 2024. Since this was for BP, I cannot go into too much detail. However, I&#x27;ll explain generally how the system works as some addition context.",
      "The system consists of the following components:",
      "NOMAN",
      "Serves as a control panel for the entire system. Usually includes some type of monitoring and switches (digital or physical) to force equipment off or on.",
      "RACON",
      "This is a radar beacon, and proves no output to the NOMAN. It does, however, provide a set of fail contacts that are NC (Normally Closed) to notify the NOMAN monitoring if it loses signal.",
      "Fog-Horns",
      "These are connected to the NOMAN through a silence circuit. The NOMAN constantly sends a silent signal. Once this signal is not sent anymore, the fog-horn will blare. This is a fail-safe design, as the horn will blare if the NOMAN loses power.",
      "Fog Lanterns",
      "These are sync&#x27;d all around the asset. They are daisy chained and there is a \"master\" and \"slave\" relationship. One lantern will have a pulse faster than others, which leads the chain. These operate by using an external photocell to sense darkness. Their pulse signal is sent back to the NOMAN for monitoring.",
      "External Photocell",
      "This is used purely for the NOMAN to detect a fault. If the photocell senses darkness and the lanterns aren&#x27;t on, throw an alarm.",
      "Fig 1. A Nav-Aid Vendor Project Preparation",
      "To prepare for this project, I started by sourcing a budget. After the budget was approved, I issued a purchase order for the engineering to be completed. Once done, I started going through our documents to find all the legacy files.",
      "When reading through the legacy files, I redlined what was expected to be changed, and sent the drawings to the vendor. In addition, I noted all the specifications, flash patterns, horn patterns, and broadcast signal.",
      "The next step was to gather approvals. By sending the datasheets and specs to USCG (Coast Guard) and BSEE (Bureau of Safety and Environmental Enforcement), I ensured that all regulations were satisfied with the new updated equipment. Finally, I conducted an internal risk assessment to identify all related risks. With this project, I wasn&#x27;t able to identify any as it was a replacement in kind.",
      "Finally, it was time to contact contractors for bids. I contacted some construction/electrical vendors to coordinate the installation. By conducting weekly meetings with the engineering and execution teams, we were able to coordinate the execution of the project through creation of a workpack and project schedule.",
      "FAT",
      "The next step of the project was to conduct a factory acceptance test. Within the factory acceptance test, you verify that all the equipment is operational and fits company standards. In this case, I verified that the Allen-Bradley PLC within the NOMAN was receiving the correct outputs from the monitoring leads of the equipment.",
      "In essence, it&#x27;s a very simple test. Verify that all wiring diagrams match the equipment presented. In addition, complete a function test to ensure that all equipment functions properly. Finally, list deficiencies and sign off if all equipment is passed as good to go.",
      "Installation",
      "During this stage, the system is fully installed. The cables are examined and all conductors are tested for continuity and megged.",
      "Before execution, risk is evaluated and mitigated through whatever measures necessary. Finally, a schedule is put in place and a progress meeting is conducted at the end of each day.",
      "As the engineer on the project, it is very important to ensure the quality of contractor work. As equipment is being cabled, glanded, and installed; the engineer is responsible for ensuring that there are no deficiencies and all cables are terminated to their proper locations.",
      "SAT/Commissioning",
      "After all equipment has been installed, a formal site acceptance test is followed. This is something written before execution, and should be similar to the factory acceptance test.",
      "During this process, the equipment was powered on in zones and tested thoroughly. The operating voltage/current is recorded and verified to be correct. Because there may be a possibility of a short, it is better to do commissioning within zones for this specific project.",
      "Once all equipment has been verified to be working, both the vendor and I will sign off on documents. Any engineering redlines (shouldn&#x27;t be many) are as-built and documented.",
      "Project Done!"
    ],
    "images": [
      "https://static.wixstatic.com/media/32e826_e2522b05c0024e51b1ebc21aff374834~mv2.jpg",
      "https://static.wixstatic.com/media/32e826_e9f1dce6ac984ffc9d59f003aeb9fe1d~mv2.png"
    ]
  },
  {
    "id": "ultrasonics-upgrade",
    "slug": "ultrasonics-upgrade",
    "title": "Ultrasonic Meter Upgrade",
    "category": "Instrumentation & Gas Flow",
    "tags": [
      "BP plc",
      "Ultrasonic Flow",
      "Instrumentation",
      "Process Control"
    ],
    "shortDesc": "Upgrade legacy differential pressure (DP) flow meters to high-precision ultrasonic flow metering systems across offshore assets.",
    "heroImage": "https://static.wixstatic.com/media/32e826_ae3c05762a00405cbbad6fd4b6c83a78~mv2.jpg",
    "featured": true,
    "year": "2024",
    "organization": "BP plc",
    "pdfUrl": "https://cca90530-5079-40f5-b8c1-5c80ca4ef4e0.filesusr.com/ugd/32e826_15f3552920f14a4a9a46b21633a8968a.pdf",
    "extractedKey": "ultrasonics-upgrade",
    "paragraphs": [
      "This meter project was a cross-collaboration between the Instrumentation and Mechanical Team. The scope of this project was to replace differential pressure flow meters with ultrasonic meters.",
      "As the lead I&C Engineer, I had the following responsibilities:",
      "Ensure that all pressure transmitters, temperature transmitters, and thermowells fit the flow and design requirements.",
      "Ensure that the correct I/O is being delivered to the flow computers.",
      "Ensure that the flow computers were gathering the correct data to be sent through Modbus to our DCS system.",
      "Ensure that there was a fiber run to send data to our custody transfer agent.",
      "Ensure that the new equipment had reserved IP addresses for diagnostics.",
      "Ensure that all new equipment and junction boxes are rated for a Class1 Div2 Environment.",
      "Ensure that the new Modbus registers would be correctly mapped to its relevant SCADA points.",
      "Conduct redlines to document all changes.",
      "Fig 1. Some Ultrasonic Flow Meters from Emerson Equipment Specification",
      "To ensure that all the transmitters fit the design specification, I revisited the current installation&#x27;s datasheets and compared them to the new equipment. I verified that the output would still be a 4-20mA signal and ensured that they were ranged correctly. To verify the thermowell, I conducted a wake frequency calculation. As the meter tube diameter may change, this affects the flow and therefore the calculation.",
      "Within this project, I had to find a tap for ethernet and fiber; as well as some additional I/O. To do this, I found the nearest equipment with an ethernet switch. Then, I found which network the switch was on and added the static IP addresses onto that network. For the fiber, I found spare fiber (lucky) and ran a light tester on it to verify it end to end to it&#x27;s final location. Finally, for the I/O, I opened the junction boxes after reviewing the wiring diagrams and verified that the terminals I had selected were indeed empty.",
      "Modbus/Flow Computers",
      "The biggest challenge of this project was to ensure that the flow computers would be correctly metering the output. To ensure this, we conducted a factory acceptance test in multiple stages.",
      "Simulate values in flow computer, verify on screen.",
      "Connect flow computer to equipment, verify expected output.",
      "Connect flow computer to network. Verify that the Modbus registers mapped to the DCS are correct.",
      "Once these registers were verified, we simulated process conditions on the flow meter. Finally, we viewed those points on the Honeywell Experion HMI and compared it against previous data to verify that it was correct.",
      "Faceplate Modifications",
      "As an additional step, since we were changing to a different metering method, there had to be faceplate changes made. As such, there had to be deletions and additions that would portray all the new data we have added and the data we have removed. These new faceplates were implemented to display the data and additional control narratives were created to leverage the additional data."
    ],
    "images": [
      "https://static.wixstatic.com/media/32e826_ae3c05762a00405cbbad6fd4b6c83a78~mv2.jpg",
      "https://static.wixstatic.com/media/32e826_5f70f94ee2c44ab6a2ab2dacd15c2fdb~mv2.png"
    ]
  },
  {
    "id": "dcs-upgrade",
    "slug": "dcs-upgrade",
    "title": "Honeywell C200 to UOC Upgrade (DCS Upgrade)",
    "category": "Distributed Control Systems",
    "tags": [
      "BP plc",
      "Honeywell Experion",
      "ControlNet",
      "DeviceNet",
      "SCADA"
    ],
    "shortDesc": "Comprehensive upgrade of legacy Honeywell C200 controllers, DeviceNet/ControlNet modules, power supplies, servers, and thin client operator stations.",
    "heroImage": "https://static.wixstatic.com/media/32e826_d785a5cbde7e4bd7bef61cf35bb0817a~mv2.jpg",
    "featured": true,
    "year": "2024",
    "organization": "BP plc",
    "pdfUrl": "https://cca90530-5079-40f5-b8c1-5c80ca4ef4e0.filesusr.com/ugd/32e826_15f3552920f14a4a9a46b21633a8968a.pdf",
    "extractedKey": "dcs-upgrade",
    "paragraphs": [
      "This project consist of many different aspects; and I was fortunate to work with a stellar team to complete it. This project consisted of the following:",
      "Commission Thin Clients for Operator Workstations",
      "Linux OS with a RDP session to virtualized servers.",
      "Commission Honeywell UOC Controllers",
      "Replaced breakers to accommodate for higher amperage draw.",
      "Drill and Tap server cabinets to be able to mount the new controllers.",
      "Replace all DeviceNet and ControlNet Modules",
      "Just old, replacement in kind.",
      "Ensure data rate (baud rate) and node are set correctly.",
      "Replace power supplies for DeviceNet Modules",
      "Just old, replacement in kind.",
      "Replace servers with ones capable of virtualization.",
      "Better security and better processing power for virtualization.",
      "Replace server rails with ones made for new servers.",
      "Replace ethernet switches.",
      "Just old, replacement in kind.",
      "Figure1. DeviceNet Card Figure 2. An example of a UOC implementation. Risks Identified",
      "Short timeframe to execute project. No room for error.",
      "Materials had to be throughly tested within the lab before commissioning.",
      "Although process is shut down, habitability is still running. It&#x27;s important to ensure that there will be minimal loss of service when the PLCs controlling habitability are replaced.(AC/Water/Wastewater/Generators/Etc.)",
      "Ensure that all equipment on each DeviceNet module is OK to take down when the card is being replaced. Ensure that automation teams are monitoring the Rockwell PLC and the E3s are reset after replacement.",
      "Possibility of loss of control - identify jumpers for critical equipment.",
      "Overall, while complicated, the project wasn&#x27;t too bad to execute. This all comes down to planning - what redundancies need to be put in place to minimize risk. Additionally, the drive to reduce risk through each step of replacement is an important factor to put into consideration. When approaching an important execution step, it is imperative that each party knows exactly what can go wrong and exactly what role the party must take if an issue surfaces. With communication and a great team, we were able to complete the project with no unexpected issues."
    ],
    "images": [
      "https://static.wixstatic.com/media/32e826_d785a5cbde7e4bd7bef61cf35bb0817a~mv2.jpg",
      "https://static.wixstatic.com/media/32e826_80c9213c844e42bcbab20b8858c4e660~mv2.png",
      "https://static.wixstatic.com/media/32e826_fe216990deff46a891d65318bdc79e78~mv2.png"
    ]
  },
  {
    "id": "pressure-differential-indicator-controller",
    "slug": "pressure-differential-indicator-controller",
    "title": "Pressure Differential Controller (CO2e Reduction)",
    "category": "Control Systems & Environmental",
    "tags": [
      "BP plc",
      "Control Algorithms",
      "Rockwell PLC",
      "Emissions Reduction"
    ],
    "shortDesc": "Developed a closed-loop pressure differential control algorithm to help reduce CO2e flare emissions on BP's largest Gulf of Mexico deepwater asset.",
    "heroImage": "https://static.wixstatic.com/media/32e826_1c601daa9c2f4f8db00b05c8c5765cb2~mv2.jpg",
    "featured": true,
    "year": "2023",
    "organization": "BP plc",
    "pdfUrl": "https://cca90530-5079-40f5-b8c1-5c80ca4ef4e0.filesusr.com/ugd/32e826_15f3552920f14a4a9a46b21633a8968a.pdf",
    "extractedKey": "pressure-differential-indicator-controller",
    "paragraphs": [
      "Updated: Feb 5, 2025",
      "With no prior experience, it was a good learning experience to be able to simulate control narratives on our onshore servers; which mirrored what we currently have configured on our offshore assets.",
      "My main project for this internship was to identify and mitigate an inefficiency. As one of BP&#x27;s biggest drivers is Net Zero by 2050; I chose to do a project that would deliver an impact in both the cost and emissions space.",
      "My focus was mainly on the export gas line; where there was a pressure differential needed to deliver process fluid to it&#x27;s final destination. The inefficiency lies within the fact that operators would have to control the pressure differential; which was always fluctuating. With my new control narrative, I aimed to use cascade control to always keep the pressure differential within a certain bound. Since this was pressure; it was identified that a 50 psig pressure differential would be able to suffice to be able to support export reliably.",
      "Figure 1. An example of a cascading control loop. Functionality",
      "Add an additional CM to be used in cascade mode. Operators will still retain previous functionality in automatic and manual modes.",
      "Constraints/Settings",
      "Offset",
      "The differential the setpoint should be set at considering inlet pressure.",
      "Limits",
      "If the offset creates a value higher or lower than these limits, keep them bound within a range.",
      "SP High Limit",
      "SP Low Limit",
      "SP Ramp Rate",
      "Allows tuning of the ramp rate to control how fast the valve will be commanded reach the desired setpoint.",
      "HMI",
      "Since this additional CM has a good amount of variables, it will be good to add a full HMI popup for such an algorithm. Within this faceplate, the operator should be able to see all the CM&#x27;s being controlled and their pressure values. Since an additive differential is being applied, this should be displayed in a way that is easy to understand. Finally, there should be an option for the operator to quickly change the settings such as limits and ramp rates.",
      "Implementation",
      "Firstly, there has to be logic in place to determine what mode the PIC (Pressure Indicating Controller) is in. By using a TypeConverter and a Select Block, we can allow for the cascade control to only kick in when it&#x27;s active.",
      "There are some very simple control blocks that can be used in this implementation. We can pass arguments through an AUXCALC (Calculation) block such as the differential, high&low limit, and the current PV value from the inlet pressure transmitter&#x27;s DACA (Data Acquisition) block.",
      "If the correct mode is selected, the PV + differential will be passed to a ROCA (Rate of Change) block to be used to manipulate the setpoint to reach the desired PV on the export side.",
      "Tuning",
      "To tune this control loop, we used a physical simulation of the process under operating conditions. By engaging in a step-tuning exercise, one can determine which are the ideal rates for startup. This ensures that the rates are in the ballpark needed to operate under process conditions and only minimal changes will have to be made to hone in the final values."
    ],
    "images": [
      "https://static.wixstatic.com/media/32e826_1c601daa9c2f4f8db00b05c8c5765cb2~mv2.jpg",
      "https://static.wixstatic.com/media/32e826_036829a460a44e11ac3f014565bfe70e~mv2.png"
    ]
  },
  {
    "id": "gmu-space-tracker",
    "slug": "gmu-space-tracker-project",
    "title": "GMU Space Tracker Project",
    "category": "Aerospace & Embedded Systems",
    "tags": [
      "George Mason Univ",
      "NASA Skyfield",
      "Satellite Dish",
      "Microcontrollers",
      "PCB Design"
    ],
    "shortDesc": "Automatic ephemeris tracking and guidance software system for George Mason University’s 9-meter satellite dish using NASA orbital data.",
    "heroImage": "https://static.wixstatic.com/media/32e826_64b26926ab5e4f7fa9de55c0cc6a6fee~mv2.jpg",
    "featured": true,
    "year": "2023",
    "organization": "George Mason University",
    "pdfUrl": "https://cca90530-5079-40f5-b8c1-5c80ca4ef4e0.filesusr.com/ugd/32e826_c152373d53f64f26bb94ef2216ea3ba9.pdf",
    "extractedKey": "gmu-space-tracker-project",
    "paragraphs": [
      "Updated: Feb 3, 2025",
      "For the basis of this project, George Mason University had acquired a 9-meter satellite dish. While the dish worked properly, it was apparent that there was a need to upgrade the dish&#x27;s positioning system. With only a mode of manual operation via a physical controller in the operations booth, my team and I decided to set out and create a low-cost automatic tracking algorithm using NASA&#x27;s \"Skyfield\" database and a few low cost microcontrollers.",
      "Figure 1. GMU&#x27;s 9m Satellite Dish/Control Center In order to implement this system, we took a top down approach and identified all the separate modules that were needed to successfully implement the tracking system. This full system consists of 5 core modules: the encoder module, the GUI module, the software module, the prototype, and the PCB module.",
      "Figure 2. Physical Architecture Figure 3. System Architecture With the general path in mind, we also had to define exactly how we wanted to have the system process a request and behave. Therefore, this functional decomposition diagram was created.",
      "Figure 4. Level-1 Functional Decomposition Although this is a short post, I will summarize most of the key points and learning that was encountered in each module. If interested, you can read the full paper about the project here:",
      "FinalReport .pdf Download PDF • 1.93MB GUI Module",
      "The GUI consisted of three separate tabs: Automatic Tracking, Manual Tracking, and Setup. Design was done in TKinker, which has built-in Python and simplifies the creation process. In order to build this correctly, there had to be a deep understanding of the hardware/software. This screen is exactly what the user interfaces with; and there needs to be relevant information displayed so the user knows exactly what is happening at every given moment. In addition, this had to be updated in a reliable timeframe in which the user will not miss important information but also not overload the Raspberry Pi used for processing.",
      "Figure 5: Automatic Tracking While the setup and manual screens are important; they were simple in which the manual mode was used for manual control and the setup screen was used to \"calibrate\" the encoders. I&#x27;d like to focus on the automatic screen, as it is the most important screen of this project.",
      "As seen in Figure 5, the automatic GUI shows all the important information that a user would need. The user will be able to see current time, current azimuth and altitude, the defined objects&#x27; azimuth and altitude, a start and stop button, and any errors that may occur that would cause issues. Throughout this whole process, I liked applying HMI (Human Machine Interface) fundamentals, where operators should only be presented with important information for ease of use.",
      "Software Module",
      "Within the software module, we chose to separate the pure software from that of the encoders. With the pure software implementation, we focused on gathering celestial data from NASA&#x27;s Skyfield Python Library. Incorporating the World Geodetic System 1984 standard, or ‘WGS84’, Skyfield facilitates the usage of topocentric location, enabling the computation of positional variances between a given point on the Earth&#x27;s surface and a celestial body in orbit. We implemented the CelesTrak database, which was used to retrieve the data needed to track satellites. SPK type files from Nasa Jet Propulsion Laboratory were used to collect the data needed to track Voyager 1, planets, the Moon and the Sun. Using spktype01 and spktype21 python libraries, the files were analyzed and implemented within our system. Our data was compared again \"The Sky Live\" database, where we found a 0.5 degree variance that we accounted for in our testing.",
      "Figure 6. The Sky Live Database Encoder Module",
      "The encoder module was one of the most important modules of this project. This module is responsible for the precise measurement of the satellite dish&#x27;s current azimuth and elevation positions. This was done with both hardware and software; and consisted of the ERCFS absolute rotary encoder and a Raspberry-PICO Microcontroller.",
      "Firstly, these encoders perform the measurement of the angular position and returns a 16-bit gray code cluster representative of the current angle. When reading the datasheet, these specific encoders are 12-bit, so the remaining 4 bits are ignored. With this in mind, we can calculate the position as follows:",
      "Figure 7: Precision of Encoders For these encoders to work, the module functions with a master-slave relationship. The Pico serves as a master where it sends a clock signal to the encoder to determine the transmission rate of the 12 output bits of the encoder. In this specific system, we opted to use a 60KHz clock signal. After each successive measurement, a 40uS pause is issued to partition the recorded angles.",
      "Figure 8: Clock Signal and Encoder Output By decoding the gray code output of the 12MSB from the encoder to binary, we are able to retrieve an angular value for the current position.",
      "Figure 9: Encoder Angle With simplicity in mind, we decided to send this recorded angle through USB over serial communication. When it is received by the software module, it is parsed to pull just the numerical value of the encoder position.",
      "PCB Module",
      "The PCB module was used as a synthesis of all the major hardware components of the project. While a breadboard was used before, the PCB served as a compact and robust solution to combine all hardware components in the final delivery. The PCB is designed to connect the Raspberry Pico, a BOB-12009 ROHS bi-directional level shifter, L9110h H-bridge chips and a 120uF capacitor together.",
      "The PCB is responsible for moving the motors through an H bridge, which allows for bi-directional movement based on outputs from the Pi. To resolve any issues with noise, a 120uF capacitor was used on the input circuit of the H-Bridge chip.",
      "Because the Raspberry Pi and the Raspberry Pi Pico operated at different voltages, 5V and 3.3V, a bi-directional level shifter had to be implemented to step the voltage to the correct output. This was mainly used for the clock signal, as the encoders required a 5V signal. In addition, the encoder output had to be stepped down from 5V to 3.3V to be able to be utilized by the Pico.",
      "Figure 10: PCB Schematics Figure 11: PCB Traces Figure 12: Final PCB Product Prototype Module",
      "Finally, we arrive at the prototype module. There were two steps to this prototyping process. The first prototype was created to allow for a simple way to mount encoders. Since there were lead time issues with the H25 Encoders (the ones on the satellite), we had to opt to use smaller encoders. Because we knew the end goal would always be to use those H25 encoders, we had opted to create adapter plates to mount the temporary encoders. These encoders were coupled with TS-32Z370 motors; and were connected through a flexible coupling.",
      "Figure 13: First Prototype Figure 14: Encoder Mounting Plate Figure 15: Mounting Adapter Plate for Smaller Encoders As we went further into the development process, we opted to create a \"final prototype\" in which it mirrored the construction of the final implementation. As seen here, there is a dish that can move on the azimuth and elevation axis. Within the bottom compartment, the PCB, controllers, power supply, and azimuth motor was housed.",
      "Figure 16: Final Prototype After extensive testing, it was determined that this system was ready for implementation and met all the requirements accuracy wise. As seen in this video - this was our first successful test of the prototype.",
      "Overall, this project was completed within a budget of $360; most of which was spent on the encoders. This goes to show that software is very powerful, and that making an impact does not require much capital. As this software is now proven to work properly, the 5V signal from the RPi to control the motors would only need to be stepped up to work with the large scale 9m dish. This project was amazing, and allowed for many multi-disciplinary collaboration opportunities."
    ],
    "images": [
      "https://static.wixstatic.com/media/32e826_64b26926ab5e4f7fa9de55c0cc6a6fee~mv2.jpg",
      "https://static.wixstatic.com/media/32e826_4a3bc88739f54cc4be7e53e45181a143~mv2.jpg",
      "https://static.wixstatic.com/media/32e826_59ef3cd8061d4f87ae75875ba5630710~mv2.jpg",
      "https://static.wixstatic.com/media/32e826_24938e9ea36144c99068becda6e8f8c2~mv2.png",
      "https://static.wixstatic.com/media/32e826_ec0f1e54a3704ad3a29e24b2c80984e3~mv2.png",
      "https://static.wixstatic.com/media/32e826_55b43f3d07fd4b56a140fbb7d25c0e22~mv2.png",
      "https://static.wixstatic.com/media/32e826_cd59789cf0674edeb9ed604437e6fb63~mv2.jpg",
      "https://static.wixstatic.com/media/32e826_56a6cf59bdae400f82f7b41318b04a54~mv2.png",
      "https://static.wixstatic.com/media/32e826_f872024081664ff9b58e6340fefcf08e~mv2.png",
      "https://static.wixstatic.com/media/32e826_becb161358544bbaaad7f0773953a8a1~mv2.png",
      "https://static.wixstatic.com/media/32e826_771827ab28bc4f8f8b7a86ee6fc07c22~mv2.png",
      "https://static.wixstatic.com/media/32e826_a9b3ee5ace234d718ce8b19a71d5d344~mv2.png",
      "https://static.wixstatic.com/media/32e826_25b3a752497d4366a88867135407428d~mv2.png",
      "https://static.wixstatic.com/media/32e826_060414f854764f03b59f6944d40db24a~mv2.png",
      "https://static.wixstatic.com/media/32e826_e8bb627d0c064b6093c1290c5f7b3411~mv2.png",
      "https://static.wixstatic.com/media/32e826_327687e8c32f4ec9bc798ba1f05f97bc~mv2.png",
      "https://static.wixstatic.com/media/32e826_a200a6efaa2f490ebcc9e4cc0c447668~mv2.png"
    ]
  },
  {
    "id": "parrot-ar-2-0-obstacle-avoidance",
    "slug": "parrot-ar-2-0-passive-obstacle-avoidance-algorithm",
    "title": "Parrot AR 2.0 Passive Obstacle Avoidance",
    "category": "Robotics & Control Systems",
    "tags": [
      "Robotics",
      "Ultrasonic Sensors",
      "Autonomous Flight",
      "Control Loops"
    ],
    "shortDesc": "Development and validation of an autonomous passive obstacle detection and avoidance algorithm for the Parrot AR 2.0 quadrotor drone.",
    "heroImage": "https://static.wixstatic.com/media/32e826_e05f808e952847209d1fbd6ebf6dbe10",
    "featured": false,
    "year": "2023",
    "organization": "Academic Project",
    "extractedKey": "parrot-ar-2-0-passive-obstacle-avoidance-algorithm",
    "paragraphs": [
      "In this project, I set out to develop a passive obstacle avoidance algorithm for the Parrot AR 2.0 Drone.",
      "The objectives for this project were:",
      "Control drone flight through Python to avoid static and dynamic obstacles.",
      "This consist of the following sub-objectives:",
      "Fly drone through python commands sent over a shared network.",
      "Connect a controller to the drone and use ultrasonic sensors to detect motion.",
      "To accomplish our goal, we used the following materials:",
      "Parrot AR 2.0",
      "Glue Gun",
      "Dremel",
      "ODroid C2",
      "4 Ultrasonic Sensors",
      "Portable Battery",
      "3D Printed Rotor Guards",
      "Carbon Fiber Rotors",
      "Upgraded Gears",
      "Upgraded Bearings",
      "Zip-Ties",
      "Design",
      "To begin, we had to fully strip down the drone. As we were adding additional weight with the extra controller and ultrasonic sensors, so we needed to lose weight to not lose functionality.",
      "Once weight reduction was completed, a flight test was done with the bare drone to ensure that functionality was not hindered. Once it was able to achieve flight, we used the PyDrone library to control flight through Python. With flight achieved, the next issue would be connectivity.",
      "By using a personal hotspot, we were able to use NodeCopter to assign the drone an IP Address. With an IP Address, we were able to send commands remotely to fly the drone. With the ODroid C2 on the same network as the drone, we were able to leverage it&#x27;s Linux operating system to use the Ultrasonic inputs to send real-time commands for obstacle avoidance.",
      "Algorithm",
      "Initially, we planned to use neural networks with TensorFlow to detect incoming obstacles and avoid them, with the position, velocity, and acceleration recorded from each sensor being inputs and an angle, delay, and magnitude returning as outputs. However, this proved to be much too slow and did not return a response fast enough. Part of this problem was that the ARM processor on the ODROID C2 was not powerful enough to handle a 16-neuron 3-layer network. Since our goal was to allow the drone to avoid obstacles in a short time frame, we decided to implement our algorithm naïvely.",
      "Unlike conventional obstacle avoidance systems, the algorithm takes the velocity and acceleration of the oncoming object into account, in order to better predict to a high degree of precision at what time the drone should move. However, as we had a limit on processing power, we could only use ultrasonic sensors to implement the algorithm.",
      "Problems Encountered",
      "During this project, the main issues encountered were cost, processing power, and weight.",
      "Cost/Processing Power",
      "The goal was to find the cheapest but best performing microcontroller and drone. At this time, the best options we could find were the Parrot AR 2.0 and the ODroid C2.",
      "We chose to use the Parrot AR 2.0 as there were many Python libraries already built around it and it was easy to upgrade as there were many pre-made parts.",
      "The ODroid C2 was chosen as it was faster than a traditional Rasberry Pi and was based on a 64-Bit architecture.",
      "However, when implementing our algorithm, the ODroid C2 eventually ran out of processing power; prompting us to have to pivot the project to use ultrasonic sensors rather than cameras.",
      "Weight",
      "With all the additional hardware, the drone began having issues with flight. To combat such issues, we had to operate off of 4 ultrasonic sensors rather than the originally planned 8.",
      "Even though we had originally 3D printed propellor guards, it was found that even that was too much weight. To combat this, we used styrofoam to create the final version of the guards.",
      "To make the drone operate as efficiently as possible, we upgraded the propellor gears, propellors to carbon fiber, the the propellor bearings to provide less resistance. With these upgrades, the drone was able to produce a little more \"power\" as there was less power draw from friction.",
      "Learnings",
      "From our data, we were able to conclude that although the drone was able to avoid some obstacles but not all, at an accuracy of 73.3%. The drone was limited to how quickly the ultrasonic sensors could detect the object and how quickly the micro-controller could process the signal and send a maneuver to the drone. However, since the purpose of the algorithm was to be able to be implemented in a naïve, cost-effective manner, it is a fairly good success rate.",
      "Contrary to our original algorithm design, we saw in our research that it was better for the drone to just move in straight lines instead of doing flips or other maneuvers to avoid an object."
    ],
    "images": [
      "https://static.wixstatic.com/media/32e826_e05f808e952847209d1fbd6ebf6dbe10"
    ]
  },
  {
    "id": "hockey-bot-arduino",
    "slug": "hockey-bot-arduino",
    "title": "Hockey Robot (Arduino)",
    "category": "Robotics & Embedded",
    "tags": [
      "Arduino",
      "C++",
      "Electromagnet",
      "H-Bridge",
      "RF Control"
    ],
    "shortDesc": "Remote-controlled competitive robotics platform equipped with dual DC drivetrains and custom pulsed electromagnet mechanism for puck capture.",
    "heroImage": "https://static.wixstatic.com/media/32e826_7602d51e7c3142f1b640d674187ba786~mv2.jpg",
    "featured": false,
    "year": "2022",
    "organization": "Robotics Team",
    "extractedKey": "hockey-bot-arduino",
    "paragraphs": [
      "This was a project to create a robot that could play a game of hockey with other robots. The robot consisted of components such as:",
      "Wood",
      "Assorted Vex support pieces",
      "1 Large Bolt",
      "Lots of wire",
      "2 Motor Modules",
      "Wheels",
      "Assorted hardware fixtures",
      "1 Joystick",
      "1 Romeo board and 1 Arduino board",
      "2 XBees",
      "1 Breadboard",
      "1 Neodymium magnet",
      "The robot was designed to be small and maneuverable, with an mount to hold an electromagnet over the edge. The electromagnet must be powerful enough to move a \"puck\" in order to play the hockey game.",
      "Figure 1. Robot Prototype Construction",
      "Electromagnet",
      "Wrap wire tightly around a large bolt, to use for the puck.",
      "Chasis",
      "Laser Cut Material after designing the pieces in AutoDesk.",
      "Attach wheels, motors, magnet, and Romeo Board.",
      "Controller (Robot)",
      "Create wiring diagrams for all materials needed.",
      "Attach XBee reciever to bot.",
      "Controller (Handheld)",
      "Wire the transmitter, Arduino, and joystick onto a breadboard.",
      "Figure 2. Controller Schematic Figure 3. Robot Schematic Code",
      "Both the Romeo and Arduino board had to be coded to enable the electromagnet and follow the joystick&#x27;s instructions from the transmitter side.",
      "Figure 4: Transmitter Code Figure 5: Reciever Figure 6: Receiver Code Projects"
    ],
    "images": [
      "https://static.wixstatic.com/media/32e826_7602d51e7c3142f1b640d674187ba786~mv2.jpg",
      "https://static.wixstatic.com/media/32e826_47f15c63a3fb4f87a1fafc2a3b89f1b4~mv2.png",
      "https://static.wixstatic.com/media/32e826_93179ba9df61455dbb80ec9f6ba25730~mv2.png",
      "https://static.wixstatic.com/media/32e826_883b194e619844a69748bbab4fd1b12b~mv2.png",
      "https://static.wixstatic.com/media/32e826_099279eb66084265ac9f044c95c41d0e~mv2.jpg",
      "https://static.wixstatic.com/media/32e826_0e5a39af7cee462e9a6e1488d95571c4~mv2.jpg",
      "https://static.wixstatic.com/media/32e826_fc4c74e7b9514ffb9f159889809faeb0~mv2.jpg"
    ]
  },
  {
    "id": "binary-hex-seven-segment",
    "slug": "binary-hex-to-seven-segment-display-vhdl",
    "title": "Binary/Hex to Seven Segment Display (VHDL)",
    "category": "Digital Logic & FPGA",
    "tags": [
      "VHDL",
      "Basys3 FPGA",
      "Vivado",
      "Digital Logic"
    ],
    "shortDesc": "FPGA hardware description logic in VHDL converting binary/hexadecimal switch inputs to cathode multiplexed seven-segment displays on Basys3.",
    "heroImage": "https://static.wixstatic.com/media/32e826_4a4274a3698c47beb241688f630fb087~mv2.jpg",
    "featured": false,
    "year": "2022",
    "organization": "ECE 231 Digital Design",
    "extractedKey": "binary-hex-to-seven-segment-display-vhdl",
    "paragraphs": [
      "Updated: Feb 6, 2025",
      "Within this project, I wanted to to use the Basys3 board to convert a binary/hex input to a seven segment value. To do this, I used the seven segment display and the switches on the board.",
      "To carry out this project, I separated my implementation into two separate sections. First, I implemented the binary to seven segment converter. Once this was complete, I implemented the hex to seven segment.",
      "To implement the binary/hex to seven segment, I implemented to following in the entity statement:",
      "Port ( B3, B2, B1, B0 : in STD_LOGIC; a, b, c, d, e, f, g : out STD_LOGIC; disp_right, disp_left, disp_midright, disp_midleft : out STD_LOGIC ); To implement the Hex to seven segment, I chose a different approach. Here, I defined what each switch input would translate to on the seven segment display. I initialized these two signals to be used.",
      "signal BBBB : STD_LOGIC_VECTOR(3 DOWNTO 0); signal segments : STD_LOGIC_VECTOR(6 DOWNTO 0); Next, I defined a with-select statement.",
      "begin BBBB <= B3 & B2& B1& B0; with BBBB select segments <= \"0000001\" when \"0000\", \"1001111\" when \"0001\", \"0010010\" when \"0010\", \"0000110\" when \"0011\", \"1001100\" when \"0100\", \"0100100\" when \"0101\", \"0100000\" when \"0110\", \"0001111\" when \"0111\", \"0000000\" when \"1000\", \"0000100\" when \"1001\", \"0001000\" when \"1010\", \"1100000\" when \"1011\", \"0110001\" when \"1100\", \"1000010\" when \"1101\", \"0110000\" when \"1110\", \"0111000\" when \"1111\"; A <= segments(6); B <= segments(5); C <= segments(4); D <= segments(3); E <= segments(2); F <= segments(1); G <= segments(0); To verify this, I created a testbench to go through all the inputs with a 30ns delay. Finally, I uploaded the code to the Basys3 to test."
    ],
    "images": [
      "https://static.wixstatic.com/media/32e826_4a4274a3698c47beb241688f630fb087~mv2.jpg"
    ]
  },
  {
    "id": "quadrature-amplitude-modulation",
    "slug": "quadrature-amplitude-modulation-qam",
    "title": "Quadrature Amplitude Modulation (QAM in Simulink)",
    "category": "Signals & Communications",
    "tags": [
      "Simulink",
      "MATLAB",
      "RF Communications",
      "Nyquist Theory",
      "Constellation"
    ],
    "shortDesc": "Simulation and analysis of AWGN noise characteristics and bit error rates (BER) across Quadrature Amplitude Modulation schemes in Simulink.",
    "heroImage": "https://static.wixstatic.com/media/32e826_50e4e923ead04e5ea28e67ffcf3bc2c2~mv2.jpg",
    "featured": false,
    "year": "2022",
    "organization": "ECE 460 Communications",
    "extractedKey": "quadrature-amplitude-modulation-qam",
    "paragraphs": [
      "In this experiment, I observed the effects of noise on the Quadrature Amplitude Modulation (QAM) scheme. A QAM demodulator works by modifying both the phase and amplitude of a carrier signal to represent digital data. By varying the noise levels, I was able to examine the Nyquist Theory in effect.",
      "To begin this experiment, I built a QAM scheme by using Simulink.",
      "Figure 1. QAM Model Within the model, I used the following values for my experiment.",
      "Figure 2. Values Used I had expected that a channel will have a certain noise floor that is determined by its characteristics. Because these channels have a limited amount of “space” or noise floor, if the noise increases too much, the channel will become too “busy” and will not be able to properly recover a signal that is transmitted. The results are as follows:",
      "Figure 3. Noise Power of 0.001 Figure 4. Noise power of 0.005 Figure 5. Noise Power of 0.01 Figure 6. Noise Power of 0.05 From the results above, we are able to observe how noise power values affected the quality of the output signal that was recovered within the model.",
      "From observing the outputs on scope line 1,2 and 5,6 we can see that they are almost identical with a slight delay with a noise power of 0.01. We can observe that as the noise power gradually increases, the recovered signal becomes less recognizable as the noise power increases.",
      "Noise can be a negative to a QAM system. As these noise power levels increase, the recovered signal becomes less identifiable. When the noise is increased, the channel is occupied with more data. With more data, the channel begins to have issues recovering the message as the traffic causes for collisions and parts of the signal may be lost in transmission.",
      "This model proves that the noise floor has a significant effect on a QAM system. One can observe how different noise powers affect the signal that is recovered. With these models, one can estimate when the model will have a hard time recovering a signal, or where the noise floor is located. By matching the recovered signal with the original signal, an optimal traffic rate within the channel can be determined."
    ],
    "images": [
      "https://static.wixstatic.com/media/32e826_50e4e923ead04e5ea28e67ffcf3bc2c2~mv2.jpg",
      "https://static.wixstatic.com/media/32e826_eae034b2127e416ab441e32e30686d10~mv2.png",
      "https://static.wixstatic.com/media/32e826_22ecc261c92949eebc68fd10bce2ce64~mv2.png",
      "https://static.wixstatic.com/media/32e826_c24bb819bb4c47dba312bff178ddbf04~mv2.png",
      "https://static.wixstatic.com/media/32e826_fb20f4f9d418464bab28630253aa8544~mv2.png",
      "https://static.wixstatic.com/media/32e826_c972f5702b7641109d280f320c0c7ece~mv2.png",
      "https://static.wixstatic.com/media/32e826_821f63eef3e94eddb356b1e9bbc10b3f~mv2.png"
    ]
  },
  {
    "id": "city-counter-mips",
    "slug": "city-counter-in-mips",
    "title": "City Sorter & Counter (MIPS Assembly)",
    "category": "Computer Organization & Assembly",
    "tags": [
      "MIPS Assembly",
      "Memory Addressing",
      "Stack Frames",
      "Sorting Algorithms"
    ],
    "shortDesc": "Low-level MIPS assembly program implementing dynamic memory storage, ASCII string manipulation, and statistical population sorting.",
    "heroImage": "https://static.wixstatic.com/media/32e826_2bf300f699ee4e34b8e76c627517015c~mv2.jpg",
    "featured": false,
    "year": "2021",
    "organization": "ECE 445 Computer Organization",
    "extractedKey": "city-counter-in-mips",
    "paragraphs": [
      "In this project, I wanted to write a MIPS assembly program that asks a user to enter a list of cities, their states, and populations. When the user enters \"0\" for the population, the program will assume that the user is done entering data and will terminate and output it&#x27;s result. At the end of user entry, the program will report the cities with the largest and smallest population.",
      "The constraints are as follows:",
      "Only 10 cities allowed.",
      "The state has to be a valid (case sensitive)",
      "Each city is stored in a \"struct\" data structure.",
      "Name[50] - 50 byte string",
      "State[2] - 2 Bytes",
      "Population - 32bit Unsigned Number",
      "Each memory area will be labeled Cities as it&#x27;s stored. Each city occupies 56 bytes. Therefore, with 10 cities, we can allocate 560 bytes.",
      "Try the code yourself! (Change the extension to .asm)",
      "City_Population .txt Download TXT • 5KB Results",
      "Figure 1. Termination with \"0\" Figure 2. Terminating after 10 Entries In this iteration, I did not consider the case of the first letter within the name. However, as this is assembly, I believe I will have to create a dictionary of all the US Cities. I will continue exploring how to implement this in the most efficient way!"
    ],
    "images": [
      "https://static.wixstatic.com/media/32e826_2bf300f699ee4e34b8e76c627517015c~mv2.jpg",
      "https://static.wixstatic.com/media/32e826_62fab32ff6fb45c8a465be57848dc1d9~mv2.png",
      "https://static.wixstatic.com/media/32e826_1611a4f1c5f44f4280950c5b26df7a26~mv2.png"
    ]
  },
  {
    "id": "mario-game-java",
    "slug": "mario-game-java",
    "title": "Mar.io Game Engine (Java OOP)",
    "category": "Software Engineering & OOP",
    "tags": [
      "Java",
      "Swing/AWT",
      "Object-Oriented Design",
      "Game Physics"
    ],
    "shortDesc": "A 2D arcade platformer game recreation implemented in pure Java featuring modular character classes, hitboxes, frame rendering, and game loops.",
    "heroImage": "https://static.wixstatic.com/media/32e826_37ca631234564253bcfbdbd45392933e~mv2.jpg",
    "featured": false,
    "year": "2020",
    "organization": "Software Project",
    "extractedKey": "mario-game-java",
    "paragraphs": [
      "This project was created to be a very simple recreation of the popular Mario game. Within the project files, there are classes for all the characters. A \"champ\" is defined as either Mario or Luigi, that the user can pick to play as. The \"goomba\" is an enemy within the game, where one is randomly spawned at any position within the frame. Within the champ class, there is a boolean method defined as inMario. If this returns true, that would mean that the goomba has entered the champ&#x27;s hitbox and the player has lost.",
      "Figure 1. File Structure To start the game, one would compile and run the file Driver.java . When ran, the MenuPanel would open.",
      "Figure 2. MenuPanel Within this menu panel, there are many options the user can choose. Each of these selections would bring a specific panel into focus. Within these specific character and background choosers, the user will be able to change the game to the specific setting pre-defined with either a \"1\" or a \"2\". When one of these buttons are pressed, it will either be choose \"1\", choose \"2\", or Default.",
      "Figure 3. Choose Character Figure 4. Choose Background Instructions are self-explanatory, it is just a panel with text to explain the game to the user. We have a high-scores panel. Within this panel, a text file will be parsed that is created when the \"Champ\" dies to display the current high-scores. In the GamePanel, there are KeyListeners to get the users&#x27; keyboard inputs to control the character. To combat character position, there are getLeftImage() and getRightImage() methods within the champ class file to switch character position based on keyboard entry. In addition, the code to randomly generate the goombas is here. Finally, this is where the high score text file is made based on a boolean to check if the character is dead."
    ],
    "images": [
      "https://static.wixstatic.com/media/32e826_37ca631234564253bcfbdbd45392933e~mv2.jpg",
      "https://static.wixstatic.com/media/32e826_b4ed3aa9e2364fcb97681c74aa263211~mv2.png",
      "https://static.wixstatic.com/media/32e826_e70116fd6515430482a34f601cc4bf8f~mv2.png",
      "https://static.wixstatic.com/media/32e826_3f7c3f75014442f1812b80783891472b~mv2.png",
      "https://static.wixstatic.com/media/32e826_bc859c6027a54136b9505a773cf318a7~mv2.png"
    ]
  },
  {
    "id": "microbial-fuel-cell",
    "slug": "microbial-fuel-cell",
    "title": "Microbial Fuel Cell Bio-Electrochemical Study",
    "category": "Energy & Bio-Electronics",
    "tags": [
      "Renewable Energy",
      "Electrochemistry",
      "Voltage Characterization",
      "Research"
    ],
    "shortDesc": "Experimental investigation determining the mathematical effect of anodic surface area on voltage output and power density in Microbial Fuel Cells (MFC).",
    "heroImage": "https://static.wixstatic.com/media/32e826_112eef01ceff46149329f777e1a88da9~mv2.png",
    "featured": false,
    "year": "2020",
    "organization": "Energy Research Lab",
    "extractedKey": "microbial-fuel-cell",
    "paragraphs": [
      "Updated: Feb 3, 2025",
      "Non-Renewable Energy sources such as coal take millions of years to form. At the current rate of consumption, there will be none left to power our futures societies. In order to solve this issue, we must research renewable forms of energy. There are currently some well-known reliable forms such as solar energy and windmills, but there is also a form of renewable energy that is lesser known: the microbial fuel cell.",
      "The microbial fuel cell works by harnessing the power of microbes and turning such power into energy. However, this form of energy is lesser known for a reason: it is not reliable.",
      "By researching the effects of increasing anodic surface area, we can determine if there is a point at which microbial fuel cells would produce enough voltage output to a point where it could be used in practical applications.",
      "Figure 1: The Microbial Fuel Cell As such, the independent variable defined in this experiment was the anodic surface area; while the dependent variable was the voltage production of the MFC (Microbial Fuel Cell). Theory",
      "Nearly all organisms go through a cellular respiration process. This process requires a form of food and oxygen to create energy in the form of ATP, hydrogen plus ions, as well as excess electrons during the break-down of food. An MFC functions by having the bacteria within it undergo cellular respiration. Throughout this process, the excess electrons that are created during the process are transferred intro the anode; which produces voltage.",
      "More specifically, there are three types of transfers involved within the MFC:",
      "The bacteria transfers electrons to the anode by maintaining direct contact.",
      "Through reduction and oxidation reactions, electrons are lost and gained. The bacteria loses electrons to a molecule referred as the mediator; and the mediator gains those electrons. The mediator travels to the anode, repeats the same process, and the anode gains the electrons.",
      "The electrons then travel through wire to the cathode, in the other chamber. This process is what produces the energy.",
      "As a byproduct, the Hydrogen+ ions pass through the proton membrane into the second chamber. Within this chamber, the electrons and H+ ions meet to form H2O (pure water).",
      "Figure 2: MFC Illustration Experimentation",
      "Figure 3: Experimental Design Procedure",
      "For each MFC, we took one 3x3 inch acrylic container half and inserted carbon cloth into the open end. For the control we wove a titanium wire into one carbon cloth. For the second MFC we wove the wire into two cloths and for the third we wove it into three. After the carbon cloth stack was aligned inside a half of the acrylic container, one side of the protruding wire was bent around the carbon cloth and the other was guided through an opening at the top of the container. Then one piece of absorbing cloth was laid on top of the carbon cloths to prevent the carbon cloth from coming into contact with the PEM. A rubber gasket was smeared with baby oil to prevent leakage and attached to the top of the open side of the chamber. For the cathodic chamber, we did the same process with only one piece of carbon cloth.",
      "The PEM was then placed on top of the gasket on the anodic chamber. All the air bubbles underneath were thoroughly removed by pressing and stretching the PEM.",
      "The cathodic chamber was then placed on top of the anodic chamber. Four screws were inserted through the holes located at the four corners of the MFC and washers were positioned on both sides. Then wing nuts were hand tightened on the screws to keep the MFC together.",
      "After fully assembling the MFC, we had to set up the bacteria. A syringes were filled with 20 mL of catholyte solution which consisted of potassium ferricyanide. Another syringe was filled with 20 mL of S. oneidensis. The MFCs were then fed 250 microliters of sodium lactate every 1-3 days, depending on the fluctuation of voltage output",
      "A LabQuest was used to measure the voltage outputs of the MFCs. It took voltage measurements every six minutes and inputted it into internal storage. The data was then removed via USB and downloaded onto a computer.",
      "We used a one-way analysis of variance (ANOVA) test with an alpha (α) value of 0.05 to statistically test the data.",
      "Results",
      "Within the experiment, 750 data points were measured. Within this table, the data is complied to an average of every 25 data points.",
      "Figure 3. MFC Results With this data, we were able to determine that the null hypothesis was rejected at an alpha of 0.05 considering a p-value of 3.7E-114. Therefore, this data shows significant evidence that increasing anodic surface area of an MFC increases the voltage it produces.",
      "Figure 4. Graphical Representation of Experiment From this experiment, we determined that increasing the amount of anode surface area is directly correlated to voltage output. However, by observing the data, we can also hypothesize that this is not a reliable form of energy as the voltage tends to fluctuate due to the bacteria not undergoing respiration at a constant rate. In addition to increasing surface area, it may be good to implement a capacitor into our next experiement, where we can regulate and deliver a cleaner output."
    ],
    "images": [
      "https://static.wixstatic.com/media/32e826_112eef01ceff46149329f777e1a88da9~mv2.png",
      "https://static.wixstatic.com/media/32e826_54aafecca77141089a5e1b06bac69a35~mv2.png",
      "https://static.wixstatic.com/media/32e826_def34de371d6442c97ac56614c39798e~mv2.png",
      "https://static.wixstatic.com/media/32e826_5a1dc74526464883baf0c7e8587f3e81~mv2.png",
      "https://static.wixstatic.com/media/32e826_beb5dc53fba0433389ee8705a2d29bcb~mv2.png"
    ]
  },
  {
    "id": "tradersai-python",
    "slug": "_test",
    "title": "TradersAI Quantitative Engine & Mobile App",
    "category": "Quantitative Finance & Python",
    "tags": [
      "Python",
      "Quantitative Finance",
      "Futures Trading",
      "Algorithm Backtesting"
    ],
    "shortDesc": "Quantitative trading algorithm generating automated daily 4-hour key inflection levels on S&P 500 E-mini (/ES) futures with backtested 351% net return.",
    "heroImage": "https://static.wixstatic.com/media/32e826_0834fac05f1c46e6baae5bb5c3adedef~mv2.png",
    "featured": false,
    "year": "2023",
    "organization": "TradersAI",
    "extractedKey": "_test",
    "paragraphs": [
      "Updated: Feb 5, 2025",
      "I&#x27;ve always been interested by the financial markets. In my free time, I like to watch the futures and commodities markets. Specifically, my edge resides in the trading instrument /ES. My edge is very simple, I construct levels off the 4hr timeframe and trade those levels based on confluence from volume and candle closes above or below my \"levels\".",
      "Figure 1. An example of the 4Hr Levels that I use. Because of my interest in the subject, I chose to reach out to one of my good friends for a referral to Professor Ashok Margam. Dr. Margam had been developing an algorithm to produce daily \"levels\" to be used to base /ES trades off of. Upon chatting with him, I realized that his model was very similar to mine. However, because it is just an algorithm, it performs much better than me as there is no aspect of emotion from those trades. Therefore, the model has returned about 351% since it&#x27;s inception in 2018.",
      "When I had started, the model was not yet listed on the NYSE (NYSE:HFSP). In our original plan to pitch to investors, I was tasked to create a mobile app that sent real-time short and long notifications. I&#x27;ll provide an overview of how this implementation was done, but will not be able to go into too many specific details.",
      "To begin, I had to identify exactly what data and what modules to use to reach my desired outcome. This consisted of:",
      "Getting the real-time price of /ES.",
      "Getting the 10 minute candle close price of /ES",
      "Sending notifications to both Android and iOS Devices",
      "Creating a mobile app that was cross compatible across both platforms.",
      "Creating a beautiful mobile app; not one that looks unprofessional.",
      "Gathering data from the TradersAI algorithm everyday, and sorting it in a way that would never result in an error from my notification sending code.",
      "To reach these outcomes, I decided to use the following:",
      "OneSignal API (More compatible compared to APS (Apple Push Notification Service))",
      "HTML Parser (Gather the current SPY/ES Price at any given moment)",
      "IBKR Pro API (Works the same way as the HTML Parser. But the HTML implementation was much cleaner)",
      "Figma (Cross-Compatible Professional Looking Apps)",
      "Pandas and Numpy within Python for level sorting.",
      "Gathering Current Market Value and Sending Notifications",
      "Since I did not know which computer this program would be used on, I wanted to ensure that all dependencies were installed. To do this, I created a file named setup.py that when ran, would automatically install all dependencies. The file consisted of the following code:",
      "Figure 2. Installing Dependencies With all dependencies installed, we can then proceed to gather the current market price of SPX. To do this, I used BeautifulSoup. By using inspect element on the page, I knew exactly which area to point the request to. Once the text was found, I just had to format the text in a way that my main method would be able to understand and use when sending the notification. While I did implement the same method with the IBKR API, some concerns were raised as I planned to run this on a AWS Server. While the IBKR API was able to gather the data, it always needed a logged on instance of the app running.",
      "Figure 3. Requesting the current market value of SPX and formatting it. By using threading in the main method, I was able to optimize the real-time notification algorithm and the price gathering algorithm to work in conjunction with each other. To keep it simple, the function will have a pre-populated message based on my flag of \"l\" or \"s\" which stands for long or short. Based off whatever the sentiment is, the function will then parse a message to send to the end-user through the OneSignal API whenever it&#x27;s conditions are satisfied.",
      "Figure 4. Early Development Stages, Using SPY Prices (0.1x of SPX/ES) Sorting Data Output from the TradersAI Algorithm",
      "Sorting the data from the algorithm was not too bad, but 3-Dimensional data structures had to be used as the data was not only a level, but also had other items such as a Hardstop, Hardstop-BE, and trailing stop loss.",
      "Hardstop - A stop out level where you exit the trade for a loss.",
      "Hardstop BE - A stop out level where you exit the trade for a net zero gain.",
      "Trailing Stop Loss - Trails the trade as it goes your way. Usually, a set +/- deviation from the current price. If the price suddenly reverses into that deviation, exit position.",
      "To order this, I first decided to use a list to order my data. Because the list size was undefined, this would be the best way to go in order to not have an out of range error.",
      "To specifically sort the data, I began by parsing the data from the algorithm. I would create 4 index arrays for each level. For example, the values would look like this [Long/Short Level, Hardstop, Hardstop-BE, TrailingStopLoss]. Next, the data had to be sorted. By taking these long and short arrays and taking the first index of the arrays in each index of the main array, I was able to use a quicksort algorithm to quickly put them in order. I chose quicksort due to it&#x27;s O(nlogn) complexity.",
      "Figure 5. These are test values, so just a visual for code output. Manipulating the data to be used for notifications",
      "By implementing this array sorter and the OneSignal notification code, we are able to compare the 10minute candle close prices with the current long and short levels. Based on this, we can then send the notification to long/short to the end user. Then, this data will be sent over to the TradersAI App, which in hand displays it to the user when they open it.",
      "App Welcome Screen Trading Plan Summary Containers Live Position Containers By leveraging AirTable and Figma&#x27;s data.to.design plugin, we are able to use these containers to map them to specifically point at an object on AirTable."
    ],
    "images": [
      "https://static.wixstatic.com/media/32e826_0834fac05f1c46e6baae5bb5c3adedef~mv2.png",
      "https://static.wixstatic.com/media/32e826_376ddea5dfa442ca9421a0227f1f9ffc~mv2.png",
      "https://static.wixstatic.com/media/32e826_b6d5dd6158e449b59f0aea49ce2f9c0b~mv2.png",
      "https://static.wixstatic.com/media/32e826_dbd3c7f424a84fd68ae96668d691702f~mv2.png",
      "https://static.wixstatic.com/media/32e826_3f513ea5d74e459a9e56963bb970eea0~mv2.png",
      "https://static.wixstatic.com/media/32e826_ae9efe0a71a041d4afd2c5f5af7fc27e~mv2.png",
      "https://static.wixstatic.com/media/32e826_7caa14ea86ef4003a666a731db106292~mv2.png",
      "https://static.wixstatic.com/media/32e826_30dfc08532924f4baca1298fe946fdde~mv2.png",
      "https://static.wixstatic.com/media/32e826_90884f6e9c104770a5b8ca5aa5cbae9a~mv2.png"
    ]
  },
  {
    "id": "bmw-n54-engine-development",
    "slug": "bmw-n54-engine-development",
    "title": "BMW N54 Twin-Turbo Engine Development & Diagnostics",
    "category": "Automotive & Mechanical Systems",
    "tags": [
      "Automotive Engineering",
      "ECU Tuning",
      "Twin-Turbo",
      "CAN Diagnostics",
      "Mechanical"
    ],
    "shortDesc": "Comprehensive teardown, precision mechanical overhaul, upgraded twin turbochargers, custom fueling calibration, and track setup on the BMW N54 3.0L inline-6.",
    "heroImage": "https://static.wixstatic.com/media/32e826_0d2ba8e29fd544c2937a7710bb9d0852~mv2.jpg",
    "featured": true,
    "year": "2024",
    "organization": "///DMVBMW",
    "extractedKey": "bmw-n54-engine-development",
    "paragraphs": [
      "Updated: Feb 3, 2025",
      "This post will be in a little bit of a different format. Throughout high-school and college, I&#x27;ve always been intrigued by cars and loved learning as much as I could.",
      "I went through many cars throughout my time...and I wouldn&#x27;t substitute that experience for anything else in the world. Each car contributed to my mechanical experience; and I&#x27;m very glad that I&#x27;ve been able to experience that.",
      "2000 Lexus IS300",
      "First Car!",
      "Modifications: Muffler Deletes, Gloss Black Painted Wheels, Replaced Oxygen Sensors",
      "2017 Mustang GT",
      "Modifications: Nitrous, Lowering Springs, N2MB WotBox (No Lift Shift), Headers, Full Exhaust",
      "2008 E93 BMW 335i (Convertible)",
      "Modifications: JB4 Piggyback ECU, Throttle Controller, Downpipes, Drilled and Slotted Rotors, Charge Pipe, Intercooler",
      "2007 E92 BMW 335i (Coupe)",
      "Modifications: MHD Flash Tune, Sutphin Transmission Tune, Downpipes, Exhaust, Lowering Springs, Koni Shocks, Intercooler, Charge Pipe, E40+ E85 Mix, Stage 2 Fuel Pump.",
      "Maintenance: All work done by myself. Oil pan gasket, Oil Filter housing gasket, Water Pump, 2 Step Colder Spark Plugs, Injectors, R8 Ignition Coils.",
      "These experiences all contributed to me getting my final car before starting my business with a friend, in which I&#x27;ve had the most interesting learning experience of my life. I hope to take you through that journey with this post.",
      "First Day with the Car! Well... here it is. This was the car that I had decided to go crazy on. There was many issues with this car to start off, but that&#x27;s ok. I was confident in my mechanical knowledge and chose to get it at a lower price due to it&#x27;s issues. Mainly, the serpentine belt had slipped off multiple times. On this engine, (N54B30), that is a well known but catastrophic issue. Because of the location of the front main seal, a big issue seen is that the engine will \"eat\" the belt, and suck it into the oil pan. As it sits in the oil pan over time, it will eventually clog the oil pick up. When that becomes clogged, the engine get&#x27;s no lubrication. You know what happens next...",
      "So, to start off, I had a list of ready to do items for the car. This list consisted of both personal modifications and maintenance. I did the following:",
      "Modifications",
      "Genuine M3 Steering Wheel",
      "Much harder than the retrofit, as the steering wheel buttons will not be correctly mapped. I pulled boards from both the stock steering wheel and M3 steering wheel to swap so that I would be able to keep functionality. Mainly, the M3 steering wheel has an additional \"M\" button; which does nothing on this car.",
      "1M Gauge Cluster",
      "It is possible to get an OEM cluster. However, there are issues as you need the EEPROM to be \"virginized\" to accept your car&#x27;s current mileage. If not, you will run into the issue of mileage tampering. I decided to go the easier route: buy the gauge faces from the 1M. To fully implement this in an OEM+ case, I completely disassembled my stock gauge cluster, used the process of SMD Soldering to replace all orange LEDs with white ones, replace the gauge faces, and added an extra motor to replicate the M3&#x27;s warm-up redline (dynamic as the car temperature increases.) In addition to this, the speedometer was now reading incorrectly as it was scaled incorrectly. Easy fix - use BMW&#x27;s official dealer software INPA+ to add the new configuration onto the CAS (Car Access System) module.",
      "Maintenance",
      "Suspension",
      "Pull off the KW V3 Coilovers. Send to KW for a full rebuild. Buy all replacement hardware from the dealer (isolators, boots, etc.)",
      "All new M3 Control Arms",
      "Allows for a wider angle. They&#x27;re angled a little differently and the car will have to be aligned to M3 Spec.",
      "Rear Subframe Solid Bushings",
      "Old car. Those old rubber bushings make the rear very wobbly.",
      "Engine",
      "It is impossible to do the oil pan gasket without removing the subframe. Buy replacement parts for every issue possible on that platform and replace everything while the subframe is off. Replacements included:",
      "Oil Filter Housing Gasket",
      "Coolant can seep into oil, making it seem like a headgasket issue. Also, could be a cause of the belt slipping due to oil leaking on the belt.",
      "Electric Water Pump/Thermostat",
      "Plastic, will crack if it&#x27;s never been replaced before and dump all the car&#x27;s coolant.",
      "Oil Pan Gasket",
      "Goes bad over time, oil everywhere.",
      "Mickey Mouse Coolant Fitting",
      "Not sure why it was plastic from the factory, as the heat cycles can really cause cracking. Same issue as the water pump, replace with metal.",
      "Injectors",
      "Known to be stuck open, dumping fuel and hyrolocking the engine (Direct Injection). Index 12 was the known revision to have the least amount of these issues.",
      "Coil Packs/Spark Plugs",
      "We want more POWER! Engine will run hotter, so upgrade spark plugs to NGK 2-Step Colder and add reliable coil packs (R8 ones work with a custom made harness).",
      "Oil Cooler",
      "Replace with all AN lines and fittings. Allows for more flow to the oil cooler.",
      "Oil Thermostat",
      "A part of the Oil Filter Housing Gasket Job. Needed as the engine will be running a lot hotter from the extra 100-200 HP.",
      "Charge Pipe",
      "Pipe coming from the throttle body to the intercooler. With more boost and it being plastic, it&#x27;s bound to explode. Upgrade with a metal one.",
      "Front Main Seal",
      "The car had sucked a serpentine belt in before, cheap and easy to replace. Just need to remove the front crank pulley.",
      "New Pulleys/Serpentine Belt",
      "I found the issue here! The Power Steering Pulley was missing 2 bolts. Therefore, the vibrations caused the serpentine belt to slowly slip over time.",
      "Relocate washer nozzles to intercooler",
      "There&#x27;s high methanol content in washer fluid! Use it to cool the intercooler for some extra performance.",
      "First time working on the car! In it&#x27;s condition, I enjoyed the car with no issues for about half a year. However, I soon realized that I wanted more. I wanted to see how much power this car could actually push. That leads me to my next upgrade. Single Turbo.",
      "Modifications to be Single Turbo",
      "Six Extra 750cc Injectors",
      "Add a port injection rail to the intake manifold. Use a custom controller operated off a relay to turn on the injectors. The controller takes in a signal from the ECU, RPMs, and the boost to know when to turn on the injectors. Create a custom harness to tap into these specific pins.",
      "Dual Walbro 450 Fuel Pumps",
      "One fuel pump isn&#x27;t going to be enough with double the injectors. Attach the secondary fuel pump to the same relay that controls the port injection controller. If port injection turns on, turn on the extra fuel pump.",
      "Even Bigger Intercooler",
      "More heat! The colder the air, the more the engine will like it.",
      "E85 Fuel Content Analyzer",
      "A very good way to damage the car if you leave it sitting. E85 is well known to absorb water over time; therefore lowering your content and causing detonation.",
      "3.5\" Exhaust",
      "Backpressure may be good for naturally aspirated; but is the turbo&#x27;s worst nightmare.",
      "Turbo Manifold",
      "V-Band Flange is best to choose here. Best flow.",
      "Turbo",
      "Garett has always made the best. I chose the turbo that would be right at 80% of my power goals. A 3584RS BB features a 67mm inducer and 84mm exducer. It&#x27;s a balance between lag and power here.",
      "Motiv Twin Disk Clutch",
      "Two mating surfaces is better than one.",
      "15\" Rear Brake Conversion",
      "Drag Tires for better grip. It&#x27;s all about grip!",
      "Single Turbo Now Inevitable, but after 3 months of pushing about 28psi of boost making ~700HP, I cracked the engine block. Being a broke college student, I didn&#x27;t really have a path forward. I was an engineer though, so I did the only thing I could do...pull the engine out and tear it apart. Thus begins my journey.",
      "Coming Out! Upon inspection, I decided that this engine would never fit my power goals. I decided to research all the issues that people have had. Mainly, it was cracked pistons, rods, and headgasket issues. Because of this, I went all out. Buy a new long block, hone the cylinders, add ported pistons with a higher compression ratio, H-beam rods, cutring headgaket, ARP head studs, and steel inserts to alleviate pulling the aluminum block&#x27;s threads.",
      "All Apart! Specifically, I found the pistons and rods to be the most interesting aspect of my whole engine build. Mainly, I chose to get ported pistons and to file the rings a little larger than average spec to allow for more error with forced induction. It&#x27;s a very fine line to play on. File it too much, you&#x27;ll have low compression and blowby. File it too little, they&#x27;re going to compress under high rpms/boost and crack.",
      "Ring Gaps Drilling out the head for 11mm ARP Head Studs With this configuration, the engine was assembled and ran greatly under about 32psi (~800 whp) for about 3-4 months. Then, I had my next issue. A design consideration that I hadn&#x27;t though of was the design of the crankshaft. Specifically on these engines, the crank is two pieces and the pieces are friction fit. Under normal operation conditions, there would be no issues. However, under mine, with the extra power and stiff bushings, the crank hub slipped. When that happens, you lose timing, and all the valves drop. Damage for your viewing pleasure below:",
      "Oh No! By this time, I had already owned a shop with my friend. Fortunately, I did not have to work on the garage floor anymore. To alleviate these issues, I used a right angle drill to create four holes on the crankshaft. Then, I pinned the two parts together. We&#x27;re never dealing with that again. I also had noticed a lot of play in the car grip wise. During this stage, I added drag shocks to allow for more friction as the stiffness would push the wheels into the ground for a larger contact area.",
      "The final iteration. I&#x27;m sure there&#x27;s many smaller details that I&#x27;ve missed during this write up of my experience as a mechanic; but I always love to chat about this stage in my life. I found particular enjoyment in this hobby as there were so many variables to consider when building a high horsepower car. For example, even an alignment has to be done in a certain way to be done correctly. In my experience, an alignment is always better when the owner is sitting in the drivers seat. Although not a huge difference, the alignment does change depending on where weight is distributed. There&#x27;s no room for error; and that&#x27;s what makes the hobby so great.",
      "Sold to the next owner! Projects"
    ],
    "images": [
      "https://static.wixstatic.com/media/32e826_0d2ba8e29fd544c2937a7710bb9d0852~mv2.jpg",
      "https://static.wixstatic.com/media/32e826_8c84886ce3684a13b0a1c57b46b8e3af~mv2.png",
      "https://static.wixstatic.com/media/32e826_0834fac05f1c46e6baae5bb5c3adedef~mv2.png",
      "https://static.wixstatic.com/media/32e826_828181b160944e4db5d2bd754f25214e~mv2.png",
      "https://static.wixstatic.com/media/32e826_bac1790b96044e45b2f40225205f1969~mv2.png",
      "https://static.wixstatic.com/media/32e826_42026725135e488792bdb54ab3c4a7c1~mv2.png",
      "https://static.wixstatic.com/media/32e826_2e0fbe9a01de487280216346f0761eda~mv2.jpg",
      "https://static.wixstatic.com/media/32e826_64b26926ab5e4f7fa9de55c0cc6a6fee~mv2.jpg",
      "https://static.wixstatic.com/media/32e826_4b6117ffd9664e1aa36fd2a2355eab3a~mv2.png",
      "https://static.wixstatic.com/media/32e826_7763c463a83f4a49b20931560e90670a~mv2.jpg",
      "https://static.wixstatic.com/media/32e826_fe6bf2f4f1be4e5b93945cdc47971c9a~mv2.jpg"
    ]
  }
];
