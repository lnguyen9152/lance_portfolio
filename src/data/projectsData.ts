import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: "nav-aid-replacement",
    slug: "nav-aid-replacement",
    title: "Nav-Aid Replacement",
    category: "Controls & Marine Systems",
    tags: ["BP plc", "Marine Safety", "PLC", "Industrial Automation", "RACON"],
    shortDesc: "Full replacement of an asset's marine collision avoidance system including RACON, lanterns, NOMAN controller, and fog horns.",
    heroImage: "/navaid_card_hero.png",
    featured: true,
    year: "2024",
    organization: "BP plc",
    paragraphs: [],
    images: [
      "/navaid_card_hero.png",
      "https://static.wixstatic.com/media/32e826_e2522b05c0024e51b1ebc21aff374834~mv2.jpg",
      "https://static.wixstatic.com/media/32e826_e9f1dce6ac984ffc9d59f003aeb9fe1d~mv2.png"
    ],
    articleBlocks: [
      {
        type: 'paragraph',
        text: "The Nav-Aid replacement was one of the larger projects that I had to deliver during 2024. Since this was for BP, I cannot go into too much detail. However, I'll explain generally how the system works as some additional context."
      },
      {
        type: 'heading',
        text: "System Components & Architecture"
      },
      {
        type: 'paragraph',
        text: "The system consists of the following key components:"
      },
      {
        type: 'list-item',
        text: "NOMAN: Serves as a control panel for the entire system. Usually includes some type of monitoring and switches (digital or physical) to force equipment off or on."
      },
      {
        type: 'list-item',
        text: "RACON: This is a radar beacon, and provides no output to the NOMAN. It does, however, provide a set of fail contacts that are NC (Normally Closed) to notify the NOMAN monitoring if it loses signal."
      },
      {
        type: 'list-item',
        text: "Fog-Horns: These are connected to the NOMAN through a silence circuit. The NOMAN constantly sends a silent signal. Once this signal is not sent anymore, the fog-horn will blare. This is a fail-safe design, as the horn will blare if the NOMAN loses power."
      },
      {
        type: 'list-item',
        text: "Fog Lanterns: These are synced all around the asset. They are daisy-chained and there is a \"master\" and \"slave\" relationship. One lantern will have a pulse faster than others, which leads the chain. These operate by using an external photocell to sense darkness. Their pulse signal is sent back to the NOMAN for monitoring."
      },
      {
        type: 'list-item',
        text: "External Photocell: This is used purely for the NOMAN to detect a fault. If the photocell senses darkness and the lanterns aren't on, it throws an alarm."
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_e9f1dce6ac984ffc9d59f003aeb9fe1d~mv2.png",
        caption: "Figure 1. A Nav-Aid Vendor Project Preparation & System Architecture"
      },
      {
        type: 'heading',
        text: "Engineering Preparation & Regulatory Approvals"
      },
      {
        type: 'paragraph',
        text: "To prepare for this project, I started by sourcing a budget. After the budget was approved, I issued a purchase order for the engineering to be completed. Once done, I started going through our documents to find all the legacy files."
      },
      {
        type: 'paragraph',
        text: "When reading through the legacy files, I redlined what was expected to be changed, and sent the drawings to the vendor. In addition, I noted all the specifications, flash patterns, horn patterns, and broadcast signals."
      },
      {
        type: 'paragraph',
        text: "The next step was to gather approvals. By sending the datasheets and specs to USCG (Coast Guard) and BSEE (Bureau of Safety and Environmental Enforcement), I ensured that all regulations were satisfied with the new updated equipment. Finally, I conducted an internal risk assessment to identify all related risks. With this project, I wasn't able to identify any as it was a replacement in kind."
      },
      {
        type: 'paragraph',
        text: "Finally, it was time to contact contractors for bids. I contacted construction and electrical vendors to coordinate the installation. By conducting weekly meetings with the engineering and execution teams, we were able to coordinate the execution of the project through creation of a workpack and project schedule."
      },
      {
        type: 'heading',
        text: "Factory Acceptance Testing (FAT)"
      },
      {
        type: 'paragraph',
        text: "The next step of the project was to conduct a factory acceptance test. Within the factory acceptance test, you verify that all the equipment is operational and fits company standards. In this case, I verified that the Allen-Bradley PLC within the NOMAN was receiving the correct outputs from the monitoring leads of the equipment."
      },
      {
        type: 'paragraph',
        text: "In essence, it's a very straightforward test: verify that all wiring diagrams match the equipment presented, complete a function test to ensure that all equipment functions properly, and finally list deficiencies and sign off if all equipment is passed as good to go."
      },
      {
        type: 'heading',
        text: "Installation & Execution"
      },
      {
        type: 'paragraph',
        text: "During this stage, the system is fully installed. The cables are examined and all conductors are tested for continuity and megged."
      },
      {
        type: 'paragraph',
        text: "Before execution, risk is evaluated and mitigated through whatever measures necessary. Finally, a schedule is put in place and a progress meeting is conducted at the end of each day."
      },
      {
        type: 'paragraph',
        text: "As the engineer on the project, it is very important to ensure the quality of contractor work. As equipment is being cabled, glanded, and installed, the engineer is responsible for ensuring that there are no deficiencies and all cables are terminated to their proper locations."
      },
      {
        type: 'heading',
        text: "SAT & Commissioning"
      },
      {
        type: 'paragraph',
        text: "After all equipment has been installed, a formal site acceptance test is followed. This is written before execution and is similar to the factory acceptance test."
      },
      {
        type: 'paragraph',
        text: "During this process, the equipment was powered on in zones and tested thoroughly. The operating voltage/current is recorded and verified to be correct. Because there may be a possibility of a short, it is better to do commissioning within zones for this specific project."
      },
      {
        type: 'paragraph',
        text: "Once all equipment has been verified to be working, both the vendor and I sign off on documents. Any engineering redlines are as-built and documented. Project Done!"
      }
    ]
  },
  {
    id: "ultrasonics-upgrade",
    slug: "ultrasonics-upgrade",
    title: "Ultrasonic Meter Upgrade",
    category: "Instrumentation & Gas Flow",
    tags: ["BP plc", "Ultrasonic Flow", "Instrumentation", "Process Control"],
    shortDesc: "Upgrade legacy differential pressure (DP) flow meters to high-precision ultrasonic flow metering systems across offshore assets.",
    heroImage: "/ultrasonics_card_hero.png",
    featured: true,
    year: "2024",
    organization: "BP plc",
    paragraphs: [],
    images: [
      "/ultrasonics_card_hero.png",
      "https://static.wixstatic.com/media/32e826_ae3c05762a00405cbbad6fd4b6c83a78~mv2.jpg",
      "https://static.wixstatic.com/media/32e826_5f70f94ee2c44ab6a2ab2dacd15c2fdb~mv2.png"
    ],
    articleBlocks: [
      {
        type: 'paragraph',
        text: "This meter project was a cross-collaboration between the Instrumentation and Mechanical Team. The scope of this project was to replace differential pressure flow meters with ultrasonic meters."
      },
      {
        type: 'heading',
        text: "Lead I&C Engineering Responsibilities"
      },
      {
        type: 'list-item',
        text: "Ensure that all pressure transmitters, temperature transmitters, and thermowells fit the flow and design requirements."
      },
      {
        type: 'list-item',
        text: "Ensure that the correct I/O is being delivered to the flow computers."
      },
      {
        type: 'list-item',
        text: "Ensure that the flow computers were gathering the correct data to be sent through Modbus to our DCS system."
      },
      {
        type: 'list-item',
        text: "Ensure that there was a fiber run to send data to our custody transfer agent."
      },
      {
        type: 'list-item',
        text: "Ensure that the new equipment had reserved IP addresses for diagnostics."
      },
      {
        type: 'list-item',
        text: "Ensure that all new equipment and junction boxes are rated for a Class 1 Div 2 Environment."
      },
      {
        type: 'list-item',
        text: "Ensure that the new Modbus registers would be correctly mapped to its relevant SCADA points."
      },
      {
        type: 'list-item',
        text: "Conduct redlines to document all changes."
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_5f70f94ee2c44ab6a2ab2dacd15c2fdb~mv2.png",
        caption: "Figure 1. Some Ultrasonic Flow Meters from Emerson Equipment Specification"
      },
      {
        type: 'heading',
        text: "Design Specifications & Signal Integrity"
      },
      {
        type: 'paragraph',
        text: "To ensure that all the transmitters fit the design specification, I revisited the current installation's datasheets and compared them to the new equipment. I verified that the output would still be a 4-20mA signal and ensured that they were ranged correctly. To verify the thermowell, I conducted a wake frequency calculation. As the meter tube diameter may change, this affects the flow and therefore the calculation."
      },
      {
        type: 'paragraph',
        text: "Within this project, I had to find a tap for Ethernet and fiber, as well as some additional I/O. To do this, I found the nearest equipment with an Ethernet switch. Then, I found which network the switch was on and added the static IP addresses onto that network. For the fiber, I found spare fiber and ran a light tester on it to verify it end-to-end to its final location. Finally, for the I/O, I opened the junction boxes after reviewing the wiring diagrams and verified that the terminals I had selected were indeed empty."
      },
      {
        type: 'heading',
        text: "Modbus & Flow Computers"
      },
      {
        type: 'paragraph',
        text: "The biggest challenge of this project was to ensure that the flow computers would be correctly metering the output. To ensure this, we conducted a factory acceptance test in multiple stages:"
      },
      {
        type: 'list-item',
        text: "Simulate values in flow computer, verify on screen."
      },
      {
        type: 'list-item',
        text: "Connect flow computer to equipment, verify expected output."
      },
      {
        type: 'list-item',
        text: "Connect flow computer to network. Verify that the Modbus registers mapped to the DCS are correct."
      },
      {
        type: 'paragraph',
        text: "Once these registers were verified, we simulated process conditions on the flow meter. Finally, we viewed those points on the Honeywell Experion HMI and compared it against previous data to verify that it was correct."
      },
      {
        type: 'heading',
        text: "Faceplate Modifications"
      },
      {
        type: 'paragraph',
        text: "As an additional step, since we were changing to a different metering method, there had to be faceplate changes made. As such, there had to be deletions and additions that would portray all the new data we added and the data we removed. These new faceplates were implemented to display the data and additional control narratives were created to leverage the additional data."
      }
    ]
  },
  {
    id: "dcs-upgrade",
    slug: "dcs-upgrade",
    title: "Honeywell C200 to UOC Upgrade (DCS Upgrade)",
    category: "Distributed Control Systems",
    tags: ["BP plc", "Honeywell Experion", "ControlNet", "DeviceNet", "SCADA"],
    shortDesc: "Comprehensive upgrade of legacy Honeywell C200 controllers, DeviceNet/ControlNet modules, power supplies, servers, and thin client operator stations.",
    heroImage: "https://static.wixstatic.com/media/32e826_d785a5cbde7e4bd7bef61cf35bb0817a~mv2.jpg",
    featured: true,
    year: "2024",
    organization: "BP plc",
    paragraphs: [],
    images: [
      "https://static.wixstatic.com/media/32e826_d785a5cbde7e4bd7bef61cf35bb0817a~mv2.jpg",
      "https://static.wixstatic.com/media/32e826_80c9213c844e42bcbab20b8858c4e660~mv2.png",
      "https://static.wixstatic.com/media/32e826_fe216990deff46a891d65318bdc79e78~mv2.png"
    ],
    articleBlocks: [
      {
        type: 'paragraph',
        text: "This project consisted of many different aspects, and I was fortunate to work with a stellar team to complete it. The scope included:"
      },
      {
        type: 'heading',
        text: "Commission Thin Clients for Operator Workstations"
      },
      {
        type: 'paragraph',
        text: "Linux OS with an RDP session to virtualized servers."
      },
      {
        type: 'heading',
        text: "Commission Honeywell UOC Controllers"
      },
      {
        type: 'paragraph',
        text: "Replaced breakers to accommodate for higher amperage draw. Drilled and tapped server cabinets to mount the new controllers."
      },
      {
        type: 'heading',
        text: "Replace all DeviceNet and ControlNet Modules"
      },
      {
        type: 'paragraph',
        text: "Replacement in kind for aging modules. Ensured data rate (baud rate) and node addresses were configured correctly."
      },
      {
        type: 'heading',
        text: "Replace Power Supplies for DeviceNet Modules"
      },
      {
        type: 'paragraph',
        text: "Replacement in kind for legacy power units."
      },
      {
        type: 'heading',
        text: "Replace Virtualized Servers & Switches"
      },
      {
        type: 'paragraph',
        text: "Replaced servers with virtualization-capable hardware offering better security and computing power. Replaced server rails and upgraded aging Ethernet switches."
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_80c9213c844e42bcbab20b8858c4e660~mv2.png",
        caption: "Figure 1. DeviceNet Card Architecture"
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_fe216990deff46a891d65318bdc79e78~mv2.png",
        caption: "Figure 2. An Example of a UOC Controller Implementation"
      },
      {
        type: 'heading',
        text: "Risks Identified & Mitigation Strategies"
      },
      {
        type: 'list-item',
        text: "Short timeframe to execute project. No room for error."
      },
      {
        type: 'list-item',
        text: "Materials had to be thoroughly tested within the lab before commissioning."
      },
      {
        type: 'list-item',
        text: "Although the hydrocarbon process is shut down, habitability systems remain running. It was critical to ensure minimal loss of service when replacing PLCs controlling habitability (AC, potable water, wastewater, emergency generators)."
      },
      {
        type: 'list-item',
        text: "Ensure all equipment on each DeviceNet module is safe to take offline during card replacement. Verify automation teams monitor the Rockwell PLC and reset E3s after replacement."
      },
      {
        type: 'list-item',
        text: "Mitigate possibility of loss of control by pre-identifying jumpers for critical equipment."
      },
      {
        type: 'paragraph',
        text: "Overall, while complicated, the project was executed smoothly. This all comes down to rigorous planning: identifying what redundancies need to be in place to minimize risk and ensuring each team member understands potential failure modes and recovery procedures. With strong communication and teamwork, we completed the upgrade with zero unexpected downtime."
      }
    ]
  },
  {
    id: "pressure-differential-indicator-controller",
    slug: "pressure-differential-indicator-controller",
    title: "Pressure Differential Controller (CO2e Reduction)",
    category: "Control Systems & Environmental",
    tags: ["BP plc", "Control Algorithms", "Rockwell PLC", "Emissions Reduction"],
    shortDesc: "Developed a closed-loop pressure differential control algorithm to help reduce CO2e flare emissions on BP's largest Gulf of Mexico deepwater asset.",
    heroImage: "https://static.wixstatic.com/media/32e826_1c601daa9c2f4f8db00b05c8c5765cb2~mv2.jpg",
    featured: true,
    year: "2023",
    organization: "BP plc",
    paragraphs: [],
    images: [
      "https://static.wixstatic.com/media/32e826_1c601daa9c2f4f8db00b05c8c5765cb2~mv2.jpg",
      "https://static.wixstatic.com/media/32e826_036829a460a44e11ac3f014565bfe70e~mv2.png"
    ],
    articleBlocks: [
      {
        type: 'paragraph',
        text: "It was a valuable learning experience to simulate control narratives on our onshore servers, which mirrored the live systems configured on our offshore deepwater assets."
      },
      {
        type: 'paragraph',
        text: "My primary objective was to identify and mitigate an operational inefficiency. In alignment with BP's Net Zero by 2050 driver, I focused on a project delivering tangible impact in both cost efficiency and emissions reduction."
      },
      {
        type: 'paragraph',
        text: "My focus was on the export gas line, where a maintained pressure differential was required to deliver process fluid to its final destination. Previously, operators had to manually adjust the pressure differential in response to constant fluctuations. With my new control narrative, I implemented cascade control to automatically bound the pressure differential within tight operating parameters, maintaining a reliable 50 psig differential."
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_036829a460a44e11ac3f014565bfe70e~mv2.png",
        caption: "Figure 1. Cascading Control Loop Architecture"
      },
      {
        type: 'heading',
        text: "Functionality & Algorithm Parameters"
      },
      {
        type: 'paragraph',
        text: "Added a secondary Control Module (CM) operating in cascade mode, while preserving operator override capability in automatic and manual modes."
      },
      {
        type: 'list-item',
        text: "Offset: The differential the setpoint should maintain relative to inlet pressure."
      },
      {
        type: 'list-item',
        text: "Limits (SP High / Low): Enforces hard bounds if calculated offset exceeds safe operational thresholds."
      },
      {
        type: 'list-item',
        text: "SP Ramp Rate: Tunable rate limiting how quickly the control valve is commanded to reach target setpoint, preventing hydraulic hammering."
      },
      {
        type: 'heading',
        text: "HMI Faceplate Design"
      },
      {
        type: 'paragraph',
        text: "Because this additional CM introduced several control variables, I built a dedicated HMI popup. Within this faceplate, operators can view all controlled CMs and live pressure values, visualize the additive differential in an intuitive graphic, and modify tuning parameters such as ramp rates and limits on the fly."
      },
      {
        type: 'heading',
        text: "Implementation & Logic"
      },
      {
        type: 'paragraph',
        text: "First, logic was established to evaluate the active mode of the Pressure Indicating Controller (PIC). Using a TypeConverter and Select Block, cascade control only engages when explicitly commanded."
      },
      {
        type: 'paragraph',
        text: "Parameters including differential setpoint, high/low limits, and live PV from the inlet transmitter's DACA (Data Acquisition) block are routed through an AUXCALC calculation block. When active, the target PV + differential is passed into a ROCA (Rate of Change) block to smoothly modulate the valve position."
      },
      {
        type: 'heading',
        text: "Loop Tuning & Simulation"
      },
      {
        type: 'paragraph',
        text: "To tune the control loop, we executed step-tuning exercises on a high-fidelity physical process simulation under operating conditions. This allowed us to establish near-optimal PID parameters before commissioning, requiring only minimal final adjustments in production."
      }
    ]
  },
  {
    id: "gmu-space-tracker",
    slug: "gmu-space-tracker-project",
    title: "GMU Space Tracker Project",
    category: "Aerospace & Embedded Systems",
    tags: ["George Mason Univ", "NASA Skyfield", "Satellite Dish", "Microcontrollers", "PCB Design"],
    shortDesc: "Automatic ephemeris tracking and guidance software system for George Mason University's 9-meter satellite dish using NASA orbital data.",
    heroImage: "https://static.wixstatic.com/media/32e826_64b26926ab5e4f7fa9de55c0cc6a6fee~mv2.jpg",
    featured: true,
    year: "2023",
    organization: "George Mason University",
    pdfUrl: "https://cca90530-5079-40f5-b8c1-5c80ca4ef4e0.filesusr.com/ugd/32e826_c152373d53f64f26bb94ef2216ea3ba9.pdf",
    paragraphs: [],
    images: [
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
    ],
    articleBlocks: [
      {
        type: 'paragraph',
        text: "George Mason University acquired a 9-meter satellite dish. While the dish operated properly, it was apparent that there was a critical need to upgrade its positioning system. With only manual operation via a physical controller in the operations booth, my team and I set out to engineer a low-cost automated tracking system using NASA's \"Skyfield\" database and low-cost microcontrollers."
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_4a3bc88739f54cc4be7e53e45181a143~mv2.jpg",
        caption: "Figure 1. GMU's 9m Satellite Dish & Control Center"
      },
      {
        type: 'heading',
        text: "System Architecture & Functional Decomposition"
      },
      {
        type: 'paragraph',
        text: "To implement this system, we adopted a top-down modular approach, dividing the solution into 5 core modules: GUI Module, Software Module, Encoder Module, PCB Module, and Prototype Module."
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_59ef3cd8061d4f87ae75875ba5630710~mv2.jpg",
        caption: "Figure 2. Physical Hardware Architecture"
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_24938e9ea36144c99068becda6e8f8c2~mv2.png",
        caption: "Figure 3. Software & System Architecture"
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_ec0f1e54a3704ad3a29e24b2c80984e3~mv2.png",
        caption: "Figure 4. Level-1 Functional Decomposition Diagram"
      },
      {
        type: 'heading',
        text: "GUI Module"
      },
      {
        type: 'paragraph',
        text: "The GUI was designed in Tkinter with Python and featured three tabs: Automatic Tracking, Manual Tracking, and Setup. The interface displays live system time, current azimuth and altitude angles, target celestial object coordinates, start/stop execution commands, and live error diagnostic logs."
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_55b43f3d07fd4b56a140fbb7d25c0e22~mv2.png",
        caption: "Figure 5. Automatic Ephemeris Tracking GUI"
      },
      {
        type: 'heading',
        text: "Software & Ephemeris Calculation Module"
      },
      {
        type: 'paragraph',
        text: "We integrated NASA's Skyfield Python Library utilizing the World Geodetic System 1984 (WGS84) standard for topocentric calculations, computing precise angular positional differences between our GMU dish coordinates and target bodies in orbit. We retrieved satellite orbital TLE data from CelesTrak and NASA JPL SPK ephemeris files (spktype01, spktype21) for planets, the Moon, the Sun, and deep space probes (Voyager 1). Calculations were cross-verified with The Sky Live database to within 0.5 degrees."
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_cd59789cf0674edeb9ed604437e6fb63~mv2.jpg",
        caption: "Figure 6. The Sky Live Database Comparison"
      },
      {
        type: 'heading',
        text: "Encoder Module"
      },
      {
        type: 'paragraph',
        text: "The encoder module is responsible for real-time measurement of the dish's azimuth and elevation angles. We used ERCFS absolute rotary optical encoders paired with a Raspberry Pi Pico microcontroller."
      },
      {
        type: 'paragraph',
        text: "The encoders deliver a 12-bit Gray code cluster representing current angular displacement. The Raspberry Pi Pico acts as SPI master, transmitting a 60 kHz clock signal with a 40 µs pause between readings to sample positions continuously."
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_56a6cf59bdae400f82f7b41318b04a54~mv2.png",
        caption: "Figure 7. Encoder Precision & Bit Resolution"
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_f872024081664ff9b58e6340fefcf08e~mv2.png",
        caption: "Figure 8. Master Clock Signal & Serial Encoder Output"
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_becb161358544bbaaad7f0773953a8a1~mv2.png",
        caption: "Figure 9. Gray Code to Binary Angular Decoding Algorithm"
      },
      {
        type: 'heading',
        text: "PCB Module"
      },
      {
        type: 'paragraph',
        text: "To transition from breadboard to a production-grade enclosure, we designed and routed a custom PCB uniting the Raspberry Pi Pico, BOB-12009 bidirectional level shifters (stepping between 3.3V logic and 5V encoder clock rails), L9110H dual H-bridge motor drivers, and 120 µF filtering capacitors."
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_771827ab28bc4f8f8b7a86ee6fc07c22~mv2.png",
        caption: "Figure 10. PCB Schematic Diagram"
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_a9b3ee5ace234d718ce8b19a71d5d344~mv2.png",
        caption: "Figure 11. PCB Layout & Copper Traces"
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_25b3a752497d4366a88867135407428d~mv2.png",
        caption: "Figure 12. Assembled Final PCB Product"
      },
      {
        type: 'heading',
        text: "Prototype Module & Validation"
      },
      {
        type: 'paragraph',
        text: "We built a scale dual-axis dish prototype equipped with TS-32Z370 DC gearmotors, flexible shaft couplers, and custom 3D-printed mounting adapter plates to validate full tracking routines."
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_060414f854764f03b59f6944d40db24a~mv2.png",
        caption: "Figure 13. Initial Encoder Prototyping Rig"
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_e8bb627d0c064b6093c1290c5f7b3411~mv2.png",
        caption: "Figure 14. Encoder Base Mounting Plate"
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_327687e8c32f4ec9bc798ba1f05f97bc~mv2.png",
        caption: "Figure 15. Mounting Adapter Plate for Encoders"
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_a200a6efaa2f490ebcc9e4cc0c447668~mv2.png",
        caption: "Figure 16. Dual-Axis Scaled Test Prototype"
      },
      {
        type: 'paragraph',
        text: "The complete automated system was completed within a total budget of only $360. Tests confirmed full ephemeris tracking precision, validating that the control signals can directly command full-scale dish drive amplifiers."
      }
    ]
  },
  {
    id: "parrot-ar-2-0-obstacle-avoidance",
    slug: "parrot-ar-2-0-passive-obstacle-avoidance-algorithm",
    title: "Parrot AR 2.0 Passive Obstacle Avoidance",
    category: "Robotics & Control Systems",
    tags: ["Robotics", "Ultrasonic Sensors", "Autonomous Flight", "Control Loops"],
    shortDesc: "Development and validation of an autonomous passive obstacle detection and avoidance algorithm for the Parrot AR 2.0 quadrotor drone.",
    heroImage: "https://static.wixstatic.com/media/32e826_e05f808e952847209d1fbd6ebf6dbe10",
    featured: false,
    year: "2023",
    organization: "Academic Project",
    paragraphs: [],
    images: [
      "https://static.wixstatic.com/media/32e826_e05f808e952847209d1fbd6ebf6dbe10"
    ],
    articleBlocks: [
      {
        type: 'paragraph',
        text: "In this project, I set out to develop a passive obstacle avoidance algorithm for the Parrot AR 2.0 Drone."
      },
      {
        type: 'heading',
        text: "Project Objectives"
      },
      {
        type: 'list-item',
        text: "Control drone flight through Python to avoid static and dynamic obstacles."
      },
      {
        type: 'list-item',
        text: "Fly drone via Python commands sent over a shared wireless network."
      },
      {
        type: 'list-item',
        text: "Interface an onboard single-board computer with ultrasonic distance sensors for real-time motion detection."
      },
      {
        type: 'heading',
        text: "Hardware Bill of Materials"
      },
      {
        type: 'paragraph',
        text: "Parrot AR 2.0 Quadrotor, ODROID-C2 SBC, 4 Ultrasonic Distance Sensors, Portable Li-Ion Battery Pack, Carbon Fiber Rotors, Upgraded High-Torque Pinion Gears, and Low-Friction Rotor Bearings."
      },
      {
        type: 'heading',
        text: "System Design & Wireless Control"
      },
      {
        type: 'paragraph',
        text: "We stripped down the stock drone frame to offset the weight of the ODROID-C2 and sensors. We utilized the PyDrone library and NodeCopter to establish remote socket connections. The ODROID-C2 running Linux processed incoming ultrasonic pulse streams and calculated evasive velocity vectors in real time."
      },
      {
        type: 'heading',
        text: "Algorithm Architecture & Kinematics"
      },
      {
        type: 'paragraph',
        text: "While we initially evaluated TensorFlow neural networks, latency on embedded ARM cores made machine learning inference impractical for rapid evasive maneuvers. We engineered a kinematic algorithm that evaluates object approach velocity and acceleration, calculating optimal linear avoidance vectors."
      },
      {
        type: 'heading',
        text: "Experimental Results"
      },
      {
        type: 'paragraph',
        text: "Across comprehensive flight trials, the quadrotor achieved a 73.3% obstacle avoidance success rate under dynamic conditions. Testing verified that executing swift, linear lateral translations provided significantly greater stability than complex aerobatic maneuvers."
      }
    ]
  },
  {
    id: "hockey-bot-arduino",
    slug: "hockey-bot-arduino",
    title: "Hockey Robot (Arduino)",
    category: "Robotics & Embedded",
    tags: ["Arduino", "C++", "Electromagnet", "H-Bridge", "RF Control"],
    shortDesc: "Remote-controlled competitive robotics platform equipped with dual DC drivetrains and custom pulsed electromagnet mechanism for puck capture.",
    heroImage: "https://static.wixstatic.com/media/32e826_7602d51e7c3142f1b640d674187ba786~mv2.jpg",
    featured: false,
    year: "2022",
    organization: "Robotics Team",
    paragraphs: [],
    images: [
      "https://static.wixstatic.com/media/32e826_7602d51e7c3142f1b640d674187ba786~mv2.jpg",
      "https://static.wixstatic.com/media/32e826_47f15c63a3fb4f87a1fafc2a3b89f1b4~mv2.png",
      "https://static.wixstatic.com/media/32e826_93179ba9df61455dbb80ec9f6ba25730~mv2.png",
      "https://static.wixstatic.com/media/32e826_883b194e619844a69748bbab4fd1b12b~mv2.png",
      "https://static.wixstatic.com/media/32e826_099279eb66084265ac9f044c95c41d0e~mv2.jpg",
      "https://static.wixstatic.com/media/32e826_0e5a39af7cee462e9a6e1488d95571c4~mv2.jpg",
      "https://static.wixstatic.com/media/32e826_fc4c74e7b9514ffb9f159889809faeb0~mv2.jpg"
    ],
    articleBlocks: [
      {
        type: 'paragraph',
        text: "This project was developed to create an agile, competitive robot capable of playing an arena hockey match against opposing bots."
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_47f15c63a3fb4f87a1fafc2a3b89f1b4~mv2.png",
        caption: "Figure 1. Robot Prototype Construction & Chassis"
      },
      {
        type: 'heading',
        text: "Hardware Components"
      },
      {
        type: 'paragraph',
        text: "Laser-cut acrylic and wood chassis, high-torque dual DC motor drive modules, high-traction drive wheels, DFRobot Romeo all-in-one microcontroller, Arduino Uno, XBee wireless RF transceivers, joystick controller, and a custom high-permeability pulsed electromagnet."
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_93179ba9df61455dbb80ec9f6ba25730~mv2.png",
        caption: "Figure 2. Handheld Controller Wiring Schematic"
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_883b194e619844a69748bbab4fd1b12b~mv2.png",
        caption: "Figure 3. Mobile Robot Wiring Schematic"
      },
      {
        type: 'heading',
        text: "Embedded Firmware & XBee Communications"
      },
      {
        type: 'paragraph',
        text: "Firmware was developed in C++ for both transmitter and receiver boards, encoding 2-axis analog joystick positions and electromagnet trigger states into framed serial packets over 2.4 GHz XBee RF links."
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_099279eb66084265ac9f044c95c41d0e~mv2.jpg",
        caption: "Figure 4. Transmitter Firmware Implementation"
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_0e5a39af7cee462e9a6e1488d95571c4~mv2.jpg",
        caption: "Figure 5. Receiver Hardware Configuration"
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_fc4c74e7b9514ffb9f159889809faeb0~mv2.jpg",
        caption: "Figure 6. Receiver Firmware & Motor Driver Logic"
      }
    ]
  },
  {
    id: "binary-hex-seven-segment",
    slug: "binary-hex-to-seven-segment-display-vhdl",
    title: "Binary/Hex to Seven Segment Display (VHDL)",
    category: "Digital Logic & FPGA",
    tags: ["VHDL", "Basys3 FPGA", "Vivado", "Digital Logic"],
    shortDesc: "FPGA hardware description logic in VHDL converting binary/hexadecimal switch inputs to cathode multiplexed seven-segment displays on Basys3.",
    heroImage: "https://static.wixstatic.com/media/32e826_4a4274a3698c47beb241688f630fb087~mv2.jpg",
    featured: false,
    year: "2022",
    organization: "ECE 231 Digital Design",
    paragraphs: [],
    images: [
      "https://static.wixstatic.com/media/32e826_4a4274a3698c47beb241688f630fb087~mv2.jpg"
    ],
    articleBlocks: [
      {
        type: 'paragraph',
        text: "In this digital design project, I utilized a Xilinx Artix-7 Basys3 FPGA development board to implement real-time hardware decoding from 4-bit binary/hexadecimal switch inputs to 7-segment cathode displays."
      },
      {
        type: 'heading',
        text: "VHDL Entity & Port Architecture"
      },
      {
        type: 'paragraph',
        text: "The top-level entity maps inputs B0-B3 from onboard DIP switches, routing active-low cathode outputs a-g and display anode select signals (disp_right, disp_midright, disp_midleft, disp_left)."
      },
      {
        type: 'heading',
        text: "Concurrent Selected Signal Assignment"
      },
      {
        type: 'paragraph',
        text: "A concurrent VHDL with-select statement translates 4-bit vector BBBB into 7-bit active-low segment patterns covering hexadecimal values 0x0 through 0xF (e.g., '0000001' for 0, '1001111' for 1, '1111000' for 7, etc.)."
      },
      {
        type: 'heading',
        text: "Simulation & Vivado Synthesis"
      },
      {
        type: 'paragraph',
        text: "The design was verified through a behavioral testbench cycling through all 16 states with a 30 ns stimulus period, followed by bitstream generation and hardware testing on the physical Basys3 board."
      }
    ]
  },
  {
    id: "quadrature-amplitude-modulation",
    slug: "quadrature-amplitude-modulation-qam",
    title: "Quadrature Amplitude Modulation (QAM in Simulink)",
    category: "Signals & Communications",
    tags: ["Simulink", "MATLAB", "RF Communications", "Nyquist Theory", "Constellation"],
    shortDesc: "Simulation and analysis of AWGN noise characteristics and bit error rates (BER) across Quadrature Amplitude Modulation schemes in Simulink.",
    heroImage: "https://static.wixstatic.com/media/32e826_50e4e923ead04e5ea28e67ffcf3bc2c2~mv2.jpg",
    featured: false,
    year: "2022",
    organization: "ECE 460 Communications",
    paragraphs: [],
    images: [
      "https://static.wixstatic.com/media/32e826_50e4e923ead04e5ea28e67ffcf3bc2c2~mv2.jpg",
      "https://static.wixstatic.com/media/32e826_eae034b2127e416ab441e32e30686d10~mv2.png",
      "https://static.wixstatic.com/media/32e826_22ecc261c92949eebc68fd10bce2ce64~mv2.png",
      "https://static.wixstatic.com/media/32e826_c24bb819bb4c47dba312bff178ddbf04~mv2.png",
      "https://static.wixstatic.com/media/32e826_fb20f4f9d418464bab28630253aa8544~mv2.png",
      "https://static.wixstatic.com/media/32e826_c972f5702b7641109d280f320c0c7ece~mv2.png",
      "https://static.wixstatic.com/media/32e826_821f63eef3e94eddb356b1e9bbc10b3f~mv2.png"
    ],
    articleBlocks: [
      {
        type: 'paragraph',
        text: "In this communications engineering experiment, I investigated the effects of Additive White Gaussian Noise (AWGN) on Quadrature Amplitude Modulation (QAM). QAM modulates both carrier phase and amplitude to encode digital bitstreams, allowing experimental verification of Nyquist channel capacity limits."
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_eae034b2127e416ab441e32e30686d10~mv2.png",
        caption: "Figure 1. Simulink QAM Transceiver & Demodulator Model"
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_22ecc261c92949eebc68fd10bce2ce64~mv2.png",
        caption: "Figure 2. Simulation Parameters & Noise Variance Configurations"
      },
      {
        type: 'heading',
        text: "Noise Power Characterization"
      },
      {
        type: 'paragraph',
        text: "We swept AWGN noise power levels across four orders of magnitude (0.001, 0.005, 0.01, and 0.05) to measure degradation in recovered constellation points and demodulated output waveforms."
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_c24bb819bb4c47dba312bff178ddbf04~mv2.png",
        caption: "Figure 3. Signal Scope Response at Noise Power = 0.001"
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_fb20f4f9d418464bab28630253aa8544~mv2.png",
        caption: "Figure 4. Signal Scope Response at Noise Power = 0.005"
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_c972f5702b7641109d280f320c0c7ece~mv2.png",
        caption: "Figure 5. Signal Scope Response at Noise Power = 0.01"
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_821f63eef3e94eddb356b1e9bbc10b3f~mv2.png",
        caption: "Figure 6. Signal Scope Response at Noise Power = 0.05"
      },
      {
        type: 'heading',
        text: "Experimental Conclusions"
      },
      {
        type: 'paragraph',
        text: "The waveforms demonstrate how increasing channel noise power degrades recovered constellation symbols. At 0.01 noise variance, slight phase lag occurs; at 0.05, symbol collision increases bit error rates significantly, defining the practical SNR threshold for the transmission channel."
      }
    ]
  },
  {
    id: "city-counter-mips",
    slug: "city-counter-in-mips",
    title: "City Sorter & Counter (MIPS Assembly)",
    category: "Computer Organization & Assembly",
    tags: ["MIPS Assembly", "Memory Addressing", "Stack Frames", "Sorting Algorithms"],
    shortDesc: "Low-level MIPS assembly program implementing dynamic memory storage, ASCII string manipulation, and statistical population sorting.",
    heroImage: "https://static.wixstatic.com/media/32e826_2bf300f699ee4e34b8e76c627517015c~mv2.jpg",
    featured: false,
    year: "2021",
    organization: "ECE 445 Computer Organization",
    paragraphs: [],
    images: [
      "https://static.wixstatic.com/media/32e826_2bf300f699ee4e34b8e76c627517015c~mv2.jpg",
      "https://static.wixstatic.com/media/32e826_62fab32ff6fb45c8a465be57848dc1d9~mv2.png",
      "https://static.wixstatic.com/media/32e826_1611a4f1c5f44f4280950c5b26df7a26~mv2.png"
    ],
    articleBlocks: [
      {
        type: 'paragraph',
        text: "In this computer organization project, I developed a MIPS assembly program that prompts users for city names, two-letter state codes, and population values, storing data in memory structs and reporting sorted extremes."
      },
      {
        type: 'heading',
        text: "Data Structure & Memory Layout"
      },
      {
        type: 'list-item',
        text: "Name[50]: 50-byte ASCII character string buffer."
      },
      {
        type: 'list-item',
        text: "State[2]: 2-byte state code buffer."
      },
      {
        type: 'list-item',
        text: "Population: 32-bit unsigned integer."
      },
      {
        type: 'paragraph',
        text: "Each city struct occupies exactly 56 bytes. Storing up to 10 entries allocates a dedicated 560-byte static memory segment labeled Cities."
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_62fab32ff6fb45c8a465be57848dc1d9~mv2.png",
        caption: "Figure 1. Program Execution & Termination on Zero Population Input"
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_1611a4f1c5f44f4280950c5b26df7a26~mv2.png",
        caption: "Figure 2. Execution Flow & Output Summary for 10 Sequential Entries"
      }
    ]
  },
  {
    id: "mario-game-java",
    slug: "mario-game-java",
    title: "Mar.io Game Engine (Java OOP)",
    category: "Software Engineering & OOP",
    tags: ["Java", "Swing/AWT", "Object-Oriented Design", "Game Physics"],
    shortDesc: "A 2D arcade platformer game recreation implemented in pure Java featuring modular character classes, hitboxes, frame rendering, and game loops.",
    heroImage: "https://static.wixstatic.com/media/32e826_37ca631234564253bcfbdbd45392933e~mv2.jpg",
    featured: false,
    year: "2020",
    organization: "Software Project",
    paragraphs: [],
    images: [
      "https://static.wixstatic.com/media/32e826_37ca631234564253bcfbdbd45392933e~mv2.jpg",
      "https://static.wixstatic.com/media/32e826_b4ed3aa9e2364fcb97681c74aa263211~mv2.png",
      "https://static.wixstatic.com/media/32e826_e70116fd6515430482a34f601cc4bf8f~mv2.png",
      "https://static.wixstatic.com/media/32e826_3f7c3f75014442f1812b80783891472b~mv2.png",
      "https://static.wixstatic.com/media/32e826_bc859c6027a54136b9505a773cf318a7~mv2.png"
    ],
    articleBlocks: [
      {
        type: 'paragraph',
        text: "This project is a 2D arcade platformer game recreation engineered in Java utilizing object-oriented principles, custom physics collision detection, and Swing/AWT graphics rendering."
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_b4ed3aa9e2364fcb97681c74aa263211~mv2.png",
        caption: "Figure 1. Java Project File Structure & Modular Class Architecture"
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_e70116fd6515430482a34f601cc4bf8f~mv2.png",
        caption: "Figure 2. Main Menu Panel Interface"
      },
      {
        type: 'heading',
        text: "Character Classes & Collision Engine"
      },
      {
        type: 'paragraph',
        text: "The engine defines modular Champ character classes (Mario / Luigi) and enemy Goomba classes. Hitbox overlaps are evaluated on every tick using bounding box collision algorithms."
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_3f7c3f75014442f1812b80783891472b~mv2.png",
        caption: "Figure 3. Character Selection Menu"
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_bc859c6027a54136b9505a773cf318a7~mv2.png",
        caption: "Figure 4. Level Background Selection Screen"
      }
    ]
  },
  {
    id: "microbial-fuel-cell",
    slug: "microbial-fuel-cell",
    title: "Microbial Fuel Cell Bio-Electrochemical Study",
    category: "Energy & Bio-Electronics",
    tags: ["Renewable Energy", "Electrochemistry", "Voltage Characterization", "Research"],
    shortDesc: "Experimental investigation determining the mathematical effect of anodic surface area on voltage output and power density in Microbial Fuel Cells (MFC).",
    heroImage: "https://static.wixstatic.com/media/32e826_112eef01ceff46149329f777e1a88da9~mv2.png",
    featured: false,
    year: "2020",
    organization: "Energy Research Lab",
    paragraphs: [],
    images: [
      "https://static.wixstatic.com/media/32e826_112eef01ceff46149329f777e1a88da9~mv2.png",
      "https://static.wixstatic.com/media/32e826_54aafecca77141089a5e1b06bac69a35~mv2.png",
      "https://static.wixstatic.com/media/32e826_def34de371d6442c97ac56614c39798e~mv2.png",
      "https://static.wixstatic.com/media/32e826_5a1dc74526464883baf0c7e8587f3e81~mv2.png",
      "https://static.wixstatic.com/media/32e826_beb5dc53fba0433389ee8705a2d29bcb~mv2.png"
    ],
    articleBlocks: [
      {
        type: 'paragraph',
        text: "Non-renewable energy sources take millions of years to form. Investigating renewable bio-electrochemical energy systems like Microbial Fuel Cells (MFC) provides a pathway to harness microbial metabolic power."
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_54aafecca77141089a5e1b06bac69a35~mv2.png",
        caption: "Figure 1. The Microbial Fuel Cell Testing Apparatus"
      },
      {
        type: 'heading',
        text: "Bio-Electrochemical Theory"
      },
      {
        type: 'paragraph',
        text: "Bacteria within the anodic chamber undergo cellular respiration, transferring metabolic electrons into a carbon cloth anode through direct contact and mediator redox reactions. Electrons travel across external resistive loads to the cathode, while Hydrogen+ ions cross the proton exchange membrane (PEM) to form water."
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_def34de371d6442c97ac56614c39798e~mv2.png",
        caption: "Figure 2. Dual-Chamber MFC Schematic & Ion Exchange Principle"
      },
      {
        type: 'heading',
        text: "Experimental Procedure & Data Acquisition"
      },
      {
        type: 'paragraph',
        text: "We tested single, double, and triple-layer carbon cloth anode configurations inoculated with Shewanella oneidensis cultures and potassium ferricyanide catholyte. Voltage outputs were logged every 6 minutes via a Vernier LabQuest interface over 750 sample points."
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_5a1dc74526464883baf0c7e8587f3e81~mv2.png",
        caption: "Figure 3. Compiled Voltage Output Data Across Test Configurations"
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_beb5dc53fba0433389ee8705a2d29bcb~mv2.png",
        caption: "Figure 4. ANOVA Statistical Plot & Voltage Growth Curves"
      },
      {
        type: 'heading',
        text: "Statistical Findings"
      },
      {
        type: 'paragraph',
        text: "A one-way ANOVA test yielded a p-value of 3.7E-114 (alpha = 0.05), rejecting the null hypothesis and proving statistically significant correlation between increasing anodic surface area and electrical voltage yield."
      }
    ]
  },
  {
    id: "tradersai-python",
    slug: "tradersai-python",
    title: "TradersAI Quantitative Engine & Mobile App",
    category: "Quantitative Finance & Python",
    tags: ["Python", "Quantitative Finance", "Futures Trading", "Algorithm Backtesting"],
    shortDesc: "Quantitative trading algorithm generating automated daily 4-hour key inflection levels on S&P 500 E-mini (/ES) futures with backtested 351% net return.",
    heroImage: "/tradersai_card_hero.png",
    featured: false,
    year: "2023",
    organization: "TradersAI",
    paragraphs: [],
    images: [
      "/tradersai_card_hero.png",
      "https://static.wixstatic.com/media/32e826_376ddea5dfa442ca9421a0227f1f9ffc~mv2.png",
      "https://static.wixstatic.com/media/32e826_b6d5dd6158e449b59f0aea49ce2f9c0b~mv2.png",
      "https://static.wixstatic.com/media/32e826_dbd3c7f424a84fd68ae96668d691702f~mv2.png",
      "https://static.wixstatic.com/media/32e826_3f513ea5d74e459a9e56963bb970eea0~mv2.png",
      "https://static.wixstatic.com/media/32e826_ae9efe0a71a041d4afd2c5f5af7fc27e~mv2.png",
      "https://static.wixstatic.com/media/32e826_7caa14ea86ef4003a666a731db106292~mv2.png",
      "https://static.wixstatic.com/media/32e826_30dfc08532924f4baca1298fe946fdde~mv2.png",
      "https://static.wixstatic.com/media/32e826_90884f6e9c104770a5b8ca5aa5cbae9a~mv2.png"
    ],
    articleBlocks: [
      {
        type: 'paragraph',
        text: "I've always been fascinated by financial markets, particularly futures and commodities on the /ES (S&P 500 E-mini) instrument. In collaboration with Dr. Ashok Margam, I worked on the quantitative system engineering behind TradersAI's automated level prediction engine, which achieved a 351% net return since its 2018 inception."
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_376ddea5dfa442ca9421a0227f1f9ffc~mv2.png",
        caption: "Figure 1. 4-Hour Inflection Levels & Support / Resistance Structure"
      },
      {
        type: 'heading',
        text: "System Architecture & Real-Time Pipeline"
      },
      {
        type: 'list-item',
        text: "Real-time streaming price ingestion for /ES futures."
      },
      {
        type: 'list-item',
        text: "10-minute candle close evaluation engine."
      },
      {
        type: 'list-item',
        text: "Cross-platform mobile push notification dispatch via OneSignal API."
      },
      {
        type: 'list-item',
        text: "AirTable and Figma data synchronization for user portfolio interfaces."
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_b6d5dd6158e449b59f0aea49ce2f9c0b~mv2.png",
        caption: "Figure 2. Automated Dependency Installer Script"
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_dbd3c7f424a84fd68ae96668d691702f~mv2.png",
        caption: "Figure 3. Real-Time Price Ingestion & Formatting Engine"
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_3f513ea5d74e459a9e56963bb970eea0~mv2.png",
        caption: "Figure 4. Early Mobile Signal Generation Engine"
      },
      {
        type: 'heading',
        text: "Multi-Dimensional Level Sorting & Signal Logic"
      },
      {
        type: 'paragraph',
        text: "To process algorithm outputs into actionable execution signals, the engine parses 4-dimensional records containing [Level, Hardstop, Hardstop-BE, TrailingStopLoss]. Quicksort algorithms organize multi-tier levels with O(n log n) efficiency."
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_ae9efe0a71a041d4afd2c5f5af7fc27e~mv2.png",
        caption: "Figure 5. Array Sorter & Level Validation Matrix"
      },
      {
        type: 'heading',
        text: "Mobile Application Interface"
      },
      {
        type: 'paragraph',
        text: "The final mobile interface was designed to deliver instant clarity under active market volatility, presenting key daily inflection zones, trade direction alerts, and live position risk containers."
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_7caa14ea86ef4003a666a731db106292~mv2.png",
        caption: "Figure 6. Mobile Application Welcome & Dashboard View"
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_30dfc08532924f4baca1298fe946fdde~mv2.png",
        caption: "Figure 7. Daily Trading Plan & Key Level Breakdown"
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_90884f6e9c104770a5b8ca5aa5cbae9a~mv2.png",
        caption: "Figure 8. Live Position Tracking & Active Trade Status"
      }
    ]
  },
  {
    id: "bmw-n54-engine-development",
    slug: "bmw-n54-engine-development",
    title: "BMW N54 Twin-Turbo Engine Development & Diagnostics",
    category: "Automotive & Mechanical Systems",
    tags: ["Automotive Engineering", "ECU Tuning", "Twin-Turbo", "CAN Diagnostics", "Mechanical"],
    shortDesc: "Comprehensive teardown, precision mechanical overhaul, upgraded twin turbochargers, custom fueling calibration, and track setup on the BMW N54 3.0L inline-6.",
    heroImage: "https://static.wixstatic.com/media/32e826_0d2ba8e29fd544c2937a7710bb9d0852~mv2.jpg",
    featured: true,
    year: "2024",
    organization: "///DMVBMW",
    paragraphs: [],
    images: [
      "https://static.wixstatic.com/media/32e826_0d2ba8e29fd544c2937a7710bb9d0852~mv2.jpg",
      "https://static.wixstatic.com/media/32e826_8c84886ce3684a13b0a1c57b46b8e3af~mv2.png",
      "https://static.wixstatic.com/media/32e826_828181b160944e4db5d2bd754f25214e~mv2.png",
      "https://static.wixstatic.com/media/32e826_bac1790b96044e45b2f40225205f1969~mv2.png",
      "https://static.wixstatic.com/media/32e826_42026725135e488792bdb54ab3c4a7c1~mv2.png",
      "https://static.wixstatic.com/media/32e826_2e0fbe9a01de487280216346f0761eda~mv2.jpg",
      "https://static.wixstatic.com/media/32e826_4b6117ffd9664e1aa36fd2a2355eab3a~mv2.png",
      "https://static.wixstatic.com/media/32e826_7763c463a83f4a49b20931560e90670a~mv2.jpg",
      "https://static.wixstatic.com/media/32e826_fe6bf2f4f1be4e5b93945cdc47971c9a~mv2.jpg"
    ],
    articleBlocks: [
      {
        type: 'paragraph',
        text: "Throughout high school and college, I developed a strong passion for automotive engineering and hands-on mechanical fabrication. Working through several platforms (2000 Lexus IS300, 2017 Mustang GT with nitrous, 2008 E93 335i, and 2007 E92 335i) provided foundational experience in diagnostics, engine management, and chassis setup."
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_8c84886ce3684a13b0a1c57b46b8e3af~mv2.png",
        caption: "Figure 1. Initial Day with the BMW E92 335i Platform"
      },
      {
        type: 'heading',
        text: "OEM+ Electronics & Custom Fabrication"
      },
      {
        type: 'paragraph',
        text: "Fabricated an authentic M3 steering wheel retrofit with custom button board integration. Rebuilt the instrument cluster to 1M specifications with white SMD LED soldering and stepper motor integration for dynamic engine warm-up redlines, calibrated via BMW INPA/EDIABAS diagnostics into the CAS module."
      },
      {
        type: 'heading',
        text: "Powertrain Upgrades & Port Injection Fueling"
      },
      {
        type: 'paragraph',
        text: "Engineered a high-boost single turbo conversion centered on a Garrett GTX3584RS ball-bearing turbocharger with V-band manifold, 3.5\" exhaust, Motiv twin-disk clutch, auxiliary 750cc secondary port injection rail, and dual Walbro 450 LPH fuel pumps with custom relay triggers."
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_828181b160944e4db5d2bd754f25214e~mv2.png",
        caption: "Figure 2. Initial Engine Bay Teardown & Maintenance"
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_bac1790b96044e45b2f40225205f1969~mv2.png",
        caption: "Figure 3. Completed Single Turbo Conversion"
      },
      {
        type: 'heading',
        text: "Engine Block Rebuild & Forged Internals"
      },
      {
        type: 'paragraph',
        text: "To support sustained 32+ psi boost loads (~800 whp), the engine was completely overhauled: cylinder honing, custom-gapped forged pistons, forged H-beam connecting rods, Athena Cut-Ring head gasket, 11mm ARP 2000 head studs, and threaded steel block reinforcements."
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_42026725135e488792bdb54ab3c4a7c1~mv2.png",
        caption: "Figure 4. Engine Extraction for Forged Block Build"
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_2e0fbe9a01de487280216346f0761eda~mv2.jpg",
        caption: "Figure 5. Complete Sub-Assembly & Precision Block Tear-Down"
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_4b6117ffd9664e1aa36fd2a2355eab3a~mv2.png",
        caption: "Figure 6. Ring Gap Filing & Head Stud Block Machining"
      },
      {
        type: 'heading',
        text: "Crank Hub Pinning & Track Setup"
      },
      {
        type: 'paragraph',
        text: "To eliminate the friction-fit failure mode on high-torque N54 crankshafts, we precision-drilled and 4-way pinned the crank hub. The chassis was finished with KW V3 rebuilds, solid rear subframe bushings, 15\" drag brake conversion, and custom alignment geometry."
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_7763c463a83f4a49b20931560e90670a~mv2.jpg",
        caption: "Figure 7. Crankshaft Hub Pinning & Valve Recovery"
      },
      {
        type: 'image',
        imageSrc: "https://static.wixstatic.com/media/32e826_fe6bf2f4f1be4e5b93945cdc47971c9a~mv2.jpg",
        caption: "Figure 8. Final Build Ready for Track Session"
      }
    ]
  }
];
