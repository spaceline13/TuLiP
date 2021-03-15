"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display:inline-block;\n    padding: 0.1em 0.4em;\n    margin-left: 4px;\n    border: 1px solid ", ";\n    cursor: pointer;\n    border-radius: 2em;\n    box-sizing: border-box;\n    text-decoration:none;\n    font-weight:300;\n    color:#565656;\n    background-color: ", ";\n    text-align:center;\n    transition: all 0.2s;\n    &:hover{\n        background-color: ", ";\n        color: #FFFFFF;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var NiceButton = _styledComponents.default.a(_templateObject(), function (props) {
  return props.borderColor ? props.borderColor : '#84a3bd';
}, function (props) {
  return props.backgroundColor ? props.backgroundColor : '#d9edff';
}, function (props) {
  return props.hoverColor ? props.hoverColor : '#4095c6';
});

var _default = NiceButton;
exports.default = _default;

//# sourceMappingURL=NiceButton.js.map