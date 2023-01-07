(function () {
    "use strict";
    var gamecubeSoftList = require("../data/soft_list");

    if (typeof define === "function" && define.amd) {
        define(function () {
            return gamecubeSoftList;
        });
    } else if (typeof module !== "undefined" && module.exports) {
        module.exports = gamecubeSoftList;
    } else {
        window.gameSoft = {
            NGP: gamecubeSoftList,
        };
    }
})();
