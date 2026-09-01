const fs = require('fs');

async function main() {
  const html = fs.readFileSync('page_blog.html', 'utf8');
  const urls = [];
  const regex = /https:\/\/[^"'\s\\]+/g;
  let m;
  while ((m = regex.exec(html)) !== null) {
    urls.push(m[0]);
  }
  const unique = [...new Set(urls)];
  console.log('Total unique URLs in page_blog.html:', unique.length);
  const blogUrls = unique.filter(u => u.includes('blog') || u.includes('post') || u.includes('wixapis') || u.includes('bundler'));
  console.log('Blog-related URLs:\n', blogUrls.join('\n'));
}

main();
