const cypressTypeScriptPreprocessor = require('./cy-ts-preprocessor');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const moment = require('moment');

module.exports = (on, config) => {
  on('file:preprocessor', cypressTypeScriptPreprocessor);

  on('task', {
    log(message) {
      console.log(moment().format('YYYY-MM-DD HH:mm:ss,SSS') + ' :: ' + message);
      return null;
    }
  });

  allureWriter(on, config);
};
