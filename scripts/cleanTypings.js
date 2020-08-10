const path = require('path');
const fs = require('fs');

const paths = [path.resolve('dist'), path.resolve('es')];

paths.forEach(async (dirPath, index) => {
  const libFiles = await fs.promises.readdir(dirPath);
  libFiles.forEach(async (file) => {
    if (file.endsWith('.d.ts')) {
      await fs.promises.unlink(path.join(dirPath, file));
    }
  });
});
