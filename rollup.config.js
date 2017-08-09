const fs = require('fs');

const license = fs.readFileSync('./LICENSE');

const configuration = {
  entry: 'src/quantities.js',
  format: 'umd',
  dest: 'build/quantities.js',
  moduleName: 'Qty',
  banner: `/*\n${license}*/\n`,
  external: ['ejson'],
  globals : {
    ejson: "../../ejson"
  }
};

export default configuration;
