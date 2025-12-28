import Parser from "rss-parser"
import OpenAI from "openai"
import fs from "fs-extra"
import slugify from "slugify"

const parser = new Parser()
const openai = new OpenAI({ apiKey: process.env.OPENAI_KEY })

const FEED = "https://trends.google.com/trends/trendingsearches/daily/rss?geo=IN"
const OUT = "../hugo-site/content/posts"

const feed = await parser.parseURL(FEED)
const raw = feed.items[Math.floor(Math.random()*5)].title
const topic = raw.replace(/[^a-zA-Z0-9 ]/g, "").trim()


const prompt = `
Write a 3000+ word SEO article for Indian audience.
Topic: ${topic}
Include FAQs, tables, steps, schema ready.
Format Markdown.
`

const res = await openai.chat.completions.create({
  model: "gpt-4.1-mini",
  messages: [{ role:"user", content: prompt }]
})

const slug = slugify(topic, { lower:true, strict:true })

const file = `${OUT}/${slug}.md`

await fs.writeFile(file, `---
title: "${topic}"
date: "${new Date().toISOString()}"
categories: ["Trending"]
tags: ["${slug}","latest"]
trending: true
image: "/images/default.jpg"
description: "Latest update on ${topic}"
---
${res.choices[0].message.content}
`)

console.log("PUBLISHED:", file)
