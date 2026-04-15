import fs from "node:fs/promises";
import path from "node:path";

const distDir = path.resolve("dist");
const filePath = path.join(distDir, ".assetsignore");

const content = [
  "_worker.js",
  "_routes.json",
  "_headers",
  "_redirects",
].join("\n") + "\n";

await fs.mkdir(distDir, { recursive: true });
await fs.writeFile(filePath, content, "utf8");