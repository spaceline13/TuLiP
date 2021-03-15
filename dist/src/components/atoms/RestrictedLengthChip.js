"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.truncateString = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Chip = _interopRequireDefault(require("@material-ui/core/Chip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var truncateString = function truncateString(string) {
  var maxLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
  if (!string) return null;
  var showDots = string.length > maxLength;
  return "".concat(string.substring(0, maxLength)).concat(showDots ? '...' : '');
};

exports.truncateString = truncateString;

var RestrictedLengthChip = function RestrictedLengthChip(_ref) {
  var label = _ref.label,
      onDelete = _ref.onDelete;
  var cutLabel = truncateString(label, 30);
  var ref = (0, _react.useRef)();

  var handleDelete = function handleDelete() {
    //$(ref.current).tooltip('hide');
    onDelete();
  };

  return /*#__PURE__*/_react.default.createElement("a", {
    "data-placement": 'top',
    "data-toggle": label.length >= 30 ? 'tooltip' : null,
    "data-trigger": "hover",
    title: label,
    ref: ref,
    style: {
      padding: '2px'
    }
  }, /*#__PURE__*/_react.default.createElement(_Chip.default, {
    key: label,
    tabIndex: -1,
    label: cutLabel,
    onDelete: handleDelete
  }));
};

var _default = RestrictedLengthChip;
exports.default = _default;

//# sourceMappingURL=RestrictedLengthChip.js.map