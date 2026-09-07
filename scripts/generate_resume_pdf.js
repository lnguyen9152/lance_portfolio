import { jsPDF } from 'jspdf';
import fs from 'fs';
import path from 'path';

function generateResumePDF() {
  // Letter size: 612 x 792 pt
  const doc = new jsPDF({
    unit: 'pt',
    format: 'letter',
  });

  const leftMargin = 38;
  const rightMargin = 574;
  const contentWidth = rightMargin - leftMargin; // 536 pt
  let y = 38;

  // Name
  doc.setFont('times', 'bold');
  doc.setFontSize(18);
  doc.text('Lance Nguyen', 612 / 2, y, { align: 'center' });
  y += 14;

  // Contact line
  doc.setFont('times', 'normal');
  doc.setFontSize(9);
  const contactText = '• lnguyen9152@gmail.com • (571) 470-3004 • linkedin.com/in/lance-p-nguyen/';
  doc.text(contactText, 612 / 2, y, { align: 'center' });
  
  // Link annotation for linkedin
  const emailStr = '• lnguyen9152@gmail.com • (571) 470-3004 • ';
  const emailWidth = doc.getTextWidth(emailStr);
  const linkWidth = doc.getTextWidth('linkedin.com/in/lance-p-nguyen/');
  const totalContactWidth = doc.getTextWidth(contactText);
  const linkStartX = (612 - totalContactWidth) / 2 + emailWidth;
  doc.link(linkStartX, y - 8, linkWidth, 10, { url: 'https://linkedin.com/in/lance-p-nguyen/' });

  y += 14;

  // Helper for section header
  function drawSectionHeader(title) {
    y += 2;
    doc.setFont('times', 'bold');
    doc.setFontSize(10);
    doc.text(title, leftMargin, y);
    
    // Draw horizontal line
    doc.setLineWidth(0.75);
    doc.setDrawColor(0, 0, 0);
    doc.line(leftMargin, y + 2.5, rightMargin, y + 2.5);
    y += 11;
  }

  // Helper for 2-column header row
  function drawTwoColumnRow(leftText, rightText, leftStyle = 'bold', rightStyle = 'normal', fontSize = 9.5) {
    doc.setFont('times', leftStyle);
    doc.setFontSize(fontSize);
    doc.text(leftText, leftMargin, y);

    doc.setFont('times', rightStyle);
    doc.setFontSize(fontSize);
    doc.text(rightText, rightMargin, y, { align: 'right' });
    y += 10.5;
  }

  // Helper for bullets
  function drawBullet(bulletText) {
    const bulletIndent = 12;
    const textWidth = contentWidth - bulletIndent;
    
    doc.setFont('times', 'normal');
    doc.setFontSize(8.5);
    
    // Draw bullet symbol
    doc.text('•', leftMargin + 2, y);

    // Split text to fit width
    const lines = doc.splitTextToSize(bulletText, textWidth);
    for (let i = 0; i < lines.length; i++) {
      doc.text(lines[i], leftMargin + bulletIndent, y);
      if (i < lines.length - 1) {
        y += 9.5;
      }
    }
    y += 10.5;
  }

  // ==================== EDUCATION ====================
  drawSectionHeader('EDUCATION');
  
  drawTwoColumnRow('George Mason University – Volgenau School of Engineering', 'Fairfax, VA', 'bold', 'normal', 9.5);
  drawTwoColumnRow('Bachelor of Science in Electrical Engineering', '2019-2023', 'italic', 'normal', 9);

  // Relevant coursework
  doc.setFont('times', 'bold');
  doc.setFontSize(8.5);
  const rcPrefix = 'Relevant Coursework: ';
  doc.text(rcPrefix, leftMargin, y);
  
  const rcPrefixWidth = doc.getTextWidth(rcPrefix);
  doc.setFont('times', 'normal');
  const courseworkText = 'Embedded System Hardware Interfaces, Physics 3, System/Control Theory, Computer Networking, Computer Organization, Linear Electronics II, Digital System Design II, Electrical Circuit Analysis II, Communication Theory';
  
  const firstLineAvail = contentWidth - rcPrefixWidth;
  const cwLines = doc.splitTextToSize(courseworkText, contentWidth);
  // Re-split with prefix awareness
  const words = courseworkText.split(' ');
  let line1 = '';
  let restWords = [];
  for (let i = 0; i < words.length; i++) {
    const testLine = line1 ? line1 + ' ' + words[i] : words[i];
    if (doc.getTextWidth(testLine) <= firstLineAvail) {
      line1 = testLine;
    } else {
      restWords = words.slice(i);
      break;
    }
  }
  doc.text(line1, leftMargin + rcPrefixWidth, y);
  y += 9.5;
  if (restWords.length > 0) {
    const remainingText = restWords.join(' ');
    const remLines = doc.splitTextToSize(remainingText, contentWidth);
    for (const rLine of remLines) {
      doc.text(rLine, leftMargin, y);
      y += 9.5;
    }
  }

  // Personal Portfolio line
  doc.setFont('times', 'bold');
  doc.setFontSize(8.5);
  const portPrefix = 'Personal Portfolio (Relevant Projects/Work Experience) - ';
  doc.text(portPrefix, leftMargin, y);
  const portPrefixWidth = doc.getTextWidth(portPrefix);

  doc.setFont('times', 'normal');
  const portUrl = 'lance-portfolio.lnguyen9152.workers.dev';
  doc.setTextColor(0, 0, 238);
  doc.text(portUrl, leftMargin + portPrefixWidth, y);
  doc.link(leftMargin + portPrefixWidth, y - 7, doc.getTextWidth(portUrl), 8, { url: 'https://lance-portfolio.lnguyen9152.workers.dev' });
  doc.setTextColor(0, 0, 0);
  y += 11;

  // ==================== WORK EXPERIENCE ====================
  drawSectionHeader('WORK EXPERIENCE');

  // Relativity Space
  drawTwoColumnRow('Relativity Space', 'Los Angeles, CA', 'bold', 'normal', 9.5);
  drawTwoColumnRow('Ground Support Equipment Engineer II – Avionics Test', '2026-Present', 'italic', 'normal', 9);

  drawBullet("Lead engineer for the design, integration, and ongoing development of high-reliability ground support systems, ensuring mission readiness and supporting Terran R's integration, test, and launch phases.");
  drawBullet("Design and deliver Engine Checkout Racks to the propulsion team, ensuring robust testing and validation of flight engines with <1 us accuracy.");
  drawBullet("Support design of ground support racks for low and high voltage electrical buses used to interface with flight hardware.");
  drawBullet("Collaborate with avionics, propulsion, software, manufacturing, and integration teams to ensure reliable operation for vehicle test and launch.");
  drawBullet("Design harnesses and junction boxes for electrical power distribution and signal transmission, ensuring seamless connections between ground systems and the vehicle.");
  drawBullet("Oversee fabrication, commissioning, and validation of GSE systems, including electrical testing and calibration.");
  drawBullet("Integrate electrical systems using protocols such as Ethernet, Modbus, and SCPI for reliable data transfer and control.");

  y += 2;
  drawTwoColumnRow('Data and Controls Engineer II – Factory Test', '2025-2026', 'italic', 'normal', 9);

  drawBullet("Develop test infrastructure, checkout cabinets, instrumentation boxes, and data systems for hardware verification ensuring 0.01% accuracy.");
  drawBullet("Integrate instrumentation (pressure transducers, RTDs, thermocouples, accelerometers, actuators, etc.) into test systems, including channel mapping and signal scaling/conditioning.");
  drawBullet("Design test systems and create work instructions using tools such as NX, Altium, and WireViz to document and communicate assembly and integration procedures with a 100% on time completion and reliability rate.");
  drawBullet("Develop PLC automation using a proprietary company framework and EtherCAT/Modbus.");
  drawBullet("Manage multiple projects simultaneously, became a subject matter expert on DACs backend, and mentor engineers on specialized topics.");

  // British Petroleum
  y += 2;
  drawTwoColumnRow('British Petroleum', 'Houston, TX', 'bold', 'normal', 9.5);
  drawTwoColumnRow('Instrumentation, Controls, and Electrical Engineer – Production and Operations', '2023-2025', 'italic', 'normal', 9);

  drawBullet("Lead multi-disciplinary teams and contractors to execute high-budget projects, achieving a 95% on-time completion rate and delivering 80% under budget.");
  drawBullet("Optimize alarm management, implementing dynamic alarm suppression and reducing high/urgent alarm KPIs by 50%.");
  drawBullet("Enhance plant reliability by conducting RCFA (Root Cause Failure Analysis) studies, performing risk assessments, and implementing mitigation strategies, reducing deficiencies by 80%.");
  drawBullet("Conduct FAT (Factory Acceptance Test) and SAT (Site Acceptance Test) tests on brownfield projects, ensuring system functionality, integration, and compliance with design requirements.");
  drawBullet("Maintain and troubleshoot Rockwell, Honeywell, and Allen-Bradley PLCs, tracing I/O, implementing control loops, and redlining documents for accuracy.");
  drawBullet("Design and develop custom HMI screens and faceplates to improve usability and efficiency for offshore operators.");

  // TradersAI
  y += 2;
  drawTwoColumnRow('TradersAI', 'Fairfax, VA', 'bold', 'normal', 9.5);
  drawTwoColumnRow('Software Developer', '2021-2022', 'italic', 'normal', 9);

  drawBullet("Assisted in developing an algorithm-based trading strategy for /ES futures, contributing to a 351% return since 2018.");
  drawBullet("Designed and built a mobile app to send real-time trading signals using OneSignal for notifications, BeautifulSoup for web data extraction, and Pandas & NumPy for data processing.");
  drawBullet("Built Python-based automation for data processing, real-time market retrieval, and trade signal execution.");
  drawBullet("Developed an automated system to generate and send real-time trade alerts based on market data.");
  drawBullet("Created a cross-platform mobile interface using Figma and AirTable, ensuring a seamless user experience.");

  // ==================== ADDITIONAL INFORMATION ====================
  drawSectionHeader('ADDITIONAL INFORMATION');

  // Programming Languages
  doc.setFont('times', 'bold');
  doc.setFontSize(8.5);
  const progLabel = 'Programming Languages: ';
  doc.text(progLabel, leftMargin, y);
  const progLabelWidth = doc.getTextWidth(progLabel);

  doc.setFont('times', 'normal');
  const progText = 'Java, Python, MatLab, Simulink, Verliog, Assembly, Ladder Logic, Functional Block, Structured Text';
  doc.text(progText, leftMargin + progLabelWidth, y);
  y += 10.5;

  // Technical Skills
  doc.setFont('times', 'bold');
  const techLabel = 'Technical Skills: ';
  doc.text(techLabel, leftMargin, y);
  const techLabelWidth = doc.getTextWidth(techLabel);

  doc.setFont('times', 'normal');
  const techText = 'Autodesk AutoCAD, P&ID/Electrical/Logic Diagrams, Project Management, Gantt Charts, PSpice, Osmond PCB, Modbus/Ethernet/DeviceNet/ControlNet, Networking, Factory/Site Acceptance Testing, Document Control, Linux Command Line, VMWare Virtualization, Risk Assessments, Execution Planning, Budget Planning';

  const techFirstLineAvail = contentWidth - techLabelWidth;
  const tWords = techText.split(' ');
  let tLine1 = '';
  let tRestWords = [];
  for (let i = 0; i < tWords.length; i++) {
    const testLine = tLine1 ? tLine1 + ' ' + tWords[i] : tWords[i];
    if (doc.getTextWidth(testLine) <= techFirstLineAvail) {
      tLine1 = testLine;
    } else {
      tRestWords = tWords.slice(i);
      break;
    }
  }
  doc.text(tLine1, leftMargin + techLabelWidth, y);
  y += 9.5;
  if (tRestWords.length > 0) {
    const remainingTech = tRestWords.join(' ');
    const remTechLines = doc.splitTextToSize(remainingTech, contentWidth);
    for (const line of remTechLines) {
      doc.text(line, leftMargin, y);
      y += 9.5;
    }
  }

  console.log('Final Y coordinate:', y, 'out of 792');

  const pdfOutput = doc.output('arraybuffer');
  const publicPath = path.resolve('public/Lance_Nguyen_Resume.pdf');
  fs.writeFileSync(publicPath, Buffer.from(pdfOutput));
  console.log('Saved to:', publicPath);

  const distDir = path.resolve('dist');
  if (fs.existsSync(distDir)) {
    const distPath = path.join(distDir, 'Lance_Nguyen_Resume.pdf');
    fs.writeFileSync(distPath, Buffer.from(pdfOutput));
    console.log('Saved to:', distPath);
  }
}

generateResumePDF();
