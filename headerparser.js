"use strict";
exports.__esModule = true;
exports.mainParser = exports.DefaultParser = void 0;
var DefaultParser = /** @class */ (function () {
    function DefaultParser() {
    }
    DefaultParser.prototype.parse = function (req, res) {
        console.log("Hello default parser!");
        res.status(200).send({ greeting: 'hello WHO AM I' });
    };
    return DefaultParser;
}());
exports.DefaultParser = DefaultParser;
exports.mainParser = DefaultParser;
