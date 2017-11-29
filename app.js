var fs = require('fs');

var upperCaseFile = function(file) {
    fs.readFile(file, function(error, data){
        return data;
    });
    return data.toUpperCase();
};

var upperCase = function(text) {
    return text.toUpperCase();
};

exports.upperCaseFile = upperCaseFile;
exports.upperCase = upperCase;