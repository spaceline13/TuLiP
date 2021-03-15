"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TableCell = _interopRequireDefault(require("@material-ui/core/TableCell"));

var _reactVirtualized = require("react-virtualized");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _clsx2 = _interopRequireDefault(require("clsx"));

var _withStyles = _interopRequireDefault(require("@material-ui/core/styles/withStyles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return {
    flexContainer: {
      display: 'flex',
      alignItems: 'center',
      boxSizing: 'border-box'
    },
    table: {
      // temporary right-to-left patch, waiting for
      // https://github.com/bvaughn/react-virtualized/issues/454
      '& .ReactVirtualized__Table__headerRow': {
        flip: false,
        paddingRight: theme.direction === 'rtl' ? '0px !important' : undefined
      }
    },
    tableRow: {
      cursor: 'pointer'
    },
    tableRowHover: {
      '&:hover': {
        backgroundColor: theme.palette.grey[200]
      }
    },
    tableCell: {
      flex: 1
    },
    noClick: {
      cursor: 'initial'
    }
  };
};

var MuiVirtualizedTable = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(MuiVirtualizedTable, _React$PureComponent);

  var _super = _createSuper(MuiVirtualizedTable);

  function MuiVirtualizedTable() {
    var _this;

    _classCallCheck(this, MuiVirtualizedTable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "getRowClassName", function (_ref) {
      var index = _ref.index;
      var _this$props = _this.props,
          classes = _this$props.classes,
          onRowClick = _this$props.onRowClick;
      return (0, _clsx2.default)(classes.tableRow, classes.flexContainer, _defineProperty({}, classes.tableRowHover, index !== -1 && onRowClick != null));
    });

    _defineProperty(_assertThisInitialized(_this), "cellRenderer", function (_ref2) {
      var cellData = _ref2.cellData,
          columnIndex = _ref2.columnIndex;
      var _this$props2 = _this.props,
          columns = _this$props2.columns,
          classes = _this$props2.classes,
          rowHeight = _this$props2.rowHeight,
          onRowClick = _this$props2.onRowClick;
      console.log('column', columns);
      return /*#__PURE__*/_react.default.createElement(_TableCell.default, {
        component: "div",
        variant: "body",
        style: {
          height: rowHeight
        },
        align: columnIndex != null && columns[columnIndex].numeric || false ? 'right' : 'left'
      }, cellData);
    });

    _defineProperty(_assertThisInitialized(_this), "headerRenderer", function (_ref3) {
      var label = _ref3.label,
          columnIndex = _ref3.columnIndex;
      var _this$props3 = _this.props,
          headerHeight = _this$props3.headerHeight,
          columns = _this$props3.columns,
          classes = _this$props3.classes;
      console.log('header');
      return /*#__PURE__*/_react.default.createElement(_TableCell.default, {
        component: "div",
        variant: "head",
        style: {
          height: headerHeight
        },
        align: columns[columnIndex].numeric || false ? 'right' : 'left'
      }, /*#__PURE__*/_react.default.createElement("span", null, label));
    });

    return _this;
  }

  _createClass(MuiVirtualizedTable, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          classes = _this$props4.classes,
          columns = _this$props4.columns,
          rowHeight = _this$props4.rowHeight,
          headerHeight = _this$props4.headerHeight,
          tableProps = _objectWithoutProperties(_this$props4, ["classes", "columns", "rowHeight", "headerHeight"]);

      return /*#__PURE__*/_react.default.createElement(_reactVirtualized.AutoSizer, null, function (_ref4) {
        var height = _ref4.height,
            width = _ref4.width;
        return /*#__PURE__*/_react.default.createElement(_reactVirtualized.Table, _extends({
          height: height,
          width: width,
          rowHeight: rowHeight,
          gridStyle: {
            direction: 'inherit'
          },
          headerHeight: headerHeight,
          className: classes.table
        }, tableProps, {
          rowClassName: _this2.getRowClassName
        }), columns.map(function (_ref5, index) {
          var dataKey = _ref5.dataKey,
              other = _objectWithoutProperties(_ref5, ["dataKey"]);

          return /*#__PURE__*/_react.default.createElement(_reactVirtualized.Column, _extends({
            key: dataKey,
            headerRenderer: function headerRenderer(headerProps) {
              return _this2.headerRenderer(_objectSpread({}, headerProps, {
                columnIndex: index
              }));
            },
            className: classes.flexContainer,
            cellRenderer: _this2.cellRenderer,
            dataKey: dataKey
          }, other));
        }));
      });
    }
  }]);

  return MuiVirtualizedTable;
}(_react.default.PureComponent);

_defineProperty(MuiVirtualizedTable, "defaultProps", {
  headerHeight: 48,
  rowHeight: 48
});

MuiVirtualizedTable.propTypes = {
  classes: _propTypes.default.object.isRequired,
  columns: _propTypes.default.arrayOf(_propTypes.default.shape({
    dataKey: _propTypes.default.string.isRequired,
    label: _propTypes.default.string.isRequired,
    numeric: _propTypes.default.bool,
    width: _propTypes.default.number.isRequired
  })).isRequired,
  headerHeight: _propTypes.default.number,
  onRowClick: _propTypes.default.func,
  rowHeight: _propTypes.default.number
};

var _default = (0, _withStyles.default)(styles)(MuiVirtualizedTable);

exports.default = _default;

//# sourceMappingURL=VirtualizedTable.js.map