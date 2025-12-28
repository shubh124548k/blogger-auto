import fs from "fs";
import path from "path";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_KEY });

const CATEGORIES = [
  "Cyber Security","Hacking","Dark Web","AI","Tech","Gaming","Crypto",
  "Business","YouTube","Instagram","Health","Science","Space","Jobs",
  "Motivation","Education","Internet","Startups","Finance","Viral"
];

const pick = arr => arr[Math.floor(Math.random() * arr.length)];
const category = pick(CATEGORIES);

const prompt = `Generate a trending viral SEO blog article about ${category}.
Include Title, SEO slug, tags, 800+ words, and powerful intro.`;

const res = await openai.chat.completions.create({
  model: "gpt-4o-mini",
  messages: [{ role: "user", content: prompt }]
});

const text = res.choices[0].message.content;
const slug = `auto-${Date.now()}`;

const postDir = "hugo-site/content/posts";
fs.mkdirSync(postDir, { recursive: true });

const file = path.join(postDir, `${slug}.md`);

const content = `---
title: "Auto AI Blog"
date: ${new Date().toISOString()}
categories: ["${category}"]
tags: ["auto","ai","blog"]
---

${text}
`;

fs.writeFileSync(file, content);
console.log("AUTO BLOG GENERATED:", file);
