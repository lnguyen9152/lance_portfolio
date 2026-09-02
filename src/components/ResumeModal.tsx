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
        <div className="flex-1 w-full overflow-y-auto bg-zinc-100/70 p-4 sm:p-6 md:p-8 flex justify-center">
          <div className="w-full max-w-[780px] bg-white text-black p-6 sm:p-10 shadow-sm border border-zinc-200 font-serif text-[13px] leading-snug select-text">
            
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
              <div className="flex justify-between items-baseline font-sans font-bold text-xs text-black">
                <span>George Mason University – Volgenau School of Engineering</span>
                <span className="font-normal text-zinc-700">Fairfax, VA</span>
              </div>
              <div className="flex justify-between items-baseline text-xs italic text-zinc-900 font-serif mb-1">
                <span>Bachelor of Science in Electrical Engineering</span>
                <span className="not-italic font-sans text-xs text-zinc-700">2019-2023</span>
              </div>
              <p className="text-[11px] leading-relaxed text-zinc-900 font-sans">
                <span className="font-bold">Relevant Coursework: </span>
                Embedded System Hardware Interfaces, Physics 3, System/Control Theory, Computer Networking, Computer Organization, Linear Electronics II, Digital System Design II, Electrical Circuit Analysis II, Communication Theory
              </p>
              <p className="text-[11px] leading-relaxed text-zinc-900 font-sans mt-0.5">
                <span className="font-bold">Personal Portfolio (Relevant Projects/Work Experience) - </span>
                <a
                  href="https://lnguyen9152.wixsite.com/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  https://lnguyen9152.wixsite.com/portfolio
                </a>
              </p>
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
                    <span>Ground Support Equipment Engineer II – Avionics Test</span>
                    <span className="not-italic font-sans text-xs text-zinc-700">2026-Present</span>
                  </div>
                  <ul className="mt-1 space-y-1 text-[11px] leading-snug text-zinc-900 list-disc list-outside pl-4 font-sans">
                    <li>Responsible engineer of a two-person team for the design, integration, and ongoing development of high-reliability ground support systems, ensuring mission readiness and supporting Terran R&apos;s integration, test, and launch phases.</li>
                    <li>Design and deliver Engine Checkout Racks to the propulsion team, ensuring robust testing and validation of flight engines with &lt;1 us accuracy.</li>
                    <li>Support design of ground support racks for low and high voltage electrical buses used to interface with flight hardware.</li>
                    <li>Collaborate with avionics, propulsion, software, manufacturing, and integration teams to ensure reliable operation for vehicle test and launch.</li>
                    <li>Design harnesses and junction boxes for electrical power distribution and signal transmission, ensuring seamless connections between ground systems and the vehicle.</li>
                    <li>Oversee fabrication, commissioning, and validation of GSE systems, including electrical testing and calibration.</li>
                    <li>Integrate electrical systems using protocols such as Ethernet, Modbus, and SCPI for reliable data transfer and control.</li>
                  </ul>
                </div>

                {/* Role 2 */}
                <div className="mt-2">
                  <div className="flex justify-between items-baseline text-xs italic text-zinc-900 font-serif">
                    <span>Data and Controls Engineer II – Factory Test</span>
                    <span className="not-italic font-sans text-xs text-zinc-700">2025-2026</span>
                  </div>
                  <ul className="mt-1 space-y-1 text-[11px] leading-snug text-zinc-900 list-disc list-outside pl-4 font-sans">
                    <li>Develop test infrastructure, checkout cabinets, instrumentation boxes, and data systems for hardware verification ensuring 0.01% accuracy.</li>
                    <li>Integrate instrumentation (pressure transducers, RTDs, thermocouples, accelerometers, actuators, etc.) into test systems, including channel mapping and signal scaling/conditioning.</li>
                    <li>Design test systems and create work instructions using tools such as NX, Altium, and WireViz to document and communicate assembly and integration procedures with a 100% on time completion and reliability rate.</li>
                    <li>Develop PLC automation using a proprietary company framework and EtherCAT/Modbus.</li>
                    <li>Manage multiple projects simultaneously, became a subject matter expert on DACs backend, and mentor engineers on specialized topics.</li>
                  </ul>
                </div>
              </div>

              {/* British Petroleum */}
              <div className="mb-3">
                <div className="flex justify-between items-baseline text-xs font-bold text-black font-sans">
                  <span>British Petroleum</span>
                  <span className="font-normal text-zinc-700">Houston, TX</span>
                </div>
                <div className="flex justify-between items-baseline text-xs italic text-zinc-900 font-serif">
                  <span>Instrumentation, Controls, and Electrical Engineer – Production and Operations</span>
                  <span className="not-italic font-sans text-xs text-zinc-700">2023-2025</span>
                </div>
                <ul className="mt-1 space-y-1 text-[11px] leading-snug text-zinc-900 list-disc list-outside pl-4 font-sans">
                  <li>Lead multi-disciplinary teams and contractors to execute high-budget projects, achieving a 95% on-time completion rate and delivering 80% under budget.</li>
                  <li>Optimize alarm management, implementing dynamic alarm suppression and reducing high/urgent alarm KPIs by 50%.</li>
                  <li>Enhance plant reliability by conducting RCFA (Root Cause Failure Analysis) studies, performing risk assessments, and implementing mitigation strategies, reducing deficiencies by 80%.</li>
                  <li>Conduct FAT (Factory Acceptance Test) and SAT (Site Acceptance Test) tests on brownfield projects, ensuring system functionality, integration, and compliance with design requirements.</li>
                  <li>Maintain and troubleshoot Rockwell, Honeywell, and Allen-Bradley PLCs, tracing I/O, implementing control loops, and redlining documents for accuracy.</li>
                  <li>Design and develop custom HMI screens and faceplates to improve usability and efficiency for offshore operators.</li>
                </ul>
              </div>

              {/* TradersAI */}
              <div className="mb-2">
                <div className="flex justify-between items-baseline text-xs font-bold text-black font-sans">
                  <span>TradersAI</span>
                  <span className="font-normal text-zinc-700">Fairfax, VA</span>
                </div>
                <div className="flex justify-between items-baseline text-xs italic text-zinc-900 font-serif">
                  <span>Software Developer</span>
                  <span className="not-italic font-sans text-xs text-zinc-700">2021-2022</span>
                </div>
                <ul className="mt-1 space-y-1 text-[11px] leading-snug text-zinc-900 list-disc list-outside pl-4 font-sans">
                  <li>Assisted in developing an algorithm-based trading strategy for /ES futures, contributing to a 351% return since 2018.</li>
                  <li>Designed and built a mobile app to send real-time trading signals using OneSignal for notifications, BeautifulSoup for web data extraction, and Pandas &amp; NumPy for data processing.</li>
                  <li>Built Python-based automation for data processing, real-time market retrieval, and trade signal execution.</li>
                  <li>Developed an automated system to generate and send real-time trade alerts based on market data.</li>
                  <li>Created a cross-platform mobile interface using Figma and AirTable, ensuring a seamless user experience.</li>
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
                Java, Python, MatLab, Simulink, Verilog, Assembly, Ladder Logic, Functional Block, Structured Text
              </p>
              <p className="text-[11px] leading-relaxed text-zinc-900 font-sans mt-0.5">
                <span className="font-bold">Technical Skills: </span>
                Autodesk AutoCAD, P&amp;ID/Electrical/Logic Diagrams, Project Management, Gantt Charts, PSpice, Osmond PCB, Modbus/Ethernet/DeviceNet/ControlNet, Networking, Factory/Site Acceptance Testing, Document Control, Linux Command Line, VMWare Virtualization, Risk Assessments, Execution Planning, Budget Planning
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
