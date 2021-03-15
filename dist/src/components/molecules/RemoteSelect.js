"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@material-ui/core");

var _react = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _Text = _interopRequireDefault(require("../atoms/Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var RemoteSelect = function RemoteSelect(_ref) {
  var item = _ref.item,
      onChange = _ref.onChange,
      searchForAnnotations = _ref.searchForAnnotations;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      enableMapping = _useState2[0],
      setEnableMapping = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      items = _useState4[0],
      setItems = _useState4[1];

  var ref = (0, _react.useRef)();

  var handleChange = function handleChange(event) {
    onChange(item, event.target.value);
  };

  var handleMapping = function handleMapping() {
    setEnableMapping(true);
    searchForAnnotations(item.original, function (res) {
      setItems(res);
    });
  };

  if (item.foodakai) {
    return /*#__PURE__*/_react.default.createElement(_Text.default, {
      inline: true,
      ml: '4px',
      mr: '4px'
    }, item.foodakai);
  } else if (enableMapping) {
    //fetch items
    return /*#__PURE__*/_react.default.createElement(_core.Select, {
      ref: ref,
      autoWidth: true,
      displayEmpty: true,
      value: item.foodakai,
      onChange: handleChange
    }, items.map(function (suggestion, i) {
      return /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
        key: i,
        value: suggestion.label
      }, suggestion.label);
    }));
  } else {
    return /*#__PURE__*/_react.default.createElement(_Button.default, {
      onClick: handleMapping
    }, "Set Mapping");
  }
};

var _default = RemoteSelect;
exports.default = _default;

//# sourceMappingURL=RemoteSelect.js.map