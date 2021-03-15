"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _muiDownshift = _interopRequireDefault(require("mui-downshift"));

var _Text = _interopRequireDefault(require("../atoms/Text"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _RestrictedLengthChip = _interopRequireDefault(require("../atoms/RestrictedLengthChip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var LocalAutocompleteMulti = function LocalAutocompleteMulti(_ref) {
  var items = _ref.items,
      selected = _ref.selected,
      onSelect = _ref.onSelect,
      placeholder = _ref.placeholder,
      primaryItemOpt = _ref.primaryItemOpt,
      secondaryItemOpt = _ref.secondaryItemOpt,
      formatNumbers = _ref.formatNumbers,
      hasHierarchy = _ref.hasHierarchy;

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      inputValue = _useState2[0],
      setInputValue = _useState2[1];

  var _useState3 = (0, _react.useState)(items),
      _useState4 = _slicedToArray(_useState3, 2),
      filteredItems = _useState4[0],
      setFilteredItems = _useState4[1];

  var _useState5 = (0, _react.useState)(selected ? selected : []),
      _useState6 = _slicedToArray(_useState5, 2),
      selectedItems = _useState6[0],
      setSelectedItems = _useState6[1];

  var handleChange = function handleChange(item, downshiftProps) {
    var tmpSelected = [].concat(_toConsumableArray(selectedItems), [item]);
    setSelectedItems(tmpSelected);
    if (onSelect) onSelect(tmpSelected);
    downshiftProps.openMenu();
    setInputValue('');
    setFilteredItems(items);
  };

  var handleInputChange = function handleInputChange(event) {
    var value = event.target.value;
    var filtered = items.filter(function (item) {
      return item[primaryItemOpt].toLowerCase().includes(value.toLowerCase());
    });
    setFilteredItems(filtered);
    setInputValue(value);
  };

  var handleDelete = function handleDelete(item) {
    var tmpSelected = selectedItems.filter(function (it) {
      return it[primaryItemOpt] !== item[primaryItemOpt];
    });
    setSelectedItems(tmpSelected);
    if (onSelect) onSelect(tmpSelected);
  };

  var inputProps = function inputProps() {
    return {
      onChange: handleInputChange,
      startAdornment: selectedItems.map(function (item) {
        return /*#__PURE__*/_react.default.createElement(_RestrictedLengthChip.default, {
          key: item[primaryItemOpt],
          label: item[primaryItemOpt],
          onDelete: function onDelete() {
            return handleDelete(item);
          }
        });
      }),
      endAdornment: null,
      label: placeholder,
      style: {
        flexWrap: 'wrap'
      }
    };
  };

  var getListItem = function getListItem(_ref2) {
    var getItemProps = _ref2.getItemProps,
        item = _ref2.item;
    return item ? /*#__PURE__*/_react.default.createElement(_ListItem.default, _extends({
      button: true
    }, getItemProps(), {
      disabled: selectedItems.includes(item)
    }), hasHierarchy ? /*#__PURE__*/_react.default.createElement(_Text.default, {
      inline: true
    }, item.parents && item.parents.map(function (parent) {
      return /*#__PURE__*/_react.default.createElement("span", null, parent, " > ");
    }), " ", /*#__PURE__*/_react.default.createElement("b", null, item.label)) : /*#__PURE__*/_react.default.createElement(_Box.default, null, /*#__PURE__*/_react.default.createElement(_Text.default, {
      inline: true
    }, item[primaryItemOpt]), "\xA0", secondaryItemOpt && /*#__PURE__*/_react.default.createElement(_Text.default, {
      inline: true,
      color: 'grey'
    }, "(", formatNumbers ? formatNumbers(item[secondaryItemOpt]) : item[secondaryItemOpt], ")"))) : /*#__PURE__*/_react.default.createElement(_ListItem.default, {
      button: true,
      disabled: true
    }, /*#__PURE__*/_react.default.createElement(_ListItemText.default, {
      primary: /*#__PURE__*/_react.default.createElement("span", {
        style: {
          fontStyle: 'italic'
        }
      }, "No items found")
    }));
  };

  return /*#__PURE__*/_react.default.createElement(_muiDownshift.default, {
    getInputProps: inputProps,
    getListItem: getListItem,
    itemToString: function itemToString(item) {
      return item ? hasHierarchy ? item.value : item[primaryItemOpt] : '';
    },
    inputValue: inputValue,
    items: filteredItems,
    showEmpty: true,
    onChange: handleChange
  });
};

var _default = LocalAutocompleteMulti;
exports.default = _default;

//# sourceMappingURL=LocalAutocompleteMulti.js.map