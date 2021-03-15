"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactPaginate = _interopRequireDefault(require("react-paginate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Paginator = function Paginator(_ref) {
  var currentPage = _ref.currentPage,
      totalPages = _ref.totalPages,
      handlePageClick = _ref.handlePageClick,
      pagesRange = _ref.pagesRange,
      pagesAfterBreak = _ref.pagesAfterBreak,
      extraProps = _ref.extraProps;
  // after the break and before the next button, there was the last page, we want to hide it so that the user will navigate to one page after the other
  var lastPageSelector = 'li.break + li:not(.next)';

  if (!pagesAfterBreak || pagesAfterBreak === 0) {
    var lastPageElements = window.document.getElementsByClassName(lastPageSelector);

    if (Array.isArray(lastPageElements) && lastPageElements.length > 0) {
      lastPageElements.forEach(function (element) {
        return element.hide();
      });
    }
  }

  return /*#__PURE__*/_react.default.createElement(_reactPaginate.default, _extends({
    activeClassName: 'active',
    breakLabel: /*#__PURE__*/_react.default.createElement("span", null, "..."),
    containerClassName: 'pagination',
    disableInitialCallback: true,
    forcePage: currentPage,
    marginPagesDisplayed: pagesAfterBreak ? pagesAfterBreak : 0,
    nextLabel: 'next',
    onPageChange: handlePageClick,
    pageCount: totalPages,
    pageRangeDisplayed: pagesRange ? pagesRange : 7,
    previousLabel: 'previous'
  }, extraProps, {
    subContainerClassName: 'pages pagination'
  }));
};

var _default = Paginator;
exports.default = _default;

//# sourceMappingURL=Paginator.js.map