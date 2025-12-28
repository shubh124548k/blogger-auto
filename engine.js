const fs = require("fs");
const path = require("path");

const postDir = "hugo-site/content/posts";
fs.mkdirSync(postDir, { recursive: true });

const file = path.join(postDir, `auto-${Date.now()}.md`);

const content = `---
title: "Auto Generated Blog"
date: ${new Date().toISOString()}
---

This post was fully generated automatically by GitHub Actions 🚀
`;

fs.writeFileSync(file, content);
console.log("Blog generated:", file);
