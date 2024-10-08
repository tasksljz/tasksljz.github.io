import fs from "node:fs";
import path from "node:path";

// 确保 build 目录存在
const buildDir = './build';
if (!fs.existsSync(buildDir)) {
    fs.mkdirSync(buildDir);
}

// 在 build 目录下创建文件
const filePath = path.join(buildDir, 'dev.txt');
fs.writeFileSync(filePath, 'Zeg Hoi', 'utf8');

console.log(`File created at: ${filePath}`);
