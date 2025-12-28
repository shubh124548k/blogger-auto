const Parser = require("rss-parser")
const OpenAI = require("openai")
const fs = require("fs-extra")
const slugify = require("slugify")
const path = require("path")

const parser = new Parser.default()
const openai = new OpenAI.default({ apiKey: process.env.OPENAI_KEY })

const FEED = "https://trends.google.com/trends/trendingsearches/daily/rss?geo=IN"
const OUT = path.join(__dirname, "..", "content", "posts")

// Ensure output directory exists
fs.ensureDirSync(OUT)

const feed = await parser.parseURL(FEED)
const raw = feed.items[Math.floor(Math.random()*5)].title
const topic = raw.replace(/[^a-zA-Z0-9 ]/g, "").trim()

if (!topic || topic.length === 0) {
  console.error("Failed to extract topic from RSS feed")
  process.exit(1)
}

const prompt = `
Write a 3000+ word SEO article for Indian audience.
Topic: ${topic}
Include FAQs, tables, steps, schema ready.
Format Markdown.
`

const res = await openai.chat.completions.create({
  model: "gpt-4-mini",
  messages: [{ role:"user", content: prompt }]
})

if (!res.choices || !res.choices[0] || !res.choices[0].message) {
  console.error("Failed to generate content from OpenAI")
  process.exit(1)
}

const slug = slugify(topic, { lower:true, strict:true })
const file = path.join(OUT, `${slug}.md`)

const content = `---
title: "${topic}"
date: "${new Date().toISOString()}"
categories: ["Trending"]
tags: ["${slug}","latest"]
trending: true
image: "/images/default.jpg"
description: "Latest update on ${topic}"
---

${res.choices[0].message.content}
`

fs.writeFileSync(file, content)

console.log("PUBLISHED:", file)
