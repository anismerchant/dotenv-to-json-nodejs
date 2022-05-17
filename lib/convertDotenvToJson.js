const { promises: fs } = require('fs');
const path = require('path');

/**
 * Expose `convertDotenvToJson`
 */
module.exports = {
  dotenvTojson: convertDotenvToJson,
};

/**
 * Convert Dotevn to JSON
 */
async function convertDotenvToJson() {
  try {
    const buffer = await fs.readFile(path.join(__dirname, '..', '..', '..', '.env'), 'binary');
    const data = new Buffer.from(buffer);
  
    // convert key/value pair into an array
    const arr = data.toString().split('\n');
    let obj = {};
  
    for (keyValue of arr) {
      const replaceEqualWithColon = keyValue.toString().replace('=', ':').split('\n');
  
      // split each each key/value pair into its own array
      const convertEachKeyValuePairIntoArr = replaceEqualWithColon.toString().split(/:(.*)/s);
      
      // update object with each key/value pair
      obj[convertEachKeyValuePairIntoArr[0]] = convertEachKeyValuePairIntoArr[1];
    }
  
    // save json in a file 
    await fs.writeFile('envVariables.json', `${JSON.stringify(obj)}`, function (err) {
      if (err) throw err;
    });
  } catch (error) {
    console.log(error);
  }
};
