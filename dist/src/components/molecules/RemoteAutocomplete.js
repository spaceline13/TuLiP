"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _muiDownshift = _interopRequireDefault(require("mui-downshift"));

var _react = _interopRequireDefault(require("react"));

var _useDebouncedFetch2 = _interopRequireDefault(require("../../utils/hooks/useDebouncedFetch"));

var _Text = _interopRequireDefault(require("../atoms/Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// The component is set to read from API the response as seen bellow:
// obj(response) -> obj(hits) -> array(hits) => object(item => item._source) -> string(title)
// for any changes, you have to change the items prop
var RemoteAutocomplete = function RemoteAutocomplete(_ref) {
  var key = _ref.key,
      onSelect = _ref.onSelect,
      asyncFetchFunction = _ref.asyncFetchFunction,
      placeholder = _ref.placeholder,
      reference = _ref.reference,
      hasAddNew = _ref.hasAddNew,
      variant = _ref.variant,
      customListHandler = _ref.customListHandler,
      hasHierarchy = _ref.hasHierarchy;

  var _useDebouncedFetch = (0, _useDebouncedFetch2.default)(asyncFetchFunction, true),
      inputText = _useDebouncedFetch.inputText,
      setInputText = _useDebouncedFetch.setInputText,
      search = _useDebouncedFetch.search;

  return /*#__PURE__*/_react.default.createElement(_muiDownshift.default, {
    key: key,
    ref: reference,
    variant: variant ? variant : 'standard',
    getRootProps: function getRootProps() {
      return {
        style: {
          zIndex: 1
        }
      };
    },
    getListItem: function getListItem(_ref2) {
      var getItemProps = _ref2.getItemProps,
          item = _ref2.item;
      return item ? item.addnew ?
      /*#__PURE__*/
      // the 'add new option'
      _react.default.createElement(_ListItem.default, _extends({
        key: 'addNew',
        button: true
      }, getItemProps(item), {
        style: {
          backgroundColor: '#ccc'
        }
      }), /*#__PURE__*/_react.default.createElement(_ListItemText.default, {
        primary: /*#__PURE__*/_react.default.createElement("span", {
          style: {
            fontStyle: 'italic'
          }
        }, "Add new item")
      })) :
      /*#__PURE__*/
      // the actual options
      _react.default.createElement(_ListItem.default, _extends({
        key: item.title,
        button: true
      }, getItemProps(item)), hasHierarchy ? /*#__PURE__*/_react.default.createElement(_Text.default, {
        inline: true
      }, item.parents.map(function (parent) {
        return /*#__PURE__*/_react.default.createElement(_Text.default, {
          inline: true,
          color: 'grey'
        }, parent, " > ");
      }), " ", /*#__PURE__*/_react.default.createElement(_Text.default, {
        inline: true,
        color: 'black',
        dangerouslySetInnerHTML: {
          __html: item.title.replace(inputText, '<b>' + inputText + '</b>')
        }
      })) : /*#__PURE__*/_react.default.createElement(_ListItemText.default, {
        primary: /*#__PURE__*/_react.default.createElement("span", {
          dangerouslySetInnerHTML: {
            __html: item.title.replace(inputText, '<b>' + inputText + '</b>')
          }
        }),
        secondary: item.secondaryDataToDisplay ? item.secondaryDataToDisplay : ''
      })) : search.loading ?
      /*#__PURE__*/
      // the 'is loading' label
      _react.default.createElement(_ListItem.default, {
        key: 'loading',
        button: true,
        disabled: true
      }, /*#__PURE__*/_react.default.createElement(_ListItemText.default, {
        primary: /*#__PURE__*/_react.default.createElement("span", {
          style: {
            fontStyle: 'italic'
          }
        }, "Loading...")
      })) :
      /*#__PURE__*/
      // the 'no items' label
      _react.default.createElement(_ListItem.default, {
        key: 'noItems',
        button: true,
        disabled: true
      }, /*#__PURE__*/_react.default.createElement(_ListItemText.default, {
        primary: /*#__PURE__*/_react.default.createElement("span", {
          style: {
            fontStyle: 'italic'
          }
        }, "No items found")
      }));
    },
    includeFooter: true,
    items: search.result ? // if custom list reorder
    customListHandler ? hasAddNew && inputText.length > 0 ? [{
      title: inputText,
      addnew: true
    }].concat(_toConsumableArray(customListHandler(search.result.hits.hits))) : search.result.hits.hits.map(function (item) {
      return item._source;
    }) : // that's the standard order (if no custom list reorder function is provided)
    hasAddNew && inputText.length > 0 ? [{
      title: inputText,
      addnew: true
    }].concat(_toConsumableArray(search.result.hits.hits.map(function (item) {
      return item._source;
    }))) : search.result.hits.hits.map(function (item) {
      return item._source;
    }) : [],
    itemToString: function itemToString(item) {
      return item ? item.title : '';
    },
    loading: search.loading,
    showEmpty: true,
    onChange: onSelect,
    getInputProps: function getInputProps() {
      return {
        label: placeholder ? placeholder : 'Search for Supplier'
      };
    },
    onStateChange: /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(changes) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (typeof changes.inputValue === 'string') {
                  setInputText(changes.inputValue);
                }

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }()
  });
};

var _default = RemoteAutocomplete;
exports.default = _default;

//# sourceMappingURL=RemoteAutocomplete.js.map