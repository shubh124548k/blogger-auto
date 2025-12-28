import fs from "fs";
import path from "path";

const postDir = "hugo-site/content/posts";
fs.mkdirSync(postDir, { recursive: true });

const file = path.join(postDir, `auto-${Date.now()}.md`);

const content = `---
title: "Auto Generated Blog"
date: ${new Date().toISOString()}
---

🚀 This post was generated automatically by GitHub Actions.
`;

fs.writeFileSync(file, content);
console.log("Blog created:", file);
