import fs from 'fs';

const files = fs.readdirSync('.').filter(f => f.startsWith('post_html_') && f.endsWith('.html'));

function decodeHtml(html) {
  return html
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ');
}

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  console.log('========================================================');
  console.log('FILE:', file);

  // Look for JSON script tags
  const scripts = [...content.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)];
  let found = false;

  for (const s of scripts) {
    const text = s[1];
    // Check for blog post data structures
    if (text.includes('"richContent"') || text.includes('"content"') || text.includes('"plainText"')) {
      // Find where richContent or plainText is defined
      const plainTextMatch = text.match(/"plainText":"([\s\S]*?)"/);
      if (plainTextMatch) {
        console.log('FOUND plainText:', plainTextMatch[1].slice(0, 200));
        found = true;
      }
      
      // Check for title, publishedDate, etc.
      const titleMatch = text.match(/"title":"([^"]+)"/);
      if (titleMatch) {
        console.log('Title in JSON:', titleMatch[1]);
      }
    }
  }

  // Also check for standard HTML paragraphs
  const paragraphs = [...content.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)]
    .map(m => decodeHtml(m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()))
    .filter(p => p.length > 25 && !p.includes('This website was built on Wix'));
  
  if (paragraphs.length > 0) {
    console.log('Paragraphs found in HTML:', paragraphs.length);
    console.log('First 2 paragraphs:', paragraphs.slice(0, 2));
  }
}
