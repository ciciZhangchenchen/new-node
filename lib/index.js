"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var sum = exports.sum = function sum(a, b) {
  return a + b;
};

var Fo = function () {
  function Fo() {
    _classCallCheck(this, Fo);

    this.count = 0;
  }

  _createClass(Fo, [{
    key: "add",
    value: function add() {
      this.count++;
    }
  }, {
    key: "minus",
    value: function minus() {
      this.count++;
    }
  }]);

  return Fo;
}();

var query = function query() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("time out");
    }, 3000);
  });
};
var f = new Fo();
f.add();
f.add();
f.add();
var q = query();
q.then(function (res) {
  console.log(res);
});
console.log(f);