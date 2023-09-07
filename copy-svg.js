const fs = require('fs');
const path = require('path');

const sourceDir = 'src/images';
const destDir = 'dist/images'; 

// Ensure the destination directory exists
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Copy SVG files from the source directory to the destination directory
const svgFiles = fs.readdirSync(sourceDir).filter((file) => file.endsWith('.svg'));

svgFiles.forEach((file) => {
  const sourcePath = path.join(sourceDir, file);
  const destPath = path.join(destDir, file);
  fs.copyFileSync(sourcePath, destPath);
});

console.log('SVG files copied successfully.');
