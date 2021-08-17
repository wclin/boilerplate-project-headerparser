"use strict";
exports.__esModule = true;
exports.mainParser = exports.DefaultParser = void 0;
var DefaultParser = /** @class */ (function () {
    function DefaultParser() {
    }
    DefaultParser.prototype.parse = function (req, res) {
        var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
        res.status(200).send({
            ipaddress: ip,
            language: req.headers["accept-language"],
            software: req.headers["user-agent"]
        });
    };
    return DefaultParser;
}());
exports.DefaultParser = DefaultParser;
exports.mainParser = DefaultParser;
