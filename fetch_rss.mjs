import fs from 'fs';

async function main() {
  const rssUrl = "https://lnguyen9152.wixsite.com/portfolio/blog-feed.xml";
  console.log("Fetching RSS feed:", rssUrl);
  const res = await fetch(rssUrl);
  console.log("RSS Status:", res.status);
  const xml = await res.text();
  console.log("RSS XML length:", xml.length);
  fs.writeFileSync("blog-feed.xml", xml);
  console.log("Saved blog-feed.xml!");
}

main();
