import { jsPDF } from 'jspdf';

/**
 * Downloads the preserved static PDF directly from /Lance_Nguyen_Resume.pdf
 */
export function downloadResumePDF() {
  const link = document.createElement('a');
  link.href = '/Lance_Nguyen_Resume.pdf';
  link.download = 'Lance_Nguyen_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Opens the original PDF directly in a new tab/window
 */
export function openResumePDF() {
  window.open('/Lance_Nguyen_Resume.pdf', '_blank');
}
