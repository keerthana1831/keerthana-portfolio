// Node script to generate a valid, styled PDF 1.4 resume file for Keerthana S
import fs from 'fs';
import path from 'path';

function createResumePdf() {
  const contentLines = [
    // Header
    { font: '/F2', size: 24, x: 45, y: 795, text: 'KEERTHANA S' },
    { font: '/F1', size: 12, x: 45, y: 775, text: 'B.Tech Information Technology Student | Aspiring Software Developer' },
    { font: '/F1', size: 9.5, x: 45, y: 758, text: 'Email: keerthanas@srishakthi.ac.in | keerthana183107@gmail.com | Phone: +91 90258 59802' },
    { font: '/F1', size: 9.5, x: 45, y: 744, text: 'LinkedIn: linkedin.com/in/keerthana-s-720426338 | GitHub: github.com/keerthana1831' },

    // Section: Summary
    { font: '/F2', size: 12, x: 45, y: 715, text: 'PROFESSIONAL SUMMARY' },
    { font: '/F1', size: 9.5, x: 45, y: 698, text: 'Information Technology undergraduate student passionate about software development and web technologies.' },
    { font: '/F1', size: 9.5, x: 45, y: 684, text: 'Demonstrated experience in building practical web applications, mastering data structures, and continuous learning.' },

    // Section: Education
    { font: '/F2', size: 12, x: 45, y: 656, text: 'EDUCATION' },
    { font: '/F2', size: 10, x: 45, y: 638, text: 'Sri Shakthi Institute of Engineering and Technology' },
    { font: '/F1', size: 9.5, x: 380, y: 638, text: '2024 - 2028 | CGPA: 8.5*' },
    { font: '/F1', size: 9.5, x: 45, y: 624, text: 'B.Tech in Information Technology - Core CS & IT Curriculum' },

    { font: '/F2', size: 10, x: 45, y: 602, text: 'Kongu Vellalar Matric Hr Sec School' },
    { font: '/F1', size: 9.5, x: 420, y: 602, text: '2024 | 85%' },
    { font: '/F1', size: 9.5, x: 45, y: 588, text: 'Higher Secondary Certificate (HSC) - Mathematics, Physics, Chemistry, Computer Science' },

    { font: '/F2', size: 10, x: 45, y: 566, text: 'Kongu Vellalar Matric Hr Sec School' },
    { font: '/F1', size: 9.5, x: 420, y: 566, text: '2022 | 93%' },
    { font: '/F1', size: 9.5, x: 45, y: 552, text: 'Secondary School Leaving Certificate (SSLC) - Distinction' },

    // Section: Technical Skills
    { font: '/F2', size: 12, x: 45, y: 524, text: 'TECHNICAL SKILLS' },
    { font: '/F2', size: 9.5, x: 45, y: 506, text: 'Programming Languages:' },
    { font: '/F1', size: 9.5, x: 175, y: 506, text: 'C, Java, JavaScript, Python' },
    { font: '/F2', size: 9.5, x: 45, y: 490, text: 'Web Technologies:' },
    { font: '/F1', size: 9.5, x: 175, y: 490, text: 'HTML, CSS, React' },
    { font: '/F2', size: 9.5, x: 45, y: 474, text: 'Databases:' },
    { font: '/F1', size: 9.5, x: 175, y: 474, text: 'MongoDB, SQL Basics' },
    { font: '/F2', size: 9.5, x: 45, y: 458, text: 'Developer Tools:' },
    { font: '/F1', size: 9.5, x: 175, y: 458, text: 'VS Code, Git, MS Office' },

    // Section: Projects
    { font: '/F2', size: 12, x: 45, y: 430, text: 'KEY PROJECTS' },
    { font: '/F2', size: 10, x: 45, y: 412, text: 'VaultIQ (Featured) - AI-Powered Personal Document Management' },
    { font: '/F1', size: 9, x: 45, y: 398, text: '- Upload and manage PDFs, images, and notes with secure structured organization.' },
    { font: '/F1', size: 9, x: 45, y: 385, text: '- Intelligent document search, automated PDF summarization, and OCR text extraction.' },
    { font: '/F1', size: 9, x: 45, y: 372, text: '- Technologies: React, Python / OCR, Node.js, AI Embeddings, MongoDB.' },

    { font: '/F2', size: 10, x: 45, y: 350, text: 'BuyWise - E-Commerce & Smart Inventory Management' },
    { font: '/F1', size: 9, x: 45, y: 336, text: '- Simplifies product browsing, checkout purchasing, and dynamic inventory management.' },
    { font: '/F1', size: 9, x: 45, y: 323, text: '- Features retailer stock tracking, employee monitoring, and expiry/discount management.' },

    { font: '/F2', size: 10, x: 45, y: 301, text: 'LegalEase - Contract Simplification & Clause Clarification' },
    { font: '/F1', size: 9, x: 45, y: 287, text: '- Uploads legal contracts and renders simplified, plain-English summaries.' },
    { font: '/F1', size: 9, x: 45, y: 274, text: '- Highlights critical clauses and flags potential risks and unusual obligations.' },

    // Section: Certifications
    { font: '/F2', size: 12, x: 45, y: 246, text: 'CERTIFICATIONS' },
    { font: '/F2', size: 9.5, x: 45, y: 228, text: '1. Python Programming' },
    { font: '/F1', size: 9.5, x: 180, y: 228, text: '- Hazhtech Institution' },
    { font: '/F2', size: 9.5, x: 45, y: 212, text: '2. Cloud Computing' },
    { font: '/F1', size: 9.5, x: 180, y: 212, text: '- NPTEL' },
    { font: '/F2', size: 9.5, x: 45, y: 196, text: '3. MERN Stack' },
    { font: '/F1', size: 9.5, x: 180, y: 196, text: '- Udemy' },

    // Section: Strengths
    { font: '/F2', size: 12, x: 45, y: 168, text: 'KEY STRENGTHS' },
    { font: '/F1', size: 9.5, x: 45, y: 150, text: 'Problem Solving | Team Collaboration | Quick Learning | Time Management | Adaptability | Continuous Learning' },
  ];

  // Build stream content
  let stream = 'q\n';
  
  // Decorative lines in Amber Glow (#D5851F -> 0.84 0.52 0.12)
  stream += '0.84 0.52 0.12 RG\n';
  stream += '2 w\n';
  stream += '45 735 m 550 735 l S\n';
  stream += '45 672 m 550 672 l S\n';
  stream += '45 540 m 550 540 l S\n';
  stream += '45 446 m 550 446 l S\n';
  stream += '45 262 m 550 262 l S\n';
  stream += '45 182 m 550 182 l S\n';
  stream += 'Q\n';

  // Text commands in Walnut Brown (#5A3E2B -> 0.35 0.24 0.17)
  for (const item of contentLines) {
    const escapedText = item.text
      .replace(/\\/g, '\\\\')
      .replace(/\(/g, '\\(')
      .replace(/\)/g, '\\)');
    stream += `BT ${item.font} ${item.size} Tf 0.35 0.24 0.17 rg 1 0 0 1 ${item.x} ${item.y} Tm (${escapedText}) Tj ET\n`;
  }

  const streamBuffer = Buffer.from(stream, 'utf-8');

  // Assembly of PDF objects
  const objects = [];
  
  // 1: Catalog
  objects.push('1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n');
  // 2: Pages
  objects.push('2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n');
  // 3: Page
  objects.push('3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>\nendobj\n');
  // 4: Font F1 (Helvetica)
  objects.push('4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n');
  // 5: Font F2 (Helvetica-Bold)
  objects.push('5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n');
  // 6: Contents stream
  objects.push(`6 0 obj\n<< /Length ${streamBuffer.length} >>\nstream\n${stream}\nendstream\nendobj\n`);

  let offset = 0;
  const header = '%PDF-1.4\n';
  let body = header;
  const xrefOffsets = [0];

  for (const obj of objects) {
    xrefOffsets.push(body.length);
    body += obj;
  }

  const startXref = body.length;
  body += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;

  for (let i = 1; i <= objects.length; i++) {
    body += `${String(xrefOffsets[i]).padStart(10, '0')} 00000 n \n`;
  }

  body += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${startXref}\n%%EOF\n`;

  const outputPath = path.resolve('public/Keerthana_S_Resume.pdf');
  fs.writeFileSync(outputPath, body);
  console.log('Successfully re-generated resume PDF at:', outputPath);
}

createResumePdf();
