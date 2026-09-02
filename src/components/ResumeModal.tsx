import React from 'react';
import { X, Printer, ExternalLink, FileText } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    const printWindow = window.open('/resume.html', '_blank');
    if (printWindow) {
      printWindow.focus();
    }
  };

  return (
    <div
      id="resume-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        id="resume-modal-container"
        className="relative w-full max-w-4xl h-[90vh] bg-white text-black rounded shadow-2xl border border-zinc-300 dark:border-zinc-700 flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between gap-3 px-4 sm:px-6 py-2.5 border-b border-zinc-200 bg-[#F4F4F0] shrink-0">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-zinc-800" />
            <h3 className="text-sm font-semibold tracking-tight text-zinc-900 font-sans">
              Lance Nguyen — Resume
            </h3>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Direct Open in New Tab */}
            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono font-medium bg-white text-zinc-900 border border-zinc-300 hover:bg-zinc-100 transition-colors cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              <span>Open in New Tab</span>
            </a>

            {/* Print / Save as PDF */}
            <button
              type="button"
              id="resume-print-btn"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono font-medium bg-[#1A1A1A] text-white hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            {/* Close */}
            <button
              type="button"
              id="resume-close-btn"
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 rounded text-zinc-600 hover:text-black hover:bg-zinc-200 transition-colors cursor-pointer ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Direct Render of Resume Sheet */}
        <div className="flex-1 w-full overflow-y-auto bg-[#ECEBE7] dark:bg-zinc-950 p-4 sm:p-6 md:p-8">
          <div className="mx-auto w-full max-w-[800px] bg-white text-black p-6 sm:p-10 md:p-12 shadow-md border border-zinc-300 dark:border-zinc-700 rounded-sm font-serif text-[13px] leading-snug select-text mb-8">
            
            {/* Header */}
            <div className="text-center mb-3">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-black mb-1 font-serif">
                Lance Nguyen
              </h1>
              <p className="text-xs text-zinc-800 font-sans tracking-tight">
                • <a href="mailto:lnguyen9152@gmail.com" className="hover:underline">lnguyen9152@gmail.com</a> • (571) 470-3004 •{' '}
                <a
                  href="https://linkedin.com/in/lance-p-nguyen/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  linkedin.com/in/lance-p-nguyen/
                </a>
              </p>
            </div>

            {/* EDUCATION */}
            <section className="mb-3.5">
              <h2 className="text-[11px] font-sans font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-1.5">
                EDUCATION
              </h2>

              {/* George Mason University */}
              <div className="mb-2.5">
                <div className="flex justify-between items-baseline font-sans font-bold text-xs text-black">
                  <span>George Mason University – Volgenau School of Engineering</span>
                  <span className="font-normal text-zinc-700">Fairfax, VA</span>
                </div>
                <div className="flex justify-between items-baseline text-xs italic text-zinc-900 font-serif mb-0.5">
                  <span>Bachelor of Science in Electrical Engineering (Cum Laude)</span>
                  <span className="not-italic font-sans text-xs text-zinc-700">Aug 2019 – May 2023</span>
                </div>
                <p className="text-[11px] leading-relaxed text-zinc-900 font-sans">
                  <span className="font-bold">Relevant Coursework: </span>
                  MATH 203 (Linear Algebra), MATH 213 (Calc III), MATH 214 (Diff Eq), CS 222 (C++), ECE 231 (Digital System Design II), PHYS 262 (Physics 3), ECE 285 (Circuits II), ECE 305 (Electromagnetics), STAT 346 (Probability), ECE 350 (Embedded Hardware), ECE 417 (Smart Grid/Cybersecurity), ECE 421 (Control Theory), ECE 433 (Linear Electronics II), ECE 445 (Computer Org), ECE 460 (Communication Theory), ECE 465 (Networking Protocols), SYST 469 (HCI)
                </p>
                <p className="text-[11px] leading-relaxed text-zinc-900 font-sans">
                  <span className="font-bold">Clubs: </span>Pi Kappa Alpha, Vietnamese Student Association
                </p>
              </div>

              {/* Thomas Jefferson High School for Science and Technology */}
              <div>
                <div className="flex justify-between items-baseline font-sans font-bold text-xs text-black">
                  <span>Thomas Jefferson High School for Science and Technology (TJHSST)</span>
                  <span className="font-normal text-zinc-700">Alexandria, VA</span>
                </div>
                <div className="flex justify-between items-baseline text-xs italic text-zinc-900 font-serif mb-0.5">
                  <span>High School Diploma</span>
                  <span className="not-italic font-sans text-xs text-zinc-700">Aug 2015 – May 2019</span>
                </div>
                <p className="text-[11px] leading-relaxed text-zinc-900 font-sans">
                  <span className="font-bold">SAT: </span>1580/1600 | <span className="font-bold">PSAT: </span>1490/1520 | <span className="font-bold">Honors: </span>National Merit Scholar, HackTJ Creators Award, Botball Robotics Programming Award
                </p>
                <p className="text-[11px] leading-relaxed text-zinc-900 font-sans">
                  <span className="font-bold">Clubs & Sports: </span>Botball Robotics, Reboot for Youth, Cybersecurity Club, Model UN, Varsity Football, Baseball, Basketball
                </p>
              </div>
            </section>

            {/* WORK EXPERIENCE */}
            <section className="mb-3.5">
              <h2 className="text-[11px] font-sans font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-1.5">
                WORK EXPERIENCE
              </h2>

              {/* Relativity Space */}
              <div className="mb-3">
                <div className="flex justify-between items-baseline text-xs font-bold text-black font-sans">
                  <span>Relativity Space</span>
                  <span className="font-normal text-zinc-700">Los Angeles, CA</span>
                </div>

                {/* Role 1 */}
                <div className="mt-1">
                  <div className="flex justify-between items-baseline text-xs italic text-zinc-900 font-serif">
                    <span>Avionics Test GSE Engineer II</span>
                    <span className="not-italic font-sans text-xs text-zinc-700">Dec 2025 – Present</span>
                  </div>
                  <ul className="mt-1 space-y-1 text-[11px] leading-snug text-zinc-900 list-disc list-outside pl-4 font-sans">
                    <li>System owner for the design, integration, and ongoing development of high-reliability ground support systems, ensuring mission readiness and supporting Terran R&apos;s integration, test, and launch phases.</li>
                    <li>Delivered Engine Checkout Racks to propulsion team, ensuring robust testing and validation of flight engines and Terran R Engines with &lt;1 µs accuracy.</li>
                    <li>Support design of ground support racks for low and high voltage electrical buses used to interface with flight hardware.</li>
                    <li>Collaborated with avionics, propulsion, software, manufacturing, and integration teams to ensure reliable operation for vehicle test and launch.</li>
                    <li>Contributed to the design of umbilical and junction boxes and wiring harnesses for electrical power distribution and signal transmission, ensuring seamless connections between ground systems and vehicle.</li>
                    <li>Oversaw fabrication, commissioning, and validation of GSE systems, including electrical testing and calibration.</li>
                    <li>Contributed design ideas for Interface Control Documents (ICDs), collaborating with the team to create finalized documentation.</li>
                    <li>Ensured compliance with industry standards for high-voltage (HV) safety and operational efficiency.</li>
                    <li>Integrated electrical systems using communication protocols such as Ethernet, Modbus, and SCPI for reliable data transfer and control.</li>
                  </ul>
                </div>

                {/* Role 2 */}
                <div className="mt-2">
                  <div className="flex justify-between items-baseline text-xs italic text-zinc-900 font-serif">
                    <span>Factory Test Data and Controls Engineer II</span>
                    <span className="not-italic font-sans text-xs text-zinc-700">Jun 2025 – Dec 2025</span>
                  </div>
                  <ul className="mt-1 space-y-1 text-[11px] leading-snug text-zinc-900 list-disc list-outside pl-4 font-sans">
                    <li>Designed, built, and commissioned control systems supporting test sites at the component- and system-level as Responsible Engineer (RE) for Stage 2 and Thrust Structure testing.</li>
                    <li>Developed test infrastructure, including checkout cabinets, instrumentation boxes, and portable data systems for hardware verification ensuring 0.01% accuracy.</li>
                    <li>Integrated instrumentation and sensors (pressure transducers, RTDs, thermocouples, accelerometers, actuators, etc.) into test systems, including channel mapping and signal scaling/conditioning.</li>
                    <li>Collaborated with software, network, operations, test, and infrastructure teams to develop and deploy PLC nodes for reliable and efficient data acquisition from test systems.</li>
                    <li>Created work instructions using tools such as NX, Altium, and WireViz to document and communicate assembly and integration procedures with a 100% on-time completion and reliability rate.</li>
                    <li>Developed PLC automation using a proprietary company framework and EtherCAT/Modbus.</li>
                    <li>Reviewed and modified PCB Schematics using Altium to simplify and release boards for specific test campaigns.</li>
                    <li>Managed multiple projects simultaneously, became a subject matter expert on DACs backend, and mentored engineers on specialized topics.</li>
                  </ul>
                </div>
              </div>

              {/* British Petroleum (bp) */}
              <div className="mb-3">
                <div className="flex justify-between items-baseline text-xs font-bold text-black font-sans">
                  <span>British Petroleum (bp)</span>
                  <span className="font-normal text-zinc-700">Houston, TX</span>
                </div>
                
                {/* Atlantis */}
                <div className="mt-1">
                  <div className="flex justify-between items-baseline text-xs italic text-zinc-900 font-serif">
                    <span>Controls and Automation / Electrical Engineer – Atlantis</span>
                    <span className="not-italic font-sans text-xs text-zinc-700">Jun 2023 – Jun 2025</span>
                  </div>
                  <ul className="mt-1 space-y-1 text-[11px] leading-snug text-zinc-900 list-disc list-outside pl-4 font-sans">
                    <li>Lead multi-disciplinary teams and engineering contractors to execute large-scale, high-budget projects spanning throughout the year, achieving a 95% on-time completion rate and delivering 80% under budget.</li>
                    <li>Provide general operational support through weekly process surveillance meetings to identify preliminary issues and explore root causes before failure.</li>
                    <li>Manage alarm databases through a Hexagon data collector, creating optimized set-points by observing process trends through tools such as Palantir and PowerBI; implemented dynamic alarm suppression, reducing high/urgent alarm KPIs by 50%.</li>
                    <li>Enhance plant reliability by conducting RCFA (Root Cause Failure Analysis) studies, performing risk assessments, and implementing barrier reviews, reducing deficiencies by 80%.</li>
                    <li>Ensure conformance with operational regulations by conducting self-verifications, Factory Acceptance Tests (FAT), and Site Acceptance Tests (SAT) on brownfield projects before implementation.</li>
                    <li>Utilize tools such as Plant Triage to observe control loop performance and optimize efficiency of valves by applying PID Control Concepts.</li>
                    <li>Implement advanced control loops to promote efficiency in production, provided operator trainings, and conducted qualification tests to ensure conformance.</li>
                    <li>Specify instrumentation given performance standards and replace field instrumentation with suited hardware to reduce failure rates on facility by up to 50%.</li>
                    <li>Create custom HMI screens and faceplates to improve usability and efficiency for offshore operators.</li>
                    <li>Maintain and troubleshoot Rockwell, Honeywell, and Allen-Bradley PLCs, tracing I/O, implementing control loops, creating loop diagrams for new instrumentation, and redlining drawings.</li>
                    <li>Implement communication with DCS through industrial protocols such as RS232, RS485/Modbus, Ethernet/IP, and ControlNet/DeviceNet.</li>
                  </ul>
                </div>

                {/* Thunderhorse */}
                <div className="mt-2">
                  <div className="flex justify-between items-baseline text-xs italic text-zinc-900 font-serif">
                    <span>Controls and Instrumentation Engineer – Thunderhorse</span>
                    <span className="not-italic font-sans text-xs text-zinc-700">May 2022 – Jun 2023</span>
                  </div>
                  <ul className="mt-1 space-y-1 text-[11px] leading-snug text-zinc-900 list-disc list-outside pl-4 font-sans">
                    <li>Implemented a cascading control loop on the export gas compressors, resulting in a measurable reduction of CO2e emissions.</li>
                    <li>Built the control loop within Control Builder, authored custom HMI faceplates, verified functionality through internal factory acceptance tests (FAT), and validated control loop operation at Kongsberg.</li>
                    <li>Populated instrumentation data from all fire and gas detectors into enterprise mobile maintenance tools, enabling operators and technicians to access vital safety data on the fly.</li>
                  </ul>
                </div>
              </div>

              {/* DMV-BMW */}
              <div className="mb-3">
                <div className="flex justify-between items-baseline text-xs font-bold text-black font-sans">
                  <span>DMV-BMW</span>
                  <span className="font-normal text-zinc-700">Virginia</span>
                </div>
                <div className="flex justify-between items-baseline text-xs italic text-zinc-900 font-serif">
                  <span>Automotive Engineer / Business Partner</span>
                  <span className="not-italic font-sans text-xs text-zinc-700">Sep 2019 – Apr 2023</span>
                </div>
                <ul className="mt-1 space-y-1 text-[11px] leading-snug text-zinc-900 list-disc list-outside pl-4 font-sans">
                  <li>Managed customer interest pipeline and focused on expanding the business by promoting specialized services through word of mouth and proof-of-concept track demonstrations.</li>
                  <li>Specialization in fully disassembling, blueprinting, rebuilding, and bench testing high-performance BMW engines for customers.</li>
                  <li>Diagnosed damaged vehicle ECUs by repairing circuit boards, wiring in new performance management computers, completing wiring harness restorations/retrofits, and installing android radios with performance data-logging capabilities.</li>
                  <li>Tuned customer cars by leveraging knowledge in PID Control to create smooth performance curves and optimize efficiency.</li>
                </ul>
              </div>

              {/* TradersAI */}
              <div className="mb-3">
                <div className="flex justify-between items-baseline text-xs font-bold text-black font-sans">
                  <span>TradersAI.com</span>
                  <span className="font-normal text-zinc-700">Fairfax, VA</span>
                </div>
                <div className="flex justify-between items-baseline text-xs italic text-zinc-900 font-serif">
                  <span>Software Developer</span>
                  <span className="not-italic font-sans text-xs text-zinc-700">Sep 2021 – Sep 2022</span>
                </div>
                <ul className="mt-1 space-y-1 text-[11px] leading-snug text-zinc-900 list-disc list-outside pl-4 font-sans">
                  <li>Assisted in developing an algorithm-based quantitative trading strategy for /ES futures, contributing to a 351% return since 2018.</li>
                  <li>Leveraged multiple languages (Python, C++, Java) to send real-time long and short signals off a mobile app, choosing each language for its computational strengths.</li>
                  <li>Developed a design for the app UI using Figma studio to be implemented across Android and iOS platforms.</li>
                  <li>OneSignal API and Firebase API were used to document data and send real-time notifications to app users for long and short signals through C++.</li>
                  <li>IBKR API used to pull real-time stock prices of the SPX Index against proprietary levels produced by the TradersAI Algo (processed with Pandas in Python and staged in Firebase).</li>
                  <li>Leveraged threading to allow multiple processes to run concurrently and evaluate data against set levels by gathering 5-minute candle close prices.</li>
                  <li>Analyzed AI Performance through a research study published on the CFA Institute Enterprising Investor Blog, highlighting returns against the S&P 500.</li>
                </ul>
              </div>

              {/* vRealm Inc. */}
              <div className="mb-3">
                <div className="flex justify-between items-baseline text-xs font-bold text-black font-sans">
                  <span>vRealm Inc.</span>
                  <span className="font-normal text-zinc-700">Virginia</span>
                </div>
                <div className="flex justify-between items-baseline text-xs italic text-zinc-900 font-serif">
                  <span>vRealm Private Tutor</span>
                  <span className="not-italic font-sans text-xs text-zinc-700">Sep 2022 – Jun 2023</span>
                </div>
                <ul className="mt-1 space-y-1 text-[11px] leading-snug text-zinc-900 list-disc list-outside pl-4 font-sans">
                  <li>Assisted high school students with challenging concepts in Physics, Calculus, and Statistics.</li>
                  <li>Help students prepare for college essays and SAT exams.</li>
                  <li>Developed performance surveys, checking with students and parents once a month to identify areas of focus needed.</li>
                  <li>Promoted student participation by creating targeted practice exercises that target specific weak skills identified in monthly performance surveys and test reviews.</li>
                </ul>
              </div>

              {/* GMU Robotics Lab */}
              <div className="mb-2">
                <div className="flex justify-between items-baseline text-xs font-bold text-black font-sans">
                  <span>George Mason University – Robotics Lab</span>
                  <span className="font-normal text-zinc-700">Fairfax County, VA</span>
                </div>
                <div className="flex justify-between items-baseline text-xs italic text-zinc-900 font-serif">
                  <span>Robotics Research Developer</span>
                  <span className="not-italic font-sans text-xs text-zinc-700">Sep 2018 – Jun 2019</span>
                </div>
                <ul className="mt-1 space-y-1 text-[11px] leading-snug text-zinc-900 list-disc list-outside pl-4 font-sans">
                  <li>Developed an obstacle avoidance algorithm in Objective-C and Python for a small-scale $500 robot capable of &apos;swarm&apos; style collaboration.</li>
                  <li>Maintained laboratory robots to diagnose hardware issues and improve sensor configurations.</li>
                  <li>Created &apos;swarm&apos; algorithm to enable robots to communicate live location between each other, allowing for a collaborative working environment.</li>
                  <li>Optimized underlying &apos;swarm&apos; algorithm to lower runtime complexity for resource savings on the onboard microprocessor.</li>
                </ul>
              </div>
            </section>

            {/* ADDITIONAL INFORMATION */}
            <section>
              <h2 className="text-[11px] font-sans font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-1.5">
                ADDITIONAL INFORMATION
              </h2>
              <p className="text-[11px] leading-relaxed text-zinc-900 font-sans">
                <span className="font-bold">Programming Languages: </span>
                Java, Python, MatLab, Simulink, Verilog, Assembly, Ladder Logic, Functional Block, Structured Text, C++, Objective-C
              </p>
              <p className="text-[11px] leading-relaxed text-zinc-900 font-sans mt-0.5">
                <span className="font-bold">Technical Skills &amp; Systems: </span>
                Autodesk AutoCAD, Altium Designer, Siemens NX, WireViz, P&amp;ID / Electrical Diagrams, Project Management, Gantt Charts, PSpice, Osmond PCB, Modbus, Ethernet/IP, DeviceNet, ControlNet, SCPI, EtherCAT, FAT/SAT, Document Control, Linux CLI, VMWare, HV Safety, Umbilical Design, Operator Training, Palantir &amp; PowerBI, Plant Triage
              </p>
              <p className="text-[11px] leading-relaxed text-zinc-900 font-sans mt-0.5">
                <span className="font-bold">Certifications &amp; Safety: </span>
                Studio 5000 Logix Designer Level 1: ControlLogix System Fundamentals; Aerial Lift Operator Safety Training (General Industry); Group 1 Social and Behavioral Research
              </p>
              <p className="text-[11px] leading-relaxed text-zinc-900 font-sans mt-0.5">
                <span className="font-bold">Languages &amp; Awards: </span>
                Vietnamese (Native/Bilingual), English (Native), Russian (Limited Working), Spanish (Limited Working) • Creators Award at HackTJ • National Merit Scholar
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
