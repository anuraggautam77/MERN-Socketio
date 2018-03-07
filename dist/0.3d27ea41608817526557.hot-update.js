webpackHotUpdate(0,{

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(97);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Profilecard = function (_Component) {\n  _inherits(Profilecard, _Component);\n\n  function Profilecard(props) {\n    _classCallCheck(this, Profilecard);\n\n    var _this = _possibleConstructorReturn(this, (Profilecard.__proto__ || Object.getPrototypeOf(Profilecard)).call(this, props));\n\n    _this.state = {\n      name: null,\n      tagline: '',\n      taglineshow: _this.props.hasOwnProperty('tag') ? _this.props.tag : ''\n\n    };\n\n    return _this;\n  }\n\n  _createClass(Profilecard, [{\n    key: \"componentWillMount\",\n    value: function componentWillMount() {\n      var _this2 = this;\n\n      if (!this.props.hasOwnProperty('servicecall')) {\n        var id = window.localStorage.getItem('userid');\n        fetch(\"/api/getuserdetail/\" + id, { method: 'get', headers: { 'Content-Type': 'application/json' } }).then(function (res) {\n          return res.json();\n        }).then(function (json) {\n          console.log(json);\n          if (json.hasOwnProperty('list')) {\n            var obj = { 'name': json.list[0].firstName + \" \" + json.list[0].lastName };\n            if (json.list[0].hasOwnProperty('userDetail')) {\n              obj.tagline = json.list[0].userDetail.hasOwnProperty('aboutme') ? json.list[0].userDetail.aboutme.tagline : '';\n              if (json.list[0].userDetail.hasOwnProperty('professional')) {\n                obj.professional = json.list[0].userDetail.professional;\n              }\n            }\n            console.log(json.list[0].professional);\n\n            _this2.setState(obj);\n          }\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      console.log(this.state);\n      return _react2.default.createElement(\n        \"div\",\n        { className: \"card\" },\n        _react2.default.createElement(\"div\", { className: \"cardheader\" }),\n        _react2.default.createElement(\n          \"h4\",\n          { className: \"text-capitalize\" },\n          this.state.name\n        ),\n        function () {\n          if (_this3.state.hasOwnProperty('professional')) {\n            _this3.state.professional.hasOwnProperty('');\n            return _react2.default.createElement(\n              \"p\",\n              { className: \"title\" },\n              \"CEO & Founder, Example\"\n            );\n          }\n        }(),\n        _react2.default.createElement(\n          \"p\",\n          null,\n          this.state.tagline\n        )\n      );\n    }\n  }]);\n\n  return Profilecard;\n}(_react.Component);\n\nexports.default = Profilecard;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlY2FyZC5qcz81YzI1Il0sIm5hbWVzIjpbIlByb2ZpbGVjYXJkIiwicHJvcHMiLCJzdGF0ZSIsIm5hbWUiLCJ0YWdsaW5lIiwidGFnbGluZXNob3ciLCJoYXNPd25Qcm9wZXJ0eSIsInRhZyIsImlkIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJqc29uIiwiY29uc29sZSIsImxvZyIsIm9iaiIsImxpc3QiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInVzZXJEZXRhaWwiLCJhYm91dG1lIiwicHJvZmVzc2lvbmFsIiwic2V0U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVNQSxXOzs7QUFFSix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBIQUNWQSxLQURVOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsWUFBTSxJQURLO0FBRVhDLGVBQVMsRUFGRTtBQUdYQyxtQkFBYSxNQUFLSixLQUFMLENBQVdLLGNBQVgsQ0FBMkIsS0FBM0IsSUFBb0MsTUFBS0wsS0FBTCxDQUFXTSxHQUEvQyxHQUFxRDs7QUFIdkQsS0FBYjs7QUFGaUI7QUFTbEI7Ozs7eUNBRW9CO0FBQUE7O0FBRW5CLFVBQUksQ0FBQyxLQUFLTixLQUFMLENBQVdLLGNBQVgsQ0FBMkIsYUFBM0IsQ0FBTCxFQUFnRDtBQUM5QyxZQUFJRSxLQUFLQyxPQUFPQyxZQUFQLENBQW9CQyxPQUFwQixDQUE2QixRQUE3QixDQUFUO0FBQ0FDLHNDQUE2QkosRUFBN0IsRUFBbUMsRUFBQ0ssUUFBUSxLQUFULEVBQWdCQyxTQUFTLEVBQUMsZ0JBQWdCLGtCQUFqQixFQUF6QixFQUFuQyxFQUNFQyxJQURGLENBQ1E7QUFBQSxpQkFBT0MsSUFBSUMsSUFBSixFQUFQO0FBQUEsU0FEUixFQUVFRixJQUZGLENBRVEsZ0JBQVE7QUFDZEcsa0JBQVFDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBLGNBQUlBLEtBQUtYLGNBQUwsQ0FBcUIsTUFBckIsQ0FBSixFQUFrQztBQUNoQyxnQkFBSWMsTUFBTSxFQUFDLFFBQVFILEtBQUtJLElBQUwsQ0FBVSxDQUFWLEVBQWFDLFNBQWIsR0FBeUIsR0FBekIsR0FBK0JMLEtBQUtJLElBQUwsQ0FBVSxDQUFWLEVBQWFFLFFBQXJELEVBQVY7QUFDQSxnQkFBSU4sS0FBS0ksSUFBTCxDQUFVLENBQVYsRUFBYWYsY0FBYixDQUE2QixZQUE3QixDQUFKLEVBQWdEO0FBQzlDYyxrQkFBSWhCLE9BQUosR0FBY2EsS0FBS0ksSUFBTCxDQUFVLENBQVYsRUFBYUcsVUFBYixDQUF3QmxCLGNBQXhCLENBQXdDLFNBQXhDLElBQXFEVyxLQUFLSSxJQUFMLENBQVUsQ0FBVixFQUFhRyxVQUFiLENBQXdCQyxPQUF4QixDQUFnQ3JCLE9BQXJGLEdBQStGLEVBQTdHO0FBQ0Msa0JBQUlhLEtBQUtJLElBQUwsQ0FBVSxDQUFWLEVBQWFHLFVBQWIsQ0FBd0JsQixjQUF4QixDQUF3QyxjQUF4QyxDQUFKLEVBQTZEO0FBQzlEYyxvQkFBSU0sWUFBSixHQUFtQlQsS0FBS0ksSUFBTCxDQUFVLENBQVYsRUFBYUcsVUFBYixDQUF3QkUsWUFBM0M7QUFDRDtBQUNBO0FBQ0RSLG9CQUFRQyxHQUFSLENBQVlGLEtBQUtJLElBQUwsQ0FBVSxDQUFWLEVBQWFLLFlBQXpCOztBQUVBLG1CQUFLQyxRQUFMLENBQWVQLEdBQWY7QUFDRDtBQUNGLFNBaEJEO0FBaUJEO0FBQ0Y7Ozs2QkFFUTtBQUFBOztBQUNYRixjQUFRQyxHQUFSLENBQVksS0FBS2pCLEtBQWpCO0FBQ0UsYUFDTTtBQUFBO0FBQUEsVUFBSyxXQUFVLE1BQWY7QUFDRSwrQ0FBSyxXQUFVLFlBQWYsR0FERjtBQUVFO0FBQUE7QUFBQSxZQUFJLFdBQVUsaUJBQWQ7QUFBaUMsZUFBS0EsS0FBTCxDQUFXQztBQUE1QyxTQUZGO0FBSUssb0JBQUk7QUFDRixjQUFJLE9BQUtELEtBQUwsQ0FBV0ksY0FBWCxDQUEwQixjQUExQixDQUFKLEVBQStDO0FBQzVDLG1CQUFLSixLQUFMLENBQVd3QixZQUFYLENBQXdCcEIsY0FBeEIsQ0FBd0MsRUFBeEM7QUFDSyxtQkFBUTtBQUFBO0FBQUEsZ0JBQUcsV0FBVSxPQUFiO0FBQUE7QUFBQSxhQUFSO0FBQ0E7QUFDVCxTQUxGLEVBSko7QUFhRTtBQUFBO0FBQUE7QUFBSSxlQUFLSixLQUFMLENBQVdFO0FBQWY7QUFiRixPQUROO0FBa0JDOzs7Ozs7a0JBSVlKLFciLCJmaWxlIjoiOTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuLi8uLi9zdHlsZS9jc3MvcHJvZmlsZWNhcmQuc2Nzc1wiO1xuXG5jbGFzcyBQcm9maWxlY2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlciAocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuYW1lOiBudWxsLFxuICAgICAgdGFnbGluZTogJycsXG4gICAgICB0YWdsaW5lc2hvdzogdGhpcy5wcm9wcy5oYXNPd25Qcm9wZXJ0eSAoJ3RhZycpID8gdGhpcy5wcm9wcy50YWcgOiAnJ1xuICAgICAgXG4gICAgfTtcblxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuXG4gICAgaWYgKCF0aGlzLnByb3BzLmhhc093blByb3BlcnR5ICgnc2VydmljZWNhbGwnKSkge1xuICAgICAgdmFyIGlkID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtICgndXNlcmlkJyk7XG4gICAgICBmZXRjaCAoYC9hcGkvZ2V0dXNlcmRldGFpbC8ke2lkfWAsIHttZXRob2Q6ICdnZXQnLCBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ319XG4gICAgICApLnRoZW4gKHJlcyA9PiByZXMuanNvbiAoKVxuICAgICAgKS50aGVuIChqc29uID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coanNvbilcbiAgICAgICAgaWYgKGpzb24uaGFzT3duUHJvcGVydHkgKCdsaXN0JykpIHtcbiAgICAgICAgICB2YXIgb2JqID0geyduYW1lJzoganNvbi5saXN0WzBdLmZpcnN0TmFtZSArIFwiIFwiICsganNvbi5saXN0WzBdLmxhc3ROYW1lfVxuICAgICAgICAgIGlmIChqc29uLmxpc3RbMF0uaGFzT3duUHJvcGVydHkgKCd1c2VyRGV0YWlsJykpIHtcbiAgICAgICAgICAgIG9iai50YWdsaW5lID0ganNvbi5saXN0WzBdLnVzZXJEZXRhaWwuaGFzT3duUHJvcGVydHkgKCdhYm91dG1lJykgPyBqc29uLmxpc3RbMF0udXNlckRldGFpbC5hYm91dG1lLnRhZ2xpbmUgOiAnJ1xuICAgICAgICAgICAgIGlmIChqc29uLmxpc3RbMF0udXNlckRldGFpbC5oYXNPd25Qcm9wZXJ0eSAoJ3Byb2Zlc3Npb25hbCcpKSB7XG4gICAgICAgICAgICBvYmoucHJvZmVzc2lvbmFsID0ganNvbi5saXN0WzBdLnVzZXJEZXRhaWwucHJvZmVzc2lvbmFsO1xuICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc29sZS5sb2coanNvbi5saXN0WzBdLnByb2Zlc3Npb25hbClcbiAgICAgICAgIFxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUgKG9iaik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbmNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRoZWFkZXJcIj48L2Rpdj5cbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1jYXBpdGFsaXplXCI+e3RoaXMuc3RhdGUubmFtZX08L2g0PlxuICAgICAgICAgXG4gICAgICAgICAgIHsoKCk9PntcbiAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmhhc093blByb3BlcnR5KCdwcm9mZXNzaW9uYWwnKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5wcm9mZXNzaW9uYWwuaGFzT3duUHJvcGVydHkgKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPkNFTyAmIEZvdW5kZXIsIEV4YW1wbGU8L3A+KVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICB9KSgpfSBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICBcbiAgICAgICAgICA8cD57dGhpcy5zdGF0ZS50YWdsaW5lfTwvcD5cbiAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gIH1cbiAgO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlY2FyZDtcblxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGVjYXJkLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///96\n");

/***/ })

})