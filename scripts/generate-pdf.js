import { jsPDF } from 'jspdf';
import fs from 'fs';
import path from 'path';

export function buildOfficialResumeDoc() {
  const doc = new jsPDF({
    unit: 'pt',
    format: 'letter', // 612 x 792 pt
  });

  const pageWidth = doc.internal.pageSize.getWidth(); // 612
  const pageHeight = doc.internal.pageSize.getHeight(); // 792
  const margin = 36;
  const contentWidth = pageWidth - margin * 2; // 540
  let y = 38;

  // Helper for Section Headers with horizontal line across full width
  const drawSectionHeader = (title) => {
    y += 4;
    doc.setFont('times', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(10, 10, 10);
    doc.text(title, margin, y);
    y += 2.5;
    doc.setDrawColor(20, 20, 20);
    doc.setLineWidth(0.75);
    doc.line(margin, y, pageWidth - margin, y);
    y += 9.5;
  };

  // Helper for Bullets
  const drawBullet = (text) => {
    doc.setFont('times', 'normal');
    doc.setFontSize(8.4);
    doc.setTextColor(20, 20, 20);
    const bulletIndent = 12;
    const splitText = doc.splitTextToSize(text, contentWidth - bulletIndent);
    doc.text('●', margin + 2, y - 0.2);
    doc.text(splitText, margin + bulletIndent, y);
    y += splitText.length * 9.6 + 1.2;
  };

  // --- 1. HEADER ---
  doc.setFont('times', 'bold');
  doc.setFontSize(19);
  doc.setTextColor(10, 10, 10);
  doc.text('Lance Nguyen', pageWidth / 2, y, { align: 'center' });
  y += 13.5;

  // Contact info line
  doc.setFont('times', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(40, 40, 40);

  // lnguyen9152@gmail.com • (571) 470-3004 • linkedin.com/in/lance-p-nguyen/
  const email = 'lnguyen9152@gmail.com';
  const phone = '(571) 470-3004';
  const linkedin = 'linkedin.com/in/lance-p-nguyen/';
  const fullContact = `• ${email} • ${phone} • ${linkedin}`;
  doc.text(fullContact, pageWidth / 2, y, { align: 'center' });
  
  // Add clickable links over the email & linkedin
  const emailWidth = doc.getTextWidth(email);
  const linkedinWidth = doc.getTextWidth(linkedin);
  // doc.link(x, y, w, h, { url })
  y += 10;

  // --- 2. EDUCATION ---
  drawSectionHeader('EDUCATION');

  // Institution & Location
  doc.setFont('times', 'bold');
  doc.setFontSize(9.2);
  doc.setTextColor(15, 15, 15);
  doc.text('George Mason University – Volgenau School of Engineering', margin, y);
  doc.setFont('times', 'normal');
  doc.text('Fairfax, VA', pageWidth - margin, y, { align: 'right' });
  y += 10.5;

  // Degree & Period
  doc.setFont('times', 'italic');
  doc.setFontSize(8.8);
  doc.text('Bachelor of Science in Electrical Engineering', margin, y);
  doc.setFont('times', 'normal');
  doc.text('2019-2023', pageWidth - margin, y, { align: 'right' });
  y += 10;

  // Coursework
  doc.setFont('times', 'bold');
  doc.setFontSize(8.2);
  const cwLabel = 'Relevant Coursework: ';
  doc.text(cwLabel, margin, y);
  const cwLabelW = doc.getTextWidth(cwLabel);
  doc.setFont('times', 'normal');
  const cwText = 'Embedded System Hardware Interfaces, Physics 3, System/Control Theory, Computer Networking, Computer Organization, Linear Electronics II, Digital System Design II, Electrical Circuit Analysis II, Communication Theory';
  const cwSplit = doc.splitTextToSize(cwText, contentWidth - cwLabelW);
  doc.text(cwSplit[0], margin + cwLabelW, y);
  y += 9.5;
  if (cwSplit.length > 1) {
    for (let i = 1; i < cwSplit.length; i++) {
      doc.text(cwSplit[i], margin, y);
      y += 9.5;
    }
  }

  // Personal Portfolio link
  doc.setFont('times', 'bold');
  doc.setFontSize(8.2);
  const portLabel = 'Personal Portfolio (Relevant Projects/Work Experience) - ';
  doc.text(portLabel, margin, y);
  const portLabelW = doc.getTextWidth(portLabel);
  doc.setFont('times', 'normal');
  doc.setTextColor(20, 50, 160);
  const portUrl = 'https://lnguyen9152.wixsite.com/portfolio';
  doc.text(portUrl, margin + portLabelW, y);
  doc.link(margin + portLabelW, y - 7, doc.getTextWidth(portUrl), 9, { url: portUrl });
  doc.setTextColor(20, 20, 20);
  y += 10;

  // --- 3. WORK EXPERIENCE ---
  drawSectionHeader('WORK EXPERIENCE');

  // Relativity Space
  doc.setFont('times', 'bold');
  doc.setFontSize(9.2);
  doc.setTextColor(15, 15, 15);
  doc.text('Relativity Space', margin, y);
  doc.setFont('times', 'normal');
  doc.text('Los Angeles, CA', pageWidth - margin, y, { align: 'right' });
  y += 10;

  // Role 1
  doc.setFont('times', 'italic');
  doc.setFontSize(8.6);
  doc.text('Ground Support Equipment Engineer II – Avionics Test', margin, y);
  doc.setFont('times', 'normal');
  doc.text('2026-Present', pageWidth - margin, y, { align: 'right' });
  y += 9.5;

  const rel1Bullets = [
    "Responsible engineer of a two-person team for the design, integration, and ongoing development of high-reliability ground support systems, ensuring mission readiness and supporting Terran R's integration, test, and launch phases.",
    "Design and deliver Engine Checkout Racks to the propulsion team, ensuring robust testing and validation of flight engines with <1 us accuracy.",
    "Support design of ground support racks for low and high voltage electrical buses used to interface with flight hardware.",
    "Collaborate with avionics, propulsion, software, manufacturing, and integration teams to ensure reliable operation for vehicle test and launch.",
    "Design harnesses and junction boxes for electrical power distribution and signal transmission, ensuring seamless connections between ground systems and the vehicle.",
    "Oversee fabrication, commissioning, and validation of GSE systems, including electrical testing and calibration.",
    "Integrate electrical systems using protocols such as Ethernet, Modbus, and SCPI for reliable data transfer and control."
  ];
  rel1Bullets.forEach(b => drawBullet(b));
  y += 1.5;

  // Role 2
  doc.setFont('times', 'italic');
  doc.setFontSize(8.6);
  doc.text('Data and Controls Engineer II – Factory Test', margin, y);
  doc.setFont('times', 'normal');
  doc.text('2025-2026', pageWidth - margin, y, { align: 'right' });
  y += 9.5;

  const rel2Bullets = [
    "Develop test infrastructure, checkout cabinets, instrumentation boxes, and data systems for hardware verification ensuring 0.01% accuracy.",
    "Integrate instrumentation (pressure transducers, RTDs, thermocouples, accelerometers, actuators, etc.) into test systems, including channel mapping and signal scaling/conditioning.",
    "Design test systems and create work instructions using tools such as NX, Altium, and WireViz to document and communicate assembly and integration procedures with a 100% on time completion and reliability rate.",
    "Develop PLC automation using a proprietary company framework and EtherCAT/Modbus.",
    "Manage multiple projects simultaneously, became a subject matter expert on DACs backend, and mentor engineers on specialized topics."
  ];
  rel2Bullets.forEach(b => drawBullet(b));
  y += 2.5;

  // British Petroleum
  doc.setFont('times', 'bold');
  doc.setFontSize(9.2);
  doc.setTextColor(15, 15, 15);
  doc.text('British Petroleum', margin, y);
  doc.setFont('times', 'normal');
  doc.text('Houston, TX', pageWidth - margin, y, { align: 'right' });
  y += 10;

  // Role
  doc.setFont('times', 'italic');
  doc.setFontSize(8.6);
  doc.text('Instrumentation, Controls, and Electrical Engineer – Production and Operations', margin, y);
  doc.setFont('times', 'normal');
  doc.text('2023-2025', pageWidth - margin, y, { align: 'right' });
  y += 9.5;

  const bpBullets = [
    "Lead multi-disciplinary teams and contractors to execute high-budget projects, achieving a 95% on-time completion rate and delivering 80% under budget.",
    "Optimize alarm management, implementing dynamic alarm suppression and reducing high/urgent alarm KPIs by 50%.",
    "Enhance plant reliability by conducting RCFA (Root Cause Failure Analysis) studies, performing risk assessments, and implementing mitigation strategies, reducing deficiencies by 80%.",
    "Conduct FAT (Factory Acceptance Test) and SAT (Site Acceptance Test) tests on brownfield projects, ensuring system functionality, integration, and compliance with design requirements.",
    "Maintain and troubleshoot Rockwell, Honeywell, and Allen-Bradley PLCs, tracing I/O, implementing control loops, and redlining documents for accuracy.",
    "Design and develop custom HMI screens and faceplates to improve usability and efficiency for offshore operators."
  ];
  bpBullets.forEach(b => drawBullet(b));
  y += 2.5;

  // TradersAI
  doc.setFont('times', 'bold');
  doc.setFontSize(9.2);
  doc.setTextColor(15, 15, 15);
  doc.text('TradersAI', margin, y);
  doc.setFont('times', 'normal');
  doc.text('Fairfax, VA', pageWidth - margin, y, { align: 'right' });
  y += 10;

  // Role
  doc.setFont('times', 'italic');
  doc.setFontSize(8.6);
  doc.text('Software Developer', margin, y);
  doc.setFont('times', 'normal');
  doc.text('2021-2022', pageWidth - margin, y, { align: 'right' });
  y += 9.5;

  const tradersBullets = [
    "Assisted in developing an algorithm-based trading strategy for /ES futures, contributing to a 351% return since 2018.",
    "Designed and built a mobile app to send real-time trading signals using OneSignal for notifications, BeautifulSoup for web data extraction, and Pandas & NumPy for data processing.",
    "Built Python-based automation for data processing, real-time market retrieval, and trade signal execution.",
    "Developed an automated system to generate and send real-time trade alerts based on market data.",
    "Created a cross-platform mobile interface using Figma and AirTable, ensuring a seamless user experience."
  ];
  tradersBullets.forEach(b => drawBullet(b));
  y += 2.5;

  // --- 4. ADDITIONAL INFORMATION ---
  drawSectionHeader('ADDITIONAL INFORMATION');

  // Programming Languages
  doc.setFont('times', 'bold');
  doc.setFontSize(8.2);
  doc.setTextColor(15, 15, 15);
  const progLabel = 'Programming Languages: ';
  doc.text(progLabel, margin, y);
  const progLabelW = doc.getTextWidth(progLabel);
  doc.setFont('times', 'normal');
  const progText = 'Java, Python, MatLab, Simulink, Verilog, Assembly, Ladder Logic, Functional Block, Structured Text';
  const progSplit = doc.splitTextToSize(progText, contentWidth - progLabelW);
  doc.text(progSplit[0], margin + progLabelW, y);
  y += 9.5;
  if (progSplit.length > 1) {
    for (let i = 1; i < progSplit.length; i++) {
      doc.text(progSplit[i], margin, y);
      y += 9.5;
    }
  }

  // Technical Skills
  doc.setFont('times', 'bold');
  doc.setFontSize(8.2);
  const techLabel = 'Technical Skills: ';
  doc.text(techLabel, margin, y);
  const techLabelW = doc.getTextWidth(techLabel);
  doc.setFont('times', 'normal');
  const techText = 'Autodesk AutoCAD, P&ID/Electrical/Logic Diagrams, Project Management, Gantt Charts, PSpice, Osmond PCB, Modbus/Ethernet/DeviceNet/ControlNet, Networking, Factory/Site Acceptance Testing, Document Control, Linux Command Line, VMWare Virtualization, Risk Assessments, Execution Planning, Budget Planning';
  const techSplit = doc.splitTextToSize(techText, contentWidth - techLabelW);
  doc.text(techSplit[0], margin + techLabelW, y);
  y += 9.5;
  if (techSplit.length > 1) {
    for (let i = 1; i < techSplit.length; i++) {
      doc.text(techSplit[i], margin, y);
      y += 9.5;
    }
  }

  return doc;
}

// If run directly via node
if (process.argv[1] && process.argv[1].endsWith('generate-pdf.js')) {
  const doc = buildOfficialResumeDoc();
  const publicDir = path.resolve(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  const outPath = path.join(publicDir, 'Lance_Nguyen_Resume.pdf');
  const buffer = Buffer.from(doc.output('arraybuffer'));
  fs.writeFileSync(outPath, buffer);
  console.log(`Successfully generated resume PDF to: ${outPath}`);
}
