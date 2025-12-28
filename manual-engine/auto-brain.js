import axios from "axios";
import fs from "fs";
import slugify from "slugify";

const trendUrl = "https://trends.google.com/trends/trendingsearches/daily/rss?geo=IN";

const res = await axios.get(trendUrl);
const matches = [...res.data.matchAll(/<title><!\[CDATA\[(.*?)\]\]><\/title>/g)];

matches.shift();
const topic = matches[Math.floor(Math.random()*matches.length)][1];

const slug = slugify(topic, { lower:true });
const file = `hugo-site/content/posts/${slug}.md`;

const blog = `---
title: "${topic}"
date: ${new Date().toISOString()}
categories: ["Trending"]
tags: ["trending","viral","2025"]
---

# ${topic}

This topic is trending in India.

## Why This Is Viral
People are searching this topic massively.

## Best Ways To Earn From This Topic
1. Blog
2. YouTube
3. Affiliate marketing
4. Dropshipping

## Final Words
Stay ahead with trending SEO blogs.
`;

fs.writeFileSync(file, blog);
console.log("AUTO BLOG CREATED:", file);
