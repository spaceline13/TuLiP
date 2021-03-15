"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    font-family: ", ";\n    font-size: ", ";\n    font-weight: ", "\n    color: ", ";\n    background: ", ";\n    margin-top: ", ";\n    margin-bottom: ", ";\n    margin-left: ", ";\n    margin-right: ", ";\n    padding-top: ", ";\n    padding-bottom: ", ";\n    padding-left: ", ";\n    padding-right: ", ";\n    float: ", ";\n    display: ", ";\n    overflow: ", ";\n    -webkit-line-clamp: ", ";\n    -webkit-box-orient: ", ";\n    white-space: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var fontFamily = 'sans-serif';
var textColor = '#11464f';

var Text = _styledComponents.default.div(_templateObject(), fontFamily, function (props) {
  return props.size;
}, function (props) {
  return props.weight ? props.weight : 'inherit';
}, function (props) {
  return props.color ? props.color : textColor;
}, function (props) {
  return props.background ? props.background : 'transparent';
}, function (props) {
  return props.mt;
}, function (props) {
  return props.mb;
}, function (props) {
  return props.ml;
}, function (props) {
  return props.mr;
}, function (props) {
  return props.pt;
}, function (props) {
  return props.pb;
}, function (props) {
  return props.pl;
}, function (props) {
  return props.pr;
}, function (props) {
  return props.right ? 'right' : 'initial';
}, function (props) {
  return props.truncateLines ? '-webkit-box' : props.inline ? 'inline' : 'block';
}, function (props) {
  return props.truncateLines ? 'hidden' : props.overflow ? props.overflow : 'inherit';
}, function (props) {
  return props.truncateLines ? props.truncateLines : 'none';
}, function (props) {
  return props.truncateLines ? 'vertical' : 'none';
}, function (props) {
  return props.nowrap ? 'nowrap' : 'normal';
});

var TextWithProps = function TextWithProps(props) {
  return /*#__PURE__*/_react.default.createElement(Text, props);
};

var _default = TextWithProps;
exports.default = _default;

//# sourceMappingURL=Text.js.map