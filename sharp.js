const sharp = require('sharp');
const fs = require('fs');
const directory = './public/img';

fs.readdirSync(directory).forEach(file => {
  sharp(`${directory}/${file}`)
    .resize(200, 200)
    .toFile(`${directory}/small-${file}`);
  });