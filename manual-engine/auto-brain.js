import fs from "fs";
import slugify from "slugify";

const title = process.argv[2] || "AI Technology Trends 2025";
const slug = slugify(title,{lower:true});

const post = `---
title: "${title}"
date: ${new Date().toISOString()}
categories: ["AI"]
tags: ["AI","Technology","SEO"]
image: "/images/${slug}.jpg"
description: "${title} latest AI SEO optimized blog post"
---

# ${title}

${title} is changing the future of the world with automation, AI, cloud and cybersecurity.

## Why this topic is trending
AI is exploding worldwide.

## Conclusion
Stay tuned for more AI SEO blogs.
`;

fs.mkdirSync(`../hugo-site/content/posts/${slug}`,{recursive:true});
fs.writeFileSync(`../hugo-site/content/posts/${slug}/index.md`,post);
console.log("POST CREATED:",slug);
