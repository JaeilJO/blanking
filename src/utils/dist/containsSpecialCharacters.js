"use strict";
exports.__esModule = true;
function containsSpecialCharacters(inputString) {
    var regex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
    return regex.test(inputString);
}
exports["default"] = containsSpecialCharacters;
