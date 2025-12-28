import axios from "axios";
import fs from "fs";
import slugify from "slugify";
import path from "path";

const TOPIC = process.argv[2] || "artificial intelligence";
const SLUG = slugify(TOPIC, { lower: true });

const IMAGE_DIR = "../hugo-site/static/images";
if (!fs.existsSync(IMAGE_DIR)) fs.mkdirSync(IMAGE_DIR, { recursive: true });

const FILE_PATH = path.join(IMAGE_DIR, `${SLUG}.jpg`);

const URL = `https://image.pollinations.ai/prompt/${encodeURIComponent(TOPIC)}?width=1600&height=900`;

const res = await axios({ url: URL, responseType: "arraybuffer" });
fs.writeFileSync(FILE_PATH, res.data);

console.log("IMAGE GENERATED:", FILE_PATH);
