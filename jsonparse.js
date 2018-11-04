const loadJsonFile = require('load-json-file');
const _ = require('lodash');

var JsonObj = loadJsonFile.sync('data.json');

_.forEach(JsonObj, function(value) {
    console.log(value);
});