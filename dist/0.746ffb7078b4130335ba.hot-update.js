webpackHotUpdate(0,{

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _profilecard = __webpack_require__(96);\n\nvar _profilecard2 = _interopRequireDefault(_profilecard);\n\nvar _listing = __webpack_require__(40);\n\nvar _listing2 = _interopRequireDefault(_listing);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Landing = function (_Component) {\n  _inherits(Landing, _Component);\n\n  function Landing(props) {\n    _classCallCheck(this, Landing);\n\n    var _this = _possibleConstructorReturn(this, (Landing.__proto__ || Object.getPrototypeOf(Landing)).call(this, props));\n\n    _this.state = {\n      currentuser: window.localStorage.getItem('userid')\n    };\n    return _this;\n  }\n\n  _createClass(Landing, [{\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      return _react2.default.createElement(\n        'div',\n        { className: 'main-landing row content' },\n        function () {\n          if (_this2.state.currentuser) {\n            return _react2.default.createElement(\n              'div',\n              { className: 'landing-page' },\n              _react2.default.createElement(\n                'div',\n                { className: 'col-md-3 col-sm-6 proilecard' },\n                _react2.default.createElement(_profilecard2.default, null)\n              ),\n              _react2.default.createElement(\n                'div',\n                { className: 'col-md-7 col-sm-6' },\n                _react2.default.createElement(_listing2.default, { forall: 'true' })\n              ),\n              _react2.default.createElement(\n                'div',\n                { className: 'col-md-2 col-sm-6 proilecard' },\n                _react2.default.createElement(_profilecard2.default, null)\n              )\n            );\n          } else {\n            return _react2.default.createElement(\n              'div',\n              null,\n              _react2.default.createElement(\n                'div',\n                { className: 'col-md-8 col-sm-8' },\n                '2'\n              ),\n              _react2.default.createElement(\n                'div',\n                { className: 'col-md-4 col-sm-4' },\n                _react2.default.createElement(_listing2.default, { forall: 'true' })\n              )\n            );\n          }\n        }()\n      );\n    }\n  }]);\n\n  return Landing;\n}(_react.Component);\n\n;\n\nexports.default = Landing;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL0NvbnRhaW5lcnMvbGFuZGluZy5qcz9kOGEyIl0sIm5hbWVzIjpbIkxhbmRpbmciLCJwcm9wcyIsInN0YXRlIiwiY3VycmVudHVzZXIiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ01BLE87OztBQUVOLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsa0hBQ1pBLEtBRFk7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNiQyxtQkFBYUMsT0FBT0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNkIsUUFBN0I7QUFEQSxLQUFiO0FBRmlCO0FBS2xCOzs7OzZCQUVRO0FBQUE7O0FBQ1QsYUFDQTtBQUFBO0FBQUEsVUFBSyxXQUFVLDBCQUFmO0FBR0csb0JBQU07QUFDUCxjQUFJLE9BQUtKLEtBQUwsQ0FBV0MsV0FBZixFQUE0QjtBQUM1QixtQkFDQTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxjQUFmO0FBQ0U7QUFBQTtBQUFBLGtCQUFLLFdBQVUsOEJBQWY7QUFDRztBQURILGVBREY7QUFJRTtBQUFBO0FBQUEsa0JBQUssV0FBVSxtQkFBZjtBQUNJLG1FQUFTLFFBQU8sTUFBaEI7QUFESixlQUpGO0FBT0U7QUFBQTtBQUFBLGtCQUFLLFdBQVUsOEJBQWY7QUFDSTtBQURKO0FBUEYsYUFEQTtBQWFDLFdBZEQsTUFjSztBQUNILG1CQUNGO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxrQkFBSyxXQUFVLG1CQUFmO0FBQUE7QUFBQSxlQURGO0FBSUU7QUFBQTtBQUFBLGtCQUFLLFdBQVUsbUJBQWY7QUFDSyxtRUFBUyxRQUFPLE1BQWhCO0FBREw7QUFKRixhQURFO0FBVUQ7QUFFQSxTQTVCRDtBQUhGLE9BREE7QUFzQ0M7Ozs7OztBQUVEOztrQkFFZUgsTyIsImZpbGUiOiI5NS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBQcm9maWxlY2FyZCBmcm9tICcuLi9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZWNhcmQnO1xuaW1wb3J0IExpc3RpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9teXBvc3QvbGlzdGluZyc7XG5jbGFzcyBMYW5kaW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuY29uc3RydWN0b3IocHJvcHMpIHtcbnN1cGVyIChwcm9wcyk7XG4gIHRoaXMuc3RhdGUgPSB7XG4gIGN1cnJlbnR1c2VyOiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0gKCd1c2VyaWQnKVxuICB9O1xufVxuXG5yZW5kZXIoKSB7XG5yZXR1cm4gKFxuPGRpdiBjbGFzc05hbWU9XCJtYWluLWxhbmRpbmcgcm93IGNvbnRlbnRcIj5cblxuICB7XG4gICgoKSA9PiB7XG4gIGlmICh0aGlzLnN0YXRlLmN1cnJlbnR1c2VyKSB7XG4gIHJldHVybiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwibGFuZGluZy1wYWdlXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMyBjb2wtc20tNiBwcm9pbGVjYXJkXCI+IFxuICAgICAgIDxQcm9maWxlY2FyZC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNyBjb2wtc20tNlwiPlxuICAgICAgICA8TGlzdGluZyBmb3JhbGw9XCJ0cnVlXCIvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTIgY29sLXNtLTYgcHJvaWxlY2FyZFwiPlxuICAgICAgICA8UHJvZmlsZWNhcmQvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgKTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIChcbiAgPGRpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04IGNvbC1zbS04XCI+XG4gICAgICAyXG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBjb2wtc20tNFwiPiBcbiAgICAgICAgIDxMaXN0aW5nIGZvcmFsbD1cInRydWVcIi8+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICAgICAgKTtcbiAgfVxuXG4gIH0pKClcbiAgfVxuPC9kaXY+XG5cblxuICAgICk7XG59XG59XG47XG5cbmV4cG9ydCBkZWZhdWx0IExhbmRpbmc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL0NvbnRhaW5lcnMvbGFuZGluZy5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///95\n");

/***/ })

})