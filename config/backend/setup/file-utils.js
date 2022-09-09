const fs = require('fs');
const fsp = fs.promises;
const axios = require('axios');
const path = require('path');

async function downloadImage(url, fullPath) {
  return new Promise((resolve, reject) => {
    axios({
      url,
      responseType: 'stream',
    }).then(response =>
      response.data
        .pipe(fs.createWriteStream(fullPath))
        .on('finish', () => {
          resolve();
        })
        .on('error', e => reject(e))
    );
  });
}

module.exports = {
  getFileSizeInBytes: async function (filePath) {
    const stats = fs.statSync(filePath);
    const fileSizeInBytes = stats['size'];
    return fileSizeInBytes;
  },
  getFileData: function (file) {
    return new Promise(async resolve => {
      if (!file.data || !file.data.attributes) {
        resolve(null);
      }
      let attributes = file.data.attributes;
      let uploadsPath = 'data/uploads';
      let filePath = `./../../${uploadsPath}`;
      const fullPath = path.resolve(__dirname, filePath);
      const fileName = `${attributes.name}.${attributes.ext}`;
      const imagePath = `${attributes.path}/${fileName}`;
      if (!fs.existsSync(fullPath + imagePath)) {
        fsp.mkdir(fullPath + attributes.path, {recursive: true});
      }
      let url = `https://raw.githubusercontent.com/builtjs/builtjs-theme-events-tailwind/main/public${imagePath}`;
      await downloadImage(url, fullPath + imagePath);
      const size = await this.getFileSizeInBytes(fullPath);
      const mimeType = `image/${
        attributes.ext === 'svg' ? 'svg+xml' : attributes.ext
      }`;
      resolve({
        path: `./${uploadsPath}${imagePath}`,
        name: fileName,
        size,
        type: mimeType,
      });
    });
  },
  getFilesData: async function (files) {
    const fileData = {};
    if (!files) {
      return fileData;
    }
    let filesArr = Object.values(files);
    let keysArr = Object.keys(files);
    if (filesArr && filesArr.length) {
      for (let i = 0; i < filesArr.length; i++) {
        const file = filesArr[i];
        if (file.data && file.data.attributes) {
          fileData[keysArr[i]] = await this.getFileData(file);
        }
      }
    }
    return fileData;
  },
  set(obj, path, value) {
    if (Object(obj) !== obj) return obj; // When obj is not an object
    // If not yet an array, get the keys from the string-path
    if (!Array.isArray(path)) path = path.toString().match(/[^.[\]]+/g) || [];
    path.slice(0, -1).reduce(
      (
        a,
        c,
        i // Iterate all of them except the last one
      ) =>
        Object(a[c]) === a[c] // Does the key exist and is its value an object?
          ? // Yes: then follow that path
            a[c]
          : // No: create the key. Is the next key a potential array-index?
            (a[c] =
              Math.abs(path[i + 1]) >> 0 === +path[i + 1]
                ? [] // Yes: assign a new array object
                : {}), // No: assign a new plain object
      obj
    )[path[path.length - 1]] = value; // Finally assign the value to the last key
    return obj; // Return the top-level object to allow chaining
  },
};
