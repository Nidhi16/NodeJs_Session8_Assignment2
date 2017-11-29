var fs = require('fs');

var upperCaseFile = function(file) {
    var data = fs.readFileSync(file, 'utf-8');
    return data.toUpperCase();
};

var upperCase = function(text) {
    return text.toUpperCase();
};

exports.upperCase = upperCase;
exports.upperCaseFile = upperCaseFile;