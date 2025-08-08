import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Copy dist files to docs folder for GitHub Pages
const distPath = path.join(__dirname, 'dist');
const docsPath = path.join(__dirname, 'docs');

// Create docs directory if it doesn't exist
if (!fs.existsSync(docsPath)) {
  fs.mkdirSync(docsPath);
}

// Copy all files from dist to docs
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest);
  }
  
  const files = fs.readdirSync(src);
  files.forEach(file => {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);
    
    if (fs.statSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

copyDir(distPath, docsPath);
console.log('Files copied to docs folder for GitHub Pages deployment');
