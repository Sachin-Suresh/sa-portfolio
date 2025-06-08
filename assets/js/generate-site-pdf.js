// 📄 Run this script with: `node assets/js/generate-site-pdf.js`
// ✅ Then merge all generated PDFs using: `pdfunite home.pdf _*.pdf full-site.pdf`

const puppeteer = require('puppeteer');

const pages = [
  '/',
  '/portfolio/api-docs/',
  '/portfolio/user-guides/',
  '/portfolio/ux-edits/',
  '/portfolio/compliance/',
  '/case-studies/',
  '/contact/',
];

const baseUrl = 'http://localhost:4000/sa-portfolio';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const mergedPDFs = [];

  for (const path of pages) {
    const fullUrl = `${baseUrl}${path}`;
    const filename = path === '/' ? 'home.pdf' : `${path.replace(/\//g, '_')}.pdf`;

    console.log(`Generating: ${filename}`);

    await page.goto(fullUrl, {
        waitUntil: 'networkidle2',
        timeout: 0  // disables timeout
    });

    // Expand all details blocks before generating PDF
    await page.evaluate(() => {
        document.querySelectorAll('details').forEach(detail => detail.setAttribute('open', true));
    });

    await page.pdf({
      path: filename,
      format: 'A4',
      printBackground: true,
      margin: { top: '40px', bottom: '40px' },
    });

    mergedPDFs.push(filename);
  }

  await browser.close();

  console.log('\n✅ Individual PDFs created:', mergedPDFs);
  console.log('\n🔗 Now run this to merge them:');
  console.log(`pdfunite ${mergedPDFs.join(' ')} full-site.pdf`);
})();
