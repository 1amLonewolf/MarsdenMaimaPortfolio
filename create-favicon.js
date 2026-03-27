const fs = require('fs');
const { createCanvas, loadImage } = require('canvas');

async function createRoundedFavicon() {
  try {
    // Load the logo
    const logoPath = './public/logo.png';
    const img = await loadImage(logoPath);
    
    // Create canvas
    const size = 512;
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.clearRect(0, 0, size, size);
    
    // Create circular clipping path
    ctx.beginPath();
    ctx.arc(size/2, size/2, size/2, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();
    
    // Draw image
    ctx.drawImage(img, 0, 0, size, size);
    
    // Add border/glow effect
    ctx.beginPath();
    ctx.arc(size/2, size/2, size/2, 0, Math.PI * 2, true);
    ctx.lineWidth = 15;
    ctx.strokeStyle = '#0066ff';
    ctx.stroke();
    ctx.closePath();
    
    // Save favicon
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync('./public/favicon-rounded.png', buffer);
    console.log('✓ favicon-rounded.png created successfully!');
    
  } catch (error) {
    console.error('Error creating favicon:', error.message);
    console.log('\nNote: This script requires the "canvas" package.');
    console.log('Run: npm install canvas');
  }
}

createRoundedFavicon();
