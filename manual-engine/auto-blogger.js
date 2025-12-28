import fs from "fs"
import axios from "axios"
import slugify from "slugify"

const POST_DIR = "../hugo-site/content/posts"

if (!fs.existsSync(POST_DIR)) fs.mkdirSync(POST_DIR, { recursive:true })

async function getTrends(){
  const { data } = await axios.get("https://trends.google.com/trends/trendingsearches/daily/rss?geo=IN")
  const matches = [...data.matchAll(/<title>(.*?)<\/title>/g)]
  return matches.slice(1,6).map(m=>m[1])
}

async function run(){
  const trends = await getTrends()
  for (let t of trends){
    const slug = slugify(t,{lower:true})
    const file = `${POST_DIR}/${slug}.md`
    if (fs.existsSync(file)) continue

    const blog = `
---
title: "${t}"
date: ${new Date().toISOString()}
categories: ["Trending"]
tags: ["${t}","Viral","SEO"]
---

## ${t}

${t} is currently trending on Google. This article explains why it is trending, what it means, and everything you need to know.

### Why is it trending?
Millions of users are searching for ${t} right now.

### SEO Summary
Keyword: ${t}
Search Volume: HIGH
Intent: Trending Search
`

    fs.writeFileSync(file, blog)
    console.log("Created:", slug)
  }
}

run()
