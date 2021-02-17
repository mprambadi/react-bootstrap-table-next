(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["ReactBootstrapTable2"] = factory(require("react"), require("react-dom"));
	else
		root["ReactBootstrapTable2"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_21__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var ReactIs = require('react-is');

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(28)();
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _underscore = __webpack_require__(34);

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function splitNested(str) {
  return [str].join('.').replace(/\[/g, '.').replace(/\]/g, '').split('.');
} /* eslint no-empty: 0 */
/* eslint no-param-reassign: 0 */
/* eslint prefer-rest-params: 0 */


function contains(list, value) {
  if (_underscore2.default.includes) {
    return _underscore2.default.includes(list, value);
  }

  return list.indexOf(value) > -1;
}

function get(target, field) {
  if (!target) {
    return;
  }

  var directGet = target[field];
  if (directGet !== undefined && directGet !== null) {
    return directGet;
  }

  var pathArray = splitNested(field);
  var result = void 0;
  try {
    result = pathArray.reduce(function (curr, path) {
      return curr[path];
    }, target);
  } catch (e) {}
  return result;
}

function set(target, field, value) {
  var safe = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  var pathArray = splitNested(field);
  var level = 0;
  pathArray.reduce(function (a, b) {
    level += 1;
    if (typeof a[b] === 'undefined') {
      if (!safe) throw new Error(a + '.' + b + ' is undefined');
      a[b] = {};
      return a[b];
    }

    if (level === pathArray.length) {
      a[b] = value;
      return value;
    }
    return a[b];
  }, target);
}

function isEmptyObject(obj) {
  if (!_underscore2.default.isObject(obj)) return false;

  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var keys = Object.keys(obj);

  for (var i = 0; i < keys.length; i += 1) {
    if (hasOwnProperty.call(obj, keys[i])) return false;
  }

  return true;
}

function isDefined(value) {
  return typeof value !== 'undefined' && value !== null;
}

function sleep(fn, ms) {
  return setTimeout(function () {
    return fn();
  }, ms);
}

function debounce(func, wait, immediate) {
  var _this = this,
      _arguments = arguments;

  var timeout = void 0;

  return function () {
    var later = function later() {
      timeout = null;

      if (!immediate) {
        func.apply(_this, _arguments);
      }
    };

    var callNow = immediate && !timeout;

    clearTimeout(timeout);
    timeout = setTimeout(later, wait || 0);

    if (callNow) {
      func.apply(_this, _arguments);
    }
  };
}

exports.default = Object.assign(_underscore2.default, {
  get: get,
  set: set,
  isDefined: isDefined,
  isEmptyObject: isEmptyObject,
  sleep: sleep,
  debounce: debounce,
  contains: contains
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  SORT_ASC: 'asc',
  SORT_DESC: 'desc',
  ROW_SELECT_SINGLE: 'radio',
  ROW_SELECT_MULTIPLE: 'checkbox',
  ROW_SELECT_DISABLED: 'ROW_SELECT_DISABLED',
  CHECKBOX_STATUS_CHECKED: 'checked',
  CHECKBOX_STATUS_INDETERMINATE: 'indeterminate',
  CHECKBOX_STATUS_UNCHECKED: 'unchecked',
  INDICATOR_POSITION_LEFT: 'left',
  INDICATOR_POSITION_RIGHT: 'right',
  TYPE_STRING: 'string',
  TYPE_NUMBER: 'number',
  TYPE_BOOLEAN: 'bool',
  TYPE_DATE: 'date',
  FILTERS_POSITION_INLINE: 'inline',
  FILTERS_POSITION_TOP: 'top',
  FILTERS_POSITION_BOTTOM: 'bottom'
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BootstrapContext = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BootstrapContext = exports.BootstrapContext = _react2.default.createContext({
  bootstrap4: false
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _inheritsLoose;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_setPrototypeOf__ = __webpack_require__(60);

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_setPrototypeOf__["a" /* default */])(subClass, superClass);
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRowByRowId = exports.matchRow = undefined;

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var matchRow = exports.matchRow = function matchRow(keyField, id) {
  return function (row) {
    return _utils2.default.get(row, keyField) === id;
  };
};

var getRowByRowId = exports.getRowByRowId = function getRowByRowId(data, keyField, id) {
  return data.find(matchRow(keyField, id));
};

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _objectWithoutPropertiesLoose;
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var events = ['onClick', 'onDoubleClick', 'onMouseEnter', 'onMouseLeave', 'onContextMenu', 'onAuxClick'];

exports.default = function (ExtendBase) {
  return function (_ExtendBase) {
    _inherits(CellEventDelegater, _ExtendBase);

    function CellEventDelegater(props) {
      _classCallCheck(this, CellEventDelegater);

      var _this = _possibleConstructorReturn(this, (CellEventDelegater.__proto__ || Object.getPrototypeOf(CellEventDelegater)).call(this, props));

      _this.createDefaultEventHandler = _this.createDefaultEventHandler.bind(_this);
      return _this;
    }

    _createClass(CellEventDelegater, [{
      key: 'createDefaultEventHandler',
      value: function createDefaultEventHandler(cb) {
        var _this2 = this;

        return function (e) {
          var _props = _this2.props,
              column = _props.column,
              columnIndex = _props.columnIndex,
              index = _props.index;

          cb(e, column, typeof columnIndex !== 'undefined' ? columnIndex : index);
        };
      }
    }, {
      key: 'delegate',
      value: function delegate() {
        var _this3 = this;

        var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var newAttrs = _extends({}, attrs);
        Object.keys(attrs).forEach(function (attr) {
          if (_utils2.default.contains(events, attr)) {
            newAttrs[attr] = _this3.createDefaultEventHandler(attrs[attr]);
          }
        });
        return newAttrs;
      }
    }]);

    return CellEventDelegater;
  }(ExtendBase);
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _operators = __webpack_require__(11);

var _operators2 = _interopRequireDefault(_operators);

var _selection = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint camelcase: 0 */
/* eslint react/prop-types: 0 */


var SelectionContext = _react2.default.createContext();

var SelectionProvider = function (_React$Component) {
  _inherits(SelectionProvider, _React$Component);

  function SelectionProvider(props) {
    _classCallCheck(this, SelectionProvider);

    var _this = _possibleConstructorReturn(this, (SelectionProvider.__proto__ || Object.getPrototypeOf(SelectionProvider)).call(this, props));

    _this.handleRowSelect = function (rowKey, checked, rowIndex, e) {
      var _this$props = _this.props,
          data = _this$props.data,
          keyField = _this$props.keyField,
          _this$props$selectRow = _this$props.selectRow,
          mode = _this$props$selectRow.mode,
          onSelect = _this$props$selectRow.onSelect;
      var ROW_SELECT_SINGLE = _const2.default.ROW_SELECT_SINGLE;


      var currSelected = [].concat(_toConsumableArray(_this.selected));

      var result = true;
      if (onSelect) {
        var row = _operators2.default.getRowByRowId(data, keyField, rowKey);
        result = onSelect(row, checked, rowIndex, e);
      }

      if (result === true || result === undefined) {
        if (mode === ROW_SELECT_SINGLE) {
          // when select mode is radio
          currSelected = [rowKey];
        } else if (checked) {
          // when select mode is checkbox
          currSelected.push(rowKey);
        } else {
          currSelected = currSelected.filter(function (value) {
            return value !== rowKey;
          });
        }
      }
      _this.selected = currSelected;
      _this.forceUpdate();
    };

    _this.handleAllRowsSelect = function (e, isUnSelect) {
      var _this$props2 = _this.props,
          data = _this$props2.data,
          keyField = _this$props2.keyField,
          _this$props2$selectRo = _this$props2.selectRow,
          onSelectAll = _this$props2$selectRo.onSelectAll,
          nonSelectable = _this$props2$selectRo.nonSelectable;
      var selected = _this.selected;


      var currSelected = void 0;

      if (!isUnSelect) {
        currSelected = selected.concat(_operators2.default.selectableKeys(data, keyField, nonSelectable));
      } else {
        currSelected = selected.filter(function (s) {
          return typeof data.find(function (d) {
            return _utils2.default.get(d, keyField) === s;
          }) === 'undefined';
        });
      }

      var result = void 0;
      if (onSelectAll) {
        result = onSelectAll(!isUnSelect, _operators2.default.getSelectedRows(data, keyField, isUnSelect ? selected : currSelected), e);
        if (Array.isArray(result)) {
          currSelected = result;
        }
      }
      _this.selected = currSelected;
      _this.forceUpdate();
    };

    _this.selected = props.selectRow.selected || [];
    return _this;
  }

  // exposed API


  _createClass(SelectionProvider, [{
    key: 'getSelected',
    value: function getSelected() {
      return this.selected;
    }
  }, {
    key: 'UNSAFE_componentWillReceiveProps',
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.selectRow) {
        this.selected = nextProps.selectRow.selected || this.selected;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _getSelectionSummary = (0, _selection.getSelectionSummary)(this.props.data, this.props.keyField, this.selected),
          allRowsSelected = _getSelectionSummary.allRowsSelected,
          allRowsNotSelected = _getSelectionSummary.allRowsNotSelected;

      var checkedStatus = void 0;

      // checkbox status depending on selected rows counts
      if (allRowsSelected) checkedStatus = _const2.default.CHECKBOX_STATUS_CHECKED;else if (allRowsNotSelected) checkedStatus = _const2.default.CHECKBOX_STATUS_UNCHECKED;else checkedStatus = _const2.default.CHECKBOX_STATUS_INDETERMINATE;

      return _react2.default.createElement(
        SelectionContext.Provider,
        {
          value: _extends({}, this.props.selectRow, {
            selected: this.selected,
            onRowSelect: this.handleRowSelect,
            onAllRowsSelect: this.handleAllRowsSelect,
            allRowsSelected: allRowsSelected,
            allRowsNotSelected: allRowsNotSelected,
            checkedStatus: checkedStatus
          })
        },
        this.props.children
      );
    }
  }]);

  return SelectionProvider;
}(_react2.default.Component);

SelectionProvider.propTypes = {
  children: _propTypes2.default.node.isRequired,
  data: _propTypes2.default.array.isRequired,
  keyField: _propTypes2.default.string.isRequired
};
exports.default = {
  Provider: SelectionProvider,
  Consumer: SelectionContext.Consumer
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _rows = __webpack_require__(7);

var rows = _interopRequireWildcard(_rows);

var _selection = __webpack_require__(15);

var selection = _interopRequireWildcard(_selection);

var _expand = __webpack_require__(40);

var expand = _interopRequireWildcard(_expand);

var _mutate = __webpack_require__(41);

var mutate = _interopRequireWildcard(_mutate);

var _sort = __webpack_require__(42);

var sort = _interopRequireWildcard(_sort);

var _type = __webpack_require__(43);

var type = _interopRequireWildcard(_type);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = _extends({}, rows, selection, expand, mutate, sort, type);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _operators = __webpack_require__(11);

var _operators2 = _interopRequireDefault(_operators);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint camelcase: 0 */
/* eslint react/prop-types: 0 */


var RowExpandContext = _react2.default.createContext();

var RowExpandProvider = function (_React$Component) {
  _inherits(RowExpandProvider, _React$Component);

  function RowExpandProvider() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RowExpandProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RowExpandProvider.__proto__ || Object.getPrototypeOf(RowExpandProvider)).call.apply(_ref, [this].concat(args))), _this), _this.state = { expanded: _this.props.expandRow.expanded || [],
      isClosing: _this.props.expandRow.isClosing || [] }, _this.onClosed = function (closedRow) {
      _this.setState({ isClosing: _this.state.isClosing.filter(function (value) {
          return value !== closedRow;
        }) });
    }, _this.handleRowExpand = function (rowKey, expanded, rowIndex, e) {
      var _this$props = _this.props,
          data = _this$props.data,
          keyField = _this$props.keyField,
          _this$props$expandRow = _this$props.expandRow,
          onExpand = _this$props$expandRow.onExpand,
          onlyOneExpanding = _this$props$expandRow.onlyOneExpanding,
          nonExpandable = _this$props$expandRow.nonExpandable;

      if (nonExpandable && _utils2.default.contains(nonExpandable, rowKey)) {
        return;
      }

      var currExpanded = [].concat(_toConsumableArray(_this.state.expanded));
      var isClosing = [].concat(_toConsumableArray(_this.state.isClosing));

      if (expanded) {
        if (onlyOneExpanding) {
          isClosing = isClosing.concat(currExpanded);
          currExpanded = [rowKey];
        } else currExpanded.push(rowKey);
      } else {
        isClosing.push(rowKey);
        currExpanded = currExpanded.filter(function (value) {
          return value !== rowKey;
        });
      }

      if (onExpand) {
        var row = _operators2.default.getRowByRowId(data, keyField, rowKey);
        onExpand(row, expanded, rowIndex, e);
      }
      _this.setState(function () {
        return { expanded: currExpanded, isClosing: isClosing };
      });
    }, _this.handleAllRowExpand = function (e, expandAll) {
      var _this$props2 = _this.props,
          data = _this$props2.data,
          keyField = _this$props2.keyField,
          _this$props2$expandRo = _this$props2.expandRow,
          onExpandAll = _this$props2$expandRo.onExpandAll,
          nonExpandable = _this$props2$expandRo.nonExpandable;
      var expanded = _this.state.expanded;


      var currExpanded = void 0;

      if (expandAll) {
        currExpanded = expanded.concat(_operators2.default.expandableKeys(data, keyField, nonExpandable));
      } else {
        currExpanded = expanded.filter(function (s) {
          return typeof data.find(function (d) {
            return _utils2.default.get(d, keyField) === s;
          }) === 'undefined';
        });
      }

      if (onExpandAll) {
        onExpandAll(expandAll, _operators2.default.getExpandedRows(data, keyField, currExpanded), e);
      }

      _this.setState(function () {
        return { expanded: currExpanded };
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RowExpandProvider, [{
    key: 'UNSAFE_componentWillReceiveProps',
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (nextProps.expandRow) {
        var nextExpanded = [].concat(_toConsumableArray(nextProps.expandRow.expanded || this.state.expanded));
        var _nextProps$expandRow$ = nextProps.expandRow.nonExpandable,
            nonExpandable = _nextProps$expandRow$ === undefined ? [] : _nextProps$expandRow$;

        nextExpanded = nextExpanded.filter(function (rowId) {
          return !_utils2.default.contains(nonExpandable, rowId);
        });
        var isClosing = this.state.expanded.reduce(function (acc, cur) {
          if (!_utils2.default.contains(nextExpanded, cur)) {
            acc.push(cur);
          }
          return acc;
        }, []);

        this.setState(function () {
          return {
            expanded: nextExpanded,
            isClosing: isClosing
          };
        });
      } else {
        this.setState(function () {
          return {
            expanded: _this2.state.expanded
          };
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          data = _props.data,
          keyField = _props.keyField;

      return _react2.default.createElement(
        RowExpandContext.Provider,
        {
          value: _extends({}, this.props.expandRow, {
            nonExpandable: this.props.expandRow.nonExpandable,
            expanded: this.state.expanded,
            isClosing: this.state.isClosing,
            onClosed: this.onClosed,
            isAnyExpands: _operators2.default.isAnyExpands(data, keyField, this.state.expanded),
            onRowExpand: this.handleRowExpand,
            onAllRowExpand: this.handleAllRowExpand
          })
        },
        this.props.children
      );
    }
  }]);

  return RowExpandProvider;
}(_react2.default.Component);

RowExpandProvider.propTypes = {
  children: _propTypes2.default.node.isRequired,
  data: _propTypes2.default.array.isRequired,
  keyField: _propTypes2.default.string.isRequired
};
exports.default = {
  Provider: RowExpandProvider,
  Consumer: RowExpandContext.Consumer
};

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UNMOUNTED */
/* unused harmony export EXITED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ENTERING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ENTERED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return EXITING; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_inheritsLoose__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_PropTypes__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__TransitionGroupContext__ = __webpack_require__(14);








var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_inheritsLoose__["a" /* default */])(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [__WEBPACK_IMPORTED_MODULE_4_react_dom___default.a.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || __WEBPACK_IMPORTED_MODULE_5__config__["a" /* default */].disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : __WEBPACK_IMPORTED_MODULE_4_react_dom___default.a.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || __WEBPACK_IMPORTED_MODULE_5__config__["a" /* default */].disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : __WEBPACK_IMPORTED_MODULE_4_react_dom___default.a.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        _in = _this$props.in,
        _mountOnEnter = _this$props.mountOnEnter,
        _unmountOnExit = _this$props.unmountOnExit,
        _appear = _this$props.appear,
        _enter = _this$props.enter,
        _exit = _this$props.exit,
        _timeout = _this$props.timeout,
        _addEndListener = _this$props.addEndListener,
        _onEnter = _this$props.onEnter,
        _onEntering = _this$props.onEntering,
        _onEntered = _this$props.onEntered,
        _onExit = _this$props.onExit,
        _onExiting = _this$props.onExiting,
        _onExited = _this$props.onExited,
        _nodeRef = _this$props.nodeRef,
        childProps = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__TransitionGroupContext__["a" /* default */].Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : __WEBPACK_IMPORTED_MODULE_3_react___default.a.cloneElement(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Children.only(children), childProps))
    );
  };

  return Transition;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

Transition.contextType = __WEBPACK_IMPORTED_MODULE_7__TransitionGroupContext__["a" /* default */];
Transition.propTypes =  false ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: PropTypes.shape({
    current: typeof Element === 'undefined' ? PropTypes.any : PropTypes.instanceOf(Element)
  }),

  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: PropTypes.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: PropTypes.bool,

  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: PropTypes.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: PropTypes.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: PropTypes.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: PropTypes.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: PropTypes.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: PropTypes.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: PropTypes.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: PropTypes.func
} : {}; // Name the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
/* harmony default export */ __webpack_exports__["d"] = (Transition);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createContext(null));

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSelectedRows = exports.unSelectableKeys = exports.selectableKeys = exports.getSelectionSummary = undefined;

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _rows = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getSelectionSummary = exports.getSelectionSummary = function getSelectionSummary() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var keyField = arguments[1];
  var selected = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var allRowsSelected = data.length > 0;
  var allRowsNotSelected = true;

  var rowKeys = data.map(function (d) {
    return _utils2.default.get(d, keyField);
  });

  var _loop = function _loop(i) {
    var curr = rowKeys[i];
    if (typeof selected.find(function (x) {
      return x === curr;
    }) === 'undefined') {
      allRowsSelected = false;
    } else {
      allRowsNotSelected = false;
    }
  };

  for (var i = 0; i < rowKeys.length; i += 1) {
    _loop(i);
  }
  return {
    allRowsSelected: allRowsSelected,
    allRowsNotSelected: allRowsNotSelected
  };
};

var selectableKeys = exports.selectableKeys = function selectableKeys() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var keyField = arguments[1];
  var skips = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  if (skips.length === 0) {
    return data.map(function (row) {
      return _utils2.default.get(row, keyField);
    });
  }
  return data.filter(function (row) {
    return !_utils2.default.contains(skips, _utils2.default.get(row, keyField));
  }).map(function (row) {
    return _utils2.default.get(row, keyField);
  });
};

var unSelectableKeys = exports.unSelectableKeys = function unSelectableKeys(selected) {
  var skips = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (skips.length === 0) {
    return [];
  }
  return selected.filter(function (x) {
    return _utils2.default.contains(skips, x);
  });
};

var getSelectedRows = exports.getSelectedRows = function getSelectedRows() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var keyField = arguments[1];
  var selected = arguments[2];
  return selected.map(function (k) {
    return (0, _rows.getRowByRowId)(data, keyField, k);
  }).filter(function (x) {
    return !!x;
  });
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /* eslint react/require-default-props: 0 */


var RowTemplate = function RowTemplate(props) {
  var renderContent = props.renderContent,
      selectRow = props.selectRow,
      expandRow = props.expandRow,
      cellEl = props.cellEl,
      rest = _objectWithoutProperties(props, ['renderContent', 'selectRow', 'expandRow', 'cellEl']);

  var isRenderFunctionColumnInLeft = function isRenderFunctionColumnInLeft() {
    var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _const2.default.INDICATOR_POSITION_LEFT;
    return position === _const2.default.INDICATOR_POSITION_LEFT;
  };

  var childrens = renderContent() || [];

  if (selectRow && selectRow.hideSelectColumn !== true) {
    if (isRenderFunctionColumnInLeft(selectRow.selectColumnPosition)) {
      childrens.unshift(_react2.default.createElement(cellEl, { key: 'selection' }));
    } else {
      childrens.push(_react2.default.createElement(cellEl, { key: 'selection' }));
    }
  }

  if (expandRow.showExpandColumn) {
    if (isRenderFunctionColumnInLeft(expandRow.expandColumnPosition)) {
      childrens.unshift(_react2.default.createElement(cellEl, { key: 'expansion' }));
    } else {
      childrens.push(_react2.default.createElement(cellEl, { key: 'expansion' }));
    }
  }

  return _react2.default.createElement(
    'tr',
    rest,
    childrens
  );
};

RowTemplate.propTypes = {
  renderContent: _propTypes2.default.func.isRequired,
  cellEl: _propTypes2.default.string.isRequired,
  selectRow: _propTypes2.default.object,
  expandRow: _propTypes2.default.object
};

exports.default = RowTemplate;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _cell = __webpack_require__(50);

var _cell2 = _interopRequireDefault(_cell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prop-types: 0 */
/* eslint react/no-array-index-key: 0 */
/* eslint no-plusplus: 0 */


var RowPureContent = function (_React$Component) {
  _inherits(RowPureContent, _React$Component);

  function RowPureContent() {
    _classCallCheck(this, RowPureContent);

    return _possibleConstructorReturn(this, (RowPureContent.__proto__ || Object.getPrototypeOf(RowPureContent)).apply(this, arguments));
  }

  _createClass(RowPureContent, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      if (typeof nextProps.shouldUpdate !== 'undefined') {
        return nextProps.shouldUpdate;
      }
      return true;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          row = _props.row,
          keyField = _props.keyField,
          columns = _props.columns,
          rowIndex = _props.rowIndex,
          editable = _props.editable,
          editingRowIdx = _props.editingRowIdx,
          editingColIdx = _props.editingColIdx,
          onStart = _props.onStart,
          clickToEdit = _props.clickToEdit,
          dbclickToEdit = _props.dbclickToEdit,
          EditingCellComponent = _props.EditingCellComponent,
          tabIndexStart = _props.tabIndexStart;


      var tabIndex = tabIndexStart;

      return columns.map(function (column, index) {
        var dataField = column.dataField;

        var content = _utils2.default.get(row, dataField);
        if (rowIndex === editingRowIdx && index === editingColIdx) {
          return _react2.default.createElement(EditingCellComponent, {
            key: content + '-' + index + '-editing',
            row: row,
            rowIndex: rowIndex,
            column: column,
            columnIndex: index
          });
        }
        // render cell
        var cellTitle = void 0;
        var cellStyle = {};
        var cellAttrs = _extends({}, _utils2.default.isFunction(column.attrs) ? column.attrs(content, row, rowIndex, index) : column.attrs);

        if (column.events) {
          var events = Object.assign({}, column.events);
          Object.keys(Object.assign({}, column.events)).forEach(function (key) {
            var originFn = events[key];
            events[key] = function () {
              for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
                rest[_key] = arguments[_key];
              }

              return originFn.apply(undefined, rest.concat([row, rowIndex]));
            };
          });
          cellAttrs = _extends({}, cellAttrs, events);
        }

        var cellClasses = _utils2.default.isFunction(column.classes) ? column.classes(content, row, rowIndex, index) : column.classes;

        if (column.style) {
          cellStyle = _utils2.default.isFunction(column.style) ? column.style(content, row, rowIndex, index) : column.style;
          cellStyle = Object.assign({}, cellStyle) || {};
        }

        if (column.title) {
          cellTitle = _utils2.default.isFunction(column.title) ? column.title(content, row, rowIndex, index) : content;
          cellAttrs.title = cellTitle;
        }

        if (column.align) {
          cellStyle.textAlign = _utils2.default.isFunction(column.align) ? column.align(content, row, rowIndex, index) : column.align;
        }

        if (cellClasses) cellAttrs.className = cellClasses;
        if (!_utils2.default.isEmptyObject(cellStyle)) cellAttrs.style = cellStyle;

        var editableCell = _utils2.default.isDefined(column.editable) ? column.editable : true;
        if (column.dataField === keyField || !editable) editableCell = false;
        if (_utils2.default.isFunction(column.editable)) {
          editableCell = column.editable(content, row, rowIndex, index);
        }

        if (tabIndexStart !== -1) {
          cellAttrs.tabIndex = tabIndex++;
        }

        return _react2.default.createElement(_cell2.default, _extends({
          key: content + '-' + index,
          row: row,
          editable: editableCell,
          rowIndex: rowIndex,
          columnIndex: index,
          column: column,
          onStart: onStart,
          clickToEdit: clickToEdit,
          dbclickToEdit: dbclickToEdit
        }, cellAttrs));
      });
    }
  }]);

  return RowPureContent;
}(_react2.default.Component);

exports.default = RowPureContent;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var events = ['onClick', 'onDoubleClick', 'onMouseEnter', 'onMouseLeave', 'onContextMenu', 'onAuxClick'];

exports.default = function (ExtendBase) {
  return function (_ExtendBase) {
    _inherits(RowEventDelegater, _ExtendBase);

    function RowEventDelegater(props) {
      _classCallCheck(this, RowEventDelegater);

      var _this = _possibleConstructorReturn(this, (RowEventDelegater.__proto__ || Object.getPrototypeOf(RowEventDelegater)).call(this, props));

      _this.clickNum = 0;
      _this.createDefaultEventHandler = _this.createDefaultEventHandler.bind(_this);
      _this.createClickEventHandler = _this.createClickEventHandler.bind(_this);
      return _this;
    }

    _createClass(RowEventDelegater, [{
      key: 'createClickEventHandler',
      value: function createClickEventHandler(cb) {
        var _this2 = this;

        return function (e) {
          var _props = _this2.props,
              row = _props.row,
              selected = _props.selected,
              keyField = _props.keyField,
              selectable = _props.selectable,
              expandable = _props.expandable,
              rowIndex = _props.rowIndex,
              expanded = _props.expanded,
              expandRow = _props.expandRow,
              selectRow = _props.selectRow,
              DELAY_FOR_DBCLICK = _props.DELAY_FOR_DBCLICK;

          var clickFn = function clickFn() {
            if (cb) {
              cb(e, row, rowIndex);
            }
            var key = _utils2.default.get(row, keyField);
            if (expandRow && expandable && !expandRow.expandByColumnOnly) {
              if (selectRow.mode !== _const2.default.ROW_SELECT_DISABLED && selectRow.clickToExpand || selectRow.mode === _const2.default.ROW_SELECT_DISABLED) {
                expandRow.onRowExpand(key, !expanded, rowIndex, e);
              }
            }
            if (selectRow.clickToSelect && selectable) {
              selectRow.onRowSelect(key, !selected, rowIndex, e);
            }
          };

          if (DELAY_FOR_DBCLICK) {
            _this2.clickNum += 1;
            _utils2.default.debounce(function () {
              if (_this2.clickNum === 1) {
                clickFn();
              }
              _this2.clickNum = 0;
            }, DELAY_FOR_DBCLICK)();
          } else {
            clickFn();
          }
        };
      }
    }, {
      key: 'createDefaultEventHandler',
      value: function createDefaultEventHandler(cb) {
        var _this3 = this;

        return function (e) {
          var _props2 = _this3.props,
              row = _props2.row,
              rowIndex = _props2.rowIndex;

          cb(e, row, rowIndex);
        };
      }
    }, {
      key: 'delegate',
      value: function delegate() {
        var _this4 = this;

        var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var newAttrs = _extends({}, attrs);
        Object.keys(attrs).forEach(function (attr) {
          if (_utils2.default.contains(events, attr)) {
            newAttrs[attr] = _this4.createDefaultEventHandler(attrs[attr]);
          }
        });
        return newAttrs;
      }
    }]);

    return RowEventDelegater;
  }(ExtendBase);
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prop-types: 0 */


exports.default = function (ExtendBase) {
  return function (_ExtendBase) {
    _inherits(RowShouldUpdater, _ExtendBase);

    function RowShouldUpdater() {
      _classCallCheck(this, RowShouldUpdater);

      return _possibleConstructorReturn(this, (RowShouldUpdater.__proto__ || Object.getPrototypeOf(RowShouldUpdater)).apply(this, arguments));
    }

    _createClass(RowShouldUpdater, [{
      key: 'shouldUpdateByCellEditing',
      value: function shouldUpdateByCellEditing(nextProps) {
        if (!(this.props.clickToEdit || this.props.dbclickToEdit)) return false;
        return nextProps.editingRowIdx === nextProps.rowIndex || this.props.editingRowIdx === nextProps.rowIndex && nextProps.editingRowIdx === null || this.props.editingRowIdx === nextProps.rowIndex;
      }
    }, {
      key: 'shouldUpdatedBySelfProps',
      value: function shouldUpdatedBySelfProps(nextProps) {
        return this.props.className !== nextProps.className || !_utils2.default.isEqual(this.props.style, nextProps.style) || !_utils2.default.isEqual(this.props.attrs, nextProps.attrs);
      }

      // Only use for simple-row

    }, {
      key: 'shouldUpdateByColumnsForSimpleCheck',
      value: function shouldUpdateByColumnsForSimpleCheck(nextProps) {
        if (this.props.columns.length !== nextProps.columns.length) {
          return true;
        }
        for (var i = 0; i < this.props.columns.length; i += 1) {
          if (!_utils2.default.isEqual(this.props.columns[i], nextProps.columns[i])) {
            return true;
          }
        }
        return false;
      }
    }, {
      key: 'shouldUpdatedByNormalProps',
      value: function shouldUpdatedByNormalProps(nextProps) {
        var shouldUpdate = this.props.rowIndex !== nextProps.rowIndex || this.props.editable !== nextProps.editable || !_utils2.default.isEqual(this.props.row, nextProps.row) || this.props.columns.length !== nextProps.columns.length;

        return shouldUpdate;
      }
    }, {
      key: 'shouldUpdateChild',
      value: function shouldUpdateChild(nextProps) {
        return this.shouldUpdateByCellEditing(nextProps) || this.shouldUpdatedByNormalProps(nextProps);
      }
    }, {
      key: 'shouldRowContentUpdate',
      value: function shouldRowContentUpdate(nextProps) {
        return this.shouldUpdateChild(nextProps) || this.shouldUpdateByColumnsForSimpleCheck(nextProps);
      }
    }]);

    return RowShouldUpdater;
  }(ExtendBase);
};

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _extends;
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_21__;

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  disabled: false
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export timeoutsShape */
/* unused harmony export classNamesShape */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);

var timeoutsShape =  false ? PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
  enter: PropTypes.number,
  exit: PropTypes.number,
  appear: PropTypes.number
}).isRequired]) : null;
var classNamesShape =  false ? PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
  enter: PropTypes.string,
  exit: PropTypes.string,
  active: PropTypes.string
}), PropTypes.shape({
  enter: PropTypes.string,
  enterDone: PropTypes.string,
  enterActive: PropTypes.string,
  exit: PropTypes.string,
  exitDone: PropTypes.string,
  exitActive: PropTypes.string
})]) : null;

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_extends__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_inheritsLoose__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__TransitionGroupContext__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_ChildMapping__ = __webpack_require__(66);









var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
};
/**
 * The `<TransitionGroup>` component manages a set of transition components
 * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
 * components, `<TransitionGroup>` is a state machine for managing the mounting
 * and unmounting of components over time.
 *
 * Consider the example below. As items are removed or added to the TodoList the
 * `in` prop is toggled automatically by the `<TransitionGroup>`.
 *
 * Note that `<TransitionGroup>`  does not define any animation behavior!
 * Exactly _how_ a list item animates is up to the individual transition
 * component. This means you can mix and match animations across different list
 * items.
 */

var TransitionGroup = /*#__PURE__*/function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_inheritsLoose__["a" /* default */])(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__["a" /* default */])(_this)); // Initial children should all be entering, dependent on appear


    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? Object(__WEBPACK_IMPORTED_MODULE_7__utils_ChildMapping__["b" /* getInitialChildMapping */])(nextProps, handleExited) : Object(__WEBPACK_IMPORTED_MODULE_7__utils_ChildMapping__["c" /* getNextChildMapping */])(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  } // node is `undefined` when user provided `nodeRef` prop
  ;

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = Object(__WEBPACK_IMPORTED_MODULE_7__utils_ChildMapping__["a" /* getChildMapping */])(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_extends__["a" /* default */])({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["component", "childFactory"]);

    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__TransitionGroupContext__["a" /* default */].Provider, {
        value: contextValue
      }, children);
    }

    return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__TransitionGroupContext__["a" /* default */].Provider, {
      value: contextValue
    }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Component, props, children));
  };

  return TransitionGroup;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

TransitionGroup.propTypes =  false ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: PropTypes.any,

  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: PropTypes.node,

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: PropTypes.bool,

  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: PropTypes.bool,

  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: PropTypes.bool,

  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: PropTypes.func
} : {};
TransitionGroup.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (TransitionGroup);

/***/ }),
/* 25 */
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bootstrapTable = __webpack_require__(27);

var _bootstrapTable2 = _interopRequireDefault(_bootstrapTable);

var _contexts = __webpack_require__(72);

var _contexts2 = _interopRequireDefault(_contexts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _contexts2.default)(_bootstrapTable2.default);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _header = __webpack_require__(30);

var _header2 = _interopRequireDefault(_header);

var _filters = __webpack_require__(45);

var _filters2 = _interopRequireDefault(_filters);

var _caption = __webpack_require__(47);

var _caption2 = _interopRequireDefault(_caption);

var _body = __webpack_require__(48);

var _body2 = _interopRequireDefault(_body);

var _footer = __webpack_require__(68);

var _footer2 = _interopRequireDefault(_footer);

var _propsResolver = __webpack_require__(70);

var _propsResolver2 = _interopRequireDefault(_propsResolver);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint camelcase: 0 */
/* eslint arrow-body-style: 0 */

var BootstrapTable = function (_PropsBaseResolver) {
  _inherits(BootstrapTable, _PropsBaseResolver);

  function BootstrapTable(props) {
    _classCallCheck(this, BootstrapTable);

    var _this = _possibleConstructorReturn(this, (BootstrapTable.__proto__ || Object.getPrototypeOf(BootstrapTable)).call(this, props));

    _this.getData = function () {
      return _this.visibleRows();
    };

    _this.validateProps();
    return _this;
  }

  _createClass(BootstrapTable, [{
    key: 'UNSAFE_componentWillReceiveProps',
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.onDataSizeChange && !nextProps.pagination) {
        if (nextProps.data.length !== this.props.data.length) {
          nextProps.onDataSizeChange({ dataSize: nextProps.data.length });
        }
      }
    }

    // Exposed APIs

  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          loading = _props.loading,
          overlay = _props.overlay;

      if (overlay) {
        var LoadingOverlay = overlay(loading);
        return _react2.default.createElement(
          LoadingOverlay,
          null,
          this.renderTable()
        );
      }
      return this.renderTable();
    }
  }, {
    key: 'renderTable',
    value: function renderTable() {
      var _props2 = this.props,
          columns = _props2.columns,
          keyField = _props2.keyField,
          tabIndexCell = _props2.tabIndexCell,
          id = _props2.id,
          classes = _props2.classes,
          bootstrap4 = _props2.bootstrap4,
          striped = _props2.striped,
          hover = _props2.hover,
          bordered = _props2.bordered,
          condensed = _props2.condensed,
          noDataIndication = _props2.noDataIndication,
          caption = _props2.caption,
          rowStyle = _props2.rowStyle,
          rowClasses = _props2.rowClasses,
          wrapperClasses = _props2.wrapperClasses,
          rowEvents = _props2.rowEvents,
          selectRow = _props2.selectRow,
          expandRow = _props2.expandRow,
          cellEdit = _props2.cellEdit,
          filterPosition = _props2.filterPosition;


      var tableWrapperClass = (0, _classnames2.default)('react-bootstrap-table', wrapperClasses);

      var tableClass = (0, _classnames2.default)('table', _defineProperty({
        'table-striped': striped,
        'table-hover': hover,
        'table-bordered': bordered
      }, bootstrap4 ? 'table-sm' : 'table-condensed', condensed), classes);

      var hasFilters = columns.some(function (col) {
        return col.filter || col.filterRenderer;
      });

      var hasFooter = _utils2.default.filter(columns, function (col) {
        return _utils2.default.has(col, 'footer');
      }).length > 0;

      var tableCaption = caption && _react2.default.createElement(
        _caption2.default,
        { bootstrap4: bootstrap4 },
        caption
      );

      return _react2.default.createElement(
        'div',
        { className: tableWrapperClass },
        _react2.default.createElement(
          'table',
          { id: id, className: tableClass },
          tableCaption,
          _react2.default.createElement(_header2.default, {
            columns: columns,
            className: this.props.headerClasses,
            wrapperClasses: this.props.headerWrapperClasses,
            sortField: this.props.sortField,
            sortOrder: this.props.sortOrder,
            onSort: this.props.onSort,
            globalSortCaret: this.props.sort && this.props.sort.sortCaret,
            onFilter: this.props.onFilter,
            currFilters: this.props.currFilters,
            onExternalFilter: this.props.onExternalFilter,
            selectRow: selectRow,
            expandRow: expandRow,
            filterPosition: filterPosition
          }),
          hasFilters && filterPosition !== _const2.default.FILTERS_POSITION_INLINE && _react2.default.createElement(_filters2.default, {
            columns: columns,
            className: this.props.filtersClasses,
            onSort: this.props.onSort,
            onFilter: this.props.onFilter,
            currFilters: this.props.currFilters,
            filterPosition: this.props.filterPosition,
            onExternalFilter: this.props.onExternalFilter,
            selectRow: selectRow,
            expandRow: expandRow
          }),
          _react2.default.createElement(_body2.default, {
            className: this.props.bodyClasses,
            data: this.getData(),
            keyField: keyField,
            tabIndexCell: tabIndexCell,
            columns: columns,
            isEmpty: this.isEmpty(),
            visibleColumnSize: this.visibleColumnSize(),
            noDataIndication: noDataIndication,
            cellEdit: cellEdit,
            selectRow: selectRow,
            expandRow: expandRow,
            rowStyle: rowStyle,
            rowClasses: rowClasses,
            rowEvents: rowEvents
          }),
          hasFooter && _react2.default.createElement(_footer2.default, {
            data: this.getData(),
            columns: columns,
            selectRow: selectRow,
            expandRow: expandRow,
            className: this.props.footerClasses
          })
        )
      );
    }
  }]);

  return BootstrapTable;
}((0, _propsResolver2.default)(_react.Component));

BootstrapTable.propTypes = {
  keyField: _propTypes2.default.string.isRequired,
  data: _propTypes2.default.array.isRequired,
  columns: _propTypes2.default.array.isRequired,
  bootstrap4: _propTypes2.default.bool,
  remote: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.shape({
    pagination: _propTypes2.default.bool
  })]),
  noDataIndication: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]),
  striped: _propTypes2.default.bool,
  bordered: _propTypes2.default.bool,
  hover: _propTypes2.default.bool,
  tabIndexCell: _propTypes2.default.bool,
  id: _propTypes2.default.string,
  classes: _propTypes2.default.string,
  headerClasses: _propTypes2.default.string,
  bodyClasses: _propTypes2.default.string,
  wrapperClasses: _propTypes2.default.string,
  headerWrapperClasses: _propTypes2.default.string,
  condensed: _propTypes2.default.bool,
  caption: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.string]),
  pagination: _propTypes2.default.object,
  filter: _propTypes2.default.object,
  cellEdit: _propTypes2.default.object,
  selectRow: _propTypes2.default.shape({
    mode: _propTypes2.default.oneOf([_const2.default.ROW_SELECT_SINGLE, _const2.default.ROW_SELECT_MULTIPLE, _const2.default.ROW_SELECT_DISABLED]).isRequired,
    clickToSelect: _propTypes2.default.bool,
    clickToExpand: _propTypes2.default.bool,
    clickToEdit: _propTypes2.default.bool,
    hideSelectAll: _propTypes2.default.bool,
    onSelect: _propTypes2.default.func,
    onSelectAll: _propTypes2.default.func,
    style: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    classes: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    nonSelectable: _propTypes2.default.array,
    nonSelectableStyle: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    nonSelectableClasses: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    bgColor: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    hideSelectColumn: _propTypes2.default.bool,
    selectionRenderer: _propTypes2.default.func,
    selectionHeaderRenderer: _propTypes2.default.func,
    headerColumnStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    selectColumnStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    selectColumnPosition: _propTypes2.default.oneOf([_const2.default.INDICATOR_POSITION_LEFT, _const2.default.INDICATOR_POSITION_RIGHT])
  }),
  expandRow: _propTypes2.default.shape({
    renderer: _propTypes2.default.func,
    expanded: _propTypes2.default.array,
    onExpand: _propTypes2.default.func,
    onExpandAll: _propTypes2.default.func,
    nonExpandable: _propTypes2.default.array,
    showExpandColumn: _propTypes2.default.bool,
    onlyOneExpanding: _propTypes2.default.bool,
    expandByColumnOnly: _propTypes2.default.bool,
    expandColumnRenderer: _propTypes2.default.func,
    expandHeaderColumnRenderer: _propTypes2.default.func,
    expandColumnPosition: _propTypes2.default.oneOf([_const2.default.INDICATOR_POSITION_LEFT, _const2.default.INDICATOR_POSITION_RIGHT]),
    className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    parentClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func])
  }),
  rowStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
  rowEvents: _propTypes2.default.object,
  rowClasses: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  filtersClasses: _propTypes2.default.string,
  filterPosition: _propTypes2.default.oneOf([_const2.default.FILTERS_POSITION_TOP, _const2.default.FILTERS_POSITION_INLINE, _const2.default.FILTERS_POSITION_BOTTOM]),
  footerClasses: _propTypes2.default.string,
  defaultSorted: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    dataField: _propTypes2.default.string.isRequired,
    order: _propTypes2.default.oneOf([_const2.default.SORT_DESC, _const2.default.SORT_ASC]).isRequired
  })),
  sort: _propTypes2.default.shape({
    dataField: _propTypes2.default.string,
    order: _propTypes2.default.oneOf([_const2.default.SORT_DESC, _const2.default.SORT_ASC]),
    sortFunc: _propTypes2.default.func,
    sortCaret: _propTypes2.default.func
  }),
  defaultSortDirection: _propTypes2.default.oneOf([_const2.default.SORT_DESC, _const2.default.SORT_ASC]),
  overlay: _propTypes2.default.func,
  onTableChange: _propTypes2.default.func,
  onSort: _propTypes2.default.func,
  onFilter: _propTypes2.default.func,
  onExternalFilter: _propTypes2.default.func,
  onDataSizeChange: _propTypes2.default.func,
  // Inject from toolkit
  search: _propTypes2.default.shape({
    searchText: _propTypes2.default.string,
    searchContext: _propTypes2.default.func
  }),
  setDependencyModules: _propTypes2.default.func
};

BootstrapTable.defaultProps = {
  bootstrap4: false,
  remote: false,
  striped: false,
  bordered: true,
  hover: false,
  condensed: false,
  noDataIndication: null,
  selectRow: {
    mode: _const2.default.ROW_SELECT_DISABLED,
    selected: [],
    hideSelectColumn: true
  },
  expandRow: {
    renderer: undefined,
    expanded: [],
    nonExpandable: []
  },
  cellEdit: {
    mode: null,
    nonEditableRows: []
  },
  filterPosition: _const2.default.FILTERS_POSITION_INLINE
};

exports.default = BootstrapTable;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(29);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _headerCell = __webpack_require__(31);

var _headerCell2 = _interopRequireDefault(_headerCell);

var _selectionHeaderCell = __webpack_require__(37);

var _selectionHeaderCell2 = _interopRequireDefault(_selectionHeaderCell);

var _expandHeaderCell = __webpack_require__(38);

var _expandHeaderCell2 = _interopRequireDefault(_expandHeaderCell);

var _selectionHeaderCellConsumer = __webpack_require__(39);

var _selectionHeaderCellConsumer2 = _interopRequireDefault(_selectionHeaderCellConsumer);

var _expandHeaderCellConsumer = __webpack_require__(44);

var _expandHeaderCellConsumer2 = _interopRequireDefault(_expandHeaderCellConsumer);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint react/require-default-props: 0 */
var Header = function Header(props) {
  var className = props.className,
      columns = props.columns,
      onSort = props.onSort,
      onFilter = props.onFilter,
      sortField = props.sortField,
      sortOrder = props.sortOrder,
      selectRow = props.selectRow,
      expandRow = props.expandRow,
      currFilters = props.currFilters,
      onExternalFilter = props.onExternalFilter,
      filterPosition = props.filterPosition,
      globalSortCaret = props.globalSortCaret,
      wrapperClasses = props.wrapperClasses;


  var SelectionHeaderCellComp = function SelectionHeaderCellComp() {
    return null;
  };
  var ExpansionHeaderCellComp = function ExpansionHeaderCellComp() {
    return null;
  };

  if (expandRow.showExpandColumn) {
    ExpansionHeaderCellComp = (0, _expandHeaderCellConsumer2.default)(_expandHeaderCell2.default);
  }

  if (selectRow) {
    SelectionHeaderCellComp = (0, _selectionHeaderCellConsumer2.default)(_selectionHeaderCell2.default);
  }

  var isRenderFunctionColumnInLeft = function isRenderFunctionColumnInLeft() {
    var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _const2.default.INDICATOR_POSITION_LEFT;
    return position === _const2.default.INDICATOR_POSITION_LEFT;
  };

  var childrens = [columns.map(function (column, i) {
    var currSort = column.dataField === sortField;
    var isLastSorting = column.dataField === sortField;

    return _react2.default.createElement(_headerCell2.default, {
      index: i,
      key: column.dataField,
      column: column,
      onSort: onSort,
      sorting: currSort,
      sortOrder: sortOrder,
      globalSortCaret: globalSortCaret,
      isLastSorting: isLastSorting,
      onFilter: onFilter,
      currFilters: currFilters,
      onExternalFilter: onExternalFilter,
      filterPosition: filterPosition
    });
  })];

  if (!selectRow.hideSelectColumn) {
    if (isRenderFunctionColumnInLeft(selectRow.selectColumnPosition)) {
      childrens.unshift(_react2.default.createElement(SelectionHeaderCellComp, { key: 'selection' }));
    } else {
      childrens.push(_react2.default.createElement(SelectionHeaderCellComp, { key: 'selection' }));
    }
  }

  if (expandRow.showExpandColumn) {
    if (isRenderFunctionColumnInLeft(expandRow.expandColumnPosition)) {
      childrens.unshift(_react2.default.createElement(ExpansionHeaderCellComp, { key: 'expansion' }));
    } else {
      childrens.push(_react2.default.createElement(ExpansionHeaderCellComp, { key: 'expansion' }));
    }
  }

  return _react2.default.createElement(
    'thead',
    { className: wrapperClasses },
    _react2.default.createElement(
      'tr',
      { className: className },
      childrens
    )
  );
};

Header.propTypes = {
  columns: _propTypes2.default.array.isRequired,
  onSort: _propTypes2.default.func,
  onFilter: _propTypes2.default.func,
  sortField: _propTypes2.default.string,
  sortOrder: _propTypes2.default.string,
  selectRow: _propTypes2.default.object,
  currFilters: _propTypes2.default.object,
  onExternalFilter: _propTypes2.default.func,
  globalSortCaret: _propTypes2.default.func,
  className: _propTypes2.default.string,
  wrapperClasses: _propTypes2.default.string,
  expandRow: _propTypes2.default.object,
  filterPosition: _propTypes2.default.oneOf([_const2.default.FILTERS_POSITION_TOP, _const2.default.FILTERS_POSITION_INLINE, _const2.default.FILTERS_POSITION_BOTTOM])
};

exports.default = Header;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

var _symbol = __webpack_require__(32);

var _symbol2 = _interopRequireDefault(_symbol);

var _caret = __webpack_require__(33);

var _caret2 = _interopRequireDefault(_caret);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _cellEventDelegater = __webpack_require__(9);

var _cellEventDelegater2 = _interopRequireDefault(_cellEventDelegater);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/require-default-props: 0 */


var HeaderCell = function (_eventDelegater) {
  _inherits(HeaderCell, _eventDelegater);

  function HeaderCell() {
    _classCallCheck(this, HeaderCell);

    return _possibleConstructorReturn(this, (HeaderCell.__proto__ || Object.getPrototypeOf(HeaderCell)).apply(this, arguments));
  }

  _createClass(HeaderCell, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          column = _props.column,
          index = _props.index,
          onSort = _props.onSort,
          sorting = _props.sorting,
          sortOrder = _props.sortOrder,
          isLastSorting = _props.isLastSorting,
          onFilter = _props.onFilter,
          currFilters = _props.currFilters,
          filterPosition = _props.filterPosition,
          onExternalFilter = _props.onExternalFilter,
          globalSortCaret = _props.globalSortCaret;
      var text = column.text,
          sort = column.sort,
          sortCaret = column.sortCaret,
          filter = column.filter,
          filterRenderer = column.filterRenderer,
          headerTitle = column.headerTitle,
          headerAlign = column.headerAlign,
          headerFormatter = column.headerFormatter,
          headerEvents = column.headerEvents,
          headerClasses = column.headerClasses,
          headerStyle = column.headerStyle,
          headerAttrs = column.headerAttrs,
          headerSortingClasses = column.headerSortingClasses,
          headerSortingStyle = column.headerSortingStyle;


      var sortCaretfunc = sortCaret || globalSortCaret;

      var delegateEvents = this.delegate(headerEvents);

      var customAttrs = _utils2.default.isFunction(headerAttrs) ? headerAttrs(column, index) : headerAttrs || {};

      var cellAttrs = _extends({}, customAttrs, delegateEvents, {
        tabIndex: _utils2.default.isDefined(customAttrs.tabIndex) ? customAttrs.tabIndex : 0
      });

      var sortSymbol = void 0;
      var filterElm = void 0;
      var cellStyle = {};
      var cellClasses = _utils2.default.isFunction(headerClasses) ? headerClasses(column, index) : headerClasses;

      if (headerStyle) {
        cellStyle = _utils2.default.isFunction(headerStyle) ? headerStyle(column, index) : headerStyle;
        cellStyle = cellStyle ? _extends({}, cellStyle) : cellStyle;
      }

      if (headerTitle) {
        cellAttrs.title = _utils2.default.isFunction(headerTitle) ? headerTitle(column, index) : text;
      }

      if (headerAlign) {
        cellStyle.textAlign = _utils2.default.isFunction(headerAlign) ? headerAlign(column, index) : headerAlign;
      }

      if (sort) {
        var customClick = cellAttrs.onClick;
        cellAttrs['aria-label'] = sorting ? text + ' sort ' + sortOrder : text + ' sortable';
        cellAttrs.onKeyUp = function (e) {
          if (e.key === 'Enter') {
            onSort(column);
            if (_utils2.default.isFunction(customClick)) customClick(e);
          }
        };
        cellAttrs.onClick = function (e) {
          onSort(column);
          if (_utils2.default.isFunction(customClick)) customClick(e);
        };
        cellAttrs.className = (0, _classnames2.default)(cellAttrs.className, 'sortable');

        if (sorting) {
          sortSymbol = sortCaretfunc ? sortCaretfunc(sortOrder, column) : _react2.default.createElement(_caret2.default, { order: sortOrder });

          // append customized classes or style if table was sorting based on the current column.
          cellClasses = (0, _classnames2.default)(cellClasses, _utils2.default.isFunction(headerSortingClasses) ? headerSortingClasses(column, sortOrder, isLastSorting, index) : headerSortingClasses);

          cellStyle = _extends({}, cellStyle, _utils2.default.isFunction(headerSortingStyle) ? headerSortingStyle(column, sortOrder, isLastSorting, index) : headerSortingStyle);
        } else {
          sortSymbol = sortCaretfunc ? sortCaretfunc(undefined, column) : _react2.default.createElement(_symbol2.default, null);
        }
      }

      if (cellClasses) cellAttrs.className = (0, _classnames2.default)(cellAttrs.className, cellClasses);
      if (!_utils2.default.isEmptyObject(cellStyle)) cellAttrs.style = cellStyle;

      if (filterPosition === _const2.default.FILTERS_POSITION_INLINE) {
        if (filterRenderer) {
          var onCustomFilter = onExternalFilter(column, filter.props.type);
          filterElm = filterRenderer(onCustomFilter, column);
        } else if (filter) {
          filterElm = _react2.default.createElement(filter.Filter, _extends({}, filter.props, {
            filterState: currFilters[column.dataField],
            onFilter: onFilter,
            column: column
          }));
        }
      }

      var children = headerFormatter ? headerFormatter(column, index, { sortElement: sortSymbol, filterElement: filterElm }) : text;

      if (headerFormatter) {
        return _react2.default.createElement('th', cellAttrs, children);
      }

      return _react2.default.createElement('th', cellAttrs, children, sortSymbol, filterElm);
    }
  }]);

  return HeaderCell;
}((0, _cellEventDelegater2.default)(_react2.default.Component));

HeaderCell.propTypes = {
  column: _propTypes2.default.shape({
    dataField: _propTypes2.default.string.isRequired,
    text: _propTypes2.default.string.isRequired,
    type: _propTypes2.default.oneOf([_const2.default.TYPE_STRING, _const2.default.TYPE_NUMBER, _const2.default.TYPE_BOOLEAN, _const2.default.TYPE_DATE]),
    isDummyField: _propTypes2.default.bool,
    hidden: _propTypes2.default.bool,
    headerFormatter: _propTypes2.default.func,
    formatter: _propTypes2.default.func,
    formatExtraData: _propTypes2.default.any,
    headerClasses: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    classes: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    headerStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    style: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    headerTitle: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.func]),
    title: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.func]),
    headerEvents: _propTypes2.default.object,
    events: _propTypes2.default.object,
    headerAlign: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    align: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    headerAttrs: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    attrs: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    sort: _propTypes2.default.bool,
    sortFunc: _propTypes2.default.func,
    onSort: _propTypes2.default.func,
    editor: _propTypes2.default.object,
    editable: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.func]),
    editCellStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    editCellClasses: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    editorStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    editorClasses: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    editorRenderer: _propTypes2.default.func,
    validator: _propTypes2.default.func,
    filter: _propTypes2.default.object,
    filterRenderer: _propTypes2.default.func,
    filterValue: _propTypes2.default.func,
    searchable: _propTypes2.default.bool
  }).isRequired,
  index: _propTypes2.default.number.isRequired,
  onSort: _propTypes2.default.func,
  sorting: _propTypes2.default.bool,
  sortOrder: _propTypes2.default.oneOf([_const2.default.SORT_ASC, _const2.default.SORT_DESC]),
  sortCaret: _propTypes2.default.func,
  isLastSorting: _propTypes2.default.bool,
  onFilter: _propTypes2.default.func,
  filterPosition: _propTypes2.default.oneOf([_const2.default.FILTERS_POSITION_INLINE, _const2.default.FILTERS_POSITION_BOTTOM, _const2.default.FILTERS_POSITION_TOP]),
  currFilters: _propTypes2.default.object,
  onExternalFilter: _propTypes2.default.func
};

exports.default = HeaderCell;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _bootstrap = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SortSymbol = function SortSymbol() {
  return _react2.default.createElement(
    _bootstrap.BootstrapContext.Consumer,
    null,
    function (_ref) {
      var bootstrap4 = _ref.bootstrap4;
      return bootstrap4 ? _react2.default.createElement('span', { className: 'order-4' }) : _react2.default.createElement(
        'span',
        { className: 'order' },
        _react2.default.createElement(
          'span',
          { className: 'dropdown' },
          _react2.default.createElement('span', { className: 'caret' })
        ),
        _react2.default.createElement(
          'span',
          { className: 'dropup' },
          _react2.default.createElement('span', { className: 'caret' })
        )
      );
    }
  );
};

exports.default = SortSymbol;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

var _bootstrap = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SortCaret = function SortCaret(_ref) {
  var order = _ref.order;

  var orderClass = (0, _classnames2.default)('react-bootstrap-table-sort-order', {
    dropup: order === _const2.default.SORT_ASC
  });

  return _react2.default.createElement(
    _bootstrap.BootstrapContext.Consumer,
    null,
    function (_ref2) {
      var bootstrap4 = _ref2.bootstrap4;
      return bootstrap4 ? _react2.default.createElement('span', { className: 'caret-4-' + order }) : _react2.default.createElement(
        'span',
        { className: orderClass },
        _react2.default.createElement('span', { className: 'caret' })
      );
    }
  );
};

SortCaret.propTypes = {
  order: _propTypes2.default.oneOf([_const2.default.SORT_ASC, _const2.default.SORT_DESC]).isRequired
};

exports.default = SortCaret;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.9.1
//     http://underscorejs.org
//     (c) 2009-2018 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` (`self`) in the browser, `global`
  // on the server, or `this` in some virtual machines. We use `self`
  // instead of `window` for `WebWorker` support.
  var root = typeof self == 'object' && self.self === self && self ||
            typeof global == 'object' && global.global === global && global ||
            this ||
            {};

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype;
  var SymbolProto = typeof Symbol !== 'undefined' ? Symbol.prototype : null;

  // Create quick reference variables for speed access to core prototypes.
  var push = ArrayProto.push,
      slice = ArrayProto.slice,
      toString = ObjProto.toString,
      hasOwnProperty = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var nativeIsArray = Array.isArray,
      nativeKeys = Object.keys,
      nativeCreate = Object.create;

  // Naked function reference for surrogate-prototype-swapping.
  var Ctor = function(){};

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for their old module API. If we're in
  // the browser, add `_` as a global object.
  // (`nodeType` is checked to ensure that `module`
  // and `exports` are not HTML elements.)
  if (typeof exports != 'undefined' && !exports.nodeType) {
    if (typeof module != 'undefined' && !module.nodeType && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.9.1';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var optimizeCb = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      // The 2-argument case is omitted because we’re not using it.
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  var builtinIteratee;

  // An internal function to generate callbacks that can be applied to each
  // element in a collection, returning the desired result — either `identity`,
  // an arbitrary callback, a property matcher, or a property accessor.
  var cb = function(value, context, argCount) {
    if (_.iteratee !== builtinIteratee) return _.iteratee(value, context);
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value) && !_.isArray(value)) return _.matcher(value);
    return _.property(value);
  };

  // External wrapper for our callback generator. Users may customize
  // `_.iteratee` if they want additional predicate/iteratee shorthand styles.
  // This abstraction hides the internal-only argCount argument.
  _.iteratee = builtinIteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  // Some functions take a variable number of arguments, or a few expected
  // arguments at the beginning and then a variable number of values to operate
  // on. This helper accumulates all remaining arguments past the function’s
  // argument length (or an explicit `startIndex`), into an array that becomes
  // the last argument. Similar to ES6’s "rest parameter".
  var restArguments = function(func, startIndex) {
    startIndex = startIndex == null ? func.length - 1 : +startIndex;
    return function() {
      var length = Math.max(arguments.length - startIndex, 0),
          rest = Array(length),
          index = 0;
      for (; index < length; index++) {
        rest[index] = arguments[index + startIndex];
      }
      switch (startIndex) {
        case 0: return func.call(this, rest);
        case 1: return func.call(this, arguments[0], rest);
        case 2: return func.call(this, arguments[0], arguments[1], rest);
      }
      var args = Array(startIndex + 1);
      for (index = 0; index < startIndex; index++) {
        args[index] = arguments[index];
      }
      args[startIndex] = rest;
      return func.apply(this, args);
    };
  };

  // An internal function for creating a new object that inherits from another.
  var baseCreate = function(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  };

  var shallowProperty = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  var has = function(obj, path) {
    return obj != null && hasOwnProperty.call(obj, path);
  }

  var deepGet = function(obj, path) {
    var length = path.length;
    for (var i = 0; i < length; i++) {
      if (obj == null) return void 0;
      obj = obj[path[i]];
    }
    return length ? obj : void 0;
  };

  // Helper for collection methods to determine whether a collection
  // should be iterated as an array or as an object.
  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = shallowProperty('length');
  var isArrayLike = function(collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Create a reducing function iterating left or right.
  var createReduce = function(dir) {
    // Wrap code that reassigns argument variables in a separate function than
    // the one that accesses `arguments.length` to avoid a perf hit. (#1991)
    var reducer = function(obj, iteratee, memo, initial) {
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          index = dir > 0 ? 0 : length - 1;
      if (!initial) {
        memo = obj[keys ? keys[index] : index];
        index += dir;
      }
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = keys ? keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    };

    return function(obj, iteratee, memo, context) {
      var initial = arguments.length >= 3;
      return reducer(obj, optimizeCb(iteratee, context, 4), memo, initial);
    };
  };

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = createReduce(1);

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = createReduce(-1);

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var keyFinder = isArrayLike(obj) ? _.findIndex : _.findKey;
    var key = keyFinder(obj, predicate, context);
    if (key !== void 0 && key !== -1) return obj[key];
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given item (using `===`).
  // Aliased as `includes` and `include`.
  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
    return _.indexOf(obj, item, fromIndex) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = restArguments(function(obj, path, args) {
    var contextPath, func;
    if (_.isFunction(path)) {
      func = path;
    } else if (_.isArray(path)) {
      contextPath = path.slice(0, -1);
      path = path[path.length - 1];
    }
    return _.map(obj, function(context) {
      var method = func;
      if (!method) {
        if (contextPath && contextPath.length) {
          context = deepGet(context, contextPath);
        }
        if (context == null) return void 0;
        method = context[path];
      }
      return method == null ? method : method.apply(context, args);
    });
  });

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matcher(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null || typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value != null && value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(v, index, list) {
        computed = iteratee(v, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = v;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null || typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value != null && value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(v, index, list) {
        computed = iteratee(v, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = v;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection.
  _.shuffle = function(obj) {
    return _.sample(obj, Infinity);
  };

  // Sample **n** random values from a collection using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    var sample = isArrayLike(obj) ? _.clone(obj) : _.values(obj);
    var length = getLength(sample);
    n = Math.max(Math.min(n, length), 0);
    var last = length - 1;
    for (var index = 0; index < n; index++) {
      var rand = _.random(index, last);
      var temp = sample[index];
      sample[index] = sample[rand];
      sample[rand] = temp;
    }
    return sample.slice(0, n);
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    var index = 0;
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function(value, key, list) {
      return {
        value: value,
        index: index++,
        criteria: iteratee(value, key, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior, partition) {
    return function(obj, iteratee, context) {
      var result = partition ? [[], []] : {};
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (has(result, key)) result[key]++; else result[key] = 1;
  });

  var reStrSymbol = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (_.isString(obj)) {
      // Keep surrogate pair characters together
      return obj.match(reStrSymbol);
    }
    if (isArrayLike(obj)) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = group(function(result, value, pass) {
    result[pass ? 0 : 1].push(value);
  }, true);

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null || array.length < 1) return n == null ? void 0 : [];
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array.
  _.last = function(array, n, guard) {
    if (array == null || array.length < 1) return n == null ? void 0 : [];
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, Boolean);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, output) {
    output = output || [];
    var idx = output.length;
    for (var i = 0, length = getLength(input); i < length; i++) {
      var value = input[i];
      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
        // Flatten current level of array or arguments object.
        if (shallow) {
          var j = 0, len = value.length;
          while (j < len) output[idx++] = value[j++];
        } else {
          flatten(value, shallow, strict, output);
          idx = output.length;
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = restArguments(function(array, otherArrays) {
    return _.difference(array, otherArrays);
  });

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // The faster algorithm will not work with an iteratee if the iteratee
  // is not a one-to-one function, so providing an iteratee will disable
  // the faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = getLength(array); i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted && !iteratee) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = restArguments(function(arrays) {
    return _.uniq(flatten(arrays, true, true));
  });

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = getLength(array); i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      var j;
      for (j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = restArguments(function(array, rest) {
    rest = flatten(rest, true, true);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  });

  // Complement of _.zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices.
  _.unzip = function(array) {
    var length = array && _.max(array, getLength).length || 0;
    var result = Array(length);

    for (var index = 0; index < length; index++) {
      result[index] = _.pluck(array, index);
    }
    return result;
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = restArguments(_.unzip);

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values. Passing by pairs is the reverse of _.pairs.
  _.object = function(list, values) {
    var result = {};
    for (var i = 0, length = getLength(list); i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Generator function to create the findIndex and findLastIndex functions.
  var createPredicateIndexFinder = function(dir) {
    return function(array, predicate, context) {
      predicate = cb(predicate, context);
      var length = getLength(array);
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array)) return index;
      }
      return -1;
    };
  };

  // Returns the first index on an array-like that passes a predicate test.
  _.findIndex = createPredicateIndexFinder(1);
  _.findLastIndex = createPredicateIndexFinder(-1);

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = getLength(array);
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Generator function to create the indexOf and lastIndexOf functions.
  var createIndexFinder = function(dir, predicateFind, sortedIndex) {
    return function(array, item, idx) {
      var i = 0, length = getLength(array);
      if (typeof idx == 'number') {
        if (dir > 0) {
          i = idx >= 0 ? idx : Math.max(idx + length, i);
        } else {
          length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
        }
      } else if (sortedIndex && idx && length) {
        idx = sortedIndex(array, item);
        return array[idx] === item ? idx : -1;
      }
      if (item !== item) {
        idx = predicateFind(slice.call(array, i, length), _.isNaN);
        return idx >= 0 ? idx + i : -1;
      }
      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
        if (array[idx] === item) return idx;
      }
      return -1;
    };
  };

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    if (!step) {
      step = stop < start ? -1 : 1;
    }

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Chunk a single array into multiple arrays, each containing `count` or fewer
  // items.
  _.chunk = function(array, count) {
    if (count == null || count < 1) return [];
    var result = [];
    var i = 0, length = array.length;
    while (i < length) {
      result.push(slice.call(array, i, i += count));
    }
    return result;
  };

  // Function (ahem) Functions
  // ------------------

  // Determines whether to execute a function as a constructor
  // or a normal function with the provided arguments.
  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
  };

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = restArguments(function(func, context, args) {
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var bound = restArguments(function(callArgs) {
      return executeBound(func, bound, context, this, args.concat(callArgs));
    });
    return bound;
  });

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder by default, allowing any combination of arguments to be
  // pre-filled. Set `_.partial.placeholder` for a custom placeholder argument.
  _.partial = restArguments(function(func, boundArgs) {
    var placeholder = _.partial.placeholder;
    var bound = function() {
      var position = 0, length = boundArgs.length;
      var args = Array(length);
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === placeholder ? arguments[position++] : boundArgs[i];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
    return bound;
  });

  _.partial.placeholder = _;

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = restArguments(function(obj, keys) {
    keys = flatten(keys, false, false);
    var index = keys.length;
    if (index < 1) throw new Error('bindAll must be passed function names');
    while (index--) {
      var key = keys[index];
      obj[key] = _.bind(obj[key], obj);
    }
  });

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = restArguments(function(func, wait, args) {
    return setTimeout(function() {
      return func.apply(null, args);
    }, wait);
  });

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = _.partial(_.delay, _, 1);

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var timeout, context, args, result;
    var previous = 0;
    if (!options) options = {};

    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };

    var throttled = function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };

    throttled.cancel = function() {
      clearTimeout(timeout);
      previous = 0;
      timeout = context = args = null;
    };

    return throttled;
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, result;

    var later = function(context, args) {
      timeout = null;
      if (args) result = func.apply(context, args);
    };

    var debounced = restArguments(function(args) {
      if (timeout) clearTimeout(timeout);
      if (immediate) {
        var callNow = !timeout;
        timeout = setTimeout(later, wait);
        if (callNow) result = func.apply(this, args);
      } else {
        timeout = _.delay(later, wait, this, args);
      }

      return result;
    });

    debounced.cancel = function() {
      clearTimeout(timeout);
      timeout = null;
    };

    return debounced;
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed on and after the Nth call.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed up to (but not including) the Nth call.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }
      if (times <= 1) func = null;
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  _.restArguments = restArguments;

  // Object Functions
  // ----------------

  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
    'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  var collectNonEnumProps = function(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = _.isFunction(constructor) && constructor.prototype || ObjProto;

    // Constructor is a special case.
    var prop = 'constructor';
    if (has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  };

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`.
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve all the property names of an object.
  _.allKeys = function(obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Returns the results of applying the iteratee to each element of the object.
  // In contrast to _.map it returns an object.
  _.mapObject = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = _.keys(obj),
        length = keys.length,
        results = {};
    for (var index = 0; index < length; index++) {
      var currentKey = keys[index];
      results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Convert an object into a list of `[key, value]` pairs.
  // The opposite of _.object.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`.
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // An internal function for creating assigner functions.
  var createAssigner = function(keysFunc, defaults) {
    return function(obj) {
      var length = arguments.length;
      if (defaults) obj = Object(obj);
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!defaults || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = createAssigner(_.allKeys);

  // Assigns a given object with all the own properties in the passed-in object(s).
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  _.extendOwn = _.assign = createAssigner(_.keys);

  // Returns the first key on an object that passes a predicate test.
  _.findKey = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj), key;
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  };

  // Internal pick helper function to determine if `obj` has key `key`.
  var keyInObj = function(value, key, obj) {
    return key in obj;
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = restArguments(function(obj, keys) {
    var result = {}, iteratee = keys[0];
    if (obj == null) return result;
    if (_.isFunction(iteratee)) {
      if (keys.length > 1) iteratee = optimizeCb(iteratee, keys[1]);
      keys = _.allKeys(obj);
    } else {
      iteratee = keyInObj;
      keys = flatten(keys, false, false);
      obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
  });

  // Return a copy of the object without the blacklisted properties.
  _.omit = restArguments(function(obj, keys) {
    var iteratee = keys[0], context;
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
      if (keys.length > 1) context = keys[1];
    } else {
      keys = _.map(flatten(keys, false, false), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  });

  // Fill in a given object with default properties.
  _.defaults = createAssigner(_.allKeys, true);

  // Creates an object that inherits from the given prototype object.
  // If additional properties are provided then they will be added to the
  // created object.
  _.create = function(prototype, props) {
    var result = baseCreate(prototype);
    if (props) _.extendOwn(result, props);
    return result;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Returns whether an object has a given set of `key:value` pairs.
  _.isMatch = function(object, attrs) {
    var keys = _.keys(attrs), length = keys.length;
    if (object == null) return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
      var key = keys[i];
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  };


  // Internal recursive comparison function for `isEqual`.
  var eq, deepEq;
  eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // `null` or `undefined` only equal to itself (strict comparison).
    if (a == null || b == null) return false;
    // `NaN`s are equivalent, but non-reflexive.
    if (a !== a) return b !== b;
    // Exhaust primitive checks
    var type = typeof a;
    if (type !== 'function' && type !== 'object' && typeof b != 'object') return false;
    return deepEq(a, b, aStack, bStack);
  };

  // Internal recursive comparison function for `isEqual`.
  deepEq = function(a, b, aStack, bStack) {
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN.
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
      case '[object Symbol]':
        return SymbolProto.valueOf.call(a) === SymbolProto.valueOf.call(b);
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
      if (typeof a != 'object' || typeof b != 'object') return false;

      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                               _.isFunction(bCtor) && bCtor instanceof bCtor)
                          && ('constructor' in a && 'constructor' in b)) {
        return false;
      }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false;
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      length = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (_.keys(b).length !== length) return false;
      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError, isMap, isWeakMap, isSet, isWeakSet.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error', 'Symbol', 'Map', 'WeakMap', 'Set', 'WeakSet'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
  // IE 11 (#1621), Safari 8 (#1929), and PhantomJS (#2236).
  var nodelist = root.document && root.document.childNodes;
  if (typeof /./ != 'function' && typeof Int8Array != 'object' && typeof nodelist != 'function') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return !_.isSymbol(obj) && isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`?
  _.isNaN = function(obj) {
    return _.isNumber(obj) && isNaN(obj);
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, path) {
    if (!_.isArray(path)) {
      return has(obj, path);
    }
    var length = path.length;
    for (var i = 0; i < length; i++) {
      var key = path[i];
      if (obj == null || !hasOwnProperty.call(obj, key)) {
        return false;
      }
      obj = obj[key];
    }
    return !!length;
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  // Creates a function that, when passed an object, will traverse that object’s
  // properties down the given `path`, specified as an array of keys or indexes.
  _.property = function(path) {
    if (!_.isArray(path)) {
      return shallowProperty(path);
    }
    return function(obj) {
      return deepGet(obj, path);
    };
  };

  // Generates a function for a given object that returns a given property.
  _.propertyOf = function(obj) {
    if (obj == null) {
      return function(){};
    }
    return function(path) {
      return !_.isArray(path) ? obj[path] : deepGet(obj, path);
    };
  };

  // Returns a predicate for checking whether an object has a given set of
  // `key:value` pairs.
  _.matcher = _.matches = function(attrs) {
    attrs = _.extendOwn({}, attrs);
    return function(obj) {
      return _.isMatch(obj, attrs);
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

  // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped.
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // Traverses the children of `obj` along `path`. If a child is a function, it
  // is invoked with its parent as context. Returns the value of the final
  // child, or `fallback` if any child is undefined.
  _.result = function(obj, path, fallback) {
    if (!_.isArray(path)) path = [path];
    var length = path.length;
    if (!length) {
      return _.isFunction(fallback) ? fallback.call(obj) : fallback;
    }
    for (var i = 0; i < length; i++) {
      var prop = obj == null ? void 0 : obj[path[i]];
      if (prop === void 0) {
        prop = fallback;
        i = length; // Ensure we don't continue iterating.
      }
      obj = _.isFunction(prop) ? prop.call(obj) : prop;
    }
    return obj;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate: /<%([\s\S]+?)%>/g,
    interpolate: /<%=([\s\S]+?)%>/g,
    escape: /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'": "'",
    '\\': '\\',
    '\r': 'r',
    '\n': 'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offset.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    var render;
    try {
      render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var chainResult = function(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return chainResult(this, func.apply(_, args));
      };
    });
    return _;
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return chainResult(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return chainResult(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // Provide unwrapping proxy for some methods used in engine operations
  // such as arithmetic and JSON stringification.
  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

  _.prototype.toString = function() {
    return String(this._wrapped);
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
      return _;
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}());

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35), __webpack_require__(36)(module)))

/***/ }),
/* 35 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckBox = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

var _bootstrap = __webpack_require__(5);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/require-default-props: 0 */


var CheckBox = exports.CheckBox = function CheckBox(_ref) {
  var className = _ref.className,
      checked = _ref.checked,
      indeterminate = _ref.indeterminate;
  return _react2.default.createElement('input', {
    type: 'checkbox',
    checked: checked,
    className: className,
    ref: function ref(input) {
      if (input) input.indeterminate = indeterminate; // eslint-disable-line no-param-reassign
    },
    onChange: function onChange() {}
  });
};

CheckBox.propTypes = {
  checked: _propTypes2.default.bool.isRequired,
  indeterminate: _propTypes2.default.bool.isRequired,
  className: _propTypes2.default.string
};

var SelectionHeaderCell = function (_Component) {
  _inherits(SelectionHeaderCell, _Component);

  function SelectionHeaderCell() {
    _classCallCheck(this, SelectionHeaderCell);

    var _this = _possibleConstructorReturn(this, (SelectionHeaderCell.__proto__ || Object.getPrototypeOf(SelectionHeaderCell)).call(this));

    _this.handleCheckBoxClick = _this.handleCheckBoxClick.bind(_this);
    return _this;
  }

  /**
   * avoid updating if button is
   * 1. radio
   * 2. status was not changed.
   */


  _createClass(SelectionHeaderCell, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var ROW_SELECT_SINGLE = _const2.default.ROW_SELECT_SINGLE;
      var _props = this.props,
          mode = _props.mode,
          checkedStatus = _props.checkedStatus;


      if (mode === ROW_SELECT_SINGLE) return false;

      return nextProps.checkedStatus !== checkedStatus;
    }
  }, {
    key: 'handleCheckBoxClick',
    value: function handleCheckBoxClick(e) {
      var _props2 = this.props,
          onAllRowsSelect = _props2.onAllRowsSelect,
          checkedStatus = _props2.checkedStatus;

      var isUnSelect = checkedStatus === _const2.default.CHECKBOX_STATUS_CHECKED || checkedStatus === _const2.default.CHECKBOX_STATUS_INDETERMINATE;

      onAllRowsSelect(e, isUnSelect);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var CHECKBOX_STATUS_CHECKED = _const2.default.CHECKBOX_STATUS_CHECKED,
          CHECKBOX_STATUS_INDETERMINATE = _const2.default.CHECKBOX_STATUS_INDETERMINATE,
          ROW_SELECT_MULTIPLE = _const2.default.ROW_SELECT_MULTIPLE;
      var _props3 = this.props,
          mode = _props3.mode,
          checkedStatus = _props3.checkedStatus,
          selectionHeaderRenderer = _props3.selectionHeaderRenderer,
          hideSelectAll = _props3.hideSelectAll,
          headerColumnStyle = _props3.headerColumnStyle;

      if (hideSelectAll) {
        return _react2.default.createElement('th', { 'data-row-selection': true });
      }

      var checked = checkedStatus === CHECKBOX_STATUS_CHECKED;

      var indeterminate = checkedStatus === CHECKBOX_STATUS_INDETERMINATE;

      var attrs = {};
      var content = void 0;
      if (selectionHeaderRenderer || mode === ROW_SELECT_MULTIPLE) {
        attrs.onClick = this.handleCheckBoxClick;
      }

      attrs.style = _utils2.default.isFunction(headerColumnStyle) ? headerColumnStyle(checkedStatus) : headerColumnStyle;

      return _react2.default.createElement(
        _bootstrap.BootstrapContext.Consumer,
        null,
        function (_ref2) {
          var bootstrap4 = _ref2.bootstrap4;

          if (selectionHeaderRenderer) {
            content = selectionHeaderRenderer({
              mode: mode,
              checked: checked,
              indeterminate: indeterminate
            });
          } else if (mode === ROW_SELECT_MULTIPLE) {
            content = _react2.default.createElement(CheckBox, _extends({}, _this2.props, {
              checked: checked,
              className: bootstrap4 ? 'selection-input-4' : '',
              indeterminate: indeterminate
            }));
          }
          return _react2.default.createElement(
            'th',
            _extends({ className: 'selection-cell-header', 'data-row-selection': true }, attrs),
            content
          );
        }
      );
    }
  }]);

  return SelectionHeaderCell;
}(_react.Component);

SelectionHeaderCell.propTypes = {
  mode: _propTypes2.default.string.isRequired,
  checkedStatus: _propTypes2.default.string,
  onAllRowsSelect: _propTypes2.default.func,
  hideSelectAll: _propTypes2.default.bool,
  selectionHeaderRenderer: _propTypes2.default.func,
  headerColumnStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func])
};
exports.default = SelectionHeaderCell;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/require-default-props: 0 */
/* eslint no-nested-ternary: 0 */


var ExpansionHeaderCell = function (_Component) {
  _inherits(ExpansionHeaderCell, _Component);

  function ExpansionHeaderCell() {
    _classCallCheck(this, ExpansionHeaderCell);

    var _this = _possibleConstructorReturn(this, (ExpansionHeaderCell.__proto__ || Object.getPrototypeOf(ExpansionHeaderCell)).call(this));

    _this.handleCheckBoxClick = _this.handleCheckBoxClick.bind(_this);
    return _this;
  }

  _createClass(ExpansionHeaderCell, [{
    key: 'handleCheckBoxClick',
    value: function handleCheckBoxClick(e) {
      var _props = this.props,
          isAnyExpands = _props.isAnyExpands,
          onAllRowExpand = _props.onAllRowExpand;


      onAllRowExpand(e, !isAnyExpands);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          isAnyExpands = _props2.isAnyExpands,
          expandHeaderColumnRenderer = _props2.expandHeaderColumnRenderer;

      var attrs = {
        onClick: this.handleCheckBoxClick
      };

      return _react2.default.createElement(
        'th',
        _extends({ className: 'expand-cell-header', 'data-row-selection': true }, attrs),
        expandHeaderColumnRenderer ? expandHeaderColumnRenderer({ isAnyExpands: isAnyExpands }) : isAnyExpands ? '(-)' : '(+)'
      );
    }
  }]);

  return ExpansionHeaderCell;
}(_react.Component);

ExpansionHeaderCell.propTypes = {
  isAnyExpands: _propTypes2.default.bool.isRequired,
  onAllRowExpand: _propTypes2.default.func.isRequired,
  expandHeaderColumnRenderer: _propTypes2.default.func
};
exports.default = ExpansionHeaderCell;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _selectionContext = __webpack_require__(10);

var _selectionContext2 = _interopRequireDefault(_selectionContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Component) {
  return function () {
    return _react2.default.createElement(
      _selectionContext2.default.Consumer,
      null,
      function (selectRow) {
        return _react2.default.createElement(Component, selectRow);
      }
    );
  };
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getExpandedRows = exports.expandableKeys = exports.isAnyExpands = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _rows = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isAnyExpands = exports.isAnyExpands = function isAnyExpands(data, keyField) {
  var expanded = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var _loop = function _loop(i) {
    var rowKey = _utils2.default.get(data[i], keyField);
    if (typeof expanded.find(function (x) {
      return x === rowKey;
    }) !== 'undefined') {
      return {
        v: true
      };
    }
  };

  for (var i = 0; i < data.length; i += 1) {
    var _ret = _loop(i);

    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
  }
  return false;
};

var expandableKeys = exports.expandableKeys = function expandableKeys(data, keyField) {
  var skips = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  if (skips.length === 0) {
    return data.map(function (row) {
      return _utils2.default.get(row, keyField);
    });
  }
  return data.filter(function (row) {
    return !_utils2.default.contains(skips, _utils2.default.get(row, keyField));
  }).map(function (row) {
    return _utils2.default.get(row, keyField);
  });
};

var getExpandedRows = exports.getExpandedRows = function getExpandedRows(data, keyField, expanded) {
  return expanded.map(function (k) {
    return (0, _rows.getRowByRowId)(data, keyField, k);
  });
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.editCell = undefined;

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _rows = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var editCell = exports.editCell = function editCell(data, keyField, rowId, dataField, newValue) {
  var row = (0, _rows.getRowByRowId)(data, keyField, rowId);
  if (row) _utils2.default.set(row, dataField, newValue);
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nextOrder = exports.sort = undefined;

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /* eslint no-nested-ternary: 0 */
/* eslint no-lonely-if: 0 */
/* eslint no-underscore-dangle: 0 */


function comparator(a, b) {
  var result = void 0;
  if (typeof b === 'string') {
    result = b.localeCompare(a);
  } else {
    result = a > b ? -1 : a < b ? 1 : 0;
  }
  return result;
}

var sort = exports.sort = function sort(data, sortOrder, _ref) {
  var dataField = _ref.dataField,
      sortFunc = _ref.sortFunc,
      sortValue = _ref.sortValue;

  var _data = [].concat(_toConsumableArray(data));
  _data.sort(function (a, b) {
    var result = void 0;
    var valueA = _utils2.default.get(a, dataField);
    var valueB = _utils2.default.get(b, dataField);
    if (sortValue) {
      valueA = sortValue(valueA, a);
      valueB = sortValue(valueB, b);
    } else {
      valueA = _utils2.default.isDefined(valueA) ? valueA : '';
      valueB = _utils2.default.isDefined(valueB) ? valueB : '';
    }

    if (sortFunc) {
      result = sortFunc(valueA, valueB, sortOrder, dataField, a, b);
    } else {
      if (sortOrder === _const2.default.SORT_DESC) {
        result = comparator(valueA, valueB);
      } else {
        result = comparator(valueB, valueA);
      }
    }
    return result;
  });
  return _data;
};

var nextOrder = exports.nextOrder = function nextOrder(currentSortColumn, _ref2) {
  var sortOrder = _ref2.sortOrder,
      sortColumn = _ref2.sortColumn;
  var defaultOrder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _const2.default.SORT_DESC;

  if (!sortColumn || currentSortColumn.dataField !== sortColumn.dataField) return defaultOrder;
  return sortOrder === _const2.default.SORT_DESC ? _const2.default.SORT_ASC : _const2.default.SORT_DESC;
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeConvert = undefined;

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var typeConvert = exports.typeConvert = function typeConvert(type, value) {
  if (type === _const2.default.TYPE_STRING) {
    return String(value);
  } else if (type === _const2.default.TYPE_NUMBER) {
    return Number(value);
  } else if (type === _const2.default.TYPE_BOOLEAN) {
    if (typeof value === 'boolean') {
      return value;
    }
    return value === 'true';
  } else if (type === _const2.default.TYPE_DATE) {
    return new Date(value);
  }
  return value;
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _rowExpandContext = __webpack_require__(12);

var _rowExpandContext2 = _interopRequireDefault(_rowExpandContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Component) {
  return function () {
    return _react2.default.createElement(
      _rowExpandContext2.default.Consumer,
      null,
      function (expandRow) {
        return _react2.default.createElement(Component, expandRow);
      }
    );
  };
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _filtersCell = __webpack_require__(46);

var _filtersCell2 = _interopRequireDefault(_filtersCell);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

var _rowTemplate = __webpack_require__(16);

var _rowTemplate2 = _interopRequireDefault(_rowTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Filters = function Filters(props) {
  var columns = props.columns,
      onFilter = props.onFilter,
      currFilters = props.currFilters,
      filterPosition = props.filterPosition,
      onExternalFilter = props.onExternalFilter,
      className = props.className,
      selectRow = props.selectRow,
      expandRow = props.expandRow;


  function renderContent() {
    var filterColumns = [];
    var showFiltersRow = false;

    columns.forEach(function (column, i) {
      filterColumns.push(_react2.default.createElement(_filtersCell2.default, {
        index: i,
        key: column.dataField,
        column: column,
        currFilters: currFilters,
        onExternalFilter: onExternalFilter,
        onFilter: onFilter
      }));

      if (column.filterRenderer || column.filter) {
        if (!showFiltersRow) {
          showFiltersRow = true;
        }
      }
    });
    return filterColumns;
  }

  return _react2.default.createElement(
    'tbody',
    {
      className: className,
      style: {
        display: filterPosition === _const2.default.FILTERS_POSITION_TOP ? 'table-header-group' : 'table-footer-group'
      }
    },
    _react2.default.createElement(_rowTemplate2.default, {
      renderContent: renderContent,
      selectRow: selectRow,
      expandRow: expandRow,
      cellEl: 'td'
    })
  );
}; /* eslint react/require-default-props: 0 */


Filters.propTypes = {
  columns: _propTypes2.default.array.isRequired,
  onFilter: _propTypes2.default.func,
  filterPosition: _propTypes2.default.oneOf([_const2.default.FILTERS_POSITION_TOP, _const2.default.FILTERS_POSITION_INLINE, _const2.default.FILTERS_POSITION_BOTTOM]),
  currFilters: _propTypes2.default.object,
  onExternalFilter: _propTypes2.default.func,
  className: _propTypes2.default.string,
  selectRow: _propTypes2.default.object,
  expandRow: _propTypes2.default.object
};

Filters.defaultProps = {
  position: _const2.default.FILTERS_POSITION_TOP
};

exports.default = Filters;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FiltersCell = function FiltersCell(props) {
  var index = props.index,
      column = props.column,
      onExternalFilter = props.onExternalFilter,
      currFilters = props.currFilters,
      onFilter = props.onFilter;
  var filterRenderer = column.filterRenderer,
      filter = column.filter;

  var filterElm = void 0;
  var cellAttrs = {};
  var cellStyle = {};
  cellAttrs.style = cellStyle;
  if (column.headerAlign) {
    cellStyle.textAlign = _utils2.default.isFunction(column.headerAlign) ? column.headerAlign(column, index) : column.headerAlign;
  }
  if (column.filterRenderer) {
    var onCustomFilter = onExternalFilter(column, filter.props.type);
    filterElm = filterRenderer(onCustomFilter, column);
  } else if (filter) {
    filterElm = _react2.default.createElement(filter.Filter, _extends({}, filter.props, {
      filterState: currFilters[column.dataField],
      onFilter: onFilter,
      column: column
    }));
  }
  return _react2.default.createElement('th', cellAttrs, filterElm);
};

FiltersCell.propTypes = {
  index: _propTypes2.default.number.isRequired,
  column: _propTypes2.default.object.isRequired,
  currFilters: _propTypes2.default.object.isRequired,
  onFilter: _propTypes2.default.func,
  onExternalFilter: _propTypes2.default.func
};

FiltersCell.defaultProps = {
  onFilter: function onFilter() {},
  onExternalFilter: function onExternalFilter() {}
};

exports.default = FiltersCell;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint react/require-default-props: 0 */
var Caption = function Caption(props) {
  if (!props.children) return null;

  var caption = props.bootstrap4 ? _react2.default.createElement(
    'caption',
    { style: { captionSide: 'top' } },
    props.children
  ) : _react2.default.createElement(
    'caption',
    null,
    props.children
  );

  return caption;
};

Caption.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.string]),
  bootstrap4: _propTypes2.default.bool
};

exports.default = Caption;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _simpleRow = __webpack_require__(49);

var _simpleRow2 = _interopRequireDefault(_simpleRow);

var _aggregateRow = __webpack_require__(51);

var _aggregateRow2 = _interopRequireDefault(_aggregateRow);

var _rowSection = __webpack_require__(54);

var _rowSection2 = _interopRequireDefault(_rowSection);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

var _rowConsumer = __webpack_require__(55);

var _rowConsumer2 = _interopRequireDefault(_rowConsumer);

var _rowConsumer3 = __webpack_require__(56);

var _rowConsumer4 = _interopRequireDefault(_rowConsumer3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prop-types: 0 */
/* eslint react/require-default-props: 0 */

var Body = function (_React$Component) {
  _inherits(Body, _React$Component);

  function Body(props) {
    _classCallCheck(this, Body);

    var _this = _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).call(this, props));

    var keyField = props.keyField,
        cellEdit = props.cellEdit,
        selectRow = props.selectRow,
        expandRow = props.expandRow;

    // Construct Editing Cell Component

    if (cellEdit.createContext) {
      _this.EditingCell = cellEdit.createEditingCell(_utils2.default, cellEdit.options.onStartEdit);
    }

    // Construct Row Component
    var RowComponent = _simpleRow2.default;
    var selectRowEnabled = selectRow.mode !== _const2.default.ROW_SELECT_DISABLED;
    var expandRowEnabled = !!expandRow.renderer;

    if (expandRowEnabled) {
      RowComponent = (0, _rowConsumer4.default)(_aggregateRow2.default);
    }

    if (selectRowEnabled) {
      RowComponent = (0, _rowConsumer2.default)(expandRowEnabled ? RowComponent : _aggregateRow2.default);
    }

    if (cellEdit.createContext) {
      RowComponent = cellEdit.withRowLevelCellEdit(RowComponent, selectRowEnabled, keyField, _utils2.default);
    }
    _this.RowComponent = RowComponent;
    return _this;
  }

  _createClass(Body, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          columns = _props.columns,
          data = _props.data,
          tabIndexCell = _props.tabIndexCell,
          keyField = _props.keyField,
          isEmpty = _props.isEmpty,
          noDataIndication = _props.noDataIndication,
          visibleColumnSize = _props.visibleColumnSize,
          cellEdit = _props.cellEdit,
          selectRow = _props.selectRow,
          rowStyle = _props.rowStyle,
          rowClasses = _props.rowClasses,
          rowEvents = _props.rowEvents,
          expandRow = _props.expandRow,
          className = _props.className;


      var content = void 0;

      if (isEmpty) {
        var indication = _utils2.default.isFunction(noDataIndication) ? noDataIndication() : noDataIndication;
        if (!indication) {
          return null;
        }
        content = _react2.default.createElement(_rowSection2.default, { content: indication, colSpan: visibleColumnSize });
      } else {
        var selectRowEnabled = selectRow.mode !== _const2.default.ROW_SELECT_DISABLED;
        var expandRowEnabled = !!expandRow.renderer;

        var additionalRowProps = {};

        if (cellEdit.createContext) {
          additionalRowProps.EditingCellComponent = this.EditingCell;
        }

        if (selectRowEnabled || expandRowEnabled) {
          additionalRowProps.expandRow = expandRow;
          additionalRowProps.selectRow = selectRow;
        }

        content = data.map(function (row, index) {
          var key = _utils2.default.get(row, keyField);
          var baseRowProps = _extends({
            key: key,
            row: row,
            tabIndexCell: tabIndexCell,
            columns: columns,
            keyField: keyField,
            cellEdit: cellEdit,
            value: key,
            rowIndex: index,
            visibleColumnSize: visibleColumnSize,
            attrs: rowEvents || {}
          }, additionalRowProps);

          baseRowProps.style = _utils2.default.isFunction(rowStyle) ? rowStyle(row, index) : rowStyle;
          baseRowProps.className = _utils2.default.isFunction(rowClasses) ? rowClasses(row, index) : rowClasses;

          return _react2.default.createElement(_this2.RowComponent, baseRowProps);
        });
      }

      return _react2.default.createElement(
        'tbody',
        { className: className },
        content
      );
    }
  }]);

  return Body;
}(_react2.default.Component);

Body.propTypes = {
  keyField: _propTypes2.default.string.isRequired,
  data: _propTypes2.default.array.isRequired,
  columns: _propTypes2.default.array.isRequired,
  selectRow: _propTypes2.default.object
};

exports.default = Body;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rowPureContent = __webpack_require__(17);

var _rowPureContent2 = _interopRequireDefault(_rowPureContent);

var _eventDelegater = __webpack_require__(18);

var _eventDelegater2 = _interopRequireDefault(_eventDelegater);

var _shouldUpdater2 = __webpack_require__(19);

var _shouldUpdater3 = _interopRequireDefault(_shouldUpdater2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prop-types: 0 */
/* eslint react/no-array-index-key: 0 */


var SimpleRow = function (_shouldUpdater) {
  _inherits(SimpleRow, _shouldUpdater);

  function SimpleRow(props) {
    _classCallCheck(this, SimpleRow);

    var _this = _possibleConstructorReturn(this, (SimpleRow.__proto__ || Object.getPrototypeOf(SimpleRow)).call(this, props));

    _this.shouldUpdateRowContent = false;
    return _this;
  }

  _createClass(SimpleRow, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      this.shouldUpdateRowContent = false;
      this.shouldUpdateRowContent = this.shouldRowContentUpdate(nextProps);
      if (this.shouldUpdateRowContent) return true;

      return this.shouldUpdatedBySelfProps(nextProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style,
          attrs = _props.attrs,
          visibleColumnSize = _props.visibleColumnSize,
          tabIndexCell = _props.tabIndexCell,
          rest = _objectWithoutProperties(_props, ['className', 'style', 'attrs', 'visibleColumnSize', 'tabIndexCell']);

      var trAttrs = this.delegate(attrs);
      var tabIndexStart = this.props.rowIndex * visibleColumnSize + 1;

      return _react2.default.createElement(
        'tr',
        _extends({ style: style, className: className }, trAttrs),
        _react2.default.createElement(_rowPureContent2.default, _extends({
          shouldUpdate: this.shouldUpdateRowContent,
          tabIndexStart: tabIndexCell ? tabIndexStart : -1
        }, rest))
      );
    }
  }]);

  return SimpleRow;
}((0, _shouldUpdater3.default)((0, _eventDelegater2.default)(_react.Component)));

SimpleRow.propTypes = {
  row: _propTypes2.default.object.isRequired,
  rowIndex: _propTypes2.default.number.isRequired,
  columns: _propTypes2.default.array.isRequired,
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  attrs: _propTypes2.default.object
};

SimpleRow.defaultProps = {
  editable: true,
  style: {},
  className: null,
  attrs: {}
};

exports.default = SimpleRow;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _cellEventDelegater = __webpack_require__(9);

var _cellEventDelegater2 = _interopRequireDefault(_cellEventDelegater);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prop-types: 0 */


var Cell = function (_eventDelegater) {
  _inherits(Cell, _eventDelegater);

  function Cell(props) {
    _classCallCheck(this, Cell);

    var _this = _possibleConstructorReturn(this, (Cell.__proto__ || Object.getPrototypeOf(Cell)).call(this, props));

    _this.createHandleEditingCell = function (originFunc) {
      return function (e) {
        var _this$props = _this.props,
            onStart = _this$props.onStart,
            rowIndex = _this$props.rowIndex,
            columnIndex = _this$props.columnIndex,
            clickToEdit = _this$props.clickToEdit,
            dbclickToEdit = _this$props.dbclickToEdit;

        if ((clickToEdit || dbclickToEdit) && _utils2.default.isFunction(originFunc)) {
          originFunc(e);
        }
        if (onStart) {
          onStart(rowIndex, columnIndex);
        }
      };
    };

    _this.createHandleEditingCell = _this.createHandleEditingCell.bind(_this);
    return _this;
  }

  _createClass(Cell, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var shouldUpdate = false;
      if (nextProps.column.isDummyField) {
        shouldUpdate = !_utils2.default.isEqual(this.props.row, nextProps.row);
      } else {
        shouldUpdate = _utils2.default.get(this.props.row, this.props.column.dataField) !== _utils2.default.get(nextProps.row, nextProps.column.dataField);
      }

      if (shouldUpdate) return true;

      // if (nextProps.formatter)

      shouldUpdate = (nextProps.column.formatter ? !_utils2.default.isEqual(this.props.row, nextProps.row) : false) || this.props.column.hidden !== nextProps.column.hidden || this.props.column.isDummyField !== nextProps.column.isDummyField || this.props.rowIndex !== nextProps.rowIndex || this.props.columnIndex !== nextProps.columnIndex || this.props.className !== nextProps.className || this.props.title !== nextProps.title || this.props.editable !== nextProps.editable || this.props.clickToEdit !== nextProps.clickToEdit || this.props.dbclickToEdit !== nextProps.dbclickToEdit || !_utils2.default.isEqual(this.props.style, nextProps.style) || !_utils2.default.isEqual(this.props.column.formatExtraData, nextProps.column.formatExtraData) || !_utils2.default.isEqual(this.props.column.events, nextProps.column.events) || !_utils2.default.isEqual(this.props.column.attrs, nextProps.column.attrs) || this.props.tabIndex !== nextProps.tabIndex;
      return shouldUpdate;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          row = _props.row,
          rowIndex = _props.rowIndex,
          column = _props.column,
          columnIndex = _props.columnIndex,
          onStart = _props.onStart,
          editable = _props.editable,
          clickToEdit = _props.clickToEdit,
          dbclickToEdit = _props.dbclickToEdit,
          rest = _objectWithoutProperties(_props, ['row', 'rowIndex', 'column', 'columnIndex', 'onStart', 'editable', 'clickToEdit', 'dbclickToEdit']);

      var dataField = column.dataField,
          formatter = column.formatter,
          formatExtraData = column.formatExtraData;

      var attrs = this.delegate(_extends({}, rest));
      var content = column.isDummyField ? null : _utils2.default.get(row, dataField);

      if (formatter) {
        content = column.formatter(content, row, rowIndex, formatExtraData);
      }

      if (clickToEdit && editable) {
        attrs.onClick = this.createHandleEditingCell(attrs.onClick);
      } else if (dbclickToEdit && editable) {
        attrs.onDoubleClick = this.createHandleEditingCell(attrs.onDoubleClick);
      }

      return _react2.default.createElement(
        'td',
        attrs,
        typeof content === 'boolean' ? '' + content : content
      );
    }
  }]);

  return Cell;
}((0, _cellEventDelegater2.default)(_react.Component));

Cell.propTypes = {
  row: _propTypes2.default.object.isRequired,
  rowIndex: _propTypes2.default.number.isRequired,
  column: _propTypes2.default.object.isRequired,
  columnIndex: _propTypes2.default.number.isRequired
};

exports.default = Cell;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _expandCell = __webpack_require__(52);

var _expandCell2 = _interopRequireDefault(_expandCell);

var _selectionCell = __webpack_require__(53);

var _selectionCell2 = _interopRequireDefault(_selectionCell);

var _shouldUpdater2 = __webpack_require__(19);

var _shouldUpdater3 = _interopRequireDefault(_shouldUpdater2);

var _eventDelegater = __webpack_require__(18);

var _eventDelegater2 = _interopRequireDefault(_eventDelegater);

var _rowPureContent = __webpack_require__(17);

var _rowPureContent2 = _interopRequireDefault(_rowPureContent);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint class-methods-use-this: 0 */
/* eslint react/prop-types: 0 */
/* eslint no-plusplus: 0 */


var RowAggregator = function (_shouldUpdater) {
  _inherits(RowAggregator, _shouldUpdater);

  function RowAggregator(props) {
    _classCallCheck(this, RowAggregator);

    var _this = _possibleConstructorReturn(this, (RowAggregator.__proto__ || Object.getPrototypeOf(RowAggregator)).call(this, props));

    _this.clickNum = 0;
    _this.shouldUpdateRowContent = false;
    _this.createClickEventHandler = _this.createClickEventHandler.bind(_this);
    return _this;
  }

  _createClass(RowAggregator, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      if (this.props.selected !== nextProps.selected || this.props.expanded !== nextProps.expanded || this.props.expandable !== nextProps.expandable || this.props.selectable !== nextProps.selectable || this.props.selectRow.hideSelectColumn !== nextProps.selectRow.hideSelectColumn || this.shouldUpdatedBySelfProps(nextProps)) {
        this.shouldUpdateRowContent = this.shouldRowContentUpdate(nextProps);
        return true;
      }
      this.shouldUpdateRowContent = this.shouldRowContentUpdate(nextProps);

      return this.shouldUpdateRowContent;
    }
  }, {
    key: 'isRenderFunctionColumnInLeft',
    value: function isRenderFunctionColumnInLeft() {
      var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _const2.default.INDICATOR_POSITION_LEFT;

      return position === _const2.default.INDICATOR_POSITION_LEFT;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          row = _props.row,
          columns = _props.columns,
          keyField = _props.keyField,
          rowIndex = _props.rowIndex,
          style = _props.style,
          className = _props.className,
          attrs = _props.attrs,
          selectRow = _props.selectRow,
          expandRow = _props.expandRow,
          expanded = _props.expanded,
          expandable = _props.expandable,
          selected = _props.selected,
          selectable = _props.selectable,
          visibleColumnSize = _props.visibleColumnSize,
          tabIndexCell = _props.tabIndexCell,
          rest = _objectWithoutProperties(_props, ['row', 'columns', 'keyField', 'rowIndex', 'style', 'className', 'attrs', 'selectRow', 'expandRow', 'expanded', 'expandable', 'selected', 'selectable', 'visibleColumnSize', 'tabIndexCell']);

      var key = _utils2.default.get(row, keyField);
      var hideSelectColumn = selectRow.hideSelectColumn,
          selectColumnPosition = selectRow.selectColumnPosition,
          clickToSelect = selectRow.clickToSelect;
      var showExpandColumn = expandRow.showExpandColumn,
          expandColumnPosition = expandRow.expandColumnPosition;


      var newAttrs = this.delegate(_extends({}, attrs));
      if (clickToSelect || !!expandRow.renderer) {
        newAttrs.onClick = this.createClickEventHandler(newAttrs.onClick);
      }

      var tabIndexStart = rowIndex * visibleColumnSize + 1;

      var childrens = [_react2.default.createElement(_rowPureContent2.default, _extends({
        key: 'row',
        row: row,
        columns: columns,
        keyField: keyField,
        rowIndex: rowIndex,
        shouldUpdate: this.shouldUpdateRowContent,
        tabIndexStart: tabIndexCell ? tabIndexStart : -1
      }, rest))];

      if (!hideSelectColumn) {
        var selectCell = _react2.default.createElement(_selectionCell2.default, _extends({}, selectRow, {
          key: 'selection-cell',
          rowKey: key,
          rowIndex: rowIndex,
          selected: selected,
          disabled: !selectable,
          tabIndex: tabIndexCell ? tabIndexStart++ : -1
        }));
        if (this.isRenderFunctionColumnInLeft(selectColumnPosition)) {
          childrens.unshift(selectCell);
        } else {
          childrens.push(selectCell);
        }
      }

      if (showExpandColumn) {
        var expandCell = _react2.default.createElement(_expandCell2.default, _extends({}, expandRow, {
          key: 'expand-cell',
          rowKey: key,
          rowIndex: rowIndex,
          expanded: expanded,
          expandable: expandable,
          tabIndex: tabIndexCell ? tabIndexStart++ : -1
        }));
        if (this.isRenderFunctionColumnInLeft(expandColumnPosition)) {
          childrens.unshift(expandCell);
        } else {
          childrens.push(expandCell);
        }
      }

      return _react2.default.createElement(
        'tr',
        _extends({
          style: style,
          className: className
        }, newAttrs),
        childrens
      );
    }
  }]);

  return RowAggregator;
}((0, _shouldUpdater3.default)((0, _eventDelegater2.default)(_react2.default.Component)));

RowAggregator.propTypes = {
  attrs: _propTypes2.default.object,
  style: _propTypes2.default.object
};
RowAggregator.defaultProps = {
  attrs: {},
  style: {}
};
exports.default = RowAggregator;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 react/require-default-props: 0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 jsx-a11y/no-noninteractive-element-interactions: 0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */
/* eslint no-nested-ternary: 0 */


var ExpandCell = function (_Component) {
  _inherits(ExpandCell, _Component);

  function ExpandCell() {
    _classCallCheck(this, ExpandCell);

    var _this = _possibleConstructorReturn(this, (ExpandCell.__proto__ || Object.getPrototypeOf(ExpandCell)).call(this));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(ExpandCell, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var shouldUpdate = this.props.rowIndex !== nextProps.rowIndex || this.props.expanded !== nextProps.expanded || this.props.rowKey !== nextProps.rowKey || this.props.tabIndex !== nextProps.tabIndex;

      return shouldUpdate;
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      var _props = this.props,
          rowKey = _props.rowKey,
          expanded = _props.expanded,
          onRowExpand = _props.onRowExpand,
          rowIndex = _props.rowIndex;

      e.stopPropagation();
      onRowExpand(rowKey, !expanded, rowIndex, e);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          expanded = _props2.expanded,
          expandable = _props2.expandable,
          expandColumnRenderer = _props2.expandColumnRenderer,
          tabIndex = _props2.tabIndex,
          rowKey = _props2.rowKey;

      var attrs = {};
      if (tabIndex !== -1) attrs.tabIndex = tabIndex;

      return _react2.default.createElement(
        'td',
        _extends({ className: 'expand-cell', onClick: this.handleClick }, attrs),
        expandColumnRenderer ? expandColumnRenderer({
          expandable: expandable,
          expanded: expanded,
          rowKey: rowKey
        }) : expandable ? expanded ? '(-)' : '(+)' : ''
      );
    }
  }]);

  return ExpandCell;
}(_react.Component);

ExpandCell.propTypes = {
  rowKey: _propTypes2.default.any,
  expanded: _propTypes2.default.bool.isRequired,
  expandable: _propTypes2.default.bool.isRequired,
  onRowExpand: _propTypes2.default.func.isRequired,
  expandColumnRenderer: _propTypes2.default.func,
  rowIndex: _propTypes2.default.number,
  tabIndex: _propTypes2.default.number
};
exports.default = ExpandCell;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _bootstrap = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 react/require-default-props: 0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 jsx-a11y/no-noninteractive-element-interactions: 0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var SelectionCell = function (_Component) {
  _inherits(SelectionCell, _Component);

  function SelectionCell() {
    _classCallCheck(this, SelectionCell);

    var _this = _possibleConstructorReturn(this, (SelectionCell.__proto__ || Object.getPrototypeOf(SelectionCell)).call(this));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(SelectionCell, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var shouldUpdate = this.props.rowIndex !== nextProps.rowIndex || this.props.selected !== nextProps.selected || this.props.disabled !== nextProps.disabled || this.props.rowKey !== nextProps.rowKey || this.props.tabIndex !== nextProps.tabIndex || this.props.selectColumnStyle !== nextProps.selectColumnStyle;

      return shouldUpdate;
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      var _props = this.props,
          inputType = _props.mode,
          rowKey = _props.rowKey,
          selected = _props.selected,
          onRowSelect = _props.onRowSelect,
          disabled = _props.disabled,
          rowIndex = _props.rowIndex;

      e.stopPropagation();
      if (disabled) return;

      var checked = inputType === _const2.default.ROW_SELECT_SINGLE ? true : !selected;

      onRowSelect(rowKey, checked, rowIndex, e);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          rowKey = _props2.rowKey,
          inputType = _props2.mode,
          selected = _props2.selected,
          disabled = _props2.disabled,
          tabIndex = _props2.tabIndex,
          rowIndex = _props2.rowIndex,
          selectionRenderer = _props2.selectionRenderer,
          selectColumnStyle = _props2.selectColumnStyle;


      var attrs = {};
      if (tabIndex !== -1) attrs.tabIndex = tabIndex;

      attrs.style = _utils2.default.isFunction(selectColumnStyle) ? selectColumnStyle({
        checked: selected,
        disabled: disabled,
        rowIndex: rowIndex,
        rowKey: rowKey
      }) : selectColumnStyle;

      return _react2.default.createElement(
        _bootstrap.BootstrapContext.Consumer,
        null,
        function (_ref) {
          var bootstrap4 = _ref.bootstrap4;
          return _react2.default.createElement(
            'td',
            _extends({ className: 'selection-cell', onClick: _this2.handleClick }, attrs),
            selectionRenderer ? selectionRenderer({
              mode: inputType,
              checked: selected,
              disabled: disabled,
              rowIndex: rowIndex,
              rowKey: rowKey
            }) : _react2.default.createElement('input', {
              type: inputType,
              checked: selected,
              disabled: disabled,
              className: bootstrap4 ? 'selection-input-4' : '',
              onChange: function onChange() {}
            })
          );
        }
      );
    }
  }]);

  return SelectionCell;
}(_react.Component);

SelectionCell.propTypes = {
  mode: _propTypes2.default.string.isRequired,
  rowKey: _propTypes2.default.any,
  selected: _propTypes2.default.bool,
  onRowSelect: _propTypes2.default.func,
  disabled: _propTypes2.default.bool,
  rowIndex: _propTypes2.default.number,
  tabIndex: _propTypes2.default.number,
  clickToSelect: _propTypes2.default.bool,
  selectionRenderer: _propTypes2.default.func,
  selectColumnStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func])
};
exports.default = SelectionCell;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RowSection = function RowSection(_ref) {
  var content = _ref.content,
      colSpan = _ref.colSpan;
  return _react2.default.createElement(
    'tr',
    null,
    _react2.default.createElement(
      'td',
      {
        'data-toggle': 'collapse',
        colSpan: colSpan,
        className: 'react-bs-table-no-data'
      },
      content
    )
  );
};

RowSection.propTypes = {
  content: _propTypes2.default.any,
  colSpan: _propTypes2.default.number
};

RowSection.defaultProps = {
  content: null,
  colSpan: 1
};

exports.default = RowSection;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint react/prop-types: 0 */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _selectionContext = __webpack_require__(10);

var _selectionContext2 = _interopRequireDefault(_selectionContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Component) {
  var renderWithSelection = function renderWithSelection(props, selectRow) {
    var key = props.value;
    var selected = _utils2.default.contains(selectRow.selected, key);
    var selectable = !selectRow.nonSelectable || !_utils2.default.contains(selectRow.nonSelectable, key);
    var notSelectable = _utils2.default.contains(selectRow.nonSelectable, key);

    var style = props.style,
        className = props.className;


    if (selected) {
      var selectedStyle = _utils2.default.isFunction(selectRow.style) ? selectRow.style(props.row, props.rowIndex) : selectRow.style;

      var selectedClasses = _utils2.default.isFunction(selectRow.classes) ? selectRow.classes(props.row, props.rowIndex) : selectRow.classes;

      style = _extends({}, style, selectedStyle);
      className = (0, _classnames2.default)(className, selectedClasses) || undefined;

      if (selectRow.bgColor) {
        style = style || {};
        style.backgroundColor = _utils2.default.isFunction(selectRow.bgColor) ? selectRow.bgColor(props.row, props.rowIndex) : selectRow.bgColor;
      }
    }

    if (notSelectable) {
      var notSelectableStyle = _utils2.default.isFunction(selectRow.nonSelectableStyle) ? selectRow.nonSelectableStyle(props.row, props.rowIndex) : selectRow.nonSelectableStyle;

      var notSelectableClasses = _utils2.default.isFunction(selectRow.nonSelectableClasses) ? selectRow.nonSelectableClasses(props.row, props.rowIndex) : selectRow.nonSelectableClasses;

      style = _extends({}, style, notSelectableStyle);
      className = (0, _classnames2.default)(className, notSelectableClasses) || undefined;
    }

    return _react2.default.createElement(Component, _extends({}, props, {
      style: style,
      className: className,
      selectRow: selectRow,
      selected: selected,
      selectable: selectable
    }));
  };

  function withConsumer(props) {
    return _react2.default.createElement(
      _selectionContext2.default.Consumer,
      null,
      function (selectRow) {
        return renderWithSelection(props, selectRow);
      }
    );
  }

  withConsumer.displayName = 'WithSelectionRowConsumer';
  return withConsumer;
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint react/prop-types: 0 */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _expandRow = __webpack_require__(57);

var _expandRow2 = _interopRequireDefault(_expandRow);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _rowExpandContext = __webpack_require__(12);

var _rowExpandContext2 = _interopRequireDefault(_rowExpandContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Component) {
  var renderWithExpansion = function renderWithExpansion(props, expandRow) {
    var parentClassName = '';
    var className = '';
    var key = props.value;

    var expanded = _utils2.default.contains(expandRow.expanded, key);
    var isClosing = _utils2.default.contains(expandRow.isClosing, key);
    var expandable = !expandRow.nonExpandable || !_utils2.default.contains(expandRow.nonExpandable, key);
    if (expanded) {
      parentClassName = _utils2.default.isFunction(expandRow.parentClassName) ? expandRow.parentClassName(expanded, props.row, props.rowIndex) : expandRow.parentClassName || '';

      className = _utils2.default.isFunction(expandRow.className) ? expandRow.className(expanded, props.row, props.rowIndex) : expandRow.className || '';
    }

    return [_react2.default.createElement(Component, _extends({}, props, {
      key: key,
      expanded: expanded,
      expandable: expandable,
      expandRow: _extends({}, expandRow),
      className: (0, _classnames2.default)(props.className, parentClassName)
    })), expanded || isClosing ? _react2.default.createElement(
      _expandRow2.default,
      {
        key: key + '-expanding',
        colSpan: props.visibleColumnSize,
        expanded: expanded,
        onClosed: function onClosed() {
          return expandRow.onClosed(key);
        },
        className: className
      },
      expandRow.renderer(props.row, props.rowIndex)
    ) : null];
  };
  return function (props) {
    return _react2.default.createElement(
      _rowExpandContext2.default.Consumer,
      null,
      function (expandRow) {
        return renderWithExpansion(props, expandRow);
      }
    );
  };
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactTransitionGroup = __webpack_require__(58);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ExpandRow = function ExpandRow(_ref) {
  var children = _ref.children,
      expanded = _ref.expanded,
      onClosed = _ref.onClosed,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ['children', 'expanded', 'onClosed', 'className']);

  return _react2.default.createElement(
    'tr',
    null,
    _react2.default.createElement(
      'td',
      _extends({ className: (0, _classnames2.default)('reset-expansion-style', className) }, rest),
      _react2.default.createElement(
        _reactTransitionGroup.CSSTransition,
        {
          appear: true,
          'in': expanded,
          timeout: 400,
          classNames: 'row-expand-slide',
          onExited: onClosed
        },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'row-expansion-style' },
            children
          )
        )
      )
    )
  );
};

ExpandRow.propTypes = {
  children: _propTypes2.default.node,
  expanded: _propTypes2.default.bool,
  onClosed: _propTypes2.default.func,
  className: _propTypes2.default.string
};

ExpandRow.defaultProps = {
  children: null,
  expanded: false,
  onClosed: null,
  className: ''
};

exports.default = ExpandRow;

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CSSTransition__ = __webpack_require__(59);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CSSTransition", function() { return __WEBPACK_IMPORTED_MODULE_0__CSSTransition__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ReplaceTransition__ = __webpack_require__(64);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaceTransition", function() { return __WEBPACK_IMPORTED_MODULE_1__ReplaceTransition__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SwitchTransition__ = __webpack_require__(67);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchTransition", function() { return __WEBPACK_IMPORTED_MODULE_2__SwitchTransition__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TransitionGroup__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TransitionGroup", function() { return __WEBPACK_IMPORTED_MODULE_3__TransitionGroup__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Transition__ = __webpack_require__(13);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Transition", function() { return __WEBPACK_IMPORTED_MODULE_4__Transition__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__(22);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return __WEBPACK_IMPORTED_MODULE_5__config__["a"]; });







/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_inheritsLoose__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_dom_helpers_addClass__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_dom_helpers_removeClass__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Transition__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_PropTypes__ = __webpack_require__(23);










var _addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return Object(__WEBPACK_IMPORTED_MODULE_4_dom_helpers_addClass__["a" /* default */])(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return Object(__WEBPACK_IMPORTED_MODULE_5_dom_helpers_removeClass__["a" /* default */])(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
 * use it if you're using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**, so it's
 * important to add `transition` declaration only to them, otherwise transitions
 * might not behave as intended! This might not be obvious when the transitions
 * are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
 * the example above (minus `transition`), but it becomes apparent in more
 * complex transitions.
 *
 * **Note**: If you're using the
 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
 * prop, make sure to define styles for `.appear-*` classes as well.
 */


var CSSTransition = /*#__PURE__*/function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_inheritsLoose__["a" /* default */])(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };

    _this.onEnter = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument[0],
          appearing = _this$resolveArgument[1];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };

    _this.onEntering = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument2[0],
          appearing = _this$resolveArgument2[1];

      var type = appearing ? 'appear' : 'enter';

      _this.addClass(node, type, 'active');

      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };

    _this.onEntered = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument3[0],
          appearing = _this$resolveArgument3[1];

      var type = appearing ? 'appear' : 'enter';

      _this.removeClasses(node, type);

      _this.addClass(node, type, 'done');

      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };

    _this.onExit = function (maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument4[0];

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      _this.addClass(node, 'exit', 'base');

      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };

    _this.onExiting = function (maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument5[0];

      _this.addClass(node, 'exit', 'active');

      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };

    _this.onExited = function (maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument6[0];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, 'exit', 'done');

      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };

    _this.resolveArguments = function (maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] // here `maybeNode` is actually `appearing`
      : [maybeNode, maybeAppearing];
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + "-" : '';
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName: baseClassName,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.addClass = function addClass(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];

    var _this$getClassNames = this.getClassNames('enter'),
        doneClassName = _this$getClassNames.doneClassName;

    if (type === 'appear' && phase === 'done' && doneClassName) {
      className += " " + doneClassName;
    } // This is for to force a repaint,
    // which is necessary in order to transition styles when adding a class name.


    if (phase === 'active') {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
    }

    if (className) {
      this.appliedClasses[type][phase] = className;

      _addClass(node, className);
    }
  };

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type],
        baseClassName = _this$appliedClasses$.base,
        activeClassName = _this$appliedClasses$.active,
        doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};

    if (baseClassName) {
      removeClass(node, baseClassName);
    }

    if (activeClassName) {
      removeClass(node, activeClassName);
    }

    if (doneClassName) {
      removeClass(node, doneClassName);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        _ = _this$props.classNames,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["classNames"]);

    return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Transition__["d" /* default */], Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes =  false ? _extends({}, Transition.propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: classNamesShape,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: PropTypes.func
}) : {};
/* harmony default export */ __webpack_exports__["a"] = (CSSTransition);

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _setPrototypeOf;
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addClass;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hasClass__ = __webpack_require__(62);

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!Object(__WEBPACK_IMPORTED_MODULE_0__hasClass__["a" /* default */])(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = hasClass;
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = removeClass;
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    ;
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_inheritsLoose__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__TransitionGroup__ = __webpack_require__(24);






/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */

var ReplaceTransition = /*#__PURE__*/function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_inheritsLoose__["a" /* default */])(ReplaceTransition, _React$Component);

  function ReplaceTransition() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleEnter = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this.handleLifecycle('onEnter', 0, args);
    };

    _this.handleEntering = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _this.handleLifecycle('onEntering', 0, args);
    };

    _this.handleEntered = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _this.handleLifecycle('onEntered', 0, args);
    };

    _this.handleExit = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _this.handleLifecycle('onExit', 1, args);
    };

    _this.handleExiting = function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return _this.handleLifecycle('onExiting', 1, args);
    };

    _this.handleExited = function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return _this.handleLifecycle('onExited', 1, args);
    };

    return _this;
  }

  var _proto = ReplaceTransition.prototype;

  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;

    var children = this.props.children;
    var child = __WEBPACK_IMPORTED_MODULE_3_react___default.a.Children.toArray(children)[idx];
    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);

    if (this.props[handler]) {
      var maybeNode = child.props.nodeRef ? undefined : __WEBPACK_IMPORTED_MODULE_4_react_dom___default.a.findDOMNode(this);
      this.props[handler](maybeNode);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in,
        props = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["children", "in"]);

    var _React$Children$toArr = __WEBPACK_IMPORTED_MODULE_3_react___default.a.Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__TransitionGroup__["a" /* default */], props, inProp ? __WEBPACK_IMPORTED_MODULE_3_react___default.a.cloneElement(first, {
      key: 'first',
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : __WEBPACK_IMPORTED_MODULE_3_react___default.a.cloneElement(second, {
      key: 'second',
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };

  return ReplaceTransition;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

ReplaceTransition.propTypes =  false ? {
  in: PropTypes.bool.isRequired,
  children: function children(props, propName) {
    if (React.Children.count(props[propName]) !== 2) return new Error("\"" + propName + "\" must be exactly two transition components.");
    return null;
  }
} : {};
/* harmony default export */ __webpack_exports__["a"] = (ReplaceTransition);

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _assertThisInitialized;
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getChildMapping;
/* unused harmony export mergeChildMappings */
/* harmony export (immutable) */ __webpack_exports__["b"] = getInitialChildMapping;
/* harmony export (immutable) */ __webpack_exports__["c"] = getNextChildMapping;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */

function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && Object(__WEBPACK_IMPORTED_MODULE_0_react__["isValidElement"])(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) __WEBPACK_IMPORTED_MODULE_0_react__["Children"].map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */

function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_react__["cloneElement"])(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!Object(__WEBPACK_IMPORTED_MODULE_0_react__["isValidElement"])(child)) return;
    var hasPrev = (key in prevChildMapping);
    var hasNext = (key in nextChildMapping);
    var prevChild = prevChildMapping[key];
    var isLeaving = Object(__WEBPACK_IMPORTED_MODULE_0_react__["isValidElement"])(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = Object(__WEBPACK_IMPORTED_MODULE_0_react__["cloneElement"])(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = Object(__WEBPACK_IMPORTED_MODULE_0_react__["cloneElement"])(child, {
        in: false
      });
    } else if (hasNext && hasPrev && Object(__WEBPACK_IMPORTED_MODULE_0_react__["isValidElement"])(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = Object(__WEBPACK_IMPORTED_MODULE_0_react__["cloneElement"])(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export modes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_inheritsLoose__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Transition__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TransitionGroupContext__ = __webpack_require__(14);


var _leaveRenders, _enterRenders;






function areChildrenDifferent(oldChildren, newChildren) {
  if (oldChildren === newChildren) return false;

  if (__WEBPACK_IMPORTED_MODULE_1_react___default.a.isValidElement(oldChildren) && __WEBPACK_IMPORTED_MODULE_1_react___default.a.isValidElement(newChildren) && oldChildren.key != null && oldChildren.key === newChildren.key) {
    return false;
  }

  return true;
}
/**
 * Enum of modes for SwitchTransition component
 * @enum { string }
 */


var modes = {
  out: 'out-in',
  in: 'in-out'
};

var callHook = function callHook(element, name, cb) {
  return function () {
    var _element$props;

    element.props[name] && (_element$props = element.props)[name].apply(_element$props, arguments);
    cb();
  };
};

var leaveRenders = (_leaveRenders = {}, _leaveRenders[modes.out] = function (_ref) {
  var current = _ref.current,
      changeState = _ref.changeState;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.cloneElement(current, {
    in: false,
    onExited: callHook(current, 'onExited', function () {
      changeState(__WEBPACK_IMPORTED_MODULE_3__Transition__["b" /* ENTERING */], null);
    })
  });
}, _leaveRenders[modes.in] = function (_ref2) {
  var current = _ref2.current,
      changeState = _ref2.changeState,
      children = _ref2.children;
  return [current, __WEBPACK_IMPORTED_MODULE_1_react___default.a.cloneElement(children, {
    in: true,
    onEntered: callHook(children, 'onEntered', function () {
      changeState(__WEBPACK_IMPORTED_MODULE_3__Transition__["b" /* ENTERING */]);
    })
  })];
}, _leaveRenders);
var enterRenders = (_enterRenders = {}, _enterRenders[modes.out] = function (_ref3) {
  var children = _ref3.children,
      changeState = _ref3.changeState;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.cloneElement(children, {
    in: true,
    onEntered: callHook(children, 'onEntered', function () {
      changeState(__WEBPACK_IMPORTED_MODULE_3__Transition__["a" /* ENTERED */], __WEBPACK_IMPORTED_MODULE_1_react___default.a.cloneElement(children, {
        in: true
      }));
    })
  });
}, _enterRenders[modes.in] = function (_ref4) {
  var current = _ref4.current,
      children = _ref4.children,
      changeState = _ref4.changeState;
  return [__WEBPACK_IMPORTED_MODULE_1_react___default.a.cloneElement(current, {
    in: false,
    onExited: callHook(current, 'onExited', function () {
      changeState(__WEBPACK_IMPORTED_MODULE_3__Transition__["a" /* ENTERED */], __WEBPACK_IMPORTED_MODULE_1_react___default.a.cloneElement(children, {
        in: true
      }));
    })
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.cloneElement(children, {
    in: true
  })];
}, _enterRenders);
/**
 * A transition component inspired by the [vue transition modes](https://vuejs.org/v2/guide/transitions.html#Transition-Modes).
 * You can use it when you want to control the render between state transitions.
 * Based on the selected mode and the child's key which is the `Transition` or `CSSTransition` component, the `SwitchTransition` makes a consistent transition between them.
 *
 * If the `out-in` mode is selected, the `SwitchTransition` waits until the old child leaves and then inserts a new child.
 * If the `in-out` mode is selected, the `SwitchTransition` inserts a new child first, waits for the new child to enter and then removes the old child.
 *
 * **Note**: If you want the animation to happen simultaneously
 * (that is, to have the old child removed and a new child inserted **at the same time**),
 * you should use
 * [`TransitionGroup`](https://reactcommunity.org/react-transition-group/transition-group)
 * instead.
 *
 * ```jsx
 * function App() {
 *  const [state, setState] = useState(false);
 *  return (
 *    <SwitchTransition>
 *      <CSSTransition
 *        key={state ? "Goodbye, world!" : "Hello, world!"}
 *        addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
 *        classNames='fade'
 *      >
 *        <button onClick={() => setState(state => !state)}>
 *          {state ? "Goodbye, world!" : "Hello, world!"}
 *        </button>
 *      </CSSTransition>
 *    </SwitchTransition>
 *  );
 * }
 * ```
 *
 * ```css
 * .fade-enter{
 *    opacity: 0;
 * }
 * .fade-exit{
 *    opacity: 1;
 * }
 * .fade-enter-active{
 *    opacity: 1;
 * }
 * .fade-exit-active{
 *    opacity: 0;
 * }
 * .fade-enter-active,
 * .fade-exit-active{
 *    transition: opacity 500ms;
 * }
 * ```
 */

var SwitchTransition = /*#__PURE__*/function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_inheritsLoose__["a" /* default */])(SwitchTransition, _React$Component);

  function SwitchTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      status: __WEBPACK_IMPORTED_MODULE_3__Transition__["a" /* ENTERED */],
      current: null
    };
    _this.appeared = false;

    _this.changeState = function (status, current) {
      if (current === void 0) {
        current = _this.state.current;
      }

      _this.setState({
        status: status,
        current: current
      });
    };

    return _this;
  }

  var _proto = SwitchTransition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
  };

  SwitchTransition.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (props.children == null) {
      return {
        current: null
      };
    }

    if (state.status === __WEBPACK_IMPORTED_MODULE_3__Transition__["b" /* ENTERING */] && props.mode === modes.in) {
      return {
        status: __WEBPACK_IMPORTED_MODULE_3__Transition__["b" /* ENTERING */]
      };
    }

    if (state.current && areChildrenDifferent(state.current, props.children)) {
      return {
        status: __WEBPACK_IMPORTED_MODULE_3__Transition__["c" /* EXITING */]
      };
    }

    return {
      current: __WEBPACK_IMPORTED_MODULE_1_react___default.a.cloneElement(props.children, {
        in: true
      })
    };
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        mode = _this$props.mode,
        _this$state = this.state,
        status = _this$state.status,
        current = _this$state.current;
    var data = {
      children: children,
      current: current,
      changeState: this.changeState,
      status: status
    };
    var component;

    switch (status) {
      case __WEBPACK_IMPORTED_MODULE_3__Transition__["b" /* ENTERING */]:
        component = enterRenders[mode](data);
        break;

      case __WEBPACK_IMPORTED_MODULE_3__Transition__["c" /* EXITING */]:
        component = leaveRenders[mode](data);
        break;

      case __WEBPACK_IMPORTED_MODULE_3__Transition__["a" /* ENTERED */]:
        component = current;
    }

    return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__TransitionGroupContext__["a" /* default */].Provider, {
      value: {
        isMounting: !this.appeared
      }
    }, component);
  };

  return SwitchTransition;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

SwitchTransition.propTypes =  false ? {
  /**
   * Transition modes.
   * `out-in`: Current element transitions out first, then when complete, the new element transitions in.
   * `in-out`: New element transitions in first, then when complete, the current element transitions out.
   *
   * @type {'out-in'|'in-out'}
   */
  mode: PropTypes.oneOf([modes.in, modes.out]),

  /**
   * Any `Transition` or `CSSTransition` component.
   */
  children: PropTypes.oneOfType([PropTypes.element.isRequired])
} : {};
SwitchTransition.defaultProps = {
  mode: modes.out
};
/* harmony default export */ __webpack_exports__["a"] = (SwitchTransition);

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rowTemplate = __webpack_require__(16);

var _rowTemplate2 = _interopRequireDefault(_rowTemplate);

var _footerCell = __webpack_require__(69);

var _footerCell2 = _interopRequireDefault(_footerCell);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer(props) {
  var data = props.data,
      className = props.className,
      columns = props.columns,
      selectRow = props.selectRow,
      expandRow = props.expandRow;


  function renderContent() {
    return columns.map(function (column, i) {
      if (column.footer === undefined || column.footer === null) {
        return false;
      }

      var columnData = _utils2.default.pluck(data, column.dataField);

      return _react2.default.createElement(_footerCell2.default, {
        index: i,
        key: column.dataField,
        column: column,
        columnData: columnData
      });
    });
  }

  return _react2.default.createElement(
    'tfoot',
    null,
    _react2.default.createElement(_rowTemplate2.default, {
      renderContent: renderContent,
      selectRow: selectRow,
      expandRow: expandRow,
      className: className,
      cellEl: 'th'
    })
  );
}; /* eslint react/require-default-props: 0 */


Footer.propTypes = {
  data: _propTypes2.default.array,
  className: _propTypes2.default.string,
  columns: _propTypes2.default.array,
  selectRow: _propTypes2.default.object,
  expandRow: _propTypes2.default.object
};

exports.default = Footer;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _cellEventDelegater = __webpack_require__(9);

var _cellEventDelegater2 = _interopRequireDefault(_cellEventDelegater);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/require-default-props: 0 */


var FooterCell = function (_eventDelegater) {
  _inherits(FooterCell, _eventDelegater);

  function FooterCell() {
    _classCallCheck(this, FooterCell);

    return _possibleConstructorReturn(this, (FooterCell.__proto__ || Object.getPrototypeOf(FooterCell)).apply(this, arguments));
  }

  _createClass(FooterCell, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          index = _props.index,
          column = _props.column,
          columnData = _props.columnData;
      var footer = column.footer,
          footerTitle = column.footerTitle,
          footerAlign = column.footerAlign,
          footerFormatter = column.footerFormatter,
          footerEvents = column.footerEvents,
          footerClasses = column.footerClasses,
          footerStyle = column.footerStyle,
          footerAttrs = column.footerAttrs;


      var delegateEvents = this.delegate(footerEvents);
      var cellAttrs = _extends({}, _utils2.default.isFunction(footerAttrs) ? footerAttrs(column, index) : footerAttrs, delegateEvents);

      var text = '';
      if (_utils2.default.isString(footer)) {
        text = footer;
      } else if (_utils2.default.isFunction(footer)) {
        text = footer(columnData, column, index);
      }

      var cellStyle = {};
      var cellClasses = _utils2.default.isFunction(footerClasses) ? footerClasses(column, index) : footerClasses;

      if (footerStyle) {
        cellStyle = _utils2.default.isFunction(footerStyle) ? footerStyle(column, index) : footerStyle;
        cellStyle = cellStyle ? _extends({}, cellStyle) : cellStyle;
      }

      if (footerTitle) {
        cellAttrs.title = _utils2.default.isFunction(footerTitle) ? footerTitle(column, index) : text;
      }

      if (footerAlign) {
        cellStyle.textAlign = _utils2.default.isFunction(footerAlign) ? footerAlign(column, index) : footerAlign;
      }

      if (cellClasses) cellAttrs.className = (0, _classnames2.default)(cellAttrs.className, cellClasses);
      if (!_utils2.default.isEmptyObject(cellStyle)) cellAttrs.style = cellStyle;

      var children = footerFormatter ? footerFormatter(column, index, { text: text }) : text;

      return _react2.default.createElement('th', cellAttrs, children);
    }
  }]);

  return FooterCell;
}((0, _cellEventDelegater2.default)(_react2.default.Component));

FooterCell.propTypes = {
  columnData: _propTypes2.default.array,
  index: _propTypes2.default.number,
  column: _propTypes2.default.object
};

exports.default = FooterCell;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _columnResolver = __webpack_require__(71);

var _columnResolver2 = _interopRequireDefault(_columnResolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (ExtendBase) {
  return function (_ColumnResolver) {
    _inherits(TableResolver, _ColumnResolver);

    function TableResolver() {
      _classCallCheck(this, TableResolver);

      return _possibleConstructorReturn(this, (TableResolver.__proto__ || Object.getPrototypeOf(TableResolver)).apply(this, arguments));
    }

    _createClass(TableResolver, [{
      key: 'validateProps',
      value: function validateProps() {
        var keyField = this.props.keyField;

        if (!keyField) {
          throw new Error('Please specify a field as key via keyField');
        }
        if (this.visibleColumnSize(false) <= 0) {
          throw new Error('No visible columns detected');
        }
      }
    }, {
      key: 'isEmpty',
      value: function isEmpty() {
        return this.props.data.length === 0;
      }
    }, {
      key: 'visibleRows',
      value: function visibleRows() {
        var _props = this.props,
            data = _props.data,
            hiddenRows = _props.hiddenRows,
            keyField = _props.keyField;

        if (!hiddenRows || hiddenRows.length === 0) return data;
        return data.filter(function (row) {
          var key = _utils2.default.get(row, keyField);
          return !_utils2.default.contains(hiddenRows, key);
        });
      }
    }]);

    return TableResolver;
  }((0, _columnResolver2.default)(ExtendBase));
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (ExtendBase) {
  return function (_ExtendBase) {
    _inherits(ColumnResolver, _ExtendBase);

    function ColumnResolver() {
      _classCallCheck(this, ColumnResolver);

      return _possibleConstructorReturn(this, (ColumnResolver.__proto__ || Object.getPrototypeOf(ColumnResolver)).apply(this, arguments));
    }

    _createClass(ColumnResolver, [{
      key: "visibleColumnSize",
      value: function visibleColumnSize() {
        var includeSelectColumn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        var columnLen = void 0;
        if (this.props.columnToggle && this.props.columnToggle.toggles) {
          var columns = this.props.columnToggle.toggles;
          columnLen = Object.keys(columns).filter(function (name) {
            return columns[name];
          }).length;
        } else {
          columnLen = this.props.columns.filter(function (c) {
            return !c.hidden;
          }).length;
        }
        if (!includeSelectColumn) return columnLen;
        if (this.props.selectRow && !this.props.selectRow.hideSelectColumn) {
          columnLen += 1;
        }
        if (this.props.expandRow && this.props.expandRow.showExpandColumn) {
          columnLen += 1;
        }
        return columnLen;
      }
    }]);

    return ColumnResolver;
  }(ExtendBase);
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _events = __webpack_require__(25);

var _events2 = _interopRequireDefault(_events);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _dataContext = __webpack_require__(73);

var _dataContext2 = _interopRequireDefault(_dataContext);

var _columnContext = __webpack_require__(74);

var _columnContext2 = _interopRequireDefault(_columnContext);

var _sortContext = __webpack_require__(75);

var _sortContext2 = _interopRequireDefault(_sortContext);

var _selectionContext = __webpack_require__(10);

var _selectionContext2 = _interopRequireDefault(_selectionContext);

var _rowExpandContext = __webpack_require__(12);

var _rowExpandContext2 = _interopRequireDefault(_rowExpandContext);

var _remoteResolver2 = __webpack_require__(76);

var _remoteResolver3 = _interopRequireDefault(_remoteResolver2);

var _bootstrap = __webpack_require__(5);

var _operators = __webpack_require__(11);

var _operators2 = _interopRequireDefault(_operators);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint camelcase: 0 */
/* eslint no-return-assign: 0 */
/* eslint no-param-reassign: 0 */
/* eslint class-methods-use-this: 0 */


var withContext = function withContext(Base) {
  return function (_remoteResolver) {
    _inherits(BootstrapTableContainer, _remoteResolver);

    function BootstrapTableContainer(props) {
      _classCallCheck(this, BootstrapTableContainer);

      var _this = _possibleConstructorReturn(this, (BootstrapTableContainer.__proto__ || Object.getPrototypeOf(BootstrapTableContainer)).call(this, props));

      _this.DataContext = (0, _dataContext2.default)();

      if (props.registerExposedAPI) {
        var exposedAPIEmitter = new _events2.default();
        exposedAPIEmitter.on('get.table.data', function (payload) {
          return payload.result = _this.table.getData();
        });
        exposedAPIEmitter.on('get.selected.rows', function (payload) {
          return payload.result = _this.selectionContext.getSelected();
        });
        exposedAPIEmitter.on('get.filtered.rows', function (payload) {
          if (_this.searchContext) {
            payload.result = _this.searchContext.getSearched();
          } else if (_this.filterContext) {
            payload.result = _this.filterContext.getFiltered();
          } else {
            payload.result = _this.table.getData();
          }
        });
        props.registerExposedAPI(exposedAPIEmitter);
      }

      if (props.columns.filter(function (col) {
        return col.sort;
      }).length > 0) {
        _this.SortContext = (0, _sortContext2.default)(_operators2.default, _this.isRemoteSort, _this.handleRemoteSortChange);
      }

      if (props.columnToggle || props.columns.filter(function (col) {
        return col.hidden;
      }).length > 0) {
        _this.ColumnManagementContext = (0, _columnContext2.default)();
      }

      if (props.selectRow) {
        _this.SelectionContext = _selectionContext2.default;
      }

      if (props.expandRow) {
        _this.RowExpandContext = _rowExpandContext2.default;
      }

      if (props.cellEdit && props.cellEdit.createContext) {
        _this.CellEditContext = props.cellEdit.createContext(_utils2.default, _operators2.default, _this.isRemoteCellEdit, _this.handleRemoteCellChange);
      }

      if (props.filter) {
        _this.FilterContext = props.filter.createContext(_utils2.default, _this.isRemoteFiltering, _this.handleRemoteFilterChange);
      }

      if (props.pagination) {
        _this.PaginationContext = props.pagination.createContext();
      }

      if (props.search && props.search.searchContext) {
        _this.SearchContext = props.search.searchContext(_utils2.default, _this.isRemoteSearch, _this.handleRemoteSearchChange);
      }

      if (props.setDependencyModules) {
        props.setDependencyModules(_utils2.default);
      }

      if (props.setPaginationRemoteEmitter) {
        props.setPaginationRemoteEmitter(_this.remoteEmitter);
      }
      return _this;
    }

    _createClass(BootstrapTableContainer, [{
      key: 'UNSAFE_componentWillReceiveProps',
      value: function UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.columns.filter(function (col) {
          return col.sort;
        }).length <= 0) {
          this.SortContext = null;
        } else if (!this.SortContext) {
          this.SortContext = (0, _sortContext2.default)(_operators2.default, this.isRemoteSort, this.handleRemoteSortChange);
        }
        if (!nextProps.pagination && this.props.pagination) {
          this.PaginationContext = null;
        }
        if (nextProps.pagination && !this.props.pagination) {
          this.PaginationContext = nextProps.pagination.createContext(this.isRemotePagination, this.handleRemotePageChange);
        }
        if (!nextProps.cellEdit && this.props.cellEdit) {
          this.CellEditContext = null;
        }
        if (nextProps.cellEdit && !this.props.cellEdit) {
          this.CellEditContext = nextProps.cellEdit.createContext(_utils2.default, _operators2.default, this.isRemoteCellEdit, this.handleRemoteCellChange);
        }
      }
    }, {
      key: 'renderBase',
      value: function renderBase() {
        var _this2 = this;

        return function (rootProps, filterProps, searchProps, sortProps, paginationProps, columnToggleProps) {
          return _react2.default.createElement(Base, _extends({
            ref: function ref(n) {
              return _this2.table = n;
            }
          }, _this2.props, sortProps, filterProps, searchProps, paginationProps, columnToggleProps, {
            data: rootProps.getData(filterProps, searchProps, sortProps, paginationProps)
          }));
        };
      }
    }, {
      key: 'renderWithColumnManagementCtx',
      value: function renderWithColumnManagementCtx(base, baseProps) {
        var _this3 = this;

        return function (rootProps, filterProps, searchProps, sortProps, paginationProps) {
          return _react2.default.createElement(
            _this3.ColumnManagementContext.Provider,
            _extends({}, baseProps, {
              toggles: _this3.props.columnToggle ? _this3.props.columnToggle.toggles : null
            }),
            _react2.default.createElement(
              _this3.ColumnManagementContext.Consumer,
              null,
              function (columnToggleProps) {
                return base(rootProps, filterProps, searchProps, sortProps, paginationProps, columnToggleProps);
              }
            )
          );
        };
      }
    }, {
      key: 'renderWithSelectionCtx',
      value: function renderWithSelectionCtx(base, baseProps) {
        var _this4 = this;

        return function (rootProps, filterProps, searchProps, sortProps, paginationProps) {
          return _react2.default.createElement(
            _this4.SelectionContext.Provider,
            _extends({}, baseProps, {
              ref: function ref(n) {
                return _this4.selectionContext = n;
              },
              selectRow: _this4.props.selectRow,
              data: rootProps.getData(filterProps, searchProps, sortProps, paginationProps)
            }),
            base(rootProps, filterProps, searchProps, sortProps, paginationProps)
          );
        };
      }
    }, {
      key: 'renderWithRowExpandCtx',
      value: function renderWithRowExpandCtx(base, baseProps) {
        var _this5 = this;

        return function (rootProps, filterProps, searchProps, sortProps, paginationProps) {
          return _react2.default.createElement(
            _this5.RowExpandContext.Provider,
            _extends({}, baseProps, {
              ref: function ref(n) {
                return _this5.rowExpandContext = n;
              },
              expandRow: _this5.props.expandRow,
              data: rootProps.getData(filterProps, searchProps, sortProps, paginationProps)
            }),
            base(rootProps, filterProps, searchProps, sortProps, paginationProps)
          );
        };
      }
    }, {
      key: 'renderWithPaginationCtx',
      value: function renderWithPaginationCtx(base) {
        var _this6 = this;

        return function (rootProps, filterProps, searchProps, sortProps) {
          return _react2.default.createElement(
            _this6.PaginationContext.Provider,
            {
              ref: function ref(n) {
                return _this6.paginationContext = n;
              },
              pagination: _this6.props.pagination,
              data: rootProps.getData(filterProps, searchProps, sortProps),
              bootstrap4: _this6.props.bootstrap4,
              isRemotePagination: _this6.isRemotePagination,
              remoteEmitter: _this6.remoteEmitter,
              onDataSizeChange: _this6.props.onDataSizeChange,
              tableId: _this6.props.id
            },
            _react2.default.createElement(
              _this6.PaginationContext.Consumer,
              null,
              function (paginationProps) {
                return base(rootProps, filterProps, searchProps, sortProps, paginationProps);
              }
            )
          );
        };
      }
    }, {
      key: 'renderWithSortCtx',
      value: function renderWithSortCtx(base, baseProps) {
        var _this7 = this;

        return function (rootProps, filterProps, searchProps) {
          return _react2.default.createElement(
            _this7.SortContext.Provider,
            _extends({}, baseProps, {
              ref: function ref(n) {
                return _this7.sortContext = n;
              },
              defaultSorted: _this7.props.defaultSorted,
              defaultSortDirection: _this7.props.defaultSortDirection,
              sort: _this7.props.sort,
              data: rootProps.getData(filterProps, searchProps)
            }),
            _react2.default.createElement(
              _this7.SortContext.Consumer,
              null,
              function (sortProps) {
                return base(rootProps, filterProps, searchProps, sortProps);
              }
            )
          );
        };
      }
    }, {
      key: 'renderWithSearchCtx',
      value: function renderWithSearchCtx(base, baseProps) {
        var _this8 = this;

        return function (rootProps, filterProps) {
          return _react2.default.createElement(
            _this8.SearchContext.Provider,
            _extends({}, baseProps, {
              ref: function ref(n) {
                return _this8.searchContext = n;
              },
              data: rootProps.getData(filterProps),
              searchText: _this8.props.search.searchText,
              dataChangeListener: _this8.props.dataChangeListener
            }),
            _react2.default.createElement(
              _this8.SearchContext.Consumer,
              null,
              function (searchProps) {
                return base(rootProps, filterProps, searchProps);
              }
            )
          );
        };
      }
    }, {
      key: 'renderWithFilterCtx',
      value: function renderWithFilterCtx(base, baseProps) {
        var _this9 = this;

        return function (rootProps) {
          return _react2.default.createElement(
            _this9.FilterContext.Provider,
            _extends({}, baseProps, {
              ref: function ref(n) {
                return _this9.filterContext = n;
              },
              data: rootProps.getData(),
              filter: _this9.props.filter.options || {},
              dataChangeListener: _this9.props.dataChangeListener
            }),
            _react2.default.createElement(
              _this9.FilterContext.Consumer,
              null,
              function (filterProps) {
                return base(rootProps, filterProps);
              }
            )
          );
        };
      }
    }, {
      key: 'renderWithCellEditCtx',
      value: function renderWithCellEditCtx(base, baseProps) {
        var _this10 = this;

        return function (rootProps) {
          return _react2.default.createElement(
            _this10.CellEditContext.Provider,
            _extends({}, baseProps, {
              ref: function ref(n) {
                return _this10.cellEditContext = n;
              },
              selectRow: _this10.props.selectRow,
              cellEdit: _this10.props.cellEdit,
              data: rootProps.getData()
            }),
            base(rootProps)
          );
        };
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            keyField = _props.keyField,
            columns = _props.columns,
            bootstrap4 = _props.bootstrap4;

        var baseProps = { keyField: keyField, columns: columns };

        var base = this.renderBase();

        if (this.ColumnManagementContext) {
          base = this.renderWithColumnManagementCtx(base, baseProps);
        }

        if (this.SelectionContext) {
          base = this.renderWithSelectionCtx(base, baseProps);
        }

        if (this.RowExpandContext) {
          base = this.renderWithRowExpandCtx(base, baseProps);
        }

        if (this.PaginationContext) {
          base = this.renderWithPaginationCtx(base, baseProps);
        }

        if (this.SortContext) {
          base = this.renderWithSortCtx(base, baseProps);
        }

        if (this.SearchContext) {
          base = this.renderWithSearchCtx(base, baseProps);
        }

        if (this.FilterContext) {
          base = this.renderWithFilterCtx(base, baseProps);
        }

        if (this.CellEditContext) {
          base = this.renderWithCellEditCtx(base, baseProps);
        }

        return _react2.default.createElement(
          _bootstrap.BootstrapContext.Provider,
          { value: { bootstrap4: bootstrap4 } },
          _react2.default.createElement(
            this.DataContext.Provider,
            _extends({}, baseProps, {
              data: this.props.data
            }),
            _react2.default.createElement(
              this.DataContext.Consumer,
              null,
              base
            )
          )
        );
      }
    }]);

    return BootstrapTableContainer;
  }((0, _remoteResolver3.default)(_react.Component));
};

exports.default = withContext;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint camelcase: 0 */


exports.default = function () {
  var DataContext = _react2.default.createContext();

  var DataProvider = function (_Component) {
    _inherits(DataProvider, _Component);

    function DataProvider() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, DataProvider);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DataProvider.__proto__ || Object.getPrototypeOf(DataProvider)).call.apply(_ref, [this].concat(args))), _this), _this.state = { data: _this.props.data }, _this.getData = function (filterProps, searchProps, sortProps, paginationProps) {
        if (paginationProps) return paginationProps.data;else if (sortProps) return sortProps.data;else if (searchProps) return searchProps.data;else if (filterProps) return filterProps.data;
        return _this.props.data;
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(DataProvider, [{
      key: 'UNSAFE_componentWillReceiveProps',
      value: function UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState(function () {
          return { data: nextProps.data };
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          DataContext.Provider,
          {
            value: {
              data: this.state.data,
              getData: this.getData
            }
          },
          this.props.children
        );
      }
    }]);

    return DataProvider;
  }(_react.Component);

  DataProvider.propTypes = {
    data: _propTypes2.default.array.isRequired,
    children: _propTypes2.default.node.isRequired
  };

  return {
    Provider: DataProvider,
    Consumer: DataContext.Consumer
  };
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prop-types: 0 */
/* eslint react/prefer-stateless-function: 0 */


exports.default = function () {
  var ColumnManagementContext = _react2.default.createContext();

  var ColumnManagementProvider = function (_React$Component) {
    _inherits(ColumnManagementProvider, _React$Component);

    function ColumnManagementProvider() {
      _classCallCheck(this, ColumnManagementProvider);

      return _possibleConstructorReturn(this, (ColumnManagementProvider.__proto__ || Object.getPrototypeOf(ColumnManagementProvider)).apply(this, arguments));
    }

    _createClass(ColumnManagementProvider, [{
      key: 'render',
      value: function render() {
        var toggleColumn = void 0;
        var _props = this.props,
            columns = _props.columns,
            toggles = _props.toggles;

        if (toggles) {
          toggleColumn = columns.filter(function (column) {
            return toggles[column.dataField];
          });
        } else {
          toggleColumn = columns.filter(function (column) {
            return !column.hidden;
          });
        }
        return _react2.default.createElement(
          ColumnManagementContext.Provider,
          { value: { columns: toggleColumn } },
          this.props.children
        );
      }
    }]);

    return ColumnManagementProvider;
  }(_react2.default.Component);

  ColumnManagementProvider.propTypes = {
    columns: _propTypes2.default.array.isRequired,
    toggles: _propTypes2.default.object
  };
  ColumnManagementProvider.defaultProps = {
    toggles: null
  };


  return {
    Provider: ColumnManagementProvider,
    Consumer: ColumnManagementContext.Consumer
  };
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint camelcase: 0 */
/* eslint react/require-default-props: 0 */


exports.default = function (dataOperator, isRemoteSort, handleSortChange) {
  var SortContext = _react2.default.createContext();

  var SortProvider = function (_React$Component) {
    _inherits(SortProvider, _React$Component);

    function SortProvider(props) {
      _classCallCheck(this, SortProvider);

      var _this = _possibleConstructorReturn(this, (SortProvider.__proto__ || Object.getPrototypeOf(SortProvider)).call(this, props));

      _initialiseProps.call(_this);

      var sortOrder = void 0;
      var sortColumn = void 0;
      var defaultSorted = props.defaultSorted,
          defaultSortDirection = props.defaultSortDirection,
          sort = props.sort;


      if (defaultSorted && defaultSorted.length > 0) {
        sortOrder = defaultSorted[0].order || defaultSortDirection;
        sortColumn = _this.initSort(defaultSorted[0].dataField, sortOrder);
      } else if (sort && sort.dataField && sort.order) {
        sortOrder = sort.order;
        sortColumn = _this.initSort(sort.dataField, sortOrder);
      }
      _this.state = { sortOrder: sortOrder, sortColumn: sortColumn };
      return _this;
    }

    _createClass(SortProvider, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _state = this.state,
            sortOrder = _state.sortOrder,
            sortColumn = _state.sortColumn;

        if (isRemoteSort() && sortOrder && sortColumn) {
          handleSortChange(sortColumn.dataField, sortOrder);
        }
      }
    }, {
      key: 'UNSAFE_componentWillReceiveProps',
      value: function UNSAFE_componentWillReceiveProps(nextProps) {
        var sort = nextProps.sort,
            columns = nextProps.columns;

        if (sort && sort.dataField && sort.order) {
          this.setState({
            sortOrder: sort.order,
            sortColumn: columns.find(function (col) {
              return col.dataField === sort.dataField;
            })
          });
        }
      }
    }, {
      key: 'initSort',
      value: function initSort(sortField, sortOrder) {
        var sortColumn = void 0;
        var columns = this.props.columns;

        var sortColumns = columns.filter(function (col) {
          return col.dataField === sortField;
        });
        if (sortColumns.length > 0) {
          sortColumn = sortColumns[0];

          if (sortColumn.onSort) {
            sortColumn.onSort(sortField, sortOrder);
          }
        }
        return sortColumn;
      }
    }, {
      key: 'render',
      value: function render() {
        var data = this.props.data;
        var sort = this.props.sort;
        var _state2 = this.state,
            sortOrder = _state2.sortOrder,
            sortColumn = _state2.sortColumn;

        if (!isRemoteSort() && sortColumn) {
          var sortFunc = sortColumn.sortFunc ? sortColumn.sortFunc : sort && sort.sortFunc;
          data = dataOperator.sort(data, sortOrder, _extends({}, sortColumn, { sortFunc: sortFunc }));
        }

        return _react2.default.createElement(
          SortContext.Provider,
          {
            value: {
              data: data,
              sortOrder: sortOrder,
              onSort: this.handleSort,
              sortField: sortColumn ? sortColumn.dataField : null
            }
          },
          this.props.children
        );
      }
    }]);

    return SortProvider;
  }(_react2.default.Component);

  SortProvider.propTypes = {
    data: _propTypes2.default.array.isRequired,
    columns: _propTypes2.default.array.isRequired,
    children: _propTypes2.default.node.isRequired,
    defaultSorted: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      dataField: _propTypes2.default.string.isRequired,
      order: _propTypes2.default.oneOf([_const2.default.SORT_DESC, _const2.default.SORT_ASC]).isRequired
    })),
    sort: _propTypes2.default.shape({
      dataField: _propTypes2.default.string,
      order: _propTypes2.default.oneOf([_const2.default.SORT_DESC, _const2.default.SORT_ASC]),
      sortFunc: _propTypes2.default.func
    }),
    defaultSortDirection: _propTypes2.default.oneOf([_const2.default.SORT_DESC, _const2.default.SORT_ASC])
  };

  var _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.handleSort = function (column) {
      var sortOrder = dataOperator.nextOrder(column, _this2.state, _this2.props.defaultSortDirection);

      if (column.onSort) {
        column.onSort(column.dataField, sortOrder);
      }

      if (isRemoteSort()) {
        handleSortChange(column.dataField, sortOrder);
      }
      _this2.setState(function () {
        return {
          sortOrder: sortOrder,
          sortColumn: column
        };
      });
    };
  };

  return {
    Provider: SortProvider,
    Consumer: SortContext.Consumer
  };
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _events = __webpack_require__(25);

var _events2 = _interopRequireDefault(_events);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (ExtendBase) {
  return function (_ExtendBase) {
    _inherits(RemoteResolver, _ExtendBase);

    function RemoteResolver(props) {
      _classCallCheck(this, RemoteResolver);

      var _this = _possibleConstructorReturn(this, (RemoteResolver.__proto__ || Object.getPrototypeOf(RemoteResolver)).call(this, props));

      _this.getNewestState = function () {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var sortOrder = void 0;
        var sortField = void 0;
        var page = void 0;
        var sizePerPage = void 0;
        var searchText = void 0;
        var filters = {};

        if (_this.sortContext) {
          sortOrder = _this.sortContext.state.sortOrder;
          sortField = _this.sortContext.state.sortColumn ? _this.sortContext.state.sortColumn.dataField : null;
        }

        if (_this.filterContext) {
          filters = _this.filterContext.currFilters;
        }

        if (_this.paginationContext) {
          page = _this.paginationContext.currPage;
          sizePerPage = _this.paginationContext.currSizePerPage;
        }

        if (_this.searchContext) {
          searchText = _this.props.search.searchText;
        }

        return _extends({
          sortOrder: sortOrder,
          sortField: sortField,
          filters: filters,
          page: page,
          sizePerPage: sizePerPage,
          searchText: searchText
        }, state, {
          data: _this.props.data
        });
      };

      _this.isRemoteSearch = function () {
        var remote = _this.props.remote;

        return remote === true || _utils2.default.isObject(remote) && remote.search || _this.isRemotePagination();
      };

      _this.isRemotePagination = function () {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var remote = _this.props.remote;

        e.result = remote === true || _utils2.default.isObject(remote) && remote.pagination;
        return e.result;
      };

      _this.isRemoteFiltering = function () {
        var remote = _this.props.remote;

        return remote === true || _utils2.default.isObject(remote) && remote.filter || _this.isRemotePagination();
      };

      _this.isRemoteSort = function () {
        var remote = _this.props.remote;

        return remote === true || _utils2.default.isObject(remote) && remote.sort || _this.isRemotePagination();
      };

      _this.isRemoteCellEdit = function () {
        var remote = _this.props.remote;

        return remote === true || _utils2.default.isObject(remote) && remote.cellEdit;
      };

      _this.handleRemotePageChange = function (page, sizePerPage) {
        _this.props.onTableChange('pagination', _this.getNewestState({ page: page, sizePerPage: sizePerPage }));
      };

      _this.handleRemoteFilterChange = function (filters) {
        var newState = { filters: filters };
        if (_this.isRemotePagination()) {
          var options = _this.props.pagination.options || {};
          newState.page = _utils2.default.isDefined(options.pageStartIndex) ? options.pageStartIndex : 1;
        }
        _this.props.onTableChange('filter', _this.getNewestState(newState));
      };

      _this.handleRemoteSortChange = function (sortField, sortOrder) {
        _this.props.onTableChange('sort', _this.getNewestState({ sortField: sortField, sortOrder: sortOrder }));
      };

      _this.handleRemoteCellChange = function (rowId, dataField, newValue) {
        var cellEdit = { rowId: rowId, dataField: dataField, newValue: newValue };
        _this.props.onTableChange('cellEdit', _this.getNewestState({ cellEdit: cellEdit }));
      };

      _this.handleRemoteSearchChange = function (searchText) {
        _this.props.onTableChange('search', _this.getNewestState({ searchText: searchText }));
      };

      _this.remoteEmitter = new _events2.default();
      _this.remoteEmitter.on('paginationChange', _this.handleRemotePageChange);
      _this.remoteEmitter.on('isRemotePagination', _this.isRemotePagination);
      return _this;
    }

    return RemoteResolver;
  }(ExtendBase);
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA4ODI2NjFmYzYzNjU2ZDYxOThhMCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifSIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NvbnN0LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvY29udGV4dHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvc3RvcmUvcm93cy5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NlbGwtZXZlbnQtZGVsZWdhdGVyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NvbnRleHRzL3NlbGVjdGlvbi1jb250ZXh0LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3N0b3JlL29wZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jb250ZXh0cy9yb3ctZXhwYW5kLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9lc20vVHJhbnNpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2VzbS9UcmFuc2l0aW9uR3JvdXBDb250ZXh0LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3N0b3JlL3NlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3cvcm93LXRlbXBsYXRlLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy9yb3ctcHVyZS1jb250ZW50LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy9ldmVudC1kZWxlZ2F0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93L3Nob3VsZC11cGRhdGVyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0RE9NXCIsXCJjb21tb25qczJcIjpcInJlYWN0LWRvbVwiLFwiY29tbW9uanNcIjpcInJlYWN0LWRvbVwiLFwiYW1kXCI6XCJyZWFjdC1kb21cIn0iLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9lc20vY29uZmlnLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvZXNtL3V0aWxzL1Byb3BUeXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2VzbS9UcmFuc2l0aW9uR3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2V2ZW50cy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9ib290c3RyYXAtdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2hlYWRlci1jZWxsLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3NvcnQvc3ltYm9sLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3NvcnQvY2FyZXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS91bmRlcnNjb3JlLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctc2VsZWN0aW9uL3NlbGVjdGlvbi1oZWFkZXItY2VsbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctZXhwYW5kL2V4cGFuZC1oZWFkZXItY2VsbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctc2VsZWN0aW9uL3NlbGVjdGlvbi1oZWFkZXItY2VsbC1jb25zdW1lci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9zdG9yZS9leHBhbmQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvc3RvcmUvbXV0YXRlLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3N0b3JlL3NvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvc3RvcmUvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctZXhwYW5kL2V4cGFuZC1oZWFkZXItY2VsbC1jb25zdW1lci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9maWx0ZXJzLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2ZpbHRlcnMtY2VsbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jYXB0aW9uLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2JvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93L3NpbXBsZS1yb3cuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvY2VsbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3cvYWdncmVnYXRlLXJvdy5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctZXhwYW5kL2V4cGFuZC1jZWxsLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy1zZWxlY3Rpb24vc2VsZWN0aW9uLWNlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93L3Jvdy1zZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy1zZWxlY3Rpb24vcm93LWNvbnN1bWVyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy1leHBhbmQvcm93LWNvbnN1bWVyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy1leHBhbmQvZXhwYW5kLXJvdy5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2VzbS9DU1NUcmFuc2l0aW9uLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9hZGRDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9lc20vaGFzQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL3JlbW92ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvZXNtL1JlcGxhY2VUcmFuc2l0aW9uLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2VzbS91dGlscy9DaGlsZE1hcHBpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9lc20vU3dpdGNoVHJhbnNpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvZm9vdGVyLWNlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcHJvcHMtcmVzb2x2ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcHJvcHMtcmVzb2x2ZXIvY29sdW1uLXJlc29sdmVyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NvbnRleHRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NvbnRleHRzL2RhdGEtY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jb250ZXh0cy9jb2x1bW4tY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jb250ZXh0cy9zb3J0LWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcHJvcHMtcmVzb2x2ZXIvcmVtb3RlLXJlc29sdmVyLmpzIl0sIm5hbWVzIjpbInNwbGl0TmVzdGVkIiwic3RyIiwiam9pbiIsInJlcGxhY2UiLCJzcGxpdCIsImNvbnRhaW5zIiwibGlzdCIsInZhbHVlIiwiaW5jbHVkZXMiLCJpbmRleE9mIiwiZ2V0IiwidGFyZ2V0IiwiZmllbGQiLCJkaXJlY3RHZXQiLCJ1bmRlZmluZWQiLCJwYXRoQXJyYXkiLCJyZXN1bHQiLCJyZWR1Y2UiLCJjdXJyIiwicGF0aCIsImUiLCJzZXQiLCJzYWZlIiwibGV2ZWwiLCJhIiwiYiIsIkVycm9yIiwibGVuZ3RoIiwiaXNFbXB0eU9iamVjdCIsIm9iaiIsImlzT2JqZWN0IiwiaGFzT3duUHJvcGVydHkiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJrZXlzIiwiaSIsImNhbGwiLCJpc0RlZmluZWQiLCJzbGVlcCIsImZuIiwibXMiLCJzZXRUaW1lb3V0IiwiZGVib3VuY2UiLCJmdW5jIiwid2FpdCIsImltbWVkaWF0ZSIsInRpbWVvdXQiLCJsYXRlciIsImFwcGx5IiwiY2FsbE5vdyIsImNsZWFyVGltZW91dCIsImFzc2lnbiIsIlNPUlRfQVNDIiwiU09SVF9ERVNDIiwiUk9XX1NFTEVDVF9TSU5HTEUiLCJST1dfU0VMRUNUX01VTFRJUExFIiwiUk9XX1NFTEVDVF9ESVNBQkxFRCIsIkNIRUNLQk9YX1NUQVRVU19DSEVDS0VEIiwiQ0hFQ0tCT1hfU1RBVFVTX0lOREVURVJNSU5BVEUiLCJDSEVDS0JPWF9TVEFUVVNfVU5DSEVDS0VEIiwiSU5ESUNBVE9SX1BPU0lUSU9OX0xFRlQiLCJJTkRJQ0FUT1JfUE9TSVRJT05fUklHSFQiLCJUWVBFX1NUUklORyIsIlRZUEVfTlVNQkVSIiwiVFlQRV9CT09MRUFOIiwiVFlQRV9EQVRFIiwiRklMVEVSU19QT1NJVElPTl9JTkxJTkUiLCJGSUxURVJTX1BPU0lUSU9OX1RPUCIsIkZJTFRFUlNfUE9TSVRJT05fQk9UVE9NIiwiQm9vdHN0cmFwQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJib290c3RyYXA0IiwibWF0Y2hSb3ciLCJrZXlGaWVsZCIsImlkIiwicm93IiwiZ2V0Um93QnlSb3dJZCIsImRhdGEiLCJmaW5kIiwiZXZlbnRzIiwicHJvcHMiLCJjcmVhdGVEZWZhdWx0RXZlbnRIYW5kbGVyIiwiYmluZCIsImNiIiwiY29sdW1uIiwiY29sdW1uSW5kZXgiLCJpbmRleCIsImF0dHJzIiwibmV3QXR0cnMiLCJmb3JFYWNoIiwiYXR0ciIsIkV4dGVuZEJhc2UiLCJTZWxlY3Rpb25Db250ZXh0IiwiU2VsZWN0aW9uUHJvdmlkZXIiLCJoYW5kbGVSb3dTZWxlY3QiLCJyb3dLZXkiLCJjaGVja2VkIiwicm93SW5kZXgiLCJzZWxlY3RSb3ciLCJtb2RlIiwib25TZWxlY3QiLCJjdXJyU2VsZWN0ZWQiLCJzZWxlY3RlZCIsInB1c2giLCJmaWx0ZXIiLCJmb3JjZVVwZGF0ZSIsImhhbmRsZUFsbFJvd3NTZWxlY3QiLCJpc1VuU2VsZWN0Iiwib25TZWxlY3RBbGwiLCJub25TZWxlY3RhYmxlIiwiY29uY2F0Iiwic2VsZWN0YWJsZUtleXMiLCJkIiwicyIsImdldFNlbGVjdGVkUm93cyIsIkFycmF5IiwiaXNBcnJheSIsIm5leHRQcm9wcyIsImFsbFJvd3NTZWxlY3RlZCIsImFsbFJvd3NOb3RTZWxlY3RlZCIsImNoZWNrZWRTdGF0dXMiLCJvblJvd1NlbGVjdCIsIm9uQWxsUm93c1NlbGVjdCIsImNoaWxkcmVuIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiLCJhcnJheSIsInN0cmluZyIsIlByb3ZpZGVyIiwiQ29uc3VtZXIiLCJyb3dzIiwic2VsZWN0aW9uIiwiZXhwYW5kIiwibXV0YXRlIiwic29ydCIsInR5cGUiLCJSb3dFeHBhbmRDb250ZXh0IiwiUm93RXhwYW5kUHJvdmlkZXIiLCJzdGF0ZSIsImV4cGFuZGVkIiwiZXhwYW5kUm93IiwiaXNDbG9zaW5nIiwib25DbG9zZWQiLCJjbG9zZWRSb3ciLCJzZXRTdGF0ZSIsImhhbmRsZVJvd0V4cGFuZCIsIm9uRXhwYW5kIiwib25seU9uZUV4cGFuZGluZyIsIm5vbkV4cGFuZGFibGUiLCJjdXJyRXhwYW5kZWQiLCJoYW5kbGVBbGxSb3dFeHBhbmQiLCJleHBhbmRBbGwiLCJvbkV4cGFuZEFsbCIsImV4cGFuZGFibGVLZXlzIiwiZ2V0RXhwYW5kZWRSb3dzIiwibmV4dEV4cGFuZGVkIiwicm93SWQiLCJhY2MiLCJjdXIiLCJpc0FueUV4cGFuZHMiLCJvblJvd0V4cGFuZCIsIm9uQWxsUm93RXhwYW5kIiwiZ2V0U2VsZWN0aW9uU3VtbWFyeSIsInJvd0tleXMiLCJtYXAiLCJ4Iiwic2tpcHMiLCJ1blNlbGVjdGFibGVLZXlzIiwiayIsIlJvd1RlbXBsYXRlIiwicmVuZGVyQ29udGVudCIsImNlbGxFbCIsInJlc3QiLCJpc1JlbmRlckZ1bmN0aW9uQ29sdW1uSW5MZWZ0IiwicG9zaXRpb24iLCJjaGlsZHJlbnMiLCJoaWRlU2VsZWN0Q29sdW1uIiwic2VsZWN0Q29sdW1uUG9zaXRpb24iLCJ1bnNoaWZ0IiwiY3JlYXRlRWxlbWVudCIsImtleSIsInNob3dFeHBhbmRDb2x1bW4iLCJleHBhbmRDb2x1bW5Qb3NpdGlvbiIsIm9iamVjdCIsIlJvd1B1cmVDb250ZW50Iiwic2hvdWxkVXBkYXRlIiwiY29sdW1ucyIsImVkaXRhYmxlIiwiZWRpdGluZ1Jvd0lkeCIsImVkaXRpbmdDb2xJZHgiLCJvblN0YXJ0IiwiY2xpY2tUb0VkaXQiLCJkYmNsaWNrVG9FZGl0IiwiRWRpdGluZ0NlbGxDb21wb25lbnQiLCJ0YWJJbmRleFN0YXJ0IiwidGFiSW5kZXgiLCJkYXRhRmllbGQiLCJjb250ZW50IiwiY2VsbFRpdGxlIiwiY2VsbFN0eWxlIiwiY2VsbEF0dHJzIiwiaXNGdW5jdGlvbiIsIm9yaWdpbkZuIiwiY2VsbENsYXNzZXMiLCJjbGFzc2VzIiwic3R5bGUiLCJ0aXRsZSIsImFsaWduIiwidGV4dEFsaWduIiwiY2xhc3NOYW1lIiwiZWRpdGFibGVDZWxsIiwiY2xpY2tOdW0iLCJjcmVhdGVDbGlja0V2ZW50SGFuZGxlciIsInNlbGVjdGFibGUiLCJleHBhbmRhYmxlIiwiREVMQVlfRk9SX0RCQ0xJQ0siLCJjbGlja0ZuIiwiZXhwYW5kQnlDb2x1bW5Pbmx5IiwiY2xpY2tUb0V4cGFuZCIsImNsaWNrVG9TZWxlY3QiLCJpc0VxdWFsIiwic2hvdWxkVXBkYXRlQnlDZWxsRWRpdGluZyIsInNob3VsZFVwZGF0ZWRCeU5vcm1hbFByb3BzIiwic2hvdWxkVXBkYXRlQ2hpbGQiLCJzaG91bGRVcGRhdGVCeUNvbHVtbnNGb3JTaW1wbGVDaGVjayIsIkJvb3RzdHJhcFRhYmxlIiwiZ2V0RGF0YSIsInZpc2libGVSb3dzIiwidmFsaWRhdGVQcm9wcyIsIm9uRGF0YVNpemVDaGFuZ2UiLCJwYWdpbmF0aW9uIiwiZGF0YVNpemUiLCJsb2FkaW5nIiwib3ZlcmxheSIsIkxvYWRpbmdPdmVybGF5IiwicmVuZGVyVGFibGUiLCJ0YWJJbmRleENlbGwiLCJzdHJpcGVkIiwiaG92ZXIiLCJib3JkZXJlZCIsImNvbmRlbnNlZCIsIm5vRGF0YUluZGljYXRpb24iLCJjYXB0aW9uIiwicm93U3R5bGUiLCJyb3dDbGFzc2VzIiwid3JhcHBlckNsYXNzZXMiLCJyb3dFdmVudHMiLCJjZWxsRWRpdCIsImZpbHRlclBvc2l0aW9uIiwidGFibGVXcmFwcGVyQ2xhc3MiLCJ0YWJsZUNsYXNzIiwiaGFzRmlsdGVycyIsInNvbWUiLCJjb2wiLCJmaWx0ZXJSZW5kZXJlciIsImhhc0Zvb3RlciIsImhhcyIsInRhYmxlQ2FwdGlvbiIsImhlYWRlckNsYXNzZXMiLCJoZWFkZXJXcmFwcGVyQ2xhc3NlcyIsInNvcnRGaWVsZCIsInNvcnRPcmRlciIsIm9uU29ydCIsInNvcnRDYXJldCIsIm9uRmlsdGVyIiwiY3VyckZpbHRlcnMiLCJvbkV4dGVybmFsRmlsdGVyIiwiZmlsdGVyc0NsYXNzZXMiLCJib2R5Q2xhc3NlcyIsImlzRW1wdHkiLCJ2aXNpYmxlQ29sdW1uU2l6ZSIsImZvb3RlckNsYXNzZXMiLCJib29sIiwicmVtb3RlIiwib25lT2ZUeXBlIiwic2hhcGUiLCJvbmVPZiIsImhpZGVTZWxlY3RBbGwiLCJub25TZWxlY3RhYmxlU3R5bGUiLCJub25TZWxlY3RhYmxlQ2xhc3NlcyIsImJnQ29sb3IiLCJzZWxlY3Rpb25SZW5kZXJlciIsInNlbGVjdGlvbkhlYWRlclJlbmRlcmVyIiwiaGVhZGVyQ29sdW1uU3R5bGUiLCJzZWxlY3RDb2x1bW5TdHlsZSIsInJlbmRlcmVyIiwiZXhwYW5kQ29sdW1uUmVuZGVyZXIiLCJleHBhbmRIZWFkZXJDb2x1bW5SZW5kZXJlciIsInBhcmVudENsYXNzTmFtZSIsImRlZmF1bHRTb3J0ZWQiLCJhcnJheU9mIiwib3JkZXIiLCJzb3J0RnVuYyIsImRlZmF1bHRTb3J0RGlyZWN0aW9uIiwib25UYWJsZUNoYW5nZSIsInNlYXJjaCIsInNlYXJjaFRleHQiLCJzZWFyY2hDb250ZXh0Iiwic2V0RGVwZW5kZW5jeU1vZHVsZXMiLCJkZWZhdWx0UHJvcHMiLCJub25FZGl0YWJsZVJvd3MiLCJIZWFkZXIiLCJnbG9iYWxTb3J0Q2FyZXQiLCJTZWxlY3Rpb25IZWFkZXJDZWxsQ29tcCIsIkV4cGFuc2lvbkhlYWRlckNlbGxDb21wIiwiY3VyclNvcnQiLCJpc0xhc3RTb3J0aW5nIiwiSGVhZGVyQ2VsbCIsInNvcnRpbmciLCJ0ZXh0IiwiaGVhZGVyVGl0bGUiLCJoZWFkZXJBbGlnbiIsImhlYWRlckZvcm1hdHRlciIsImhlYWRlckV2ZW50cyIsImhlYWRlclN0eWxlIiwiaGVhZGVyQXR0cnMiLCJoZWFkZXJTb3J0aW5nQ2xhc3NlcyIsImhlYWRlclNvcnRpbmdTdHlsZSIsInNvcnRDYXJldGZ1bmMiLCJkZWxlZ2F0ZUV2ZW50cyIsImRlbGVnYXRlIiwiY3VzdG9tQXR0cnMiLCJzb3J0U3ltYm9sIiwiZmlsdGVyRWxtIiwiY3VzdG9tQ2xpY2siLCJvbkNsaWNrIiwib25LZXlVcCIsIm9uQ3VzdG9tRmlsdGVyIiwic29ydEVsZW1lbnQiLCJmaWx0ZXJFbGVtZW50IiwiaXNEdW1teUZpZWxkIiwiaGlkZGVuIiwiZm9ybWF0dGVyIiwiZm9ybWF0RXh0cmFEYXRhIiwiYW55IiwiZWRpdG9yIiwiZWRpdENlbGxTdHlsZSIsImVkaXRDZWxsQ2xhc3NlcyIsImVkaXRvclN0eWxlIiwiZWRpdG9yQ2xhc3NlcyIsImVkaXRvclJlbmRlcmVyIiwidmFsaWRhdG9yIiwiZmlsdGVyVmFsdWUiLCJzZWFyY2hhYmxlIiwibnVtYmVyIiwiU29ydFN5bWJvbCIsIlNvcnRDYXJldCIsIm9yZGVyQ2xhc3MiLCJkcm9wdXAiLCJDaGVja0JveCIsImluZGV0ZXJtaW5hdGUiLCJpbnB1dCIsIlNlbGVjdGlvbkhlYWRlckNlbGwiLCJoYW5kbGVDaGVja0JveENsaWNrIiwiRXhwYW5zaW9uSGVhZGVyQ2VsbCIsImVkaXRDZWxsIiwibmV3VmFsdWUiLCJjb21wYXJhdG9yIiwibG9jYWxlQ29tcGFyZSIsInNvcnRWYWx1ZSIsIl9kYXRhIiwidmFsdWVBIiwidmFsdWVCIiwibmV4dE9yZGVyIiwiY3VycmVudFNvcnRDb2x1bW4iLCJzb3J0Q29sdW1uIiwiZGVmYXVsdE9yZGVyIiwidHlwZUNvbnZlcnQiLCJTdHJpbmciLCJOdW1iZXIiLCJEYXRlIiwiRmlsdGVycyIsImZpbHRlckNvbHVtbnMiLCJzaG93RmlsdGVyc1JvdyIsImRpc3BsYXkiLCJGaWx0ZXJzQ2VsbCIsIkNhcHRpb24iLCJjYXB0aW9uU2lkZSIsIkJvZHkiLCJFZGl0aW5nQ2VsbCIsImNyZWF0ZUVkaXRpbmdDZWxsIiwib3B0aW9ucyIsIm9uU3RhcnRFZGl0IiwiUm93Q29tcG9uZW50Iiwic2VsZWN0Um93RW5hYmxlZCIsImV4cGFuZFJvd0VuYWJsZWQiLCJ3aXRoUm93TGV2ZWxDZWxsRWRpdCIsImluZGljYXRpb24iLCJhZGRpdGlvbmFsUm93UHJvcHMiLCJiYXNlUm93UHJvcHMiLCJTaW1wbGVSb3ciLCJzaG91bGRVcGRhdGVSb3dDb250ZW50Iiwic2hvdWxkUm93Q29udGVudFVwZGF0ZSIsInNob3VsZFVwZGF0ZWRCeVNlbGZQcm9wcyIsInRyQXR0cnMiLCJDZWxsIiwiY3JlYXRlSGFuZGxlRWRpdGluZ0NlbGwiLCJvcmlnaW5GdW5jIiwib25Eb3VibGVDbGljayIsIlJvd0FnZ3JlZ2F0b3IiLCJzZWxlY3RDZWxsIiwiZXhwYW5kQ2VsbCIsIkV4cGFuZENlbGwiLCJoYW5kbGVDbGljayIsInN0b3BQcm9wYWdhdGlvbiIsIlNlbGVjdGlvbkNlbGwiLCJkaXNhYmxlZCIsImlucHV0VHlwZSIsIlJvd1NlY3Rpb24iLCJjb2xTcGFuIiwicmVuZGVyV2l0aFNlbGVjdGlvbiIsIm5vdFNlbGVjdGFibGUiLCJzZWxlY3RlZFN0eWxlIiwic2VsZWN0ZWRDbGFzc2VzIiwiYmFja2dyb3VuZENvbG9yIiwibm90U2VsZWN0YWJsZVN0eWxlIiwibm90U2VsZWN0YWJsZUNsYXNzZXMiLCJ3aXRoQ29uc3VtZXIiLCJkaXNwbGF5TmFtZSIsInJlbmRlcldpdGhFeHBhbnNpb24iLCJFeHBhbmRSb3ciLCJGb290ZXIiLCJmb290ZXIiLCJjb2x1bW5EYXRhIiwicGx1Y2siLCJGb290ZXJDZWxsIiwiZm9vdGVyVGl0bGUiLCJmb290ZXJBbGlnbiIsImZvb3RlckZvcm1hdHRlciIsImZvb3RlckV2ZW50cyIsImZvb3RlclN0eWxlIiwiZm9vdGVyQXR0cnMiLCJpc1N0cmluZyIsImhpZGRlblJvd3MiLCJpbmNsdWRlU2VsZWN0Q29sdW1uIiwiY29sdW1uTGVuIiwiY29sdW1uVG9nZ2xlIiwidG9nZ2xlcyIsIm5hbWUiLCJjIiwid2l0aENvbnRleHQiLCJEYXRhQ29udGV4dCIsInJlZ2lzdGVyRXhwb3NlZEFQSSIsImV4cG9zZWRBUElFbWl0dGVyIiwib24iLCJwYXlsb2FkIiwidGFibGUiLCJzZWxlY3Rpb25Db250ZXh0IiwiZ2V0U2VsZWN0ZWQiLCJnZXRTZWFyY2hlZCIsImZpbHRlckNvbnRleHQiLCJnZXRGaWx0ZXJlZCIsIlNvcnRDb250ZXh0IiwiaXNSZW1vdGVTb3J0IiwiaGFuZGxlUmVtb3RlU29ydENoYW5nZSIsIkNvbHVtbk1hbmFnZW1lbnRDb250ZXh0IiwiQ2VsbEVkaXRDb250ZXh0IiwiaXNSZW1vdGVDZWxsRWRpdCIsImhhbmRsZVJlbW90ZUNlbGxDaGFuZ2UiLCJGaWx0ZXJDb250ZXh0IiwiaXNSZW1vdGVGaWx0ZXJpbmciLCJoYW5kbGVSZW1vdGVGaWx0ZXJDaGFuZ2UiLCJQYWdpbmF0aW9uQ29udGV4dCIsIlNlYXJjaENvbnRleHQiLCJpc1JlbW90ZVNlYXJjaCIsImhhbmRsZVJlbW90ZVNlYXJjaENoYW5nZSIsInNldFBhZ2luYXRpb25SZW1vdGVFbWl0dGVyIiwicmVtb3RlRW1pdHRlciIsImlzUmVtb3RlUGFnaW5hdGlvbiIsImhhbmRsZVJlbW90ZVBhZ2VDaGFuZ2UiLCJyb290UHJvcHMiLCJmaWx0ZXJQcm9wcyIsInNlYXJjaFByb3BzIiwic29ydFByb3BzIiwicGFnaW5hdGlvblByb3BzIiwiY29sdW1uVG9nZ2xlUHJvcHMiLCJuIiwiYmFzZSIsImJhc2VQcm9wcyIsInJvd0V4cGFuZENvbnRleHQiLCJwYWdpbmF0aW9uQ29udGV4dCIsInNvcnRDb250ZXh0IiwiZGF0YUNoYW5nZUxpc3RlbmVyIiwiY2VsbEVkaXRDb250ZXh0IiwicmVuZGVyQmFzZSIsInJlbmRlcldpdGhDb2x1bW5NYW5hZ2VtZW50Q3R4IiwicmVuZGVyV2l0aFNlbGVjdGlvbkN0eCIsInJlbmRlcldpdGhSb3dFeHBhbmRDdHgiLCJyZW5kZXJXaXRoUGFnaW5hdGlvbkN0eCIsInJlbmRlcldpdGhTb3J0Q3R4IiwicmVuZGVyV2l0aFNlYXJjaEN0eCIsInJlbmRlcldpdGhGaWx0ZXJDdHgiLCJyZW5kZXJXaXRoQ2VsbEVkaXRDdHgiLCJEYXRhUHJvdmlkZXIiLCJDb2x1bW5NYW5hZ2VtZW50UHJvdmlkZXIiLCJ0b2dnbGVDb2x1bW4iLCJkYXRhT3BlcmF0b3IiLCJoYW5kbGVTb3J0Q2hhbmdlIiwiU29ydFByb3ZpZGVyIiwiaW5pdFNvcnQiLCJzb3J0Q29sdW1ucyIsImhhbmRsZVNvcnQiLCJnZXROZXdlc3RTdGF0ZSIsInBhZ2UiLCJzaXplUGVyUGFnZSIsImZpbHRlcnMiLCJjdXJyUGFnZSIsImN1cnJTaXplUGVyUGFnZSIsIm5ld1N0YXRlIiwicGFnZVN0YXJ0SW5kZXgiXSwibWFwcGlu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QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCOztBQUU1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0VBQW9FO0FBQ3BFOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5SEFBZ0Y7O0FBRWhGO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsY0FBYyxVQUFVLElBQUk7QUFDakQsUUFBUTtBQUNSLGlDQUFpQyxhQUFhLE1BQU0sRUFBRTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLEtBQUs7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxVQUFVO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVB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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFIQUFrQzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsS0FBSztBQUN0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsMEU7Ozs7OztBQzVMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSCxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtB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QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0JBQWdCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGdCQUFnQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLFlBQVk7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLFlBQVk7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsV0FBVztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsWUFBWTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsWUFBWTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsWUFBWTtBQUMxRDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUF1QixnQkFBZ0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsWUFBWTtBQUN6RDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw4QkFBOEI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQywwQkFBMEI7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHFCQUFxQixjQUFjO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsWUFBWTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZUFBZTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixlQUFlO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixnQkFBZ0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxZQUFZO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0JBQWdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLFlBQVk7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxZQUFZO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnUEFBbUU7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSw4Q0FBNkU7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELE1BQU07QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELHdFOzs7Ozs7OztBQzNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBLDBEQUEwRCxxTUFBMkk7QUFDck0sQzs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDSEE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx3RUFBd0UsYUFBYTtBQUNyRjtBQUNBOztBQUVBOztBQUVBO0FBQ0EsNEVBQTRFLGVBQWU7QUFDM0Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNEVBQTRFLGVBQWU7QUFDM0Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNEVBQTRFLGVBQWU7QUFDM0Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNEVBQTRFLGVBQWU7QUFDM0Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNEVBQTRFLGVBQWU7QUFDM0Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNEVBQTRFLGVBQWU7QUFDM0Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7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QjBOLHdCQS9GbUIsR0ErRlEsVUFBQ3pLLFVBQUQsRUFBZ0I7QUFDekMsY0FBSzFOLEtBQUwsQ0FBV3dOLGFBQVgsQ0FBeUIsUUFBekIsRUFBbUMsTUFBS2dOLGNBQUwsQ0FBb0IsRUFBRTlNLHNCQUFGLEVBQXBCLENBQW5DO0FBQ0QsT0FqR2tCOztBQUVqQixZQUFLMkssYUFBTCxHQUFxQixzQkFBckI7QUFDQSxZQUFLQSxhQUFMLENBQW1CdkIsRUFBbkIsQ0FBc0Isa0JBQXRCLEVBQTBDLE1BQUt5QixzQkFBL0M7QUFDQSxZQUFLRixhQUFMLENBQW1CdkIsRUFBbkIsQ0FBc0Isb0JBQXRCLEVBQTRDLE1BQUt3QixrQkFBakQ7QUFKaUI7QUFLbEI7O0FBUFU7QUFBQSxJQUNnQjNYLFVBRGhCO0FBQUEsQyIsImZpbGUiOiJyZWFjdC1ib290c3RyYXAtdGFibGUyL2Rpc3QvcmVhY3QtYm9vdHN0cmFwLXRhYmxlLW5leHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcInJlYWN0LWRvbVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiLCBcInJlYWN0LWRvbVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJSZWFjdEJvb3RzdHJhcFRhYmxlMlwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJSZWFjdEJvb3RzdHJhcFRhYmxlMlwiXSA9IGZhY3Rvcnkocm9vdFtcIlJlYWN0XCJdLCByb290W1wiUmVhY3RET01cIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjFfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyNik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgODgyNjYxZmM2MzY1NmQ2MTk4YTAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0XCIsXCJjb21tb25qczJcIjpcInJlYWN0XCIsXCJjb21tb25qc1wiOlwicmVhY3RcIixcImFtZFwiOlwicmVhY3RcIn1cbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKFJlYWN0SXMuaXNFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKiBlc2xpbnQgbm8tZW1wdHk6IDAgKi9cbi8qIGVzbGludCBuby1wYXJhbS1yZWFzc2lnbjogMCAqL1xuLyogZXNsaW50IHByZWZlci1yZXN0LXBhcmFtczogMCAqL1xuaW1wb3J0IF8gZnJvbSAndW5kZXJzY29yZSc7XG5cbmZ1bmN0aW9uIHNwbGl0TmVzdGVkKHN0cikge1xuICByZXR1cm4gW3N0cl1cbiAgICAuam9pbignLicpXG4gICAgLnJlcGxhY2UoL1xcWy9nLCAnLicpXG4gICAgLnJlcGxhY2UoL1xcXS9nLCAnJylcbiAgICAuc3BsaXQoJy4nKTtcbn1cblxuZnVuY3Rpb24gY29udGFpbnMobGlzdCwgdmFsdWUpIHtcbiAgaWYgKF8uaW5jbHVkZXMpIHtcbiAgICByZXR1cm4gXy5pbmNsdWRlcyhsaXN0LCB2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gbGlzdC5pbmRleE9mKHZhbHVlKSA+IC0xO1xufVxuXG5mdW5jdGlvbiBnZXQodGFyZ2V0LCBmaWVsZCkge1xuICBpZighdGFyZ2V0KXtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGRpcmVjdEdldCA9IHRhcmdldFtmaWVsZF07XG4gIGlmIChkaXJlY3RHZXQgIT09IHVuZGVmaW5lZCAmJiBkaXJlY3RHZXQgIT09IG51bGwpIHtcbiAgICByZXR1cm4gZGlyZWN0R2V0O1xuICB9XG5cbiAgY29uc3QgcGF0aEFycmF5ID0gc3BsaXROZXN0ZWQoZmllbGQpO1xuICBsZXQgcmVzdWx0O1xuICB0cnkge1xuICAgIHJlc3VsdCA9IHBhdGhBcnJheS5yZWR1Y2UoKGN1cnIsIHBhdGgpID0+IGN1cnJbcGF0aF0sIHRhcmdldCk7XG4gIH0gY2F0Y2ggKGUpIHt9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHNldCh0YXJnZXQsIGZpZWxkLCB2YWx1ZSwgc2FmZSA9IGZhbHNlKSB7XG4gIGNvbnN0IHBhdGhBcnJheSA9IHNwbGl0TmVzdGVkKGZpZWxkKTtcbiAgbGV0IGxldmVsID0gMDtcbiAgcGF0aEFycmF5LnJlZHVjZSgoYSwgYikgPT4ge1xuICAgIGxldmVsICs9IDE7XG4gICAgaWYgKHR5cGVvZiBhW2JdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKCFzYWZlKSB0aHJvdyBuZXcgRXJyb3IoYCR7YX0uJHtifSBpcyB1bmRlZmluZWRgKTtcbiAgICAgIGFbYl0gPSB7fTtcbiAgICAgIHJldHVybiBhW2JdO1xuICAgIH1cblxuICAgIGlmIChsZXZlbCA9PT0gcGF0aEFycmF5Lmxlbmd0aCkge1xuICAgICAgYVtiXSA9IHZhbHVlO1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gYVtiXTtcbiAgfSwgdGFyZ2V0KTtcbn1cblxuZnVuY3Rpb24gaXNFbXB0eU9iamVjdChvYmopIHtcbiAgaWYgKCFfLmlzT2JqZWN0KG9iaikpIHJldHVybiBmYWxzZTtcblxuICBjb25zdCBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5c1tpXSkpIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBpc0RlZmluZWQodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgIT09IG51bGw7XG59XG5cbmZ1bmN0aW9uIHNsZWVwKGZuLCBtcykge1xuICByZXR1cm4gc2V0VGltZW91dCgoKSA9PiBmbigpLCBtcyk7XG59XG5cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkge1xuICBsZXQgdGltZW91dDtcblxuICByZXR1cm4gKCkgPT4ge1xuICAgIGNvbnN0IGxhdGVyID0gKCkgPT4ge1xuICAgICAgdGltZW91dCA9IG51bGw7XG5cbiAgICAgIGlmICghaW1tZWRpYXRlKSB7XG4gICAgICAgIGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcblxuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCB8fCAwKTtcblxuICAgIGlmIChjYWxsTm93KSB7XG4gICAgICBmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBPYmplY3QuYXNzaWduKF8sIHtcbiAgZ2V0LFxuICBzZXQsXG4gIGlzRGVmaW5lZCxcbiAgaXNFbXB0eU9iamVjdCxcbiAgc2xlZXAsXG4gIGRlYm91bmNlLFxuICBjb250YWluc1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy91dGlscy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgU09SVF9BU0M6ICdhc2MnLFxuICBTT1JUX0RFU0M6ICdkZXNjJyxcbiAgUk9XX1NFTEVDVF9TSU5HTEU6ICdyYWRpbycsXG4gIFJPV19TRUxFQ1RfTVVMVElQTEU6ICdjaGVja2JveCcsXG4gIFJPV19TRUxFQ1RfRElTQUJMRUQ6ICdST1dfU0VMRUNUX0RJU0FCTEVEJyxcbiAgQ0hFQ0tCT1hfU1RBVFVTX0NIRUNLRUQ6ICdjaGVja2VkJyxcbiAgQ0hFQ0tCT1hfU1RBVFVTX0lOREVURVJNSU5BVEU6ICdpbmRldGVybWluYXRlJyxcbiAgQ0hFQ0tCT1hfU1RBVFVTX1VOQ0hFQ0tFRDogJ3VuY2hlY2tlZCcsXG4gIElORElDQVRPUl9QT1NJVElPTl9MRUZUOiAnbGVmdCcsXG4gIElORElDQVRPUl9QT1NJVElPTl9SSUdIVDogJ3JpZ2h0JyxcbiAgVFlQRV9TVFJJTkc6ICdzdHJpbmcnLFxuICBUWVBFX05VTUJFUjogJ251bWJlcicsXG4gIFRZUEVfQk9PTEVBTjogJ2Jvb2wnLFxuICBUWVBFX0RBVEU6ICdkYXRlJyxcbiAgRklMVEVSU19QT1NJVElPTl9JTkxJTkU6ICdpbmxpbmUnLFxuICBGSUxURVJTX1BPU0lUSU9OX1RPUDogJ3RvcCcsXG4gIEZJTFRFUlNfUE9TSVRJT05fQk9UVE9NOiAnYm90dG9tJ1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NvbnN0LmpzIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNyBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSAmJiBhcmcubGVuZ3RoKSB7XG5cdFx0XHRcdHZhciBpbm5lciA9IGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblx0XHRcdFx0aWYgKGlubmVyKSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGlubmVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0Y2xhc3NOYW1lcy5kZWZhdWx0ID0gY2xhc3NOYW1lcztcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IEJvb3RzdHJhcENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHtcbiAgYm9vdHN0cmFwNDogZmFsc2Vcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvY29udGV4dHMvYm9vdHN0cmFwLmpzIiwiaW1wb3J0IHNldFByb3RvdHlwZU9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zZXRQcm90b3R5cGVPZlwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7XG4gIHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzO1xuICBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IF8gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgbWF0Y2hSb3cgPSAoa2V5RmllbGQsIGlkKSA9PiByb3cgPT4gXy5nZXQocm93LCBrZXlGaWVsZCkgPT09IGlkO1xuXG5leHBvcnQgY29uc3QgZ2V0Um93QnlSb3dJZCA9IChkYXRhLCBrZXlGaWVsZCwgaWQpID0+IGRhdGEuZmluZChtYXRjaFJvdyhrZXlGaWVsZCwgaWQpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3N0b3JlL3Jvd3MuanMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgXyBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgZXZlbnRzID0gW1xuICAnb25DbGljaycsXG4gICdvbkRvdWJsZUNsaWNrJyxcbiAgJ29uTW91c2VFbnRlcicsXG4gICdvbk1vdXNlTGVhdmUnLFxuICAnb25Db250ZXh0TWVudScsXG4gICdvbkF1eENsaWNrJ1xuXTtcblxuZXhwb3J0IGRlZmF1bHQgRXh0ZW5kQmFzZSA9PlxuICBjbGFzcyBDZWxsRXZlbnREZWxlZ2F0ZXIgZXh0ZW5kcyBFeHRlbmRCYXNlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5jcmVhdGVEZWZhdWx0RXZlbnRIYW5kbGVyID0gdGhpcy5jcmVhdGVEZWZhdWx0RXZlbnRIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY3JlYXRlRGVmYXVsdEV2ZW50SGFuZGxlcihjYikge1xuICAgICAgcmV0dXJuIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY29sdW1uLCBjb2x1bW5JbmRleCwgaW5kZXggfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNiKGUsIGNvbHVtbiwgdHlwZW9mIGNvbHVtbkluZGV4ICE9PSAndW5kZWZpbmVkJyA/IGNvbHVtbkluZGV4IDogaW5kZXgpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBkZWxlZ2F0ZShhdHRycyA9IHt9KSB7XG4gICAgICBjb25zdCBuZXdBdHRycyA9IHsgLi4uYXR0cnMgfTtcbiAgICAgIE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKChhdHRyKSA9PiB7XG4gICAgICAgIGlmIChfLmNvbnRhaW5zKGV2ZW50cywgYXR0cikpIHtcbiAgICAgICAgICBuZXdBdHRyc1thdHRyXSA9IHRoaXMuY3JlYXRlRGVmYXVsdEV2ZW50SGFuZGxlcihhdHRyc1thdHRyXSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ld0F0dHJzO1xuICAgIH1cbiAgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NlbGwtZXZlbnQtZGVsZWdhdGVyLmpzIiwiLyogZXNsaW50IGNhbWVsY2FzZTogMCAqL1xuLyogZXNsaW50IHJlYWN0L3Byb3AtdHlwZXM6IDAgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IENvbnN0IGZyb20gJy4uL2NvbnN0JztcbmltcG9ydCBfIGZyb20gJy4uL3V0aWxzJztcblxuaW1wb3J0IGRhdGFPcGVyYXRvciBmcm9tICcuLi9zdG9yZS9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgZ2V0U2VsZWN0aW9uU3VtbWFyeSB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdGlvbic7XG5cbmNvbnN0IFNlbGVjdGlvbkNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5jbGFzcyBTZWxlY3Rpb25Qcm92aWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gICAgZGF0YTogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gICAga2V5RmllbGQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHByb3BzLnNlbGVjdFJvdy5zZWxlY3RlZCB8fCBbXTtcbiAgfVxuXG4gIC8vIGV4cG9zZWQgQVBJXG4gIGdldFNlbGVjdGVkKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkO1xuICB9XG5cbiAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKG5leHRQcm9wcy5zZWxlY3RSb3cpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSBuZXh0UHJvcHMuc2VsZWN0Um93LnNlbGVjdGVkIHx8IHRoaXMuc2VsZWN0ZWQ7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUm93U2VsZWN0ID0gKHJvd0tleSwgY2hlY2tlZCwgcm93SW5kZXgsIGUpID0+IHtcbiAgICBjb25zdCB7IGRhdGEsIGtleUZpZWxkLCBzZWxlY3RSb3c6IHsgbW9kZSwgb25TZWxlY3QgfSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IFJPV19TRUxFQ1RfU0lOR0xFIH0gPSBDb25zdDtcblxuICAgIGxldCBjdXJyU2VsZWN0ZWQgPSBbLi4udGhpcy5zZWxlY3RlZF07XG5cbiAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcbiAgICBpZiAob25TZWxlY3QpIHtcbiAgICAgIGNvbnN0IHJvdyA9IGRhdGFPcGVyYXRvci5nZXRSb3dCeVJvd0lkKGRhdGEsIGtleUZpZWxkLCByb3dLZXkpO1xuICAgICAgcmVzdWx0ID0gb25TZWxlY3Qocm93LCBjaGVja2VkLCByb3dJbmRleCwgZSk7XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdCA9PT0gdHJ1ZSB8fCByZXN1bHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKG1vZGUgPT09IFJPV19TRUxFQ1RfU0lOR0xFKSB7IC8vIHdoZW4gc2VsZWN0IG1vZGUgaXMgcmFkaW9cbiAgICAgICAgY3VyclNlbGVjdGVkID0gW3Jvd0tleV07XG4gICAgICB9IGVsc2UgaWYgKGNoZWNrZWQpIHsgLy8gd2hlbiBzZWxlY3QgbW9kZSBpcyBjaGVja2JveFxuICAgICAgICBjdXJyU2VsZWN0ZWQucHVzaChyb3dLZXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3VyclNlbGVjdGVkID0gY3VyclNlbGVjdGVkLmZpbHRlcih2YWx1ZSA9PiB2YWx1ZSAhPT0gcm93S2V5KTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZWxlY3RlZCA9IGN1cnJTZWxlY3RlZDtcbiAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gIH1cblxuICBoYW5kbGVBbGxSb3dzU2VsZWN0ID0gKGUsIGlzVW5TZWxlY3QpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBkYXRhLFxuICAgICAga2V5RmllbGQsXG4gICAgICBzZWxlY3RSb3c6IHtcbiAgICAgICAgb25TZWxlY3RBbGwsXG4gICAgICAgIG5vblNlbGVjdGFibGVcbiAgICAgIH1cbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHNlbGVjdGVkIH0gPSB0aGlzO1xuXG4gICAgbGV0IGN1cnJTZWxlY3RlZDtcblxuICAgIGlmICghaXNVblNlbGVjdCkge1xuICAgICAgY3VyclNlbGVjdGVkID0gc2VsZWN0ZWQuY29uY2F0KGRhdGFPcGVyYXRvci5zZWxlY3RhYmxlS2V5cyhkYXRhLCBrZXlGaWVsZCwgbm9uU2VsZWN0YWJsZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyU2VsZWN0ZWQgPSBzZWxlY3RlZC5maWx0ZXIocyA9PiB0eXBlb2YgZGF0YS5maW5kKGQgPT4gXy5nZXQoZCwga2V5RmllbGQpID09PSBzKSA9PT0gJ3VuZGVmaW5lZCcpO1xuICAgIH1cblxuICAgIGxldCByZXN1bHQ7XG4gICAgaWYgKG9uU2VsZWN0QWxsKSB7XG4gICAgICByZXN1bHQgPSBvblNlbGVjdEFsbChcbiAgICAgICAgIWlzVW5TZWxlY3QsXG4gICAgICAgIGRhdGFPcGVyYXRvci5nZXRTZWxlY3RlZFJvd3MoXG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgICBrZXlGaWVsZCxcbiAgICAgICAgICBpc1VuU2VsZWN0ID8gc2VsZWN0ZWQgOiBjdXJyU2VsZWN0ZWRcbiAgICAgICAgKSxcbiAgICAgICAgZVxuICAgICAgKTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlc3VsdCkpIHtcbiAgICAgICAgY3VyclNlbGVjdGVkID0gcmVzdWx0O1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNlbGVjdGVkID0gY3VyclNlbGVjdGVkO1xuICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBhbGxSb3dzU2VsZWN0ZWQsXG4gICAgICBhbGxSb3dzTm90U2VsZWN0ZWRcbiAgICB9ID0gZ2V0U2VsZWN0aW9uU3VtbWFyeShcbiAgICAgIHRoaXMucHJvcHMuZGF0YSxcbiAgICAgIHRoaXMucHJvcHMua2V5RmllbGQsXG4gICAgICB0aGlzLnNlbGVjdGVkXG4gICAgKTtcblxuICAgIGxldCBjaGVja2VkU3RhdHVzO1xuXG4gICAgLy8gY2hlY2tib3ggc3RhdHVzIGRlcGVuZGluZyBvbiBzZWxlY3RlZCByb3dzIGNvdW50c1xuICAgIGlmIChhbGxSb3dzU2VsZWN0ZWQpIGNoZWNrZWRTdGF0dXMgPSBDb25zdC5DSEVDS0JPWF9TVEFUVVNfQ0hFQ0tFRDtcbiAgICBlbHNlIGlmIChhbGxSb3dzTm90U2VsZWN0ZWQpIGNoZWNrZWRTdGF0dXMgPSBDb25zdC5DSEVDS0JPWF9TVEFUVVNfVU5DSEVDS0VEO1xuICAgIGVsc2UgY2hlY2tlZFN0YXR1cyA9IENvbnN0LkNIRUNLQk9YX1NUQVRVU19JTkRFVEVSTUlOQVRFO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTZWxlY3Rpb25Db250ZXh0LlByb3ZpZGVyXG4gICAgICAgIHZhbHVlPXsge1xuICAgICAgICAgIC4uLnRoaXMucHJvcHMuc2VsZWN0Um93LFxuICAgICAgICAgIHNlbGVjdGVkOiB0aGlzLnNlbGVjdGVkLFxuICAgICAgICAgIG9uUm93U2VsZWN0OiB0aGlzLmhhbmRsZVJvd1NlbGVjdCxcbiAgICAgICAgICBvbkFsbFJvd3NTZWxlY3Q6IHRoaXMuaGFuZGxlQWxsUm93c1NlbGVjdCxcbiAgICAgICAgICBhbGxSb3dzU2VsZWN0ZWQsXG4gICAgICAgICAgYWxsUm93c05vdFNlbGVjdGVkLFxuICAgICAgICAgIGNoZWNrZWRTdGF0dXNcbiAgICAgICAgfSB9XG4gICAgICA+XG4gICAgICAgIHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XG4gICAgICA8L1NlbGVjdGlvbkNvbnRleHQuUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFByb3ZpZGVyOiBTZWxlY3Rpb25Qcm92aWRlcixcbiAgQ29uc3VtZXI6IFNlbGVjdGlvbkNvbnRleHQuQ29uc3VtZXJcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jb250ZXh0cy9zZWxlY3Rpb24tY29udGV4dC5qcyIsImltcG9ydCAqIGFzIHJvd3MgZnJvbSAnLi9yb3dzJztcbmltcG9ydCAqIGFzIHNlbGVjdGlvbiBmcm9tICcuL3NlbGVjdGlvbic7XG5pbXBvcnQgKiBhcyBleHBhbmQgZnJvbSAnLi9leHBhbmQnO1xuaW1wb3J0ICogYXMgbXV0YXRlIGZyb20gJy4vbXV0YXRlJztcbmltcG9ydCAqIGFzIHNvcnQgZnJvbSAnLi9zb3J0JztcbmltcG9ydCAqIGFzIHR5cGUgZnJvbSAnLi90eXBlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAuLi5yb3dzLFxuICAuLi5zZWxlY3Rpb24sXG4gIC4uLmV4cGFuZCxcbiAgLi4ubXV0YXRlLFxuICAuLi5zb3J0LFxuICAuLi50eXBlXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvc3RvcmUvb3BlcmF0b3JzLmpzIiwiLyogZXNsaW50IGNhbWVsY2FzZTogMCAqL1xuLyogZXNsaW50IHJlYWN0L3Byb3AtdHlwZXM6IDAgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGRhdGFPcGVyYXRvciBmcm9tICcuLi9zdG9yZS9vcGVyYXRvcnMnO1xuaW1wb3J0IF8gZnJvbSAnLi4vdXRpbHMnO1xuXG5jb25zdCBSb3dFeHBhbmRDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuXG5jbGFzcyBSb3dFeHBhbmRQcm92aWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gICAgZGF0YTogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gICAga2V5RmllbGQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICB9O1xuXG4gIHN0YXRlID0geyBleHBhbmRlZDogdGhpcy5wcm9wcy5leHBhbmRSb3cuZXhwYW5kZWQgfHwgW10sXG4gICAgaXNDbG9zaW5nOiB0aGlzLnByb3BzLmV4cGFuZFJvdy5pc0Nsb3NpbmcgfHwgW10gfTtcblxuICBvbkNsb3NlZCA9IChjbG9zZWRSb3cpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNDbG9zaW5nOiB0aGlzLnN0YXRlLmlzQ2xvc2luZy5maWx0ZXIodmFsdWUgPT4gdmFsdWUgIT09IGNsb3NlZFJvdykgfSk7XG4gIH07XG5cbiAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKG5leHRQcm9wcy5leHBhbmRSb3cpIHtcbiAgICAgIGxldCBuZXh0RXhwYW5kZWQgPSBbLi4uKG5leHRQcm9wcy5leHBhbmRSb3cuZXhwYW5kZWQgfHwgdGhpcy5zdGF0ZS5leHBhbmRlZCldO1xuICAgICAgY29uc3QgeyBub25FeHBhbmRhYmxlID0gW10gfSA9IG5leHRQcm9wcy5leHBhbmRSb3c7XG4gICAgICBuZXh0RXhwYW5kZWQgPSBuZXh0RXhwYW5kZWQuZmlsdGVyKHJvd0lkID0+ICFfLmNvbnRhaW5zKG5vbkV4cGFuZGFibGUsIHJvd0lkKSk7XG4gICAgICBjb25zdCBpc0Nsb3NpbmcgPSB0aGlzLnN0YXRlLmV4cGFuZGVkLnJlZHVjZSgoYWNjLCBjdXIpID0+IHtcbiAgICAgICAgaWYgKCFfLmNvbnRhaW5zKG5leHRFeHBhbmRlZCwgY3VyKSkge1xuICAgICAgICAgIGFjYy5wdXNoKGN1cik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIFtdKTtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoe1xuICAgICAgICBleHBhbmRlZDogbmV4dEV4cGFuZGVkLFxuICAgICAgICBpc0Nsb3NpbmdcbiAgICAgIH0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoe1xuICAgICAgICBleHBhbmRlZDogdGhpcy5zdGF0ZS5leHBhbmRlZFxuICAgICAgfSkpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVJvd0V4cGFuZCA9IChyb3dLZXksIGV4cGFuZGVkLCByb3dJbmRleCwgZSkgPT4ge1xuICAgIGNvbnN0IHsgZGF0YSwga2V5RmllbGQsIGV4cGFuZFJvdzogeyBvbkV4cGFuZCwgb25seU9uZUV4cGFuZGluZywgbm9uRXhwYW5kYWJsZSB9IH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChub25FeHBhbmRhYmxlICYmIF8uY29udGFpbnMobm9uRXhwYW5kYWJsZSwgcm93S2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBjdXJyRXhwYW5kZWQgPSBbLi4udGhpcy5zdGF0ZS5leHBhbmRlZF07XG4gICAgbGV0IGlzQ2xvc2luZyA9IFsuLi50aGlzLnN0YXRlLmlzQ2xvc2luZ107XG5cbiAgICBpZiAoZXhwYW5kZWQpIHtcbiAgICAgIGlmIChvbmx5T25lRXhwYW5kaW5nKSB7XG4gICAgICAgIGlzQ2xvc2luZyA9IGlzQ2xvc2luZy5jb25jYXQoY3VyckV4cGFuZGVkKTtcbiAgICAgICAgY3VyckV4cGFuZGVkID0gW3Jvd0tleV07XG4gICAgICB9IGVsc2UgY3VyckV4cGFuZGVkLnB1c2gocm93S2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXNDbG9zaW5nLnB1c2gocm93S2V5KTtcbiAgICAgIGN1cnJFeHBhbmRlZCA9IGN1cnJFeHBhbmRlZC5maWx0ZXIodmFsdWUgPT4gdmFsdWUgIT09IHJvd0tleSk7XG4gICAgfVxuXG4gICAgaWYgKG9uRXhwYW5kKSB7XG4gICAgICBjb25zdCByb3cgPSBkYXRhT3BlcmF0b3IuZ2V0Um93QnlSb3dJZChkYXRhLCBrZXlGaWVsZCwgcm93S2V5KTtcbiAgICAgIG9uRXhwYW5kKHJvdywgZXhwYW5kZWQsIHJvd0luZGV4LCBlKTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoeyBleHBhbmRlZDogY3VyckV4cGFuZGVkLCBpc0Nsb3NpbmcgfSkpO1xuICB9O1xuXG4gIGhhbmRsZUFsbFJvd0V4cGFuZCA9IChlLCBleHBhbmRBbGwpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBkYXRhLFxuICAgICAga2V5RmllbGQsXG4gICAgICBleHBhbmRSb3c6IHtcbiAgICAgICAgb25FeHBhbmRBbGwsXG4gICAgICAgIG5vbkV4cGFuZGFibGVcbiAgICAgIH1cbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGV4cGFuZGVkIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgbGV0IGN1cnJFeHBhbmRlZDtcblxuICAgIGlmIChleHBhbmRBbGwpIHtcbiAgICAgIGN1cnJFeHBhbmRlZCA9IGV4cGFuZGVkLmNvbmNhdChkYXRhT3BlcmF0b3IuZXhwYW5kYWJsZUtleXMoZGF0YSwga2V5RmllbGQsIG5vbkV4cGFuZGFibGUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VyckV4cGFuZGVkID0gZXhwYW5kZWQuZmlsdGVyKHMgPT4gdHlwZW9mIGRhdGEuZmluZChkID0+IF8uZ2V0KGQsIGtleUZpZWxkKSA9PT0gcykgPT09ICd1bmRlZmluZWQnKTtcbiAgICB9XG5cbiAgICBpZiAob25FeHBhbmRBbGwpIHtcbiAgICAgIG9uRXhwYW5kQWxsKGV4cGFuZEFsbCwgZGF0YU9wZXJhdG9yLmdldEV4cGFuZGVkUm93cyhkYXRhLCBrZXlGaWVsZCwgY3VyckV4cGFuZGVkKSwgZSk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoeyBleHBhbmRlZDogY3VyckV4cGFuZGVkIH0pKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkYXRhLCBrZXlGaWVsZCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFJvd0V4cGFuZENvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgdmFsdWU9eyB7XG4gICAgICAgICAgLi4udGhpcy5wcm9wcy5leHBhbmRSb3csXG4gICAgICAgICAgbm9uRXhwYW5kYWJsZTogdGhpcy5wcm9wcy5leHBhbmRSb3cubm9uRXhwYW5kYWJsZSxcbiAgICAgICAgICBleHBhbmRlZDogdGhpcy5zdGF0ZS5leHBhbmRlZCxcbiAgICAgICAgICBpc0Nsb3Npbmc6IHRoaXMuc3RhdGUuaXNDbG9zaW5nLFxuICAgICAgICAgIG9uQ2xvc2VkOiB0aGlzLm9uQ2xvc2VkLFxuICAgICAgICAgIGlzQW55RXhwYW5kczogZGF0YU9wZXJhdG9yLmlzQW55RXhwYW5kcyhkYXRhLCBrZXlGaWVsZCwgdGhpcy5zdGF0ZS5leHBhbmRlZCksXG4gICAgICAgICAgb25Sb3dFeHBhbmQ6IHRoaXMuaGFuZGxlUm93RXhwYW5kLFxuICAgICAgICAgIG9uQWxsUm93RXhwYW5kOiB0aGlzLmhhbmRsZUFsbFJvd0V4cGFuZFxuICAgICAgICB9IH1cbiAgICAgID5cbiAgICAgICAgeyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cbiAgICAgIDwvUm93RXhwYW5kQ29udGV4dC5Qcm92aWRlcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgUHJvdmlkZXI6IFJvd0V4cGFuZFByb3ZpZGVyLFxuICBDb25zdW1lcjogUm93RXhwYW5kQ29udGV4dC5Db25zdW1lclxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NvbnRleHRzL3Jvdy1leHBhbmQtY29udGV4dC5qcyIsImltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyB0aW1lb3V0c1NoYXBlIH0gZnJvbSAnLi91dGlscy9Qcm9wVHlwZXMnO1xuaW1wb3J0IFRyYW5zaXRpb25Hcm91cENvbnRleHQgZnJvbSAnLi9UcmFuc2l0aW9uR3JvdXBDb250ZXh0JztcbmV4cG9ydCB2YXIgVU5NT1VOVEVEID0gJ3VubW91bnRlZCc7XG5leHBvcnQgdmFyIEVYSVRFRCA9ICdleGl0ZWQnO1xuZXhwb3J0IHZhciBFTlRFUklORyA9ICdlbnRlcmluZyc7XG5leHBvcnQgdmFyIEVOVEVSRUQgPSAnZW50ZXJlZCc7XG5leHBvcnQgdmFyIEVYSVRJTkcgPSAnZXhpdGluZyc7XG4vKipcbiAqIFRoZSBUcmFuc2l0aW9uIGNvbXBvbmVudCBsZXRzIHlvdSBkZXNjcmliZSBhIHRyYW5zaXRpb24gZnJvbSBvbmUgY29tcG9uZW50XG4gKiBzdGF0ZSB0byBhbm90aGVyIF9vdmVyIHRpbWVfIHdpdGggYSBzaW1wbGUgZGVjbGFyYXRpdmUgQVBJLiBNb3N0IGNvbW1vbmx5XG4gKiBpdCdzIHVzZWQgdG8gYW5pbWF0ZSB0aGUgbW91bnRpbmcgYW5kIHVubW91bnRpbmcgb2YgYSBjb21wb25lbnQsIGJ1dCBjYW4gYWxzb1xuICogYmUgdXNlZCB0byBkZXNjcmliZSBpbi1wbGFjZSB0cmFuc2l0aW9uIHN0YXRlcyBhcyB3ZWxsLlxuICpcbiAqIC0tLVxuICpcbiAqICoqTm90ZSoqOiBgVHJhbnNpdGlvbmAgaXMgYSBwbGF0Zm9ybS1hZ25vc3RpYyBiYXNlIGNvbXBvbmVudC4gSWYgeW91J3JlIHVzaW5nXG4gKiB0cmFuc2l0aW9ucyBpbiBDU1MsIHlvdSdsbCBwcm9iYWJseSB3YW50IHRvIHVzZVxuICogW2BDU1NUcmFuc2l0aW9uYF0oaHR0cHM6Ly9yZWFjdGNvbW11bml0eS5vcmcvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9jc3MtdHJhbnNpdGlvbilcbiAqIGluc3RlYWQuIEl0IGluaGVyaXRzIGFsbCB0aGUgZmVhdHVyZXMgb2YgYFRyYW5zaXRpb25gLCBidXQgY29udGFpbnNcbiAqIGFkZGl0aW9uYWwgZmVhdHVyZXMgbmVjZXNzYXJ5IHRvIHBsYXkgbmljZSB3aXRoIENTUyB0cmFuc2l0aW9ucyAoaGVuY2UgdGhlXG4gKiBuYW1lIG9mIHRoZSBjb21wb25lbnQpLlxuICpcbiAqIC0tLVxuICpcbiAqIEJ5IGRlZmF1bHQgdGhlIGBUcmFuc2l0aW9uYCBjb21wb25lbnQgZG9lcyBub3QgYWx0ZXIgdGhlIGJlaGF2aW9yIG9mIHRoZVxuICogY29tcG9uZW50IGl0IHJlbmRlcnMsIGl0IG9ubHkgdHJhY2tzIFwiZW50ZXJcIiBhbmQgXCJleGl0XCIgc3RhdGVzIGZvciB0aGVcbiAqIGNvbXBvbmVudHMuIEl0J3MgdXAgdG8geW91IHRvIGdpdmUgbWVhbmluZyBhbmQgZWZmZWN0IHRvIHRob3NlIHN0YXRlcy4gRm9yXG4gKiBleGFtcGxlIHdlIGNhbiBhZGQgc3R5bGVzIHRvIGEgY29tcG9uZW50IHdoZW4gaXQgZW50ZXJzIG9yIGV4aXRzOlxuICpcbiAqIGBgYGpzeFxuICogaW1wb3J0IHsgVHJhbnNpdGlvbiB9IGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnO1xuICpcbiAqIGNvbnN0IGR1cmF0aW9uID0gMzAwO1xuICpcbiAqIGNvbnN0IGRlZmF1bHRTdHlsZSA9IHtcbiAqICAgdHJhbnNpdGlvbjogYG9wYWNpdHkgJHtkdXJhdGlvbn1tcyBlYXNlLWluLW91dGAsXG4gKiAgIG9wYWNpdHk6IDAsXG4gKiB9XG4gKlxuICogY29uc3QgdHJhbnNpdGlvblN0eWxlcyA9IHtcbiAqICAgZW50ZXJpbmc6IHsgb3BhY2l0eTogMSB9LFxuICogICBlbnRlcmVkOiAgeyBvcGFjaXR5OiAxIH0sXG4gKiAgIGV4aXRpbmc6ICB7IG9wYWNpdHk6IDAgfSxcbiAqICAgZXhpdGVkOiAgeyBvcGFjaXR5OiAwIH0sXG4gKiB9O1xuICpcbiAqIGNvbnN0IEZhZGUgPSAoeyBpbjogaW5Qcm9wIH0pID0+IChcbiAqICAgPFRyYW5zaXRpb24gaW49e2luUHJvcH0gdGltZW91dD17ZHVyYXRpb259PlxuICogICAgIHtzdGF0ZSA9PiAoXG4gKiAgICAgICA8ZGl2IHN0eWxlPXt7XG4gKiAgICAgICAgIC4uLmRlZmF1bHRTdHlsZSxcbiAqICAgICAgICAgLi4udHJhbnNpdGlvblN0eWxlc1tzdGF0ZV1cbiAqICAgICAgIH19PlxuICogICAgICAgICBJJ20gYSBmYWRlIFRyYW5zaXRpb24hXG4gKiAgICAgICA8L2Rpdj5cbiAqICAgICApfVxuICogICA8L1RyYW5zaXRpb24+XG4gKiApO1xuICogYGBgXG4gKlxuICogVGhlcmUgYXJlIDQgbWFpbiBzdGF0ZXMgYSBUcmFuc2l0aW9uIGNhbiBiZSBpbjpcbiAqICAtIGAnZW50ZXJpbmcnYFxuICogIC0gYCdlbnRlcmVkJ2BcbiAqICAtIGAnZXhpdGluZydgXG4gKiAgLSBgJ2V4aXRlZCdgXG4gKlxuICogVHJhbnNpdGlvbiBzdGF0ZSBpcyB0b2dnbGVkIHZpYSB0aGUgYGluYCBwcm9wLiBXaGVuIGB0cnVlYCB0aGUgY29tcG9uZW50XG4gKiBiZWdpbnMgdGhlIFwiRW50ZXJcIiBzdGFnZS4gRHVyaW5nIHRoaXMgc3RhZ2UsIHRoZSBjb21wb25lbnQgd2lsbCBzaGlmdCBmcm9tXG4gKiBpdHMgY3VycmVudCB0cmFuc2l0aW9uIHN0YXRlLCB0byBgJ2VudGVyaW5nJ2AgZm9yIHRoZSBkdXJhdGlvbiBvZiB0aGVcbiAqIHRyYW5zaXRpb24gYW5kIHRoZW4gdG8gdGhlIGAnZW50ZXJlZCdgIHN0YWdlIG9uY2UgaXQncyBjb21wbGV0ZS4gTGV0J3MgdGFrZVxuICogdGhlIGZvbGxvd2luZyBleGFtcGxlICh3ZSdsbCB1c2UgdGhlXG4gKiBbdXNlU3RhdGVdKGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9ob29rcy1yZWZlcmVuY2UuaHRtbCN1c2VzdGF0ZSkgaG9vayk6XG4gKlxuICogYGBganN4XG4gKiBmdW5jdGlvbiBBcHAoKSB7XG4gKiAgIGNvbnN0IFtpblByb3AsIHNldEluUHJvcF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gKiAgIHJldHVybiAoXG4gKiAgICAgPGRpdj5cbiAqICAgICAgIDxUcmFuc2l0aW9uIGluPXtpblByb3B9IHRpbWVvdXQ9ezUwMH0+XG4gKiAgICAgICAgIHtzdGF0ZSA9PiAoXG4gKiAgICAgICAgICAgLy8gLi4uXG4gKiAgICAgICAgICl9XG4gKiAgICAgICA8L1RyYW5zaXRpb24+XG4gKiAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEluUHJvcCh0cnVlKX0+XG4gKiAgICAgICAgIENsaWNrIHRvIEVudGVyXG4gKiAgICAgICA8L2J1dHRvbj5cbiAqICAgICA8L2Rpdj5cbiAqICAgKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIFdoZW4gdGhlIGJ1dHRvbiBpcyBjbGlja2VkIHRoZSBjb21wb25lbnQgd2lsbCBzaGlmdCB0byB0aGUgYCdlbnRlcmluZydgIHN0YXRlXG4gKiBhbmQgc3RheSB0aGVyZSBmb3IgNTAwbXMgKHRoZSB2YWx1ZSBvZiBgdGltZW91dGApIGJlZm9yZSBpdCBmaW5hbGx5IHN3aXRjaGVzXG4gKiB0byBgJ2VudGVyZWQnYC5cbiAqXG4gKiBXaGVuIGBpbmAgaXMgYGZhbHNlYCB0aGUgc2FtZSB0aGluZyBoYXBwZW5zIGV4Y2VwdCB0aGUgc3RhdGUgbW92ZXMgZnJvbVxuICogYCdleGl0aW5nJ2AgdG8gYCdleGl0ZWQnYC5cbiAqL1xuXG52YXIgVHJhbnNpdGlvbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShUcmFuc2l0aW9uLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUcmFuc2l0aW9uKHByb3BzLCBjb250ZXh0KSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpIHx8IHRoaXM7XG4gICAgdmFyIHBhcmVudEdyb3VwID0gY29udGV4dDsgLy8gSW4gdGhlIGNvbnRleHQgb2YgYSBUcmFuc2l0aW9uR3JvdXAgYWxsIGVudGVycyBhcmUgcmVhbGx5IGFwcGVhcnNcblxuICAgIHZhciBhcHBlYXIgPSBwYXJlbnRHcm91cCAmJiAhcGFyZW50R3JvdXAuaXNNb3VudGluZyA/IHByb3BzLmVudGVyIDogcHJvcHMuYXBwZWFyO1xuICAgIHZhciBpbml0aWFsU3RhdHVzO1xuICAgIF90aGlzLmFwcGVhclN0YXR1cyA9IG51bGw7XG5cbiAgICBpZiAocHJvcHMuaW4pIHtcbiAgICAgIGlmIChhcHBlYXIpIHtcbiAgICAgICAgaW5pdGlhbFN0YXR1cyA9IEVYSVRFRDtcbiAgICAgICAgX3RoaXMuYXBwZWFyU3RhdHVzID0gRU5URVJJTkc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbml0aWFsU3RhdHVzID0gRU5URVJFRDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHByb3BzLnVubW91bnRPbkV4aXQgfHwgcHJvcHMubW91bnRPbkVudGVyKSB7XG4gICAgICAgIGluaXRpYWxTdGF0dXMgPSBVTk1PVU5URUQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbml0aWFsU3RhdHVzID0gRVhJVEVEO1xuICAgICAgfVxuICAgIH1cblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgc3RhdHVzOiBpbml0aWFsU3RhdHVzXG4gICAgfTtcbiAgICBfdGhpcy5uZXh0Q2FsbGJhY2sgPSBudWxsO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIFRyYW5zaXRpb24uZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKF9yZWYsIHByZXZTdGF0ZSkge1xuICAgIHZhciBuZXh0SW4gPSBfcmVmLmluO1xuXG4gICAgaWYgKG5leHRJbiAmJiBwcmV2U3RhdGUuc3RhdHVzID09PSBVTk1PVU5URUQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXR1czogRVhJVEVEXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9IC8vIGdldFNuYXBzaG90QmVmb3JlVXBkYXRlKHByZXZQcm9wcykge1xuICAvLyAgIGxldCBuZXh0U3RhdHVzID0gbnVsbFxuICAvLyAgIGlmIChwcmV2UHJvcHMgIT09IHRoaXMucHJvcHMpIHtcbiAgLy8gICAgIGNvbnN0IHsgc3RhdHVzIH0gPSB0aGlzLnN0YXRlXG4gIC8vICAgICBpZiAodGhpcy5wcm9wcy5pbikge1xuICAvLyAgICAgICBpZiAoc3RhdHVzICE9PSBFTlRFUklORyAmJiBzdGF0dXMgIT09IEVOVEVSRUQpIHtcbiAgLy8gICAgICAgICBuZXh0U3RhdHVzID0gRU5URVJJTkdcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgaWYgKHN0YXR1cyA9PT0gRU5URVJJTkcgfHwgc3RhdHVzID09PSBFTlRFUkVEKSB7XG4gIC8vICAgICAgICAgbmV4dFN0YXR1cyA9IEVYSVRJTkdcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gICByZXR1cm4geyBuZXh0U3RhdHVzIH1cbiAgLy8gfVxuICA7XG5cbiAgdmFyIF9wcm90byA9IFRyYW5zaXRpb24ucHJvdG90eXBlO1xuXG4gIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudXBkYXRlU3RhdHVzKHRydWUsIHRoaXMuYXBwZWFyU3RhdHVzKTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIHZhciBuZXh0U3RhdHVzID0gbnVsbDtcblxuICAgIGlmIChwcmV2UHJvcHMgIT09IHRoaXMucHJvcHMpIHtcbiAgICAgIHZhciBzdGF0dXMgPSB0aGlzLnN0YXRlLnN0YXR1cztcblxuICAgICAgaWYgKHRoaXMucHJvcHMuaW4pIHtcbiAgICAgICAgaWYgKHN0YXR1cyAhPT0gRU5URVJJTkcgJiYgc3RhdHVzICE9PSBFTlRFUkVEKSB7XG4gICAgICAgICAgbmV4dFN0YXR1cyA9IEVOVEVSSU5HO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc3RhdHVzID09PSBFTlRFUklORyB8fCBzdGF0dXMgPT09IEVOVEVSRUQpIHtcbiAgICAgICAgICBuZXh0U3RhdHVzID0gRVhJVElORztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMudXBkYXRlU3RhdHVzKGZhbHNlLCBuZXh0U3RhdHVzKTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmNhbmNlbE5leHRDYWxsYmFjaygpO1xuICB9O1xuXG4gIF9wcm90by5nZXRUaW1lb3V0cyA9IGZ1bmN0aW9uIGdldFRpbWVvdXRzKCkge1xuICAgIHZhciB0aW1lb3V0ID0gdGhpcy5wcm9wcy50aW1lb3V0O1xuICAgIHZhciBleGl0LCBlbnRlciwgYXBwZWFyO1xuICAgIGV4aXQgPSBlbnRlciA9IGFwcGVhciA9IHRpbWVvdXQ7XG5cbiAgICBpZiAodGltZW91dCAhPSBudWxsICYmIHR5cGVvZiB0aW1lb3V0ICE9PSAnbnVtYmVyJykge1xuICAgICAgZXhpdCA9IHRpbWVvdXQuZXhpdDtcbiAgICAgIGVudGVyID0gdGltZW91dC5lbnRlcjsgLy8gVE9ETzogcmVtb3ZlIGZhbGxiYWNrIGZvciBuZXh0IG1ham9yXG5cbiAgICAgIGFwcGVhciA9IHRpbWVvdXQuYXBwZWFyICE9PSB1bmRlZmluZWQgPyB0aW1lb3V0LmFwcGVhciA6IGVudGVyO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBleGl0OiBleGl0LFxuICAgICAgZW50ZXI6IGVudGVyLFxuICAgICAgYXBwZWFyOiBhcHBlYXJcbiAgICB9O1xuICB9O1xuXG4gIF9wcm90by51cGRhdGVTdGF0dXMgPSBmdW5jdGlvbiB1cGRhdGVTdGF0dXMobW91bnRpbmcsIG5leHRTdGF0dXMpIHtcbiAgICBpZiAobW91bnRpbmcgPT09IHZvaWQgMCkge1xuICAgICAgbW91bnRpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAobmV4dFN0YXR1cyAhPT0gbnVsbCkge1xuICAgICAgLy8gbmV4dFN0YXR1cyB3aWxsIGFsd2F5cyBiZSBFTlRFUklORyBvciBFWElUSU5HLlxuICAgICAgdGhpcy5jYW5jZWxOZXh0Q2FsbGJhY2soKTtcblxuICAgICAgaWYgKG5leHRTdGF0dXMgPT09IEVOVEVSSU5HKSB7XG4gICAgICAgIHRoaXMucGVyZm9ybUVudGVyKG1vdW50aW5nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGVyZm9ybUV4aXQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMudW5tb3VudE9uRXhpdCAmJiB0aGlzLnN0YXRlLnN0YXR1cyA9PT0gRVhJVEVEKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc3RhdHVzOiBVTk1PVU5URURcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucGVyZm9ybUVudGVyID0gZnVuY3Rpb24gcGVyZm9ybUVudGVyKG1vdW50aW5nKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgZW50ZXIgPSB0aGlzLnByb3BzLmVudGVyO1xuICAgIHZhciBhcHBlYXJpbmcgPSB0aGlzLmNvbnRleHQgPyB0aGlzLmNvbnRleHQuaXNNb3VudGluZyA6IG1vdW50aW5nO1xuXG4gICAgdmFyIF9yZWYyID0gdGhpcy5wcm9wcy5ub2RlUmVmID8gW2FwcGVhcmluZ10gOiBbUmVhY3RET00uZmluZERPTU5vZGUodGhpcyksIGFwcGVhcmluZ10sXG4gICAgICAgIG1heWJlTm9kZSA9IF9yZWYyWzBdLFxuICAgICAgICBtYXliZUFwcGVhcmluZyA9IF9yZWYyWzFdO1xuXG4gICAgdmFyIHRpbWVvdXRzID0gdGhpcy5nZXRUaW1lb3V0cygpO1xuICAgIHZhciBlbnRlclRpbWVvdXQgPSBhcHBlYXJpbmcgPyB0aW1lb3V0cy5hcHBlYXIgOiB0aW1lb3V0cy5lbnRlcjsgLy8gbm8gZW50ZXIgYW5pbWF0aW9uIHNraXAgcmlnaHQgdG8gRU5URVJFRFxuICAgIC8vIGlmIHdlIGFyZSBtb3VudGluZyBhbmQgcnVubmluZyB0aGlzIGl0IG1lYW5zIGFwcGVhciBfbXVzdF8gYmUgc2V0XG5cbiAgICBpZiAoIW1vdW50aW5nICYmICFlbnRlciB8fCBjb25maWcuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuc2FmZVNldFN0YXRlKHtcbiAgICAgICAgc3RhdHVzOiBFTlRFUkVEXG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMi5wcm9wcy5vbkVudGVyZWQobWF5YmVOb2RlKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25FbnRlcihtYXliZU5vZGUsIG1heWJlQXBwZWFyaW5nKTtcbiAgICB0aGlzLnNhZmVTZXRTdGF0ZSh7XG4gICAgICBzdGF0dXM6IEVOVEVSSU5HXG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMyLnByb3BzLm9uRW50ZXJpbmcobWF5YmVOb2RlLCBtYXliZUFwcGVhcmluZyk7XG5cbiAgICAgIF90aGlzMi5vblRyYW5zaXRpb25FbmQoZW50ZXJUaW1lb3V0LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMi5zYWZlU2V0U3RhdGUoe1xuICAgICAgICAgIHN0YXR1czogRU5URVJFRFxuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMyLnByb3BzLm9uRW50ZXJlZChtYXliZU5vZGUsIG1heWJlQXBwZWFyaW5nKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ucGVyZm9ybUV4aXQgPSBmdW5jdGlvbiBwZXJmb3JtRXhpdCgpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHZhciBleGl0ID0gdGhpcy5wcm9wcy5leGl0O1xuICAgIHZhciB0aW1lb3V0cyA9IHRoaXMuZ2V0VGltZW91dHMoKTtcbiAgICB2YXIgbWF5YmVOb2RlID0gdGhpcy5wcm9wcy5ub2RlUmVmID8gdW5kZWZpbmVkIDogUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7IC8vIG5vIGV4aXQgYW5pbWF0aW9uIHNraXAgcmlnaHQgdG8gRVhJVEVEXG5cbiAgICBpZiAoIWV4aXQgfHwgY29uZmlnLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnNhZmVTZXRTdGF0ZSh7XG4gICAgICAgIHN0YXR1czogRVhJVEVEXG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMy5wcm9wcy5vbkV4aXRlZChtYXliZU5vZGUpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5vbkV4aXQobWF5YmVOb2RlKTtcbiAgICB0aGlzLnNhZmVTZXRTdGF0ZSh7XG4gICAgICBzdGF0dXM6IEVYSVRJTkdcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczMucHJvcHMub25FeGl0aW5nKG1heWJlTm9kZSk7XG5cbiAgICAgIF90aGlzMy5vblRyYW5zaXRpb25FbmQodGltZW91dHMuZXhpdCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczMuc2FmZVNldFN0YXRlKHtcbiAgICAgICAgICBzdGF0dXM6IEVYSVRFRFxuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMzLnByb3BzLm9uRXhpdGVkKG1heWJlTm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmNhbmNlbE5leHRDYWxsYmFjayA9IGZ1bmN0aW9uIGNhbmNlbE5leHRDYWxsYmFjaygpIHtcbiAgICBpZiAodGhpcy5uZXh0Q2FsbGJhY2sgIT09IG51bGwpIHtcbiAgICAgIHRoaXMubmV4dENhbGxiYWNrLmNhbmNlbCgpO1xuICAgICAgdGhpcy5uZXh0Q2FsbGJhY2sgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uc2FmZVNldFN0YXRlID0gZnVuY3Rpb24gc2FmZVNldFN0YXRlKG5leHRTdGF0ZSwgY2FsbGJhY2spIHtcbiAgICAvLyBUaGlzIHNob3VsZG4ndCBiZSBuZWNlc3NhcnksIGJ1dCB0aGVyZSBhcmUgd2VpcmQgcmFjZSBjb25kaXRpb25zIHdpdGhcbiAgICAvLyBzZXRTdGF0ZSBjYWxsYmFja3MgYW5kIHVubW91bnRpbmcgaW4gdGVzdGluZywgc28gYWx3YXlzIG1ha2Ugc3VyZSB0aGF0XG4gICAgLy8gd2UgY2FuIGNhbmNlbCBhbnkgcGVuZGluZyBzZXRTdGF0ZSBjYWxsYmFja3MgYWZ0ZXIgd2UgdW5tb3VudC5cbiAgICBjYWxsYmFjayA9IHRoaXMuc2V0TmV4dENhbGxiYWNrKGNhbGxiYWNrKTtcbiAgICB0aGlzLnNldFN0YXRlKG5leHRTdGF0ZSwgY2FsbGJhY2spO1xuICB9O1xuXG4gIF9wcm90by5zZXROZXh0Q2FsbGJhY2sgPSBmdW5jdGlvbiBzZXROZXh0Q2FsbGJhY2soY2FsbGJhY2spIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgIHZhciBhY3RpdmUgPSB0cnVlO1xuXG4gICAgdGhpcy5uZXh0Q2FsbGJhY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIF90aGlzNC5uZXh0Q2FsbGJhY2sgPSBudWxsO1xuICAgICAgICBjYWxsYmFjayhldmVudCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMubmV4dENhbGxiYWNrLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGFjdGl2ZSA9IGZhbHNlO1xuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5uZXh0Q2FsbGJhY2s7XG4gIH07XG5cbiAgX3Byb3RvLm9uVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uIG9uVHJhbnNpdGlvbkVuZCh0aW1lb3V0LCBoYW5kbGVyKSB7XG4gICAgdGhpcy5zZXROZXh0Q2FsbGJhY2soaGFuZGxlcik7XG4gICAgdmFyIG5vZGUgPSB0aGlzLnByb3BzLm5vZGVSZWYgPyB0aGlzLnByb3BzLm5vZGVSZWYuY3VycmVudCA6IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuICAgIHZhciBkb2VzTm90SGF2ZVRpbWVvdXRPckxpc3RlbmVyID0gdGltZW91dCA9PSBudWxsICYmICF0aGlzLnByb3BzLmFkZEVuZExpc3RlbmVyO1xuXG4gICAgaWYgKCFub2RlIHx8IGRvZXNOb3RIYXZlVGltZW91dE9yTGlzdGVuZXIpIHtcbiAgICAgIHNldFRpbWVvdXQodGhpcy5uZXh0Q2FsbGJhY2ssIDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmFkZEVuZExpc3RlbmVyKSB7XG4gICAgICB2YXIgX3JlZjMgPSB0aGlzLnByb3BzLm5vZGVSZWYgPyBbdGhpcy5uZXh0Q2FsbGJhY2tdIDogW25vZGUsIHRoaXMubmV4dENhbGxiYWNrXSxcbiAgICAgICAgICBtYXliZU5vZGUgPSBfcmVmM1swXSxcbiAgICAgICAgICBtYXliZU5leHRDYWxsYmFjayA9IF9yZWYzWzFdO1xuXG4gICAgICB0aGlzLnByb3BzLmFkZEVuZExpc3RlbmVyKG1heWJlTm9kZSwgbWF5YmVOZXh0Q2FsbGJhY2spO1xuICAgIH1cblxuICAgIGlmICh0aW1lb3V0ICE9IG51bGwpIHtcbiAgICAgIHNldFRpbWVvdXQodGhpcy5uZXh0Q2FsbGJhY2ssIHRpbWVvdXQpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBzdGF0dXMgPSB0aGlzLnN0YXRlLnN0YXR1cztcblxuICAgIGlmIChzdGF0dXMgPT09IFVOTU9VTlRFRCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgX2luID0gX3RoaXMkcHJvcHMuaW4sXG4gICAgICAgIF9tb3VudE9uRW50ZXIgPSBfdGhpcyRwcm9wcy5tb3VudE9uRW50ZXIsXG4gICAgICAgIF91bm1vdW50T25FeGl0ID0gX3RoaXMkcHJvcHMudW5tb3VudE9uRXhpdCxcbiAgICAgICAgX2FwcGVhciA9IF90aGlzJHByb3BzLmFwcGVhcixcbiAgICAgICAgX2VudGVyID0gX3RoaXMkcHJvcHMuZW50ZXIsXG4gICAgICAgIF9leGl0ID0gX3RoaXMkcHJvcHMuZXhpdCxcbiAgICAgICAgX3RpbWVvdXQgPSBfdGhpcyRwcm9wcy50aW1lb3V0LFxuICAgICAgICBfYWRkRW5kTGlzdGVuZXIgPSBfdGhpcyRwcm9wcy5hZGRFbmRMaXN0ZW5lcixcbiAgICAgICAgX29uRW50ZXIgPSBfdGhpcyRwcm9wcy5vbkVudGVyLFxuICAgICAgICBfb25FbnRlcmluZyA9IF90aGlzJHByb3BzLm9uRW50ZXJpbmcsXG4gICAgICAgIF9vbkVudGVyZWQgPSBfdGhpcyRwcm9wcy5vbkVudGVyZWQsXG4gICAgICAgIF9vbkV4aXQgPSBfdGhpcyRwcm9wcy5vbkV4aXQsXG4gICAgICAgIF9vbkV4aXRpbmcgPSBfdGhpcyRwcm9wcy5vbkV4aXRpbmcsXG4gICAgICAgIF9vbkV4aXRlZCA9IF90aGlzJHByb3BzLm9uRXhpdGVkLFxuICAgICAgICBfbm9kZVJlZiA9IF90aGlzJHByb3BzLm5vZGVSZWYsXG4gICAgICAgIGNoaWxkUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgW1wiY2hpbGRyZW5cIiwgXCJpblwiLCBcIm1vdW50T25FbnRlclwiLCBcInVubW91bnRPbkV4aXRcIiwgXCJhcHBlYXJcIiwgXCJlbnRlclwiLCBcImV4aXRcIiwgXCJ0aW1lb3V0XCIsIFwiYWRkRW5kTGlzdGVuZXJcIiwgXCJvbkVudGVyXCIsIFwib25FbnRlcmluZ1wiLCBcIm9uRW50ZXJlZFwiLCBcIm9uRXhpdFwiLCBcIm9uRXhpdGluZ1wiLCBcIm9uRXhpdGVkXCIsIFwibm9kZVJlZlwiXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgLyojX19QVVJFX18qL1xuICAgICAgLy8gYWxsb3dzIGZvciBuZXN0ZWQgVHJhbnNpdGlvbnNcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVHJhbnNpdGlvbkdyb3VwQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgICB2YWx1ZTogbnVsbFxuICAgICAgfSwgdHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nID8gY2hpbGRyZW4oc3RhdHVzLCBjaGlsZFByb3BzKSA6IFJlYWN0LmNsb25lRWxlbWVudChSZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKSwgY2hpbGRQcm9wcykpXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gVHJhbnNpdGlvbjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuVHJhbnNpdGlvbi5jb250ZXh0VHlwZSA9IFRyYW5zaXRpb25Hcm91cENvbnRleHQ7XG5UcmFuc2l0aW9uLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqXG4gICAqIEEgUmVhY3QgcmVmZXJlbmNlIHRvIERPTSBlbGVtZW50IHRoYXQgbmVlZCB0byB0cmFuc2l0aW9uOlxuICAgKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNTExMjcxMzAvNDY3MTkzMlxuICAgKlxuICAgKiAgIC0gV2hlbiBgbm9kZVJlZmAgcHJvcCBpcyB1c2VkLCBgbm9kZWAgaXMgbm90IHBhc3NlZCB0byBjYWxsYmFjayBmdW5jdGlvbnNcbiAgICogICAgICAoZS5nLiBgb25FbnRlcmApIGJlY2F1c2UgdXNlciBhbHJlYWR5IGhhcyBkaXJlY3QgYWNjZXNzIHRvIHRoZSBub2RlLlxuICAgKiAgIC0gV2hlbiBjaGFuZ2luZyBga2V5YCBwcm9wIG9mIGBUcmFuc2l0aW9uYCBpbiBhIGBUcmFuc2l0aW9uR3JvdXBgIGEgbmV3XG4gICAqICAgICBgbm9kZVJlZmAgbmVlZCB0byBiZSBwcm92aWRlZCB0byBgVHJhbnNpdGlvbmAgd2l0aCBjaGFuZ2VkIGBrZXlgIHByb3BcbiAgICogICAgIChzZWVcbiAgICogICAgIFt0ZXN0L0NTU1RyYW5zaXRpb24tdGVzdC5qc10oaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9ibG9iLzEzNDM1Zjg5N2IzYWI3MWY2ZTE5ZDcyNGYxNDU1OTZmNTkxMDU4MWMvdGVzdC9DU1NUcmFuc2l0aW9uLXRlc3QuanMjTDM2Mi1MNDM3KSkuXG4gICAqL1xuICBub2RlUmVmOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGN1cnJlbnQ6IHR5cGVvZiBFbGVtZW50ID09PSAndW5kZWZpbmVkJyA/IFByb3BUeXBlcy5hbnkgOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihFbGVtZW50KVxuICB9KSxcblxuICAvKipcbiAgICogQSBgZnVuY3Rpb25gIGNoaWxkIGNhbiBiZSB1c2VkIGluc3RlYWQgb2YgYSBSZWFjdCBlbGVtZW50LiBUaGlzIGZ1bmN0aW9uIGlzXG4gICAqIGNhbGxlZCB3aXRoIHRoZSBjdXJyZW50IHRyYW5zaXRpb24gc3RhdHVzIChgJ2VudGVyaW5nJ2AsIGAnZW50ZXJlZCdgLFxuICAgKiBgJ2V4aXRpbmcnYCwgYCdleGl0ZWQnYCksIHdoaWNoIGNhbiBiZSB1c2VkIHRvIGFwcGx5IGNvbnRleHRcbiAgICogc3BlY2lmaWMgcHJvcHMgdG8gYSBjb21wb25lbnQuXG4gICAqXG4gICAqIGBgYGpzeFxuICAgKiA8VHJhbnNpdGlvbiBpbj17dGhpcy5zdGF0ZS5pbn0gdGltZW91dD17MTUwfT5cbiAgICogICB7c3RhdGUgPT4gKFxuICAgKiAgICAgPE15Q29tcG9uZW50IGNsYXNzTmFtZT17YGZhZGUgZmFkZS0ke3N0YXRlfWB9IC8+XG4gICAqICAgKX1cbiAgICogPC9UcmFuc2l0aW9uPlxuICAgKiBgYGBcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLCBQcm9wVHlwZXMuZWxlbWVudC5pc1JlcXVpcmVkXSkuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogU2hvdyB0aGUgY29tcG9uZW50OyB0cmlnZ2VycyB0aGUgZW50ZXIgb3IgZXhpdCBzdGF0ZXNcbiAgICovXG4gIGluOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQnkgZGVmYXVsdCB0aGUgY2hpbGQgY29tcG9uZW50IGlzIG1vdW50ZWQgaW1tZWRpYXRlbHkgYWxvbmcgd2l0aFxuICAgKiB0aGUgcGFyZW50IGBUcmFuc2l0aW9uYCBjb21wb25lbnQuIElmIHlvdSB3YW50IHRvIFwibGF6eSBtb3VudFwiIHRoZSBjb21wb25lbnQgb24gdGhlXG4gICAqIGZpcnN0IGBpbj17dHJ1ZX1gIHlvdSBjYW4gc2V0IGBtb3VudE9uRW50ZXJgLiBBZnRlciB0aGUgZmlyc3QgZW50ZXIgdHJhbnNpdGlvbiB0aGUgY29tcG9uZW50IHdpbGwgc3RheVxuICAgKiBtb3VudGVkLCBldmVuIG9uIFwiZXhpdGVkXCIsIHVubGVzcyB5b3UgYWxzbyBzcGVjaWZ5IGB1bm1vdW50T25FeGl0YC5cbiAgICovXG4gIG1vdW50T25FbnRlcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEJ5IGRlZmF1bHQgdGhlIGNoaWxkIGNvbXBvbmVudCBzdGF5cyBtb3VudGVkIGFmdGVyIGl0IHJlYWNoZXMgdGhlIGAnZXhpdGVkJ2Agc3RhdGUuXG4gICAqIFNldCBgdW5tb3VudE9uRXhpdGAgaWYgeW91J2QgcHJlZmVyIHRvIHVubW91bnQgdGhlIGNvbXBvbmVudCBhZnRlciBpdCBmaW5pc2hlcyBleGl0aW5nLlxuICAgKi9cbiAgdW5tb3VudE9uRXhpdDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEJ5IGRlZmF1bHQgdGhlIGNoaWxkIGNvbXBvbmVudCBkb2VzIG5vdCBwZXJmb3JtIHRoZSBlbnRlciB0cmFuc2l0aW9uIHdoZW5cbiAgICogaXQgZmlyc3QgbW91bnRzLCByZWdhcmRsZXNzIG9mIHRoZSB2YWx1ZSBvZiBgaW5gLiBJZiB5b3Ugd2FudCB0aGlzXG4gICAqIGJlaGF2aW9yLCBzZXQgYm90aCBgYXBwZWFyYCBhbmQgYGluYCB0byBgdHJ1ZWAuXG4gICAqXG4gICAqID4gKipOb3RlKio6IHRoZXJlIGFyZSBubyBzcGVjaWFsIGFwcGVhciBzdGF0ZXMgbGlrZSBgYXBwZWFyaW5nYC9gYXBwZWFyZWRgLCB0aGlzIHByb3BcbiAgICogPiBvbmx5IGFkZHMgYW4gYWRkaXRpb25hbCBlbnRlciB0cmFuc2l0aW9uLiBIb3dldmVyLCBpbiB0aGVcbiAgICogPiBgPENTU1RyYW5zaXRpb24+YCBjb21wb25lbnQgdGhhdCBmaXJzdCBlbnRlciB0cmFuc2l0aW9uIGRvZXMgcmVzdWx0IGluXG4gICAqID4gYWRkaXRpb25hbCBgLmFwcGVhci0qYCBjbGFzc2VzLCB0aGF0IHdheSB5b3UgY2FuIGNob29zZSB0byBzdHlsZSBpdFxuICAgKiA+IGRpZmZlcmVudGx5LlxuICAgKi9cbiAgYXBwZWFyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogRW5hYmxlIG9yIGRpc2FibGUgZW50ZXIgdHJhbnNpdGlvbnMuXG4gICAqL1xuICBlbnRlcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEVuYWJsZSBvciBkaXNhYmxlIGV4aXQgdHJhbnNpdGlvbnMuXG4gICAqL1xuICBleGl0OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIGR1cmF0aW9uIG9mIHRoZSB0cmFuc2l0aW9uLCBpbiBtaWxsaXNlY29uZHMuXG4gICAqIFJlcXVpcmVkIHVubGVzcyBgYWRkRW5kTGlzdGVuZXJgIGlzIHByb3ZpZGVkLlxuICAgKlxuICAgKiBZb3UgbWF5IHNwZWNpZnkgYSBzaW5nbGUgdGltZW91dCBmb3IgYWxsIHRyYW5zaXRpb25zOlxuICAgKlxuICAgKiBgYGBqc3hcbiAgICogdGltZW91dD17NTAwfVxuICAgKiBgYGBcbiAgICpcbiAgICogb3IgaW5kaXZpZHVhbGx5OlxuICAgKlxuICAgKiBgYGBqc3hcbiAgICogdGltZW91dD17e1xuICAgKiAgYXBwZWFyOiA1MDAsXG4gICAqICBlbnRlcjogMzAwLFxuICAgKiAgZXhpdDogNTAwLFxuICAgKiB9fVxuICAgKiBgYGBcbiAgICpcbiAgICogLSBgYXBwZWFyYCBkZWZhdWx0cyB0byB0aGUgdmFsdWUgb2YgYGVudGVyYFxuICAgKiAtIGBlbnRlcmAgZGVmYXVsdHMgdG8gYDBgXG4gICAqIC0gYGV4aXRgIGRlZmF1bHRzIHRvIGAwYFxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyIHwgeyBlbnRlcj86IG51bWJlciwgZXhpdD86IG51bWJlciwgYXBwZWFyPzogbnVtYmVyIH19XG4gICAqL1xuICB0aW1lb3V0OiBmdW5jdGlvbiB0aW1lb3V0KHByb3BzKSB7XG4gICAgdmFyIHB0ID0gdGltZW91dHNTaGFwZTtcbiAgICBpZiAoIXByb3BzLmFkZEVuZExpc3RlbmVyKSBwdCA9IHB0LmlzUmVxdWlyZWQ7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHQuYXBwbHkodm9pZCAwLCBbcHJvcHNdLmNvbmNhdChhcmdzKSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEFkZCBhIGN1c3RvbSB0cmFuc2l0aW9uIGVuZCB0cmlnZ2VyLiBDYWxsZWQgd2l0aCB0aGUgdHJhbnNpdGlvbmluZ1xuICAgKiBET00gbm9kZSBhbmQgYSBgZG9uZWAgY2FsbGJhY2suIEFsbG93cyBmb3IgbW9yZSBmaW5lIGdyYWluZWQgdHJhbnNpdGlvbiBlbmRcbiAgICogbG9naWMuIFRpbWVvdXRzIGFyZSBzdGlsbCB1c2VkIGFzIGEgZmFsbGJhY2sgaWYgcHJvdmlkZWQuXG4gICAqXG4gICAqICoqTm90ZSoqOiB3aGVuIGBub2RlUmVmYCBwcm9wIGlzIHBhc3NlZCwgYG5vZGVgIGlzIG5vdCBwYXNzZWQuXG4gICAqXG4gICAqIGBgYGpzeFxuICAgKiBhZGRFbmRMaXN0ZW5lcj17KG5vZGUsIGRvbmUpID0+IHtcbiAgICogICAvLyB1c2UgdGhlIGNzcyB0cmFuc2l0aW9uZW5kIGV2ZW50IHRvIG1hcmsgdGhlIGZpbmlzaCBvZiBhIHRyYW5zaXRpb25cbiAgICogICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBkb25lLCBmYWxzZSk7XG4gICAqIH19XG4gICAqIGBgYFxuICAgKi9cbiAgYWRkRW5kTGlzdGVuZXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBiZWZvcmUgdGhlIFwiZW50ZXJpbmdcIiBzdGF0dXMgaXMgYXBwbGllZC4gQW4gZXh0cmEgcGFyYW1ldGVyXG4gICAqIGBpc0FwcGVhcmluZ2AgaXMgc3VwcGxpZWQgdG8gaW5kaWNhdGUgaWYgdGhlIGVudGVyIHN0YWdlIGlzIG9jY3VycmluZyBvbiB0aGUgaW5pdGlhbCBtb3VudFxuICAgKlxuICAgKiAqKk5vdGUqKjogd2hlbiBgbm9kZVJlZmAgcHJvcCBpcyBwYXNzZWQsIGBub2RlYCBpcyBub3QgcGFzc2VkLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCwgaXNBcHBlYXJpbmc6IGJvb2wpIC0+IHZvaWRcbiAgICovXG4gIG9uRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgXCJlbnRlcmluZ1wiIHN0YXR1cyBpcyBhcHBsaWVkLiBBbiBleHRyYSBwYXJhbWV0ZXJcbiAgICogYGlzQXBwZWFyaW5nYCBpcyBzdXBwbGllZCB0byBpbmRpY2F0ZSBpZiB0aGUgZW50ZXIgc3RhZ2UgaXMgb2NjdXJyaW5nIG9uIHRoZSBpbml0aWFsIG1vdW50XG4gICAqXG4gICAqICoqTm90ZSoqOiB3aGVuIGBub2RlUmVmYCBwcm9wIGlzIHBhc3NlZCwgYG5vZGVgIGlzIG5vdCBwYXNzZWQuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50LCBpc0FwcGVhcmluZzogYm9vbClcbiAgICovXG4gIG9uRW50ZXJpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgXCJlbnRlcmVkXCIgc3RhdHVzIGlzIGFwcGxpZWQuIEFuIGV4dHJhIHBhcmFtZXRlclxuICAgKiBgaXNBcHBlYXJpbmdgIGlzIHN1cHBsaWVkIHRvIGluZGljYXRlIGlmIHRoZSBlbnRlciBzdGFnZSBpcyBvY2N1cnJpbmcgb24gdGhlIGluaXRpYWwgbW91bnRcbiAgICpcbiAgICogKipOb3RlKio6IHdoZW4gYG5vZGVSZWZgIHByb3AgaXMgcGFzc2VkLCBgbm9kZWAgaXMgbm90IHBhc3NlZC5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQsIGlzQXBwZWFyaW5nOiBib29sKSAtPiB2b2lkXG4gICAqL1xuICBvbkVudGVyZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBiZWZvcmUgdGhlIFwiZXhpdGluZ1wiIHN0YXR1cyBpcyBhcHBsaWVkLlxuICAgKlxuICAgKiAqKk5vdGUqKjogd2hlbiBgbm9kZVJlZmAgcHJvcCBpcyBwYXNzZWQsIGBub2RlYCBpcyBub3QgcGFzc2VkLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCkgLT4gdm9pZFxuICAgKi9cbiAgb25FeGl0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIFwiZXhpdGluZ1wiIHN0YXR1cyBpcyBhcHBsaWVkLlxuICAgKlxuICAgKiAqKk5vdGUqKjogd2hlbiBgbm9kZVJlZmAgcHJvcCBpcyBwYXNzZWQsIGBub2RlYCBpcyBub3QgcGFzc2VkLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCkgLT4gdm9pZFxuICAgKi9cbiAgb25FeGl0aW5nOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIFwiZXhpdGVkXCIgc3RhdHVzIGlzIGFwcGxpZWQuXG4gICAqXG4gICAqICoqTm90ZSoqOiB3aGVuIGBub2RlUmVmYCBwcm9wIGlzIHBhc3NlZCwgYG5vZGVgIGlzIG5vdCBwYXNzZWRcbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQpIC0+IHZvaWRcbiAgICovXG4gIG9uRXhpdGVkOiBQcm9wVHlwZXMuZnVuY1xufSA6IHt9OyAvLyBOYW1lIHRoZSBmdW5jdGlvbiBzbyBpdCBpcyBjbGVhcmVyIGluIHRoZSBkb2N1bWVudGF0aW9uXG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5UcmFuc2l0aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgaW46IGZhbHNlLFxuICBtb3VudE9uRW50ZXI6IGZhbHNlLFxuICB1bm1vdW50T25FeGl0OiBmYWxzZSxcbiAgYXBwZWFyOiBmYWxzZSxcbiAgZW50ZXI6IHRydWUsXG4gIGV4aXQ6IHRydWUsXG4gIG9uRW50ZXI6IG5vb3AsXG4gIG9uRW50ZXJpbmc6IG5vb3AsXG4gIG9uRW50ZXJlZDogbm9vcCxcbiAgb25FeGl0OiBub29wLFxuICBvbkV4aXRpbmc6IG5vb3AsXG4gIG9uRXhpdGVkOiBub29wXG59O1xuVHJhbnNpdGlvbi5VTk1PVU5URUQgPSBVTk1PVU5URUQ7XG5UcmFuc2l0aW9uLkVYSVRFRCA9IEVYSVRFRDtcblRyYW5zaXRpb24uRU5URVJJTkcgPSBFTlRFUklORztcblRyYW5zaXRpb24uRU5URVJFRCA9IEVOVEVSRUQ7XG5UcmFuc2l0aW9uLkVYSVRJTkcgPSBFWElUSU5HO1xuZXhwb3J0IGRlZmF1bHQgVHJhbnNpdGlvbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvZXNtL1RyYW5zaXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2VzbS9UcmFuc2l0aW9uR3JvdXBDb250ZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCBfIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IGdldFJvd0J5Um93SWQgfSBmcm9tICcuL3Jvd3MnO1xuXG5leHBvcnQgY29uc3QgZ2V0U2VsZWN0aW9uU3VtbWFyeSA9IChcbiAgZGF0YSA9IFtdLFxuICBrZXlGaWVsZCxcbiAgc2VsZWN0ZWQgPSBbXVxuKSA9PiB7XG4gIGxldCBhbGxSb3dzU2VsZWN0ZWQgPSBkYXRhLmxlbmd0aCA+IDA7XG4gIGxldCBhbGxSb3dzTm90U2VsZWN0ZWQgPSB0cnVlO1xuXG4gIGNvbnN0IHJvd0tleXMgPSBkYXRhLm1hcChkID0+IF8uZ2V0KGQsIGtleUZpZWxkKSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcm93S2V5cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGN1cnIgPSByb3dLZXlzW2ldO1xuICAgIGlmICh0eXBlb2Ygc2VsZWN0ZWQuZmluZCh4ID0+IHggPT09IGN1cnIpID09PSAndW5kZWZpbmVkJykge1xuICAgICAgYWxsUm93c1NlbGVjdGVkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsbFJvd3NOb3RTZWxlY3RlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIGFsbFJvd3NTZWxlY3RlZCxcbiAgICBhbGxSb3dzTm90U2VsZWN0ZWRcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RhYmxlS2V5cyA9IChkYXRhID0gW10sIGtleUZpZWxkLCBza2lwcyA9IFtdKSA9PiB7XG4gIGlmIChza2lwcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZGF0YS5tYXAocm93ID0+IF8uZ2V0KHJvdywga2V5RmllbGQpKTtcbiAgfVxuICByZXR1cm4gZGF0YVxuICAgIC5maWx0ZXIocm93ID0+ICFfLmNvbnRhaW5zKHNraXBzLCBfLmdldChyb3csIGtleUZpZWxkKSkpXG4gICAgLm1hcChyb3cgPT4gXy5nZXQocm93LCBrZXlGaWVsZCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVuU2VsZWN0YWJsZUtleXMgPSAoc2VsZWN0ZWQsIHNraXBzID0gW10pID0+IHtcbiAgaWYgKHNraXBzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICByZXR1cm4gc2VsZWN0ZWQuZmlsdGVyKHggPT4gXy5jb250YWlucyhza2lwcywgeCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlbGVjdGVkUm93cyA9IChkYXRhID0gW10sIGtleUZpZWxkLCBzZWxlY3RlZCkgPT5cbiAgc2VsZWN0ZWQubWFwKGsgPT4gZ2V0Um93QnlSb3dJZChkYXRhLCBrZXlGaWVsZCwgaykpLmZpbHRlcih4ID0+ICEheCk7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3N0b3JlL3NlbGVjdGlvbi5qcyIsIi8qIGVzbGludCByZWFjdC9yZXF1aXJlLWRlZmF1bHQtcHJvcHM6IDAgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgQ29uc3QgZnJvbSAnLi4vY29uc3QnO1xuXG5jb25zdCBSb3dUZW1wbGF0ZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgcmVuZGVyQ29udGVudCxcbiAgICBzZWxlY3RSb3csXG4gICAgZXhwYW5kUm93LFxuICAgIGNlbGxFbCxcbiAgICAuLi5yZXN0XG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBpc1JlbmRlckZ1bmN0aW9uQ29sdW1uSW5MZWZ0ID0gKFxuICAgIHBvc2l0aW9uID0gQ29uc3QuSU5ESUNBVE9SX1BPU0lUSU9OX0xFRlRcbiAgKSA9PiBwb3NpdGlvbiA9PT0gQ29uc3QuSU5ESUNBVE9SX1BPU0lUSU9OX0xFRlQ7XG5cbiAgY29uc3QgY2hpbGRyZW5zID0gcmVuZGVyQ29udGVudCgpIHx8IFtdO1xuXG4gIGlmIChzZWxlY3RSb3cgJiYgc2VsZWN0Um93LmhpZGVTZWxlY3RDb2x1bW4gIT09IHRydWUpIHtcbiAgICBpZiAoaXNSZW5kZXJGdW5jdGlvbkNvbHVtbkluTGVmdChzZWxlY3RSb3cuc2VsZWN0Q29sdW1uUG9zaXRpb24pKSB7XG4gICAgICBjaGlsZHJlbnMudW5zaGlmdChSZWFjdC5jcmVhdGVFbGVtZW50KGNlbGxFbCwgeyBrZXk6ICdzZWxlY3Rpb24nIH0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hpbGRyZW5zLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChjZWxsRWwsIHsga2V5OiAnc2VsZWN0aW9uJyB9KSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGV4cGFuZFJvdy5zaG93RXhwYW5kQ29sdW1uKSB7XG4gICAgaWYgKGlzUmVuZGVyRnVuY3Rpb25Db2x1bW5JbkxlZnQoZXhwYW5kUm93LmV4cGFuZENvbHVtblBvc2l0aW9uKSkge1xuICAgICAgY2hpbGRyZW5zLnVuc2hpZnQoUmVhY3QuY3JlYXRlRWxlbWVudChjZWxsRWwsIHsga2V5OiAnZXhwYW5zaW9uJyB9KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoaWxkcmVucy5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoY2VsbEVsLCB7IGtleTogJ2V4cGFuc2lvbicgfSkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiA8dHIgeyAuLi5yZXN0IH0+eyBjaGlsZHJlbnMgfTwvdHI+O1xufTtcblxuUm93VGVtcGxhdGUucHJvcFR5cGVzID0ge1xuICByZW5kZXJDb250ZW50OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjZWxsRWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgc2VsZWN0Um93OiBQcm9wVHlwZXMub2JqZWN0LFxuICBleHBhbmRSb3c6IFByb3BUeXBlcy5vYmplY3Rcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJvd1RlbXBsYXRlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93L3Jvdy10ZW1wbGF0ZS5qcyIsIi8qIGVzbGludCByZWFjdC9wcm9wLXR5cGVzOiAwICovXG4vKiBlc2xpbnQgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5OiAwICovXG4vKiBlc2xpbnQgbm8tcGx1c3BsdXM6IDAgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBfIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCBDZWxsIGZyb20gJy4uL2NlbGwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3dQdXJlQ29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICBpZiAodHlwZW9mIG5leHRQcm9wcy5zaG91bGRVcGRhdGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gbmV4dFByb3BzLnNob3VsZFVwZGF0ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgcm93LFxuICAgICAga2V5RmllbGQsXG4gICAgICBjb2x1bW5zLFxuICAgICAgcm93SW5kZXgsXG4gICAgICBlZGl0YWJsZSxcbiAgICAgIGVkaXRpbmdSb3dJZHgsXG4gICAgICBlZGl0aW5nQ29sSWR4LFxuICAgICAgb25TdGFydCxcbiAgICAgIGNsaWNrVG9FZGl0LFxuICAgICAgZGJjbGlja1RvRWRpdCxcbiAgICAgIEVkaXRpbmdDZWxsQ29tcG9uZW50LFxuICAgICAgdGFiSW5kZXhTdGFydFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgbGV0IHRhYkluZGV4ID0gdGFiSW5kZXhTdGFydDtcblxuICAgIHJldHVybiBjb2x1bW5zLm1hcCgoY29sdW1uLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgeyBkYXRhRmllbGQgfSA9IGNvbHVtbjtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBfLmdldChyb3csIGRhdGFGaWVsZCk7XG4gICAgICBpZiAocm93SW5kZXggPT09IGVkaXRpbmdSb3dJZHggJiYgaW5kZXggPT09IGVkaXRpbmdDb2xJZHgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8RWRpdGluZ0NlbGxDb21wb25lbnRcbiAgICAgICAgICAgIGtleT17IGAke2NvbnRlbnR9LSR7aW5kZXh9LWVkaXRpbmdgIH1cbiAgICAgICAgICAgIHJvdz17IHJvdyB9XG4gICAgICAgICAgICByb3dJbmRleD17IHJvd0luZGV4IH1cbiAgICAgICAgICAgIGNvbHVtbj17IGNvbHVtbiB9XG4gICAgICAgICAgICBjb2x1bW5JbmRleD17IGluZGV4IH1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgLy8gcmVuZGVyIGNlbGxcbiAgICAgIGxldCBjZWxsVGl0bGU7XG4gICAgICBsZXQgY2VsbFN0eWxlID0ge307XG4gICAgICBsZXQgY2VsbEF0dHJzID0ge1xuICAgICAgICAuLi5fLmlzRnVuY3Rpb24oY29sdW1uLmF0dHJzKVxuICAgICAgICAgID8gY29sdW1uLmF0dHJzKGNvbnRlbnQsIHJvdywgcm93SW5kZXgsIGluZGV4KVxuICAgICAgICAgIDogY29sdW1uLmF0dHJzXG4gICAgICB9O1xuXG4gICAgICBpZiAoY29sdW1uLmV2ZW50cykge1xuICAgICAgICBjb25zdCBldmVudHMgPSBPYmplY3QuYXNzaWduKHt9LCBjb2x1bW4uZXZlbnRzKTtcbiAgICAgICAgT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgY29sdW1uLmV2ZW50cykpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9yaWdpbkZuID0gZXZlbnRzW2tleV07XG4gICAgICAgICAgZXZlbnRzW2tleV0gPSAoLi4ucmVzdCkgPT4gb3JpZ2luRm4oLi4ucmVzdCwgcm93LCByb3dJbmRleCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjZWxsQXR0cnMgPSB7IC4uLmNlbGxBdHRycywgLi4uZXZlbnRzIH07XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNlbGxDbGFzc2VzID0gXy5pc0Z1bmN0aW9uKGNvbHVtbi5jbGFzc2VzKVxuICAgICAgICA/IGNvbHVtbi5jbGFzc2VzKGNvbnRlbnQsIHJvdywgcm93SW5kZXgsIGluZGV4KVxuICAgICAgICA6IGNvbHVtbi5jbGFzc2VzO1xuXG4gICAgICBpZiAoY29sdW1uLnN0eWxlKSB7XG4gICAgICAgIGNlbGxTdHlsZSA9IF8uaXNGdW5jdGlvbihjb2x1bW4uc3R5bGUpXG4gICAgICAgICAgPyBjb2x1bW4uc3R5bGUoY29udGVudCwgcm93LCByb3dJbmRleCwgaW5kZXgpXG4gICAgICAgICAgOiBjb2x1bW4uc3R5bGU7XG4gICAgICAgIGNlbGxTdHlsZSA9IE9iamVjdC5hc3NpZ24oe30sIGNlbGxTdHlsZSkgfHwge307XG4gICAgICB9XG5cbiAgICAgIGlmIChjb2x1bW4udGl0bGUpIHtcbiAgICAgICAgY2VsbFRpdGxlID0gXy5pc0Z1bmN0aW9uKGNvbHVtbi50aXRsZSlcbiAgICAgICAgICA/IGNvbHVtbi50aXRsZShjb250ZW50LCByb3csIHJvd0luZGV4LCBpbmRleClcbiAgICAgICAgICA6IGNvbnRlbnQ7XG4gICAgICAgIGNlbGxBdHRycy50aXRsZSA9IGNlbGxUaXRsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbHVtbi5hbGlnbikge1xuICAgICAgICBjZWxsU3R5bGUudGV4dEFsaWduID1cbiAgICAgICAgICBfLmlzRnVuY3Rpb24oY29sdW1uLmFsaWduKVxuICAgICAgICAgICAgPyBjb2x1bW4uYWxpZ24oY29udGVudCwgcm93LCByb3dJbmRleCwgaW5kZXgpXG4gICAgICAgICAgICA6IGNvbHVtbi5hbGlnbjtcbiAgICAgIH1cblxuICAgICAgaWYgKGNlbGxDbGFzc2VzKSBjZWxsQXR0cnMuY2xhc3NOYW1lID0gY2VsbENsYXNzZXM7XG4gICAgICBpZiAoIV8uaXNFbXB0eU9iamVjdChjZWxsU3R5bGUpKSBjZWxsQXR0cnMuc3R5bGUgPSBjZWxsU3R5bGU7XG5cbiAgICAgIGxldCBlZGl0YWJsZUNlbGwgPSBfLmlzRGVmaW5lZChjb2x1bW4uZWRpdGFibGUpID8gY29sdW1uLmVkaXRhYmxlIDogdHJ1ZTtcbiAgICAgIGlmIChjb2x1bW4uZGF0YUZpZWxkID09PSBrZXlGaWVsZCB8fCAhZWRpdGFibGUpIGVkaXRhYmxlQ2VsbCA9IGZhbHNlO1xuICAgICAgaWYgKF8uaXNGdW5jdGlvbihjb2x1bW4uZWRpdGFibGUpKSB7XG4gICAgICAgIGVkaXRhYmxlQ2VsbCA9IGNvbHVtbi5lZGl0YWJsZShjb250ZW50LCByb3csIHJvd0luZGV4LCBpbmRleCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0YWJJbmRleFN0YXJ0ICE9PSAtMSkge1xuICAgICAgICBjZWxsQXR0cnMudGFiSW5kZXggPSB0YWJJbmRleCsrO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Q2VsbFxuICAgICAgICAgIGtleT17IGAke2NvbnRlbnR9LSR7aW5kZXh9YCB9XG4gICAgICAgICAgcm93PXsgcm93IH1cbiAgICAgICAgICBlZGl0YWJsZT17IGVkaXRhYmxlQ2VsbCB9XG4gICAgICAgICAgcm93SW5kZXg9eyByb3dJbmRleCB9XG4gICAgICAgICAgY29sdW1uSW5kZXg9eyBpbmRleCB9XG4gICAgICAgICAgY29sdW1uPXsgY29sdW1uIH1cbiAgICAgICAgICBvblN0YXJ0PXsgb25TdGFydCB9XG4gICAgICAgICAgY2xpY2tUb0VkaXQ9eyBjbGlja1RvRWRpdCB9XG4gICAgICAgICAgZGJjbGlja1RvRWRpdD17IGRiY2xpY2tUb0VkaXQgfVxuICAgICAgICAgIHsgLi4uY2VsbEF0dHJzIH1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy9yb3ctcHVyZS1jb250ZW50LmpzIiwiaW1wb3J0IF8gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IENvbnN0IGZyb20gJy4uL2NvbnN0JztcblxuY29uc3QgZXZlbnRzID0gW1xuICAnb25DbGljaycsXG4gICdvbkRvdWJsZUNsaWNrJyxcbiAgJ29uTW91c2VFbnRlcicsXG4gICdvbk1vdXNlTGVhdmUnLFxuICAnb25Db250ZXh0TWVudScsXG4gICdvbkF1eENsaWNrJ1xuXTtcblxuZXhwb3J0IGRlZmF1bHQgRXh0ZW5kQmFzZSA9PlxuICBjbGFzcyBSb3dFdmVudERlbGVnYXRlciBleHRlbmRzIEV4dGVuZEJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICB0aGlzLmNsaWNrTnVtID0gMDtcbiAgICAgIHRoaXMuY3JlYXRlRGVmYXVsdEV2ZW50SGFuZGxlciA9IHRoaXMuY3JlYXRlRGVmYXVsdEV2ZW50SGFuZGxlci5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5jcmVhdGVDbGlja0V2ZW50SGFuZGxlciA9IHRoaXMuY3JlYXRlQ2xpY2tFdmVudEhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjcmVhdGVDbGlja0V2ZW50SGFuZGxlcihjYikge1xuICAgICAgcmV0dXJuIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICByb3csXG4gICAgICAgICAgc2VsZWN0ZWQsXG4gICAgICAgICAga2V5RmllbGQsXG4gICAgICAgICAgc2VsZWN0YWJsZSxcbiAgICAgICAgICBleHBhbmRhYmxlLFxuICAgICAgICAgIHJvd0luZGV4LFxuICAgICAgICAgIGV4cGFuZGVkLFxuICAgICAgICAgIGV4cGFuZFJvdyxcbiAgICAgICAgICBzZWxlY3RSb3csXG4gICAgICAgICAgREVMQVlfRk9SX0RCQ0xJQ0tcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGNsaWNrRm4gPSAoKSA9PiB7XG4gICAgICAgICAgaWYgKGNiKSB7XG4gICAgICAgICAgICBjYihlLCByb3csIHJvd0luZGV4KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3Qga2V5ID0gXy5nZXQocm93LCBrZXlGaWVsZCk7XG4gICAgICAgICAgaWYgKGV4cGFuZFJvdyAmJiBleHBhbmRhYmxlICYmICFleHBhbmRSb3cuZXhwYW5kQnlDb2x1bW5Pbmx5KSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIChzZWxlY3RSb3cubW9kZSAhPT0gQ29uc3QuUk9XX1NFTEVDVF9ESVNBQkxFRCAmJiBzZWxlY3RSb3cuY2xpY2tUb0V4cGFuZCkgfHxcbiAgICAgICAgICAgICAgc2VsZWN0Um93Lm1vZGUgPT09IENvbnN0LlJPV19TRUxFQ1RfRElTQUJMRURcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBleHBhbmRSb3cub25Sb3dFeHBhbmQoa2V5LCAhZXhwYW5kZWQsIHJvd0luZGV4LCBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHNlbGVjdFJvdy5jbGlja1RvU2VsZWN0ICYmIHNlbGVjdGFibGUpIHtcbiAgICAgICAgICAgIHNlbGVjdFJvdy5vblJvd1NlbGVjdChrZXksICFzZWxlY3RlZCwgcm93SW5kZXgsIGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoREVMQVlfRk9SX0RCQ0xJQ0spIHtcbiAgICAgICAgICB0aGlzLmNsaWNrTnVtICs9IDE7XG4gICAgICAgICAgXy5kZWJvdW5jZSgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5jbGlja051bSA9PT0gMSkge1xuICAgICAgICAgICAgICBjbGlja0ZuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNsaWNrTnVtID0gMDtcbiAgICAgICAgICB9LCBERUxBWV9GT1JfREJDTElDSykoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjbGlja0ZuKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgY3JlYXRlRGVmYXVsdEV2ZW50SGFuZGxlcihjYikge1xuICAgICAgcmV0dXJuIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgcm93LCByb3dJbmRleCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY2IoZSwgcm93LCByb3dJbmRleCk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGRlbGVnYXRlKGF0dHJzID0ge30pIHtcbiAgICAgIGNvbnN0IG5ld0F0dHJzID0geyAuLi5hdHRycyB9O1xuICAgICAgT2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goKGF0dHIpID0+IHtcbiAgICAgICAgaWYgKF8uY29udGFpbnMoZXZlbnRzLCBhdHRyKSkge1xuICAgICAgICAgIG5ld0F0dHJzW2F0dHJdID0gdGhpcy5jcmVhdGVEZWZhdWx0RXZlbnRIYW5kbGVyKGF0dHJzW2F0dHJdKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3QXR0cnM7XG4gICAgfVxuICB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93L2V2ZW50LWRlbGVnYXRlci5qcyIsIi8qIGVzbGludCByZWFjdC9wcm9wLXR5cGVzOiAwICovXG5pbXBvcnQgXyBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IEV4dGVuZEJhc2UgPT5cbiAgY2xhc3MgUm93U2hvdWxkVXBkYXRlciBleHRlbmRzIEV4dGVuZEJhc2Uge1xuICAgIHNob3VsZFVwZGF0ZUJ5Q2VsbEVkaXRpbmcobmV4dFByb3BzKSB7XG4gICAgICBpZiAoISh0aGlzLnByb3BzLmNsaWNrVG9FZGl0IHx8IHRoaXMucHJvcHMuZGJjbGlja1RvRWRpdCkpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIG5leHRQcm9wcy5lZGl0aW5nUm93SWR4ID09PSBuZXh0UHJvcHMucm93SW5kZXggfHxcbiAgICAgICAgKHRoaXMucHJvcHMuZWRpdGluZ1Jvd0lkeCA9PT0gbmV4dFByb3BzLnJvd0luZGV4ICYmXG4gICAgICAgIG5leHRQcm9wcy5lZGl0aW5nUm93SWR4ID09PSBudWxsKSB8fFxuICAgICAgICB0aGlzLnByb3BzLmVkaXRpbmdSb3dJZHggPT09IG5leHRQcm9wcy5yb3dJbmRleFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBzaG91bGRVcGRhdGVkQnlTZWxmUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICB0aGlzLnByb3BzLmNsYXNzTmFtZSAhPT0gbmV4dFByb3BzLmNsYXNzTmFtZSB8fFxuICAgICAgICAhXy5pc0VxdWFsKHRoaXMucHJvcHMuc3R5bGUsIG5leHRQcm9wcy5zdHlsZSkgfHxcbiAgICAgICAgIV8uaXNFcXVhbCh0aGlzLnByb3BzLmF0dHJzLCBuZXh0UHJvcHMuYXR0cnMpXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIE9ubHkgdXNlIGZvciBzaW1wbGUtcm93XG4gICAgc2hvdWxkVXBkYXRlQnlDb2x1bW5zRm9yU2ltcGxlQ2hlY2sobmV4dFByb3BzKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5jb2x1bW5zLmxlbmd0aCAhPT0gbmV4dFByb3BzLmNvbHVtbnMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BzLmNvbHVtbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKCFfLmlzRXF1YWwodGhpcy5wcm9wcy5jb2x1bW5zW2ldLCBuZXh0UHJvcHMuY29sdW1uc1tpXSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHNob3VsZFVwZGF0ZWRCeU5vcm1hbFByb3BzKG5leHRQcm9wcykge1xuICAgICAgY29uc3Qgc2hvdWxkVXBkYXRlID1cbiAgICAgICAgdGhpcy5wcm9wcy5yb3dJbmRleCAhPT0gbmV4dFByb3BzLnJvd0luZGV4IHx8XG4gICAgICAgIHRoaXMucHJvcHMuZWRpdGFibGUgIT09IG5leHRQcm9wcy5lZGl0YWJsZSB8fFxuICAgICAgICAhXy5pc0VxdWFsKHRoaXMucHJvcHMucm93LCBuZXh0UHJvcHMucm93KSB8fFxuICAgICAgICB0aGlzLnByb3BzLmNvbHVtbnMubGVuZ3RoICE9PSBuZXh0UHJvcHMuY29sdW1ucy5sZW5ndGg7XG5cbiAgICAgIHJldHVybiBzaG91bGRVcGRhdGU7XG4gICAgfVxuXG4gICAgc2hvdWxkVXBkYXRlQ2hpbGQobmV4dFByb3BzKSB7XG4gICAgICByZXR1cm4gdGhpcy5zaG91bGRVcGRhdGVCeUNlbGxFZGl0aW5nKG5leHRQcm9wcykgfHxcbiAgICAgICAgdGhpcy5zaG91bGRVcGRhdGVkQnlOb3JtYWxQcm9wcyhuZXh0UHJvcHMpO1xuICAgIH1cblxuICAgIHNob3VsZFJvd0NvbnRlbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgICByZXR1cm4gdGhpcy5zaG91bGRVcGRhdGVDaGlsZChuZXh0UHJvcHMpIHx8XG4gICAgICAgIHRoaXMuc2hvdWxkVXBkYXRlQnlDb2x1bW5zRm9yU2ltcGxlQ2hlY2sobmV4dFByb3BzKTtcbiAgICB9XG4gIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3cvc2hvdWxkLXVwZGF0ZXIuanMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcy5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjFfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdERPTVwiLFwiY29tbW9uanMyXCI6XCJyZWFjdC1kb21cIixcImNvbW1vbmpzXCI6XCJyZWFjdC1kb21cIixcImFtZFwiOlwicmVhY3QtZG9tXCJ9XG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZGlzYWJsZWQ6IGZhbHNlXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9lc20vY29uZmlnLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5leHBvcnQgdmFyIHRpbWVvdXRzU2hhcGUgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnNoYXBlKHtcbiAgZW50ZXI6IFByb3BUeXBlcy5udW1iZXIsXG4gIGV4aXQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIGFwcGVhcjogUHJvcFR5cGVzLm51bWJlclxufSkuaXNSZXF1aXJlZF0pIDogbnVsbDtcbmV4cG9ydCB2YXIgY2xhc3NOYW1lc1NoYXBlID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5zaGFwZSh7XG4gIGVudGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBleGl0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhY3RpdmU6IFByb3BUeXBlcy5zdHJpbmdcbn0pLCBQcm9wVHlwZXMuc2hhcGUoe1xuICBlbnRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgZW50ZXJEb25lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBlbnRlckFjdGl2ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZXhpdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZXhpdERvbmU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGV4aXRBY3RpdmU6IFByb3BUeXBlcy5zdHJpbmdcbn0pXSkgOiBudWxsO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9lc20vdXRpbHMvUHJvcFR5cGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX2Fzc2VydFRoaXNJbml0aWFsaXplZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCI7XG5pbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2VcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRyYW5zaXRpb25Hcm91cENvbnRleHQgZnJvbSAnLi9UcmFuc2l0aW9uR3JvdXBDb250ZXh0JztcbmltcG9ydCB7IGdldENoaWxkTWFwcGluZywgZ2V0SW5pdGlhbENoaWxkTWFwcGluZywgZ2V0TmV4dENoaWxkTWFwcGluZyB9IGZyb20gJy4vdXRpbHMvQ2hpbGRNYXBwaW5nJztcblxudmFyIHZhbHVlcyA9IE9iamVjdC52YWx1ZXMgfHwgZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5tYXAoZnVuY3Rpb24gKGspIHtcbiAgICByZXR1cm4gb2JqW2tdO1xuICB9KTtcbn07XG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGNvbXBvbmVudDogJ2RpdicsXG4gIGNoaWxkRmFjdG9yeTogZnVuY3Rpb24gY2hpbGRGYWN0b3J5KGNoaWxkKSB7XG4gICAgcmV0dXJuIGNoaWxkO1xuICB9XG59O1xuLyoqXG4gKiBUaGUgYDxUcmFuc2l0aW9uR3JvdXA+YCBjb21wb25lbnQgbWFuYWdlcyBhIHNldCBvZiB0cmFuc2l0aW9uIGNvbXBvbmVudHNcbiAqIChgPFRyYW5zaXRpb24+YCBhbmQgYDxDU1NUcmFuc2l0aW9uPmApIGluIGEgbGlzdC4gTGlrZSB3aXRoIHRoZSB0cmFuc2l0aW9uXG4gKiBjb21wb25lbnRzLCBgPFRyYW5zaXRpb25Hcm91cD5gIGlzIGEgc3RhdGUgbWFjaGluZSBmb3IgbWFuYWdpbmcgdGhlIG1vdW50aW5nXG4gKiBhbmQgdW5tb3VudGluZyBvZiBjb21wb25lbnRzIG92ZXIgdGltZS5cbiAqXG4gKiBDb25zaWRlciB0aGUgZXhhbXBsZSBiZWxvdy4gQXMgaXRlbXMgYXJlIHJlbW92ZWQgb3IgYWRkZWQgdG8gdGhlIFRvZG9MaXN0IHRoZVxuICogYGluYCBwcm9wIGlzIHRvZ2dsZWQgYXV0b21hdGljYWxseSBieSB0aGUgYDxUcmFuc2l0aW9uR3JvdXA+YC5cbiAqXG4gKiBOb3RlIHRoYXQgYDxUcmFuc2l0aW9uR3JvdXA+YCAgZG9lcyBub3QgZGVmaW5lIGFueSBhbmltYXRpb24gYmVoYXZpb3IhXG4gKiBFeGFjdGx5IF9ob3dfIGEgbGlzdCBpdGVtIGFuaW1hdGVzIGlzIHVwIHRvIHRoZSBpbmRpdmlkdWFsIHRyYW5zaXRpb25cbiAqIGNvbXBvbmVudC4gVGhpcyBtZWFucyB5b3UgY2FuIG1peCBhbmQgbWF0Y2ggYW5pbWF0aW9ucyBhY3Jvc3MgZGlmZmVyZW50IGxpc3RcbiAqIGl0ZW1zLlxuICovXG5cbnZhciBUcmFuc2l0aW9uR3JvdXAgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoVHJhbnNpdGlvbkdyb3VwLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUcmFuc2l0aW9uR3JvdXAocHJvcHMsIGNvbnRleHQpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkgfHwgdGhpcztcblxuICAgIHZhciBoYW5kbGVFeGl0ZWQgPSBfdGhpcy5oYW5kbGVFeGl0ZWQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7IC8vIEluaXRpYWwgY2hpbGRyZW4gc2hvdWxkIGFsbCBiZSBlbnRlcmluZywgZGVwZW5kZW50IG9uIGFwcGVhclxuXG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNvbnRleHRWYWx1ZToge1xuICAgICAgICBpc01vdW50aW5nOiB0cnVlXG4gICAgICB9LFxuICAgICAgaGFuZGxlRXhpdGVkOiBoYW5kbGVFeGl0ZWQsXG4gICAgICBmaXJzdFJlbmRlcjogdHJ1ZVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFRyYW5zaXRpb25Hcm91cC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNvbnRleHRWYWx1ZToge1xuICAgICAgICBpc01vdW50aW5nOiBmYWxzZVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xuICB9O1xuXG4gIFRyYW5zaXRpb25Hcm91cC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzLCBfcmVmKSB7XG4gICAgdmFyIHByZXZDaGlsZE1hcHBpbmcgPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgICBoYW5kbGVFeGl0ZWQgPSBfcmVmLmhhbmRsZUV4aXRlZCxcbiAgICAgICAgZmlyc3RSZW5kZXIgPSBfcmVmLmZpcnN0UmVuZGVyO1xuICAgIHJldHVybiB7XG4gICAgICBjaGlsZHJlbjogZmlyc3RSZW5kZXIgPyBnZXRJbml0aWFsQ2hpbGRNYXBwaW5nKG5leHRQcm9wcywgaGFuZGxlRXhpdGVkKSA6IGdldE5leHRDaGlsZE1hcHBpbmcobmV4dFByb3BzLCBwcmV2Q2hpbGRNYXBwaW5nLCBoYW5kbGVFeGl0ZWQpLFxuICAgICAgZmlyc3RSZW5kZXI6IGZhbHNlXG4gICAgfTtcbiAgfSAvLyBub2RlIGlzIGB1bmRlZmluZWRgIHdoZW4gdXNlciBwcm92aWRlZCBgbm9kZVJlZmAgcHJvcFxuICA7XG5cbiAgX3Byb3RvLmhhbmRsZUV4aXRlZCA9IGZ1bmN0aW9uIGhhbmRsZUV4aXRlZChjaGlsZCwgbm9kZSkge1xuICAgIHZhciBjdXJyZW50Q2hpbGRNYXBwaW5nID0gZ2V0Q2hpbGRNYXBwaW5nKHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgIGlmIChjaGlsZC5rZXkgaW4gY3VycmVudENoaWxkTWFwcGluZykgcmV0dXJuO1xuXG4gICAgaWYgKGNoaWxkLnByb3BzLm9uRXhpdGVkKSB7XG4gICAgICBjaGlsZC5wcm9wcy5vbkV4aXRlZChub2RlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tb3VudGVkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSBfZXh0ZW5kcyh7fSwgc3RhdGUuY2hpbGRyZW4pO1xuXG4gICAgICAgIGRlbGV0ZSBjaGlsZHJlbltjaGlsZC5rZXldO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgQ29tcG9uZW50ID0gX3RoaXMkcHJvcHMuY29tcG9uZW50LFxuICAgICAgICBjaGlsZEZhY3RvcnkgPSBfdGhpcyRwcm9wcy5jaGlsZEZhY3RvcnksXG4gICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIFtcImNvbXBvbmVudFwiLCBcImNoaWxkRmFjdG9yeVwiXSk7XG5cbiAgICB2YXIgY29udGV4dFZhbHVlID0gdGhpcy5zdGF0ZS5jb250ZXh0VmFsdWU7XG4gICAgdmFyIGNoaWxkcmVuID0gdmFsdWVzKHRoaXMuc3RhdGUuY2hpbGRyZW4pLm1hcChjaGlsZEZhY3RvcnkpO1xuICAgIGRlbGV0ZSBwcm9wcy5hcHBlYXI7XG4gICAgZGVsZXRlIHByb3BzLmVudGVyO1xuICAgIGRlbGV0ZSBwcm9wcy5leGl0O1xuXG4gICAgaWYgKENvbXBvbmVudCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRyYW5zaXRpb25Hcm91cENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgICAgdmFsdWU6IGNvbnRleHRWYWx1ZVxuICAgICAgfSwgY2hpbGRyZW4pO1xuICAgIH1cblxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUcmFuc2l0aW9uR3JvdXBDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICB2YWx1ZTogY29udGV4dFZhbHVlXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBwcm9wcywgY2hpbGRyZW4pKTtcbiAgfTtcblxuICByZXR1cm4gVHJhbnNpdGlvbkdyb3VwO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5UcmFuc2l0aW9uR3JvdXAucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICAvKipcbiAgICogYDxUcmFuc2l0aW9uR3JvdXA+YCByZW5kZXJzIGEgYDxkaXY+YCBieSBkZWZhdWx0LiBZb3UgY2FuIGNoYW5nZSB0aGlzXG4gICAqIGJlaGF2aW9yIGJ5IHByb3ZpZGluZyBhIGBjb21wb25lbnRgIHByb3AuXG4gICAqIElmIHlvdSB1c2UgUmVhY3QgdjE2KyBhbmQgd291bGQgbGlrZSB0byBhdm9pZCBhIHdyYXBwaW5nIGA8ZGl2PmAgZWxlbWVudFxuICAgKiB5b3UgY2FuIHBhc3MgaW4gYGNvbXBvbmVudD17bnVsbH1gLiBUaGlzIGlzIHVzZWZ1bCBpZiB0aGUgd3JhcHBpbmcgZGl2XG4gICAqIGJvcmtzIHlvdXIgY3NzIHN0eWxlcy5cbiAgICovXG4gIGNvbXBvbmVudDogUHJvcFR5cGVzLmFueSxcblxuICAvKipcbiAgICogQSBzZXQgb2YgYDxUcmFuc2l0aW9uPmAgY29tcG9uZW50cywgdGhhdCBhcmUgdG9nZ2xlZCBgaW5gIGFuZCBvdXQgYXMgdGhleVxuICAgKiBsZWF2ZS4gdGhlIGA8VHJhbnNpdGlvbkdyb3VwPmAgd2lsbCBpbmplY3Qgc3BlY2lmaWMgdHJhbnNpdGlvbiBwcm9wcywgc29cbiAgICogcmVtZW1iZXIgdG8gc3ByZWFkIHRoZW0gdGhyb3VnaCBpZiB5b3UgYXJlIHdyYXBwaW5nIHRoZSBgPFRyYW5zaXRpb24+YCBhc1xuICAgKiB3aXRoIG91ciBgPEZhZGU+YCBleGFtcGxlLlxuICAgKlxuICAgKiBXaGlsZSB0aGlzIGNvbXBvbmVudCBpcyBtZWFudCBmb3IgbXVsdGlwbGUgYFRyYW5zaXRpb25gIG9yIGBDU1NUcmFuc2l0aW9uYFxuICAgKiBjaGlsZHJlbiwgc29tZXRpbWVzIHlvdSBtYXkgd2FudCB0byBoYXZlIGEgc2luZ2xlIHRyYW5zaXRpb24gY2hpbGQgd2l0aFxuICAgKiBjb250ZW50IHRoYXQgeW91IHdhbnQgdG8gYmUgdHJhbnNpdGlvbmVkIG91dCBhbmQgaW4gd2hlbiB5b3UgY2hhbmdlIGl0XG4gICAqIChlLmcuIHJvdXRlcywgaW1hZ2VzIGV0Yy4pIEluIHRoYXQgY2FzZSB5b3UgY2FuIGNoYW5nZSB0aGUgYGtleWAgcHJvcCBvZlxuICAgKiB0aGUgdHJhbnNpdGlvbiBjaGlsZCBhcyB5b3UgY2hhbmdlIGl0cyBjb250ZW50LCB0aGlzIHdpbGwgY2F1c2VcbiAgICogYFRyYW5zaXRpb25Hcm91cGAgdG8gdHJhbnNpdGlvbiB0aGUgY2hpbGQgb3V0IGFuZCBiYWNrIGluLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBBIGNvbnZlbmllbmNlIHByb3AgdGhhdCBlbmFibGVzIG9yIGRpc2FibGVzIGFwcGVhciBhbmltYXRpb25zXG4gICAqIGZvciBhbGwgY2hpbGRyZW4uIE5vdGUgdGhhdCBzcGVjaWZ5aW5nIHRoaXMgd2lsbCBvdmVycmlkZSBhbnkgZGVmYXVsdHMgc2V0XG4gICAqIG9uIGluZGl2aWR1YWwgY2hpbGRyZW4gVHJhbnNpdGlvbnMuXG4gICAqL1xuICBhcHBlYXI6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBBIGNvbnZlbmllbmNlIHByb3AgdGhhdCBlbmFibGVzIG9yIGRpc2FibGVzIGVudGVyIGFuaW1hdGlvbnNcbiAgICogZm9yIGFsbCBjaGlsZHJlbi4gTm90ZSB0aGF0IHNwZWNpZnlpbmcgdGhpcyB3aWxsIG92ZXJyaWRlIGFueSBkZWZhdWx0cyBzZXRcbiAgICogb24gaW5kaXZpZHVhbCBjaGlsZHJlbiBUcmFuc2l0aW9ucy5cbiAgICovXG4gIGVudGVyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQSBjb252ZW5pZW5jZSBwcm9wIHRoYXQgZW5hYmxlcyBvciBkaXNhYmxlcyBleGl0IGFuaW1hdGlvbnNcbiAgICogZm9yIGFsbCBjaGlsZHJlbi4gTm90ZSB0aGF0IHNwZWNpZnlpbmcgdGhpcyB3aWxsIG92ZXJyaWRlIGFueSBkZWZhdWx0cyBzZXRcbiAgICogb24gaW5kaXZpZHVhbCBjaGlsZHJlbiBUcmFuc2l0aW9ucy5cbiAgICovXG4gIGV4aXQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBZb3UgbWF5IG5lZWQgdG8gYXBwbHkgcmVhY3RpdmUgdXBkYXRlcyB0byBhIGNoaWxkIGFzIGl0IGlzIGV4aXRpbmcuXG4gICAqIFRoaXMgaXMgZ2VuZXJhbGx5IGRvbmUgYnkgdXNpbmcgYGNsb25lRWxlbWVudGAgaG93ZXZlciBpbiB0aGUgY2FzZSBvZiBhbiBleGl0aW5nXG4gICAqIGNoaWxkIHRoZSBlbGVtZW50IGhhcyBhbHJlYWR5IGJlZW4gcmVtb3ZlZCBhbmQgbm90IGFjY2Vzc2libGUgdG8gdGhlIGNvbnN1bWVyLlxuICAgKlxuICAgKiBJZiB5b3UgZG8gbmVlZCB0byB1cGRhdGUgYSBjaGlsZCBhcyBpdCBsZWF2ZXMgeW91IGNhbiBwcm92aWRlIGEgYGNoaWxkRmFjdG9yeWBcbiAgICogdG8gd3JhcCBldmVyeSBjaGlsZCwgZXZlbiB0aGUgb25lcyB0aGF0IGFyZSBsZWF2aW5nLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihjaGlsZDogUmVhY3RFbGVtZW50KSAtPiBSZWFjdEVsZW1lbnRcbiAgICovXG4gIGNoaWxkRmFjdG9yeTogUHJvcFR5cGVzLmZ1bmNcbn0gOiB7fTtcblRyYW5zaXRpb25Hcm91cC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5leHBvcnQgZGVmYXVsdCBUcmFuc2l0aW9uR3JvdXA7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2VzbS9UcmFuc2l0aW9uR3JvdXAuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgdGhpcy5fZXZlbnRzID0gdGhpcy5fZXZlbnRzIHx8IHt9O1xuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5cbi8vIEJhY2t3YXJkcy1jb21wYXQgd2l0aCBub2RlIDAuMTAueFxuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuXG4vLyBCeSBkZWZhdWx0IEV2ZW50RW1pdHRlcnMgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgbW9yZSB0aGFuIDEwIGxpc3RlbmVycyBhcmVcbi8vIGFkZGVkIHRvIGl0LiBUaGlzIGlzIGEgdXNlZnVsIGRlZmF1bHQgd2hpY2ggaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG5FdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycyA9IDEwO1xuXG4vLyBPYnZpb3VzbHkgbm90IGFsbCBFbWl0dGVycyBzaG91bGQgYmUgbGltaXRlZCB0byAxMC4gVGhpcyBmdW5jdGlvbiBhbGxvd3Ncbi8vIHRoYXQgdG8gYmUgaW5jcmVhc2VkLiBTZXQgdG8gemVybyBmb3IgdW5saW1pdGVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbihuKSB7XG4gIGlmICghaXNOdW1iZXIobikgfHwgbiA8IDAgfHwgaXNOYU4obikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCduIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXInKTtcbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciBlciwgaGFuZGxlciwgbGVuLCBhcmdzLCBpLCBsaXN0ZW5lcnM7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgdGhpcy5fZXZlbnRzID0ge307XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAodHlwZSA9PT0gJ2Vycm9yJykge1xuICAgIGlmICghdGhpcy5fZXZlbnRzLmVycm9yIHx8XG4gICAgICAgIChpc09iamVjdCh0aGlzLl9ldmVudHMuZXJyb3IpICYmICF0aGlzLl9ldmVudHMuZXJyb3IubGVuZ3RoKSkge1xuICAgICAgZXIgPSBhcmd1bWVudHNbMV07XG4gICAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcignVW5jYXVnaHQsIHVuc3BlY2lmaWVkIFwiZXJyb3JcIiBldmVudC4gKCcgKyBlciArICcpJyk7XG4gICAgICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVyID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChpc1VuZGVmaW5lZChoYW5kbGVyKSlcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKGlzRnVuY3Rpb24oaGFuZGxlcikpIHtcbiAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIC8vIGZhc3QgY2FzZXNcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50c1sxXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0pO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vIHNsb3dlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgIGhhbmRsZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGhhbmRsZXIpKSB7XG4gICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgbGlzdGVuZXJzID0gaGFuZGxlci5zbGljZSgpO1xuICAgIGxlbiA9IGxpc3RlbmVycy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKVxuICAgICAgbGlzdGVuZXJzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIG07XG5cbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuXG4gIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgaWYgKHRoaXMuX2V2ZW50cy5uZXdMaXN0ZW5lcilcbiAgICB0aGlzLmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgaXNGdW5jdGlvbihsaXN0ZW5lci5saXN0ZW5lcikgP1xuICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA6IGxpc3RlbmVyKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICAvLyBPcHRpbWl6ZSB0aGUgY2FzZSBvZiBvbmUgbGlzdGVuZXIuIERvbid0IG5lZWQgdGhlIGV4dHJhIGFycmF5IG9iamVjdC5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgZWxzZSBpZiAoaXNPYmplY3QodGhpcy5fZXZlbnRzW3R5cGVdKSlcbiAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGdvdCBhbiBhcnJheSwganVzdCBhcHBlbmQuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdLnB1c2gobGlzdGVuZXIpO1xuICBlbHNlXG4gICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdID0gW3RoaXMuX2V2ZW50c1t0eXBlXSwgbGlzdGVuZXJdO1xuXG4gIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gIGlmIChpc09iamVjdCh0aGlzLl9ldmVudHNbdHlwZV0pICYmICF0aGlzLl9ldmVudHNbdHlwZV0ud2FybmVkKSB7XG4gICAgaWYgKCFpc1VuZGVmaW5lZCh0aGlzLl9tYXhMaXN0ZW5lcnMpKSB7XG4gICAgICBtID0gdGhpcy5fbWF4TGlzdGVuZXJzO1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgaWYgKG0gJiYgbSA+IDAgJiYgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCA+IG0pIHtcbiAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQgPSB0cnVlO1xuICAgICAgY29uc29sZS5lcnJvcignKG5vZGUpIHdhcm5pbmc6IHBvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgJyArXG4gICAgICAgICAgICAgICAgICAgICdsZWFrIGRldGVjdGVkLiAlZCBsaXN0ZW5lcnMgYWRkZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAnVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gaW5jcmVhc2UgbGltaXQuJyxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCk7XG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUudHJhY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gbm90IHN1cHBvcnRlZCBpbiBJRSAxMFxuICAgICAgICBjb25zb2xlLnRyYWNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIHZhciBmaXJlZCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGcoKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBnKTtcblxuICAgIGlmICghZmlyZWQpIHtcbiAgICAgIGZpcmVkID0gdHJ1ZTtcbiAgICAgIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgZy5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICB0aGlzLm9uKHR5cGUsIGcpO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLy8gZW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWRcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgbGlzdCwgcG9zaXRpb24sIGxlbmd0aCwgaTtcblxuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICByZXR1cm4gdGhpcztcblxuICBsaXN0ID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuICBsZW5ndGggPSBsaXN0Lmxlbmd0aDtcbiAgcG9zaXRpb24gPSAtMTtcblxuICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHxcbiAgICAgIChpc0Z1bmN0aW9uKGxpc3QubGlzdGVuZXIpICYmIGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgaWYgKHRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0ZW5lcik7XG5cbiAgfSBlbHNlIGlmIChpc09iamVjdChsaXN0KSkge1xuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tID4gMDspIHtcbiAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fFxuICAgICAgICAgIChsaXN0W2ldLmxpc3RlbmVyICYmIGxpc3RbaV0ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwb3NpdGlvbiA8IDApXG4gICAgICByZXR1cm4gdGhpcztcblxuICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgbGlzdC5sZW5ndGggPSAwO1xuICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdC5zcGxpY2UocG9zaXRpb24sIDEpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdGVuZXIpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIGtleSwgbGlzdGVuZXJzO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHJldHVybiB0aGlzO1xuXG4gIC8vIG5vdCBsaXN0ZW5pbmcgZm9yIHJlbW92ZUxpc3RlbmVyLCBubyBuZWVkIHRvIGVtaXRcbiAgaWYgKCF0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMClcbiAgICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICBmb3IgKGtleSBpbiB0aGlzLl9ldmVudHMpIHtcbiAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoa2V5KTtcbiAgICB9XG4gICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgaWYgKGlzRnVuY3Rpb24obGlzdGVuZXJzKSkge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgfSBlbHNlIGlmIChsaXN0ZW5lcnMpIHtcbiAgICAvLyBMSUZPIG9yZGVyXG4gICAgd2hpbGUgKGxpc3RlbmVycy5sZW5ndGgpXG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tsaXN0ZW5lcnMubGVuZ3RoIC0gMV0pO1xuICB9XG4gIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIHJldDtcbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICByZXQgPSBbXTtcbiAgZWxzZSBpZiAoaXNGdW5jdGlvbih0aGlzLl9ldmVudHNbdHlwZV0pKVxuICAgIHJldCA9IFt0aGlzLl9ldmVudHNbdHlwZV1dO1xuICBlbHNlXG4gICAgcmV0ID0gdGhpcy5fZXZlbnRzW3R5cGVdLnNsaWNlKCk7XG4gIHJldHVybiByZXQ7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbih0eXBlKSB7XG4gIGlmICh0aGlzLl9ldmVudHMpIHtcbiAgICB2YXIgZXZsaXN0ZW5lciA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICAgIGlmIChpc0Z1bmN0aW9uKGV2bGlzdGVuZXIpKVxuICAgICAgcmV0dXJuIDE7XG4gICAgZWxzZSBpZiAoZXZsaXN0ZW5lcilcbiAgICAgIHJldHVybiBldmxpc3RlbmVyLmxlbmd0aDtcbiAgfVxuICByZXR1cm4gMDtcbn07XG5cbkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuICByZXR1cm4gZW1pdHRlci5saXN0ZW5lckNvdW50KHR5cGUpO1xufTtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ251bWJlcic7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gdm9pZCAwO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZXZlbnRzL2V2ZW50cy5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgQm9vdHN0cmFwVGFibGUgZnJvbSAnLi9zcmMvYm9vdHN0cmFwLXRhYmxlJztcbmltcG9ydCB3aXRoQ29udGV4dCBmcm9tICcuL3NyYy9jb250ZXh0cyc7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhDb250ZXh0KEJvb3RzdHJhcFRhYmxlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvaW5kZXguanMiLCIvKiBlc2xpbnQgY2FtZWxjYXNlOiAwICovXG4vKiBlc2xpbnQgYXJyb3ctYm9keS1zdHlsZTogMCAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjcyBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgRmlsdGVycyBmcm9tICcuL2ZpbHRlcnMnO1xuaW1wb3J0IENhcHRpb24gZnJvbSAnLi9jYXB0aW9uJztcbmltcG9ydCBCb2R5IGZyb20gJy4vYm9keSc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vZm9vdGVyJztcbmltcG9ydCBQcm9wc0Jhc2VSZXNvbHZlciBmcm9tICcuL3Byb3BzLXJlc29sdmVyJztcbmltcG9ydCBDb25zdCBmcm9tICcuL2NvbnN0JztcbmltcG9ydCBfIGZyb20gJy4vdXRpbHMnO1xuXG5jbGFzcyBCb290c3RyYXBUYWJsZSBleHRlbmRzIFByb3BzQmFzZVJlc29sdmVyKENvbXBvbmVudCkge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnZhbGlkYXRlUHJvcHMoKTtcbiAgfVxuXG4gIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmIChuZXh0UHJvcHMub25EYXRhU2l6ZUNoYW5nZSAmJiAhbmV4dFByb3BzLnBhZ2luYXRpb24pIHtcbiAgICAgIGlmIChuZXh0UHJvcHMuZGF0YS5sZW5ndGggIT09IHRoaXMucHJvcHMuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgbmV4dFByb3BzLm9uRGF0YVNpemVDaGFuZ2UoeyBkYXRhU2l6ZTogbmV4dFByb3BzLmRhdGEubGVuZ3RoIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEV4cG9zZWQgQVBJc1xuICBnZXREYXRhID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLnZpc2libGVSb3dzKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsb2FkaW5nLCBvdmVybGF5IH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChvdmVybGF5KSB7XG4gICAgICBjb25zdCBMb2FkaW5nT3ZlcmxheSA9IG92ZXJsYXkobG9hZGluZyk7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8TG9hZGluZ092ZXJsYXk+XG4gICAgICAgICAgeyB0aGlzLnJlbmRlclRhYmxlKCkgfVxuICAgICAgICA8L0xvYWRpbmdPdmVybGF5PlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyVGFibGUoKTtcbiAgfVxuXG4gIHJlbmRlclRhYmxlKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNvbHVtbnMsXG4gICAgICBrZXlGaWVsZCxcbiAgICAgIHRhYkluZGV4Q2VsbCxcbiAgICAgIGlkLFxuICAgICAgY2xhc3NlcyxcbiAgICAgIGJvb3RzdHJhcDQsXG4gICAgICBzdHJpcGVkLFxuICAgICAgaG92ZXIsXG4gICAgICBib3JkZXJlZCxcbiAgICAgIGNvbmRlbnNlZCxcbiAgICAgIG5vRGF0YUluZGljYXRpb24sXG4gICAgICBjYXB0aW9uLFxuICAgICAgcm93U3R5bGUsXG4gICAgICByb3dDbGFzc2VzLFxuICAgICAgd3JhcHBlckNsYXNzZXMsXG4gICAgICByb3dFdmVudHMsXG4gICAgICBzZWxlY3RSb3csXG4gICAgICBleHBhbmRSb3csXG4gICAgICBjZWxsRWRpdCxcbiAgICAgIGZpbHRlclBvc2l0aW9uXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCB0YWJsZVdyYXBwZXJDbGFzcyA9IGNzKCdyZWFjdC1ib290c3RyYXAtdGFibGUnLCB3cmFwcGVyQ2xhc3Nlcyk7XG5cbiAgICBjb25zdCB0YWJsZUNsYXNzID0gY3MoJ3RhYmxlJywge1xuICAgICAgJ3RhYmxlLXN0cmlwZWQnOiBzdHJpcGVkLFxuICAgICAgJ3RhYmxlLWhvdmVyJzogaG92ZXIsXG4gICAgICAndGFibGUtYm9yZGVyZWQnOiBib3JkZXJlZCxcbiAgICAgIFtib290c3RyYXA0ID8gJ3RhYmxlLXNtJyA6ICd0YWJsZS1jb25kZW5zZWQnXTogY29uZGVuc2VkXG4gICAgfSwgY2xhc3Nlcyk7XG5cbiAgICBjb25zdCBoYXNGaWx0ZXJzID0gY29sdW1ucy5zb21lKGNvbCA9PiBjb2wuZmlsdGVyIHx8IGNvbC5maWx0ZXJSZW5kZXJlcik7XG5cbiAgICBjb25zdCBoYXNGb290ZXIgPSBfLmZpbHRlcihjb2x1bW5zLCBjb2wgPT4gXy5oYXMoY29sLCAnZm9vdGVyJykpLmxlbmd0aCA+IDA7XG5cbiAgICBjb25zdCB0YWJsZUNhcHRpb24gPSAoXG4gICAgICBjYXB0aW9uICYmIDxDYXB0aW9uIGJvb3RzdHJhcDQ9eyBib290c3RyYXA0IH0+eyBjYXB0aW9uIH08L0NhcHRpb24+XG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IHRhYmxlV3JhcHBlckNsYXNzIH0+XG4gICAgICAgIDx0YWJsZSBpZD17IGlkIH0gY2xhc3NOYW1lPXsgdGFibGVDbGFzcyB9PlxuICAgICAgICAgIHsgdGFibGVDYXB0aW9uIH1cbiAgICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgICBjb2x1bW5zPXsgY29sdW1ucyB9XG4gICAgICAgICAgICBjbGFzc05hbWU9eyB0aGlzLnByb3BzLmhlYWRlckNsYXNzZXMgfVxuICAgICAgICAgICAgd3JhcHBlckNsYXNzZXM9eyB0aGlzLnByb3BzLmhlYWRlcldyYXBwZXJDbGFzc2VzIH1cbiAgICAgICAgICAgIHNvcnRGaWVsZD17IHRoaXMucHJvcHMuc29ydEZpZWxkIH1cbiAgICAgICAgICAgIHNvcnRPcmRlcj17IHRoaXMucHJvcHMuc29ydE9yZGVyIH1cbiAgICAgICAgICAgIG9uU29ydD17IHRoaXMucHJvcHMub25Tb3J0IH1cbiAgICAgICAgICAgIGdsb2JhbFNvcnRDYXJldD17IHRoaXMucHJvcHMuc29ydCAmJiB0aGlzLnByb3BzLnNvcnQuc29ydENhcmV0IH1cbiAgICAgICAgICAgIG9uRmlsdGVyPXsgdGhpcy5wcm9wcy5vbkZpbHRlciB9XG4gICAgICAgICAgICBjdXJyRmlsdGVycz17IHRoaXMucHJvcHMuY3VyckZpbHRlcnMgfVxuICAgICAgICAgICAgb25FeHRlcm5hbEZpbHRlcj17IHRoaXMucHJvcHMub25FeHRlcm5hbEZpbHRlciB9XG4gICAgICAgICAgICBzZWxlY3RSb3c9eyBzZWxlY3RSb3cgfVxuICAgICAgICAgICAgZXhwYW5kUm93PXsgZXhwYW5kUm93IH1cbiAgICAgICAgICAgIGZpbHRlclBvc2l0aW9uPXsgZmlsdGVyUG9zaXRpb24gfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2hhc0ZpbHRlcnMgJiYgZmlsdGVyUG9zaXRpb24gIT09IENvbnN0LkZJTFRFUlNfUE9TSVRJT05fSU5MSU5FICYmIChcbiAgICAgICAgICAgIDxGaWx0ZXJzXG4gICAgICAgICAgICAgIGNvbHVtbnM9eyBjb2x1bW5zIH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgdGhpcy5wcm9wcy5maWx0ZXJzQ2xhc3NlcyB9XG4gICAgICAgICAgICAgIG9uU29ydD17IHRoaXMucHJvcHMub25Tb3J0IH1cbiAgICAgICAgICAgICAgb25GaWx0ZXI9eyB0aGlzLnByb3BzLm9uRmlsdGVyIH1cbiAgICAgICAgICAgICAgY3VyckZpbHRlcnM9eyB0aGlzLnByb3BzLmN1cnJGaWx0ZXJzIH1cbiAgICAgICAgICAgICAgZmlsdGVyUG9zaXRpb249eyB0aGlzLnByb3BzLmZpbHRlclBvc2l0aW9uIH1cbiAgICAgICAgICAgICAgb25FeHRlcm5hbEZpbHRlcj17IHRoaXMucHJvcHMub25FeHRlcm5hbEZpbHRlciB9XG4gICAgICAgICAgICAgIHNlbGVjdFJvdz17IHNlbGVjdFJvdyB9XG4gICAgICAgICAgICAgIGV4cGFuZFJvdz17IGV4cGFuZFJvdyB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPEJvZHlcbiAgICAgICAgICAgIGNsYXNzTmFtZT17IHRoaXMucHJvcHMuYm9keUNsYXNzZXMgfVxuICAgICAgICAgICAgZGF0YT17IHRoaXMuZ2V0RGF0YSgpIH1cbiAgICAgICAgICAgIGtleUZpZWxkPXsga2V5RmllbGQgfVxuICAgICAgICAgICAgdGFiSW5kZXhDZWxsPXsgdGFiSW5kZXhDZWxsIH1cbiAgICAgICAgICAgIGNvbHVtbnM9eyBjb2x1bW5zIH1cbiAgICAgICAgICAgIGlzRW1wdHk9eyB0aGlzLmlzRW1wdHkoKSB9XG4gICAgICAgICAgICB2aXNpYmxlQ29sdW1uU2l6ZT17IHRoaXMudmlzaWJsZUNvbHVtblNpemUoKSB9XG4gICAgICAgICAgICBub0RhdGFJbmRpY2F0aW9uPXsgbm9EYXRhSW5kaWNhdGlvbiB9XG4gICAgICAgICAgICBjZWxsRWRpdD17IGNlbGxFZGl0IH1cbiAgICAgICAgICAgIHNlbGVjdFJvdz17IHNlbGVjdFJvdyB9XG4gICAgICAgICAgICBleHBhbmRSb3c9eyBleHBhbmRSb3cgfVxuICAgICAgICAgICAgcm93U3R5bGU9eyByb3dTdHlsZSB9XG4gICAgICAgICAgICByb3dDbGFzc2VzPXsgcm93Q2xhc3NlcyB9XG4gICAgICAgICAgICByb3dFdmVudHM9eyByb3dFdmVudHMgfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2hhc0Zvb3RlciAmJiAoXG4gICAgICAgICAgICA8Rm9vdGVyXG4gICAgICAgICAgICAgIGRhdGE9eyB0aGlzLmdldERhdGEoKSB9XG4gICAgICAgICAgICAgIGNvbHVtbnM9eyBjb2x1bW5zIH1cbiAgICAgICAgICAgICAgc2VsZWN0Um93PXsgc2VsZWN0Um93IH1cbiAgICAgICAgICAgICAgZXhwYW5kUm93PXsgZXhwYW5kUm93IH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgdGhpcy5wcm9wcy5mb290ZXJDbGFzc2VzIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuQm9vdHN0cmFwVGFibGUucHJvcFR5cGVzID0ge1xuICBrZXlGaWVsZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBkYXRhOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIGJvb3RzdHJhcDQ6IFByb3BUeXBlcy5ib29sLFxuICByZW1vdGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ib29sLCBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHBhZ2luYXRpb246IFByb3BUeXBlcy5ib29sXG4gIH0pXSksXG4gIG5vRGF0YUluZGljYXRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMuZnVuY10pLFxuICBzdHJpcGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgYm9yZGVyZWQ6IFByb3BUeXBlcy5ib29sLFxuICBob3ZlcjogUHJvcFR5cGVzLmJvb2wsXG4gIHRhYkluZGV4Q2VsbDogUHJvcFR5cGVzLmJvb2wsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc2VzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBoZWFkZXJDbGFzc2VzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBib2R5Q2xhc3NlczogUHJvcFR5cGVzLnN0cmluZyxcbiAgd3JhcHBlckNsYXNzZXM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGhlYWRlcldyYXBwZXJDbGFzc2VzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjb25kZW5zZWQ6IFByb3BUeXBlcy5ib29sLFxuICBjYXB0aW9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMubm9kZSxcbiAgICBQcm9wVHlwZXMuc3RyaW5nXG4gIF0pLFxuICBwYWdpbmF0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxuICBmaWx0ZXI6IFByb3BUeXBlcy5vYmplY3QsXG4gIGNlbGxFZGl0OiBQcm9wVHlwZXMub2JqZWN0LFxuICBzZWxlY3RSb3c6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgbW9kZTogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAgIENvbnN0LlJPV19TRUxFQ1RfU0lOR0xFLFxuICAgICAgQ29uc3QuUk9XX1NFTEVDVF9NVUxUSVBMRSxcbiAgICAgIENvbnN0LlJPV19TRUxFQ1RfRElTQUJMRURcbiAgICBdKS5pc1JlcXVpcmVkLFxuICAgIGNsaWNrVG9TZWxlY3Q6IFByb3BUeXBlcy5ib29sLFxuICAgIGNsaWNrVG9FeHBhbmQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGNsaWNrVG9FZGl0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBoaWRlU2VsZWN0QWxsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TZWxlY3RBbGw6IFByb3BUeXBlcy5mdW5jLFxuICAgIHN0eWxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGNsYXNzZXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgbm9uU2VsZWN0YWJsZTogUHJvcFR5cGVzLmFycmF5LFxuICAgIG5vblNlbGVjdGFibGVTdHlsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBub25TZWxlY3RhYmxlQ2xhc3NlczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBiZ0NvbG9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGhpZGVTZWxlY3RDb2x1bW46IFByb3BUeXBlcy5ib29sLFxuICAgIHNlbGVjdGlvblJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBzZWxlY3Rpb25IZWFkZXJSZW5kZXJlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaGVhZGVyQ29sdW1uU3R5bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgc2VsZWN0Q29sdW1uU3R5bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgc2VsZWN0Q29sdW1uUG9zaXRpb246IFByb3BUeXBlcy5vbmVPZihbXG4gICAgICBDb25zdC5JTkRJQ0FUT1JfUE9TSVRJT05fTEVGVCxcbiAgICAgIENvbnN0LklORElDQVRPUl9QT1NJVElPTl9SSUdIVFxuICAgIF0pXG4gIH0pLFxuICBleHBhbmRSb3c6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgcmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIGV4cGFuZGVkOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgb25FeHBhbmQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uRXhwYW5kQWxsOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBub25FeHBhbmRhYmxlOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgc2hvd0V4cGFuZENvbHVtbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgb25seU9uZUV4cGFuZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgZXhwYW5kQnlDb2x1bW5Pbmx5OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBleHBhbmRDb2x1bW5SZW5kZXJlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZXhwYW5kSGVhZGVyQ29sdW1uUmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIGV4cGFuZENvbHVtblBvc2l0aW9uOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICAgQ29uc3QuSU5ESUNBVE9SX1BPU0lUSU9OX0xFRlQsXG4gICAgICBDb25zdC5JTkRJQ0FUT1JfUE9TSVRJT05fUklHSFRcbiAgICBdKSxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgcGFyZW50Q2xhc3NOYW1lOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pXG4gIH0pLFxuICByb3dTdHlsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgcm93RXZlbnRzOiBQcm9wVHlwZXMub2JqZWN0LFxuICByb3dDbGFzc2VzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICBmaWx0ZXJzQ2xhc3NlczogUHJvcFR5cGVzLnN0cmluZyxcbiAgZmlsdGVyUG9zaXRpb246IFByb3BUeXBlcy5vbmVPZihbXG4gICAgQ29uc3QuRklMVEVSU19QT1NJVElPTl9UT1AsXG4gICAgQ29uc3QuRklMVEVSU19QT1NJVElPTl9JTkxJTkUsXG4gICAgQ29uc3QuRklMVEVSU19QT1NJVElPTl9CT1RUT01cbiAgXSksXG4gIGZvb3RlckNsYXNzZXM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlZmF1bHRTb3J0ZWQ6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgZGF0YUZpZWxkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgb3JkZXI6IFByb3BUeXBlcy5vbmVPZihbQ29uc3QuU09SVF9ERVNDLCBDb25zdC5TT1JUX0FTQ10pLmlzUmVxdWlyZWRcbiAgfSkpLFxuICBzb3J0OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGRhdGFGaWVsZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvcmRlcjogUHJvcFR5cGVzLm9uZU9mKFtDb25zdC5TT1JUX0RFU0MsIENvbnN0LlNPUlRfQVNDXSksXG4gICAgc29ydEZ1bmM6IFByb3BUeXBlcy5mdW5jLFxuICAgIHNvcnRDYXJldDogUHJvcFR5cGVzLmZ1bmNcbiAgfSksXG4gIGRlZmF1bHRTb3J0RGlyZWN0aW9uOiBQcm9wVHlwZXMub25lT2YoW0NvbnN0LlNPUlRfREVTQywgQ29uc3QuU09SVF9BU0NdKSxcbiAgb3ZlcmxheTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uVGFibGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvblNvcnQ6IFByb3BUeXBlcy5mdW5jLFxuICBvbkZpbHRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRXh0ZXJuYWxGaWx0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBvbkRhdGFTaXplQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgLy8gSW5qZWN0IGZyb20gdG9vbGtpdFxuICBzZWFyY2g6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgc2VhcmNoVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzZWFyY2hDb250ZXh0OiBQcm9wVHlwZXMuZnVuY1xuICB9KSxcbiAgc2V0RGVwZW5kZW5jeU1vZHVsZXM6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5Cb290c3RyYXBUYWJsZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGJvb3RzdHJhcDQ6IGZhbHNlLFxuICByZW1vdGU6IGZhbHNlLFxuICBzdHJpcGVkOiBmYWxzZSxcbiAgYm9yZGVyZWQ6IHRydWUsXG4gIGhvdmVyOiBmYWxzZSxcbiAgY29uZGVuc2VkOiBmYWxzZSxcbiAgbm9EYXRhSW5kaWNhdGlvbjogbnVsbCxcbiAgc2VsZWN0Um93OiB7XG4gICAgbW9kZTogQ29uc3QuUk9XX1NFTEVDVF9ESVNBQkxFRCxcbiAgICBzZWxlY3RlZDogW10sXG4gICAgaGlkZVNlbGVjdENvbHVtbjogdHJ1ZVxuICB9LFxuICBleHBhbmRSb3c6IHtcbiAgICByZW5kZXJlcjogdW5kZWZpbmVkLFxuICAgIGV4cGFuZGVkOiBbXSxcbiAgICBub25FeHBhbmRhYmxlOiBbXVxuICB9LFxuICBjZWxsRWRpdDoge1xuICAgIG1vZGU6IG51bGwsXG4gICAgbm9uRWRpdGFibGVSb3dzOiBbXVxuICB9LFxuICBmaWx0ZXJQb3NpdGlvbjogQ29uc3QuRklMVEVSU19QT1NJVElPTl9JTkxJTkVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJvb3RzdHJhcFRhYmxlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvYm9vdHN0cmFwLXRhYmxlLmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fVxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvbldpdGhSZXNldCgpIHt9XG5lbXB0eUZ1bmN0aW9uV2l0aFJlc2V0LnJlc2V0V2FybmluZ0NhY2hlID0gZW1wdHlGdW5jdGlvbjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gc2hpbShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgIGlmIChzZWNyZXQgPT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAvLyBJdCBpcyBzdGlsbCBzYWZlIHdoZW4gY2FsbGVkIGZyb20gUmVhY3QuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXG4gICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAnVXNlIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICApO1xuICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIHRocm93IGVycjtcbiAgfTtcbiAgc2hpbS5pc1JlcXVpcmVkID0gc2hpbTtcbiAgZnVuY3Rpb24gZ2V0U2hpbSgpIHtcbiAgICByZXR1cm4gc2hpbTtcbiAgfTtcbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBzaGltLFxuICAgIGJvb2w6IHNoaW0sXG4gICAgZnVuYzogc2hpbSxcbiAgICBudW1iZXI6IHNoaW0sXG4gICAgb2JqZWN0OiBzaGltLFxuICAgIHN0cmluZzogc2hpbSxcbiAgICBzeW1ib2w6IHNoaW0sXG5cbiAgICBhbnk6IHNoaW0sXG4gICAgYXJyYXlPZjogZ2V0U2hpbSxcbiAgICBlbGVtZW50OiBzaGltLFxuICAgIGVsZW1lbnRUeXBlOiBzaGltLFxuICAgIGluc3RhbmNlT2Y6IGdldFNoaW0sXG4gICAgbm9kZTogc2hpbSxcbiAgICBvYmplY3RPZjogZ2V0U2hpbSxcbiAgICBvbmVPZjogZ2V0U2hpbSxcbiAgICBvbmVPZlR5cGU6IGdldFNoaW0sXG4gICAgc2hhcGU6IGdldFNoaW0sXG4gICAgZXhhY3Q6IGdldFNoaW0sXG5cbiAgICBjaGVja1Byb3BUeXBlczogZW1wdHlGdW5jdGlvbldpdGhSZXNldCxcbiAgICByZXNldFdhcm5pbmdDYWNoZTogZW1wdHlGdW5jdGlvblxuICB9O1xuXG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKiBlc2xpbnQgcmVhY3QvcmVxdWlyZS1kZWZhdWx0LXByb3BzOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IEhlYWRlckNlbGwgZnJvbSAnLi9oZWFkZXItY2VsbCc7XG5pbXBvcnQgU2VsZWN0aW9uSGVhZGVyQ2VsbCBmcm9tICcuL3Jvdy1zZWxlY3Rpb24vc2VsZWN0aW9uLWhlYWRlci1jZWxsJztcbmltcG9ydCBFeHBhbmRIZWFkZXJDZWxsIGZyb20gJy4vcm93LWV4cGFuZC9leHBhbmQtaGVhZGVyLWNlbGwnO1xuaW1wb3J0IHdpdGhIZWFkZXJTZWxlY3Rpb24gZnJvbSAnLi9yb3ctc2VsZWN0aW9uL3NlbGVjdGlvbi1oZWFkZXItY2VsbC1jb25zdW1lcic7XG5pbXBvcnQgd2l0aEhlYWRlckV4cGFuc2lvbiBmcm9tICcuL3Jvdy1leHBhbmQvZXhwYW5kLWhlYWRlci1jZWxsLWNvbnN1bWVyJztcbmltcG9ydCBDb25zdCBmcm9tICcuL2NvbnN0JztcblxuY29uc3QgSGVhZGVyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjbGFzc05hbWUsXG4gICAgY29sdW1ucyxcbiAgICBvblNvcnQsXG4gICAgb25GaWx0ZXIsXG4gICAgc29ydEZpZWxkLFxuICAgIHNvcnRPcmRlcixcbiAgICBzZWxlY3RSb3csXG4gICAgZXhwYW5kUm93LFxuICAgIGN1cnJGaWx0ZXJzLFxuICAgIG9uRXh0ZXJuYWxGaWx0ZXIsXG4gICAgZmlsdGVyUG9zaXRpb24sXG4gICAgZ2xvYmFsU29ydENhcmV0LFxuICAgIHdyYXBwZXJDbGFzc2VzXG4gIH0gPSBwcm9wcztcblxuICBsZXQgU2VsZWN0aW9uSGVhZGVyQ2VsbENvbXAgPSAoKSA9PiBudWxsO1xuICBsZXQgRXhwYW5zaW9uSGVhZGVyQ2VsbENvbXAgPSAoKSA9PiBudWxsO1xuXG4gIGlmIChleHBhbmRSb3cuc2hvd0V4cGFuZENvbHVtbikge1xuICAgIEV4cGFuc2lvbkhlYWRlckNlbGxDb21wID0gd2l0aEhlYWRlckV4cGFuc2lvbihFeHBhbmRIZWFkZXJDZWxsKTtcbiAgfVxuXG4gIGlmIChzZWxlY3RSb3cpIHtcbiAgICBTZWxlY3Rpb25IZWFkZXJDZWxsQ29tcCA9IHdpdGhIZWFkZXJTZWxlY3Rpb24oU2VsZWN0aW9uSGVhZGVyQ2VsbCk7XG4gIH1cblxuICBjb25zdCBpc1JlbmRlckZ1bmN0aW9uQ29sdW1uSW5MZWZ0ID0gKFxuICAgIHBvc2l0aW9uID0gQ29uc3QuSU5ESUNBVE9SX1BPU0lUSU9OX0xFRlRcbiAgKSA9PiBwb3NpdGlvbiA9PT0gQ29uc3QuSU5ESUNBVE9SX1BPU0lUSU9OX0xFRlQ7XG5cbiAgY29uc3QgY2hpbGRyZW5zID0gW1xuICAgIGNvbHVtbnMubWFwKChjb2x1bW4sIGkpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJTb3J0ID0gY29sdW1uLmRhdGFGaWVsZCA9PT0gc29ydEZpZWxkO1xuICAgICAgY29uc3QgaXNMYXN0U29ydGluZyA9IGNvbHVtbi5kYXRhRmllbGQgPT09IHNvcnRGaWVsZDtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEhlYWRlckNlbGxcbiAgICAgICAgICBpbmRleD17IGkgfVxuICAgICAgICAgIGtleT17IGNvbHVtbi5kYXRhRmllbGQgfVxuICAgICAgICAgIGNvbHVtbj17IGNvbHVtbiB9XG4gICAgICAgICAgb25Tb3J0PXsgb25Tb3J0IH1cbiAgICAgICAgICBzb3J0aW5nPXsgY3VyclNvcnQgfVxuICAgICAgICAgIHNvcnRPcmRlcj17IHNvcnRPcmRlciB9XG4gICAgICAgICAgZ2xvYmFsU29ydENhcmV0PXsgZ2xvYmFsU29ydENhcmV0IH1cbiAgICAgICAgICBpc0xhc3RTb3J0aW5nPXsgaXNMYXN0U29ydGluZyB9XG4gICAgICAgICAgb25GaWx0ZXI9eyBvbkZpbHRlciB9XG4gICAgICAgICAgY3VyckZpbHRlcnM9eyBjdXJyRmlsdGVycyB9XG4gICAgICAgICAgb25FeHRlcm5hbEZpbHRlcj17IG9uRXh0ZXJuYWxGaWx0ZXIgfVxuICAgICAgICAgIGZpbHRlclBvc2l0aW9uPXsgZmlsdGVyUG9zaXRpb24gfVxuICAgICAgICAvPik7XG4gICAgfSlcbiAgXTtcblxuICBpZiAoIXNlbGVjdFJvdy5oaWRlU2VsZWN0Q29sdW1uKSB7XG4gICAgaWYgKGlzUmVuZGVyRnVuY3Rpb25Db2x1bW5JbkxlZnQoc2VsZWN0Um93LnNlbGVjdENvbHVtblBvc2l0aW9uKSkge1xuICAgICAgY2hpbGRyZW5zLnVuc2hpZnQoPFNlbGVjdGlvbkhlYWRlckNlbGxDb21wIGtleT1cInNlbGVjdGlvblwiIC8+KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hpbGRyZW5zLnB1c2goPFNlbGVjdGlvbkhlYWRlckNlbGxDb21wIGtleT1cInNlbGVjdGlvblwiIC8+KTtcbiAgICB9XG4gIH1cblxuICBpZiAoZXhwYW5kUm93LnNob3dFeHBhbmRDb2x1bW4pIHtcbiAgICBpZiAoaXNSZW5kZXJGdW5jdGlvbkNvbHVtbkluTGVmdChleHBhbmRSb3cuZXhwYW5kQ29sdW1uUG9zaXRpb24pKSB7XG4gICAgICBjaGlsZHJlbnMudW5zaGlmdCg8RXhwYW5zaW9uSGVhZGVyQ2VsbENvbXAga2V5PVwiZXhwYW5zaW9uXCIgLz4pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGlsZHJlbnMucHVzaCg8RXhwYW5zaW9uSGVhZGVyQ2VsbENvbXAga2V5PVwiZXhwYW5zaW9uXCIgLz4pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHRoZWFkIGNsYXNzTmFtZT17IHdyYXBwZXJDbGFzc2VzIH0+XG4gICAgICA8dHIgY2xhc3NOYW1lPXsgY2xhc3NOYW1lIH0+XG4gICAgICAgIHsgY2hpbGRyZW5zIH1cbiAgICAgIDwvdHI+XG4gICAgPC90aGVhZD5cbiAgKTtcbn07XG5cbkhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIGNvbHVtbnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBvblNvcnQ6IFByb3BUeXBlcy5mdW5jLFxuICBvbkZpbHRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIHNvcnRGaWVsZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgc29ydE9yZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzZWxlY3RSb3c6IFByb3BUeXBlcy5vYmplY3QsXG4gIGN1cnJGaWx0ZXJzOiBQcm9wVHlwZXMub2JqZWN0LFxuICBvbkV4dGVybmFsRmlsdGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgZ2xvYmFsU29ydENhcmV0OiBQcm9wVHlwZXMuZnVuYyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB3cmFwcGVyQ2xhc3NlczogUHJvcFR5cGVzLnN0cmluZyxcbiAgZXhwYW5kUm93OiBQcm9wVHlwZXMub2JqZWN0LFxuICBmaWx0ZXJQb3NpdGlvbjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBDb25zdC5GSUxURVJTX1BPU0lUSU9OX1RPUCxcbiAgICBDb25zdC5GSUxURVJTX1BPU0lUSU9OX0lOTElORSxcbiAgICBDb25zdC5GSUxURVJTX1BPU0lUSU9OX0JPVFRPTVxuICBdKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvaGVhZGVyLmpzIiwiLyogZXNsaW50IHJlYWN0L3JlcXVpcmUtZGVmYXVsdC1wcm9wczogMCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBDb25zdCBmcm9tICcuL2NvbnN0JztcbmltcG9ydCBTb3J0U3ltYm9sIGZyb20gJy4vc29ydC9zeW1ib2wnO1xuaW1wb3J0IFNvcnRDYXJldCBmcm9tICcuL3NvcnQvY2FyZXQnO1xuaW1wb3J0IF8gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgZXZlbnREZWxlZ2F0ZXIgZnJvbSAnLi9jZWxsLWV2ZW50LWRlbGVnYXRlcic7XG5cblxuY2xhc3MgSGVhZGVyQ2VsbCBleHRlbmRzIGV2ZW50RGVsZWdhdGVyKFJlYWN0LkNvbXBvbmVudCkge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY29sdW1uLFxuICAgICAgaW5kZXgsXG4gICAgICBvblNvcnQsXG4gICAgICBzb3J0aW5nLFxuICAgICAgc29ydE9yZGVyLFxuICAgICAgaXNMYXN0U29ydGluZyxcbiAgICAgIG9uRmlsdGVyLFxuICAgICAgY3VyckZpbHRlcnMsXG4gICAgICBmaWx0ZXJQb3NpdGlvbixcbiAgICAgIG9uRXh0ZXJuYWxGaWx0ZXIsXG4gICAgICBnbG9iYWxTb3J0Q2FyZXRcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHtcbiAgICAgIHRleHQsXG4gICAgICBzb3J0LFxuICAgICAgc29ydENhcmV0LFxuICAgICAgZmlsdGVyLFxuICAgICAgZmlsdGVyUmVuZGVyZXIsXG4gICAgICBoZWFkZXJUaXRsZSxcbiAgICAgIGhlYWRlckFsaWduLFxuICAgICAgaGVhZGVyRm9ybWF0dGVyLFxuICAgICAgaGVhZGVyRXZlbnRzLFxuICAgICAgaGVhZGVyQ2xhc3NlcyxcbiAgICAgIGhlYWRlclN0eWxlLFxuICAgICAgaGVhZGVyQXR0cnMsXG4gICAgICBoZWFkZXJTb3J0aW5nQ2xhc3NlcyxcbiAgICAgIGhlYWRlclNvcnRpbmdTdHlsZVxuICAgIH0gPSBjb2x1bW47XG5cbiAgICBjb25zdCBzb3J0Q2FyZXRmdW5jID0gc29ydENhcmV0IHx8IGdsb2JhbFNvcnRDYXJldDtcblxuICAgIGNvbnN0IGRlbGVnYXRlRXZlbnRzID0gdGhpcy5kZWxlZ2F0ZShoZWFkZXJFdmVudHMpO1xuXG4gICAgY29uc3QgY3VzdG9tQXR0cnMgPSBfLmlzRnVuY3Rpb24oaGVhZGVyQXR0cnMpXG4gICAgICA/IGhlYWRlckF0dHJzKGNvbHVtbiwgaW5kZXgpXG4gICAgICA6IChoZWFkZXJBdHRycyB8fCB7fSk7XG5cbiAgICBjb25zdCBjZWxsQXR0cnMgPSB7XG4gICAgICAuLi5jdXN0b21BdHRycyxcbiAgICAgIC4uLmRlbGVnYXRlRXZlbnRzLFxuICAgICAgdGFiSW5kZXg6IF8uaXNEZWZpbmVkKGN1c3RvbUF0dHJzLnRhYkluZGV4KSA/IGN1c3RvbUF0dHJzLnRhYkluZGV4IDogMFxuICAgIH07XG5cbiAgICBsZXQgc29ydFN5bWJvbDtcbiAgICBsZXQgZmlsdGVyRWxtO1xuICAgIGxldCBjZWxsU3R5bGUgPSB7fTtcbiAgICBsZXQgY2VsbENsYXNzZXMgPSBfLmlzRnVuY3Rpb24oaGVhZGVyQ2xhc3NlcykgPyBoZWFkZXJDbGFzc2VzKGNvbHVtbiwgaW5kZXgpIDogaGVhZGVyQ2xhc3NlcztcblxuICAgIGlmIChoZWFkZXJTdHlsZSkge1xuICAgICAgY2VsbFN0eWxlID0gXy5pc0Z1bmN0aW9uKGhlYWRlclN0eWxlKSA/IGhlYWRlclN0eWxlKGNvbHVtbiwgaW5kZXgpIDogaGVhZGVyU3R5bGU7XG4gICAgICBjZWxsU3R5bGUgPSBjZWxsU3R5bGUgPyB7IC4uLmNlbGxTdHlsZSB9IDogY2VsbFN0eWxlO1xuICAgIH1cblxuICAgIGlmIChoZWFkZXJUaXRsZSkge1xuICAgICAgY2VsbEF0dHJzLnRpdGxlID0gXy5pc0Z1bmN0aW9uKGhlYWRlclRpdGxlKSA/IGhlYWRlclRpdGxlKGNvbHVtbiwgaW5kZXgpIDogdGV4dDtcbiAgICB9XG5cbiAgICBpZiAoaGVhZGVyQWxpZ24pIHtcbiAgICAgIGNlbGxTdHlsZS50ZXh0QWxpZ24gPSBfLmlzRnVuY3Rpb24oaGVhZGVyQWxpZ24pID8gaGVhZGVyQWxpZ24oY29sdW1uLCBpbmRleCkgOiBoZWFkZXJBbGlnbjtcbiAgICB9XG5cbiAgICBpZiAoc29ydCkge1xuICAgICAgY29uc3QgY3VzdG9tQ2xpY2sgPSBjZWxsQXR0cnMub25DbGljaztcbiAgICAgIGNlbGxBdHRyc1snYXJpYS1sYWJlbCddID0gc29ydGluZyA/IGAke3RleHR9IHNvcnQgJHtzb3J0T3JkZXJ9YCA6IGAke3RleHR9IHNvcnRhYmxlYDtcbiAgICAgIGNlbGxBdHRycy5vbktleVVwID0gKGUpID0+IHtcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgb25Tb3J0KGNvbHVtbik7XG4gICAgICAgICAgaWYgKF8uaXNGdW5jdGlvbihjdXN0b21DbGljaykpIGN1c3RvbUNsaWNrKGUpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY2VsbEF0dHJzLm9uQ2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICBvblNvcnQoY29sdW1uKTtcbiAgICAgICAgaWYgKF8uaXNGdW5jdGlvbihjdXN0b21DbGljaykpIGN1c3RvbUNsaWNrKGUpO1xuICAgICAgfTtcbiAgICAgIGNlbGxBdHRycy5jbGFzc05hbWUgPSBjcyhjZWxsQXR0cnMuY2xhc3NOYW1lLCAnc29ydGFibGUnKTtcblxuICAgICAgaWYgKHNvcnRpbmcpIHtcbiAgICAgICAgc29ydFN5bWJvbCA9IHNvcnRDYXJldGZ1bmMgP1xuICAgICAgICAgIHNvcnRDYXJldGZ1bmMoc29ydE9yZGVyLCBjb2x1bW4pIDpcbiAgICAgICAgICA8U29ydENhcmV0IG9yZGVyPXsgc29ydE9yZGVyIH0gLz47XG5cbiAgICAgICAgLy8gYXBwZW5kIGN1c3RvbWl6ZWQgY2xhc3NlcyBvciBzdHlsZSBpZiB0YWJsZSB3YXMgc29ydGluZyBiYXNlZCBvbiB0aGUgY3VycmVudCBjb2x1bW4uXG4gICAgICAgIGNlbGxDbGFzc2VzID0gY3MoXG4gICAgICAgICAgY2VsbENsYXNzZXMsXG4gICAgICAgICAgXy5pc0Z1bmN0aW9uKGhlYWRlclNvcnRpbmdDbGFzc2VzKVxuICAgICAgICAgICAgPyBoZWFkZXJTb3J0aW5nQ2xhc3Nlcyhjb2x1bW4sIHNvcnRPcmRlciwgaXNMYXN0U29ydGluZywgaW5kZXgpXG4gICAgICAgICAgICA6IGhlYWRlclNvcnRpbmdDbGFzc2VzXG4gICAgICAgICk7XG5cbiAgICAgICAgY2VsbFN0eWxlID0ge1xuICAgICAgICAgIC4uLmNlbGxTdHlsZSxcbiAgICAgICAgICAuLi5fLmlzRnVuY3Rpb24oaGVhZGVyU29ydGluZ1N0eWxlKVxuICAgICAgICAgICAgPyBoZWFkZXJTb3J0aW5nU3R5bGUoY29sdW1uLCBzb3J0T3JkZXIsIGlzTGFzdFNvcnRpbmcsIGluZGV4KVxuICAgICAgICAgICAgOiBoZWFkZXJTb3J0aW5nU3R5bGVcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNvcnRTeW1ib2wgPSBzb3J0Q2FyZXRmdW5jID8gc29ydENhcmV0ZnVuYyh1bmRlZmluZWQsIGNvbHVtbikgOiA8U29ydFN5bWJvbCAvPjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2VsbENsYXNzZXMpIGNlbGxBdHRycy5jbGFzc05hbWUgPSBjcyhjZWxsQXR0cnMuY2xhc3NOYW1lLCBjZWxsQ2xhc3Nlcyk7XG4gICAgaWYgKCFfLmlzRW1wdHlPYmplY3QoY2VsbFN0eWxlKSkgY2VsbEF0dHJzLnN0eWxlID0gY2VsbFN0eWxlO1xuXG4gICAgaWYgKGZpbHRlclBvc2l0aW9uID09PSBDb25zdC5GSUxURVJTX1BPU0lUSU9OX0lOTElORSkge1xuICAgICAgaWYgKGZpbHRlclJlbmRlcmVyKSB7XG4gICAgICAgIGNvbnN0IG9uQ3VzdG9tRmlsdGVyID0gb25FeHRlcm5hbEZpbHRlcihjb2x1bW4sIGZpbHRlci5wcm9wcy50eXBlKTtcbiAgICAgICAgZmlsdGVyRWxtID0gZmlsdGVyUmVuZGVyZXIob25DdXN0b21GaWx0ZXIsIGNvbHVtbik7XG4gICAgICB9IGVsc2UgaWYgKGZpbHRlcikge1xuICAgICAgICBmaWx0ZXJFbG0gPSAoXG4gICAgICAgICAgPGZpbHRlci5GaWx0ZXJcbiAgICAgICAgICAgIHsgLi4uZmlsdGVyLnByb3BzIH1cbiAgICAgICAgICAgIGZpbHRlclN0YXRlPXsgY3VyckZpbHRlcnNbY29sdW1uLmRhdGFGaWVsZF0gfVxuICAgICAgICAgICAgb25GaWx0ZXI9eyBvbkZpbHRlciB9XG4gICAgICAgICAgICBjb2x1bW49eyBjb2x1bW4gfVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2hpbGRyZW4gPSBoZWFkZXJGb3JtYXR0ZXIgP1xuICAgICAgaGVhZGVyRm9ybWF0dGVyKGNvbHVtbiwgaW5kZXgsIHsgc29ydEVsZW1lbnQ6IHNvcnRTeW1ib2wsIGZpbHRlckVsZW1lbnQ6IGZpbHRlckVsbSB9KSA6XG4gICAgICB0ZXh0O1xuXG4gICAgaWYgKGhlYWRlckZvcm1hdHRlcikge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RoJywgY2VsbEF0dHJzLCBjaGlsZHJlbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RoJywgY2VsbEF0dHJzLCBjaGlsZHJlbiwgc29ydFN5bWJvbCwgZmlsdGVyRWxtKTtcbiAgfVxufVxuXG5IZWFkZXJDZWxsLnByb3BUeXBlcyA9IHtcbiAgY29sdW1uOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGRhdGFGaWVsZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB0eXBlOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICAgQ29uc3QuVFlQRV9TVFJJTkcsXG4gICAgICBDb25zdC5UWVBFX05VTUJFUixcbiAgICAgIENvbnN0LlRZUEVfQk9PTEVBTixcbiAgICAgIENvbnN0LlRZUEVfREFURVxuICAgIF0pLFxuICAgIGlzRHVtbXlGaWVsZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaGlkZGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBoZWFkZXJGb3JtYXR0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIGZvcm1hdHRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZm9ybWF0RXh0cmFEYXRhOiBQcm9wVHlwZXMuYW55LFxuICAgIGhlYWRlckNsYXNzZXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgY2xhc3NlczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBoZWFkZXJTdHlsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBzdHlsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBoZWFkZXJUaXRsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmJvb2wsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgdGl0bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ib29sLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGhlYWRlckV2ZW50czogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBldmVudHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgaGVhZGVyQWxpZ246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgYWxpZ246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgaGVhZGVyQXR0cnM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgYXR0cnM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgc29ydDogUHJvcFR5cGVzLmJvb2wsXG4gICAgc29ydEZ1bmM6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uU29ydDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZWRpdG9yOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGVkaXRhYmxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBlZGl0Q2VsbFN0eWxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGVkaXRDZWxsQ2xhc3NlczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBlZGl0b3JTdHlsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBlZGl0b3JDbGFzc2VzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGVkaXRvclJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB2YWxpZGF0b3I6IFByb3BUeXBlcy5mdW5jLFxuICAgIGZpbHRlcjogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBmaWx0ZXJSZW5kZXJlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZmlsdGVyVmFsdWU6IFByb3BUeXBlcy5mdW5jLFxuICAgIHNlYXJjaGFibGU6IFByb3BUeXBlcy5ib29sXG4gIH0pLmlzUmVxdWlyZWQsXG4gIGluZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG9uU29ydDogUHJvcFR5cGVzLmZ1bmMsXG4gIHNvcnRpbmc6IFByb3BUeXBlcy5ib29sLFxuICBzb3J0T3JkZXI6IFByb3BUeXBlcy5vbmVPZihbQ29uc3QuU09SVF9BU0MsIENvbnN0LlNPUlRfREVTQ10pLFxuICBzb3J0Q2FyZXQ6IFByb3BUeXBlcy5mdW5jLFxuICBpc0xhc3RTb3J0aW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25GaWx0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBmaWx0ZXJQb3NpdGlvbjogUHJvcFR5cGVzLm9uZU9mKFtDb25zdC5GSUxURVJTX1BPU0lUSU9OX0lOTElORSxcbiAgICBDb25zdC5GSUxURVJTX1BPU0lUSU9OX0JPVFRPTSwgQ29uc3QuRklMVEVSU19QT1NJVElPTl9UT1BdKSxcbiAgY3VyckZpbHRlcnM6IFByb3BUeXBlcy5vYmplY3QsXG4gIG9uRXh0ZXJuYWxGaWx0ZXI6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJDZWxsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvaGVhZGVyLWNlbGwuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm9vdHN0cmFwQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL2Jvb3RzdHJhcCc7XG5cbmNvbnN0IFNvcnRTeW1ib2wgPSAoKSA9PiAoXG4gIDxCb290c3RyYXBDb250ZXh0LkNvbnN1bWVyPlxuICAgIHtcbiAgICAgICh7IGJvb3RzdHJhcDQgfSkgPT4gKGJvb3RzdHJhcDQgPyAoXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9yZGVyLTRcIiAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3JkZXJcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FyZXRcIiAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkcm9wdXBcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcmV0XCIgLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICkpXG4gICAgfVxuICA8L0Jvb3RzdHJhcENvbnRleHQuQ29uc3VtZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTb3J0U3ltYm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvc29ydC9zeW1ib2wuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IENvbnN0IGZyb20gJy4uL2NvbnN0JztcbmltcG9ydCB7IEJvb3RzdHJhcENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9ib290c3RyYXAnO1xuXG5cbmNvbnN0IFNvcnRDYXJldCA9ICh7IG9yZGVyIH0pID0+IHtcbiAgY29uc3Qgb3JkZXJDbGFzcyA9IGNzKCdyZWFjdC1ib290c3RyYXAtdGFibGUtc29ydC1vcmRlcicsIHtcbiAgICBkcm9wdXA6IG9yZGVyID09PSBDb25zdC5TT1JUX0FTQ1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxCb290c3RyYXBDb250ZXh0LkNvbnN1bWVyPlxuICAgICAge1xuICAgICAgICAoeyBib290c3RyYXA0IH0pID0+IChib290c3RyYXA0ID8gKFxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17IGBjYXJldC00LSR7b3JkZXJ9YCB9IC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsgb3JkZXJDbGFzcyB9PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FyZXRcIiAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKSlcbiAgICAgIH1cbiAgICA8L0Jvb3RzdHJhcENvbnRleHQuQ29uc3VtZXI+XG4gICk7XG59O1xuXG5Tb3J0Q2FyZXQucHJvcFR5cGVzID0ge1xuICBvcmRlcjogUHJvcFR5cGVzLm9uZU9mKFtDb25zdC5TT1JUX0FTQywgQ29uc3QuU09SVF9ERVNDXSkuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU29ydENhcmV0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvc29ydC9jYXJldC5qcyIsIi8vICAgICBVbmRlcnNjb3JlLmpzIDEuOS4xXG4vLyAgICAgaHR0cDovL3VuZGVyc2NvcmVqcy5vcmdcbi8vICAgICAoYykgMjAwOS0yMDE4IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4vLyAgICAgVW5kZXJzY29yZSBtYXkgYmUgZnJlZWx5IGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cblxuKGZ1bmN0aW9uKCkge1xuXG4gIC8vIEJhc2VsaW5lIHNldHVwXG4gIC8vIC0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gRXN0YWJsaXNoIHRoZSByb290IG9iamVjdCwgYHdpbmRvd2AgKGBzZWxmYCkgaW4gdGhlIGJyb3dzZXIsIGBnbG9iYWxgXG4gIC8vIG9uIHRoZSBzZXJ2ZXIsIG9yIGB0aGlzYCBpbiBzb21lIHZpcnR1YWwgbWFjaGluZXMuIFdlIHVzZSBgc2VsZmBcbiAgLy8gaW5zdGVhZCBvZiBgd2luZG93YCBmb3IgYFdlYldvcmtlcmAgc3VwcG9ydC5cbiAgdmFyIHJvb3QgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmLnNlbGYgPT09IHNlbGYgJiYgc2VsZiB8fFxuICAgICAgICAgICAgdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwuZ2xvYmFsID09PSBnbG9iYWwgJiYgZ2xvYmFsIHx8XG4gICAgICAgICAgICB0aGlzIHx8XG4gICAgICAgICAgICB7fTtcblxuICAvLyBTYXZlIHRoZSBwcmV2aW91cyB2YWx1ZSBvZiB0aGUgYF9gIHZhcmlhYmxlLlxuICB2YXIgcHJldmlvdXNVbmRlcnNjb3JlID0gcm9vdC5fO1xuXG4gIC8vIFNhdmUgYnl0ZXMgaW4gdGhlIG1pbmlmaWVkIChidXQgbm90IGd6aXBwZWQpIHZlcnNpb246XG4gIHZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlLCBPYmpQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBTeW1ib2xQcm90byA9IHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnID8gU3ltYm9sLnByb3RvdHlwZSA6IG51bGw7XG5cbiAgLy8gQ3JlYXRlIHF1aWNrIHJlZmVyZW5jZSB2YXJpYWJsZXMgZm9yIHNwZWVkIGFjY2VzcyB0byBjb3JlIHByb3RvdHlwZXMuXG4gIHZhciBwdXNoID0gQXJyYXlQcm90by5wdXNoLFxuICAgICAgc2xpY2UgPSBBcnJheVByb3RvLnNsaWNlLFxuICAgICAgdG9TdHJpbmcgPSBPYmpQcm90by50b1N0cmluZyxcbiAgICAgIGhhc093blByb3BlcnR5ID0gT2JqUHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbiAgLy8gQWxsICoqRUNNQVNjcmlwdCA1KiogbmF0aXZlIGZ1bmN0aW9uIGltcGxlbWVudGF0aW9ucyB0aGF0IHdlIGhvcGUgdG8gdXNlXG4gIC8vIGFyZSBkZWNsYXJlZCBoZXJlLlxuICB2YXIgbmF0aXZlSXNBcnJheSA9IEFycmF5LmlzQXJyYXksXG4gICAgICBuYXRpdmVLZXlzID0gT2JqZWN0LmtleXMsXG4gICAgICBuYXRpdmVDcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xuXG4gIC8vIE5ha2VkIGZ1bmN0aW9uIHJlZmVyZW5jZSBmb3Igc3Vycm9nYXRlLXByb3RvdHlwZS1zd2FwcGluZy5cbiAgdmFyIEN0b3IgPSBmdW5jdGlvbigpe307XG5cbiAgLy8gQ3JlYXRlIGEgc2FmZSByZWZlcmVuY2UgdG8gdGhlIFVuZGVyc2NvcmUgb2JqZWN0IGZvciB1c2UgYmVsb3cuXG4gIHZhciBfID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKG9iaiBpbnN0YW5jZW9mIF8pIHJldHVybiBvYmo7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIF8pKSByZXR1cm4gbmV3IF8ob2JqKTtcbiAgICB0aGlzLl93cmFwcGVkID0gb2JqO1xuICB9O1xuXG4gIC8vIEV4cG9ydCB0aGUgVW5kZXJzY29yZSBvYmplY3QgZm9yICoqTm9kZS5qcyoqLCB3aXRoXG4gIC8vIGJhY2t3YXJkcy1jb21wYXRpYmlsaXR5IGZvciB0aGVpciBvbGQgbW9kdWxlIEFQSS4gSWYgd2UncmUgaW5cbiAgLy8gdGhlIGJyb3dzZXIsIGFkZCBgX2AgYXMgYSBnbG9iYWwgb2JqZWN0LlxuICAvLyAoYG5vZGVUeXBlYCBpcyBjaGVja2VkIHRvIGVuc3VyZSB0aGF0IGBtb2R1bGVgXG4gIC8vIGFuZCBgZXhwb3J0c2AgYXJlIG5vdCBIVE1MIGVsZW1lbnRzLilcbiAgaWYgKHR5cGVvZiBleHBvcnRzICE9ICd1bmRlZmluZWQnICYmICFleHBvcnRzLm5vZGVUeXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgIT0gJ3VuZGVmaW5lZCcgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gXztcbiAgICB9XG4gICAgZXhwb3J0cy5fID0gXztcbiAgfSBlbHNlIHtcbiAgICByb290Ll8gPSBfO1xuICB9XG5cbiAgLy8gQ3VycmVudCB2ZXJzaW9uLlxuICBfLlZFUlNJT04gPSAnMS45LjEnO1xuXG4gIC8vIEludGVybmFsIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBlZmZpY2llbnQgKGZvciBjdXJyZW50IGVuZ2luZXMpIHZlcnNpb25cbiAgLy8gb2YgdGhlIHBhc3NlZC1pbiBjYWxsYmFjaywgdG8gYmUgcmVwZWF0ZWRseSBhcHBsaWVkIGluIG90aGVyIFVuZGVyc2NvcmVcbiAgLy8gZnVuY3Rpb25zLlxuICB2YXIgb3B0aW1pemVDYiA9IGZ1bmN0aW9uKGZ1bmMsIGNvbnRleHQsIGFyZ0NvdW50KSB7XG4gICAgaWYgKGNvbnRleHQgPT09IHZvaWQgMCkgcmV0dXJuIGZ1bmM7XG4gICAgc3dpdGNoIChhcmdDb3VudCA9PSBudWxsID8gMyA6IGFyZ0NvdW50KSB7XG4gICAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gZnVuYy5jYWxsKGNvbnRleHQsIHZhbHVlKTtcbiAgICAgIH07XG4gICAgICAvLyBUaGUgMi1hcmd1bWVudCBjYXNlIGlzIG9taXR0ZWQgYmVjYXVzZSB3ZeKAmXJlIG5vdCB1c2luZyBpdC5cbiAgICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbikge1xuICAgICAgICByZXR1cm4gZnVuYy5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbik7XG4gICAgICB9O1xuICAgICAgY2FzZSA0OiByZXR1cm4gZnVuY3Rpb24oYWNjdW11bGF0b3IsIHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbikge1xuICAgICAgICByZXR1cm4gZnVuYy5jYWxsKGNvbnRleHQsIGFjY3VtdWxhdG9yLCB2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pO1xuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBidWlsdGluSXRlcmF0ZWU7XG5cbiAgLy8gQW4gaW50ZXJuYWwgZnVuY3Rpb24gdG8gZ2VuZXJhdGUgY2FsbGJhY2tzIHRoYXQgY2FuIGJlIGFwcGxpZWQgdG8gZWFjaFxuICAvLyBlbGVtZW50IGluIGEgY29sbGVjdGlvbiwgcmV0dXJuaW5nIHRoZSBkZXNpcmVkIHJlc3VsdCDigJQgZWl0aGVyIGBpZGVudGl0eWAsXG4gIC8vIGFuIGFyYml0cmFyeSBjYWxsYmFjaywgYSBwcm9wZXJ0eSBtYXRjaGVyLCBvciBhIHByb3BlcnR5IGFjY2Vzc29yLlxuICB2YXIgY2IgPSBmdW5jdGlvbih2YWx1ZSwgY29udGV4dCwgYXJnQ291bnQpIHtcbiAgICBpZiAoXy5pdGVyYXRlZSAhPT0gYnVpbHRpbkl0ZXJhdGVlKSByZXR1cm4gXy5pdGVyYXRlZSh2YWx1ZSwgY29udGV4dCk7XG4gICAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiBfLmlkZW50aXR5O1xuICAgIGlmIChfLmlzRnVuY3Rpb24odmFsdWUpKSByZXR1cm4gb3B0aW1pemVDYih2YWx1ZSwgY29udGV4dCwgYXJnQ291bnQpO1xuICAgIGlmIChfLmlzT2JqZWN0KHZhbHVlKSAmJiAhXy5pc0FycmF5KHZhbHVlKSkgcmV0dXJuIF8ubWF0Y2hlcih2YWx1ZSk7XG4gICAgcmV0dXJuIF8ucHJvcGVydHkodmFsdWUpO1xuICB9O1xuXG4gIC8vIEV4dGVybmFsIHdyYXBwZXIgZm9yIG91ciBjYWxsYmFjayBnZW5lcmF0b3IuIFVzZXJzIG1heSBjdXN0b21pemVcbiAgLy8gYF8uaXRlcmF0ZWVgIGlmIHRoZXkgd2FudCBhZGRpdGlvbmFsIHByZWRpY2F0ZS9pdGVyYXRlZSBzaG9ydGhhbmQgc3R5bGVzLlxuICAvLyBUaGlzIGFic3RyYWN0aW9uIGhpZGVzIHRoZSBpbnRlcm5hbC1vbmx5IGFyZ0NvdW50IGFyZ3VtZW50LlxuICBfLml0ZXJhdGVlID0gYnVpbHRpbkl0ZXJhdGVlID0gZnVuY3Rpb24odmFsdWUsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gY2IodmFsdWUsIGNvbnRleHQsIEluZmluaXR5KTtcbiAgfTtcblxuICAvLyBTb21lIGZ1bmN0aW9ucyB0YWtlIGEgdmFyaWFibGUgbnVtYmVyIG9mIGFyZ3VtZW50cywgb3IgYSBmZXcgZXhwZWN0ZWRcbiAgLy8gYXJndW1lbnRzIGF0IHRoZSBiZWdpbm5pbmcgYW5kIHRoZW4gYSB2YXJpYWJsZSBudW1iZXIgb2YgdmFsdWVzIHRvIG9wZXJhdGVcbiAgLy8gb24uIFRoaXMgaGVscGVyIGFjY3VtdWxhdGVzIGFsbCByZW1haW5pbmcgYXJndW1lbnRzIHBhc3QgdGhlIGZ1bmN0aW9u4oCZc1xuICAvLyBhcmd1bWVudCBsZW5ndGggKG9yIGFuIGV4cGxpY2l0IGBzdGFydEluZGV4YCksIGludG8gYW4gYXJyYXkgdGhhdCBiZWNvbWVzXG4gIC8vIHRoZSBsYXN0IGFyZ3VtZW50LiBTaW1pbGFyIHRvIEVTNuKAmXMgXCJyZXN0IHBhcmFtZXRlclwiLlxuICB2YXIgcmVzdEFyZ3VtZW50cyA9IGZ1bmN0aW9uKGZ1bmMsIHN0YXJ0SW5kZXgpIHtcbiAgICBzdGFydEluZGV4ID0gc3RhcnRJbmRleCA9PSBudWxsID8gZnVuYy5sZW5ndGggLSAxIDogK3N0YXJ0SW5kZXg7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGxlbmd0aCA9IE1hdGgubWF4KGFyZ3VtZW50cy5sZW5ndGggLSBzdGFydEluZGV4LCAwKSxcbiAgICAgICAgICByZXN0ID0gQXJyYXkobGVuZ3RoKSxcbiAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICBmb3IgKDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgcmVzdFtpbmRleF0gPSBhcmd1bWVudHNbaW5kZXggKyBzdGFydEluZGV4XTtcbiAgICAgIH1cbiAgICAgIHN3aXRjaCAoc3RhcnRJbmRleCkge1xuICAgICAgICBjYXNlIDA6IHJldHVybiBmdW5jLmNhbGwodGhpcywgcmVzdCk7XG4gICAgICAgIGNhc2UgMTogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzLCBhcmd1bWVudHNbMF0sIHJlc3QpO1xuICAgICAgICBjYXNlIDI6IHJldHVybiBmdW5jLmNhbGwodGhpcywgYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0sIHJlc3QpO1xuICAgICAgfVxuICAgICAgdmFyIGFyZ3MgPSBBcnJheShzdGFydEluZGV4ICsgMSk7XG4gICAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBzdGFydEluZGV4OyBpbmRleCsrKSB7XG4gICAgICAgIGFyZ3NbaW5kZXhdID0gYXJndW1lbnRzW2luZGV4XTtcbiAgICAgIH1cbiAgICAgIGFyZ3Nbc3RhcnRJbmRleF0gPSByZXN0O1xuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfTtcbiAgfTtcblxuICAvLyBBbiBpbnRlcm5hbCBmdW5jdGlvbiBmb3IgY3JlYXRpbmcgYSBuZXcgb2JqZWN0IHRoYXQgaW5oZXJpdHMgZnJvbSBhbm90aGVyLlxuICB2YXIgYmFzZUNyZWF0ZSA9IGZ1bmN0aW9uKHByb3RvdHlwZSkge1xuICAgIGlmICghXy5pc09iamVjdChwcm90b3R5cGUpKSByZXR1cm4ge307XG4gICAgaWYgKG5hdGl2ZUNyZWF0ZSkgcmV0dXJuIG5hdGl2ZUNyZWF0ZShwcm90b3R5cGUpO1xuICAgIEN0b3IucHJvdG90eXBlID0gcHJvdG90eXBlO1xuICAgIHZhciByZXN1bHQgPSBuZXcgQ3RvcjtcbiAgICBDdG9yLnByb3RvdHlwZSA9IG51bGw7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICB2YXIgc2hhbGxvd1Byb3BlcnR5ID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiA9PSBudWxsID8gdm9pZCAwIDogb2JqW2tleV07XG4gICAgfTtcbiAgfTtcblxuICB2YXIgaGFzID0gZnVuY3Rpb24ob2JqLCBwYXRoKSB7XG4gICAgcmV0dXJuIG9iaiAhPSBudWxsICYmIGhhc093blByb3BlcnR5LmNhbGwob2JqLCBwYXRoKTtcbiAgfVxuXG4gIHZhciBkZWVwR2V0ID0gZnVuY3Rpb24ob2JqLCBwYXRoKSB7XG4gICAgdmFyIGxlbmd0aCA9IHBhdGgubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIHZvaWQgMDtcbiAgICAgIG9iaiA9IG9ialtwYXRoW2ldXTtcbiAgICB9XG4gICAgcmV0dXJuIGxlbmd0aCA/IG9iaiA6IHZvaWQgMDtcbiAgfTtcblxuICAvLyBIZWxwZXIgZm9yIGNvbGxlY3Rpb24gbWV0aG9kcyB0byBkZXRlcm1pbmUgd2hldGhlciBhIGNvbGxlY3Rpb25cbiAgLy8gc2hvdWxkIGJlIGl0ZXJhdGVkIGFzIGFuIGFycmF5IG9yIGFzIGFuIG9iamVjdC5cbiAgLy8gUmVsYXRlZDogaHR0cDovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9sZW5ndGhcbiAgLy8gQXZvaWRzIGEgdmVyeSBuYXN0eSBpT1MgOCBKSVQgYnVnIG9uIEFSTS02NC4gIzIwOTRcbiAgdmFyIE1BWF9BUlJBWV9JTkRFWCA9IE1hdGgucG93KDIsIDUzKSAtIDE7XG4gIHZhciBnZXRMZW5ndGggPSBzaGFsbG93UHJvcGVydHkoJ2xlbmd0aCcpO1xuICB2YXIgaXNBcnJheUxpa2UgPSBmdW5jdGlvbihjb2xsZWN0aW9uKSB7XG4gICAgdmFyIGxlbmd0aCA9IGdldExlbmd0aChjb2xsZWN0aW9uKTtcbiAgICByZXR1cm4gdHlwZW9mIGxlbmd0aCA9PSAnbnVtYmVyJyAmJiBsZW5ndGggPj0gMCAmJiBsZW5ndGggPD0gTUFYX0FSUkFZX0lOREVYO1xuICB9O1xuXG4gIC8vIENvbGxlY3Rpb24gRnVuY3Rpb25zXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gVGhlIGNvcm5lcnN0b25lLCBhbiBgZWFjaGAgaW1wbGVtZW50YXRpb24sIGFrYSBgZm9yRWFjaGAuXG4gIC8vIEhhbmRsZXMgcmF3IG9iamVjdHMgaW4gYWRkaXRpb24gdG8gYXJyYXktbGlrZXMuIFRyZWF0cyBhbGxcbiAgLy8gc3BhcnNlIGFycmF5LWxpa2VzIGFzIGlmIHRoZXkgd2VyZSBkZW5zZS5cbiAgXy5lYWNoID0gXy5mb3JFYWNoID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICAgIGl0ZXJhdGVlID0gb3B0aW1pemVDYihpdGVyYXRlZSwgY29udGV4dCk7XG4gICAgdmFyIGksIGxlbmd0aDtcbiAgICBpZiAoaXNBcnJheUxpa2Uob2JqKSkge1xuICAgICAgZm9yIChpID0gMCwgbGVuZ3RoID0gb2JqLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGl0ZXJhdGVlKG9ialtpXSwgaSwgb2JqKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGtleXMgPSBfLmtleXMob2JqKTtcbiAgICAgIGZvciAoaSA9IDAsIGxlbmd0aCA9IGtleXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaXRlcmF0ZWUob2JqW2tleXNbaV1dLCBrZXlzW2ldLCBvYmopO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9O1xuXG4gIC8vIFJldHVybiB0aGUgcmVzdWx0cyBvZiBhcHBseWluZyB0aGUgaXRlcmF0ZWUgdG8gZWFjaCBlbGVtZW50LlxuICBfLm1hcCA9IF8uY29sbGVjdCA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgICBpdGVyYXRlZSA9IGNiKGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgICB2YXIga2V5cyA9ICFpc0FycmF5TGlrZShvYmopICYmIF8ua2V5cyhvYmopLFxuICAgICAgICBsZW5ndGggPSAoa2V5cyB8fCBvYmopLmxlbmd0aCxcbiAgICAgICAgcmVzdWx0cyA9IEFycmF5KGxlbmd0aCk7XG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdmFyIGN1cnJlbnRLZXkgPSBrZXlzID8ga2V5c1tpbmRleF0gOiBpbmRleDtcbiAgICAgIHJlc3VsdHNbaW5kZXhdID0gaXRlcmF0ZWUob2JqW2N1cnJlbnRLZXldLCBjdXJyZW50S2V5LCBvYmopO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICAvLyBDcmVhdGUgYSByZWR1Y2luZyBmdW5jdGlvbiBpdGVyYXRpbmcgbGVmdCBvciByaWdodC5cbiAgdmFyIGNyZWF0ZVJlZHVjZSA9IGZ1bmN0aW9uKGRpcikge1xuICAgIC8vIFdyYXAgY29kZSB0aGF0IHJlYXNzaWducyBhcmd1bWVudCB2YXJpYWJsZXMgaW4gYSBzZXBhcmF0ZSBmdW5jdGlvbiB0aGFuXG4gICAgLy8gdGhlIG9uZSB0aGF0IGFjY2Vzc2VzIGBhcmd1bWVudHMubGVuZ3RoYCB0byBhdm9pZCBhIHBlcmYgaGl0LiAoIzE5OTEpXG4gICAgdmFyIHJlZHVjZXIgPSBmdW5jdGlvbihvYmosIGl0ZXJhdGVlLCBtZW1vLCBpbml0aWFsKSB7XG4gICAgICB2YXIga2V5cyA9ICFpc0FycmF5TGlrZShvYmopICYmIF8ua2V5cyhvYmopLFxuICAgICAgICAgIGxlbmd0aCA9IChrZXlzIHx8IG9iaikubGVuZ3RoLFxuICAgICAgICAgIGluZGV4ID0gZGlyID4gMCA/IDAgOiBsZW5ndGggLSAxO1xuICAgICAgaWYgKCFpbml0aWFsKSB7XG4gICAgICAgIG1lbW8gPSBvYmpba2V5cyA/IGtleXNbaW5kZXhdIDogaW5kZXhdO1xuICAgICAgICBpbmRleCArPSBkaXI7XG4gICAgICB9XG4gICAgICBmb3IgKDsgaW5kZXggPj0gMCAmJiBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gZGlyKSB7XG4gICAgICAgIHZhciBjdXJyZW50S2V5ID0ga2V5cyA/IGtleXNbaW5kZXhdIDogaW5kZXg7XG4gICAgICAgIG1lbW8gPSBpdGVyYXRlZShtZW1vLCBvYmpbY3VycmVudEtleV0sIGN1cnJlbnRLZXksIG9iaik7XG4gICAgICB9XG4gICAgICByZXR1cm4gbWVtbztcbiAgICB9O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKG9iaiwgaXRlcmF0ZWUsIG1lbW8sIGNvbnRleHQpIHtcbiAgICAgIHZhciBpbml0aWFsID0gYXJndW1lbnRzLmxlbmd0aCA+PSAzO1xuICAgICAgcmV0dXJuIHJlZHVjZXIob2JqLCBvcHRpbWl6ZUNiKGl0ZXJhdGVlLCBjb250ZXh0LCA0KSwgbWVtbywgaW5pdGlhbCk7XG4gICAgfTtcbiAgfTtcblxuICAvLyAqKlJlZHVjZSoqIGJ1aWxkcyB1cCBhIHNpbmdsZSByZXN1bHQgZnJvbSBhIGxpc3Qgb2YgdmFsdWVzLCBha2EgYGluamVjdGAsXG4gIC8vIG9yIGBmb2xkbGAuXG4gIF8ucmVkdWNlID0gXy5mb2xkbCA9IF8uaW5qZWN0ID0gY3JlYXRlUmVkdWNlKDEpO1xuXG4gIC8vIFRoZSByaWdodC1hc3NvY2lhdGl2ZSB2ZXJzaW9uIG9mIHJlZHVjZSwgYWxzbyBrbm93biBhcyBgZm9sZHJgLlxuICBfLnJlZHVjZVJpZ2h0ID0gXy5mb2xkciA9IGNyZWF0ZVJlZHVjZSgtMSk7XG5cbiAgLy8gUmV0dXJuIHRoZSBmaXJzdCB2YWx1ZSB3aGljaCBwYXNzZXMgYSB0cnV0aCB0ZXN0LiBBbGlhc2VkIGFzIGBkZXRlY3RgLlxuICBfLmZpbmQgPSBfLmRldGVjdCA9IGZ1bmN0aW9uKG9iaiwgcHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIGtleUZpbmRlciA9IGlzQXJyYXlMaWtlKG9iaikgPyBfLmZpbmRJbmRleCA6IF8uZmluZEtleTtcbiAgICB2YXIga2V5ID0ga2V5RmluZGVyKG9iaiwgcHJlZGljYXRlLCBjb250ZXh0KTtcbiAgICBpZiAoa2V5ICE9PSB2b2lkIDAgJiYga2V5ICE9PSAtMSkgcmV0dXJuIG9ialtrZXldO1xuICB9O1xuXG4gIC8vIFJldHVybiBhbGwgdGhlIGVsZW1lbnRzIHRoYXQgcGFzcyBhIHRydXRoIHRlc3QuXG4gIC8vIEFsaWFzZWQgYXMgYHNlbGVjdGAuXG4gIF8uZmlsdGVyID0gXy5zZWxlY3QgPSBmdW5jdGlvbihvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgIHZhciByZXN1bHRzID0gW107XG4gICAgcHJlZGljYXRlID0gY2IocHJlZGljYXRlLCBjb250ZXh0KTtcbiAgICBfLmVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGluZGV4LCBsaXN0KSkgcmVzdWx0cy5wdXNoKHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICAvLyBSZXR1cm4gYWxsIHRoZSBlbGVtZW50cyBmb3Igd2hpY2ggYSB0cnV0aCB0ZXN0IGZhaWxzLlxuICBfLnJlamVjdCA9IGZ1bmN0aW9uKG9iaiwgcHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIF8uZmlsdGVyKG9iaiwgXy5uZWdhdGUoY2IocHJlZGljYXRlKSksIGNvbnRleHQpO1xuICB9O1xuXG4gIC8vIERldGVybWluZSB3aGV0aGVyIGFsbCBvZiB0aGUgZWxlbWVudHMgbWF0Y2ggYSB0cnV0aCB0ZXN0LlxuICAvLyBBbGlhc2VkIGFzIGBhbGxgLlxuICBfLmV2ZXJ5ID0gXy5hbGwgPSBmdW5jdGlvbihvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgIHByZWRpY2F0ZSA9IGNiKHByZWRpY2F0ZSwgY29udGV4dCk7XG4gICAgdmFyIGtleXMgPSAhaXNBcnJheUxpa2Uob2JqKSAmJiBfLmtleXMob2JqKSxcbiAgICAgICAgbGVuZ3RoID0gKGtleXMgfHwgb2JqKS5sZW5ndGg7XG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdmFyIGN1cnJlbnRLZXkgPSBrZXlzID8ga2V5c1tpbmRleF0gOiBpbmRleDtcbiAgICAgIGlmICghcHJlZGljYXRlKG9ialtjdXJyZW50S2V5XSwgY3VycmVudEtleSwgb2JqKSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICAvLyBEZXRlcm1pbmUgaWYgYXQgbGVhc3Qgb25lIGVsZW1lbnQgaW4gdGhlIG9iamVjdCBtYXRjaGVzIGEgdHJ1dGggdGVzdC5cbiAgLy8gQWxpYXNlZCBhcyBgYW55YC5cbiAgXy5zb21lID0gXy5hbnkgPSBmdW5jdGlvbihvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgIHByZWRpY2F0ZSA9IGNiKHByZWRpY2F0ZSwgY29udGV4dCk7XG4gICAgdmFyIGtleXMgPSAhaXNBcnJheUxpa2Uob2JqKSAmJiBfLmtleXMob2JqKSxcbiAgICAgICAgbGVuZ3RoID0gKGtleXMgfHwgb2JqKS5sZW5ndGg7XG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdmFyIGN1cnJlbnRLZXkgPSBrZXlzID8ga2V5c1tpbmRleF0gOiBpbmRleDtcbiAgICAgIGlmIChwcmVkaWNhdGUob2JqW2N1cnJlbnRLZXldLCBjdXJyZW50S2V5LCBvYmopKSByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8vIERldGVybWluZSBpZiB0aGUgYXJyYXkgb3Igb2JqZWN0IGNvbnRhaW5zIGEgZ2l2ZW4gaXRlbSAodXNpbmcgYD09PWApLlxuICAvLyBBbGlhc2VkIGFzIGBpbmNsdWRlc2AgYW5kIGBpbmNsdWRlYC5cbiAgXy5jb250YWlucyA9IF8uaW5jbHVkZXMgPSBfLmluY2x1ZGUgPSBmdW5jdGlvbihvYmosIGl0ZW0sIGZyb21JbmRleCwgZ3VhcmQpIHtcbiAgICBpZiAoIWlzQXJyYXlMaWtlKG9iaikpIG9iaiA9IF8udmFsdWVzKG9iaik7XG4gICAgaWYgKHR5cGVvZiBmcm9tSW5kZXggIT0gJ251bWJlcicgfHwgZ3VhcmQpIGZyb21JbmRleCA9IDA7XG4gICAgcmV0dXJuIF8uaW5kZXhPZihvYmosIGl0ZW0sIGZyb21JbmRleCkgPj0gMDtcbiAgfTtcblxuICAvLyBJbnZva2UgYSBtZXRob2QgKHdpdGggYXJndW1lbnRzKSBvbiBldmVyeSBpdGVtIGluIGEgY29sbGVjdGlvbi5cbiAgXy5pbnZva2UgPSByZXN0QXJndW1lbnRzKGZ1bmN0aW9uKG9iaiwgcGF0aCwgYXJncykge1xuICAgIHZhciBjb250ZXh0UGF0aCwgZnVuYztcbiAgICBpZiAoXy5pc0Z1bmN0aW9uKHBhdGgpKSB7XG4gICAgICBmdW5jID0gcGF0aDtcbiAgICB9IGVsc2UgaWYgKF8uaXNBcnJheShwYXRoKSkge1xuICAgICAgY29udGV4dFBhdGggPSBwYXRoLnNsaWNlKDAsIC0xKTtcbiAgICAgIHBhdGggPSBwYXRoW3BhdGgubGVuZ3RoIC0gMV07XG4gICAgfVxuICAgIHJldHVybiBfLm1hcChvYmosIGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgICAgIHZhciBtZXRob2QgPSBmdW5jO1xuICAgICAgaWYgKCFtZXRob2QpIHtcbiAgICAgICAgaWYgKGNvbnRleHRQYXRoICYmIGNvbnRleHRQYXRoLmxlbmd0aCkge1xuICAgICAgICAgIGNvbnRleHQgPSBkZWVwR2V0KGNvbnRleHQsIGNvbnRleHRQYXRoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29udGV4dCA9PSBudWxsKSByZXR1cm4gdm9pZCAwO1xuICAgICAgICBtZXRob2QgPSBjb250ZXh0W3BhdGhdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1ldGhvZCA9PSBudWxsID8gbWV0aG9kIDogbWV0aG9kLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH0pO1xuICB9KTtcblxuICAvLyBDb252ZW5pZW5jZSB2ZXJzaW9uIG9mIGEgY29tbW9uIHVzZSBjYXNlIG9mIGBtYXBgOiBmZXRjaGluZyBhIHByb3BlcnR5LlxuICBfLnBsdWNrID0gZnVuY3Rpb24ob2JqLCBrZXkpIHtcbiAgICByZXR1cm4gXy5tYXAob2JqLCBfLnByb3BlcnR5KGtleSkpO1xuICB9O1xuXG4gIC8vIENvbnZlbmllbmNlIHZlcnNpb24gb2YgYSBjb21tb24gdXNlIGNhc2Ugb2YgYGZpbHRlcmA6IHNlbGVjdGluZyBvbmx5IG9iamVjdHNcbiAgLy8gY29udGFpbmluZyBzcGVjaWZpYyBga2V5OnZhbHVlYCBwYWlycy5cbiAgXy53aGVyZSA9IGZ1bmN0aW9uKG9iaiwgYXR0cnMpIHtcbiAgICByZXR1cm4gXy5maWx0ZXIob2JqLCBfLm1hdGNoZXIoYXR0cnMpKTtcbiAgfTtcblxuICAvLyBDb252ZW5pZW5jZSB2ZXJzaW9uIG9mIGEgY29tbW9uIHVzZSBjYXNlIG9mIGBmaW5kYDogZ2V0dGluZyB0aGUgZmlyc3Qgb2JqZWN0XG4gIC8vIGNvbnRhaW5pbmcgc3BlY2lmaWMgYGtleTp2YWx1ZWAgcGFpcnMuXG4gIF8uZmluZFdoZXJlID0gZnVuY3Rpb24ob2JqLCBhdHRycykge1xuICAgIHJldHVybiBfLmZpbmQob2JqLCBfLm1hdGNoZXIoYXR0cnMpKTtcbiAgfTtcblxuICAvLyBSZXR1cm4gdGhlIG1heGltdW0gZWxlbWVudCAob3IgZWxlbWVudC1iYXNlZCBjb21wdXRhdGlvbikuXG4gIF8ubWF4ID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICAgIHZhciByZXN1bHQgPSAtSW5maW5pdHksIGxhc3RDb21wdXRlZCA9IC1JbmZpbml0eSxcbiAgICAgICAgdmFsdWUsIGNvbXB1dGVkO1xuICAgIGlmIChpdGVyYXRlZSA9PSBudWxsIHx8IHR5cGVvZiBpdGVyYXRlZSA9PSAnbnVtYmVyJyAmJiB0eXBlb2Ygb2JqWzBdICE9ICdvYmplY3QnICYmIG9iaiAhPSBudWxsKSB7XG4gICAgICBvYmogPSBpc0FycmF5TGlrZShvYmopID8gb2JqIDogXy52YWx1ZXMob2JqKTtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBvYmoubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFsdWUgPSBvYmpbaV07XG4gICAgICAgIGlmICh2YWx1ZSAhPSBudWxsICYmIHZhbHVlID4gcmVzdWx0KSB7XG4gICAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaXRlcmF0ZWUgPSBjYihpdGVyYXRlZSwgY29udGV4dCk7XG4gICAgICBfLmVhY2gob2JqLCBmdW5jdGlvbih2LCBpbmRleCwgbGlzdCkge1xuICAgICAgICBjb21wdXRlZCA9IGl0ZXJhdGVlKHYsIGluZGV4LCBsaXN0KTtcbiAgICAgICAgaWYgKGNvbXB1dGVkID4gbGFzdENvbXB1dGVkIHx8IGNvbXB1dGVkID09PSAtSW5maW5pdHkgJiYgcmVzdWx0ID09PSAtSW5maW5pdHkpIHtcbiAgICAgICAgICByZXN1bHQgPSB2O1xuICAgICAgICAgIGxhc3RDb21wdXRlZCA9IGNvbXB1dGVkO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBSZXR1cm4gdGhlIG1pbmltdW0gZWxlbWVudCAob3IgZWxlbWVudC1iYXNlZCBjb21wdXRhdGlvbikuXG4gIF8ubWluID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICAgIHZhciByZXN1bHQgPSBJbmZpbml0eSwgbGFzdENvbXB1dGVkID0gSW5maW5pdHksXG4gICAgICAgIHZhbHVlLCBjb21wdXRlZDtcbiAgICBpZiAoaXRlcmF0ZWUgPT0gbnVsbCB8fCB0eXBlb2YgaXRlcmF0ZWUgPT0gJ251bWJlcicgJiYgdHlwZW9mIG9ialswXSAhPSAnb2JqZWN0JyAmJiBvYmogIT0gbnVsbCkge1xuICAgICAgb2JqID0gaXNBcnJheUxpa2Uob2JqKSA/IG9iaiA6IF8udmFsdWVzKG9iaik7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gb2JqLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhbHVlID0gb2JqW2ldO1xuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZSA8IHJlc3VsdCkge1xuICAgICAgICAgIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGl0ZXJhdGVlID0gY2IoaXRlcmF0ZWUsIGNvbnRleHQpO1xuICAgICAgXy5lYWNoKG9iaiwgZnVuY3Rpb24odiwgaW5kZXgsIGxpc3QpIHtcbiAgICAgICAgY29tcHV0ZWQgPSBpdGVyYXRlZSh2LCBpbmRleCwgbGlzdCk7XG4gICAgICAgIGlmIChjb21wdXRlZCA8IGxhc3RDb21wdXRlZCB8fCBjb21wdXRlZCA9PT0gSW5maW5pdHkgJiYgcmVzdWx0ID09PSBJbmZpbml0eSkge1xuICAgICAgICAgIHJlc3VsdCA9IHY7XG4gICAgICAgICAgbGFzdENvbXB1dGVkID0gY29tcHV0ZWQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIFNodWZmbGUgYSBjb2xsZWN0aW9uLlxuICBfLnNodWZmbGUgPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gXy5zYW1wbGUob2JqLCBJbmZpbml0eSk7XG4gIH07XG5cbiAgLy8gU2FtcGxlICoqbioqIHJhbmRvbSB2YWx1ZXMgZnJvbSBhIGNvbGxlY3Rpb24gdXNpbmcgdGhlIG1vZGVybiB2ZXJzaW9uIG9mIHRoZVxuICAvLyBbRmlzaGVyLVlhdGVzIHNodWZmbGVdKGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRmlzaGVy4oCTWWF0ZXNfc2h1ZmZsZSkuXG4gIC8vIElmICoqbioqIGlzIG5vdCBzcGVjaWZpZWQsIHJldHVybnMgYSBzaW5nbGUgcmFuZG9tIGVsZW1lbnQuXG4gIC8vIFRoZSBpbnRlcm5hbCBgZ3VhcmRgIGFyZ3VtZW50IGFsbG93cyBpdCB0byB3b3JrIHdpdGggYG1hcGAuXG4gIF8uc2FtcGxlID0gZnVuY3Rpb24ob2JqLCBuLCBndWFyZCkge1xuICAgIGlmIChuID09IG51bGwgfHwgZ3VhcmQpIHtcbiAgICAgIGlmICghaXNBcnJheUxpa2Uob2JqKSkgb2JqID0gXy52YWx1ZXMob2JqKTtcbiAgICAgIHJldHVybiBvYmpbXy5yYW5kb20ob2JqLmxlbmd0aCAtIDEpXTtcbiAgICB9XG4gICAgdmFyIHNhbXBsZSA9IGlzQXJyYXlMaWtlKG9iaikgPyBfLmNsb25lKG9iaikgOiBfLnZhbHVlcyhvYmopO1xuICAgIHZhciBsZW5ndGggPSBnZXRMZW5ndGgoc2FtcGxlKTtcbiAgICBuID0gTWF0aC5tYXgoTWF0aC5taW4obiwgbGVuZ3RoKSwgMCk7XG4gICAgdmFyIGxhc3QgPSBsZW5ndGggLSAxO1xuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBuOyBpbmRleCsrKSB7XG4gICAgICB2YXIgcmFuZCA9IF8ucmFuZG9tKGluZGV4LCBsYXN0KTtcbiAgICAgIHZhciB0ZW1wID0gc2FtcGxlW2luZGV4XTtcbiAgICAgIHNhbXBsZVtpbmRleF0gPSBzYW1wbGVbcmFuZF07XG4gICAgICBzYW1wbGVbcmFuZF0gPSB0ZW1wO1xuICAgIH1cbiAgICByZXR1cm4gc2FtcGxlLnNsaWNlKDAsIG4pO1xuICB9O1xuXG4gIC8vIFNvcnQgdGhlIG9iamVjdCdzIHZhbHVlcyBieSBhIGNyaXRlcmlvbiBwcm9kdWNlZCBieSBhbiBpdGVyYXRlZS5cbiAgXy5zb3J0QnkgPSBmdW5jdGlvbihvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICBpdGVyYXRlZSA9IGNiKGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgICByZXR1cm4gXy5wbHVjayhfLm1hcChvYmosIGZ1bmN0aW9uKHZhbHVlLCBrZXksIGxpc3QpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgaW5kZXg6IGluZGV4KyssXG4gICAgICAgIGNyaXRlcmlhOiBpdGVyYXRlZSh2YWx1ZSwga2V5LCBsaXN0KVxuICAgICAgfTtcbiAgICB9KS5zb3J0KGZ1bmN0aW9uKGxlZnQsIHJpZ2h0KSB7XG4gICAgICB2YXIgYSA9IGxlZnQuY3JpdGVyaWE7XG4gICAgICB2YXIgYiA9IHJpZ2h0LmNyaXRlcmlhO1xuICAgICAgaWYgKGEgIT09IGIpIHtcbiAgICAgICAgaWYgKGEgPiBiIHx8IGEgPT09IHZvaWQgMCkgcmV0dXJuIDE7XG4gICAgICAgIGlmIChhIDwgYiB8fCBiID09PSB2b2lkIDApIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBsZWZ0LmluZGV4IC0gcmlnaHQuaW5kZXg7XG4gICAgfSksICd2YWx1ZScpO1xuICB9O1xuXG4gIC8vIEFuIGludGVybmFsIGZ1bmN0aW9uIHVzZWQgZm9yIGFnZ3JlZ2F0ZSBcImdyb3VwIGJ5XCIgb3BlcmF0aW9ucy5cbiAgdmFyIGdyb3VwID0gZnVuY3Rpb24oYmVoYXZpb3IsIHBhcnRpdGlvbikge1xuICAgIHJldHVybiBmdW5jdGlvbihvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgICB2YXIgcmVzdWx0ID0gcGFydGl0aW9uID8gW1tdLCBbXV0gOiB7fTtcbiAgICAgIGl0ZXJhdGVlID0gY2IoaXRlcmF0ZWUsIGNvbnRleHQpO1xuICAgICAgXy5lYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4KSB7XG4gICAgICAgIHZhciBrZXkgPSBpdGVyYXRlZSh2YWx1ZSwgaW5kZXgsIG9iaik7XG4gICAgICAgIGJlaGF2aW9yKHJlc3VsdCwgdmFsdWUsIGtleSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfTtcblxuICAvLyBHcm91cHMgdGhlIG9iamVjdCdzIHZhbHVlcyBieSBhIGNyaXRlcmlvbi4gUGFzcyBlaXRoZXIgYSBzdHJpbmcgYXR0cmlidXRlXG4gIC8vIHRvIGdyb3VwIGJ5LCBvciBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgY3JpdGVyaW9uLlxuICBfLmdyb3VwQnkgPSBncm91cChmdW5jdGlvbihyZXN1bHQsIHZhbHVlLCBrZXkpIHtcbiAgICBpZiAoaGFzKHJlc3VsdCwga2V5KSkgcmVzdWx0W2tleV0ucHVzaCh2YWx1ZSk7IGVsc2UgcmVzdWx0W2tleV0gPSBbdmFsdWVdO1xuICB9KTtcblxuICAvLyBJbmRleGVzIHRoZSBvYmplY3QncyB2YWx1ZXMgYnkgYSBjcml0ZXJpb24sIHNpbWlsYXIgdG8gYGdyb3VwQnlgLCBidXQgZm9yXG4gIC8vIHdoZW4geW91IGtub3cgdGhhdCB5b3VyIGluZGV4IHZhbHVlcyB3aWxsIGJlIHVuaXF1ZS5cbiAgXy5pbmRleEJ5ID0gZ3JvdXAoZnVuY3Rpb24ocmVzdWx0LCB2YWx1ZSwga2V5KSB7XG4gICAgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgfSk7XG5cbiAgLy8gQ291bnRzIGluc3RhbmNlcyBvZiBhbiBvYmplY3QgdGhhdCBncm91cCBieSBhIGNlcnRhaW4gY3JpdGVyaW9uLiBQYXNzXG4gIC8vIGVpdGhlciBhIHN0cmluZyBhdHRyaWJ1dGUgdG8gY291bnQgYnksIG9yIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZVxuICAvLyBjcml0ZXJpb24uXG4gIF8uY291bnRCeSA9IGdyb3VwKGZ1bmN0aW9uKHJlc3VsdCwgdmFsdWUsIGtleSkge1xuICAgIGlmIChoYXMocmVzdWx0LCBrZXkpKSByZXN1bHRba2V5XSsrOyBlbHNlIHJlc3VsdFtrZXldID0gMTtcbiAgfSk7XG5cbiAgdmFyIHJlU3RyU3ltYm9sID0gL1teXFx1ZDgwMC1cXHVkZmZmXXxbXFx1ZDgwMC1cXHVkYmZmXVtcXHVkYzAwLVxcdWRmZmZdfFtcXHVkODAwLVxcdWRmZmZdL2c7XG4gIC8vIFNhZmVseSBjcmVhdGUgYSByZWFsLCBsaXZlIGFycmF5IGZyb20gYW55dGhpbmcgaXRlcmFibGUuXG4gIF8udG9BcnJheSA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmICghb2JqKSByZXR1cm4gW107XG4gICAgaWYgKF8uaXNBcnJheShvYmopKSByZXR1cm4gc2xpY2UuY2FsbChvYmopO1xuICAgIGlmIChfLmlzU3RyaW5nKG9iaikpIHtcbiAgICAgIC8vIEtlZXAgc3Vycm9nYXRlIHBhaXIgY2hhcmFjdGVycyB0b2dldGhlclxuICAgICAgcmV0dXJuIG9iai5tYXRjaChyZVN0clN5bWJvbCk7XG4gICAgfVxuICAgIGlmIChpc0FycmF5TGlrZShvYmopKSByZXR1cm4gXy5tYXAob2JqLCBfLmlkZW50aXR5KTtcbiAgICByZXR1cm4gXy52YWx1ZXMob2JqKTtcbiAgfTtcblxuICAvLyBSZXR1cm4gdGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiBhbiBvYmplY3QuXG4gIF8uc2l6ZSA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIDA7XG4gICAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iaikgPyBvYmoubGVuZ3RoIDogXy5rZXlzKG9iaikubGVuZ3RoO1xuICB9O1xuXG4gIC8vIFNwbGl0IGEgY29sbGVjdGlvbiBpbnRvIHR3byBhcnJheXM6IG9uZSB3aG9zZSBlbGVtZW50cyBhbGwgc2F0aXNmeSB0aGUgZ2l2ZW5cbiAgLy8gcHJlZGljYXRlLCBhbmQgb25lIHdob3NlIGVsZW1lbnRzIGFsbCBkbyBub3Qgc2F0aXNmeSB0aGUgcHJlZGljYXRlLlxuICBfLnBhcnRpdGlvbiA9IGdyb3VwKGZ1bmN0aW9uKHJlc3VsdCwgdmFsdWUsIHBhc3MpIHtcbiAgICByZXN1bHRbcGFzcyA/IDAgOiAxXS5wdXNoKHZhbHVlKTtcbiAgfSwgdHJ1ZSk7XG5cbiAgLy8gQXJyYXkgRnVuY3Rpb25zXG4gIC8vIC0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIEdldCB0aGUgZmlyc3QgZWxlbWVudCBvZiBhbiBhcnJheS4gUGFzc2luZyAqKm4qKiB3aWxsIHJldHVybiB0aGUgZmlyc3QgTlxuICAvLyB2YWx1ZXMgaW4gdGhlIGFycmF5LiBBbGlhc2VkIGFzIGBoZWFkYCBhbmQgYHRha2VgLiBUaGUgKipndWFyZCoqIGNoZWNrXG4gIC8vIGFsbG93cyBpdCB0byB3b3JrIHdpdGggYF8ubWFwYC5cbiAgXy5maXJzdCA9IF8uaGVhZCA9IF8udGFrZSA9IGZ1bmN0aW9uKGFycmF5LCBuLCBndWFyZCkge1xuICAgIGlmIChhcnJheSA9PSBudWxsIHx8IGFycmF5Lmxlbmd0aCA8IDEpIHJldHVybiBuID09IG51bGwgPyB2b2lkIDAgOiBbXTtcbiAgICBpZiAobiA9PSBudWxsIHx8IGd1YXJkKSByZXR1cm4gYXJyYXlbMF07XG4gICAgcmV0dXJuIF8uaW5pdGlhbChhcnJheSwgYXJyYXkubGVuZ3RoIC0gbik7XG4gIH07XG5cbiAgLy8gUmV0dXJucyBldmVyeXRoaW5nIGJ1dCB0aGUgbGFzdCBlbnRyeSBvZiB0aGUgYXJyYXkuIEVzcGVjaWFsbHkgdXNlZnVsIG9uXG4gIC8vIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBQYXNzaW5nICoqbioqIHdpbGwgcmV0dXJuIGFsbCB0aGUgdmFsdWVzIGluXG4gIC8vIHRoZSBhcnJheSwgZXhjbHVkaW5nIHRoZSBsYXN0IE4uXG4gIF8uaW5pdGlhbCA9IGZ1bmN0aW9uKGFycmF5LCBuLCBndWFyZCkge1xuICAgIHJldHVybiBzbGljZS5jYWxsKGFycmF5LCAwLCBNYXRoLm1heCgwLCBhcnJheS5sZW5ndGggLSAobiA9PSBudWxsIHx8IGd1YXJkID8gMSA6IG4pKSk7XG4gIH07XG5cbiAgLy8gR2V0IHRoZSBsYXN0IGVsZW1lbnQgb2YgYW4gYXJyYXkuIFBhc3NpbmcgKipuKiogd2lsbCByZXR1cm4gdGhlIGxhc3QgTlxuICAvLyB2YWx1ZXMgaW4gdGhlIGFycmF5LlxuICBfLmxhc3QgPSBmdW5jdGlvbihhcnJheSwgbiwgZ3VhcmQpIHtcbiAgICBpZiAoYXJyYXkgPT0gbnVsbCB8fCBhcnJheS5sZW5ndGggPCAxKSByZXR1cm4gbiA9PSBudWxsID8gdm9pZCAwIDogW107XG4gICAgaWYgKG4gPT0gbnVsbCB8fCBndWFyZCkgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdO1xuICAgIHJldHVybiBfLnJlc3QoYXJyYXksIE1hdGgubWF4KDAsIGFycmF5Lmxlbmd0aCAtIG4pKTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGV2ZXJ5dGhpbmcgYnV0IHRoZSBmaXJzdCBlbnRyeSBvZiB0aGUgYXJyYXkuIEFsaWFzZWQgYXMgYHRhaWxgIGFuZCBgZHJvcGAuXG4gIC8vIEVzcGVjaWFsbHkgdXNlZnVsIG9uIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBQYXNzaW5nIGFuICoqbioqIHdpbGwgcmV0dXJuXG4gIC8vIHRoZSByZXN0IE4gdmFsdWVzIGluIHRoZSBhcnJheS5cbiAgXy5yZXN0ID0gXy50YWlsID0gXy5kcm9wID0gZnVuY3Rpb24oYXJyYXksIG4sIGd1YXJkKSB7XG4gICAgcmV0dXJuIHNsaWNlLmNhbGwoYXJyYXksIG4gPT0gbnVsbCB8fCBndWFyZCA/IDEgOiBuKTtcbiAgfTtcblxuICAvLyBUcmltIG91dCBhbGwgZmFsc3kgdmFsdWVzIGZyb20gYW4gYXJyYXkuXG4gIF8uY29tcGFjdCA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgcmV0dXJuIF8uZmlsdGVyKGFycmF5LCBCb29sZWFuKTtcbiAgfTtcblxuICAvLyBJbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiBvZiBhIHJlY3Vyc2l2ZSBgZmxhdHRlbmAgZnVuY3Rpb24uXG4gIHZhciBmbGF0dGVuID0gZnVuY3Rpb24oaW5wdXQsIHNoYWxsb3csIHN0cmljdCwgb3V0cHV0KSB7XG4gICAgb3V0cHV0ID0gb3V0cHV0IHx8IFtdO1xuICAgIHZhciBpZHggPSBvdXRwdXQubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBnZXRMZW5ndGgoaW5wdXQpOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciB2YWx1ZSA9IGlucHV0W2ldO1xuICAgICAgaWYgKGlzQXJyYXlMaWtlKHZhbHVlKSAmJiAoXy5pc0FycmF5KHZhbHVlKSB8fCBfLmlzQXJndW1lbnRzKHZhbHVlKSkpIHtcbiAgICAgICAgLy8gRmxhdHRlbiBjdXJyZW50IGxldmVsIG9mIGFycmF5IG9yIGFyZ3VtZW50cyBvYmplY3QuXG4gICAgICAgIGlmIChzaGFsbG93KSB7XG4gICAgICAgICAgdmFyIGogPSAwLCBsZW4gPSB2YWx1ZS5sZW5ndGg7XG4gICAgICAgICAgd2hpbGUgKGogPCBsZW4pIG91dHB1dFtpZHgrK10gPSB2YWx1ZVtqKytdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZsYXR0ZW4odmFsdWUsIHNoYWxsb3csIHN0cmljdCwgb3V0cHV0KTtcbiAgICAgICAgICBpZHggPSBvdXRwdXQubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgb3V0cHV0W2lkeCsrXSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0O1xuICB9O1xuXG4gIC8vIEZsYXR0ZW4gb3V0IGFuIGFycmF5LCBlaXRoZXIgcmVjdXJzaXZlbHkgKGJ5IGRlZmF1bHQpLCBvciBqdXN0IG9uZSBsZXZlbC5cbiAgXy5mbGF0dGVuID0gZnVuY3Rpb24oYXJyYXksIHNoYWxsb3cpIHtcbiAgICByZXR1cm4gZmxhdHRlbihhcnJheSwgc2hhbGxvdywgZmFsc2UpO1xuICB9O1xuXG4gIC8vIFJldHVybiBhIHZlcnNpb24gb2YgdGhlIGFycmF5IHRoYXQgZG9lcyBub3QgY29udGFpbiB0aGUgc3BlY2lmaWVkIHZhbHVlKHMpLlxuICBfLndpdGhvdXQgPSByZXN0QXJndW1lbnRzKGZ1bmN0aW9uKGFycmF5LCBvdGhlckFycmF5cykge1xuICAgIHJldHVybiBfLmRpZmZlcmVuY2UoYXJyYXksIG90aGVyQXJyYXlzKTtcbiAgfSk7XG5cbiAgLy8gUHJvZHVjZSBhIGR1cGxpY2F0ZS1mcmVlIHZlcnNpb24gb2YgdGhlIGFycmF5LiBJZiB0aGUgYXJyYXkgaGFzIGFscmVhZHlcbiAgLy8gYmVlbiBzb3J0ZWQsIHlvdSBoYXZlIHRoZSBvcHRpb24gb2YgdXNpbmcgYSBmYXN0ZXIgYWxnb3JpdGhtLlxuICAvLyBUaGUgZmFzdGVyIGFsZ29yaXRobSB3aWxsIG5vdCB3b3JrIHdpdGggYW4gaXRlcmF0ZWUgaWYgdGhlIGl0ZXJhdGVlXG4gIC8vIGlzIG5vdCBhIG9uZS10by1vbmUgZnVuY3Rpb24sIHNvIHByb3ZpZGluZyBhbiBpdGVyYXRlZSB3aWxsIGRpc2FibGVcbiAgLy8gdGhlIGZhc3RlciBhbGdvcml0aG0uXG4gIC8vIEFsaWFzZWQgYXMgYHVuaXF1ZWAuXG4gIF8udW5pcSA9IF8udW5pcXVlID0gZnVuY3Rpb24oYXJyYXksIGlzU29ydGVkLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICAgIGlmICghXy5pc0Jvb2xlYW4oaXNTb3J0ZWQpKSB7XG4gICAgICBjb250ZXh0ID0gaXRlcmF0ZWU7XG4gICAgICBpdGVyYXRlZSA9IGlzU29ydGVkO1xuICAgICAgaXNTb3J0ZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGl0ZXJhdGVlICE9IG51bGwpIGl0ZXJhdGVlID0gY2IoaXRlcmF0ZWUsIGNvbnRleHQpO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIgc2VlbiA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBnZXRMZW5ndGgoYXJyYXkpOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciB2YWx1ZSA9IGFycmF5W2ldLFxuICAgICAgICAgIGNvbXB1dGVkID0gaXRlcmF0ZWUgPyBpdGVyYXRlZSh2YWx1ZSwgaSwgYXJyYXkpIDogdmFsdWU7XG4gICAgICBpZiAoaXNTb3J0ZWQgJiYgIWl0ZXJhdGVlKSB7XG4gICAgICAgIGlmICghaSB8fCBzZWVuICE9PSBjb21wdXRlZCkgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgICAgICBzZWVuID0gY29tcHV0ZWQ7XG4gICAgICB9IGVsc2UgaWYgKGl0ZXJhdGVlKSB7XG4gICAgICAgIGlmICghXy5jb250YWlucyhzZWVuLCBjb21wdXRlZCkpIHtcbiAgICAgICAgICBzZWVuLnB1c2goY29tcHV0ZWQpO1xuICAgICAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICghXy5jb250YWlucyhyZXN1bHQsIHZhbHVlKSkge1xuICAgICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gUHJvZHVjZSBhbiBhcnJheSB0aGF0IGNvbnRhaW5zIHRoZSB1bmlvbjogZWFjaCBkaXN0aW5jdCBlbGVtZW50IGZyb20gYWxsIG9mXG4gIC8vIHRoZSBwYXNzZWQtaW4gYXJyYXlzLlxuICBfLnVuaW9uID0gcmVzdEFyZ3VtZW50cyhmdW5jdGlvbihhcnJheXMpIHtcbiAgICByZXR1cm4gXy51bmlxKGZsYXR0ZW4oYXJyYXlzLCB0cnVlLCB0cnVlKSk7XG4gIH0pO1xuXG4gIC8vIFByb2R1Y2UgYW4gYXJyYXkgdGhhdCBjb250YWlucyBldmVyeSBpdGVtIHNoYXJlZCBiZXR3ZWVuIGFsbCB0aGVcbiAgLy8gcGFzc2VkLWluIGFycmF5cy5cbiAgXy5pbnRlcnNlY3Rpb24gPSBmdW5jdGlvbihhcnJheSkge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIgYXJnc0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGdldExlbmd0aChhcnJheSk7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBhcnJheVtpXTtcbiAgICAgIGlmIChfLmNvbnRhaW5zKHJlc3VsdCwgaXRlbSkpIGNvbnRpbnVlO1xuICAgICAgdmFyIGo7XG4gICAgICBmb3IgKGogPSAxOyBqIDwgYXJnc0xlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmICghXy5jb250YWlucyhhcmd1bWVudHNbal0sIGl0ZW0pKSBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmIChqID09PSBhcmdzTGVuZ3RoKSByZXN1bHQucHVzaChpdGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBUYWtlIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gb25lIGFycmF5IGFuZCBhIG51bWJlciBvZiBvdGhlciBhcnJheXMuXG4gIC8vIE9ubHkgdGhlIGVsZW1lbnRzIHByZXNlbnQgaW4ganVzdCB0aGUgZmlyc3QgYXJyYXkgd2lsbCByZW1haW4uXG4gIF8uZGlmZmVyZW5jZSA9IHJlc3RBcmd1bWVudHMoZnVuY3Rpb24oYXJyYXksIHJlc3QpIHtcbiAgICByZXN0ID0gZmxhdHRlbihyZXN0LCB0cnVlLCB0cnVlKTtcbiAgICByZXR1cm4gXy5maWx0ZXIoYXJyYXksIGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIHJldHVybiAhXy5jb250YWlucyhyZXN0LCB2YWx1ZSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIENvbXBsZW1lbnQgb2YgXy56aXAuIFVuemlwIGFjY2VwdHMgYW4gYXJyYXkgb2YgYXJyYXlzIGFuZCBncm91cHNcbiAgLy8gZWFjaCBhcnJheSdzIGVsZW1lbnRzIG9uIHNoYXJlZCBpbmRpY2VzLlxuICBfLnVuemlwID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgICB2YXIgbGVuZ3RoID0gYXJyYXkgJiYgXy5tYXgoYXJyYXksIGdldExlbmd0aCkubGVuZ3RoIHx8IDA7XG4gICAgdmFyIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICByZXN1bHRbaW5kZXhdID0gXy5wbHVjayhhcnJheSwgaW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIFppcCB0b2dldGhlciBtdWx0aXBsZSBsaXN0cyBpbnRvIGEgc2luZ2xlIGFycmF5IC0tIGVsZW1lbnRzIHRoYXQgc2hhcmVcbiAgLy8gYW4gaW5kZXggZ28gdG9nZXRoZXIuXG4gIF8uemlwID0gcmVzdEFyZ3VtZW50cyhfLnVuemlwKTtcblxuICAvLyBDb252ZXJ0cyBsaXN0cyBpbnRvIG9iamVjdHMuIFBhc3MgZWl0aGVyIGEgc2luZ2xlIGFycmF5IG9mIGBba2V5LCB2YWx1ZV1gXG4gIC8vIHBhaXJzLCBvciB0d28gcGFyYWxsZWwgYXJyYXlzIG9mIHRoZSBzYW1lIGxlbmd0aCAtLSBvbmUgb2Yga2V5cywgYW5kIG9uZSBvZlxuICAvLyB0aGUgY29ycmVzcG9uZGluZyB2YWx1ZXMuIFBhc3NpbmcgYnkgcGFpcnMgaXMgdGhlIHJldmVyc2Ugb2YgXy5wYWlycy5cbiAgXy5vYmplY3QgPSBmdW5jdGlvbihsaXN0LCB2YWx1ZXMpIHtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGdldExlbmd0aChsaXN0KTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodmFsdWVzKSB7XG4gICAgICAgIHJlc3VsdFtsaXN0W2ldXSA9IHZhbHVlc1tpXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdFtsaXN0W2ldWzBdXSA9IGxpc3RbaV1bMV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gR2VuZXJhdG9yIGZ1bmN0aW9uIHRvIGNyZWF0ZSB0aGUgZmluZEluZGV4IGFuZCBmaW5kTGFzdEluZGV4IGZ1bmN0aW9ucy5cbiAgdmFyIGNyZWF0ZVByZWRpY2F0ZUluZGV4RmluZGVyID0gZnVuY3Rpb24oZGlyKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGFycmF5LCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICAgIHByZWRpY2F0ZSA9IGNiKHByZWRpY2F0ZSwgY29udGV4dCk7XG4gICAgICB2YXIgbGVuZ3RoID0gZ2V0TGVuZ3RoKGFycmF5KTtcbiAgICAgIHZhciBpbmRleCA9IGRpciA+IDAgPyAwIDogbGVuZ3RoIC0gMTtcbiAgICAgIGZvciAoOyBpbmRleCA+PSAwICYmIGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSBkaXIpIHtcbiAgICAgICAgaWYgKHByZWRpY2F0ZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkpIHJldHVybiBpbmRleDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAtMTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgdGhlIGZpcnN0IGluZGV4IG9uIGFuIGFycmF5LWxpa2UgdGhhdCBwYXNzZXMgYSBwcmVkaWNhdGUgdGVzdC5cbiAgXy5maW5kSW5kZXggPSBjcmVhdGVQcmVkaWNhdGVJbmRleEZpbmRlcigxKTtcbiAgXy5maW5kTGFzdEluZGV4ID0gY3JlYXRlUHJlZGljYXRlSW5kZXhGaW5kZXIoLTEpO1xuXG4gIC8vIFVzZSBhIGNvbXBhcmF0b3IgZnVuY3Rpb24gdG8gZmlndXJlIG91dCB0aGUgc21hbGxlc3QgaW5kZXggYXQgd2hpY2hcbiAgLy8gYW4gb2JqZWN0IHNob3VsZCBiZSBpbnNlcnRlZCBzbyBhcyB0byBtYWludGFpbiBvcmRlci4gVXNlcyBiaW5hcnkgc2VhcmNoLlxuICBfLnNvcnRlZEluZGV4ID0gZnVuY3Rpb24oYXJyYXksIG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgICBpdGVyYXRlZSA9IGNiKGl0ZXJhdGVlLCBjb250ZXh0LCAxKTtcbiAgICB2YXIgdmFsdWUgPSBpdGVyYXRlZShvYmopO1xuICAgIHZhciBsb3cgPSAwLCBoaWdoID0gZ2V0TGVuZ3RoKGFycmF5KTtcbiAgICB3aGlsZSAobG93IDwgaGlnaCkge1xuICAgICAgdmFyIG1pZCA9IE1hdGguZmxvb3IoKGxvdyArIGhpZ2gpIC8gMik7XG4gICAgICBpZiAoaXRlcmF0ZWUoYXJyYXlbbWlkXSkgPCB2YWx1ZSkgbG93ID0gbWlkICsgMTsgZWxzZSBoaWdoID0gbWlkO1xuICAgIH1cbiAgICByZXR1cm4gbG93O1xuICB9O1xuXG4gIC8vIEdlbmVyYXRvciBmdW5jdGlvbiB0byBjcmVhdGUgdGhlIGluZGV4T2YgYW5kIGxhc3RJbmRleE9mIGZ1bmN0aW9ucy5cbiAgdmFyIGNyZWF0ZUluZGV4RmluZGVyID0gZnVuY3Rpb24oZGlyLCBwcmVkaWNhdGVGaW5kLCBzb3J0ZWRJbmRleCkge1xuICAgIHJldHVybiBmdW5jdGlvbihhcnJheSwgaXRlbSwgaWR4KSB7XG4gICAgICB2YXIgaSA9IDAsIGxlbmd0aCA9IGdldExlbmd0aChhcnJheSk7XG4gICAgICBpZiAodHlwZW9mIGlkeCA9PSAnbnVtYmVyJykge1xuICAgICAgICBpZiAoZGlyID4gMCkge1xuICAgICAgICAgIGkgPSBpZHggPj0gMCA/IGlkeCA6IE1hdGgubWF4KGlkeCArIGxlbmd0aCwgaSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGVuZ3RoID0gaWR4ID49IDAgPyBNYXRoLm1pbihpZHggKyAxLCBsZW5ndGgpIDogaWR4ICsgbGVuZ3RoICsgMTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzb3J0ZWRJbmRleCAmJiBpZHggJiYgbGVuZ3RoKSB7XG4gICAgICAgIGlkeCA9IHNvcnRlZEluZGV4KGFycmF5LCBpdGVtKTtcbiAgICAgICAgcmV0dXJuIGFycmF5W2lkeF0gPT09IGl0ZW0gPyBpZHggOiAtMTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtICE9PSBpdGVtKSB7XG4gICAgICAgIGlkeCA9IHByZWRpY2F0ZUZpbmQoc2xpY2UuY2FsbChhcnJheSwgaSwgbGVuZ3RoKSwgXy5pc05hTik7XG4gICAgICAgIHJldHVybiBpZHggPj0gMCA/IGlkeCArIGkgOiAtMTtcbiAgICAgIH1cbiAgICAgIGZvciAoaWR4ID0gZGlyID4gMCA/IGkgOiBsZW5ndGggLSAxOyBpZHggPj0gMCAmJiBpZHggPCBsZW5ndGg7IGlkeCArPSBkaXIpIHtcbiAgICAgICAgaWYgKGFycmF5W2lkeF0gPT09IGl0ZW0pIHJldHVybiBpZHg7XG4gICAgICB9XG4gICAgICByZXR1cm4gLTE7XG4gICAgfTtcbiAgfTtcblxuICAvLyBSZXR1cm4gdGhlIHBvc2l0aW9uIG9mIHRoZSBmaXJzdCBvY2N1cnJlbmNlIG9mIGFuIGl0ZW0gaW4gYW4gYXJyYXksXG4gIC8vIG9yIC0xIGlmIHRoZSBpdGVtIGlzIG5vdCBpbmNsdWRlZCBpbiB0aGUgYXJyYXkuXG4gIC8vIElmIHRoZSBhcnJheSBpcyBsYXJnZSBhbmQgYWxyZWFkeSBpbiBzb3J0IG9yZGVyLCBwYXNzIGB0cnVlYFxuICAvLyBmb3IgKippc1NvcnRlZCoqIHRvIHVzZSBiaW5hcnkgc2VhcmNoLlxuICBfLmluZGV4T2YgPSBjcmVhdGVJbmRleEZpbmRlcigxLCBfLmZpbmRJbmRleCwgXy5zb3J0ZWRJbmRleCk7XG4gIF8ubGFzdEluZGV4T2YgPSBjcmVhdGVJbmRleEZpbmRlcigtMSwgXy5maW5kTGFzdEluZGV4KTtcblxuICAvLyBHZW5lcmF0ZSBhbiBpbnRlZ2VyIEFycmF5IGNvbnRhaW5pbmcgYW4gYXJpdGhtZXRpYyBwcm9ncmVzc2lvbi4gQSBwb3J0IG9mXG4gIC8vIHRoZSBuYXRpdmUgUHl0aG9uIGByYW5nZSgpYCBmdW5jdGlvbi4gU2VlXG4gIC8vIFt0aGUgUHl0aG9uIGRvY3VtZW50YXRpb25dKGh0dHA6Ly9kb2NzLnB5dGhvbi5vcmcvbGlicmFyeS9mdW5jdGlvbnMuaHRtbCNyYW5nZSkuXG4gIF8ucmFuZ2UgPSBmdW5jdGlvbihzdGFydCwgc3RvcCwgc3RlcCkge1xuICAgIGlmIChzdG9wID09IG51bGwpIHtcbiAgICAgIHN0b3AgPSBzdGFydCB8fCAwO1xuICAgICAgc3RhcnQgPSAwO1xuICAgIH1cbiAgICBpZiAoIXN0ZXApIHtcbiAgICAgIHN0ZXAgPSBzdG9wIDwgc3RhcnQgPyAtMSA6IDE7XG4gICAgfVxuXG4gICAgdmFyIGxlbmd0aCA9IE1hdGgubWF4KE1hdGguY2VpbCgoc3RvcCAtIHN0YXJ0KSAvIHN0ZXApLCAwKTtcbiAgICB2YXIgcmFuZ2UgPSBBcnJheShsZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwgbGVuZ3RoOyBpZHgrKywgc3RhcnQgKz0gc3RlcCkge1xuICAgICAgcmFuZ2VbaWR4XSA9IHN0YXJ0O1xuICAgIH1cblxuICAgIHJldHVybiByYW5nZTtcbiAgfTtcblxuICAvLyBDaHVuayBhIHNpbmdsZSBhcnJheSBpbnRvIG11bHRpcGxlIGFycmF5cywgZWFjaCBjb250YWluaW5nIGBjb3VudGAgb3IgZmV3ZXJcbiAgLy8gaXRlbXMuXG4gIF8uY2h1bmsgPSBmdW5jdGlvbihhcnJheSwgY291bnQpIHtcbiAgICBpZiAoY291bnQgPT0gbnVsbCB8fCBjb3VudCA8IDEpIHJldHVybiBbXTtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGkgPSAwLCBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gICAgd2hpbGUgKGkgPCBsZW5ndGgpIHtcbiAgICAgIHJlc3VsdC5wdXNoKHNsaWNlLmNhbGwoYXJyYXksIGksIGkgKz0gY291bnQpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBGdW5jdGlvbiAoYWhlbSkgRnVuY3Rpb25zXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIERldGVybWluZXMgd2hldGhlciB0byBleGVjdXRlIGEgZnVuY3Rpb24gYXMgYSBjb25zdHJ1Y3RvclxuICAvLyBvciBhIG5vcm1hbCBmdW5jdGlvbiB3aXRoIHRoZSBwcm92aWRlZCBhcmd1bWVudHMuXG4gIHZhciBleGVjdXRlQm91bmQgPSBmdW5jdGlvbihzb3VyY2VGdW5jLCBib3VuZEZ1bmMsIGNvbnRleHQsIGNhbGxpbmdDb250ZXh0LCBhcmdzKSB7XG4gICAgaWYgKCEoY2FsbGluZ0NvbnRleHQgaW5zdGFuY2VvZiBib3VuZEZ1bmMpKSByZXR1cm4gc291cmNlRnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICB2YXIgc2VsZiA9IGJhc2VDcmVhdGUoc291cmNlRnVuYy5wcm90b3R5cGUpO1xuICAgIHZhciByZXN1bHQgPSBzb3VyY2VGdW5jLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgIGlmIChfLmlzT2JqZWN0KHJlc3VsdCkpIHJldHVybiByZXN1bHQ7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH07XG5cbiAgLy8gQ3JlYXRlIGEgZnVuY3Rpb24gYm91bmQgdG8gYSBnaXZlbiBvYmplY3QgKGFzc2lnbmluZyBgdGhpc2AsIGFuZCBhcmd1bWVudHMsXG4gIC8vIG9wdGlvbmFsbHkpLiBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgRnVuY3Rpb24uYmluZGAgaWZcbiAgLy8gYXZhaWxhYmxlLlxuICBfLmJpbmQgPSByZXN0QXJndW1lbnRzKGZ1bmN0aW9uKGZ1bmMsIGNvbnRleHQsIGFyZ3MpIHtcbiAgICBpZiAoIV8uaXNGdW5jdGlvbihmdW5jKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignQmluZCBtdXN0IGJlIGNhbGxlZCBvbiBhIGZ1bmN0aW9uJyk7XG4gICAgdmFyIGJvdW5kID0gcmVzdEFyZ3VtZW50cyhmdW5jdGlvbihjYWxsQXJncykge1xuICAgICAgcmV0dXJuIGV4ZWN1dGVCb3VuZChmdW5jLCBib3VuZCwgY29udGV4dCwgdGhpcywgYXJncy5jb25jYXQoY2FsbEFyZ3MpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gYm91bmQ7XG4gIH0pO1xuXG4gIC8vIFBhcnRpYWxseSBhcHBseSBhIGZ1bmN0aW9uIGJ5IGNyZWF0aW5nIGEgdmVyc2lvbiB0aGF0IGhhcyBoYWQgc29tZSBvZiBpdHNcbiAgLy8gYXJndW1lbnRzIHByZS1maWxsZWQsIHdpdGhvdXQgY2hhbmdpbmcgaXRzIGR5bmFtaWMgYHRoaXNgIGNvbnRleHQuIF8gYWN0c1xuICAvLyBhcyBhIHBsYWNlaG9sZGVyIGJ5IGRlZmF1bHQsIGFsbG93aW5nIGFueSBjb21iaW5hdGlvbiBvZiBhcmd1bWVudHMgdG8gYmVcbiAgLy8gcHJlLWZpbGxlZC4gU2V0IGBfLnBhcnRpYWwucGxhY2Vob2xkZXJgIGZvciBhIGN1c3RvbSBwbGFjZWhvbGRlciBhcmd1bWVudC5cbiAgXy5wYXJ0aWFsID0gcmVzdEFyZ3VtZW50cyhmdW5jdGlvbihmdW5jLCBib3VuZEFyZ3MpIHtcbiAgICB2YXIgcGxhY2Vob2xkZXIgPSBfLnBhcnRpYWwucGxhY2Vob2xkZXI7XG4gICAgdmFyIGJvdW5kID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcG9zaXRpb24gPSAwLCBsZW5ndGggPSBib3VuZEFyZ3MubGVuZ3RoO1xuICAgICAgdmFyIGFyZ3MgPSBBcnJheShsZW5ndGgpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBhcmdzW2ldID0gYm91bmRBcmdzW2ldID09PSBwbGFjZWhvbGRlciA/IGFyZ3VtZW50c1twb3NpdGlvbisrXSA6IGJvdW5kQXJnc1tpXTtcbiAgICAgIH1cbiAgICAgIHdoaWxlIChwb3NpdGlvbiA8IGFyZ3VtZW50cy5sZW5ndGgpIGFyZ3MucHVzaChhcmd1bWVudHNbcG9zaXRpb24rK10pO1xuICAgICAgcmV0dXJuIGV4ZWN1dGVCb3VuZChmdW5jLCBib3VuZCwgdGhpcywgdGhpcywgYXJncyk7XG4gICAgfTtcbiAgICByZXR1cm4gYm91bmQ7XG4gIH0pO1xuXG4gIF8ucGFydGlhbC5wbGFjZWhvbGRlciA9IF87XG5cbiAgLy8gQmluZCBhIG51bWJlciBvZiBhbiBvYmplY3QncyBtZXRob2RzIHRvIHRoYXQgb2JqZWN0LiBSZW1haW5pbmcgYXJndW1lbnRzXG4gIC8vIGFyZSB0aGUgbWV0aG9kIG5hbWVzIHRvIGJlIGJvdW5kLiBVc2VmdWwgZm9yIGVuc3VyaW5nIHRoYXQgYWxsIGNhbGxiYWNrc1xuICAvLyBkZWZpbmVkIG9uIGFuIG9iamVjdCBiZWxvbmcgdG8gaXQuXG4gIF8uYmluZEFsbCA9IHJlc3RBcmd1bWVudHMoZnVuY3Rpb24ob2JqLCBrZXlzKSB7XG4gICAga2V5cyA9IGZsYXR0ZW4oa2V5cywgZmFsc2UsIGZhbHNlKTtcbiAgICB2YXIgaW5kZXggPSBrZXlzLmxlbmd0aDtcbiAgICBpZiAoaW5kZXggPCAxKSB0aHJvdyBuZXcgRXJyb3IoJ2JpbmRBbGwgbXVzdCBiZSBwYXNzZWQgZnVuY3Rpb24gbmFtZXMnKTtcbiAgICB3aGlsZSAoaW5kZXgtLSkge1xuICAgICAgdmFyIGtleSA9IGtleXNbaW5kZXhdO1xuICAgICAgb2JqW2tleV0gPSBfLmJpbmQob2JqW2tleV0sIG9iaik7XG4gICAgfVxuICB9KTtcblxuICAvLyBNZW1vaXplIGFuIGV4cGVuc2l2ZSBmdW5jdGlvbiBieSBzdG9yaW5nIGl0cyByZXN1bHRzLlxuICBfLm1lbW9pemUgPSBmdW5jdGlvbihmdW5jLCBoYXNoZXIpIHtcbiAgICB2YXIgbWVtb2l6ZSA9IGZ1bmN0aW9uKGtleSkge1xuICAgICAgdmFyIGNhY2hlID0gbWVtb2l6ZS5jYWNoZTtcbiAgICAgIHZhciBhZGRyZXNzID0gJycgKyAoaGFzaGVyID8gaGFzaGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgOiBrZXkpO1xuICAgICAgaWYgKCFoYXMoY2FjaGUsIGFkZHJlc3MpKSBjYWNoZVthZGRyZXNzXSA9IGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIHJldHVybiBjYWNoZVthZGRyZXNzXTtcbiAgICB9O1xuICAgIG1lbW9pemUuY2FjaGUgPSB7fTtcbiAgICByZXR1cm4gbWVtb2l6ZTtcbiAgfTtcblxuICAvLyBEZWxheXMgYSBmdW5jdGlvbiBmb3IgdGhlIGdpdmVuIG51bWJlciBvZiBtaWxsaXNlY29uZHMsIGFuZCB0aGVuIGNhbGxzXG4gIC8vIGl0IHdpdGggdGhlIGFyZ3VtZW50cyBzdXBwbGllZC5cbiAgXy5kZWxheSA9IHJlc3RBcmd1bWVudHMoZnVuY3Rpb24oZnVuYywgd2FpdCwgYXJncykge1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkobnVsbCwgYXJncyk7XG4gICAgfSwgd2FpdCk7XG4gIH0pO1xuXG4gIC8vIERlZmVycyBhIGZ1bmN0aW9uLCBzY2hlZHVsaW5nIGl0IHRvIHJ1biBhZnRlciB0aGUgY3VycmVudCBjYWxsIHN0YWNrIGhhc1xuICAvLyBjbGVhcmVkLlxuICBfLmRlZmVyID0gXy5wYXJ0aWFsKF8uZGVsYXksIF8sIDEpO1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiwgdGhhdCwgd2hlbiBpbnZva2VkLCB3aWxsIG9ubHkgYmUgdHJpZ2dlcmVkIGF0IG1vc3Qgb25jZVxuICAvLyBkdXJpbmcgYSBnaXZlbiB3aW5kb3cgb2YgdGltZS4gTm9ybWFsbHksIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gd2lsbCBydW5cbiAgLy8gYXMgbXVjaCBhcyBpdCBjYW4sIHdpdGhvdXQgZXZlciBnb2luZyBtb3JlIHRoYW4gb25jZSBwZXIgYHdhaXRgIGR1cmF0aW9uO1xuICAvLyBidXQgaWYgeW91J2QgbGlrZSB0byBkaXNhYmxlIHRoZSBleGVjdXRpb24gb24gdGhlIGxlYWRpbmcgZWRnZSwgcGFzc1xuICAvLyBge2xlYWRpbmc6IGZhbHNlfWAuIFRvIGRpc2FibGUgZXhlY3V0aW9uIG9uIHRoZSB0cmFpbGluZyBlZGdlLCBkaXR0by5cbiAgXy50aHJvdHRsZSA9IGZ1bmN0aW9uKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgICB2YXIgdGltZW91dCwgY29udGV4dCwgYXJncywgcmVzdWx0O1xuICAgIHZhciBwcmV2aW91cyA9IDA7XG4gICAgaWYgKCFvcHRpb25zKSBvcHRpb25zID0ge307XG5cbiAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHByZXZpb3VzID0gb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSA/IDAgOiBfLm5vdygpO1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgaWYgKCF0aW1lb3V0KSBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gICAgfTtcblxuICAgIHZhciB0aHJvdHRsZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBub3cgPSBfLm5vdygpO1xuICAgICAgaWYgKCFwcmV2aW91cyAmJiBvcHRpb25zLmxlYWRpbmcgPT09IGZhbHNlKSBwcmV2aW91cyA9IG5vdztcbiAgICAgIHZhciByZW1haW5pbmcgPSB3YWl0IC0gKG5vdyAtIHByZXZpb3VzKTtcbiAgICAgIGNvbnRleHQgPSB0aGlzO1xuICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIGlmIChyZW1haW5pbmcgPD0gMCB8fCByZW1haW5pbmcgPiB3YWl0KSB7XG4gICAgICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHByZXZpb3VzID0gbm93O1xuICAgICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICBpZiAoIXRpbWVvdXQpIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgICAgIH0gZWxzZSBpZiAoIXRpbWVvdXQgJiYgb3B0aW9ucy50cmFpbGluZyAhPT0gZmFsc2UpIHtcbiAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHJlbWFpbmluZyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICB0aHJvdHRsZWQuY2FuY2VsID0gZnVuY3Rpb24oKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICBwcmV2aW91cyA9IDA7XG4gICAgICB0aW1lb3V0ID0gY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICAgIH07XG5cbiAgICByZXR1cm4gdGhyb3R0bGVkO1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiwgdGhhdCwgYXMgbG9uZyBhcyBpdCBjb250aW51ZXMgdG8gYmUgaW52b2tlZCwgd2lsbCBub3RcbiAgLy8gYmUgdHJpZ2dlcmVkLiBUaGUgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgaXQgc3RvcHMgYmVpbmcgY2FsbGVkIGZvclxuICAvLyBOIG1pbGxpc2Vjb25kcy4gSWYgYGltbWVkaWF0ZWAgaXMgcGFzc2VkLCB0cmlnZ2VyIHRoZSBmdW5jdGlvbiBvbiB0aGVcbiAgLy8gbGVhZGluZyBlZGdlLCBpbnN0ZWFkIG9mIHRoZSB0cmFpbGluZy5cbiAgXy5kZWJvdW5jZSA9IGZ1bmN0aW9uKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkge1xuICAgIHZhciB0aW1lb3V0LCByZXN1bHQ7XG5cbiAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbihjb250ZXh0LCBhcmdzKSB7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIGlmIChhcmdzKSByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH07XG5cbiAgICB2YXIgZGVib3VuY2VkID0gcmVzdEFyZ3VtZW50cyhmdW5jdGlvbihhcmdzKSB7XG4gICAgICBpZiAodGltZW91dCkgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgaWYgKGltbWVkaWF0ZSkge1xuICAgICAgICB2YXIgY2FsbE5vdyA9ICF0aW1lb3V0O1xuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gICAgICAgIGlmIChjYWxsTm93KSByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGltZW91dCA9IF8uZGVsYXkobGF0ZXIsIHdhaXQsIHRoaXMsIGFyZ3MpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuXG4gICAgZGVib3VuY2VkLmNhbmNlbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgfTtcblxuICAgIHJldHVybiBkZWJvdW5jZWQ7XG4gIH07XG5cbiAgLy8gUmV0dXJucyB0aGUgZmlyc3QgZnVuY3Rpb24gcGFzc2VkIGFzIGFuIGFyZ3VtZW50IHRvIHRoZSBzZWNvbmQsXG4gIC8vIGFsbG93aW5nIHlvdSB0byBhZGp1c3QgYXJndW1lbnRzLCBydW4gY29kZSBiZWZvcmUgYW5kIGFmdGVyLCBhbmRcbiAgLy8gY29uZGl0aW9uYWxseSBleGVjdXRlIHRoZSBvcmlnaW5hbCBmdW5jdGlvbi5cbiAgXy53cmFwID0gZnVuY3Rpb24oZnVuYywgd3JhcHBlcikge1xuICAgIHJldHVybiBfLnBhcnRpYWwod3JhcHBlciwgZnVuYyk7XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIG5lZ2F0ZWQgdmVyc2lvbiBvZiB0aGUgcGFzc2VkLWluIHByZWRpY2F0ZS5cbiAgXy5uZWdhdGUgPSBmdW5jdGlvbihwcmVkaWNhdGUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gIXByZWRpY2F0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgaXMgdGhlIGNvbXBvc2l0aW9uIG9mIGEgbGlzdCBvZiBmdW5jdGlvbnMsIGVhY2hcbiAgLy8gY29uc3VtaW5nIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGZ1bmN0aW9uIHRoYXQgZm9sbG93cy5cbiAgXy5jb21wb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgdmFyIHN0YXJ0ID0gYXJncy5sZW5ndGggLSAxO1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBpID0gc3RhcnQ7XG4gICAgICB2YXIgcmVzdWx0ID0gYXJnc1tzdGFydF0uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIHdoaWxlIChpLS0pIHJlc3VsdCA9IGFyZ3NbaV0uY2FsbCh0aGlzLCByZXN1bHQpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgb25seSBiZSBleGVjdXRlZCBvbiBhbmQgYWZ0ZXIgdGhlIE50aCBjYWxsLlxuICBfLmFmdGVyID0gZnVuY3Rpb24odGltZXMsIGZ1bmMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoLS10aW1lcyA8IDEpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgb25seSBiZSBleGVjdXRlZCB1cCB0byAoYnV0IG5vdCBpbmNsdWRpbmcpIHRoZSBOdGggY2FsbC5cbiAgXy5iZWZvcmUgPSBmdW5jdGlvbih0aW1lcywgZnVuYykge1xuICAgIHZhciBtZW1vO1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICgtLXRpbWVzID4gMCkge1xuICAgICAgICBtZW1vID0gZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgICAgaWYgKHRpbWVzIDw9IDEpIGZ1bmMgPSBudWxsO1xuICAgICAgcmV0dXJuIG1lbW87XG4gICAgfTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIGF0IG1vc3Qgb25lIHRpbWUsIG5vIG1hdHRlciBob3dcbiAgLy8gb2Z0ZW4geW91IGNhbGwgaXQuIFVzZWZ1bCBmb3IgbGF6eSBpbml0aWFsaXphdGlvbi5cbiAgXy5vbmNlID0gXy5wYXJ0aWFsKF8uYmVmb3JlLCAyKTtcblxuICBfLnJlc3RBcmd1bWVudHMgPSByZXN0QXJndW1lbnRzO1xuXG4gIC8vIE9iamVjdCBGdW5jdGlvbnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIEtleXMgaW4gSUUgPCA5IHRoYXQgd29uJ3QgYmUgaXRlcmF0ZWQgYnkgYGZvciBrZXkgaW4gLi4uYCBhbmQgdGh1cyBtaXNzZWQuXG4gIHZhciBoYXNFbnVtQnVnID0gIXt0b1N0cmluZzogbnVsbH0ucHJvcGVydHlJc0VudW1lcmFibGUoJ3RvU3RyaW5nJyk7XG4gIHZhciBub25FbnVtZXJhYmxlUHJvcHMgPSBbJ3ZhbHVlT2YnLCAnaXNQcm90b3R5cGVPZicsICd0b1N0cmluZycsXG4gICAgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJ2hhc093blByb3BlcnR5JywgJ3RvTG9jYWxlU3RyaW5nJ107XG5cbiAgdmFyIGNvbGxlY3ROb25FbnVtUHJvcHMgPSBmdW5jdGlvbihvYmosIGtleXMpIHtcbiAgICB2YXIgbm9uRW51bUlkeCA9IG5vbkVudW1lcmFibGVQcm9wcy5sZW5ndGg7XG4gICAgdmFyIGNvbnN0cnVjdG9yID0gb2JqLmNvbnN0cnVjdG9yO1xuICAgIHZhciBwcm90byA9IF8uaXNGdW5jdGlvbihjb25zdHJ1Y3RvcikgJiYgY29uc3RydWN0b3IucHJvdG90eXBlIHx8IE9ialByb3RvO1xuXG4gICAgLy8gQ29uc3RydWN0b3IgaXMgYSBzcGVjaWFsIGNhc2UuXG4gICAgdmFyIHByb3AgPSAnY29uc3RydWN0b3InO1xuICAgIGlmIChoYXMob2JqLCBwcm9wKSAmJiAhXy5jb250YWlucyhrZXlzLCBwcm9wKSkga2V5cy5wdXNoKHByb3ApO1xuXG4gICAgd2hpbGUgKG5vbkVudW1JZHgtLSkge1xuICAgICAgcHJvcCA9IG5vbkVudW1lcmFibGVQcm9wc1tub25FbnVtSWR4XTtcbiAgICAgIGlmIChwcm9wIGluIG9iaiAmJiBvYmpbcHJvcF0gIT09IHByb3RvW3Byb3BdICYmICFfLmNvbnRhaW5zKGtleXMsIHByb3ApKSB7XG4gICAgICAgIGtleXMucHVzaChwcm9wKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLy8gUmV0cmlldmUgdGhlIG5hbWVzIG9mIGFuIG9iamVjdCdzIG93biBwcm9wZXJ0aWVzLlxuICAvLyBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgT2JqZWN0LmtleXNgLlxuICBfLmtleXMgPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAoIV8uaXNPYmplY3Qob2JqKSkgcmV0dXJuIFtdO1xuICAgIGlmIChuYXRpdmVLZXlzKSByZXR1cm4gbmF0aXZlS2V5cyhvYmopO1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikgaWYgKGhhcyhvYmosIGtleSkpIGtleXMucHVzaChrZXkpO1xuICAgIC8vIEFoZW0sIElFIDwgOS5cbiAgICBpZiAoaGFzRW51bUJ1ZykgY29sbGVjdE5vbkVudW1Qcm9wcyhvYmosIGtleXMpO1xuICAgIHJldHVybiBrZXlzO1xuICB9O1xuXG4gIC8vIFJldHJpZXZlIGFsbCB0aGUgcHJvcGVydHkgbmFtZXMgb2YgYW4gb2JqZWN0LlxuICBfLmFsbEtleXMgPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAoIV8uaXNPYmplY3Qob2JqKSkgcmV0dXJuIFtdO1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikga2V5cy5wdXNoKGtleSk7XG4gICAgLy8gQWhlbSwgSUUgPCA5LlxuICAgIGlmIChoYXNFbnVtQnVnKSBjb2xsZWN0Tm9uRW51bVByb3BzKG9iaiwga2V5cyk7XG4gICAgcmV0dXJuIGtleXM7XG4gIH07XG5cbiAgLy8gUmV0cmlldmUgdGhlIHZhbHVlcyBvZiBhbiBvYmplY3QncyBwcm9wZXJ0aWVzLlxuICBfLnZhbHVlcyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBrZXlzID0gXy5rZXlzKG9iaik7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciB2YWx1ZXMgPSBBcnJheShsZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbHVlc1tpXSA9IG9ialtrZXlzW2ldXTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfTtcblxuICAvLyBSZXR1cm5zIHRoZSByZXN1bHRzIG9mIGFwcGx5aW5nIHRoZSBpdGVyYXRlZSB0byBlYWNoIGVsZW1lbnQgb2YgdGhlIG9iamVjdC5cbiAgLy8gSW4gY29udHJhc3QgdG8gXy5tYXAgaXQgcmV0dXJucyBhbiBvYmplY3QuXG4gIF8ubWFwT2JqZWN0ID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICAgIGl0ZXJhdGVlID0gY2IoaXRlcmF0ZWUsIGNvbnRleHQpO1xuICAgIHZhciBrZXlzID0gXy5rZXlzKG9iaiksXG4gICAgICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoLFxuICAgICAgICByZXN1bHRzID0ge307XG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdmFyIGN1cnJlbnRLZXkgPSBrZXlzW2luZGV4XTtcbiAgICAgIHJlc3VsdHNbY3VycmVudEtleV0gPSBpdGVyYXRlZShvYmpbY3VycmVudEtleV0sIGN1cnJlbnRLZXksIG9iaik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIC8vIENvbnZlcnQgYW4gb2JqZWN0IGludG8gYSBsaXN0IG9mIGBba2V5LCB2YWx1ZV1gIHBhaXJzLlxuICAvLyBUaGUgb3Bwb3NpdGUgb2YgXy5vYmplY3QuXG4gIF8ucGFpcnMgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIga2V5cyA9IF8ua2V5cyhvYmopO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgcGFpcnMgPSBBcnJheShsZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHBhaXJzW2ldID0gW2tleXNbaV0sIG9ialtrZXlzW2ldXV07XG4gICAgfVxuICAgIHJldHVybiBwYWlycztcbiAgfTtcblxuICAvLyBJbnZlcnQgdGhlIGtleXMgYW5kIHZhbHVlcyBvZiBhbiBvYmplY3QuIFRoZSB2YWx1ZXMgbXVzdCBiZSBzZXJpYWxpemFibGUuXG4gIF8uaW52ZXJ0ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIHZhciBrZXlzID0gXy5rZXlzKG9iaik7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGtleXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc3VsdFtvYmpba2V5c1tpXV1dID0ga2V5c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBSZXR1cm4gYSBzb3J0ZWQgbGlzdCBvZiB0aGUgZnVuY3Rpb24gbmFtZXMgYXZhaWxhYmxlIG9uIHRoZSBvYmplY3QuXG4gIC8vIEFsaWFzZWQgYXMgYG1ldGhvZHNgLlxuICBfLmZ1bmN0aW9ucyA9IF8ubWV0aG9kcyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBuYW1lcyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChfLmlzRnVuY3Rpb24ob2JqW2tleV0pKSBuYW1lcy5wdXNoKGtleSk7XG4gICAgfVxuICAgIHJldHVybiBuYW1lcy5zb3J0KCk7XG4gIH07XG5cbiAgLy8gQW4gaW50ZXJuYWwgZnVuY3Rpb24gZm9yIGNyZWF0aW5nIGFzc2lnbmVyIGZ1bmN0aW9ucy5cbiAgdmFyIGNyZWF0ZUFzc2lnbmVyID0gZnVuY3Rpb24oa2V5c0Z1bmMsIGRlZmF1bHRzKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKG9iaikge1xuICAgICAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICBpZiAoZGVmYXVsdHMpIG9iaiA9IE9iamVjdChvYmopO1xuICAgICAgaWYgKGxlbmd0aCA8IDIgfHwgb2JqID09IG51bGwpIHJldHVybiBvYmo7XG4gICAgICBmb3IgKHZhciBpbmRleCA9IDE7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaW5kZXhdLFxuICAgICAgICAgICAga2V5cyA9IGtleXNGdW5jKHNvdXJjZSksXG4gICAgICAgICAgICBsID0ga2V5cy5sZW5ndGg7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgICAgaWYgKCFkZWZhdWx0cyB8fCBvYmpba2V5XSA9PT0gdm9pZCAwKSBvYmpba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH07XG4gIH07XG5cbiAgLy8gRXh0ZW5kIGEgZ2l2ZW4gb2JqZWN0IHdpdGggYWxsIHRoZSBwcm9wZXJ0aWVzIGluIHBhc3NlZC1pbiBvYmplY3QocykuXG4gIF8uZXh0ZW5kID0gY3JlYXRlQXNzaWduZXIoXy5hbGxLZXlzKTtcblxuICAvLyBBc3NpZ25zIGEgZ2l2ZW4gb2JqZWN0IHdpdGggYWxsIHRoZSBvd24gcHJvcGVydGllcyBpbiB0aGUgcGFzc2VkLWluIG9iamVjdChzKS5cbiAgLy8gKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9hc3NpZ24pXG4gIF8uZXh0ZW5kT3duID0gXy5hc3NpZ24gPSBjcmVhdGVBc3NpZ25lcihfLmtleXMpO1xuXG4gIC8vIFJldHVybnMgdGhlIGZpcnN0IGtleSBvbiBhbiBvYmplY3QgdGhhdCBwYXNzZXMgYSBwcmVkaWNhdGUgdGVzdC5cbiAgXy5maW5kS2V5ID0gZnVuY3Rpb24ob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICBwcmVkaWNhdGUgPSBjYihwcmVkaWNhdGUsIGNvbnRleHQpO1xuICAgIHZhciBrZXlzID0gXy5rZXlzKG9iaiksIGtleTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0ga2V5cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgIGlmIChwcmVkaWNhdGUob2JqW2tleV0sIGtleSwgb2JqKSkgcmV0dXJuIGtleTtcbiAgICB9XG4gIH07XG5cbiAgLy8gSW50ZXJuYWwgcGljayBoZWxwZXIgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGlmIGBvYmpgIGhhcyBrZXkgYGtleWAuXG4gIHZhciBrZXlJbk9iaiA9IGZ1bmN0aW9uKHZhbHVlLCBrZXksIG9iaikge1xuICAgIHJldHVybiBrZXkgaW4gb2JqO1xuICB9O1xuXG4gIC8vIFJldHVybiBhIGNvcHkgb2YgdGhlIG9iamVjdCBvbmx5IGNvbnRhaW5pbmcgdGhlIHdoaXRlbGlzdGVkIHByb3BlcnRpZXMuXG4gIF8ucGljayA9IHJlc3RBcmd1bWVudHMoZnVuY3Rpb24ob2JqLCBrZXlzKSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9LCBpdGVyYXRlZSA9IGtleXNbMF07XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gcmVzdWx0O1xuICAgIGlmIChfLmlzRnVuY3Rpb24oaXRlcmF0ZWUpKSB7XG4gICAgICBpZiAoa2V5cy5sZW5ndGggPiAxKSBpdGVyYXRlZSA9IG9wdGltaXplQ2IoaXRlcmF0ZWUsIGtleXNbMV0pO1xuICAgICAga2V5cyA9IF8uYWxsS2V5cyhvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBpdGVyYXRlZSA9IGtleUluT2JqO1xuICAgICAga2V5cyA9IGZsYXR0ZW4oa2V5cywgZmFsc2UsIGZhbHNlKTtcbiAgICAgIG9iaiA9IE9iamVjdChvYmopO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0ga2V5cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICB2YXIgdmFsdWUgPSBvYmpba2V5XTtcbiAgICAgIGlmIChpdGVyYXRlZSh2YWx1ZSwga2V5LCBvYmopKSByZXN1bHRba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9KTtcblxuICAvLyBSZXR1cm4gYSBjb3B5IG9mIHRoZSBvYmplY3Qgd2l0aG91dCB0aGUgYmxhY2tsaXN0ZWQgcHJvcGVydGllcy5cbiAgXy5vbWl0ID0gcmVzdEFyZ3VtZW50cyhmdW5jdGlvbihvYmosIGtleXMpIHtcbiAgICB2YXIgaXRlcmF0ZWUgPSBrZXlzWzBdLCBjb250ZXh0O1xuICAgIGlmIChfLmlzRnVuY3Rpb24oaXRlcmF0ZWUpKSB7XG4gICAgICBpdGVyYXRlZSA9IF8ubmVnYXRlKGl0ZXJhdGVlKTtcbiAgICAgIGlmIChrZXlzLmxlbmd0aCA+IDEpIGNvbnRleHQgPSBrZXlzWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICBrZXlzID0gXy5tYXAoZmxhdHRlbihrZXlzLCBmYWxzZSwgZmFsc2UpLCBTdHJpbmcpO1xuICAgICAgaXRlcmF0ZWUgPSBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgICAgIHJldHVybiAhXy5jb250YWlucyhrZXlzLCBrZXkpO1xuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIF8ucGljayhvYmosIGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgfSk7XG5cbiAgLy8gRmlsbCBpbiBhIGdpdmVuIG9iamVjdCB3aXRoIGRlZmF1bHQgcHJvcGVydGllcy5cbiAgXy5kZWZhdWx0cyA9IGNyZWF0ZUFzc2lnbmVyKF8uYWxsS2V5cywgdHJ1ZSk7XG5cbiAgLy8gQ3JlYXRlcyBhbiBvYmplY3QgdGhhdCBpbmhlcml0cyBmcm9tIHRoZSBnaXZlbiBwcm90b3R5cGUgb2JqZWN0LlxuICAvLyBJZiBhZGRpdGlvbmFsIHByb3BlcnRpZXMgYXJlIHByb3ZpZGVkIHRoZW4gdGhleSB3aWxsIGJlIGFkZGVkIHRvIHRoZVxuICAvLyBjcmVhdGVkIG9iamVjdC5cbiAgXy5jcmVhdGUgPSBmdW5jdGlvbihwcm90b3R5cGUsIHByb3BzKSB7XG4gICAgdmFyIHJlc3VsdCA9IGJhc2VDcmVhdGUocHJvdG90eXBlKTtcbiAgICBpZiAocHJvcHMpIF8uZXh0ZW5kT3duKHJlc3VsdCwgcHJvcHMpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gQ3JlYXRlIGEgKHNoYWxsb3ctY2xvbmVkKSBkdXBsaWNhdGUgb2YgYW4gb2JqZWN0LlxuICBfLmNsb25lID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKCFfLmlzT2JqZWN0KG9iaikpIHJldHVybiBvYmo7XG4gICAgcmV0dXJuIF8uaXNBcnJheShvYmopID8gb2JqLnNsaWNlKCkgOiBfLmV4dGVuZCh7fSwgb2JqKTtcbiAgfTtcblxuICAvLyBJbnZva2VzIGludGVyY2VwdG9yIHdpdGggdGhlIG9iaiwgYW5kIHRoZW4gcmV0dXJucyBvYmouXG4gIC8vIFRoZSBwcmltYXJ5IHB1cnBvc2Ugb2YgdGhpcyBtZXRob2QgaXMgdG8gXCJ0YXAgaW50b1wiIGEgbWV0aG9kIGNoYWluLCBpblxuICAvLyBvcmRlciB0byBwZXJmb3JtIG9wZXJhdGlvbnMgb24gaW50ZXJtZWRpYXRlIHJlc3VsdHMgd2l0aGluIHRoZSBjaGFpbi5cbiAgXy50YXAgPSBmdW5jdGlvbihvYmosIGludGVyY2VwdG9yKSB7XG4gICAgaW50ZXJjZXB0b3Iob2JqKTtcbiAgICByZXR1cm4gb2JqO1xuICB9O1xuXG4gIC8vIFJldHVybnMgd2hldGhlciBhbiBvYmplY3QgaGFzIGEgZ2l2ZW4gc2V0IG9mIGBrZXk6dmFsdWVgIHBhaXJzLlxuICBfLmlzTWF0Y2ggPSBmdW5jdGlvbihvYmplY3QsIGF0dHJzKSB7XG4gICAgdmFyIGtleXMgPSBfLmtleXMoYXR0cnMpLCBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICBpZiAob2JqZWN0ID09IG51bGwpIHJldHVybiAhbGVuZ3RoO1xuICAgIHZhciBvYmogPSBPYmplY3Qob2JqZWN0KTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgIGlmIChhdHRyc1trZXldICE9PSBvYmpba2V5XSB8fCAhKGtleSBpbiBvYmopKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG5cbiAgLy8gSW50ZXJuYWwgcmVjdXJzaXZlIGNvbXBhcmlzb24gZnVuY3Rpb24gZm9yIGBpc0VxdWFsYC5cbiAgdmFyIGVxLCBkZWVwRXE7XG4gIGVxID0gZnVuY3Rpb24oYSwgYiwgYVN0YWNrLCBiU3RhY2spIHtcbiAgICAvLyBJZGVudGljYWwgb2JqZWN0cyBhcmUgZXF1YWwuIGAwID09PSAtMGAsIGJ1dCB0aGV5IGFyZW4ndCBpZGVudGljYWwuXG4gICAgLy8gU2VlIHRoZSBbSGFybW9ueSBgZWdhbGAgcHJvcG9zYWxdKGh0dHA6Ly93aWtpLmVjbWFzY3JpcHQub3JnL2Rva3UucGhwP2lkPWhhcm1vbnk6ZWdhbCkuXG4gICAgaWYgKGEgPT09IGIpIHJldHVybiBhICE9PSAwIHx8IDEgLyBhID09PSAxIC8gYjtcbiAgICAvLyBgbnVsbGAgb3IgYHVuZGVmaW5lZGAgb25seSBlcXVhbCB0byBpdHNlbGYgKHN0cmljdCBjb21wYXJpc29uKS5cbiAgICBpZiAoYSA9PSBudWxsIHx8IGIgPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIGBOYU5gcyBhcmUgZXF1aXZhbGVudCwgYnV0IG5vbi1yZWZsZXhpdmUuXG4gICAgaWYgKGEgIT09IGEpIHJldHVybiBiICE9PSBiO1xuICAgIC8vIEV4aGF1c3QgcHJpbWl0aXZlIGNoZWNrc1xuICAgIHZhciB0eXBlID0gdHlwZW9mIGE7XG4gICAgaWYgKHR5cGUgIT09ICdmdW5jdGlvbicgJiYgdHlwZSAhPT0gJ29iamVjdCcgJiYgdHlwZW9mIGIgIT0gJ29iamVjdCcpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gZGVlcEVxKGEsIGIsIGFTdGFjaywgYlN0YWNrKTtcbiAgfTtcblxuICAvLyBJbnRlcm5hbCByZWN1cnNpdmUgY29tcGFyaXNvbiBmdW5jdGlvbiBmb3IgYGlzRXF1YWxgLlxuICBkZWVwRXEgPSBmdW5jdGlvbihhLCBiLCBhU3RhY2ssIGJTdGFjaykge1xuICAgIC8vIFVud3JhcCBhbnkgd3JhcHBlZCBvYmplY3RzLlxuICAgIGlmIChhIGluc3RhbmNlb2YgXykgYSA9IGEuX3dyYXBwZWQ7XG4gICAgaWYgKGIgaW5zdGFuY2VvZiBfKSBiID0gYi5fd3JhcHBlZDtcbiAgICAvLyBDb21wYXJlIGBbW0NsYXNzXV1gIG5hbWVzLlxuICAgIHZhciBjbGFzc05hbWUgPSB0b1N0cmluZy5jYWxsKGEpO1xuICAgIGlmIChjbGFzc05hbWUgIT09IHRvU3RyaW5nLmNhbGwoYikpIHJldHVybiBmYWxzZTtcbiAgICBzd2l0Y2ggKGNsYXNzTmFtZSkge1xuICAgICAgLy8gU3RyaW5ncywgbnVtYmVycywgcmVndWxhciBleHByZXNzaW9ucywgZGF0ZXMsIGFuZCBib29sZWFucyBhcmUgY29tcGFyZWQgYnkgdmFsdWUuXG4gICAgICBjYXNlICdbb2JqZWN0IFJlZ0V4cF0nOlxuICAgICAgLy8gUmVnRXhwcyBhcmUgY29lcmNlZCB0byBzdHJpbmdzIGZvciBjb21wYXJpc29uIChOb3RlOiAnJyArIC9hL2kgPT09ICcvYS9pJylcbiAgICAgIGNhc2UgJ1tvYmplY3QgU3RyaW5nXSc6XG4gICAgICAgIC8vIFByaW1pdGl2ZXMgYW5kIHRoZWlyIGNvcnJlc3BvbmRpbmcgb2JqZWN0IHdyYXBwZXJzIGFyZSBlcXVpdmFsZW50OyB0aHVzLCBgXCI1XCJgIGlzXG4gICAgICAgIC8vIGVxdWl2YWxlbnQgdG8gYG5ldyBTdHJpbmcoXCI1XCIpYC5cbiAgICAgICAgcmV0dXJuICcnICsgYSA9PT0gJycgKyBiO1xuICAgICAgY2FzZSAnW29iamVjdCBOdW1iZXJdJzpcbiAgICAgICAgLy8gYE5hTmBzIGFyZSBlcXVpdmFsZW50LCBidXQgbm9uLXJlZmxleGl2ZS5cbiAgICAgICAgLy8gT2JqZWN0KE5hTikgaXMgZXF1aXZhbGVudCB0byBOYU4uXG4gICAgICAgIGlmICgrYSAhPT0gK2EpIHJldHVybiArYiAhPT0gK2I7XG4gICAgICAgIC8vIEFuIGBlZ2FsYCBjb21wYXJpc29uIGlzIHBlcmZvcm1lZCBmb3Igb3RoZXIgbnVtZXJpYyB2YWx1ZXMuXG4gICAgICAgIHJldHVybiArYSA9PT0gMCA/IDEgLyArYSA9PT0gMSAvIGIgOiArYSA9PT0gK2I7XG4gICAgICBjYXNlICdbb2JqZWN0IERhdGVdJzpcbiAgICAgIGNhc2UgJ1tvYmplY3QgQm9vbGVhbl0nOlxuICAgICAgICAvLyBDb2VyY2UgZGF0ZXMgYW5kIGJvb2xlYW5zIHRvIG51bWVyaWMgcHJpbWl0aXZlIHZhbHVlcy4gRGF0ZXMgYXJlIGNvbXBhcmVkIGJ5IHRoZWlyXG4gICAgICAgIC8vIG1pbGxpc2Vjb25kIHJlcHJlc2VudGF0aW9ucy4gTm90ZSB0aGF0IGludmFsaWQgZGF0ZXMgd2l0aCBtaWxsaXNlY29uZCByZXByZXNlbnRhdGlvbnNcbiAgICAgICAgLy8gb2YgYE5hTmAgYXJlIG5vdCBlcXVpdmFsZW50LlxuICAgICAgICByZXR1cm4gK2EgPT09ICtiO1xuICAgICAgY2FzZSAnW29iamVjdCBTeW1ib2xdJzpcbiAgICAgICAgcmV0dXJuIFN5bWJvbFByb3RvLnZhbHVlT2YuY2FsbChhKSA9PT0gU3ltYm9sUHJvdG8udmFsdWVPZi5jYWxsKGIpO1xuICAgIH1cblxuICAgIHZhciBhcmVBcnJheXMgPSBjbGFzc05hbWUgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgaWYgKCFhcmVBcnJheXMpIHtcbiAgICAgIGlmICh0eXBlb2YgYSAhPSAnb2JqZWN0JyB8fCB0eXBlb2YgYiAhPSAnb2JqZWN0JykgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAvLyBPYmplY3RzIHdpdGggZGlmZmVyZW50IGNvbnN0cnVjdG9ycyBhcmUgbm90IGVxdWl2YWxlbnQsIGJ1dCBgT2JqZWN0YHMgb3IgYEFycmF5YHNcbiAgICAgIC8vIGZyb20gZGlmZmVyZW50IGZyYW1lcyBhcmUuXG4gICAgICB2YXIgYUN0b3IgPSBhLmNvbnN0cnVjdG9yLCBiQ3RvciA9IGIuY29uc3RydWN0b3I7XG4gICAgICBpZiAoYUN0b3IgIT09IGJDdG9yICYmICEoXy5pc0Z1bmN0aW9uKGFDdG9yKSAmJiBhQ3RvciBpbnN0YW5jZW9mIGFDdG9yICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5pc0Z1bmN0aW9uKGJDdG9yKSAmJiBiQ3RvciBpbnN0YW5jZW9mIGJDdG9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAmJiAoJ2NvbnN0cnVjdG9yJyBpbiBhICYmICdjb25zdHJ1Y3RvcicgaW4gYikpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBBc3N1bWUgZXF1YWxpdHkgZm9yIGN5Y2xpYyBzdHJ1Y3R1cmVzLiBUaGUgYWxnb3JpdGhtIGZvciBkZXRlY3RpbmcgY3ljbGljXG4gICAgLy8gc3RydWN0dXJlcyBpcyBhZGFwdGVkIGZyb20gRVMgNS4xIHNlY3Rpb24gMTUuMTIuMywgYWJzdHJhY3Qgb3BlcmF0aW9uIGBKT2AuXG5cbiAgICAvLyBJbml0aWFsaXppbmcgc3RhY2sgb2YgdHJhdmVyc2VkIG9iamVjdHMuXG4gICAgLy8gSXQncyBkb25lIGhlcmUgc2luY2Ugd2Ugb25seSBuZWVkIHRoZW0gZm9yIG9iamVjdHMgYW5kIGFycmF5cyBjb21wYXJpc29uLlxuICAgIGFTdGFjayA9IGFTdGFjayB8fCBbXTtcbiAgICBiU3RhY2sgPSBiU3RhY2sgfHwgW107XG4gICAgdmFyIGxlbmd0aCA9IGFTdGFjay5sZW5ndGg7XG4gICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICAvLyBMaW5lYXIgc2VhcmNoLiBQZXJmb3JtYW5jZSBpcyBpbnZlcnNlbHkgcHJvcG9ydGlvbmFsIHRvIHRoZSBudW1iZXIgb2ZcbiAgICAgIC8vIHVuaXF1ZSBuZXN0ZWQgc3RydWN0dXJlcy5cbiAgICAgIGlmIChhU3RhY2tbbGVuZ3RoXSA9PT0gYSkgcmV0dXJuIGJTdGFja1tsZW5ndGhdID09PSBiO1xuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgZmlyc3Qgb2JqZWN0IHRvIHRoZSBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAgICBhU3RhY2sucHVzaChhKTtcbiAgICBiU3RhY2sucHVzaChiKTtcblxuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyBhbmQgYXJyYXlzLlxuICAgIGlmIChhcmVBcnJheXMpIHtcbiAgICAgIC8vIENvbXBhcmUgYXJyYXkgbGVuZ3RocyB0byBkZXRlcm1pbmUgaWYgYSBkZWVwIGNvbXBhcmlzb24gaXMgbmVjZXNzYXJ5LlxuICAgICAgbGVuZ3RoID0gYS5sZW5ndGg7XG4gICAgICBpZiAobGVuZ3RoICE9PSBiLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgLy8gRGVlcCBjb21wYXJlIHRoZSBjb250ZW50cywgaWdub3Jpbmcgbm9uLW51bWVyaWMgcHJvcGVydGllcy5cbiAgICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgICBpZiAoIWVxKGFbbGVuZ3RoXSwgYltsZW5ndGhdLCBhU3RhY2ssIGJTdGFjaykpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRGVlcCBjb21wYXJlIG9iamVjdHMuXG4gICAgICB2YXIga2V5cyA9IF8ua2V5cyhhKSwga2V5O1xuICAgICAgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgICAvLyBFbnN1cmUgdGhhdCBib3RoIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBudW1iZXIgb2YgcHJvcGVydGllcyBiZWZvcmUgY29tcGFyaW5nIGRlZXAgZXF1YWxpdHkuXG4gICAgICBpZiAoXy5rZXlzKGIpLmxlbmd0aCAhPT0gbGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgICAgLy8gRGVlcCBjb21wYXJlIGVhY2ggbWVtYmVyXG4gICAgICAgIGtleSA9IGtleXNbbGVuZ3RoXTtcbiAgICAgICAgaWYgKCEoaGFzKGIsIGtleSkgJiYgZXEoYVtrZXldLCBiW2tleV0sIGFTdGFjaywgYlN0YWNrKSkpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gUmVtb3ZlIHRoZSBmaXJzdCBvYmplY3QgZnJvbSB0aGUgc3RhY2sgb2YgdHJhdmVyc2VkIG9iamVjdHMuXG4gICAgYVN0YWNrLnBvcCgpO1xuICAgIGJTdGFjay5wb3AoKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICAvLyBQZXJmb3JtIGEgZGVlcCBjb21wYXJpc29uIHRvIGNoZWNrIGlmIHR3byBvYmplY3RzIGFyZSBlcXVhbC5cbiAgXy5pc0VxdWFsID0gZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBlcShhLCBiKTtcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIGFycmF5LCBzdHJpbmcsIG9yIG9iamVjdCBlbXB0eT9cbiAgLy8gQW4gXCJlbXB0eVwiIG9iamVjdCBoYXMgbm8gZW51bWVyYWJsZSBvd24tcHJvcGVydGllcy5cbiAgXy5pc0VtcHR5ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoaXNBcnJheUxpa2Uob2JqKSAmJiAoXy5pc0FycmF5KG9iaikgfHwgXy5pc1N0cmluZyhvYmopIHx8IF8uaXNBcmd1bWVudHMob2JqKSkpIHJldHVybiBvYmoubGVuZ3RoID09PSAwO1xuICAgIHJldHVybiBfLmtleXMob2JqKS5sZW5ndGggPT09IDA7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiB2YWx1ZSBhIERPTSBlbGVtZW50P1xuICBfLmlzRWxlbWVudCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiAhIShvYmogJiYgb2JqLm5vZGVUeXBlID09PSAxKTtcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhbHVlIGFuIGFycmF5P1xuICAvLyBEZWxlZ2F0ZXMgdG8gRUNNQTUncyBuYXRpdmUgQXJyYXkuaXNBcnJheVxuICBfLmlzQXJyYXkgPSBuYXRpdmVJc0FycmF5IHx8IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiB0b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiB2YXJpYWJsZSBhbiBvYmplY3Q/XG4gIF8uaXNPYmplY3QgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgdHlwZSA9IHR5cGVvZiBvYmo7XG4gICAgcmV0dXJuIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgdHlwZSA9PT0gJ29iamVjdCcgJiYgISFvYmo7XG4gIH07XG5cbiAgLy8gQWRkIHNvbWUgaXNUeXBlIG1ldGhvZHM6IGlzQXJndW1lbnRzLCBpc0Z1bmN0aW9uLCBpc1N0cmluZywgaXNOdW1iZXIsIGlzRGF0ZSwgaXNSZWdFeHAsIGlzRXJyb3IsIGlzTWFwLCBpc1dlYWtNYXAsIGlzU2V0LCBpc1dlYWtTZXQuXG4gIF8uZWFjaChbJ0FyZ3VtZW50cycsICdGdW5jdGlvbicsICdTdHJpbmcnLCAnTnVtYmVyJywgJ0RhdGUnLCAnUmVnRXhwJywgJ0Vycm9yJywgJ1N5bWJvbCcsICdNYXAnLCAnV2Vha01hcCcsICdTZXQnLCAnV2Vha1NldCddLCBmdW5jdGlvbihuYW1lKSB7XG4gICAgX1snaXMnICsgbmFtZV0gPSBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiB0b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0ICcgKyBuYW1lICsgJ10nO1xuICAgIH07XG4gIH0pO1xuXG4gIC8vIERlZmluZSBhIGZhbGxiYWNrIHZlcnNpb24gb2YgdGhlIG1ldGhvZCBpbiBicm93c2VycyAoYWhlbSwgSUUgPCA5KSwgd2hlcmVcbiAgLy8gdGhlcmUgaXNuJ3QgYW55IGluc3BlY3RhYmxlIFwiQXJndW1lbnRzXCIgdHlwZS5cbiAgaWYgKCFfLmlzQXJndW1lbnRzKGFyZ3VtZW50cykpIHtcbiAgICBfLmlzQXJndW1lbnRzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gaGFzKG9iaiwgJ2NhbGxlZScpO1xuICAgIH07XG4gIH1cblxuICAvLyBPcHRpbWl6ZSBgaXNGdW5jdGlvbmAgaWYgYXBwcm9wcmlhdGUuIFdvcmsgYXJvdW5kIHNvbWUgdHlwZW9mIGJ1Z3MgaW4gb2xkIHY4LFxuICAvLyBJRSAxMSAoIzE2MjEpLCBTYWZhcmkgOCAoIzE5MjkpLCBhbmQgUGhhbnRvbUpTICgjMjIzNikuXG4gIHZhciBub2RlbGlzdCA9IHJvb3QuZG9jdW1lbnQgJiYgcm9vdC5kb2N1bWVudC5jaGlsZE5vZGVzO1xuICBpZiAodHlwZW9mIC8uLyAhPSAnZnVuY3Rpb24nICYmIHR5cGVvZiBJbnQ4QXJyYXkgIT0gJ29iamVjdCcgJiYgdHlwZW9mIG5vZGVsaXN0ICE9ICdmdW5jdGlvbicpIHtcbiAgICBfLmlzRnVuY3Rpb24gPSBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqID09ICdmdW5jdGlvbicgfHwgZmFsc2U7XG4gICAgfTtcbiAgfVxuXG4gIC8vIElzIGEgZ2l2ZW4gb2JqZWN0IGEgZmluaXRlIG51bWJlcj9cbiAgXy5pc0Zpbml0ZSA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiAhXy5pc1N5bWJvbChvYmopICYmIGlzRmluaXRlKG9iaikgJiYgIWlzTmFOKHBhcnNlRmxvYXQob2JqKSk7XG4gIH07XG5cbiAgLy8gSXMgdGhlIGdpdmVuIHZhbHVlIGBOYU5gP1xuICBfLmlzTmFOID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIF8uaXNOdW1iZXIob2JqKSAmJiBpc05hTihvYmopO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFsdWUgYSBib29sZWFuP1xuICBfLmlzQm9vbGVhbiA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IHRydWUgfHwgb2JqID09PSBmYWxzZSB8fCB0b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IEJvb2xlYW5dJztcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhbHVlIGVxdWFsIHRvIG51bGw/XG4gIF8uaXNOdWxsID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gbnVsbDtcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhcmlhYmxlIHVuZGVmaW5lZD9cbiAgXy5pc1VuZGVmaW5lZCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IHZvaWQgMDtcbiAgfTtcblxuICAvLyBTaG9ydGN1dCBmdW5jdGlvbiBmb3IgY2hlY2tpbmcgaWYgYW4gb2JqZWN0IGhhcyBhIGdpdmVuIHByb3BlcnR5IGRpcmVjdGx5XG4gIC8vIG9uIGl0c2VsZiAoaW4gb3RoZXIgd29yZHMsIG5vdCBvbiBhIHByb3RvdHlwZSkuXG4gIF8uaGFzID0gZnVuY3Rpb24ob2JqLCBwYXRoKSB7XG4gICAgaWYgKCFfLmlzQXJyYXkocGF0aCkpIHtcbiAgICAgIHJldHVybiBoYXMob2JqLCBwYXRoKTtcbiAgICB9XG4gICAgdmFyIGxlbmd0aCA9IHBhdGgubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBwYXRoW2ldO1xuICAgICAgaWYgKG9iaiA9PSBudWxsIHx8ICFoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBvYmogPSBvYmpba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuICEhbGVuZ3RoO1xuICB9O1xuXG4gIC8vIFV0aWxpdHkgRnVuY3Rpb25zXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gUnVuIFVuZGVyc2NvcmUuanMgaW4gKm5vQ29uZmxpY3QqIG1vZGUsIHJldHVybmluZyB0aGUgYF9gIHZhcmlhYmxlIHRvIGl0c1xuICAvLyBwcmV2aW91cyBvd25lci4gUmV0dXJucyBhIHJlZmVyZW5jZSB0byB0aGUgVW5kZXJzY29yZSBvYmplY3QuXG4gIF8ubm9Db25mbGljdCA9IGZ1bmN0aW9uKCkge1xuICAgIHJvb3QuXyA9IHByZXZpb3VzVW5kZXJzY29yZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvLyBLZWVwIHRoZSBpZGVudGl0eSBmdW5jdGlvbiBhcm91bmQgZm9yIGRlZmF1bHQgaXRlcmF0ZWVzLlxuICBfLmlkZW50aXR5ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgLy8gUHJlZGljYXRlLWdlbmVyYXRpbmcgZnVuY3Rpb25zLiBPZnRlbiB1c2VmdWwgb3V0c2lkZSBvZiBVbmRlcnNjb3JlLlxuICBfLmNvbnN0YW50ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgfTtcblxuICBfLm5vb3AgPSBmdW5jdGlvbigpe307XG5cbiAgLy8gQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQsIHdoZW4gcGFzc2VkIGFuIG9iamVjdCwgd2lsbCB0cmF2ZXJzZSB0aGF0IG9iamVjdOKAmXNcbiAgLy8gcHJvcGVydGllcyBkb3duIHRoZSBnaXZlbiBgcGF0aGAsIHNwZWNpZmllZCBhcyBhbiBhcnJheSBvZiBrZXlzIG9yIGluZGV4ZXMuXG4gIF8ucHJvcGVydHkgPSBmdW5jdGlvbihwYXRoKSB7XG4gICAgaWYgKCFfLmlzQXJyYXkocGF0aCkpIHtcbiAgICAgIHJldHVybiBzaGFsbG93UHJvcGVydHkocGF0aCk7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBkZWVwR2V0KG9iaiwgcGF0aCk7XG4gICAgfTtcbiAgfTtcblxuICAvLyBHZW5lcmF0ZXMgYSBmdW5jdGlvbiBmb3IgYSBnaXZlbiBvYmplY3QgdGhhdCByZXR1cm5zIGEgZ2l2ZW4gcHJvcGVydHkuXG4gIF8ucHJvcGVydHlPZiA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmIChvYmogPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7fTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHBhdGgpIHtcbiAgICAgIHJldHVybiAhXy5pc0FycmF5KHBhdGgpID8gb2JqW3BhdGhdIDogZGVlcEdldChvYmosIHBhdGgpO1xuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIHByZWRpY2F0ZSBmb3IgY2hlY2tpbmcgd2hldGhlciBhbiBvYmplY3QgaGFzIGEgZ2l2ZW4gc2V0IG9mXG4gIC8vIGBrZXk6dmFsdWVgIHBhaXJzLlxuICBfLm1hdGNoZXIgPSBfLm1hdGNoZXMgPSBmdW5jdGlvbihhdHRycykge1xuICAgIGF0dHJzID0gXy5leHRlbmRPd24oe30sIGF0dHJzKTtcbiAgICByZXR1cm4gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gXy5pc01hdGNoKG9iaiwgYXR0cnMpO1xuICAgIH07XG4gIH07XG5cbiAgLy8gUnVuIGEgZnVuY3Rpb24gKipuKiogdGltZXMuXG4gIF8udGltZXMgPSBmdW5jdGlvbihuLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICAgIHZhciBhY2N1bSA9IEFycmF5KE1hdGgubWF4KDAsIG4pKTtcbiAgICBpdGVyYXRlZSA9IG9wdGltaXplQ2IoaXRlcmF0ZWUsIGNvbnRleHQsIDEpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgaSsrKSBhY2N1bVtpXSA9IGl0ZXJhdGVlKGkpO1xuICAgIHJldHVybiBhY2N1bTtcbiAgfTtcblxuICAvLyBSZXR1cm4gYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIG1pbiBhbmQgbWF4IChpbmNsdXNpdmUpLlxuICBfLnJhbmRvbSA9IGZ1bmN0aW9uKG1pbiwgbWF4KSB7XG4gICAgaWYgKG1heCA9PSBudWxsKSB7XG4gICAgICBtYXggPSBtaW47XG4gICAgICBtaW4gPSAwO1xuICAgIH1cbiAgICByZXR1cm4gbWluICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKTtcbiAgfTtcblxuICAvLyBBIChwb3NzaWJseSBmYXN0ZXIpIHdheSB0byBnZXQgdGhlIGN1cnJlbnQgdGltZXN0YW1wIGFzIGFuIGludGVnZXIuXG4gIF8ubm93ID0gRGF0ZS5ub3cgfHwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICB9O1xuXG4gIC8vIExpc3Qgb2YgSFRNTCBlbnRpdGllcyBmb3IgZXNjYXBpbmcuXG4gIHZhciBlc2NhcGVNYXAgPSB7XG4gICAgJyYnOiAnJmFtcDsnLFxuICAgICc8JzogJyZsdDsnLFxuICAgICc+JzogJyZndDsnLFxuICAgICdcIic6ICcmcXVvdDsnLFxuICAgIFwiJ1wiOiAnJiN4Mjc7JyxcbiAgICAnYCc6ICcmI3g2MDsnXG4gIH07XG4gIHZhciB1bmVzY2FwZU1hcCA9IF8uaW52ZXJ0KGVzY2FwZU1hcCk7XG5cbiAgLy8gRnVuY3Rpb25zIGZvciBlc2NhcGluZyBhbmQgdW5lc2NhcGluZyBzdHJpbmdzIHRvL2Zyb20gSFRNTCBpbnRlcnBvbGF0aW9uLlxuICB2YXIgY3JlYXRlRXNjYXBlciA9IGZ1bmN0aW9uKG1hcCkge1xuICAgIHZhciBlc2NhcGVyID0gZnVuY3Rpb24obWF0Y2gpIHtcbiAgICAgIHJldHVybiBtYXBbbWF0Y2hdO1xuICAgIH07XG4gICAgLy8gUmVnZXhlcyBmb3IgaWRlbnRpZnlpbmcgYSBrZXkgdGhhdCBuZWVkcyB0byBiZSBlc2NhcGVkLlxuICAgIHZhciBzb3VyY2UgPSAnKD86JyArIF8ua2V5cyhtYXApLmpvaW4oJ3wnKSArICcpJztcbiAgICB2YXIgdGVzdFJlZ2V4cCA9IFJlZ0V4cChzb3VyY2UpO1xuICAgIHZhciByZXBsYWNlUmVnZXhwID0gUmVnRXhwKHNvdXJjZSwgJ2cnKTtcbiAgICByZXR1cm4gZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgICBzdHJpbmcgPSBzdHJpbmcgPT0gbnVsbCA/ICcnIDogJycgKyBzdHJpbmc7XG4gICAgICByZXR1cm4gdGVzdFJlZ2V4cC50ZXN0KHN0cmluZykgPyBzdHJpbmcucmVwbGFjZShyZXBsYWNlUmVnZXhwLCBlc2NhcGVyKSA6IHN0cmluZztcbiAgICB9O1xuICB9O1xuICBfLmVzY2FwZSA9IGNyZWF0ZUVzY2FwZXIoZXNjYXBlTWFwKTtcbiAgXy51bmVzY2FwZSA9IGNyZWF0ZUVzY2FwZXIodW5lc2NhcGVNYXApO1xuXG4gIC8vIFRyYXZlcnNlcyB0aGUgY2hpbGRyZW4gb2YgYG9iamAgYWxvbmcgYHBhdGhgLiBJZiBhIGNoaWxkIGlzIGEgZnVuY3Rpb24sIGl0XG4gIC8vIGlzIGludm9rZWQgd2l0aCBpdHMgcGFyZW50IGFzIGNvbnRleHQuIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBmaW5hbFxuICAvLyBjaGlsZCwgb3IgYGZhbGxiYWNrYCBpZiBhbnkgY2hpbGQgaXMgdW5kZWZpbmVkLlxuICBfLnJlc3VsdCA9IGZ1bmN0aW9uKG9iaiwgcGF0aCwgZmFsbGJhY2spIHtcbiAgICBpZiAoIV8uaXNBcnJheShwYXRoKSkgcGF0aCA9IFtwYXRoXTtcbiAgICB2YXIgbGVuZ3RoID0gcGF0aC5sZW5ndGg7XG4gICAgaWYgKCFsZW5ndGgpIHtcbiAgICAgIHJldHVybiBfLmlzRnVuY3Rpb24oZmFsbGJhY2spID8gZmFsbGJhY2suY2FsbChvYmopIDogZmFsbGJhY2s7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBwcm9wID0gb2JqID09IG51bGwgPyB2b2lkIDAgOiBvYmpbcGF0aFtpXV07XG4gICAgICBpZiAocHJvcCA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHByb3AgPSBmYWxsYmFjaztcbiAgICAgICAgaSA9IGxlbmd0aDsgLy8gRW5zdXJlIHdlIGRvbid0IGNvbnRpbnVlIGl0ZXJhdGluZy5cbiAgICAgIH1cbiAgICAgIG9iaiA9IF8uaXNGdW5jdGlvbihwcm9wKSA/IHByb3AuY2FsbChvYmopIDogcHJvcDtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICAvLyBHZW5lcmF0ZSBhIHVuaXF1ZSBpbnRlZ2VyIGlkICh1bmlxdWUgd2l0aGluIHRoZSBlbnRpcmUgY2xpZW50IHNlc3Npb24pLlxuICAvLyBVc2VmdWwgZm9yIHRlbXBvcmFyeSBET00gaWRzLlxuICB2YXIgaWRDb3VudGVyID0gMDtcbiAgXy51bmlxdWVJZCA9IGZ1bmN0aW9uKHByZWZpeCkge1xuICAgIHZhciBpZCA9ICsraWRDb3VudGVyICsgJyc7XG4gICAgcmV0dXJuIHByZWZpeCA/IHByZWZpeCArIGlkIDogaWQ7XG4gIH07XG5cbiAgLy8gQnkgZGVmYXVsdCwgVW5kZXJzY29yZSB1c2VzIEVSQi1zdHlsZSB0ZW1wbGF0ZSBkZWxpbWl0ZXJzLCBjaGFuZ2UgdGhlXG4gIC8vIGZvbGxvd2luZyB0ZW1wbGF0ZSBzZXR0aW5ncyB0byB1c2UgYWx0ZXJuYXRpdmUgZGVsaW1pdGVycy5cbiAgXy50ZW1wbGF0ZVNldHRpbmdzID0ge1xuICAgIGV2YWx1YXRlOiAvPCUoW1xcc1xcU10rPyklPi9nLFxuICAgIGludGVycG9sYXRlOiAvPCU9KFtcXHNcXFNdKz8pJT4vZyxcbiAgICBlc2NhcGU6IC88JS0oW1xcc1xcU10rPyklPi9nXG4gIH07XG5cbiAgLy8gV2hlbiBjdXN0b21pemluZyBgdGVtcGxhdGVTZXR0aW5nc2AsIGlmIHlvdSBkb24ndCB3YW50IHRvIGRlZmluZSBhblxuICAvLyBpbnRlcnBvbGF0aW9uLCBldmFsdWF0aW9uIG9yIGVzY2FwaW5nIHJlZ2V4LCB3ZSBuZWVkIG9uZSB0aGF0IGlzXG4gIC8vIGd1YXJhbnRlZWQgbm90IHRvIG1hdGNoLlxuICB2YXIgbm9NYXRjaCA9IC8oLileLztcblxuICAvLyBDZXJ0YWluIGNoYXJhY3RlcnMgbmVlZCB0byBiZSBlc2NhcGVkIHNvIHRoYXQgdGhleSBjYW4gYmUgcHV0IGludG8gYVxuICAvLyBzdHJpbmcgbGl0ZXJhbC5cbiAgdmFyIGVzY2FwZXMgPSB7XG4gICAgXCInXCI6IFwiJ1wiLFxuICAgICdcXFxcJzogJ1xcXFwnLFxuICAgICdcXHInOiAncicsXG4gICAgJ1xcbic6ICduJyxcbiAgICAnXFx1MjAyOCc6ICd1MjAyOCcsXG4gICAgJ1xcdTIwMjknOiAndTIwMjknXG4gIH07XG5cbiAgdmFyIGVzY2FwZVJlZ0V4cCA9IC9cXFxcfCd8XFxyfFxcbnxcXHUyMDI4fFxcdTIwMjkvZztcblxuICB2YXIgZXNjYXBlQ2hhciA9IGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgcmV0dXJuICdcXFxcJyArIGVzY2FwZXNbbWF0Y2hdO1xuICB9O1xuXG4gIC8vIEphdmFTY3JpcHQgbWljcm8tdGVtcGxhdGluZywgc2ltaWxhciB0byBKb2huIFJlc2lnJ3MgaW1wbGVtZW50YXRpb24uXG4gIC8vIFVuZGVyc2NvcmUgdGVtcGxhdGluZyBoYW5kbGVzIGFyYml0cmFyeSBkZWxpbWl0ZXJzLCBwcmVzZXJ2ZXMgd2hpdGVzcGFjZSxcbiAgLy8gYW5kIGNvcnJlY3RseSBlc2NhcGVzIHF1b3RlcyB3aXRoaW4gaW50ZXJwb2xhdGVkIGNvZGUuXG4gIC8vIE5COiBgb2xkU2V0dGluZ3NgIG9ubHkgZXhpc3RzIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgXy50ZW1wbGF0ZSA9IGZ1bmN0aW9uKHRleHQsIHNldHRpbmdzLCBvbGRTZXR0aW5ncykge1xuICAgIGlmICghc2V0dGluZ3MgJiYgb2xkU2V0dGluZ3MpIHNldHRpbmdzID0gb2xkU2V0dGluZ3M7XG4gICAgc2V0dGluZ3MgPSBfLmRlZmF1bHRzKHt9LCBzZXR0aW5ncywgXy50ZW1wbGF0ZVNldHRpbmdzKTtcblxuICAgIC8vIENvbWJpbmUgZGVsaW1pdGVycyBpbnRvIG9uZSByZWd1bGFyIGV4cHJlc3Npb24gdmlhIGFsdGVybmF0aW9uLlxuICAgIHZhciBtYXRjaGVyID0gUmVnRXhwKFtcbiAgICAgIChzZXR0aW5ncy5lc2NhcGUgfHwgbm9NYXRjaCkuc291cmNlLFxuICAgICAgKHNldHRpbmdzLmludGVycG9sYXRlIHx8IG5vTWF0Y2gpLnNvdXJjZSxcbiAgICAgIChzZXR0aW5ncy5ldmFsdWF0ZSB8fCBub01hdGNoKS5zb3VyY2VcbiAgICBdLmpvaW4oJ3wnKSArICd8JCcsICdnJyk7XG5cbiAgICAvLyBDb21waWxlIHRoZSB0ZW1wbGF0ZSBzb3VyY2UsIGVzY2FwaW5nIHN0cmluZyBsaXRlcmFscyBhcHByb3ByaWF0ZWx5LlxuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIHNvdXJjZSA9IFwiX19wKz0nXCI7XG4gICAgdGV4dC5yZXBsYWNlKG1hdGNoZXIsIGZ1bmN0aW9uKG1hdGNoLCBlc2NhcGUsIGludGVycG9sYXRlLCBldmFsdWF0ZSwgb2Zmc2V0KSB7XG4gICAgICBzb3VyY2UgKz0gdGV4dC5zbGljZShpbmRleCwgb2Zmc2V0KS5yZXBsYWNlKGVzY2FwZVJlZ0V4cCwgZXNjYXBlQ2hhcik7XG4gICAgICBpbmRleCA9IG9mZnNldCArIG1hdGNoLmxlbmd0aDtcblxuICAgICAgaWYgKGVzY2FwZSkge1xuICAgICAgICBzb3VyY2UgKz0gXCInK1xcbigoX190PShcIiArIGVzY2FwZSArIFwiKSk9PW51bGw/Jyc6Xy5lc2NhcGUoX190KSkrXFxuJ1wiO1xuICAgICAgfSBlbHNlIGlmIChpbnRlcnBvbGF0ZSkge1xuICAgICAgICBzb3VyY2UgKz0gXCInK1xcbigoX190PShcIiArIGludGVycG9sYXRlICsgXCIpKT09bnVsbD8nJzpfX3QpK1xcbidcIjtcbiAgICAgIH0gZWxzZSBpZiAoZXZhbHVhdGUpIHtcbiAgICAgICAgc291cmNlICs9IFwiJztcXG5cIiArIGV2YWx1YXRlICsgXCJcXG5fX3ArPSdcIjtcbiAgICAgIH1cblxuICAgICAgLy8gQWRvYmUgVk1zIG5lZWQgdGhlIG1hdGNoIHJldHVybmVkIHRvIHByb2R1Y2UgdGhlIGNvcnJlY3Qgb2Zmc2V0LlxuICAgICAgcmV0dXJuIG1hdGNoO1xuICAgIH0pO1xuICAgIHNvdXJjZSArPSBcIic7XFxuXCI7XG5cbiAgICAvLyBJZiBhIHZhcmlhYmxlIGlzIG5vdCBzcGVjaWZpZWQsIHBsYWNlIGRhdGEgdmFsdWVzIGluIGxvY2FsIHNjb3BlLlxuICAgIGlmICghc2V0dGluZ3MudmFyaWFibGUpIHNvdXJjZSA9ICd3aXRoKG9ianx8e30pe1xcbicgKyBzb3VyY2UgKyAnfVxcbic7XG5cbiAgICBzb3VyY2UgPSBcInZhciBfX3QsX19wPScnLF9faj1BcnJheS5wcm90b3R5cGUuam9pbixcIiArXG4gICAgICBcInByaW50PWZ1bmN0aW9uKCl7X19wKz1fX2ouY2FsbChhcmd1bWVudHMsJycpO307XFxuXCIgK1xuICAgICAgc291cmNlICsgJ3JldHVybiBfX3A7XFxuJztcblxuICAgIHZhciByZW5kZXI7XG4gICAgdHJ5IHtcbiAgICAgIHJlbmRlciA9IG5ldyBGdW5jdGlvbihzZXR0aW5ncy52YXJpYWJsZSB8fCAnb2JqJywgJ18nLCBzb3VyY2UpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGUuc291cmNlID0gc291cmNlO1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG5cbiAgICB2YXIgdGVtcGxhdGUgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgICByZXR1cm4gcmVuZGVyLmNhbGwodGhpcywgZGF0YSwgXyk7XG4gICAgfTtcblxuICAgIC8vIFByb3ZpZGUgdGhlIGNvbXBpbGVkIHNvdXJjZSBhcyBhIGNvbnZlbmllbmNlIGZvciBwcmVjb21waWxhdGlvbi5cbiAgICB2YXIgYXJndW1lbnQgPSBzZXR0aW5ncy52YXJpYWJsZSB8fCAnb2JqJztcbiAgICB0ZW1wbGF0ZS5zb3VyY2UgPSAnZnVuY3Rpb24oJyArIGFyZ3VtZW50ICsgJyl7XFxuJyArIHNvdXJjZSArICd9JztcblxuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfTtcblxuICAvLyBBZGQgYSBcImNoYWluXCIgZnVuY3Rpb24uIFN0YXJ0IGNoYWluaW5nIGEgd3JhcHBlZCBVbmRlcnNjb3JlIG9iamVjdC5cbiAgXy5jaGFpbiA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBpbnN0YW5jZSA9IF8ob2JqKTtcbiAgICBpbnN0YW5jZS5fY2hhaW4gPSB0cnVlO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfTtcblxuICAvLyBPT1BcbiAgLy8gLS0tLS0tLS0tLS0tLS0tXG4gIC8vIElmIFVuZGVyc2NvcmUgaXMgY2FsbGVkIGFzIGEgZnVuY3Rpb24sIGl0IHJldHVybnMgYSB3cmFwcGVkIG9iamVjdCB0aGF0XG4gIC8vIGNhbiBiZSB1c2VkIE9PLXN0eWxlLiBUaGlzIHdyYXBwZXIgaG9sZHMgYWx0ZXJlZCB2ZXJzaW9ucyBvZiBhbGwgdGhlXG4gIC8vIHVuZGVyc2NvcmUgZnVuY3Rpb25zLiBXcmFwcGVkIG9iamVjdHMgbWF5IGJlIGNoYWluZWQuXG5cbiAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGNvbnRpbnVlIGNoYWluaW5nIGludGVybWVkaWF0ZSByZXN1bHRzLlxuICB2YXIgY2hhaW5SZXN1bHQgPSBmdW5jdGlvbihpbnN0YW5jZSwgb2JqKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlLl9jaGFpbiA/IF8ob2JqKS5jaGFpbigpIDogb2JqO1xuICB9O1xuXG4gIC8vIEFkZCB5b3VyIG93biBjdXN0b20gZnVuY3Rpb25zIHRvIHRoZSBVbmRlcnNjb3JlIG9iamVjdC5cbiAgXy5taXhpbiA9IGZ1bmN0aW9uKG9iaikge1xuICAgIF8uZWFjaChfLmZ1bmN0aW9ucyhvYmopLCBmdW5jdGlvbihuYW1lKSB7XG4gICAgICB2YXIgZnVuYyA9IF9bbmFtZV0gPSBvYmpbbmFtZV07XG4gICAgICBfLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgYXJncyA9IFt0aGlzLl93cmFwcGVkXTtcbiAgICAgICAgcHVzaC5hcHBseShhcmdzLCBhcmd1bWVudHMpO1xuICAgICAgICByZXR1cm4gY2hhaW5SZXN1bHQodGhpcywgZnVuYy5hcHBseShfLCBhcmdzKSk7XG4gICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiBfO1xuICB9O1xuXG4gIC8vIEFkZCBhbGwgb2YgdGhlIFVuZGVyc2NvcmUgZnVuY3Rpb25zIHRvIHRoZSB3cmFwcGVyIG9iamVjdC5cbiAgXy5taXhpbihfKTtcblxuICAvLyBBZGQgYWxsIG11dGF0b3IgQXJyYXkgZnVuY3Rpb25zIHRvIHRoZSB3cmFwcGVyLlxuICBfLmVhY2goWydwb3AnLCAncHVzaCcsICdyZXZlcnNlJywgJ3NoaWZ0JywgJ3NvcnQnLCAnc3BsaWNlJywgJ3Vuc2hpZnQnXSwgZnVuY3Rpb24obmFtZSkge1xuICAgIHZhciBtZXRob2QgPSBBcnJheVByb3RvW25hbWVdO1xuICAgIF8ucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgb2JqID0gdGhpcy5fd3JhcHBlZDtcbiAgICAgIG1ldGhvZC5hcHBseShvYmosIGFyZ3VtZW50cyk7XG4gICAgICBpZiAoKG5hbWUgPT09ICdzaGlmdCcgfHwgbmFtZSA9PT0gJ3NwbGljZScpICYmIG9iai5sZW5ndGggPT09IDApIGRlbGV0ZSBvYmpbMF07XG4gICAgICByZXR1cm4gY2hhaW5SZXN1bHQodGhpcywgb2JqKTtcbiAgICB9O1xuICB9KTtcblxuICAvLyBBZGQgYWxsIGFjY2Vzc29yIEFycmF5IGZ1bmN0aW9ucyB0byB0aGUgd3JhcHBlci5cbiAgXy5lYWNoKFsnY29uY2F0JywgJ2pvaW4nLCAnc2xpY2UnXSwgZnVuY3Rpb24obmFtZSkge1xuICAgIHZhciBtZXRob2QgPSBBcnJheVByb3RvW25hbWVdO1xuICAgIF8ucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gY2hhaW5SZXN1bHQodGhpcywgbWV0aG9kLmFwcGx5KHRoaXMuX3dyYXBwZWQsIGFyZ3VtZW50cykpO1xuICAgIH07XG4gIH0pO1xuXG4gIC8vIEV4dHJhY3RzIHRoZSByZXN1bHQgZnJvbSBhIHdyYXBwZWQgYW5kIGNoYWluZWQgb2JqZWN0LlxuICBfLnByb3RvdHlwZS52YWx1ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl93cmFwcGVkO1xuICB9O1xuXG4gIC8vIFByb3ZpZGUgdW53cmFwcGluZyBwcm94eSBmb3Igc29tZSBtZXRob2RzIHVzZWQgaW4gZW5naW5lIG9wZXJhdGlvbnNcbiAgLy8gc3VjaCBhcyBhcml0aG1ldGljIGFuZCBKU09OIHN0cmluZ2lmaWNhdGlvbi5cbiAgXy5wcm90b3R5cGUudmFsdWVPZiA9IF8ucHJvdG90eXBlLnRvSlNPTiA9IF8ucHJvdG90eXBlLnZhbHVlO1xuXG4gIF8ucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFN0cmluZyh0aGlzLl93cmFwcGVkKTtcbiAgfTtcblxuICAvLyBBTUQgcmVnaXN0cmF0aW9uIGhhcHBlbnMgYXQgdGhlIGVuZCBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIEFNRCBsb2FkZXJzXG4gIC8vIHRoYXQgbWF5IG5vdCBlbmZvcmNlIG5leHQtdHVybiBzZW1hbnRpY3Mgb24gbW9kdWxlcy4gRXZlbiB0aG91Z2ggZ2VuZXJhbFxuICAvLyBwcmFjdGljZSBmb3IgQU1EIHJlZ2lzdHJhdGlvbiBpcyB0byBiZSBhbm9ueW1vdXMsIHVuZGVyc2NvcmUgcmVnaXN0ZXJzXG4gIC8vIGFzIGEgbmFtZWQgbW9kdWxlIGJlY2F1c2UsIGxpa2UgalF1ZXJ5LCBpdCBpcyBhIGJhc2UgbGlicmFyeSB0aGF0IGlzXG4gIC8vIHBvcHVsYXIgZW5vdWdoIHRvIGJlIGJ1bmRsZWQgaW4gYSB0aGlyZCBwYXJ0eSBsaWIsIGJ1dCBub3QgYmUgcGFydCBvZlxuICAvLyBhbiBBTUQgbG9hZCByZXF1ZXN0LiBUaG9zZSBjYXNlcyBjb3VsZCBnZW5lcmF0ZSBhbiBlcnJvciB3aGVuIGFuXG4gIC8vIGFub255bW91cyBkZWZpbmUoKSBpcyBjYWxsZWQgb3V0c2lkZSBvZiBhIGxvYWRlciByZXF1ZXN0LlxuICBpZiAodHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoJ3VuZGVyc2NvcmUnLCBbXSwgZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gXztcbiAgICB9KTtcbiAgfVxufSgpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS91bmRlcnNjb3JlLmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRpZighbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLyogZXNsaW50IHJlYWN0L3JlcXVpcmUtZGVmYXVsdC1wcm9wczogMCAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi4vY29uc3QnO1xuaW1wb3J0IHsgQm9vdHN0cmFwQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL2Jvb3RzdHJhcCc7XG5pbXBvcnQgXyBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBjb25zdCBDaGVja0JveCA9ICh7IGNsYXNzTmFtZSwgY2hlY2tlZCwgaW5kZXRlcm1pbmF0ZSB9KSA9PiAoXG4gIDxpbnB1dFxuICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgY2hlY2tlZD17IGNoZWNrZWQgfVxuICAgIGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9XG4gICAgcmVmPXsgKGlucHV0KSA9PiB7XG4gICAgICBpZiAoaW5wdXQpIGlucHV0LmluZGV0ZXJtaW5hdGUgPSBpbmRldGVybWluYXRlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgfSB9XG4gICAgb25DaGFuZ2U9eyAoKSA9PiB7fSB9XG4gIC8+XG4pO1xuXG5DaGVja0JveC5wcm9wVHlwZXMgPSB7XG4gIGNoZWNrZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGluZGV0ZXJtaW5hdGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0aW9uSGVhZGVyQ2VsbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbW9kZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGNoZWNrZWRTdGF0dXM6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25BbGxSb3dzU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBoaWRlU2VsZWN0QWxsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzZWxlY3Rpb25IZWFkZXJSZW5kZXJlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaGVhZGVyQ29sdW1uU3R5bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5mdW5jXSlcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5oYW5kbGVDaGVja0JveENsaWNrID0gdGhpcy5oYW5kbGVDaGVja0JveENsaWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogYXZvaWQgdXBkYXRpbmcgaWYgYnV0dG9uIGlzXG4gICAqIDEuIHJhZGlvXG4gICAqIDIuIHN0YXR1cyB3YXMgbm90IGNoYW5nZWQuXG4gICAqL1xuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgY29uc3QgeyBST1dfU0VMRUNUX1NJTkdMRSB9ID0gQ29uc3Q7XG4gICAgY29uc3QgeyBtb2RlLCBjaGVja2VkU3RhdHVzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKG1vZGUgPT09IFJPV19TRUxFQ1RfU0lOR0xFKSByZXR1cm4gZmFsc2U7XG5cbiAgICByZXR1cm4gbmV4dFByb3BzLmNoZWNrZWRTdGF0dXMgIT09IGNoZWNrZWRTdGF0dXM7XG4gIH1cblxuICBoYW5kbGVDaGVja0JveENsaWNrKGUpIHtcbiAgICBjb25zdCB7IG9uQWxsUm93c1NlbGVjdCwgY2hlY2tlZFN0YXR1cyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBpc1VuU2VsZWN0ID1cbiAgICAgIGNoZWNrZWRTdGF0dXMgPT09IENvbnN0LkNIRUNLQk9YX1NUQVRVU19DSEVDS0VEIHx8XG4gICAgICBjaGVja2VkU3RhdHVzID09PSBDb25zdC5DSEVDS0JPWF9TVEFUVVNfSU5ERVRFUk1JTkFURTtcblxuICAgIG9uQWxsUm93c1NlbGVjdChlLCBpc1VuU2VsZWN0KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBDSEVDS0JPWF9TVEFUVVNfQ0hFQ0tFRCwgQ0hFQ0tCT1hfU1RBVFVTX0lOREVURVJNSU5BVEUsIFJPV19TRUxFQ1RfTVVMVElQTEVcbiAgICB9ID0gQ29uc3Q7XG5cbiAgICBjb25zdCB7XG4gICAgICBtb2RlLFxuICAgICAgY2hlY2tlZFN0YXR1cyxcbiAgICAgIHNlbGVjdGlvbkhlYWRlclJlbmRlcmVyLFxuICAgICAgaGlkZVNlbGVjdEFsbCxcbiAgICAgIGhlYWRlckNvbHVtblN0eWxlXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGhpZGVTZWxlY3RBbGwpIHtcbiAgICAgIHJldHVybiA8dGggZGF0YS1yb3ctc2VsZWN0aW9uIC8+O1xuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrZWQgPSBjaGVja2VkU3RhdHVzID09PSBDSEVDS0JPWF9TVEFUVVNfQ0hFQ0tFRDtcblxuICAgIGNvbnN0IGluZGV0ZXJtaW5hdGUgPSBjaGVja2VkU3RhdHVzID09PSBDSEVDS0JPWF9TVEFUVVNfSU5ERVRFUk1JTkFURTtcblxuICAgIGNvbnN0IGF0dHJzID0ge307XG4gICAgbGV0IGNvbnRlbnQ7XG4gICAgaWYgKHNlbGVjdGlvbkhlYWRlclJlbmRlcmVyIHx8IG1vZGUgPT09IFJPV19TRUxFQ1RfTVVMVElQTEUpIHtcbiAgICAgIGF0dHJzLm9uQ2xpY2sgPSB0aGlzLmhhbmRsZUNoZWNrQm94Q2xpY2s7XG4gICAgfVxuXG4gICAgYXR0cnMuc3R5bGUgPSBfLmlzRnVuY3Rpb24oaGVhZGVyQ29sdW1uU3R5bGUpID9cbiAgICAgIGhlYWRlckNvbHVtblN0eWxlKGNoZWNrZWRTdGF0dXMpIDpcbiAgICAgIGhlYWRlckNvbHVtblN0eWxlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb290c3RyYXBDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICB7XG4gICAgICAgICAgKHsgYm9vdHN0cmFwNCB9KSA9PiB7XG4gICAgICAgICAgICBpZiAoc2VsZWN0aW9uSGVhZGVyUmVuZGVyZXIpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IHNlbGVjdGlvbkhlYWRlclJlbmRlcmVyKHtcbiAgICAgICAgICAgICAgICBtb2RlLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQsXG4gICAgICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gUk9XX1NFTEVDVF9NVUxUSVBMRSkge1xuICAgICAgICAgICAgICBjb250ZW50ID0gKFxuICAgICAgICAgICAgICAgIDxDaGVja0JveFxuICAgICAgICAgICAgICAgICAgeyAuLi50aGlzLnByb3BzIH1cbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9eyBjaGVja2VkIH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGJvb3RzdHJhcDQgPyAnc2VsZWN0aW9uLWlucHV0LTQnIDogJycgfVxuICAgICAgICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZT17IGluZGV0ZXJtaW5hdGUgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwic2VsZWN0aW9uLWNlbGwtaGVhZGVyXCIgZGF0YS1yb3ctc2VsZWN0aW9uIHsgLi4uYXR0cnMgfT57IGNvbnRlbnQgfTwvdGg+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgPC9Cb290c3RyYXBDb250ZXh0LkNvbnN1bWVyPlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Jvdy1zZWxlY3Rpb24vc2VsZWN0aW9uLWhlYWRlci1jZWxsLmpzIiwiLyogZXNsaW50IHJlYWN0L3JlcXVpcmUtZGVmYXVsdC1wcm9wczogMCAqL1xuLyogZXNsaW50IG5vLW5lc3RlZC10ZXJuYXJ5OiAwICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwYW5zaW9uSGVhZGVyQ2VsbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaXNBbnlFeHBhbmRzOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIG9uQWxsUm93RXhwYW5kOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGV4cGFuZEhlYWRlckNvbHVtblJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuY1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmhhbmRsZUNoZWNrQm94Q2xpY2sgPSB0aGlzLmhhbmRsZUNoZWNrQm94Q2xpY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNoZWNrQm94Q2xpY2soZSkge1xuICAgIGNvbnN0IHsgaXNBbnlFeHBhbmRzLCBvbkFsbFJvd0V4cGFuZCB9ID0gdGhpcy5wcm9wcztcblxuICAgIG9uQWxsUm93RXhwYW5kKGUsICFpc0FueUV4cGFuZHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaXNBbnlFeHBhbmRzLCBleHBhbmRIZWFkZXJDb2x1bW5SZW5kZXJlciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBhdHRycyA9IHtcbiAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ2hlY2tCb3hDbGlja1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHRoIGNsYXNzTmFtZT1cImV4cGFuZC1jZWxsLWhlYWRlclwiIGRhdGEtcm93LXNlbGVjdGlvbiB7IC4uLmF0dHJzIH0+XG4gICAgICAgIHtcbiAgICAgICAgICBleHBhbmRIZWFkZXJDb2x1bW5SZW5kZXJlciA/XG4gICAgICAgICAgICBleHBhbmRIZWFkZXJDb2x1bW5SZW5kZXJlcih7IGlzQW55RXhwYW5kcyB9KSA6XG4gICAgICAgICAgICAoaXNBbnlFeHBhbmRzID8gJygtKScgOiAnKCspJylcbiAgICAgICAgfVxuICAgICAgPC90aD5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctZXhwYW5kL2V4cGFuZC1oZWFkZXItY2VsbC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2VsZWN0aW9uQ29udGV4dCBmcm9tICcuLi9jb250ZXh0cy9zZWxlY3Rpb24tY29udGV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudCA9PiAoKSA9PiAoXG4gIDxTZWxlY3Rpb25Db250ZXh0LkNvbnN1bWVyPlxuICAgIHsgc2VsZWN0Um93ID0+IDxDb21wb25lbnQgeyAuLi5zZWxlY3RSb3cgfSAvPiB9XG4gIDwvU2VsZWN0aW9uQ29udGV4dC5Db25zdW1lcj5cbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctc2VsZWN0aW9uL3NlbGVjdGlvbi1oZWFkZXItY2VsbC1jb25zdW1lci5qcyIsImltcG9ydCBfIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IGdldFJvd0J5Um93SWQgfSBmcm9tICcuL3Jvd3MnO1xuXG5leHBvcnQgY29uc3QgaXNBbnlFeHBhbmRzID0gKFxuICBkYXRhLFxuICBrZXlGaWVsZCxcbiAgZXhwYW5kZWQgPSBbXVxuKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHJvd0tleSA9IF8uZ2V0KGRhdGFbaV0sIGtleUZpZWxkKTtcbiAgICBpZiAodHlwZW9mIGV4cGFuZGVkLmZpbmQoeCA9PiB4ID09PSByb3dLZXkpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCBjb25zdCBleHBhbmRhYmxlS2V5cyA9IChkYXRhLCBrZXlGaWVsZCwgc2tpcHMgPSBbXSkgPT4ge1xuICBpZiAoc2tpcHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGRhdGEubWFwKHJvdyA9PiBfLmdldChyb3csIGtleUZpZWxkKSk7XG4gIH1cbiAgcmV0dXJuIGRhdGFcbiAgICAuZmlsdGVyKHJvdyA9PiAhXy5jb250YWlucyhza2lwcywgXy5nZXQocm93LCBrZXlGaWVsZCkpKVxuICAgIC5tYXAocm93ID0+IF8uZ2V0KHJvdywga2V5RmllbGQpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRFeHBhbmRlZFJvd3MgPSAoZGF0YSwga2V5RmllbGQsIGV4cGFuZGVkKSA9PlxuICBleHBhbmRlZC5tYXAoayA9PiBnZXRSb3dCeVJvd0lkKGRhdGEsIGtleUZpZWxkLCBrKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9zdG9yZS9leHBhbmQuanMiLCJpbXBvcnQgXyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBnZXRSb3dCeVJvd0lkIH0gZnJvbSAnLi9yb3dzJztcblxuZXhwb3J0IGNvbnN0IGVkaXRDZWxsID0gKGRhdGEsIGtleUZpZWxkLCByb3dJZCwgZGF0YUZpZWxkLCBuZXdWYWx1ZSkgPT4ge1xuICBjb25zdCByb3cgPSBnZXRSb3dCeVJvd0lkKGRhdGEsIGtleUZpZWxkLCByb3dJZCk7XG4gIGlmIChyb3cpIF8uc2V0KHJvdywgZGF0YUZpZWxkLCBuZXdWYWx1ZSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvc3RvcmUvbXV0YXRlLmpzIiwiLyogZXNsaW50IG5vLW5lc3RlZC10ZXJuYXJ5OiAwICovXG4vKiBlc2xpbnQgbm8tbG9uZWx5LWlmOiAwICovXG4vKiBlc2xpbnQgbm8tdW5kZXJzY29yZS1kYW5nbGU6IDAgKi9cbmltcG9ydCBfIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCBDb25zdCBmcm9tICcuLi9jb25zdCc7XG5cbmZ1bmN0aW9uIGNvbXBhcmF0b3IoYSwgYikge1xuICBsZXQgcmVzdWx0O1xuICBpZiAodHlwZW9mIGIgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gYi5sb2NhbGVDb21wYXJlKGEpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IGEgPiBiID8gLTEgOiAoKGEgPCBiKSA/IDEgOiAwKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgY29uc3Qgc29ydCA9IChkYXRhLCBzb3J0T3JkZXIsIHsgZGF0YUZpZWxkLCBzb3J0RnVuYywgc29ydFZhbHVlIH0pID0+IHtcbiAgY29uc3QgX2RhdGEgPSBbLi4uZGF0YV07XG4gIF9kYXRhLnNvcnQoKGEsIGIpID0+IHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGxldCB2YWx1ZUEgPSBfLmdldChhLCBkYXRhRmllbGQpO1xuICAgIGxldCB2YWx1ZUIgPSBfLmdldChiLCBkYXRhRmllbGQpO1xuICAgIGlmIChzb3J0VmFsdWUpIHtcbiAgICAgIHZhbHVlQSA9IHNvcnRWYWx1ZSh2YWx1ZUEsIGEpO1xuICAgICAgdmFsdWVCID0gc29ydFZhbHVlKHZhbHVlQiwgYik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlQSA9IF8uaXNEZWZpbmVkKHZhbHVlQSkgPyB2YWx1ZUEgOiAnJztcbiAgICAgIHZhbHVlQiA9IF8uaXNEZWZpbmVkKHZhbHVlQikgPyB2YWx1ZUIgOiAnJztcbiAgICB9XG5cbiAgICBpZiAoc29ydEZ1bmMpIHtcbiAgICAgIHJlc3VsdCA9IHNvcnRGdW5jKHZhbHVlQSwgdmFsdWVCLCBzb3J0T3JkZXIsIGRhdGFGaWVsZCwgYSwgYik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChzb3J0T3JkZXIgPT09IENvbnN0LlNPUlRfREVTQykge1xuICAgICAgICByZXN1bHQgPSBjb21wYXJhdG9yKHZhbHVlQSwgdmFsdWVCKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IGNvbXBhcmF0b3IodmFsdWVCLCB2YWx1ZUEpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9KTtcbiAgcmV0dXJuIF9kYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IG5leHRPcmRlciA9IChcbiAgY3VycmVudFNvcnRDb2x1bW4sXG4gIHsgc29ydE9yZGVyLCBzb3J0Q29sdW1uIH0sXG4gIGRlZmF1bHRPcmRlciA9IENvbnN0LlNPUlRfREVTQ1xuKSA9PiB7XG4gIGlmICghc29ydENvbHVtbiB8fCBjdXJyZW50U29ydENvbHVtbi5kYXRhRmllbGQgIT09IHNvcnRDb2x1bW4uZGF0YUZpZWxkKSByZXR1cm4gZGVmYXVsdE9yZGVyO1xuICByZXR1cm4gc29ydE9yZGVyID09PSBDb25zdC5TT1JUX0RFU0MgPyBDb25zdC5TT1JUX0FTQyA6IENvbnN0LlNPUlRfREVTQztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9zdG9yZS9zb3J0LmpzIiwiaW1wb3J0IENvbnN0IGZyb20gJy4uL2NvbnN0JztcblxuZXhwb3J0IGNvbnN0IHR5cGVDb252ZXJ0ID0gKHR5cGUsIHZhbHVlKSA9PiB7XG4gIGlmICh0eXBlID09PSBDb25zdC5UWVBFX1NUUklORykge1xuICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IENvbnN0LlRZUEVfTlVNQkVSKSB7XG4gICAgcmV0dXJuIE51bWJlcih2YWx1ZSk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gQ29uc3QuVFlQRV9CT09MRUFOKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZSA9PT0gJ3RydWUnO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IENvbnN0LlRZUEVfREFURSkge1xuICAgIHJldHVybiBuZXcgRGF0ZSh2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvc3RvcmUvdHlwZS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRXhwYW5zaW9uQ29udGV4dCBmcm9tICcuLi9jb250ZXh0cy9yb3ctZXhwYW5kLWNvbnRleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQgPT4gKCkgPT4gKFxuICA8RXhwYW5zaW9uQ29udGV4dC5Db25zdW1lcj5cbiAgICB7IGV4cGFuZFJvdyA9PiA8Q29tcG9uZW50IHsgLi4uZXhwYW5kUm93IH0gLz4gfVxuICA8L0V4cGFuc2lvbkNvbnRleHQuQ29uc3VtZXI+XG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93LWV4cGFuZC9leHBhbmQtaGVhZGVyLWNlbGwtY29uc3VtZXIuanMiLCIvKiBlc2xpbnQgcmVhY3QvcmVxdWlyZS1kZWZhdWx0LXByb3BzOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IEZpbHRlcnNDZWxsIGZyb20gJy4vZmlsdGVycy1jZWxsJztcbmltcG9ydCBDb25zdCBmcm9tICcuL2NvbnN0JztcbmltcG9ydCBSb3dUZW1wbGF0ZSBmcm9tICcuL3Jvdy9yb3ctdGVtcGxhdGUnO1xuXG5jb25zdCBGaWx0ZXJzID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjb2x1bW5zLFxuICAgIG9uRmlsdGVyLFxuICAgIGN1cnJGaWx0ZXJzLFxuICAgIGZpbHRlclBvc2l0aW9uLFxuICAgIG9uRXh0ZXJuYWxGaWx0ZXIsXG4gICAgY2xhc3NOYW1lLFxuICAgIHNlbGVjdFJvdyxcbiAgICBleHBhbmRSb3dcbiAgfSA9IHByb3BzO1xuXG4gIGZ1bmN0aW9uIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgY29uc3QgZmlsdGVyQ29sdW1ucyA9IFtdO1xuICAgIGxldCBzaG93RmlsdGVyc1JvdyA9IGZhbHNlO1xuXG4gICAgY29sdW1ucy5mb3JFYWNoKChjb2x1bW4sIGkpID0+IHtcbiAgICAgIGZpbHRlckNvbHVtbnMucHVzaCg8RmlsdGVyc0NlbGxcbiAgICAgICAgaW5kZXg9eyBpIH1cbiAgICAgICAga2V5PXsgY29sdW1uLmRhdGFGaWVsZCB9XG4gICAgICAgIGNvbHVtbj17IGNvbHVtbiB9XG4gICAgICAgIGN1cnJGaWx0ZXJzPXsgY3VyckZpbHRlcnMgfVxuICAgICAgICBvbkV4dGVybmFsRmlsdGVyPXsgb25FeHRlcm5hbEZpbHRlciB9XG4gICAgICAgIG9uRmlsdGVyPXsgb25GaWx0ZXIgfVxuICAgICAgLz4pO1xuXG4gICAgICBpZiAoY29sdW1uLmZpbHRlclJlbmRlcmVyIHx8IGNvbHVtbi5maWx0ZXIpIHtcbiAgICAgICAgaWYgKCFzaG93RmlsdGVyc1Jvdykge1xuICAgICAgICAgIHNob3dGaWx0ZXJzUm93ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmaWx0ZXJDb2x1bW5zO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8dGJvZHlcbiAgICAgIGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9XG4gICAgICBzdHlsZT17IHtcbiAgICAgICAgZGlzcGxheTpcbiAgICAgICAgZmlsdGVyUG9zaXRpb24gPT09IENvbnN0LkZJTFRFUlNfUE9TSVRJT05fVE9QXG4gICAgICAgICAgPyAndGFibGUtaGVhZGVyLWdyb3VwJ1xuICAgICAgICAgIDogJ3RhYmxlLWZvb3Rlci1ncm91cCdcbiAgICAgIH0gfVxuICAgID5cbiAgICAgIDxSb3dUZW1wbGF0ZVxuICAgICAgICByZW5kZXJDb250ZW50PXsgcmVuZGVyQ29udGVudCB9XG4gICAgICAgIHNlbGVjdFJvdz17IHNlbGVjdFJvdyB9XG4gICAgICAgIGV4cGFuZFJvdz17IGV4cGFuZFJvdyB9XG4gICAgICAgIGNlbGxFbD1cInRkXCJcbiAgICAgIC8+XG4gICAgPC90Ym9keT5cbiAgKTtcbn07XG5cbkZpbHRlcnMucHJvcFR5cGVzID0ge1xuICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgb25GaWx0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBmaWx0ZXJQb3NpdGlvbjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBDb25zdC5GSUxURVJTX1BPU0lUSU9OX1RPUCxcbiAgICBDb25zdC5GSUxURVJTX1BPU0lUSU9OX0lOTElORSxcbiAgICBDb25zdC5GSUxURVJTX1BPU0lUSU9OX0JPVFRPTVxuICBdKSxcbiAgY3VyckZpbHRlcnM6IFByb3BUeXBlcy5vYmplY3QsXG4gIG9uRXh0ZXJuYWxGaWx0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNlbGVjdFJvdzogUHJvcFR5cGVzLm9iamVjdCxcbiAgZXhwYW5kUm93OiBQcm9wVHlwZXMub2JqZWN0XG59O1xuXG5GaWx0ZXJzLmRlZmF1bHRQcm9wcyA9IHtcbiAgcG9zaXRpb246IENvbnN0LkZJTFRFUlNfUE9TSVRJT05fVE9QXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvZmlsdGVycy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IF8gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IEZpbHRlcnNDZWxsID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBpbmRleCwgY29sdW1uLCBvbkV4dGVybmFsRmlsdGVyLFxuICAgIGN1cnJGaWx0ZXJzLCBvbkZpbHRlclxuICB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgZmlsdGVyUmVuZGVyZXIsIGZpbHRlciB9ID0gY29sdW1uO1xuICBsZXQgZmlsdGVyRWxtO1xuICBjb25zdCBjZWxsQXR0cnMgPSB7fTtcbiAgY29uc3QgY2VsbFN0eWxlID0ge307XG4gIGNlbGxBdHRycy5zdHlsZSA9IGNlbGxTdHlsZTtcbiAgaWYgKGNvbHVtbi5oZWFkZXJBbGlnbikge1xuICAgIGNlbGxTdHlsZS50ZXh0QWxpZ24gPSBfLmlzRnVuY3Rpb24oY29sdW1uLmhlYWRlckFsaWduKVxuICAgICAgPyBjb2x1bW4uaGVhZGVyQWxpZ24oY29sdW1uLCBpbmRleClcbiAgICAgIDogY29sdW1uLmhlYWRlckFsaWduO1xuICB9XG4gIGlmIChjb2x1bW4uZmlsdGVyUmVuZGVyZXIpIHtcbiAgICBjb25zdCBvbkN1c3RvbUZpbHRlciA9IG9uRXh0ZXJuYWxGaWx0ZXIoY29sdW1uLCBmaWx0ZXIucHJvcHMudHlwZSk7XG4gICAgZmlsdGVyRWxtID0gZmlsdGVyUmVuZGVyZXIob25DdXN0b21GaWx0ZXIsIGNvbHVtbik7XG4gIH0gZWxzZSBpZiAoZmlsdGVyKSB7XG4gICAgZmlsdGVyRWxtID0gKFxuICAgICAgPGZpbHRlci5GaWx0ZXJcbiAgICAgICAgeyAuLi5maWx0ZXIucHJvcHMgfVxuICAgICAgICBmaWx0ZXJTdGF0ZT17IGN1cnJGaWx0ZXJzW2NvbHVtbi5kYXRhRmllbGRdIH1cbiAgICAgICAgb25GaWx0ZXI9eyBvbkZpbHRlciB9XG4gICAgICAgIGNvbHVtbj17IGNvbHVtbiB9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RoJywgY2VsbEF0dHJzLCBmaWx0ZXJFbG0pO1xufTtcblxuRmlsdGVyc0NlbGwucHJvcFR5cGVzID0ge1xuICBpbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBjb2x1bW46IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgY3VyckZpbHRlcnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgb25GaWx0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBvbkV4dGVybmFsRmlsdGVyOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuRmlsdGVyc0NlbGwuZGVmYXVsdFByb3BzID0ge1xuICBvbkZpbHRlcjogKCkgPT4geyB9LFxuICBvbkV4dGVybmFsRmlsdGVyOiAoKSA9PiB7IH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlcnNDZWxsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvZmlsdGVycy1jZWxsLmpzIiwiLyogZXNsaW50IHJlYWN0L3JlcXVpcmUtZGVmYXVsdC1wcm9wczogMCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IENhcHRpb24gPSAocHJvcHMpID0+IHtcbiAgaWYgKCFwcm9wcy5jaGlsZHJlbikgcmV0dXJuIG51bGw7XG5cbiAgY29uc3QgY2FwdGlvbiA9IHByb3BzLmJvb3RzdHJhcDQgPyAoXG4gICAgPGNhcHRpb24gc3R5bGU9eyB7IGNhcHRpb25TaWRlOiAndG9wJyB9IH0+e3Byb3BzLmNoaWxkcmVufTwvY2FwdGlvbj5cbiAgKSA6IChcbiAgICA8Y2FwdGlvbj57cHJvcHMuY2hpbGRyZW59PC9jYXB0aW9uPlxuICApO1xuXG4gIHJldHVybiBjYXB0aW9uO1xufTtcblxuQ2FwdGlvbi5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMubm9kZSxcbiAgICBQcm9wVHlwZXMuc3RyaW5nXG4gIF0pLFxuICBib290c3RyYXA0OiBQcm9wVHlwZXMuYm9vbFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FwdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NhcHRpb24uanMiLCIvKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuLyogZXNsaW50IHJlYWN0L3JlcXVpcmUtZGVmYXVsdC1wcm9wczogMCAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IF8gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgU2ltcGxlUm93IGZyb20gJy4vcm93L3NpbXBsZS1yb3cnO1xuaW1wb3J0IFJvd0FnZ3JlZ2F0b3IgZnJvbSAnLi9yb3cvYWdncmVnYXRlLXJvdyc7XG5pbXBvcnQgUm93U2VjdGlvbiBmcm9tICcuL3Jvdy9yb3ctc2VjdGlvbic7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi9jb25zdCc7XG5pbXBvcnQgd2l0aFJvd1NlbGVjdGlvbiBmcm9tICcuL3Jvdy1zZWxlY3Rpb24vcm93LWNvbnN1bWVyJztcbmltcG9ydCB3aXRoUm93RXhwYW5zaW9uIGZyb20gJy4vcm93LWV4cGFuZC9yb3ctY29uc3VtZXInO1xuXG5jbGFzcyBCb2R5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3Qge1xuICAgICAga2V5RmllbGQsXG4gICAgICBjZWxsRWRpdCxcbiAgICAgIHNlbGVjdFJvdyxcbiAgICAgIGV4cGFuZFJvd1xuICAgIH0gPSBwcm9wcztcblxuICAgIC8vIENvbnN0cnVjdCBFZGl0aW5nIENlbGwgQ29tcG9uZW50XG4gICAgaWYgKGNlbGxFZGl0LmNyZWF0ZUNvbnRleHQpIHtcbiAgICAgIHRoaXMuRWRpdGluZ0NlbGwgPSBjZWxsRWRpdC5jcmVhdGVFZGl0aW5nQ2VsbChfLCBjZWxsRWRpdC5vcHRpb25zLm9uU3RhcnRFZGl0KTtcbiAgICB9XG5cbiAgICAvLyBDb25zdHJ1Y3QgUm93IENvbXBvbmVudFxuICAgIGxldCBSb3dDb21wb25lbnQgPSBTaW1wbGVSb3c7XG4gICAgY29uc3Qgc2VsZWN0Um93RW5hYmxlZCA9IHNlbGVjdFJvdy5tb2RlICE9PSBDb25zdC5ST1dfU0VMRUNUX0RJU0FCTEVEO1xuICAgIGNvbnN0IGV4cGFuZFJvd0VuYWJsZWQgPSAhIWV4cGFuZFJvdy5yZW5kZXJlcjtcblxuICAgIGlmIChleHBhbmRSb3dFbmFibGVkKSB7XG4gICAgICBSb3dDb21wb25lbnQgPSB3aXRoUm93RXhwYW5zaW9uKFJvd0FnZ3JlZ2F0b3IpO1xuICAgIH1cblxuICAgIGlmIChzZWxlY3RSb3dFbmFibGVkKSB7XG4gICAgICBSb3dDb21wb25lbnQgPSB3aXRoUm93U2VsZWN0aW9uKGV4cGFuZFJvd0VuYWJsZWQgPyBSb3dDb21wb25lbnQgOiBSb3dBZ2dyZWdhdG9yKTtcbiAgICB9XG5cbiAgICBpZiAoY2VsbEVkaXQuY3JlYXRlQ29udGV4dCkge1xuICAgICAgUm93Q29tcG9uZW50ID0gY2VsbEVkaXQud2l0aFJvd0xldmVsQ2VsbEVkaXQoUm93Q29tcG9uZW50LCBzZWxlY3RSb3dFbmFibGVkLCBrZXlGaWVsZCwgXyk7XG4gICAgfVxuICAgIHRoaXMuUm93Q29tcG9uZW50ID0gUm93Q29tcG9uZW50O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNvbHVtbnMsXG4gICAgICBkYXRhLFxuICAgICAgdGFiSW5kZXhDZWxsLFxuICAgICAga2V5RmllbGQsXG4gICAgICBpc0VtcHR5LFxuICAgICAgbm9EYXRhSW5kaWNhdGlvbixcbiAgICAgIHZpc2libGVDb2x1bW5TaXplLFxuICAgICAgY2VsbEVkaXQsXG4gICAgICBzZWxlY3RSb3csXG4gICAgICByb3dTdHlsZSxcbiAgICAgIHJvd0NsYXNzZXMsXG4gICAgICByb3dFdmVudHMsXG4gICAgICBleHBhbmRSb3csXG4gICAgICBjbGFzc05hbWVcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGxldCBjb250ZW50O1xuXG4gICAgaWYgKGlzRW1wdHkpIHtcbiAgICAgIGNvbnN0IGluZGljYXRpb24gPSBfLmlzRnVuY3Rpb24obm9EYXRhSW5kaWNhdGlvbikgPyBub0RhdGFJbmRpY2F0aW9uKCkgOiBub0RhdGFJbmRpY2F0aW9uO1xuICAgICAgaWYgKCFpbmRpY2F0aW9uKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgY29udGVudCA9IDxSb3dTZWN0aW9uIGNvbnRlbnQ9eyBpbmRpY2F0aW9uIH0gY29sU3Bhbj17IHZpc2libGVDb2x1bW5TaXplIH0gLz47XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNlbGVjdFJvd0VuYWJsZWQgPSBzZWxlY3RSb3cubW9kZSAhPT0gQ29uc3QuUk9XX1NFTEVDVF9ESVNBQkxFRDtcbiAgICAgIGNvbnN0IGV4cGFuZFJvd0VuYWJsZWQgPSAhIWV4cGFuZFJvdy5yZW5kZXJlcjtcblxuICAgICAgY29uc3QgYWRkaXRpb25hbFJvd1Byb3BzID0ge307XG5cbiAgICAgIGlmIChjZWxsRWRpdC5jcmVhdGVDb250ZXh0KSB7XG4gICAgICAgIGFkZGl0aW9uYWxSb3dQcm9wcy5FZGl0aW5nQ2VsbENvbXBvbmVudCA9IHRoaXMuRWRpdGluZ0NlbGw7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxlY3RSb3dFbmFibGVkIHx8IGV4cGFuZFJvd0VuYWJsZWQpIHtcbiAgICAgICAgYWRkaXRpb25hbFJvd1Byb3BzLmV4cGFuZFJvdyA9IGV4cGFuZFJvdztcbiAgICAgICAgYWRkaXRpb25hbFJvd1Byb3BzLnNlbGVjdFJvdyA9IHNlbGVjdFJvdztcbiAgICAgIH1cblxuICAgICAgY29udGVudCA9IGRhdGEubWFwKChyb3csIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IF8uZ2V0KHJvdywga2V5RmllbGQpO1xuICAgICAgICBjb25zdCBiYXNlUm93UHJvcHMgPSB7XG4gICAgICAgICAga2V5LFxuICAgICAgICAgIHJvdyxcbiAgICAgICAgICB0YWJJbmRleENlbGwsXG4gICAgICAgICAgY29sdW1ucyxcbiAgICAgICAgICBrZXlGaWVsZCxcbiAgICAgICAgICBjZWxsRWRpdCxcbiAgICAgICAgICB2YWx1ZToga2V5LFxuICAgICAgICAgIHJvd0luZGV4OiBpbmRleCxcbiAgICAgICAgICB2aXNpYmxlQ29sdW1uU2l6ZSxcbiAgICAgICAgICBhdHRyczogcm93RXZlbnRzIHx8IHt9LFxuICAgICAgICAgIC4uLmFkZGl0aW9uYWxSb3dQcm9wc1xuICAgICAgICB9O1xuXG4gICAgICAgIGJhc2VSb3dQcm9wcy5zdHlsZSA9IF8uaXNGdW5jdGlvbihyb3dTdHlsZSkgPyByb3dTdHlsZShyb3csIGluZGV4KSA6IHJvd1N0eWxlO1xuICAgICAgICBiYXNlUm93UHJvcHMuY2xhc3NOYW1lID0gKF8uaXNGdW5jdGlvbihyb3dDbGFzc2VzKSA/IHJvd0NsYXNzZXMocm93LCBpbmRleCkgOiByb3dDbGFzc2VzKTtcblxuICAgICAgICByZXR1cm4gPHRoaXMuUm93Q29tcG9uZW50IHsgLi4uYmFzZVJvd1Byb3BzIH0gLz47XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHRib2R5IGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9PnsgY29udGVudCB9PC90Ym9keT5cbiAgICApO1xuICB9XG59XG5cbkJvZHkucHJvcFR5cGVzID0ge1xuICBrZXlGaWVsZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBkYXRhOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIHNlbGVjdFJvdzogUHJvcFR5cGVzLm9iamVjdFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQm9keTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2JvZHkuanMiLCIvKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuLyogZXNsaW50IHJlYWN0L25vLWFycmF5LWluZGV4LWtleTogMCAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBSb3dQdXJlQ29udGVudCBmcm9tICcuL3Jvdy1wdXJlLWNvbnRlbnQnO1xuaW1wb3J0IGV2ZW50RGVsZWdhdGVyIGZyb20gJy4vZXZlbnQtZGVsZWdhdGVyJztcbmltcG9ydCBzaG91bGRVcGRhdGVyIGZyb20gJy4vc2hvdWxkLXVwZGF0ZXInO1xuXG5jbGFzcyBTaW1wbGVSb3cgZXh0ZW5kcyBzaG91bGRVcGRhdGVyKGV2ZW50RGVsZWdhdGVyKENvbXBvbmVudCkpIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zaG91bGRVcGRhdGVSb3dDb250ZW50ID0gZmFsc2U7XG4gIH1cblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgdGhpcy5zaG91bGRVcGRhdGVSb3dDb250ZW50ID0gZmFsc2U7XG4gICAgdGhpcy5zaG91bGRVcGRhdGVSb3dDb250ZW50ID0gdGhpcy5zaG91bGRSb3dDb250ZW50VXBkYXRlKG5leHRQcm9wcyk7XG4gICAgaWYgKHRoaXMuc2hvdWxkVXBkYXRlUm93Q29udGVudCkgcmV0dXJuIHRydWU7XG5cbiAgICByZXR1cm4gdGhpcy5zaG91bGRVcGRhdGVkQnlTZWxmUHJvcHMobmV4dFByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICBzdHlsZSxcbiAgICAgIGF0dHJzLFxuICAgICAgdmlzaWJsZUNvbHVtblNpemUsXG4gICAgICB0YWJJbmRleENlbGwsXG4gICAgICAuLi5yZXN0XG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdHJBdHRycyA9IHRoaXMuZGVsZWdhdGUoYXR0cnMpO1xuICAgIGNvbnN0IHRhYkluZGV4U3RhcnQgPSAodGhpcy5wcm9wcy5yb3dJbmRleCAqIHZpc2libGVDb2x1bW5TaXplKSArIDE7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHRyIHN0eWxlPXsgc3R5bGUgfSBjbGFzc05hbWU9eyBjbGFzc05hbWUgfSB7IC4uLnRyQXR0cnMgfT5cbiAgICAgICAgPFJvd1B1cmVDb250ZW50XG4gICAgICAgICAgc2hvdWxkVXBkYXRlPXsgdGhpcy5zaG91bGRVcGRhdGVSb3dDb250ZW50IH1cbiAgICAgICAgICB0YWJJbmRleFN0YXJ0PXsgdGFiSW5kZXhDZWxsID8gdGFiSW5kZXhTdGFydCA6IC0xIH1cbiAgICAgICAgICB7IC4uLnJlc3QgfVxuICAgICAgICAvPlxuICAgICAgPC90cj5cbiAgICApO1xuICB9XG59XG5cblNpbXBsZVJvdy5wcm9wVHlwZXMgPSB7XG4gIHJvdzogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICByb3dJbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgYXR0cnM6IFByb3BUeXBlcy5vYmplY3Rcbn07XG5cblNpbXBsZVJvdy5kZWZhdWx0UHJvcHMgPSB7XG4gIGVkaXRhYmxlOiB0cnVlLFxuICBzdHlsZToge30sXG4gIGNsYXNzTmFtZTogbnVsbCxcbiAgYXR0cnM6IHt9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaW1wbGVSb3c7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3cvc2ltcGxlLXJvdy5qcyIsIi8qIGVzbGludCByZWFjdC9wcm9wLXR5cGVzOiAwICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IGV2ZW50RGVsZWdhdGVyIGZyb20gJy4vY2VsbC1ldmVudC1kZWxlZ2F0ZXInO1xuaW1wb3J0IF8gZnJvbSAnLi91dGlscyc7XG5cbmNsYXNzIENlbGwgZXh0ZW5kcyBldmVudERlbGVnYXRlcihDb21wb25lbnQpIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5jcmVhdGVIYW5kbGVFZGl0aW5nQ2VsbCA9IHRoaXMuY3JlYXRlSGFuZGxlRWRpdGluZ0NlbGwuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICBsZXQgc2hvdWxkVXBkYXRlID0gZmFsc2U7XG4gICAgaWYgKG5leHRQcm9wcy5jb2x1bW4uaXNEdW1teUZpZWxkKSB7XG4gICAgICBzaG91bGRVcGRhdGUgPSAhXy5pc0VxdWFsKHRoaXMucHJvcHMucm93LCBuZXh0UHJvcHMucm93KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2hvdWxkVXBkYXRlID1cbiAgICAgICAgXy5nZXQodGhpcy5wcm9wcy5yb3csIHRoaXMucHJvcHMuY29sdW1uLmRhdGFGaWVsZClcbiAgICAgICAgICAhPT0gXy5nZXQobmV4dFByb3BzLnJvdywgbmV4dFByb3BzLmNvbHVtbi5kYXRhRmllbGQpO1xuICAgIH1cblxuICAgIGlmIChzaG91bGRVcGRhdGUpIHJldHVybiB0cnVlO1xuXG4gICAgLy8gaWYgKG5leHRQcm9wcy5mb3JtYXR0ZXIpXG5cbiAgICBzaG91bGRVcGRhdGUgPVxuICAgICAgKG5leHRQcm9wcy5jb2x1bW4uZm9ybWF0dGVyID8gIV8uaXNFcXVhbCh0aGlzLnByb3BzLnJvdywgbmV4dFByb3BzLnJvdykgOiBmYWxzZSkgfHxcbiAgICAgIHRoaXMucHJvcHMuY29sdW1uLmhpZGRlbiAhPT0gbmV4dFByb3BzLmNvbHVtbi5oaWRkZW4gfHxcbiAgICAgIHRoaXMucHJvcHMuY29sdW1uLmlzRHVtbXlGaWVsZCAhPT0gbmV4dFByb3BzLmNvbHVtbi5pc0R1bW15RmllbGQgfHxcbiAgICAgIHRoaXMucHJvcHMucm93SW5kZXggIT09IG5leHRQcm9wcy5yb3dJbmRleCB8fFxuICAgICAgdGhpcy5wcm9wcy5jb2x1bW5JbmRleCAhPT0gbmV4dFByb3BzLmNvbHVtbkluZGV4IHx8XG4gICAgICB0aGlzLnByb3BzLmNsYXNzTmFtZSAhPT0gbmV4dFByb3BzLmNsYXNzTmFtZSB8fFxuICAgICAgdGhpcy5wcm9wcy50aXRsZSAhPT0gbmV4dFByb3BzLnRpdGxlIHx8XG4gICAgICB0aGlzLnByb3BzLmVkaXRhYmxlICE9PSBuZXh0UHJvcHMuZWRpdGFibGUgfHxcbiAgICAgIHRoaXMucHJvcHMuY2xpY2tUb0VkaXQgIT09IG5leHRQcm9wcy5jbGlja1RvRWRpdCB8fFxuICAgICAgdGhpcy5wcm9wcy5kYmNsaWNrVG9FZGl0ICE9PSBuZXh0UHJvcHMuZGJjbGlja1RvRWRpdCB8fFxuICAgICAgIV8uaXNFcXVhbCh0aGlzLnByb3BzLnN0eWxlLCBuZXh0UHJvcHMuc3R5bGUpIHx8XG4gICAgICAhXy5pc0VxdWFsKHRoaXMucHJvcHMuY29sdW1uLmZvcm1hdEV4dHJhRGF0YSwgbmV4dFByb3BzLmNvbHVtbi5mb3JtYXRFeHRyYURhdGEpIHx8XG4gICAgICAhXy5pc0VxdWFsKHRoaXMucHJvcHMuY29sdW1uLmV2ZW50cywgbmV4dFByb3BzLmNvbHVtbi5ldmVudHMpIHx8XG4gICAgICAhXy5pc0VxdWFsKHRoaXMucHJvcHMuY29sdW1uLmF0dHJzLCBuZXh0UHJvcHMuY29sdW1uLmF0dHJzKSB8fFxuICAgICAgdGhpcy5wcm9wcy50YWJJbmRleCAhPT0gbmV4dFByb3BzLnRhYkluZGV4O1xuICAgIHJldHVybiBzaG91bGRVcGRhdGU7XG4gIH1cblxuICBjcmVhdGVIYW5kbGVFZGl0aW5nQ2VsbCA9IG9yaWdpbkZ1bmMgPT4gKGUpID0+IHtcbiAgICBjb25zdCB7IG9uU3RhcnQsIHJvd0luZGV4LCBjb2x1bW5JbmRleCwgY2xpY2tUb0VkaXQsIGRiY2xpY2tUb0VkaXQgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKChjbGlja1RvRWRpdCB8fCBkYmNsaWNrVG9FZGl0KSAmJiBfLmlzRnVuY3Rpb24ob3JpZ2luRnVuYykpIHtcbiAgICAgIG9yaWdpbkZ1bmMoZSk7XG4gICAgfVxuICAgIGlmIChvblN0YXJ0KSB7XG4gICAgICBvblN0YXJ0KHJvd0luZGV4LCBjb2x1bW5JbmRleCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHJvdyxcbiAgICAgIHJvd0luZGV4LFxuICAgICAgY29sdW1uLFxuICAgICAgY29sdW1uSW5kZXgsXG4gICAgICBvblN0YXJ0LFxuICAgICAgZWRpdGFibGUsXG4gICAgICBjbGlja1RvRWRpdCxcbiAgICAgIGRiY2xpY2tUb0VkaXQsXG4gICAgICAuLi5yZXN0XG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgZGF0YUZpZWxkLFxuICAgICAgZm9ybWF0dGVyLFxuICAgICAgZm9ybWF0RXh0cmFEYXRhXG4gICAgfSA9IGNvbHVtbjtcbiAgICBjb25zdCBhdHRycyA9IHRoaXMuZGVsZWdhdGUoeyAuLi5yZXN0IH0pO1xuICAgIGxldCBjb250ZW50ID0gY29sdW1uLmlzRHVtbXlGaWVsZCA/IG51bGwgOiBfLmdldChyb3csIGRhdGFGaWVsZCk7XG5cbiAgICBpZiAoZm9ybWF0dGVyKSB7XG4gICAgICBjb250ZW50ID0gY29sdW1uLmZvcm1hdHRlcihjb250ZW50LCByb3csIHJvd0luZGV4LCBmb3JtYXRFeHRyYURhdGEpO1xuICAgIH1cblxuICAgIGlmIChjbGlja1RvRWRpdCAmJiBlZGl0YWJsZSkge1xuICAgICAgYXR0cnMub25DbGljayA9IHRoaXMuY3JlYXRlSGFuZGxlRWRpdGluZ0NlbGwoYXR0cnMub25DbGljayk7XG4gICAgfSBlbHNlIGlmIChkYmNsaWNrVG9FZGl0ICYmIGVkaXRhYmxlKSB7XG4gICAgICBhdHRycy5vbkRvdWJsZUNsaWNrID0gdGhpcy5jcmVhdGVIYW5kbGVFZGl0aW5nQ2VsbChhdHRycy5vbkRvdWJsZUNsaWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHRkIHsgLi4uYXR0cnMgfT5cbiAgICAgICAgeyB0eXBlb2YgY29udGVudCA9PT0gJ2Jvb2xlYW4nID8gYCR7Y29udGVudH1gIDogY29udGVudCB9XG4gICAgICA8L3RkPlxuICAgICk7XG4gIH1cbn1cblxuQ2VsbC5wcm9wVHlwZXMgPSB7XG4gIHJvdzogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICByb3dJbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBjb2x1bW46IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgY29sdW1uSW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2VsbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NlbGwuanMiLCIvKiBlc2xpbnQgY2xhc3MtbWV0aG9kcy11c2UtdGhpczogMCAqL1xuLyogZXNsaW50IHJlYWN0L3Byb3AtdHlwZXM6IDAgKi9cbi8qIGVzbGludCBuby1wbHVzcGx1czogMCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgXyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgRXhwYW5kQ2VsbCBmcm9tICcuLi9yb3ctZXhwYW5kL2V4cGFuZC1jZWxsJztcbmltcG9ydCBTZWxlY3Rpb25DZWxsIGZyb20gJy4uL3Jvdy1zZWxlY3Rpb24vc2VsZWN0aW9uLWNlbGwnO1xuaW1wb3J0IHNob3VsZFVwZGF0ZXIgZnJvbSAnLi9zaG91bGQtdXBkYXRlcic7XG5pbXBvcnQgZXZlbnREZWxlZ2F0ZXIgZnJvbSAnLi9ldmVudC1kZWxlZ2F0ZXInO1xuaW1wb3J0IFJvd1B1cmVDb250ZW50IGZyb20gJy4vcm93LXB1cmUtY29udGVudCc7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi4vY29uc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3dBZ2dyZWdhdG9yIGV4dGVuZHMgc2hvdWxkVXBkYXRlcihldmVudERlbGVnYXRlcihSZWFjdC5Db21wb25lbnQpKSB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYXR0cnM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3RcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYXR0cnM6IHt9LFxuICAgIHN0eWxlOiB7fVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5jbGlja051bSA9IDA7XG4gICAgdGhpcy5zaG91bGRVcGRhdGVSb3dDb250ZW50ID0gZmFsc2U7XG4gICAgdGhpcy5jcmVhdGVDbGlja0V2ZW50SGFuZGxlciA9IHRoaXMuY3JlYXRlQ2xpY2tFdmVudEhhbmRsZXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLnByb3BzLnNlbGVjdGVkICE9PSBuZXh0UHJvcHMuc2VsZWN0ZWQgfHxcbiAgICAgIHRoaXMucHJvcHMuZXhwYW5kZWQgIT09IG5leHRQcm9wcy5leHBhbmRlZCB8fFxuICAgICAgdGhpcy5wcm9wcy5leHBhbmRhYmxlICE9PSBuZXh0UHJvcHMuZXhwYW5kYWJsZSB8fFxuICAgICAgdGhpcy5wcm9wcy5zZWxlY3RhYmxlICE9PSBuZXh0UHJvcHMuc2VsZWN0YWJsZSB8fFxuICAgICAgdGhpcy5wcm9wcy5zZWxlY3RSb3cuaGlkZVNlbGVjdENvbHVtbiAhPT0gbmV4dFByb3BzLnNlbGVjdFJvdy5oaWRlU2VsZWN0Q29sdW1uIHx8XG4gICAgICB0aGlzLnNob3VsZFVwZGF0ZWRCeVNlbGZQcm9wcyhuZXh0UHJvcHMpXG4gICAgKSB7XG4gICAgICB0aGlzLnNob3VsZFVwZGF0ZVJvd0NvbnRlbnQgPSB0aGlzLnNob3VsZFJvd0NvbnRlbnRVcGRhdGUobmV4dFByb3BzKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICB0aGlzLnNob3VsZFVwZGF0ZVJvd0NvbnRlbnQgPSB0aGlzLnNob3VsZFJvd0NvbnRlbnRVcGRhdGUobmV4dFByb3BzKTtcblxuICAgIHJldHVybiB0aGlzLnNob3VsZFVwZGF0ZVJvd0NvbnRlbnQ7XG4gIH1cblxuICBpc1JlbmRlckZ1bmN0aW9uQ29sdW1uSW5MZWZ0KFxuICAgIHBvc2l0aW9uID0gQ29uc3QuSU5ESUNBVE9SX1BPU0lUSU9OX0xFRlRcbiAgKSB7XG4gICAgcmV0dXJuIHBvc2l0aW9uID09PSBDb25zdC5JTkRJQ0FUT1JfUE9TSVRJT05fTEVGVDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICByb3csXG4gICAgICBjb2x1bW5zLFxuICAgICAga2V5RmllbGQsXG4gICAgICByb3dJbmRleCxcbiAgICAgIHN0eWxlLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgYXR0cnMsXG4gICAgICBzZWxlY3RSb3csXG4gICAgICBleHBhbmRSb3csXG4gICAgICBleHBhbmRlZCxcbiAgICAgIGV4cGFuZGFibGUsXG4gICAgICBzZWxlY3RlZCxcbiAgICAgIHNlbGVjdGFibGUsXG4gICAgICB2aXNpYmxlQ29sdW1uU2l6ZSxcbiAgICAgIHRhYkluZGV4Q2VsbCxcbiAgICAgIC4uLnJlc3RcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBrZXkgPSBfLmdldChyb3csIGtleUZpZWxkKTtcbiAgICBjb25zdCB7IGhpZGVTZWxlY3RDb2x1bW4sIHNlbGVjdENvbHVtblBvc2l0aW9uLCBjbGlja1RvU2VsZWN0IH0gPSBzZWxlY3RSb3c7XG4gICAgY29uc3QgeyBzaG93RXhwYW5kQ29sdW1uLCBleHBhbmRDb2x1bW5Qb3NpdGlvbiB9ID0gZXhwYW5kUm93O1xuXG4gICAgY29uc3QgbmV3QXR0cnMgPSB0aGlzLmRlbGVnYXRlKHsgLi4uYXR0cnMgfSk7XG4gICAgaWYgKGNsaWNrVG9TZWxlY3QgfHwgISFleHBhbmRSb3cucmVuZGVyZXIpIHtcbiAgICAgIG5ld0F0dHJzLm9uQ2xpY2sgPSB0aGlzLmNyZWF0ZUNsaWNrRXZlbnRIYW5kbGVyKG5ld0F0dHJzLm9uQ2xpY2spO1xuICAgIH1cblxuICAgIGxldCB0YWJJbmRleFN0YXJ0ID0gKHJvd0luZGV4ICogdmlzaWJsZUNvbHVtblNpemUpICsgMTtcblxuICAgIGNvbnN0IGNoaWxkcmVucyA9IFsoXG4gICAgICA8Um93UHVyZUNvbnRlbnRcbiAgICAgICAga2V5PVwicm93XCJcbiAgICAgICAgcm93PXsgcm93IH1cbiAgICAgICAgY29sdW1ucz17IGNvbHVtbnMgfVxuICAgICAgICBrZXlGaWVsZD17IGtleUZpZWxkIH1cbiAgICAgICAgcm93SW5kZXg9eyByb3dJbmRleCB9XG4gICAgICAgIHNob3VsZFVwZGF0ZT17IHRoaXMuc2hvdWxkVXBkYXRlUm93Q29udGVudCB9XG4gICAgICAgIHRhYkluZGV4U3RhcnQ9eyB0YWJJbmRleENlbGwgPyB0YWJJbmRleFN0YXJ0IDogLTEgfVxuICAgICAgICB7IC4uLnJlc3QgfVxuICAgICAgLz5cbiAgICApXTtcblxuICAgIGlmICghaGlkZVNlbGVjdENvbHVtbikge1xuICAgICAgY29uc3Qgc2VsZWN0Q2VsbCA9IChcbiAgICAgICAgPFNlbGVjdGlvbkNlbGxcbiAgICAgICAgICB7IC4uLnNlbGVjdFJvdyB9XG4gICAgICAgICAga2V5PVwic2VsZWN0aW9uLWNlbGxcIlxuICAgICAgICAgIHJvd0tleT17IGtleSB9XG4gICAgICAgICAgcm93SW5kZXg9eyByb3dJbmRleCB9XG4gICAgICAgICAgc2VsZWN0ZWQ9eyBzZWxlY3RlZCB9XG4gICAgICAgICAgZGlzYWJsZWQ9eyAhc2VsZWN0YWJsZSB9XG4gICAgICAgICAgdGFiSW5kZXg9eyB0YWJJbmRleENlbGwgPyB0YWJJbmRleFN0YXJ0KysgOiAtMSB9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgICAgaWYgKHRoaXMuaXNSZW5kZXJGdW5jdGlvbkNvbHVtbkluTGVmdChzZWxlY3RDb2x1bW5Qb3NpdGlvbikpIHtcbiAgICAgICAgY2hpbGRyZW5zLnVuc2hpZnQoc2VsZWN0Q2VsbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZHJlbnMucHVzaChzZWxlY3RDZWxsKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc2hvd0V4cGFuZENvbHVtbikge1xuICAgICAgY29uc3QgZXhwYW5kQ2VsbCA9IChcbiAgICAgICAgPEV4cGFuZENlbGxcbiAgICAgICAgICB7IC4uLmV4cGFuZFJvdyB9XG4gICAgICAgICAga2V5PVwiZXhwYW5kLWNlbGxcIlxuICAgICAgICAgIHJvd0tleT17IGtleSB9XG4gICAgICAgICAgcm93SW5kZXg9eyByb3dJbmRleCB9XG4gICAgICAgICAgZXhwYW5kZWQ9eyBleHBhbmRlZCB9XG4gICAgICAgICAgZXhwYW5kYWJsZT17IGV4cGFuZGFibGUgfVxuICAgICAgICAgIHRhYkluZGV4PXsgdGFiSW5kZXhDZWxsID8gdGFiSW5kZXhTdGFydCsrIDogLTEgfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICAgIGlmICh0aGlzLmlzUmVuZGVyRnVuY3Rpb25Db2x1bW5JbkxlZnQoZXhwYW5kQ29sdW1uUG9zaXRpb24pKSB7XG4gICAgICAgIGNoaWxkcmVucy51bnNoaWZ0KGV4cGFuZENlbGwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGRyZW5zLnB1c2goZXhwYW5kQ2VsbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDx0clxuICAgICAgICBzdHlsZT17IHN0eWxlIH1cbiAgICAgICAgY2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cbiAgICAgICAgeyAuLi5uZXdBdHRycyB9XG4gICAgICA+XG4gICAgICAgIHsgY2hpbGRyZW5zIH1cbiAgICAgIDwvdHI+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93L2FnZ3JlZ2F0ZS1yb3cuanMiLCIvKiBlc2xpbnRcbiAgcmVhY3QvcmVxdWlyZS1kZWZhdWx0LXByb3BzOiAwXG4gIGpzeC1hMTF5L25vLW5vbmludGVyYWN0aXZlLWVsZW1lbnQtaW50ZXJhY3Rpb25zOiAwXG4qL1xuLyogZXNsaW50IG5vLW5lc3RlZC10ZXJuYXJ5OiAwICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwYW5kQ2VsbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgcm93S2V5OiBQcm9wVHlwZXMuYW55LFxuICAgIGV4cGFuZGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGV4cGFuZGFibGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgb25Sb3dFeHBhbmQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgZXhwYW5kQ29sdW1uUmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIHJvd0luZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHRhYkluZGV4OiBQcm9wVHlwZXMubnVtYmVyXG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgY29uc3Qgc2hvdWxkVXBkYXRlID1cbiAgICAgIHRoaXMucHJvcHMucm93SW5kZXggIT09IG5leHRQcm9wcy5yb3dJbmRleCB8fFxuICAgICAgdGhpcy5wcm9wcy5leHBhbmRlZCAhPT0gbmV4dFByb3BzLmV4cGFuZGVkIHx8XG4gICAgICB0aGlzLnByb3BzLnJvd0tleSAhPT0gbmV4dFByb3BzLnJvd0tleSB8fFxuICAgICAgdGhpcy5wcm9wcy50YWJJbmRleCAhPT0gbmV4dFByb3BzLnRhYkluZGV4O1xuXG4gICAgcmV0dXJuIHNob3VsZFVwZGF0ZTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGUpIHtcbiAgICBjb25zdCB7IHJvd0tleSwgZXhwYW5kZWQsIG9uUm93RXhwYW5kLCByb3dJbmRleCB9ID0gdGhpcy5wcm9wcztcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIG9uUm93RXhwYW5kKHJvd0tleSwgIWV4cGFuZGVkLCByb3dJbmRleCwgZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBleHBhbmRlZCwgZXhwYW5kYWJsZSwgZXhwYW5kQ29sdW1uUmVuZGVyZXIsIHRhYkluZGV4LCByb3dLZXkgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgYXR0cnMgPSB7fTtcbiAgICBpZiAodGFiSW5kZXggIT09IC0xKSBhdHRycy50YWJJbmRleCA9IHRhYkluZGV4O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDx0ZCBjbGFzc05hbWU9XCJleHBhbmQtY2VsbFwiIG9uQ2xpY2s9eyB0aGlzLmhhbmRsZUNsaWNrIH0geyAuLi5hdHRycyB9PlxuICAgICAgICB7XG4gICAgICAgICAgZXhwYW5kQ29sdW1uUmVuZGVyZXIgPyBleHBhbmRDb2x1bW5SZW5kZXJlcih7XG4gICAgICAgICAgICBleHBhbmRhYmxlLFxuICAgICAgICAgICAgZXhwYW5kZWQsXG4gICAgICAgICAgICByb3dLZXlcbiAgICAgICAgICB9KSA6IChleHBhbmRhYmxlID8gKGV4cGFuZGVkID8gJygtKScgOiAnKCspJykgOiAnJylcbiAgICAgICAgfVxuICAgICAgPC90ZD5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctZXhwYW5kL2V4cGFuZC1jZWxsLmpzIiwiLyogZXNsaW50XG4gIHJlYWN0L3JlcXVpcmUtZGVmYXVsdC1wcm9wczogMFxuICBqc3gtYTExeS9uby1ub25pbnRlcmFjdGl2ZS1lbGVtZW50LWludGVyYWN0aW9uczogMFxuKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IENvbnN0IGZyb20gJy4uL2NvbnN0JztcbmltcG9ydCBfIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IEJvb3RzdHJhcENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9ib290c3RyYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3Rpb25DZWxsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBtb2RlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgcm93S2V5OiBQcm9wVHlwZXMuYW55LFxuICAgIHNlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvblJvd1NlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIHJvd0luZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHRhYkluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGNsaWNrVG9TZWxlY3Q6IFByb3BUeXBlcy5ib29sLFxuICAgIHNlbGVjdGlvblJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBzZWxlY3RDb2x1bW5TdHlsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmZ1bmNdKVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgIGNvbnN0IHNob3VsZFVwZGF0ZSA9XG4gICAgICB0aGlzLnByb3BzLnJvd0luZGV4ICE9PSBuZXh0UHJvcHMucm93SW5kZXggfHxcbiAgICAgIHRoaXMucHJvcHMuc2VsZWN0ZWQgIT09IG5leHRQcm9wcy5zZWxlY3RlZCB8fFxuICAgICAgdGhpcy5wcm9wcy5kaXNhYmxlZCAhPT0gbmV4dFByb3BzLmRpc2FibGVkIHx8XG4gICAgICB0aGlzLnByb3BzLnJvd0tleSAhPT0gbmV4dFByb3BzLnJvd0tleSB8fFxuICAgICAgdGhpcy5wcm9wcy50YWJJbmRleCAhPT0gbmV4dFByb3BzLnRhYkluZGV4IHx8XG4gICAgICB0aGlzLnByb3BzLnNlbGVjdENvbHVtblN0eWxlICE9PSBuZXh0UHJvcHMuc2VsZWN0Q29sdW1uU3R5bGU7XG5cbiAgICByZXR1cm4gc2hvdWxkVXBkYXRlO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soZSkge1xuICAgIGNvbnN0IHtcbiAgICAgIG1vZGU6IGlucHV0VHlwZSxcbiAgICAgIHJvd0tleSxcbiAgICAgIHNlbGVjdGVkLFxuICAgICAgb25Sb3dTZWxlY3QsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIHJvd0luZGV4XG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoZGlzYWJsZWQpIHJldHVybjtcblxuICAgIGNvbnN0IGNoZWNrZWQgPSBpbnB1dFR5cGUgPT09IENvbnN0LlJPV19TRUxFQ1RfU0lOR0xFXG4gICAgICA/IHRydWVcbiAgICAgIDogIXNlbGVjdGVkO1xuXG4gICAgb25Sb3dTZWxlY3Qocm93S2V5LCBjaGVja2VkLCByb3dJbmRleCwgZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgcm93S2V5LFxuICAgICAgbW9kZTogaW5wdXRUeXBlLFxuICAgICAgc2VsZWN0ZWQsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIHRhYkluZGV4LFxuICAgICAgcm93SW5kZXgsXG4gICAgICBzZWxlY3Rpb25SZW5kZXJlcixcbiAgICAgIHNlbGVjdENvbHVtblN0eWxlXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBhdHRycyA9IHt9O1xuICAgIGlmICh0YWJJbmRleCAhPT0gLTEpIGF0dHJzLnRhYkluZGV4ID0gdGFiSW5kZXg7XG5cbiAgICBhdHRycy5zdHlsZSA9IF8uaXNGdW5jdGlvbihzZWxlY3RDb2x1bW5TdHlsZSkgP1xuICAgICAgc2VsZWN0Q29sdW1uU3R5bGUoe1xuICAgICAgICBjaGVja2VkOiBzZWxlY3RlZCxcbiAgICAgICAgZGlzYWJsZWQsXG4gICAgICAgIHJvd0luZGV4LFxuICAgICAgICByb3dLZXlcbiAgICAgIH0pIDpcbiAgICAgIHNlbGVjdENvbHVtblN0eWxlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb290c3RyYXBDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICB7XG4gICAgICAgICAgKHsgYm9vdHN0cmFwNCB9KSA9PiAoXG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwic2VsZWN0aW9uLWNlbGxcIiBvbkNsaWNrPXsgdGhpcy5oYW5kbGVDbGljayB9IHsgLi4uYXR0cnMgfT5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdGlvblJlbmRlcmVyID8gc2VsZWN0aW9uUmVuZGVyZXIoe1xuICAgICAgICAgICAgICAgICAgbW9kZTogaW5wdXRUeXBlLFxuICAgICAgICAgICAgICAgICAgY2hlY2tlZDogc2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZCxcbiAgICAgICAgICAgICAgICAgIHJvd0luZGV4LFxuICAgICAgICAgICAgICAgICAgcm93S2V5XG4gICAgICAgICAgICAgICAgfSkgOiAoXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT17IGlucHV0VHlwZSB9XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9eyBzZWxlY3RlZCB9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXsgZGlzYWJsZWQgfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyBib290c3RyYXA0ID8gJ3NlbGVjdGlvbi1pbnB1dC00JyA6ICcnIH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoKSA9PiB7fSB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIDwvQm9vdHN0cmFwQ29udGV4dC5Db25zdW1lcj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3ctc2VsZWN0aW9uL3NlbGVjdGlvbi1jZWxsLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IFJvd1NlY3Rpb24gPSAoeyBjb250ZW50LCBjb2xTcGFuIH0pID0+IChcbiAgPHRyPlxuICAgIDx0ZFxuICAgICAgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXG4gICAgICBjb2xTcGFuPXsgY29sU3BhbiB9XG4gICAgICBjbGFzc05hbWU9XCJyZWFjdC1icy10YWJsZS1uby1kYXRhXCJcbiAgICA+XG4gICAgICB7IGNvbnRlbnQgfVxuICAgIDwvdGQ+XG4gIDwvdHI+XG4pO1xuXG5Sb3dTZWN0aW9uLnByb3BUeXBlcyA9IHtcbiAgY29udGVudDogUHJvcFR5cGVzLmFueSxcbiAgY29sU3BhbjogUHJvcFR5cGVzLm51bWJlclxufTtcblxuUm93U2VjdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbnRlbnQ6IG51bGwsXG4gIGNvbFNwYW46IDFcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJvd1NlY3Rpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9yb3cvcm93LXNlY3Rpb24uanMiLCIvKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBfIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCBTZWxlY3Rpb25Db250ZXh0IGZyb20gJy4uL2NvbnRleHRzL3NlbGVjdGlvbi1jb250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgKENvbXBvbmVudCkgPT4ge1xuICBjb25zdCByZW5kZXJXaXRoU2VsZWN0aW9uID0gKHByb3BzLCBzZWxlY3RSb3cpID0+IHtcbiAgICBjb25zdCBrZXkgPSBwcm9wcy52YWx1ZTtcbiAgICBjb25zdCBzZWxlY3RlZCA9IF8uY29udGFpbnMoc2VsZWN0Um93LnNlbGVjdGVkLCBrZXkpO1xuICAgIGNvbnN0IHNlbGVjdGFibGUgPSAhc2VsZWN0Um93Lm5vblNlbGVjdGFibGUgfHwgIV8uY29udGFpbnMoc2VsZWN0Um93Lm5vblNlbGVjdGFibGUsIGtleSk7XG4gICAgY29uc3Qgbm90U2VsZWN0YWJsZSA9IF8uY29udGFpbnMoc2VsZWN0Um93Lm5vblNlbGVjdGFibGUsIGtleSk7XG5cbiAgICBsZXQge1xuICAgICAgc3R5bGUsXG4gICAgICBjbGFzc05hbWVcbiAgICB9ID0gcHJvcHM7XG5cbiAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkU3R5bGUgPSBfLmlzRnVuY3Rpb24oc2VsZWN0Um93LnN0eWxlKVxuICAgICAgICA/IHNlbGVjdFJvdy5zdHlsZShwcm9wcy5yb3csIHByb3BzLnJvd0luZGV4KVxuICAgICAgICA6IHNlbGVjdFJvdy5zdHlsZTtcblxuICAgICAgY29uc3Qgc2VsZWN0ZWRDbGFzc2VzID0gXy5pc0Z1bmN0aW9uKHNlbGVjdFJvdy5jbGFzc2VzKVxuICAgICAgICA/IHNlbGVjdFJvdy5jbGFzc2VzKHByb3BzLnJvdywgcHJvcHMucm93SW5kZXgpXG4gICAgICAgIDogc2VsZWN0Um93LmNsYXNzZXM7XG5cbiAgICAgIHN0eWxlID0ge1xuICAgICAgICAuLi5zdHlsZSxcbiAgICAgICAgLi4uc2VsZWN0ZWRTdHlsZVxuICAgICAgfTtcbiAgICAgIGNsYXNzTmFtZSA9IGNzKGNsYXNzTmFtZSwgc2VsZWN0ZWRDbGFzc2VzKSB8fCB1bmRlZmluZWQ7XG5cbiAgICAgIGlmIChzZWxlY3RSb3cuYmdDb2xvcikge1xuICAgICAgICBzdHlsZSA9IHN0eWxlIHx8IHt9O1xuICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBfLmlzRnVuY3Rpb24oc2VsZWN0Um93LmJnQ29sb3IpXG4gICAgICAgICAgPyBzZWxlY3RSb3cuYmdDb2xvcihwcm9wcy5yb3csIHByb3BzLnJvd0luZGV4KVxuICAgICAgICAgIDogc2VsZWN0Um93LmJnQ29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5vdFNlbGVjdGFibGUpIHtcbiAgICAgIGNvbnN0IG5vdFNlbGVjdGFibGVTdHlsZSA9IF8uaXNGdW5jdGlvbihzZWxlY3RSb3cubm9uU2VsZWN0YWJsZVN0eWxlKVxuICAgICAgICA/IHNlbGVjdFJvdy5ub25TZWxlY3RhYmxlU3R5bGUocHJvcHMucm93LCBwcm9wcy5yb3dJbmRleClcbiAgICAgICAgOiBzZWxlY3RSb3cubm9uU2VsZWN0YWJsZVN0eWxlO1xuXG4gICAgICBjb25zdCBub3RTZWxlY3RhYmxlQ2xhc3NlcyA9IF8uaXNGdW5jdGlvbihzZWxlY3RSb3cubm9uU2VsZWN0YWJsZUNsYXNzZXMpXG4gICAgICAgID8gc2VsZWN0Um93Lm5vblNlbGVjdGFibGVDbGFzc2VzKHByb3BzLnJvdywgcHJvcHMucm93SW5kZXgpXG4gICAgICAgIDogc2VsZWN0Um93Lm5vblNlbGVjdGFibGVDbGFzc2VzO1xuXG4gICAgICBzdHlsZSA9IHtcbiAgICAgICAgLi4uc3R5bGUsXG4gICAgICAgIC4uLm5vdFNlbGVjdGFibGVTdHlsZVxuICAgICAgfTtcbiAgICAgIGNsYXNzTmFtZSA9IGNzKGNsYXNzTmFtZSwgbm90U2VsZWN0YWJsZUNsYXNzZXMpIHx8IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudFxuICAgICAgICB7IC4uLnByb3BzIH1cbiAgICAgICAgc3R5bGU9eyBzdHlsZSB9XG4gICAgICAgIGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9XG4gICAgICAgIHNlbGVjdFJvdz17IHNlbGVjdFJvdyB9XG4gICAgICAgIHNlbGVjdGVkPXsgc2VsZWN0ZWQgfVxuICAgICAgICBzZWxlY3RhYmxlPXsgc2VsZWN0YWJsZSB9XG4gICAgICAvPlxuICAgICk7XG4gIH07XG5cbiAgZnVuY3Rpb24gd2l0aENvbnN1bWVyKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTZWxlY3Rpb25Db250ZXh0LkNvbnN1bWVyPlxuICAgICAgICB7IHNlbGVjdFJvdyA9PiByZW5kZXJXaXRoU2VsZWN0aW9uKHByb3BzLCBzZWxlY3RSb3cpIH1cbiAgICAgIDwvU2VsZWN0aW9uQ29udGV4dC5Db25zdW1lcj5cbiAgICApO1xuICB9XG5cbiAgd2l0aENvbnN1bWVyLmRpc3BsYXlOYW1lID0gJ1dpdGhTZWxlY3Rpb25Sb3dDb25zdW1lcic7XG4gIHJldHVybiB3aXRoQ29uc3VtZXI7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93LXNlbGVjdGlvbi9yb3ctY29uc3VtZXIuanMiLCIvKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBFeHBhbmRSb3cgZnJvbSAnLi9leHBhbmQtcm93JztcbmltcG9ydCBfIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCBFeHBhbnNpb25Db250ZXh0IGZyb20gJy4uL2NvbnRleHRzL3Jvdy1leHBhbmQtY29udGV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IChDb21wb25lbnQpID0+IHtcbiAgY29uc3QgcmVuZGVyV2l0aEV4cGFuc2lvbiA9IChwcm9wcywgZXhwYW5kUm93KSA9PiB7XG4gICAgbGV0IHBhcmVudENsYXNzTmFtZSA9ICcnO1xuICAgIGxldCBjbGFzc05hbWUgPSAnJztcbiAgICBjb25zdCBrZXkgPSBwcm9wcy52YWx1ZTtcblxuICAgIGNvbnN0IGV4cGFuZGVkID0gXy5jb250YWlucyhleHBhbmRSb3cuZXhwYW5kZWQsIGtleSk7XG4gICAgY29uc3QgaXNDbG9zaW5nID0gXy5jb250YWlucyhleHBhbmRSb3cuaXNDbG9zaW5nLCBrZXkpO1xuICAgIGNvbnN0IGV4cGFuZGFibGUgPSAhZXhwYW5kUm93Lm5vbkV4cGFuZGFibGUgfHwgIV8uY29udGFpbnMoZXhwYW5kUm93Lm5vbkV4cGFuZGFibGUsIGtleSk7XG4gICAgaWYgKGV4cGFuZGVkKSB7XG4gICAgICBwYXJlbnRDbGFzc05hbWUgPSBfLmlzRnVuY3Rpb24oZXhwYW5kUm93LnBhcmVudENsYXNzTmFtZSkgP1xuICAgICAgICBleHBhbmRSb3cucGFyZW50Q2xhc3NOYW1lKGV4cGFuZGVkLCBwcm9wcy5yb3csIHByb3BzLnJvd0luZGV4KSA6XG4gICAgICAgIChleHBhbmRSb3cucGFyZW50Q2xhc3NOYW1lIHx8ICcnKTtcblxuICAgICAgY2xhc3NOYW1lID0gXy5pc0Z1bmN0aW9uKGV4cGFuZFJvdy5jbGFzc05hbWUpID9cbiAgICAgICAgZXhwYW5kUm93LmNsYXNzTmFtZShleHBhbmRlZCwgcHJvcHMucm93LCBwcm9wcy5yb3dJbmRleCkgOlxuICAgICAgICAoZXhwYW5kUm93LmNsYXNzTmFtZSB8fCAnJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFtcbiAgICAgIDxDb21wb25lbnRcbiAgICAgICAgeyAuLi5wcm9wcyB9XG4gICAgICAgIGtleT17IGtleSB9XG4gICAgICAgIGV4cGFuZGVkPXsgZXhwYW5kZWQgfVxuICAgICAgICBleHBhbmRhYmxlPXsgZXhwYW5kYWJsZSB9XG4gICAgICAgIGV4cGFuZFJvdz17IHsgLi4uZXhwYW5kUm93IH0gfVxuICAgICAgICBjbGFzc05hbWU9eyBjcyhwcm9wcy5jbGFzc05hbWUsIHBhcmVudENsYXNzTmFtZSkgfVxuICAgICAgLz4sXG4gICAgICBleHBhbmRlZCB8fCBpc0Nsb3NpbmcgPyA8RXhwYW5kUm93XG4gICAgICAgIGtleT17IGAke2tleX0tZXhwYW5kaW5nYCB9XG4gICAgICAgIGNvbFNwYW49eyBwcm9wcy52aXNpYmxlQ29sdW1uU2l6ZSB9XG4gICAgICAgIGV4cGFuZGVkPXsgZXhwYW5kZWQgfVxuICAgICAgICBvbkNsb3NlZD17ICgpID0+IGV4cGFuZFJvdy5vbkNsb3NlZChrZXkpIH1cbiAgICAgICAgY2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cbiAgICAgID5cbiAgICAgICAgeyBleHBhbmRSb3cucmVuZGVyZXIocHJvcHMucm93LCBwcm9wcy5yb3dJbmRleCkgfVxuICAgICAgPC9FeHBhbmRSb3c+IDogbnVsbFxuICAgIF07XG4gIH07XG4gIHJldHVybiBwcm9wcyA9PiAoXG4gICAgPEV4cGFuc2lvbkNvbnRleHQuQ29uc3VtZXI+XG4gICAgICB7IGV4cGFuZFJvdyA9PiByZW5kZXJXaXRoRXhwYW5zaW9uKHByb3BzLCBleHBhbmRSb3cpIH1cbiAgICA8L0V4cGFuc2lvbkNvbnRleHQuQ29uc3VtZXI+XG4gICk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93LWV4cGFuZC9yb3ctY29uc3VtZXIuanMiLCJpbXBvcnQgY3MgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IENTU1RyYW5zaXRpb24gfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJztcblxuY29uc3QgRXhwYW5kUm93ID0gKHsgY2hpbGRyZW4sIGV4cGFuZGVkLCBvbkNsb3NlZCwgY2xhc3NOYW1lLCAuLi5yZXN0IH0pID0+IChcbiAgPHRyPlxuICAgIDx0ZCBjbGFzc05hbWU9eyBjcygncmVzZXQtZXhwYW5zaW9uLXN0eWxlJywgY2xhc3NOYW1lKSB9IHsgLi4ucmVzdCB9PlxuICAgICAgPENTU1RyYW5zaXRpb25cbiAgICAgICAgYXBwZWFyXG4gICAgICAgIGluPXsgZXhwYW5kZWQgfVxuICAgICAgICB0aW1lb3V0PXsgNDAwIH1cbiAgICAgICAgY2xhc3NOYW1lcz1cInJvdy1leHBhbmQtc2xpZGVcIlxuICAgICAgICBvbkV4aXRlZD17IG9uQ2xvc2VkIH1cbiAgICAgID5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdy1leHBhbnNpb24tc3R5bGVcIj5cbiAgICAgICAgICAgIHsgY2hpbGRyZW4gfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cbiAgICA8L3RkPlxuICA8L3RyPlxuKTtcblxuRXhwYW5kUm93LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBleHBhbmRlZDogUHJvcFR5cGVzLmJvb2wsXG4gIG9uQ2xvc2VkOiBQcm9wVHlwZXMuZnVuYyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5FeHBhbmRSb3cuZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogbnVsbCxcbiAgZXhwYW5kZWQ6IGZhbHNlLFxuICBvbkNsb3NlZDogbnVsbCxcbiAgY2xhc3NOYW1lOiAnJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXhwYW5kUm93O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvcm93LWV4cGFuZC9leHBhbmQtcm93LmpzIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBDU1NUcmFuc2l0aW9uIH0gZnJvbSAnLi9DU1NUcmFuc2l0aW9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUmVwbGFjZVRyYW5zaXRpb24gfSBmcm9tICcuL1JlcGxhY2VUcmFuc2l0aW9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3dpdGNoVHJhbnNpdGlvbiB9IGZyb20gJy4vU3dpdGNoVHJhbnNpdGlvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRyYW5zaXRpb25Hcm91cCB9IGZyb20gJy4vVHJhbnNpdGlvbkdyb3VwJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVHJhbnNpdGlvbiB9IGZyb20gJy4vVHJhbnNpdGlvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvZXNtL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5pbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2VcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgYWRkT25lQ2xhc3MgZnJvbSAnZG9tLWhlbHBlcnMvYWRkQ2xhc3MnO1xuaW1wb3J0IHJlbW92ZU9uZUNsYXNzIGZyb20gJ2RvbS1oZWxwZXJzL3JlbW92ZUNsYXNzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVHJhbnNpdGlvbiBmcm9tICcuL1RyYW5zaXRpb24nO1xuaW1wb3J0IHsgY2xhc3NOYW1lc1NoYXBlIH0gZnJvbSAnLi91dGlscy9Qcm9wVHlwZXMnO1xuXG52YXIgX2FkZENsYXNzID0gZnVuY3Rpb24gYWRkQ2xhc3Mobm9kZSwgY2xhc3Nlcykge1xuICByZXR1cm4gbm9kZSAmJiBjbGFzc2VzICYmIGNsYXNzZXMuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuIGFkZE9uZUNsYXNzKG5vZGUsIGMpO1xuICB9KTtcbn07XG5cbnZhciByZW1vdmVDbGFzcyA9IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKG5vZGUsIGNsYXNzZXMpIHtcbiAgcmV0dXJuIG5vZGUgJiYgY2xhc3NlcyAmJiBjbGFzc2VzLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiByZW1vdmVPbmVDbGFzcyhub2RlLCBjKTtcbiAgfSk7XG59O1xuLyoqXG4gKiBBIHRyYW5zaXRpb24gY29tcG9uZW50IGluc3BpcmVkIGJ5IHRoZSBleGNlbGxlbnRcbiAqIFtuZy1hbmltYXRlXShodHRwczovL2RvY3MuYW5ndWxhcmpzLm9yZy9hcGkvbmdBbmltYXRlKSBsaWJyYXJ5LCB5b3Ugc2hvdWxkXG4gKiB1c2UgaXQgaWYgeW91J3JlIHVzaW5nIENTUyB0cmFuc2l0aW9ucyBvciBhbmltYXRpb25zLiBJdCdzIGJ1aWx0IHVwb24gdGhlXG4gKiBbYFRyYW5zaXRpb25gXShodHRwczovL3JlYWN0Y29tbXVuaXR5Lm9yZy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL3RyYW5zaXRpb24pXG4gKiBjb21wb25lbnQsIHNvIGl0IGluaGVyaXRzIGFsbCBvZiBpdHMgcHJvcHMuXG4gKlxuICogYENTU1RyYW5zaXRpb25gIGFwcGxpZXMgYSBwYWlyIG9mIGNsYXNzIG5hbWVzIGR1cmluZyB0aGUgYGFwcGVhcmAsIGBlbnRlcmAsXG4gKiBhbmQgYGV4aXRgIHN0YXRlcyBvZiB0aGUgdHJhbnNpdGlvbi4gVGhlIGZpcnN0IGNsYXNzIGlzIGFwcGxpZWQgYW5kIHRoZW4gYVxuICogc2Vjb25kIGAqLWFjdGl2ZWAgY2xhc3MgaW4gb3JkZXIgdG8gYWN0aXZhdGUgdGhlIENTUyB0cmFuc2l0aW9uLiBBZnRlciB0aGVcbiAqIHRyYW5zaXRpb24sIG1hdGNoaW5nIGAqLWRvbmVgIGNsYXNzIG5hbWVzIGFyZSBhcHBsaWVkIHRvIHBlcnNpc3QgdGhlXG4gKiB0cmFuc2l0aW9uIHN0YXRlLlxuICpcbiAqIGBgYGpzeFxuICogZnVuY3Rpb24gQXBwKCkge1xuICogICBjb25zdCBbaW5Qcm9wLCBzZXRJblByb3BdID0gdXNlU3RhdGUoZmFsc2UpO1xuICogICByZXR1cm4gKFxuICogICAgIDxkaXY+XG4gKiAgICAgICA8Q1NTVHJhbnNpdGlvbiBpbj17aW5Qcm9wfSB0aW1lb3V0PXsyMDB9IGNsYXNzTmFtZXM9XCJteS1ub2RlXCI+XG4gKiAgICAgICAgIDxkaXY+XG4gKiAgICAgICAgICAge1wiSSdsbCByZWNlaXZlIG15LW5vZGUtKiBjbGFzc2VzXCJ9XG4gKiAgICAgICAgIDwvZGl2PlxuICogICAgICAgPC9DU1NUcmFuc2l0aW9uPlxuICogICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2V0SW5Qcm9wKHRydWUpfT5cbiAqICAgICAgICAgQ2xpY2sgdG8gRW50ZXJcbiAqICAgICAgIDwvYnV0dG9uPlxuICogICAgIDwvZGl2PlxuICogICApO1xuICogfVxuICogYGBgXG4gKlxuICogV2hlbiB0aGUgYGluYCBwcm9wIGlzIHNldCB0byBgdHJ1ZWAsIHRoZSBjaGlsZCBjb21wb25lbnQgd2lsbCBmaXJzdCByZWNlaXZlXG4gKiB0aGUgY2xhc3MgYGV4YW1wbGUtZW50ZXJgLCB0aGVuIHRoZSBgZXhhbXBsZS1lbnRlci1hY3RpdmVgIHdpbGwgYmUgYWRkZWQgaW5cbiAqIHRoZSBuZXh0IHRpY2suIGBDU1NUcmFuc2l0aW9uYCBbZm9yY2VzIGFcbiAqIHJlZmxvd10oaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9ibG9iLzUwMDczMDNlNzI5YTc0YmU2NmEyMWMzZTIyMDVlNDkxNjgyMTUyNGIvc3JjL0NTU1RyYW5zaXRpb24uanMjTDIwOC1MMjE1KVxuICogYmV0d2VlbiBiZWZvcmUgYWRkaW5nIHRoZSBgZXhhbXBsZS1lbnRlci1hY3RpdmVgLiBUaGlzIGlzIGFuIGltcG9ydGFudCB0cmlja1xuICogYmVjYXVzZSBpdCBhbGxvd3MgdXMgdG8gdHJhbnNpdGlvbiBiZXR3ZWVuIGBleGFtcGxlLWVudGVyYCBhbmRcbiAqIGBleGFtcGxlLWVudGVyLWFjdGl2ZWAgZXZlbiB0aG91Z2ggdGhleSB3ZXJlIGFkZGVkIGltbWVkaWF0ZWx5IG9uZSBhZnRlclxuICogYW5vdGhlci4gTW9zdCBub3RhYmx5LCB0aGlzIGlzIHdoYXQgbWFrZXMgaXQgcG9zc2libGUgZm9yIHVzIHRvIGFuaW1hdGVcbiAqIF9hcHBlYXJhbmNlXy5cbiAqXG4gKiBgYGBjc3NcbiAqIC5teS1ub2RlLWVudGVyIHtcbiAqICAgb3BhY2l0eTogMDtcbiAqIH1cbiAqIC5teS1ub2RlLWVudGVyLWFjdGl2ZSB7XG4gKiAgIG9wYWNpdHk6IDE7XG4gKiAgIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXM7XG4gKiB9XG4gKiAubXktbm9kZS1leGl0IHtcbiAqICAgb3BhY2l0eTogMTtcbiAqIH1cbiAqIC5teS1ub2RlLWV4aXQtYWN0aXZlIHtcbiAqICAgb3BhY2l0eTogMDtcbiAqICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcztcbiAqIH1cbiAqIGBgYFxuICpcbiAqIGAqLWFjdGl2ZWAgY2xhc3NlcyByZXByZXNlbnQgd2hpY2ggc3R5bGVzIHlvdSB3YW50IHRvIGFuaW1hdGUgKip0byoqLCBzbyBpdCdzXG4gKiBpbXBvcnRhbnQgdG8gYWRkIGB0cmFuc2l0aW9uYCBkZWNsYXJhdGlvbiBvbmx5IHRvIHRoZW0sIG90aGVyd2lzZSB0cmFuc2l0aW9uc1xuICogbWlnaHQgbm90IGJlaGF2ZSBhcyBpbnRlbmRlZCEgVGhpcyBtaWdodCBub3QgYmUgb2J2aW91cyB3aGVuIHRoZSB0cmFuc2l0aW9uc1xuICogYXJlIHN5bW1ldHJpY2FsLCBpLmUuIHdoZW4gYCotZW50ZXItYWN0aXZlYCBpcyB0aGUgc2FtZSBhcyBgKi1leGl0YCwgbGlrZSBpblxuICogdGhlIGV4YW1wbGUgYWJvdmUgKG1pbnVzIGB0cmFuc2l0aW9uYCksIGJ1dCBpdCBiZWNvbWVzIGFwcGFyZW50IGluIG1vcmVcbiAqIGNvbXBsZXggdHJhbnNpdGlvbnMuXG4gKlxuICogKipOb3RlKio6IElmIHlvdSdyZSB1c2luZyB0aGVcbiAqIFtgYXBwZWFyYF0oaHR0cDovL3JlYWN0Y29tbXVuaXR5Lm9yZy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL3RyYW5zaXRpb24jVHJhbnNpdGlvbi1wcm9wLWFwcGVhcilcbiAqIHByb3AsIG1ha2Ugc3VyZSB0byBkZWZpbmUgc3R5bGVzIGZvciBgLmFwcGVhci0qYCBjbGFzc2VzIGFzIHdlbGwuXG4gKi9cblxuXG52YXIgQ1NTVHJhbnNpdGlvbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShDU1NUcmFuc2l0aW9uLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBDU1NUcmFuc2l0aW9uKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuICAgIF90aGlzLmFwcGxpZWRDbGFzc2VzID0ge1xuICAgICAgYXBwZWFyOiB7fSxcbiAgICAgIGVudGVyOiB7fSxcbiAgICAgIGV4aXQ6IHt9XG4gICAgfTtcblxuICAgIF90aGlzLm9uRW50ZXIgPSBmdW5jdGlvbiAobWF5YmVOb2RlLCBtYXliZUFwcGVhcmluZykge1xuICAgICAgdmFyIF90aGlzJHJlc29sdmVBcmd1bWVudCA9IF90aGlzLnJlc29sdmVBcmd1bWVudHMobWF5YmVOb2RlLCBtYXliZUFwcGVhcmluZyksXG4gICAgICAgICAgbm9kZSA9IF90aGlzJHJlc29sdmVBcmd1bWVudFswXSxcbiAgICAgICAgICBhcHBlYXJpbmcgPSBfdGhpcyRyZXNvbHZlQXJndW1lbnRbMV07XG5cbiAgICAgIF90aGlzLnJlbW92ZUNsYXNzZXMobm9kZSwgJ2V4aXQnKTtcblxuICAgICAgX3RoaXMuYWRkQ2xhc3Mobm9kZSwgYXBwZWFyaW5nID8gJ2FwcGVhcicgOiAnZW50ZXInLCAnYmFzZScpO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25FbnRlcikge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkVudGVyKG1heWJlTm9kZSwgbWF5YmVBcHBlYXJpbmcpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vbkVudGVyaW5nID0gZnVuY3Rpb24gKG1heWJlTm9kZSwgbWF5YmVBcHBlYXJpbmcpIHtcbiAgICAgIHZhciBfdGhpcyRyZXNvbHZlQXJndW1lbnQyID0gX3RoaXMucmVzb2x2ZUFyZ3VtZW50cyhtYXliZU5vZGUsIG1heWJlQXBwZWFyaW5nKSxcbiAgICAgICAgICBub2RlID0gX3RoaXMkcmVzb2x2ZUFyZ3VtZW50MlswXSxcbiAgICAgICAgICBhcHBlYXJpbmcgPSBfdGhpcyRyZXNvbHZlQXJndW1lbnQyWzFdO1xuXG4gICAgICB2YXIgdHlwZSA9IGFwcGVhcmluZyA/ICdhcHBlYXInIDogJ2VudGVyJztcblxuICAgICAgX3RoaXMuYWRkQ2xhc3Mobm9kZSwgdHlwZSwgJ2FjdGl2ZScpO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25FbnRlcmluZykge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkVudGVyaW5nKG1heWJlTm9kZSwgbWF5YmVBcHBlYXJpbmcpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vbkVudGVyZWQgPSBmdW5jdGlvbiAobWF5YmVOb2RlLCBtYXliZUFwcGVhcmluZykge1xuICAgICAgdmFyIF90aGlzJHJlc29sdmVBcmd1bWVudDMgPSBfdGhpcy5yZXNvbHZlQXJndW1lbnRzKG1heWJlTm9kZSwgbWF5YmVBcHBlYXJpbmcpLFxuICAgICAgICAgIG5vZGUgPSBfdGhpcyRyZXNvbHZlQXJndW1lbnQzWzBdLFxuICAgICAgICAgIGFwcGVhcmluZyA9IF90aGlzJHJlc29sdmVBcmd1bWVudDNbMV07XG5cbiAgICAgIHZhciB0eXBlID0gYXBwZWFyaW5nID8gJ2FwcGVhcicgOiAnZW50ZXInO1xuXG4gICAgICBfdGhpcy5yZW1vdmVDbGFzc2VzKG5vZGUsIHR5cGUpO1xuXG4gICAgICBfdGhpcy5hZGRDbGFzcyhub2RlLCB0eXBlLCAnZG9uZScpO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25FbnRlcmVkKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uRW50ZXJlZChtYXliZU5vZGUsIG1heWJlQXBwZWFyaW5nKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25FeGl0ID0gZnVuY3Rpb24gKG1heWJlTm9kZSkge1xuICAgICAgdmFyIF90aGlzJHJlc29sdmVBcmd1bWVudDQgPSBfdGhpcy5yZXNvbHZlQXJndW1lbnRzKG1heWJlTm9kZSksXG4gICAgICAgICAgbm9kZSA9IF90aGlzJHJlc29sdmVBcmd1bWVudDRbMF07XG5cbiAgICAgIF90aGlzLnJlbW92ZUNsYXNzZXMobm9kZSwgJ2FwcGVhcicpO1xuXG4gICAgICBfdGhpcy5yZW1vdmVDbGFzc2VzKG5vZGUsICdlbnRlcicpO1xuXG4gICAgICBfdGhpcy5hZGRDbGFzcyhub2RlLCAnZXhpdCcsICdiYXNlJyk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkV4aXQpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25FeGl0KG1heWJlTm9kZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLm9uRXhpdGluZyA9IGZ1bmN0aW9uIChtYXliZU5vZGUpIHtcbiAgICAgIHZhciBfdGhpcyRyZXNvbHZlQXJndW1lbnQ1ID0gX3RoaXMucmVzb2x2ZUFyZ3VtZW50cyhtYXliZU5vZGUpLFxuICAgICAgICAgIG5vZGUgPSBfdGhpcyRyZXNvbHZlQXJndW1lbnQ1WzBdO1xuXG4gICAgICBfdGhpcy5hZGRDbGFzcyhub2RlLCAnZXhpdCcsICdhY3RpdmUnKTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uRXhpdGluZykge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkV4aXRpbmcobWF5YmVOb2RlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25FeGl0ZWQgPSBmdW5jdGlvbiAobWF5YmVOb2RlKSB7XG4gICAgICB2YXIgX3RoaXMkcmVzb2x2ZUFyZ3VtZW50NiA9IF90aGlzLnJlc29sdmVBcmd1bWVudHMobWF5YmVOb2RlKSxcbiAgICAgICAgICBub2RlID0gX3RoaXMkcmVzb2x2ZUFyZ3VtZW50NlswXTtcblxuICAgICAgX3RoaXMucmVtb3ZlQ2xhc3Nlcyhub2RlLCAnZXhpdCcpO1xuXG4gICAgICBfdGhpcy5hZGRDbGFzcyhub2RlLCAnZXhpdCcsICdkb25lJyk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkV4aXRlZCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkV4aXRlZChtYXliZU5vZGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5yZXNvbHZlQXJndW1lbnRzID0gZnVuY3Rpb24gKG1heWJlTm9kZSwgbWF5YmVBcHBlYXJpbmcpIHtcbiAgICAgIHJldHVybiBfdGhpcy5wcm9wcy5ub2RlUmVmID8gW190aGlzLnByb3BzLm5vZGVSZWYuY3VycmVudCwgbWF5YmVOb2RlXSAvLyBoZXJlIGBtYXliZU5vZGVgIGlzIGFjdHVhbGx5IGBhcHBlYXJpbmdgXG4gICAgICA6IFttYXliZU5vZGUsIG1heWJlQXBwZWFyaW5nXTtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0Q2xhc3NOYW1lcyA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICB2YXIgY2xhc3NOYW1lcyA9IF90aGlzLnByb3BzLmNsYXNzTmFtZXM7XG4gICAgICB2YXIgaXNTdHJpbmdDbGFzc05hbWVzID0gdHlwZW9mIGNsYXNzTmFtZXMgPT09ICdzdHJpbmcnO1xuICAgICAgdmFyIHByZWZpeCA9IGlzU3RyaW5nQ2xhc3NOYW1lcyAmJiBjbGFzc05hbWVzID8gY2xhc3NOYW1lcyArIFwiLVwiIDogJyc7XG4gICAgICB2YXIgYmFzZUNsYXNzTmFtZSA9IGlzU3RyaW5nQ2xhc3NOYW1lcyA/IFwiXCIgKyBwcmVmaXggKyB0eXBlIDogY2xhc3NOYW1lc1t0eXBlXTtcbiAgICAgIHZhciBhY3RpdmVDbGFzc05hbWUgPSBpc1N0cmluZ0NsYXNzTmFtZXMgPyBiYXNlQ2xhc3NOYW1lICsgXCItYWN0aXZlXCIgOiBjbGFzc05hbWVzW3R5cGUgKyBcIkFjdGl2ZVwiXTtcbiAgICAgIHZhciBkb25lQ2xhc3NOYW1lID0gaXNTdHJpbmdDbGFzc05hbWVzID8gYmFzZUNsYXNzTmFtZSArIFwiLWRvbmVcIiA6IGNsYXNzTmFtZXNbdHlwZSArIFwiRG9uZVwiXTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGJhc2VDbGFzc05hbWU6IGJhc2VDbGFzc05hbWUsXG4gICAgICAgIGFjdGl2ZUNsYXNzTmFtZTogYWN0aXZlQ2xhc3NOYW1lLFxuICAgICAgICBkb25lQ2xhc3NOYW1lOiBkb25lQ2xhc3NOYW1lXG4gICAgICB9O1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gQ1NTVHJhbnNpdGlvbi5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmFkZENsYXNzID0gZnVuY3Rpb24gYWRkQ2xhc3Mobm9kZSwgdHlwZSwgcGhhc2UpIHtcbiAgICB2YXIgY2xhc3NOYW1lID0gdGhpcy5nZXRDbGFzc05hbWVzKHR5cGUpW3BoYXNlICsgXCJDbGFzc05hbWVcIl07XG5cbiAgICB2YXIgX3RoaXMkZ2V0Q2xhc3NOYW1lcyA9IHRoaXMuZ2V0Q2xhc3NOYW1lcygnZW50ZXInKSxcbiAgICAgICAgZG9uZUNsYXNzTmFtZSA9IF90aGlzJGdldENsYXNzTmFtZXMuZG9uZUNsYXNzTmFtZTtcblxuICAgIGlmICh0eXBlID09PSAnYXBwZWFyJyAmJiBwaGFzZSA9PT0gJ2RvbmUnICYmIGRvbmVDbGFzc05hbWUpIHtcbiAgICAgIGNsYXNzTmFtZSArPSBcIiBcIiArIGRvbmVDbGFzc05hbWU7XG4gICAgfSAvLyBUaGlzIGlzIGZvciB0byBmb3JjZSBhIHJlcGFpbnQsXG4gICAgLy8gd2hpY2ggaXMgbmVjZXNzYXJ5IGluIG9yZGVyIHRvIHRyYW5zaXRpb24gc3R5bGVzIHdoZW4gYWRkaW5nIGEgY2xhc3MgbmFtZS5cblxuXG4gICAgaWYgKHBoYXNlID09PSAnYWN0aXZlJykge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLWV4cHJlc3Npb25zICovXG4gICAgICBub2RlICYmIG5vZGUuc2Nyb2xsVG9wO1xuICAgIH1cblxuICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgIHRoaXMuYXBwbGllZENsYXNzZXNbdHlwZV1bcGhhc2VdID0gY2xhc3NOYW1lO1xuXG4gICAgICBfYWRkQ2xhc3Mobm9kZSwgY2xhc3NOYW1lKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbW92ZUNsYXNzZXMgPSBmdW5jdGlvbiByZW1vdmVDbGFzc2VzKG5vZGUsIHR5cGUpIHtcbiAgICB2YXIgX3RoaXMkYXBwbGllZENsYXNzZXMkID0gdGhpcy5hcHBsaWVkQ2xhc3Nlc1t0eXBlXSxcbiAgICAgICAgYmFzZUNsYXNzTmFtZSA9IF90aGlzJGFwcGxpZWRDbGFzc2VzJC5iYXNlLFxuICAgICAgICBhY3RpdmVDbGFzc05hbWUgPSBfdGhpcyRhcHBsaWVkQ2xhc3NlcyQuYWN0aXZlLFxuICAgICAgICBkb25lQ2xhc3NOYW1lID0gX3RoaXMkYXBwbGllZENsYXNzZXMkLmRvbmU7XG4gICAgdGhpcy5hcHBsaWVkQ2xhc3Nlc1t0eXBlXSA9IHt9O1xuXG4gICAgaWYgKGJhc2VDbGFzc05hbWUpIHtcbiAgICAgIHJlbW92ZUNsYXNzKG5vZGUsIGJhc2VDbGFzc05hbWUpO1xuICAgIH1cblxuICAgIGlmIChhY3RpdmVDbGFzc05hbWUpIHtcbiAgICAgIHJlbW92ZUNsYXNzKG5vZGUsIGFjdGl2ZUNsYXNzTmFtZSk7XG4gICAgfVxuXG4gICAgaWYgKGRvbmVDbGFzc05hbWUpIHtcbiAgICAgIHJlbW92ZUNsYXNzKG5vZGUsIGRvbmVDbGFzc05hbWUpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIF8gPSBfdGhpcyRwcm9wcy5jbGFzc05hbWVzLFxuICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBbXCJjbGFzc05hbWVzXCJdKTtcblxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUcmFuc2l0aW9uLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgIG9uRW50ZXI6IHRoaXMub25FbnRlcixcbiAgICAgIG9uRW50ZXJlZDogdGhpcy5vbkVudGVyZWQsXG4gICAgICBvbkVudGVyaW5nOiB0aGlzLm9uRW50ZXJpbmcsXG4gICAgICBvbkV4aXQ6IHRoaXMub25FeGl0LFxuICAgICAgb25FeGl0aW5nOiB0aGlzLm9uRXhpdGluZyxcbiAgICAgIG9uRXhpdGVkOiB0aGlzLm9uRXhpdGVkXG4gICAgfSkpO1xuICB9O1xuXG4gIHJldHVybiBDU1NUcmFuc2l0aW9uO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5DU1NUcmFuc2l0aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lczogJydcbn07XG5DU1NUcmFuc2l0aW9uLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IF9leHRlbmRzKHt9LCBUcmFuc2l0aW9uLnByb3BUeXBlcywge1xuICAvKipcbiAgICogVGhlIGFuaW1hdGlvbiBjbGFzc05hbWVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudCBhcyBpdCBhcHBlYXJzLCBlbnRlcnMsXG4gICAqIGV4aXRzIG9yIGhhcyBmaW5pc2hlZCB0aGUgdHJhbnNpdGlvbi4gQSBzaW5nbGUgbmFtZSBjYW4gYmUgcHJvdmlkZWQsIHdoaWNoXG4gICAqIHdpbGwgYmUgc3VmZml4ZWQgZm9yIGVhY2ggc3RhZ2UsIGUuZy4gYGNsYXNzTmFtZXM9XCJmYWRlXCJgIGFwcGxpZXM6XG4gICAqXG4gICAqIC0gYGZhZGUtYXBwZWFyYCwgYGZhZGUtYXBwZWFyLWFjdGl2ZWAsIGBmYWRlLWFwcGVhci1kb25lYFxuICAgKiAtIGBmYWRlLWVudGVyYCwgYGZhZGUtZW50ZXItYWN0aXZlYCwgYGZhZGUtZW50ZXItZG9uZWBcbiAgICogLSBgZmFkZS1leGl0YCwgYGZhZGUtZXhpdC1hY3RpdmVgLCBgZmFkZS1leGl0LWRvbmVgXG4gICAqXG4gICAqIEEgZmV3IGRldGFpbHMgdG8gbm90ZSBhYm91dCBob3cgdGhlc2UgY2xhc3NlcyBhcmUgYXBwbGllZDpcbiAgICpcbiAgICogMS4gVGhleSBhcmUgX2pvaW5lZF8gd2l0aCB0aGUgb25lcyB0aGF0IGFyZSBhbHJlYWR5IGRlZmluZWQgb24gdGhlIGNoaWxkXG4gICAqICAgIGNvbXBvbmVudCwgc28gaWYgeW91IHdhbnQgdG8gYWRkIHNvbWUgYmFzZSBzdHlsZXMsIHlvdSBjYW4gdXNlXG4gICAqICAgIGBjbGFzc05hbWVgIHdpdGhvdXQgd29ycnlpbmcgdGhhdCBpdCB3aWxsIGJlIG92ZXJyaWRkZW4uXG4gICAqXG4gICAqIDIuIElmIHRoZSB0cmFuc2l0aW9uIGNvbXBvbmVudCBtb3VudHMgd2l0aCBgaW49e2ZhbHNlfWAsIG5vIGNsYXNzZXMgYXJlXG4gICAqICAgIGFwcGxpZWQgeWV0LiBZb3UgbWlnaHQgYmUgZXhwZWN0aW5nIGAqLWV4aXQtZG9uZWAsIGJ1dCBpZiB5b3UgdGhpbmtcbiAgICogICAgYWJvdXQgaXQsIGEgY29tcG9uZW50IGNhbm5vdCBmaW5pc2ggZXhpdGluZyBpZiBpdCBoYXNuJ3QgZW50ZXJlZCB5ZXQuXG4gICAqXG4gICAqIDIuIGBmYWRlLWFwcGVhci1kb25lYCBhbmQgYGZhZGUtZW50ZXItZG9uZWAgd2lsbCBfYm90aF8gYmUgYXBwbGllZC4gVGhpc1xuICAgKiAgICBhbGxvd3MgeW91IHRvIGRlZmluZSBkaWZmZXJlbnQgYmVoYXZpb3IgZm9yIHdoZW4gYXBwZWFyaW5nIGlzIGRvbmUgYW5kXG4gICAqICAgIHdoZW4gcmVndWxhciBlbnRlcmluZyBpcyBkb25lLCB1c2luZyBzZWxlY3RvcnMgbGlrZVxuICAgKiAgICBgLmZhZGUtZW50ZXItZG9uZTpub3QoLmZhZGUtYXBwZWFyLWRvbmUpYC4gRm9yIGV4YW1wbGUsIHlvdSBjb3VsZCBhcHBseVxuICAgKiAgICBhbiBlcGljIGVudHJhbmNlIGFuaW1hdGlvbiB3aGVuIGVsZW1lbnQgZmlyc3QgYXBwZWFycyBpbiB0aGUgRE9NIHVzaW5nXG4gICAqICAgIFtBbmltYXRlLmNzc10oaHR0cHM6Ly9kYW5lZGVuLmdpdGh1Yi5pby9hbmltYXRlLmNzcy8pLiBPdGhlcndpc2UgeW91IGNhblxuICAgKiAgICBzaW1wbHkgdXNlIGBmYWRlLWVudGVyLWRvbmVgIGZvciBkZWZpbmluZyBib3RoIGNhc2VzLlxuICAgKlxuICAgKiBFYWNoIGluZGl2aWR1YWwgY2xhc3NOYW1lcyBjYW4gYWxzbyBiZSBzcGVjaWZpZWQgaW5kZXBlbmRlbnRseSBsaWtlOlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBjbGFzc05hbWVzPXt7XG4gICAqICBhcHBlYXI6ICdteS1hcHBlYXInLFxuICAgKiAgYXBwZWFyQWN0aXZlOiAnbXktYWN0aXZlLWFwcGVhcicsXG4gICAqICBhcHBlYXJEb25lOiAnbXktZG9uZS1hcHBlYXInLFxuICAgKiAgZW50ZXI6ICdteS1lbnRlcicsXG4gICAqICBlbnRlckFjdGl2ZTogJ215LWFjdGl2ZS1lbnRlcicsXG4gICAqICBlbnRlckRvbmU6ICdteS1kb25lLWVudGVyJyxcbiAgICogIGV4aXQ6ICdteS1leGl0JyxcbiAgICogIGV4aXRBY3RpdmU6ICdteS1hY3RpdmUtZXhpdCcsXG4gICAqICBleGl0RG9uZTogJ215LWRvbmUtZXhpdCcsXG4gICAqIH19XG4gICAqIGBgYFxuICAgKlxuICAgKiBJZiB5b3Ugd2FudCB0byBzZXQgdGhlc2UgY2xhc3NlcyB1c2luZyBDU1MgTW9kdWxlczpcbiAgICpcbiAgICogYGBganNcbiAgICogaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5jc3MnO1xuICAgKiBgYGBcbiAgICpcbiAgICogeW91IG1pZ2h0IHdhbnQgdG8gdXNlIGNhbWVsQ2FzZSBpbiB5b3VyIENTUyBmaWxlLCB0aGF0IHdheSBjb3VsZCBzaW1wbHlcbiAgICogc3ByZWFkIHRoZW0gaW5zdGVhZCBvZiBsaXN0aW5nIHRoZW0gb25lIGJ5IG9uZTpcbiAgICpcbiAgICogYGBganNcbiAgICogY2xhc3NOYW1lcz17eyAuLi5zdHlsZXMgfX1cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmcgfCB7XG4gICAqICBhcHBlYXI/OiBzdHJpbmcsXG4gICAqICBhcHBlYXJBY3RpdmU/OiBzdHJpbmcsXG4gICAqICBhcHBlYXJEb25lPzogc3RyaW5nLFxuICAgKiAgZW50ZXI/OiBzdHJpbmcsXG4gICAqICBlbnRlckFjdGl2ZT86IHN0cmluZyxcbiAgICogIGVudGVyRG9uZT86IHN0cmluZyxcbiAgICogIGV4aXQ/OiBzdHJpbmcsXG4gICAqICBleGl0QWN0aXZlPzogc3RyaW5nLFxuICAgKiAgZXhpdERvbmU/OiBzdHJpbmcsXG4gICAqIH19XG4gICAqL1xuICBjbGFzc05hbWVzOiBjbGFzc05hbWVzU2hhcGUsXG5cbiAgLyoqXG4gICAqIEEgYDxUcmFuc2l0aW9uPmAgY2FsbGJhY2sgZmlyZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlICdlbnRlcicgb3IgJ2FwcGVhcicgY2xhc3MgaXNcbiAgICogYXBwbGllZC5cbiAgICpcbiAgICogKipOb3RlKio6IHdoZW4gYG5vZGVSZWZgIHByb3AgaXMgcGFzc2VkLCBgbm9kZWAgaXMgbm90IHBhc3NlZC5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQsIGlzQXBwZWFyaW5nOiBib29sKVxuICAgKi9cbiAgb25FbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEEgYDxUcmFuc2l0aW9uPmAgY2FsbGJhY2sgZmlyZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlICdlbnRlci1hY3RpdmUnIG9yXG4gICAqICdhcHBlYXItYWN0aXZlJyBjbGFzcyBpcyBhcHBsaWVkLlxuICAgKlxuICAgKiAqKk5vdGUqKjogd2hlbiBgbm9kZVJlZmAgcHJvcCBpcyBwYXNzZWQsIGBub2RlYCBpcyBub3QgcGFzc2VkLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCwgaXNBcHBlYXJpbmc6IGJvb2wpXG4gICAqL1xuICBvbkVudGVyaW5nOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQSBgPFRyYW5zaXRpb24+YCBjYWxsYmFjayBmaXJlZCBpbW1lZGlhdGVseSBhZnRlciB0aGUgJ2VudGVyJyBvclxuICAgKiAnYXBwZWFyJyBjbGFzc2VzIGFyZSAqKnJlbW92ZWQqKiBhbmQgdGhlIGBkb25lYCBjbGFzcyBpcyBhZGRlZCB0byB0aGUgRE9NIG5vZGUuXG4gICAqXG4gICAqICoqTm90ZSoqOiB3aGVuIGBub2RlUmVmYCBwcm9wIGlzIHBhc3NlZCwgYG5vZGVgIGlzIG5vdCBwYXNzZWQuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50LCBpc0FwcGVhcmluZzogYm9vbClcbiAgICovXG4gIG9uRW50ZXJlZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEEgYDxUcmFuc2l0aW9uPmAgY2FsbGJhY2sgZmlyZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlICdleGl0JyBjbGFzcyBpc1xuICAgKiBhcHBsaWVkLlxuICAgKlxuICAgKiAqKk5vdGUqKjogd2hlbiBgbm9kZVJlZmAgcHJvcCBpcyBwYXNzZWQsIGBub2RlYCBpcyBub3QgcGFzc2VkXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50KVxuICAgKi9cbiAgb25FeGl0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQSBgPFRyYW5zaXRpb24+YCBjYWxsYmFjayBmaXJlZCBpbW1lZGlhdGVseSBhZnRlciB0aGUgJ2V4aXQtYWN0aXZlJyBpcyBhcHBsaWVkLlxuICAgKlxuICAgKiAqKk5vdGUqKjogd2hlbiBgbm9kZVJlZmAgcHJvcCBpcyBwYXNzZWQsIGBub2RlYCBpcyBub3QgcGFzc2VkXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50KVxuICAgKi9cbiAgb25FeGl0aW5nOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQSBgPFRyYW5zaXRpb24+YCBjYWxsYmFjayBmaXJlZCBpbW1lZGlhdGVseSBhZnRlciB0aGUgJ2V4aXQnIGNsYXNzZXNcbiAgICogYXJlICoqcmVtb3ZlZCoqIGFuZCB0aGUgYGV4aXQtZG9uZWAgY2xhc3MgaXMgYWRkZWQgdG8gdGhlIERPTSBub2RlLlxuICAgKlxuICAgKiAqKk5vdGUqKjogd2hlbiBgbm9kZVJlZmAgcHJvcCBpcyBwYXNzZWQsIGBub2RlYCBpcyBub3QgcGFzc2VkXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50KVxuICAgKi9cbiAgb25FeGl0ZWQ6IFByb3BUeXBlcy5mdW5jXG59KSA6IHt9O1xuZXhwb3J0IGRlZmF1bHQgQ1NTVHJhbnNpdGlvbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvZXNtL0NTU1RyYW5zaXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zZXRQcm90b3R5cGVPZi5qc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgaGFzQ2xhc3MgZnJvbSAnLi9oYXNDbGFzcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtlbHNlIGlmICghaGFzQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSkgaWYgKHR5cGVvZiBlbGVtZW50LmNsYXNzTmFtZSA9PT0gJ3N0cmluZycpIGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUgKyBcIiBcIiArIGNsYXNzTmFtZTtlbHNlIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIChlbGVtZW50LmNsYXNzTmFtZSAmJiBlbGVtZW50LmNsYXNzTmFtZS5iYXNlVmFsIHx8ICcnKSArIFwiIFwiICsgY2xhc3NOYW1lKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9hZGRDbGFzcy5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYXNDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSByZXR1cm4gISFjbGFzc05hbWUgJiYgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcbiAgcmV0dXJuIChcIiBcIiArIChlbGVtZW50LmNsYXNzTmFtZS5iYXNlVmFsIHx8IGVsZW1lbnQuY2xhc3NOYW1lKSArIFwiIFwiKS5pbmRleE9mKFwiIFwiICsgY2xhc3NOYW1lICsgXCIgXCIpICE9PSAtMTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9oYXNDbGFzcy5qc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJmdW5jdGlvbiByZXBsYWNlQ2xhc3NOYW1lKG9yaWdDbGFzcywgY2xhc3NUb1JlbW92ZSkge1xuICByZXR1cm4gb3JpZ0NsYXNzLnJlcGxhY2UobmV3IFJlZ0V4cChcIihefFxcXFxzKVwiICsgY2xhc3NUb1JlbW92ZSArIFwiKD86XFxcXHN8JClcIiwgJ2cnKSwgJyQxJykucmVwbGFjZSgvXFxzKy9nLCAnICcpLnJlcGxhY2UoL15cXHMqfFxccyokL2csICcnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50LmNsYXNzTmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICA7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSByZXBsYWNlQ2xhc3NOYW1lKGVsZW1lbnQuY2xhc3NOYW1lLCBjbGFzc05hbWUpO1xuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIHJlcGxhY2VDbGFzc05hbWUoZWxlbWVudC5jbGFzc05hbWUgJiYgZWxlbWVudC5jbGFzc05hbWUuYmFzZVZhbCB8fCAnJywgY2xhc3NOYW1lKSk7XG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9yZW1vdmVDbGFzcy5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZVwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBUcmFuc2l0aW9uR3JvdXAgZnJvbSAnLi9UcmFuc2l0aW9uR3JvdXAnO1xuLyoqXG4gKiBUaGUgYDxSZXBsYWNlVHJhbnNpdGlvbj5gIGNvbXBvbmVudCBpcyBhIHNwZWNpYWxpemVkIGBUcmFuc2l0aW9uYCBjb21wb25lbnRcbiAqIHRoYXQgYW5pbWF0ZXMgYmV0d2VlbiB0d28gY2hpbGRyZW4uXG4gKlxuICogYGBganN4XG4gKiA8UmVwbGFjZVRyYW5zaXRpb24gaW4+XG4gKiAgIDxGYWRlPjxkaXY+SSBhcHBlYXIgZmlyc3Q8L2Rpdj48L0ZhZGU+XG4gKiAgIDxGYWRlPjxkaXY+SSByZXBsYWNlIHRoZSBhYm92ZTwvZGl2PjwvRmFkZT5cbiAqIDwvUmVwbGFjZVRyYW5zaXRpb24+XG4gKiBgYGBcbiAqL1xuXG52YXIgUmVwbGFjZVRyYW5zaXRpb24gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoUmVwbGFjZVRyYW5zaXRpb24sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFJlcGxhY2VUcmFuc2l0aW9uKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBfYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIF9hcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoX2FyZ3MpKSB8fCB0aGlzO1xuXG4gICAgX3RoaXMuaGFuZGxlRW50ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3RoaXMuaGFuZGxlTGlmZWN5Y2xlKCdvbkVudGVyJywgMCwgYXJncyk7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUVudGVyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgICAgIGFyZ3NbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF90aGlzLmhhbmRsZUxpZmVjeWNsZSgnb25FbnRlcmluZycsIDAsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVFbnRlcmVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjQgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW40KSwgX2tleTQgPSAwOyBfa2V5NCA8IF9sZW40OyBfa2V5NCsrKSB7XG4gICAgICAgIGFyZ3NbX2tleTRdID0gYXJndW1lbnRzW19rZXk0XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF90aGlzLmhhbmRsZUxpZmVjeWNsZSgnb25FbnRlcmVkJywgMCwgYXJncyk7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUV4aXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuNSA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjUpLCBfa2V5NSA9IDA7IF9rZXk1IDwgX2xlbjU7IF9rZXk1KyspIHtcbiAgICAgICAgYXJnc1tfa2V5NV0gPSBhcmd1bWVudHNbX2tleTVdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3RoaXMuaGFuZGxlTGlmZWN5Y2xlKCdvbkV4aXQnLCAxLCBhcmdzKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlRXhpdGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAodmFyIF9sZW42ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNiksIF9rZXk2ID0gMDsgX2tleTYgPCBfbGVuNjsgX2tleTYrKykge1xuICAgICAgICBhcmdzW19rZXk2XSA9IGFyZ3VtZW50c1tfa2V5Nl07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfdGhpcy5oYW5kbGVMaWZlY3ljbGUoJ29uRXhpdGluZycsIDEsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVFeGl0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuNyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjcpLCBfa2V5NyA9IDA7IF9rZXk3IDwgX2xlbjc7IF9rZXk3KyspIHtcbiAgICAgICAgYXJnc1tfa2V5N10gPSBhcmd1bWVudHNbX2tleTddO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3RoaXMuaGFuZGxlTGlmZWN5Y2xlKCdvbkV4aXRlZCcsIDEsIGFyZ3MpO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gUmVwbGFjZVRyYW5zaXRpb24ucHJvdG90eXBlO1xuXG4gIF9wcm90by5oYW5kbGVMaWZlY3ljbGUgPSBmdW5jdGlvbiBoYW5kbGVMaWZlY3ljbGUoaGFuZGxlciwgaWR4LCBvcmlnaW5hbEFyZ3MpIHtcbiAgICB2YXIgX2NoaWxkJHByb3BzO1xuXG4gICAgdmFyIGNoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICB2YXIgY2hpbGQgPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKVtpZHhdO1xuICAgIGlmIChjaGlsZC5wcm9wc1toYW5kbGVyXSkgKF9jaGlsZCRwcm9wcyA9IGNoaWxkLnByb3BzKVtoYW5kbGVyXS5hcHBseShfY2hpbGQkcHJvcHMsIG9yaWdpbmFsQXJncyk7XG5cbiAgICBpZiAodGhpcy5wcm9wc1toYW5kbGVyXSkge1xuICAgICAgdmFyIG1heWJlTm9kZSA9IGNoaWxkLnByb3BzLm5vZGVSZWYgPyB1bmRlZmluZWQgOiBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICAgIHRoaXMucHJvcHNbaGFuZGxlcl0obWF5YmVOb2RlKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzLmNoaWxkcmVuLFxuICAgICAgICBpblByb3AgPSBfdGhpcyRwcm9wcy5pbixcbiAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgW1wiY2hpbGRyZW5cIiwgXCJpblwiXSk7XG5cbiAgICB2YXIgX1JlYWN0JENoaWxkcmVuJHRvQXJyID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbiksXG4gICAgICAgIGZpcnN0ID0gX1JlYWN0JENoaWxkcmVuJHRvQXJyWzBdLFxuICAgICAgICBzZWNvbmQgPSBfUmVhY3QkQ2hpbGRyZW4kdG9BcnJbMV07XG5cbiAgICBkZWxldGUgcHJvcHMub25FbnRlcjtcbiAgICBkZWxldGUgcHJvcHMub25FbnRlcmluZztcbiAgICBkZWxldGUgcHJvcHMub25FbnRlcmVkO1xuICAgIGRlbGV0ZSBwcm9wcy5vbkV4aXQ7XG4gICAgZGVsZXRlIHByb3BzLm9uRXhpdGluZztcbiAgICBkZWxldGUgcHJvcHMub25FeGl0ZWQ7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRyYW5zaXRpb25Hcm91cCwgcHJvcHMsIGluUHJvcCA/IFJlYWN0LmNsb25lRWxlbWVudChmaXJzdCwge1xuICAgICAga2V5OiAnZmlyc3QnLFxuICAgICAgb25FbnRlcjogdGhpcy5oYW5kbGVFbnRlcixcbiAgICAgIG9uRW50ZXJpbmc6IHRoaXMuaGFuZGxlRW50ZXJpbmcsXG4gICAgICBvbkVudGVyZWQ6IHRoaXMuaGFuZGxlRW50ZXJlZFxuICAgIH0pIDogUmVhY3QuY2xvbmVFbGVtZW50KHNlY29uZCwge1xuICAgICAga2V5OiAnc2Vjb25kJyxcbiAgICAgIG9uRW50ZXI6IHRoaXMuaGFuZGxlRXhpdCxcbiAgICAgIG9uRW50ZXJpbmc6IHRoaXMuaGFuZGxlRXhpdGluZyxcbiAgICAgIG9uRW50ZXJlZDogdGhpcy5oYW5kbGVFeGl0ZWRcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIFJlcGxhY2VUcmFuc2l0aW9uO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5SZXBsYWNlVHJhbnNpdGlvbi5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIGluOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBjaGlsZHJlbjogZnVuY3Rpb24gY2hpbGRyZW4ocHJvcHMsIHByb3BOYW1lKSB7XG4gICAgaWYgKFJlYWN0LkNoaWxkcmVuLmNvdW50KHByb3BzW3Byb3BOYW1lXSkgIT09IDIpIHJldHVybiBuZXcgRXJyb3IoXCJcXFwiXCIgKyBwcm9wTmFtZSArIFwiXFxcIiBtdXN0IGJlIGV4YWN0bHkgdHdvIHRyYW5zaXRpb24gY29tcG9uZW50cy5cIik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn0gOiB7fTtcbmV4cG9ydCBkZWZhdWx0IFJlcGxhY2VUcmFuc2l0aW9uO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9lc20vUmVwbGFjZVRyYW5zaXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgeyBDaGlsZHJlbiwgY2xvbmVFbGVtZW50LCBpc1ZhbGlkRWxlbWVudCB9IGZyb20gJ3JlYWN0Jztcbi8qKlxuICogR2l2ZW4gYHRoaXMucHJvcHMuY2hpbGRyZW5gLCByZXR1cm4gYW4gb2JqZWN0IG1hcHBpbmcga2V5IHRvIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Kn0gY2hpbGRyZW4gYHRoaXMucHJvcHMuY2hpbGRyZW5gXG4gKiBAcmV0dXJuIHtvYmplY3R9IE1hcHBpbmcgb2Yga2V5IHRvIGNoaWxkXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENoaWxkTWFwcGluZyhjaGlsZHJlbiwgbWFwRm4pIHtcbiAgdmFyIG1hcHBlciA9IGZ1bmN0aW9uIG1hcHBlcihjaGlsZCkge1xuICAgIHJldHVybiBtYXBGbiAmJiBpc1ZhbGlkRWxlbWVudChjaGlsZCkgPyBtYXBGbihjaGlsZCkgOiBjaGlsZDtcbiAgfTtcblxuICB2YXIgcmVzdWx0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgaWYgKGNoaWxkcmVuKSBDaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuIGM7XG4gIH0pLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgLy8gcnVuIHRoZSBtYXAgZnVuY3Rpb24gaGVyZSBpbnN0ZWFkIHNvIHRoYXQgdGhlIGtleSBpcyB0aGUgY29tcHV0ZWQgb25lXG4gICAgcmVzdWx0W2NoaWxkLmtleV0gPSBtYXBwZXIoY2hpbGQpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogV2hlbiB5b3UncmUgYWRkaW5nIG9yIHJlbW92aW5nIGNoaWxkcmVuIHNvbWUgbWF5IGJlIGFkZGVkIG9yIHJlbW92ZWQgaW4gdGhlXG4gKiBzYW1lIHJlbmRlciBwYXNzLiBXZSB3YW50IHRvIHNob3cgKmJvdGgqIHNpbmNlIHdlIHdhbnQgdG8gc2ltdWx0YW5lb3VzbHlcbiAqIGFuaW1hdGUgZWxlbWVudHMgaW4gYW5kIG91dC4gVGhpcyBmdW5jdGlvbiB0YWtlcyBhIHByZXZpb3VzIHNldCBvZiBrZXlzXG4gKiBhbmQgYSBuZXcgc2V0IG9mIGtleXMgYW5kIG1lcmdlcyB0aGVtIHdpdGggaXRzIGJlc3QgZ3Vlc3Mgb2YgdGhlIGNvcnJlY3RcbiAqIG9yZGVyaW5nLiBJbiB0aGUgZnV0dXJlIHdlIG1heSBleHBvc2Ugc29tZSBvZiB0aGUgdXRpbGl0aWVzIGluXG4gKiBSZWFjdE11bHRpQ2hpbGQgdG8gbWFrZSB0aGlzIGVhc3ksIGJ1dCBmb3Igbm93IFJlYWN0IGl0c2VsZiBkb2VzIG5vdFxuICogZGlyZWN0bHkgaGF2ZSB0aGlzIGNvbmNlcHQgb2YgdGhlIHVuaW9uIG9mIHByZXZDaGlsZHJlbiBhbmQgbmV4dENoaWxkcmVuXG4gKiBzbyB3ZSBpbXBsZW1lbnQgaXQgaGVyZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gcHJldiBwcmV2IGNoaWxkcmVuIGFzIHJldHVybmVkIGZyb21cbiAqIGBSZWFjdFRyYW5zaXRpb25DaGlsZE1hcHBpbmcuZ2V0Q2hpbGRNYXBwaW5nKClgLlxuICogQHBhcmFtIHtvYmplY3R9IG5leHQgbmV4dCBjaGlsZHJlbiBhcyByZXR1cm5lZCBmcm9tXG4gKiBgUmVhY3RUcmFuc2l0aW9uQ2hpbGRNYXBwaW5nLmdldENoaWxkTWFwcGluZygpYC5cbiAqIEByZXR1cm4ge29iamVjdH0gYSBrZXkgc2V0IHRoYXQgY29udGFpbnMgYWxsIGtleXMgaW4gYHByZXZgIGFuZCBhbGwga2V5c1xuICogaW4gYG5leHRgIGluIGEgcmVhc29uYWJsZSBvcmRlci5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VDaGlsZE1hcHBpbmdzKHByZXYsIG5leHQpIHtcbiAgcHJldiA9IHByZXYgfHwge307XG4gIG5leHQgPSBuZXh0IHx8IHt9O1xuXG4gIGZ1bmN0aW9uIGdldFZhbHVlRm9yS2V5KGtleSkge1xuICAgIHJldHVybiBrZXkgaW4gbmV4dCA/IG5leHRba2V5XSA6IHByZXZba2V5XTtcbiAgfSAvLyBGb3IgZWFjaCBrZXkgb2YgYG5leHRgLCB0aGUgbGlzdCBvZiBrZXlzIHRvIGluc2VydCBiZWZvcmUgdGhhdCBrZXkgaW5cbiAgLy8gdGhlIGNvbWJpbmVkIGxpc3RcblxuXG4gIHZhciBuZXh0S2V5c1BlbmRpbmcgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB2YXIgcGVuZGluZ0tleXMgPSBbXTtcblxuICBmb3IgKHZhciBwcmV2S2V5IGluIHByZXYpIHtcbiAgICBpZiAocHJldktleSBpbiBuZXh0KSB7XG4gICAgICBpZiAocGVuZGluZ0tleXMubGVuZ3RoKSB7XG4gICAgICAgIG5leHRLZXlzUGVuZGluZ1twcmV2S2V5XSA9IHBlbmRpbmdLZXlzO1xuICAgICAgICBwZW5kaW5nS2V5cyA9IFtdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwZW5kaW5nS2V5cy5wdXNoKHByZXZLZXkpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBpO1xuICB2YXIgY2hpbGRNYXBwaW5nID0ge307XG5cbiAgZm9yICh2YXIgbmV4dEtleSBpbiBuZXh0KSB7XG4gICAgaWYgKG5leHRLZXlzUGVuZGluZ1tuZXh0S2V5XSkge1xuICAgICAgZm9yIChpID0gMDsgaSA8IG5leHRLZXlzUGVuZGluZ1tuZXh0S2V5XS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgcGVuZGluZ05leHRLZXkgPSBuZXh0S2V5c1BlbmRpbmdbbmV4dEtleV1baV07XG4gICAgICAgIGNoaWxkTWFwcGluZ1tuZXh0S2V5c1BlbmRpbmdbbmV4dEtleV1baV1dID0gZ2V0VmFsdWVGb3JLZXkocGVuZGluZ05leHRLZXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNoaWxkTWFwcGluZ1tuZXh0S2V5XSA9IGdldFZhbHVlRm9yS2V5KG5leHRLZXkpO1xuICB9IC8vIEZpbmFsbHksIGFkZCB0aGUga2V5cyB3aGljaCBkaWRuJ3QgYXBwZWFyIGJlZm9yZSBhbnkga2V5IGluIGBuZXh0YFxuXG5cbiAgZm9yIChpID0gMDsgaSA8IHBlbmRpbmdLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgY2hpbGRNYXBwaW5nW3BlbmRpbmdLZXlzW2ldXSA9IGdldFZhbHVlRm9yS2V5KHBlbmRpbmdLZXlzW2ldKTtcbiAgfVxuXG4gIHJldHVybiBjaGlsZE1hcHBpbmc7XG59XG5cbmZ1bmN0aW9uIGdldFByb3AoY2hpbGQsIHByb3AsIHByb3BzKSB7XG4gIHJldHVybiBwcm9wc1twcm9wXSAhPSBudWxsID8gcHJvcHNbcHJvcF0gOiBjaGlsZC5wcm9wc1twcm9wXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEluaXRpYWxDaGlsZE1hcHBpbmcocHJvcHMsIG9uRXhpdGVkKSB7XG4gIHJldHVybiBnZXRDaGlsZE1hcHBpbmcocHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBjbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgIG9uRXhpdGVkOiBvbkV4aXRlZC5iaW5kKG51bGwsIGNoaWxkKSxcbiAgICAgIGluOiB0cnVlLFxuICAgICAgYXBwZWFyOiBnZXRQcm9wKGNoaWxkLCAnYXBwZWFyJywgcHJvcHMpLFxuICAgICAgZW50ZXI6IGdldFByb3AoY2hpbGQsICdlbnRlcicsIHByb3BzKSxcbiAgICAgIGV4aXQ6IGdldFByb3AoY2hpbGQsICdleGl0JywgcHJvcHMpXG4gICAgfSk7XG4gIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldE5leHRDaGlsZE1hcHBpbmcobmV4dFByb3BzLCBwcmV2Q2hpbGRNYXBwaW5nLCBvbkV4aXRlZCkge1xuICB2YXIgbmV4dENoaWxkTWFwcGluZyA9IGdldENoaWxkTWFwcGluZyhuZXh0UHJvcHMuY2hpbGRyZW4pO1xuICB2YXIgY2hpbGRyZW4gPSBtZXJnZUNoaWxkTWFwcGluZ3MocHJldkNoaWxkTWFwcGluZywgbmV4dENoaWxkTWFwcGluZyk7XG4gIE9iamVjdC5rZXlzKGNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltrZXldO1xuICAgIGlmICghaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSByZXR1cm47XG4gICAgdmFyIGhhc1ByZXYgPSAoa2V5IGluIHByZXZDaGlsZE1hcHBpbmcpO1xuICAgIHZhciBoYXNOZXh0ID0gKGtleSBpbiBuZXh0Q2hpbGRNYXBwaW5nKTtcbiAgICB2YXIgcHJldkNoaWxkID0gcHJldkNoaWxkTWFwcGluZ1trZXldO1xuICAgIHZhciBpc0xlYXZpbmcgPSBpc1ZhbGlkRWxlbWVudChwcmV2Q2hpbGQpICYmICFwcmV2Q2hpbGQucHJvcHMuaW47IC8vIGl0ZW0gaXMgbmV3IChlbnRlcmluZylcblxuICAgIGlmIChoYXNOZXh0ICYmICghaGFzUHJldiB8fCBpc0xlYXZpbmcpKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnZW50ZXJpbmcnLCBrZXkpXG4gICAgICBjaGlsZHJlbltrZXldID0gY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgIG9uRXhpdGVkOiBvbkV4aXRlZC5iaW5kKG51bGwsIGNoaWxkKSxcbiAgICAgICAgaW46IHRydWUsXG4gICAgICAgIGV4aXQ6IGdldFByb3AoY2hpbGQsICdleGl0JywgbmV4dFByb3BzKSxcbiAgICAgICAgZW50ZXI6IGdldFByb3AoY2hpbGQsICdlbnRlcicsIG5leHRQcm9wcylcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoIWhhc05leHQgJiYgaGFzUHJldiAmJiAhaXNMZWF2aW5nKSB7XG4gICAgICAvLyBpdGVtIGlzIG9sZCAoZXhpdGluZylcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdsZWF2aW5nJywga2V5KVxuICAgICAgY2hpbGRyZW5ba2V5XSA9IGNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICBpbjogZmFsc2VcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoaGFzTmV4dCAmJiBoYXNQcmV2ICYmIGlzVmFsaWRFbGVtZW50KHByZXZDaGlsZCkpIHtcbiAgICAgIC8vIGl0ZW0gaGFzbid0IGNoYW5nZWQgdHJhbnNpdGlvbiBzdGF0ZXNcbiAgICAgIC8vIGNvcHkgb3ZlciB0aGUgbGFzdCB0cmFuc2l0aW9uIHByb3BzO1xuICAgICAgLy8gY29uc29sZS5sb2coJ3VuY2hhbmdlZCcsIGtleSlcbiAgICAgIGNoaWxkcmVuW2tleV0gPSBjbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgb25FeGl0ZWQ6IG9uRXhpdGVkLmJpbmQobnVsbCwgY2hpbGQpLFxuICAgICAgICBpbjogcHJldkNoaWxkLnByb3BzLmluLFxuICAgICAgICBleGl0OiBnZXRQcm9wKGNoaWxkLCAnZXhpdCcsIG5leHRQcm9wcyksXG4gICAgICAgIGVudGVyOiBnZXRQcm9wKGNoaWxkLCAnZW50ZXInLCBuZXh0UHJvcHMpXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gY2hpbGRyZW47XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2VzbS91dGlscy9DaGlsZE1hcHBpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlXCI7XG5cbnZhciBfbGVhdmVSZW5kZXJzLCBfZW50ZXJSZW5kZXJzO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEVOVEVSRUQsIEVOVEVSSU5HLCBFWElUSU5HIH0gZnJvbSAnLi9UcmFuc2l0aW9uJztcbmltcG9ydCBUcmFuc2l0aW9uR3JvdXBDb250ZXh0IGZyb20gJy4vVHJhbnNpdGlvbkdyb3VwQ29udGV4dCc7XG5cbmZ1bmN0aW9uIGFyZUNoaWxkcmVuRGlmZmVyZW50KG9sZENoaWxkcmVuLCBuZXdDaGlsZHJlbikge1xuICBpZiAob2xkQ2hpbGRyZW4gPT09IG5ld0NoaWxkcmVuKSByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKFJlYWN0LmlzVmFsaWRFbGVtZW50KG9sZENoaWxkcmVuKSAmJiBSZWFjdC5pc1ZhbGlkRWxlbWVudChuZXdDaGlsZHJlbikgJiYgb2xkQ2hpbGRyZW4ua2V5ICE9IG51bGwgJiYgb2xkQ2hpbGRyZW4ua2V5ID09PSBuZXdDaGlsZHJlbi5rZXkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbi8qKlxuICogRW51bSBvZiBtb2RlcyBmb3IgU3dpdGNoVHJhbnNpdGlvbiBjb21wb25lbnRcbiAqIEBlbnVtIHsgc3RyaW5nIH1cbiAqL1xuXG5cbmV4cG9ydCB2YXIgbW9kZXMgPSB7XG4gIG91dDogJ291dC1pbicsXG4gIGluOiAnaW4tb3V0J1xufTtcblxudmFyIGNhbGxIb29rID0gZnVuY3Rpb24gY2FsbEhvb2soZWxlbWVudCwgbmFtZSwgY2IpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2VsZW1lbnQkcHJvcHM7XG5cbiAgICBlbGVtZW50LnByb3BzW25hbWVdICYmIChfZWxlbWVudCRwcm9wcyA9IGVsZW1lbnQucHJvcHMpW25hbWVdLmFwcGx5KF9lbGVtZW50JHByb3BzLCBhcmd1bWVudHMpO1xuICAgIGNiKCk7XG4gIH07XG59O1xuXG52YXIgbGVhdmVSZW5kZXJzID0gKF9sZWF2ZVJlbmRlcnMgPSB7fSwgX2xlYXZlUmVuZGVyc1ttb2Rlcy5vdXRdID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgdmFyIGN1cnJlbnQgPSBfcmVmLmN1cnJlbnQsXG4gICAgICBjaGFuZ2VTdGF0ZSA9IF9yZWYuY2hhbmdlU3RhdGU7XG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY3VycmVudCwge1xuICAgIGluOiBmYWxzZSxcbiAgICBvbkV4aXRlZDogY2FsbEhvb2soY3VycmVudCwgJ29uRXhpdGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgY2hhbmdlU3RhdGUoRU5URVJJTkcsIG51bGwpO1xuICAgIH0pXG4gIH0pO1xufSwgX2xlYXZlUmVuZGVyc1ttb2Rlcy5pbl0gPSBmdW5jdGlvbiAoX3JlZjIpIHtcbiAgdmFyIGN1cnJlbnQgPSBfcmVmMi5jdXJyZW50LFxuICAgICAgY2hhbmdlU3RhdGUgPSBfcmVmMi5jaGFuZ2VTdGF0ZSxcbiAgICAgIGNoaWxkcmVuID0gX3JlZjIuY2hpbGRyZW47XG4gIHJldHVybiBbY3VycmVudCwgUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgaW46IHRydWUsXG4gICAgb25FbnRlcmVkOiBjYWxsSG9vayhjaGlsZHJlbiwgJ29uRW50ZXJlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNoYW5nZVN0YXRlKEVOVEVSSU5HKTtcbiAgICB9KVxuICB9KV07XG59LCBfbGVhdmVSZW5kZXJzKTtcbnZhciBlbnRlclJlbmRlcnMgPSAoX2VudGVyUmVuZGVycyA9IHt9LCBfZW50ZXJSZW5kZXJzW21vZGVzLm91dF0gPSBmdW5jdGlvbiAoX3JlZjMpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZjMuY2hpbGRyZW4sXG4gICAgICBjaGFuZ2VTdGF0ZSA9IF9yZWYzLmNoYW5nZVN0YXRlO1xuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgaW46IHRydWUsXG4gICAgb25FbnRlcmVkOiBjYWxsSG9vayhjaGlsZHJlbiwgJ29uRW50ZXJlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNoYW5nZVN0YXRlKEVOVEVSRUQsIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwge1xuICAgICAgICBpbjogdHJ1ZVxuICAgICAgfSkpO1xuICAgIH0pXG4gIH0pO1xufSwgX2VudGVyUmVuZGVyc1ttb2Rlcy5pbl0gPSBmdW5jdGlvbiAoX3JlZjQpIHtcbiAgdmFyIGN1cnJlbnQgPSBfcmVmNC5jdXJyZW50LFxuICAgICAgY2hpbGRyZW4gPSBfcmVmNC5jaGlsZHJlbixcbiAgICAgIGNoYW5nZVN0YXRlID0gX3JlZjQuY2hhbmdlU3RhdGU7XG4gIHJldHVybiBbUmVhY3QuY2xvbmVFbGVtZW50KGN1cnJlbnQsIHtcbiAgICBpbjogZmFsc2UsXG4gICAgb25FeGl0ZWQ6IGNhbGxIb29rKGN1cnJlbnQsICdvbkV4aXRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNoYW5nZVN0YXRlKEVOVEVSRUQsIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwge1xuICAgICAgICBpbjogdHJ1ZVxuICAgICAgfSkpO1xuICAgIH0pXG4gIH0pLCBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHtcbiAgICBpbjogdHJ1ZVxuICB9KV07XG59LCBfZW50ZXJSZW5kZXJzKTtcbi8qKlxuICogQSB0cmFuc2l0aW9uIGNvbXBvbmVudCBpbnNwaXJlZCBieSB0aGUgW3Z1ZSB0cmFuc2l0aW9uIG1vZGVzXShodHRwczovL3Z1ZWpzLm9yZy92Mi9ndWlkZS90cmFuc2l0aW9ucy5odG1sI1RyYW5zaXRpb24tTW9kZXMpLlxuICogWW91IGNhbiB1c2UgaXQgd2hlbiB5b3Ugd2FudCB0byBjb250cm9sIHRoZSByZW5kZXIgYmV0d2VlbiBzdGF0ZSB0cmFuc2l0aW9ucy5cbiAqIEJhc2VkIG9uIHRoZSBzZWxlY3RlZCBtb2RlIGFuZCB0aGUgY2hpbGQncyBrZXkgd2hpY2ggaXMgdGhlIGBUcmFuc2l0aW9uYCBvciBgQ1NTVHJhbnNpdGlvbmAgY29tcG9uZW50LCB0aGUgYFN3aXRjaFRyYW5zaXRpb25gIG1ha2VzIGEgY29uc2lzdGVudCB0cmFuc2l0aW9uIGJldHdlZW4gdGhlbS5cbiAqXG4gKiBJZiB0aGUgYG91dC1pbmAgbW9kZSBpcyBzZWxlY3RlZCwgdGhlIGBTd2l0Y2hUcmFuc2l0aW9uYCB3YWl0cyB1bnRpbCB0aGUgb2xkIGNoaWxkIGxlYXZlcyBhbmQgdGhlbiBpbnNlcnRzIGEgbmV3IGNoaWxkLlxuICogSWYgdGhlIGBpbi1vdXRgIG1vZGUgaXMgc2VsZWN0ZWQsIHRoZSBgU3dpdGNoVHJhbnNpdGlvbmAgaW5zZXJ0cyBhIG5ldyBjaGlsZCBmaXJzdCwgd2FpdHMgZm9yIHRoZSBuZXcgY2hpbGQgdG8gZW50ZXIgYW5kIHRoZW4gcmVtb3ZlcyB0aGUgb2xkIGNoaWxkLlxuICpcbiAqICoqTm90ZSoqOiBJZiB5b3Ugd2FudCB0aGUgYW5pbWF0aW9uIHRvIGhhcHBlbiBzaW11bHRhbmVvdXNseVxuICogKHRoYXQgaXMsIHRvIGhhdmUgdGhlIG9sZCBjaGlsZCByZW1vdmVkIGFuZCBhIG5ldyBjaGlsZCBpbnNlcnRlZCAqKmF0IHRoZSBzYW1lIHRpbWUqKiksXG4gKiB5b3Ugc2hvdWxkIHVzZVxuICogW2BUcmFuc2l0aW9uR3JvdXBgXShodHRwczovL3JlYWN0Y29tbXVuaXR5Lm9yZy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL3RyYW5zaXRpb24tZ3JvdXApXG4gKiBpbnN0ZWFkLlxuICpcbiAqIGBgYGpzeFxuICogZnVuY3Rpb24gQXBwKCkge1xuICogIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICogIHJldHVybiAoXG4gKiAgICA8U3dpdGNoVHJhbnNpdGlvbj5cbiAqICAgICAgPENTU1RyYW5zaXRpb25cbiAqICAgICAgICBrZXk9e3N0YXRlID8gXCJHb29kYnllLCB3b3JsZCFcIiA6IFwiSGVsbG8sIHdvcmxkIVwifVxuICogICAgICAgIGFkZEVuZExpc3RlbmVyPXsobm9kZSwgZG9uZSkgPT4gbm9kZS5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCBkb25lLCBmYWxzZSl9XG4gKiAgICAgICAgY2xhc3NOYW1lcz0nZmFkZSdcbiAqICAgICAgPlxuICogICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0U3RhdGUoc3RhdGUgPT4gIXN0YXRlKX0+XG4gKiAgICAgICAgICB7c3RhdGUgPyBcIkdvb2RieWUsIHdvcmxkIVwiIDogXCJIZWxsbywgd29ybGQhXCJ9XG4gKiAgICAgICAgPC9idXR0b24+XG4gKiAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cbiAqICAgIDwvU3dpdGNoVHJhbnNpdGlvbj5cbiAqICApO1xuICogfVxuICogYGBgXG4gKlxuICogYGBgY3NzXG4gKiAuZmFkZS1lbnRlcntcbiAqICAgIG9wYWNpdHk6IDA7XG4gKiB9XG4gKiAuZmFkZS1leGl0e1xuICogICAgb3BhY2l0eTogMTtcbiAqIH1cbiAqIC5mYWRlLWVudGVyLWFjdGl2ZXtcbiAqICAgIG9wYWNpdHk6IDE7XG4gKiB9XG4gKiAuZmFkZS1leGl0LWFjdGl2ZXtcbiAqICAgIG9wYWNpdHk6IDA7XG4gKiB9XG4gKiAuZmFkZS1lbnRlci1hY3RpdmUsXG4gKiAuZmFkZS1leGl0LWFjdGl2ZXtcbiAqICAgIHRyYW5zaXRpb246IG9wYWNpdHkgNTAwbXM7XG4gKiB9XG4gKiBgYGBcbiAqL1xuXG52YXIgU3dpdGNoVHJhbnNpdGlvbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShTd2l0Y2hUcmFuc2l0aW9uLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBTd2l0Y2hUcmFuc2l0aW9uKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgc3RhdHVzOiBFTlRFUkVELFxuICAgICAgY3VycmVudDogbnVsbFxuICAgIH07XG4gICAgX3RoaXMuYXBwZWFyZWQgPSBmYWxzZTtcblxuICAgIF90aGlzLmNoYW5nZVN0YXRlID0gZnVuY3Rpb24gKHN0YXR1cywgY3VycmVudCkge1xuICAgICAgaWYgKGN1cnJlbnQgPT09IHZvaWQgMCkge1xuICAgICAgICBjdXJyZW50ID0gX3RoaXMuc3RhdGUuY3VycmVudDtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzdGF0dXM6IHN0YXR1cyxcbiAgICAgICAgY3VycmVudDogY3VycmVudFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBTd2l0Y2hUcmFuc2l0aW9uLnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmFwcGVhcmVkID0gdHJ1ZTtcbiAgfTtcblxuICBTd2l0Y2hUcmFuc2l0aW9uLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9IGZ1bmN0aW9uIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgc3RhdGUpIHtcbiAgICBpZiAocHJvcHMuY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY3VycmVudDogbnVsbFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUuc3RhdHVzID09PSBFTlRFUklORyAmJiBwcm9wcy5tb2RlID09PSBtb2Rlcy5pbikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RhdHVzOiBFTlRFUklOR1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUuY3VycmVudCAmJiBhcmVDaGlsZHJlbkRpZmZlcmVudChzdGF0ZS5jdXJyZW50LCBwcm9wcy5jaGlsZHJlbikpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXR1czogRVhJVElOR1xuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudDogUmVhY3QuY2xvbmVFbGVtZW50KHByb3BzLmNoaWxkcmVuLCB7XG4gICAgICAgIGluOiB0cnVlXG4gICAgICB9KVxuICAgIH07XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzLmNoaWxkcmVuLFxuICAgICAgICBtb2RlID0gX3RoaXMkcHJvcHMubW9kZSxcbiAgICAgICAgX3RoaXMkc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICBzdGF0dXMgPSBfdGhpcyRzdGF0ZS5zdGF0dXMsXG4gICAgICAgIGN1cnJlbnQgPSBfdGhpcyRzdGF0ZS5jdXJyZW50O1xuICAgIHZhciBkYXRhID0ge1xuICAgICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgICAgY3VycmVudDogY3VycmVudCxcbiAgICAgIGNoYW5nZVN0YXRlOiB0aGlzLmNoYW5nZVN0YXRlLFxuICAgICAgc3RhdHVzOiBzdGF0dXNcbiAgICB9O1xuICAgIHZhciBjb21wb25lbnQ7XG5cbiAgICBzd2l0Y2ggKHN0YXR1cykge1xuICAgICAgY2FzZSBFTlRFUklORzpcbiAgICAgICAgY29tcG9uZW50ID0gZW50ZXJSZW5kZXJzW21vZGVdKGRhdGEpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBFWElUSU5HOlxuICAgICAgICBjb21wb25lbnQgPSBsZWF2ZVJlbmRlcnNbbW9kZV0oZGF0YSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIEVOVEVSRUQ6XG4gICAgICAgIGNvbXBvbmVudCA9IGN1cnJlbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRyYW5zaXRpb25Hcm91cENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIGlzTW91bnRpbmc6ICF0aGlzLmFwcGVhcmVkXG4gICAgICB9XG4gICAgfSwgY29tcG9uZW50KTtcbiAgfTtcblxuICByZXR1cm4gU3dpdGNoVHJhbnNpdGlvbjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuU3dpdGNoVHJhbnNpdGlvbi5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIC8qKlxuICAgKiBUcmFuc2l0aW9uIG1vZGVzLlxuICAgKiBgb3V0LWluYDogQ3VycmVudCBlbGVtZW50IHRyYW5zaXRpb25zIG91dCBmaXJzdCwgdGhlbiB3aGVuIGNvbXBsZXRlLCB0aGUgbmV3IGVsZW1lbnQgdHJhbnNpdGlvbnMgaW4uXG4gICAqIGBpbi1vdXRgOiBOZXcgZWxlbWVudCB0cmFuc2l0aW9ucyBpbiBmaXJzdCwgdGhlbiB3aGVuIGNvbXBsZXRlLCB0aGUgY3VycmVudCBlbGVtZW50IHRyYW5zaXRpb25zIG91dC5cbiAgICpcbiAgICogQHR5cGUgeydvdXQtaW4nfCdpbi1vdXQnfVxuICAgKi9cbiAgbW9kZTogUHJvcFR5cGVzLm9uZU9mKFttb2Rlcy5pbiwgbW9kZXMub3V0XSksXG5cbiAgLyoqXG4gICAqIEFueSBgVHJhbnNpdGlvbmAgb3IgYENTU1RyYW5zaXRpb25gIGNvbXBvbmVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudC5pc1JlcXVpcmVkXSlcbn0gOiB7fTtcblN3aXRjaFRyYW5zaXRpb24uZGVmYXVsdFByb3BzID0ge1xuICBtb2RlOiBtb2Rlcy5vdXRcbn07XG5leHBvcnQgZGVmYXVsdCBTd2l0Y2hUcmFuc2l0aW9uO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9lc20vU3dpdGNoVHJhbnNpdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKiBlc2xpbnQgcmVhY3QvcmVxdWlyZS1kZWZhdWx0LXByb3BzOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IFJvd1RlbXBsYXRlIGZyb20gJy4vcm93L3Jvdy10ZW1wbGF0ZSc7XG5pbXBvcnQgRm9vdGVyQ2VsbCBmcm9tICcuL2Zvb3Rlci1jZWxsJztcbmltcG9ydCBfIGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBGb290ZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBkYXRhLCBjbGFzc05hbWUsIGNvbHVtbnMsIHNlbGVjdFJvdywgZXhwYW5kUm93IH0gPSBwcm9wcztcblxuICBmdW5jdGlvbiByZW5kZXJDb250ZW50KCkge1xuICAgIHJldHVybiBjb2x1bW5zLm1hcCgoY29sdW1uLCBpKSA9PiB7XG4gICAgICBpZiAoY29sdW1uLmZvb3RlciA9PT0gdW5kZWZpbmVkIHx8IGNvbHVtbi5mb290ZXIgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjb2x1bW5EYXRhID0gXy5wbHVjayhkYXRhLCBjb2x1bW4uZGF0YUZpZWxkKTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEZvb3RlckNlbGxcbiAgICAgICAgICBpbmRleD17IGkgfVxuICAgICAgICAgIGtleT17IGNvbHVtbi5kYXRhRmllbGQgfVxuICAgICAgICAgIGNvbHVtbj17IGNvbHVtbiB9XG4gICAgICAgICAgY29sdW1uRGF0YT17IGNvbHVtbkRhdGEgfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHRmb290PlxuICAgICAgPFJvd1RlbXBsYXRlXG4gICAgICAgIHJlbmRlckNvbnRlbnQ9eyByZW5kZXJDb250ZW50IH1cbiAgICAgICAgc2VsZWN0Um93PXsgc2VsZWN0Um93IH1cbiAgICAgICAgZXhwYW5kUm93PXsgZXhwYW5kUm93IH1cbiAgICAgICAgY2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cbiAgICAgICAgY2VsbEVsPVwidGhcIlxuICAgICAgLz5cbiAgICA8L3Rmb290PlxuICApO1xufTtcblxuRm9vdGVyLnByb3BUeXBlcyA9IHtcbiAgZGF0YTogUHJvcFR5cGVzLmFycmF5LFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNvbHVtbnM6IFByb3BUeXBlcy5hcnJheSxcbiAgc2VsZWN0Um93OiBQcm9wVHlwZXMub2JqZWN0LFxuICBleHBhbmRSb3c6IFByb3BUeXBlcy5vYmplY3Rcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2Zvb3Rlci5qcyIsIi8qIGVzbGludCByZWFjdC9yZXF1aXJlLWRlZmF1bHQtcHJvcHM6IDAgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3MgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgXyBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBldmVudERlbGVnYXRlciBmcm9tICcuL2NlbGwtZXZlbnQtZGVsZWdhdGVyJztcblxuY2xhc3MgRm9vdGVyQ2VsbCBleHRlbmRzIGV2ZW50RGVsZWdhdGVyKFJlYWN0LkNvbXBvbmVudCkge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpbmRleCwgY29sdW1uLCBjb2x1bW5EYXRhIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3Qge1xuICAgICAgZm9vdGVyLFxuICAgICAgZm9vdGVyVGl0bGUsXG4gICAgICBmb290ZXJBbGlnbixcbiAgICAgIGZvb3RlckZvcm1hdHRlcixcbiAgICAgIGZvb3RlckV2ZW50cyxcbiAgICAgIGZvb3RlckNsYXNzZXMsXG4gICAgICBmb290ZXJTdHlsZSxcbiAgICAgIGZvb3RlckF0dHJzXG4gICAgfSA9IGNvbHVtbjtcblxuICAgIGNvbnN0IGRlbGVnYXRlRXZlbnRzID0gdGhpcy5kZWxlZ2F0ZShmb290ZXJFdmVudHMpO1xuICAgIGNvbnN0IGNlbGxBdHRycyA9IHtcbiAgICAgIC4uLihfLmlzRnVuY3Rpb24oZm9vdGVyQXR0cnMpID8gZm9vdGVyQXR0cnMoY29sdW1uLCBpbmRleCkgOiBmb290ZXJBdHRycyksXG4gICAgICAuLi5kZWxlZ2F0ZUV2ZW50c1xuICAgIH07XG5cblxuICAgIGxldCB0ZXh0ID0gJyc7XG4gICAgaWYgKF8uaXNTdHJpbmcoZm9vdGVyKSkge1xuICAgICAgdGV4dCA9IGZvb3RlcjtcbiAgICB9IGVsc2UgaWYgKF8uaXNGdW5jdGlvbihmb290ZXIpKSB7XG4gICAgICB0ZXh0ID0gZm9vdGVyKGNvbHVtbkRhdGEsIGNvbHVtbiwgaW5kZXgpO1xuICAgIH1cblxuICAgIGxldCBjZWxsU3R5bGUgPSB7fTtcbiAgICBjb25zdCBjZWxsQ2xhc3NlcyA9IF8uaXNGdW5jdGlvbihmb290ZXJDbGFzc2VzKSA/IGZvb3RlckNsYXNzZXMoY29sdW1uLCBpbmRleCkgOiBmb290ZXJDbGFzc2VzO1xuXG4gICAgaWYgKGZvb3RlclN0eWxlKSB7XG4gICAgICBjZWxsU3R5bGUgPSBfLmlzRnVuY3Rpb24oZm9vdGVyU3R5bGUpID8gZm9vdGVyU3R5bGUoY29sdW1uLCBpbmRleCkgOiBmb290ZXJTdHlsZTtcbiAgICAgIGNlbGxTdHlsZSA9IGNlbGxTdHlsZSA/IHsgLi4uY2VsbFN0eWxlIH0gOiBjZWxsU3R5bGU7XG4gICAgfVxuXG4gICAgaWYgKGZvb3RlclRpdGxlKSB7XG4gICAgICBjZWxsQXR0cnMudGl0bGUgPSBfLmlzRnVuY3Rpb24oZm9vdGVyVGl0bGUpID8gZm9vdGVyVGl0bGUoY29sdW1uLCBpbmRleCkgOiB0ZXh0O1xuICAgIH1cblxuICAgIGlmIChmb290ZXJBbGlnbikge1xuICAgICAgY2VsbFN0eWxlLnRleHRBbGlnbiA9IF8uaXNGdW5jdGlvbihmb290ZXJBbGlnbikgPyBmb290ZXJBbGlnbihjb2x1bW4sIGluZGV4KSA6IGZvb3RlckFsaWduO1xuICAgIH1cblxuICAgIGlmIChjZWxsQ2xhc3NlcykgY2VsbEF0dHJzLmNsYXNzTmFtZSA9IGNzKGNlbGxBdHRycy5jbGFzc05hbWUsIGNlbGxDbGFzc2VzKTtcbiAgICBpZiAoIV8uaXNFbXB0eU9iamVjdChjZWxsU3R5bGUpKSBjZWxsQXR0cnMuc3R5bGUgPSBjZWxsU3R5bGU7XG5cbiAgICBjb25zdCBjaGlsZHJlbiA9IGZvb3RlckZvcm1hdHRlciA/IGZvb3RlckZvcm1hdHRlcihjb2x1bW4sIGluZGV4LCB7IHRleHQgfSkgOiB0ZXh0O1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RoJywgY2VsbEF0dHJzLCBjaGlsZHJlbik7XG4gIH1cbn1cblxuRm9vdGVyQ2VsbC5wcm9wVHlwZXMgPSB7XG4gIGNvbHVtbkRhdGE6IFByb3BUeXBlcy5hcnJheSxcbiAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNvbHVtbjogUHJvcFR5cGVzLm9iamVjdFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyQ2VsbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2Zvb3Rlci1jZWxsLmpzIiwiaW1wb3J0IF8gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IENvbHVtblJlc29sdmVyIGZyb20gJy4vY29sdW1uLXJlc29sdmVyJztcblxuZXhwb3J0IGRlZmF1bHQgRXh0ZW5kQmFzZSA9PlxuICBjbGFzcyBUYWJsZVJlc29sdmVyIGV4dGVuZHMgQ29sdW1uUmVzb2x2ZXIoRXh0ZW5kQmFzZSkge1xuICAgIHZhbGlkYXRlUHJvcHMoKSB7XG4gICAgICBjb25zdCB7IGtleUZpZWxkIH0gPSB0aGlzLnByb3BzO1xuICAgICAgaWYgKCFrZXlGaWVsZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBzcGVjaWZ5IGEgZmllbGQgYXMga2V5IHZpYSBrZXlGaWVsZCcpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMudmlzaWJsZUNvbHVtblNpemUoZmFsc2UpIDw9IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyB2aXNpYmxlIGNvbHVtbnMgZGV0ZWN0ZWQnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpc0VtcHR5KCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZGF0YS5sZW5ndGggPT09IDA7XG4gICAgfVxuXG4gICAgdmlzaWJsZVJvd3MoKSB7XG4gICAgICBjb25zdCB7IGRhdGEsIGhpZGRlblJvd3MsIGtleUZpZWxkIH0gPSB0aGlzLnByb3BzO1xuICAgICAgaWYgKCFoaWRkZW5Sb3dzIHx8IGhpZGRlblJvd3MubGVuZ3RoID09PSAwKSByZXR1cm4gZGF0YTtcbiAgICAgIHJldHVybiBkYXRhLmZpbHRlcigocm93KSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IF8uZ2V0KHJvdywga2V5RmllbGQpO1xuICAgICAgICByZXR1cm4gIV8uY29udGFpbnMoaGlkZGVuUm93cywga2V5KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL3Byb3BzLXJlc29sdmVyL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQgRXh0ZW5kQmFzZSA9PlxuICBjbGFzcyBDb2x1bW5SZXNvbHZlciBleHRlbmRzIEV4dGVuZEJhc2Uge1xuICAgIHZpc2libGVDb2x1bW5TaXplKGluY2x1ZGVTZWxlY3RDb2x1bW4gPSB0cnVlKSB7XG4gICAgICBsZXQgY29sdW1uTGVuO1xuICAgICAgaWYgKHRoaXMucHJvcHMuY29sdW1uVG9nZ2xlICYmIHRoaXMucHJvcHMuY29sdW1uVG9nZ2xlLnRvZ2dsZXMpIHtcbiAgICAgICAgY29uc3QgY29sdW1ucyA9IHRoaXMucHJvcHMuY29sdW1uVG9nZ2xlLnRvZ2dsZXM7XG4gICAgICAgIGNvbHVtbkxlbiA9IE9iamVjdC5rZXlzKGNvbHVtbnMpLmZpbHRlcihuYW1lID0+IGNvbHVtbnNbbmFtZV0pLmxlbmd0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbHVtbkxlbiA9IHRoaXMucHJvcHMuY29sdW1ucy5maWx0ZXIoYyA9PiAhYy5oaWRkZW4pLmxlbmd0aDtcbiAgICAgIH1cbiAgICAgIGlmICghaW5jbHVkZVNlbGVjdENvbHVtbikgcmV0dXJuIGNvbHVtbkxlbjtcbiAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdFJvdyAmJiAhdGhpcy5wcm9wcy5zZWxlY3RSb3cuaGlkZVNlbGVjdENvbHVtbikge1xuICAgICAgICBjb2x1bW5MZW4gKz0gMTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnByb3BzLmV4cGFuZFJvdyAmJiB0aGlzLnByb3BzLmV4cGFuZFJvdy5zaG93RXhwYW5kQ29sdW1uKSB7XG4gICAgICAgIGNvbHVtbkxlbiArPSAxO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbHVtbkxlbjtcbiAgICB9XG4gIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9wcm9wcy1yZXNvbHZlci9jb2x1bW4tcmVzb2x2ZXIuanMiLCIvKiBlc2xpbnQgY2FtZWxjYXNlOiAwICovXG4vKiBlc2xpbnQgbm8tcmV0dXJuLWFzc2lnbjogMCAqL1xuLyogZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOiAwICovXG4vKiBlc2xpbnQgY2xhc3MtbWV0aG9kcy11c2UtdGhpczogMCAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnZXZlbnRzJztcbmltcG9ydCBfIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCBjcmVhdGVEYXRhQ29udGV4dCBmcm9tICcuL2RhdGEtY29udGV4dCc7XG5pbXBvcnQgY3JlYXRlQ29sdW1uTWd0Q29udGV4dCBmcm9tICcuL2NvbHVtbi1jb250ZXh0JztcbmltcG9ydCBjcmVhdGVTb3J0Q29udGV4dCBmcm9tICcuL3NvcnQtY29udGV4dCc7XG5pbXBvcnQgU2VsZWN0aW9uQ29udGV4dCBmcm9tICcuL3NlbGVjdGlvbi1jb250ZXh0JztcbmltcG9ydCBSb3dFeHBhbmRDb250ZXh0IGZyb20gJy4vcm93LWV4cGFuZC1jb250ZXh0JztcbmltcG9ydCByZW1vdGVSZXNvbHZlciBmcm9tICcuLi9wcm9wcy1yZXNvbHZlci9yZW1vdGUtcmVzb2x2ZXInO1xuaW1wb3J0IHsgQm9vdHN0cmFwQ29udGV4dCB9IGZyb20gJy4vYm9vdHN0cmFwJztcbmltcG9ydCBkYXRhT3BlcmF0b3IgZnJvbSAnLi4vc3RvcmUvb3BlcmF0b3JzJztcblxuY29uc3Qgd2l0aENvbnRleHQgPSBCYXNlID0+XG4gIGNsYXNzIEJvb3RzdHJhcFRhYmxlQ29udGFpbmVyIGV4dGVuZHMgcmVtb3RlUmVzb2x2ZXIoQ29tcG9uZW50KSB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIHRoaXMuRGF0YUNvbnRleHQgPSBjcmVhdGVEYXRhQ29udGV4dCgpO1xuXG4gICAgICBpZiAocHJvcHMucmVnaXN0ZXJFeHBvc2VkQVBJKSB7XG4gICAgICAgIGNvbnN0IGV4cG9zZWRBUElFbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICBleHBvc2VkQVBJRW1pdHRlci5vbignZ2V0LnRhYmxlLmRhdGEnLCBwYXlsb2FkID0+IHBheWxvYWQucmVzdWx0ID0gdGhpcy50YWJsZS5nZXREYXRhKCkpO1xuICAgICAgICBleHBvc2VkQVBJRW1pdHRlci5vbignZ2V0LnNlbGVjdGVkLnJvd3MnLCBwYXlsb2FkID0+IHBheWxvYWQucmVzdWx0ID0gdGhpcy5zZWxlY3Rpb25Db250ZXh0LmdldFNlbGVjdGVkKCkpO1xuICAgICAgICBleHBvc2VkQVBJRW1pdHRlci5vbignZ2V0LmZpbHRlcmVkLnJvd3MnLCAocGF5bG9hZCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLnNlYXJjaENvbnRleHQpIHtcbiAgICAgICAgICAgIHBheWxvYWQucmVzdWx0ID0gdGhpcy5zZWFyY2hDb250ZXh0LmdldFNlYXJjaGVkKCk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmZpbHRlckNvbnRleHQpIHtcbiAgICAgICAgICAgIHBheWxvYWQucmVzdWx0ID0gdGhpcy5maWx0ZXJDb250ZXh0LmdldEZpbHRlcmVkKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBheWxvYWQucmVzdWx0ID0gdGhpcy50YWJsZS5nZXREYXRhKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcHJvcHMucmVnaXN0ZXJFeHBvc2VkQVBJKGV4cG9zZWRBUElFbWl0dGVyKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLmNvbHVtbnMuZmlsdGVyKGNvbCA9PiBjb2wuc29ydCkubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLlNvcnRDb250ZXh0ID0gY3JlYXRlU29ydENvbnRleHQoXG4gICAgICAgICAgZGF0YU9wZXJhdG9yLCB0aGlzLmlzUmVtb3RlU29ydCwgdGhpcy5oYW5kbGVSZW1vdGVTb3J0Q2hhbmdlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBwcm9wcy5jb2x1bW5Ub2dnbGUgfHxcbiAgICAgICAgcHJvcHMuY29sdW1ucy5maWx0ZXIoY29sID0+IGNvbC5oaWRkZW4pLmxlbmd0aCA+IDBcbiAgICAgICkge1xuICAgICAgICB0aGlzLkNvbHVtbk1hbmFnZW1lbnRDb250ZXh0ID0gY3JlYXRlQ29sdW1uTWd0Q29udGV4dCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMuc2VsZWN0Um93KSB7XG4gICAgICAgIHRoaXMuU2VsZWN0aW9uQ29udGV4dCA9IFNlbGVjdGlvbkNvbnRleHQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5leHBhbmRSb3cpIHtcbiAgICAgICAgdGhpcy5Sb3dFeHBhbmRDb250ZXh0ID0gUm93RXhwYW5kQ29udGV4dDtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLmNlbGxFZGl0ICYmIHByb3BzLmNlbGxFZGl0LmNyZWF0ZUNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5DZWxsRWRpdENvbnRleHQgPSBwcm9wcy5jZWxsRWRpdC5jcmVhdGVDb250ZXh0KFxuICAgICAgICAgIF8sIGRhdGFPcGVyYXRvciwgdGhpcy5pc1JlbW90ZUNlbGxFZGl0LCB0aGlzLmhhbmRsZVJlbW90ZUNlbGxDaGFuZ2UpO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMuZmlsdGVyKSB7XG4gICAgICAgIHRoaXMuRmlsdGVyQ29udGV4dCA9IHByb3BzLmZpbHRlci5jcmVhdGVDb250ZXh0KFxuICAgICAgICAgIF8sIHRoaXMuaXNSZW1vdGVGaWx0ZXJpbmcsIHRoaXMuaGFuZGxlUmVtb3RlRmlsdGVyQ2hhbmdlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLnBhZ2luYXRpb24pIHtcbiAgICAgICAgdGhpcy5QYWdpbmF0aW9uQ29udGV4dCA9IHByb3BzLnBhZ2luYXRpb24uY3JlYXRlQ29udGV4dCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMuc2VhcmNoICYmIHByb3BzLnNlYXJjaC5zZWFyY2hDb250ZXh0KSB7XG4gICAgICAgIHRoaXMuU2VhcmNoQ29udGV4dCA9IHByb3BzLnNlYXJjaC5zZWFyY2hDb250ZXh0KFxuICAgICAgICAgIF8sIHRoaXMuaXNSZW1vdGVTZWFyY2gsIHRoaXMuaGFuZGxlUmVtb3RlU2VhcmNoQ2hhbmdlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLnNldERlcGVuZGVuY3lNb2R1bGVzKSB7XG4gICAgICAgIHByb3BzLnNldERlcGVuZGVuY3lNb2R1bGVzKF8pO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMuc2V0UGFnaW5hdGlvblJlbW90ZUVtaXR0ZXIpIHtcbiAgICAgICAgcHJvcHMuc2V0UGFnaW5hdGlvblJlbW90ZUVtaXR0ZXIodGhpcy5yZW1vdGVFbWl0dGVyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGlmIChuZXh0UHJvcHMuY29sdW1ucy5maWx0ZXIoY29sID0+IGNvbC5zb3J0KS5sZW5ndGggPD0gMCkge1xuICAgICAgICB0aGlzLlNvcnRDb250ZXh0ID0gbnVsbDtcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuU29ydENvbnRleHQpIHtcbiAgICAgICAgdGhpcy5Tb3J0Q29udGV4dCA9IGNyZWF0ZVNvcnRDb250ZXh0KFxuICAgICAgICAgIGRhdGFPcGVyYXRvciwgdGhpcy5pc1JlbW90ZVNvcnQsIHRoaXMuaGFuZGxlUmVtb3RlU29ydENoYW5nZSk7XG4gICAgICB9XG4gICAgICBpZiAoIW5leHRQcm9wcy5wYWdpbmF0aW9uICYmIHRoaXMucHJvcHMucGFnaW5hdGlvbikge1xuICAgICAgICB0aGlzLlBhZ2luYXRpb25Db250ZXh0ID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0UHJvcHMucGFnaW5hdGlvbiAmJiAhdGhpcy5wcm9wcy5wYWdpbmF0aW9uKSB7XG4gICAgICAgIHRoaXMuUGFnaW5hdGlvbkNvbnRleHQgPSBuZXh0UHJvcHMucGFnaW5hdGlvbi5jcmVhdGVDb250ZXh0KFxuICAgICAgICAgIHRoaXMuaXNSZW1vdGVQYWdpbmF0aW9uLCB0aGlzLmhhbmRsZVJlbW90ZVBhZ2VDaGFuZ2UpO1xuICAgICAgfVxuICAgICAgaWYgKCFuZXh0UHJvcHMuY2VsbEVkaXQgJiYgdGhpcy5wcm9wcy5jZWxsRWRpdCkge1xuICAgICAgICB0aGlzLkNlbGxFZGl0Q29udGV4dCA9IG51bGw7XG4gICAgICB9XG4gICAgICBpZiAobmV4dFByb3BzLmNlbGxFZGl0ICYmICF0aGlzLnByb3BzLmNlbGxFZGl0KSB7XG4gICAgICAgIHRoaXMuQ2VsbEVkaXRDb250ZXh0ID0gbmV4dFByb3BzLmNlbGxFZGl0LmNyZWF0ZUNvbnRleHQoXG4gICAgICAgICAgXywgZGF0YU9wZXJhdG9yLCB0aGlzLmlzUmVtb3RlQ2VsbEVkaXQsIHRoaXMuaGFuZGxlUmVtb3RlQ2VsbENoYW5nZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyQmFzZSgpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHJvb3RQcm9wcyxcbiAgICAgICAgZmlsdGVyUHJvcHMsXG4gICAgICAgIHNlYXJjaFByb3BzLFxuICAgICAgICBzb3J0UHJvcHMsXG4gICAgICAgIHBhZ2luYXRpb25Qcm9wcyxcbiAgICAgICAgY29sdW1uVG9nZ2xlUHJvcHNcbiAgICAgICkgPT4gKFxuICAgICAgICA8QmFzZVxuICAgICAgICAgIHJlZj17IG4gPT4gdGhpcy50YWJsZSA9IG4gfVxuICAgICAgICAgIHsgLi4udGhpcy5wcm9wcyB9XG4gICAgICAgICAgeyAuLi5zb3J0UHJvcHMgfVxuICAgICAgICAgIHsgLi4uZmlsdGVyUHJvcHMgfVxuICAgICAgICAgIHsgLi4uc2VhcmNoUHJvcHMgfVxuICAgICAgICAgIHsgLi4ucGFnaW5hdGlvblByb3BzIH1cbiAgICAgICAgICB7IC4uLmNvbHVtblRvZ2dsZVByb3BzIH1cbiAgICAgICAgICBkYXRhPXsgcm9vdFByb3BzLmdldERhdGEoZmlsdGVyUHJvcHMsIHNlYXJjaFByb3BzLCBzb3J0UHJvcHMsIHBhZ2luYXRpb25Qcm9wcykgfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJXaXRoQ29sdW1uTWFuYWdlbWVudEN0eChiYXNlLCBiYXNlUHJvcHMpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHJvb3RQcm9wcyxcbiAgICAgICAgZmlsdGVyUHJvcHMsXG4gICAgICAgIHNlYXJjaFByb3BzLFxuICAgICAgICBzb3J0UHJvcHMsXG4gICAgICAgIHBhZ2luYXRpb25Qcm9wc1xuICAgICAgKSA9PiAoXG4gICAgICAgIDx0aGlzLkNvbHVtbk1hbmFnZW1lbnRDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgeyAuLi5iYXNlUHJvcHMgfVxuICAgICAgICAgIHRvZ2dsZXM9eyB0aGlzLnByb3BzLmNvbHVtblRvZ2dsZSA/IHRoaXMucHJvcHMuY29sdW1uVG9nZ2xlLnRvZ2dsZXMgOiBudWxsIH1cbiAgICAgICAgPlxuICAgICAgICAgIDx0aGlzLkNvbHVtbk1hbmFnZW1lbnRDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjb2x1bW5Ub2dnbGVQcm9wcyA9PiBiYXNlKFxuICAgICAgICAgICAgICAgIHJvb3RQcm9wcyxcbiAgICAgICAgICAgICAgICBmaWx0ZXJQcm9wcyxcbiAgICAgICAgICAgICAgICBzZWFyY2hQcm9wcyxcbiAgICAgICAgICAgICAgICBzb3J0UHJvcHMsXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvblByb3BzLFxuICAgICAgICAgICAgICAgIGNvbHVtblRvZ2dsZVByb3BzXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L3RoaXMuQ29sdW1uTWFuYWdlbWVudENvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgIDwvdGhpcy5Db2x1bW5NYW5hZ2VtZW50Q29udGV4dC5Qcm92aWRlcj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyV2l0aFNlbGVjdGlvbkN0eChiYXNlLCBiYXNlUHJvcHMpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHJvb3RQcm9wcyxcbiAgICAgICAgZmlsdGVyUHJvcHMsXG4gICAgICAgIHNlYXJjaFByb3BzLFxuICAgICAgICBzb3J0UHJvcHMsXG4gICAgICAgIHBhZ2luYXRpb25Qcm9wc1xuICAgICAgKSA9PiAoXG4gICAgICAgIDx0aGlzLlNlbGVjdGlvbkNvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgICB7IC4uLmJhc2VQcm9wcyB9XG4gICAgICAgICAgcmVmPXsgbiA9PiB0aGlzLnNlbGVjdGlvbkNvbnRleHQgPSBuIH1cbiAgICAgICAgICBzZWxlY3RSb3c9eyB0aGlzLnByb3BzLnNlbGVjdFJvdyB9XG4gICAgICAgICAgZGF0YT17IHJvb3RQcm9wcy5nZXREYXRhKGZpbHRlclByb3BzLCBzZWFyY2hQcm9wcywgc29ydFByb3BzLCBwYWdpbmF0aW9uUHJvcHMpIH1cbiAgICAgICAgPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJhc2UoXG4gICAgICAgICAgICAgIHJvb3RQcm9wcyxcbiAgICAgICAgICAgICAgZmlsdGVyUHJvcHMsXG4gICAgICAgICAgICAgIHNlYXJjaFByb3BzLFxuICAgICAgICAgICAgICBzb3J0UHJvcHMsXG4gICAgICAgICAgICAgIHBhZ2luYXRpb25Qcm9wc1xuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgPC90aGlzLlNlbGVjdGlvbkNvbnRleHQuUHJvdmlkZXI+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcldpdGhSb3dFeHBhbmRDdHgoYmFzZSwgYmFzZVByb3BzKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICByb290UHJvcHMsXG4gICAgICAgIGZpbHRlclByb3BzLFxuICAgICAgICBzZWFyY2hQcm9wcyxcbiAgICAgICAgc29ydFByb3BzLFxuICAgICAgICBwYWdpbmF0aW9uUHJvcHNcbiAgICAgICkgPT4gKFxuICAgICAgICA8dGhpcy5Sb3dFeHBhbmRDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgeyAuLi5iYXNlUHJvcHMgfVxuICAgICAgICAgIHJlZj17IG4gPT4gdGhpcy5yb3dFeHBhbmRDb250ZXh0ID0gbiB9XG4gICAgICAgICAgZXhwYW5kUm93PXsgdGhpcy5wcm9wcy5leHBhbmRSb3cgfVxuICAgICAgICAgIGRhdGE9eyByb290UHJvcHMuZ2V0RGF0YShmaWx0ZXJQcm9wcywgc2VhcmNoUHJvcHMsIHNvcnRQcm9wcywgcGFnaW5hdGlvblByb3BzKSB9XG4gICAgICAgID5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBiYXNlKFxuICAgICAgICAgICAgICByb290UHJvcHMsXG4gICAgICAgICAgICAgIGZpbHRlclByb3BzLFxuICAgICAgICAgICAgICBzZWFyY2hQcm9wcyxcbiAgICAgICAgICAgICAgc29ydFByb3BzLFxuICAgICAgICAgICAgICBwYWdpbmF0aW9uUHJvcHNcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIDwvdGhpcy5Sb3dFeHBhbmRDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJXaXRoUGFnaW5hdGlvbkN0eChiYXNlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICByb290UHJvcHMsXG4gICAgICAgIGZpbHRlclByb3BzLFxuICAgICAgICBzZWFyY2hQcm9wcyxcbiAgICAgICAgc29ydFByb3BzXG4gICAgICApID0+IChcbiAgICAgICAgPHRoaXMuUGFnaW5hdGlvbkNvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgICByZWY9eyBuID0+IHRoaXMucGFnaW5hdGlvbkNvbnRleHQgPSBuIH1cbiAgICAgICAgICBwYWdpbmF0aW9uPXsgdGhpcy5wcm9wcy5wYWdpbmF0aW9uIH1cbiAgICAgICAgICBkYXRhPXsgcm9vdFByb3BzLmdldERhdGEoZmlsdGVyUHJvcHMsIHNlYXJjaFByb3BzLCBzb3J0UHJvcHMpIH1cbiAgICAgICAgICBib290c3RyYXA0PXsgdGhpcy5wcm9wcy5ib290c3RyYXA0IH1cbiAgICAgICAgICBpc1JlbW90ZVBhZ2luYXRpb249eyB0aGlzLmlzUmVtb3RlUGFnaW5hdGlvbiB9XG4gICAgICAgICAgcmVtb3RlRW1pdHRlcj17IHRoaXMucmVtb3RlRW1pdHRlciB9XG4gICAgICAgICAgb25EYXRhU2l6ZUNoYW5nZT17IHRoaXMucHJvcHMub25EYXRhU2l6ZUNoYW5nZSB9XG4gICAgICAgICAgdGFibGVJZD17IHRoaXMucHJvcHMuaWQgfVxuICAgICAgICA+XG4gICAgICAgICAgPHRoaXMuUGFnaW5hdGlvbkNvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhZ2luYXRpb25Qcm9wcyA9PiBiYXNlKFxuICAgICAgICAgICAgICAgIHJvb3RQcm9wcyxcbiAgICAgICAgICAgICAgICBmaWx0ZXJQcm9wcyxcbiAgICAgICAgICAgICAgICBzZWFyY2hQcm9wcyxcbiAgICAgICAgICAgICAgICBzb3J0UHJvcHMsXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvblByb3BzXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L3RoaXMuUGFnaW5hdGlvbkNvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgIDwvdGhpcy5QYWdpbmF0aW9uQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyV2l0aFNvcnRDdHgoYmFzZSwgYmFzZVByb3BzKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICByb290UHJvcHMsXG4gICAgICAgIGZpbHRlclByb3BzLFxuICAgICAgICBzZWFyY2hQcm9wc1xuICAgICAgKSA9PiAoXG4gICAgICAgIDx0aGlzLlNvcnRDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgeyAuLi5iYXNlUHJvcHMgfVxuICAgICAgICAgIHJlZj17IG4gPT4gdGhpcy5zb3J0Q29udGV4dCA9IG4gfVxuICAgICAgICAgIGRlZmF1bHRTb3J0ZWQ9eyB0aGlzLnByb3BzLmRlZmF1bHRTb3J0ZWQgfVxuICAgICAgICAgIGRlZmF1bHRTb3J0RGlyZWN0aW9uPXsgdGhpcy5wcm9wcy5kZWZhdWx0U29ydERpcmVjdGlvbiB9XG4gICAgICAgICAgc29ydD17IHRoaXMucHJvcHMuc29ydCB9XG4gICAgICAgICAgZGF0YT17IHJvb3RQcm9wcy5nZXREYXRhKGZpbHRlclByb3BzLCBzZWFyY2hQcm9wcykgfVxuICAgICAgICA+XG4gICAgICAgICAgPHRoaXMuU29ydENvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNvcnRQcm9wcyA9PiBiYXNlKFxuICAgICAgICAgICAgICAgIHJvb3RQcm9wcyxcbiAgICAgICAgICAgICAgICBmaWx0ZXJQcm9wcyxcbiAgICAgICAgICAgICAgICBzZWFyY2hQcm9wcyxcbiAgICAgICAgICAgICAgICBzb3J0UHJvcHMsXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L3RoaXMuU29ydENvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgIDwvdGhpcy5Tb3J0Q29udGV4dC5Qcm92aWRlcj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyV2l0aFNlYXJjaEN0eChiYXNlLCBiYXNlUHJvcHMpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHJvb3RQcm9wcyxcbiAgICAgICAgZmlsdGVyUHJvcHNcbiAgICAgICkgPT4gKFxuICAgICAgICA8dGhpcy5TZWFyY2hDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgeyAuLi5iYXNlUHJvcHMgfVxuICAgICAgICAgIHJlZj17IG4gPT4gdGhpcy5zZWFyY2hDb250ZXh0ID0gbiB9XG4gICAgICAgICAgZGF0YT17IHJvb3RQcm9wcy5nZXREYXRhKGZpbHRlclByb3BzKSB9XG4gICAgICAgICAgc2VhcmNoVGV4dD17IHRoaXMucHJvcHMuc2VhcmNoLnNlYXJjaFRleHQgfVxuICAgICAgICAgIGRhdGFDaGFuZ2VMaXN0ZW5lcj17IHRoaXMucHJvcHMuZGF0YUNoYW5nZUxpc3RlbmVyIH1cbiAgICAgICAgPlxuICAgICAgICAgIDx0aGlzLlNlYXJjaENvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNlYXJjaFByb3BzID0+IGJhc2UoXG4gICAgICAgICAgICAgICAgcm9vdFByb3BzLFxuICAgICAgICAgICAgICAgIGZpbHRlclByb3BzLFxuICAgICAgICAgICAgICAgIHNlYXJjaFByb3BzXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L3RoaXMuU2VhcmNoQ29udGV4dC5Db25zdW1lcj5cbiAgICAgICAgPC90aGlzLlNlYXJjaENvbnRleHQuUHJvdmlkZXI+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcldpdGhGaWx0ZXJDdHgoYmFzZSwgYmFzZVByb3BzKSB7XG4gICAgICByZXR1cm4gcm9vdFByb3BzID0+IChcbiAgICAgICAgPHRoaXMuRmlsdGVyQ29udGV4dC5Qcm92aWRlclxuICAgICAgICAgIHsgLi4uYmFzZVByb3BzIH1cbiAgICAgICAgICByZWY9eyBuID0+IHRoaXMuZmlsdGVyQ29udGV4dCA9IG4gfVxuICAgICAgICAgIGRhdGE9eyByb290UHJvcHMuZ2V0RGF0YSgpIH1cbiAgICAgICAgICBmaWx0ZXI9eyB0aGlzLnByb3BzLmZpbHRlci5vcHRpb25zIHx8IHt9IH1cbiAgICAgICAgICBkYXRhQ2hhbmdlTGlzdGVuZXI9eyB0aGlzLnByb3BzLmRhdGFDaGFuZ2VMaXN0ZW5lciB9XG4gICAgICAgID5cbiAgICAgICAgICA8dGhpcy5GaWx0ZXJDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBmaWx0ZXJQcm9wcyA9PiBiYXNlKFxuICAgICAgICAgICAgICAgIHJvb3RQcm9wcyxcbiAgICAgICAgICAgICAgICBmaWx0ZXJQcm9wc1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC90aGlzLkZpbHRlckNvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgIDwvdGhpcy5GaWx0ZXJDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJXaXRoQ2VsbEVkaXRDdHgoYmFzZSwgYmFzZVByb3BzKSB7XG4gICAgICByZXR1cm4gcm9vdFByb3BzID0+IChcbiAgICAgICAgPHRoaXMuQ2VsbEVkaXRDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgeyAuLi5iYXNlUHJvcHMgfVxuICAgICAgICAgIHJlZj17IG4gPT4gdGhpcy5jZWxsRWRpdENvbnRleHQgPSBuIH1cbiAgICAgICAgICBzZWxlY3RSb3c9eyB0aGlzLnByb3BzLnNlbGVjdFJvdyB9XG4gICAgICAgICAgY2VsbEVkaXQ9eyB0aGlzLnByb3BzLmNlbGxFZGl0IH1cbiAgICAgICAgICBkYXRhPXsgcm9vdFByb3BzLmdldERhdGEoKSB9XG4gICAgICAgID5cbiAgICAgICAgICB7IGJhc2Uocm9vdFByb3BzKSB9XG4gICAgICAgIDwvdGhpcy5DZWxsRWRpdENvbnRleHQuUHJvdmlkZXI+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHsga2V5RmllbGQsIGNvbHVtbnMsIGJvb3RzdHJhcDQgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCBiYXNlUHJvcHMgPSB7IGtleUZpZWxkLCBjb2x1bW5zIH07XG5cbiAgICAgIGxldCBiYXNlID0gdGhpcy5yZW5kZXJCYXNlKCk7XG5cbiAgICAgIGlmICh0aGlzLkNvbHVtbk1hbmFnZW1lbnRDb250ZXh0KSB7XG4gICAgICAgIGJhc2UgPSB0aGlzLnJlbmRlcldpdGhDb2x1bW5NYW5hZ2VtZW50Q3R4KGJhc2UsIGJhc2VQcm9wcyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLlNlbGVjdGlvbkNvbnRleHQpIHtcbiAgICAgICAgYmFzZSA9IHRoaXMucmVuZGVyV2l0aFNlbGVjdGlvbkN0eChiYXNlLCBiYXNlUHJvcHMpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5Sb3dFeHBhbmRDb250ZXh0KSB7XG4gICAgICAgIGJhc2UgPSB0aGlzLnJlbmRlcldpdGhSb3dFeHBhbmRDdHgoYmFzZSwgYmFzZVByb3BzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuUGFnaW5hdGlvbkNvbnRleHQpIHtcbiAgICAgICAgYmFzZSA9IHRoaXMucmVuZGVyV2l0aFBhZ2luYXRpb25DdHgoYmFzZSwgYmFzZVByb3BzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuU29ydENvbnRleHQpIHtcbiAgICAgICAgYmFzZSA9IHRoaXMucmVuZGVyV2l0aFNvcnRDdHgoYmFzZSwgYmFzZVByb3BzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuU2VhcmNoQ29udGV4dCkge1xuICAgICAgICBiYXNlID0gdGhpcy5yZW5kZXJXaXRoU2VhcmNoQ3R4KGJhc2UsIGJhc2VQcm9wcyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLkZpbHRlckNvbnRleHQpIHtcbiAgICAgICAgYmFzZSA9IHRoaXMucmVuZGVyV2l0aEZpbHRlckN0eChiYXNlLCBiYXNlUHJvcHMpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5DZWxsRWRpdENvbnRleHQpIHtcbiAgICAgICAgYmFzZSA9IHRoaXMucmVuZGVyV2l0aENlbGxFZGl0Q3R4KGJhc2UsIGJhc2VQcm9wcyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxCb290c3RyYXBDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXsgeyBib290c3RyYXA0IH0gfT5cbiAgICAgICAgICA8dGhpcy5EYXRhQ29udGV4dC5Qcm92aWRlclxuICAgICAgICAgICAgeyAuLi5iYXNlUHJvcHMgfVxuICAgICAgICAgICAgZGF0YT17IHRoaXMucHJvcHMuZGF0YSB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHRoaXMuRGF0YUNvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiYXNlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdGhpcy5EYXRhQ29udGV4dC5Db25zdW1lcj5cbiAgICAgICAgICA8L3RoaXMuRGF0YUNvbnRleHQuUHJvdmlkZXI+XG4gICAgICAgIDwvQm9vdHN0cmFwQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoQ29udGV4dDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NvbnRleHRzL2luZGV4LmpzIiwiLyogZXNsaW50IGNhbWVsY2FzZTogMCAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgRGF0YUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5cbiAgY2xhc3MgRGF0YVByb3ZpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgZGF0YTogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZFxuICAgIH1cblxuICAgIHN0YXRlID0geyBkYXRhOiB0aGlzLnByb3BzLmRhdGEgfTtcblxuICAgIGdldERhdGEgPSAoZmlsdGVyUHJvcHMsIHNlYXJjaFByb3BzLCBzb3J0UHJvcHMsIHBhZ2luYXRpb25Qcm9wcykgPT4ge1xuICAgICAgaWYgKHBhZ2luYXRpb25Qcm9wcykgcmV0dXJuIHBhZ2luYXRpb25Qcm9wcy5kYXRhO1xuICAgICAgZWxzZSBpZiAoc29ydFByb3BzKSByZXR1cm4gc29ydFByb3BzLmRhdGE7XG4gICAgICBlbHNlIGlmIChzZWFyY2hQcm9wcykgcmV0dXJuIHNlYXJjaFByb3BzLmRhdGE7XG4gICAgICBlbHNlIGlmIChmaWx0ZXJQcm9wcykgcmV0dXJuIGZpbHRlclByb3BzLmRhdGE7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5kYXRhO1xuICAgIH1cblxuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoeyBkYXRhOiBuZXh0UHJvcHMuZGF0YSB9KSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPERhdGFDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgdmFsdWU9eyB7XG4gICAgICAgICAgICBkYXRhOiB0aGlzLnN0YXRlLmRhdGEsXG4gICAgICAgICAgICBnZXREYXRhOiB0aGlzLmdldERhdGFcbiAgICAgICAgICB9IH1cbiAgICAgICAgPlxuICAgICAgICAgIHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XG4gICAgICAgIDwvRGF0YUNvbnRleHQuUHJvdmlkZXI+XG4gICAgICApO1xuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIFByb3ZpZGVyOiBEYXRhUHJvdmlkZXIsXG4gICAgQ29uc3VtZXI6IERhdGFDb250ZXh0LkNvbnN1bWVyXG4gIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi9zcmMvY29udGV4dHMvZGF0YS1jb250ZXh0LmpzIiwiLyogZXNsaW50IHJlYWN0L3Byb3AtdHlwZXM6IDAgKi9cbi8qIGVzbGludCByZWFjdC9wcmVmZXItc3RhdGVsZXNzLWZ1bmN0aW9uOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCBDb2x1bW5NYW5hZ2VtZW50Q29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcblxuICBjbGFzcyBDb2x1bW5NYW5hZ2VtZW50UHJvdmlkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICAgIHRvZ2dsZXM6IFByb3BUeXBlcy5vYmplY3RcbiAgICB9XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgdG9nZ2xlczogbnVsbFxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGxldCB0b2dnbGVDb2x1bW47XG4gICAgICBjb25zdCB7IGNvbHVtbnMsIHRvZ2dsZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgICBpZiAodG9nZ2xlcykge1xuICAgICAgICB0b2dnbGVDb2x1bW4gPSBjb2x1bW5zLmZpbHRlcihjb2x1bW4gPT4gdG9nZ2xlc1tjb2x1bW4uZGF0YUZpZWxkXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b2dnbGVDb2x1bW4gPSBjb2x1bW5zLmZpbHRlcihjb2x1bW4gPT4gIWNvbHVtbi5oaWRkZW4pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPENvbHVtbk1hbmFnZW1lbnRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXsgeyBjb2x1bW5zOiB0b2dnbGVDb2x1bW4gfSB9PlxuICAgICAgICAgIHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XG4gICAgICAgIDwvQ29sdW1uTWFuYWdlbWVudENvbnRleHQuUHJvdmlkZXI+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgUHJvdmlkZXI6IENvbHVtbk1hbmFnZW1lbnRQcm92aWRlcixcbiAgICBDb25zdW1lcjogQ29sdW1uTWFuYWdlbWVudENvbnRleHQuQ29uc3VtZXJcbiAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9jb250ZXh0cy9jb2x1bW4tY29udGV4dC5qcyIsIi8qIGVzbGludCBjYW1lbGNhc2U6IDAgKi9cbi8qIGVzbGludCByZWFjdC9yZXF1aXJlLWRlZmF1bHQtcHJvcHM6IDAgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IENvbnN0IGZyb20gJy4uL2NvbnN0JztcblxuZXhwb3J0IGRlZmF1bHQgKFxuICBkYXRhT3BlcmF0b3IsXG4gIGlzUmVtb3RlU29ydCxcbiAgaGFuZGxlU29ydENoYW5nZVxuKSA9PiB7XG4gIGNvbnN0IFNvcnRDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuXG4gIGNsYXNzIFNvcnRQcm92aWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgIGRhdGE6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICAgICAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgICAgIGRlZmF1bHRTb3J0ZWQ6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIGRhdGFGaWVsZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICBvcmRlcjogUHJvcFR5cGVzLm9uZU9mKFtDb25zdC5TT1JUX0RFU0MsIENvbnN0LlNPUlRfQVNDXSkuaXNSZXF1aXJlZFxuICAgICAgfSkpLFxuICAgICAgc29ydDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgZGF0YUZpZWxkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBvcmRlcjogUHJvcFR5cGVzLm9uZU9mKFtDb25zdC5TT1JUX0RFU0MsIENvbnN0LlNPUlRfQVNDXSksXG4gICAgICAgIHNvcnRGdW5jOiBQcm9wVHlwZXMuZnVuY1xuICAgICAgfSksXG4gICAgICBkZWZhdWx0U29ydERpcmVjdGlvbjogUHJvcFR5cGVzLm9uZU9mKFtDb25zdC5TT1JUX0RFU0MsIENvbnN0LlNPUlRfQVNDXSlcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgbGV0IHNvcnRPcmRlcjtcbiAgICAgIGxldCBzb3J0Q29sdW1uO1xuICAgICAgY29uc3QgeyBkZWZhdWx0U29ydGVkLCBkZWZhdWx0U29ydERpcmVjdGlvbiwgc29ydCB9ID0gcHJvcHM7XG5cbiAgICAgIGlmIChkZWZhdWx0U29ydGVkICYmIGRlZmF1bHRTb3J0ZWQubGVuZ3RoID4gMCkge1xuICAgICAgICBzb3J0T3JkZXIgPSBkZWZhdWx0U29ydGVkWzBdLm9yZGVyIHx8IGRlZmF1bHRTb3J0RGlyZWN0aW9uO1xuICAgICAgICBzb3J0Q29sdW1uID0gdGhpcy5pbml0U29ydChkZWZhdWx0U29ydGVkWzBdLmRhdGFGaWVsZCwgc29ydE9yZGVyKTtcbiAgICAgIH0gZWxzZSBpZiAoc29ydCAmJiBzb3J0LmRhdGFGaWVsZCAmJiBzb3J0Lm9yZGVyKSB7XG4gICAgICAgIHNvcnRPcmRlciA9IHNvcnQub3JkZXI7XG4gICAgICAgIHNvcnRDb2x1bW4gPSB0aGlzLmluaXRTb3J0KHNvcnQuZGF0YUZpZWxkLCBzb3J0T3JkZXIpO1xuICAgICAgfVxuICAgICAgdGhpcy5zdGF0ZSA9IHsgc29ydE9yZGVyLCBzb3J0Q29sdW1uIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBjb25zdCB7IHNvcnRPcmRlciwgc29ydENvbHVtbiB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIGlmIChpc1JlbW90ZVNvcnQoKSAmJiBzb3J0T3JkZXIgJiYgc29ydENvbHVtbikge1xuICAgICAgICBoYW5kbGVTb3J0Q2hhbmdlKHNvcnRDb2x1bW4uZGF0YUZpZWxkLCBzb3J0T3JkZXIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgY29uc3QgeyBzb3J0LCBjb2x1bW5zIH0gPSBuZXh0UHJvcHM7XG4gICAgICBpZiAoc29ydCAmJiBzb3J0LmRhdGFGaWVsZCAmJiBzb3J0Lm9yZGVyKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHNvcnRPcmRlcjogc29ydC5vcmRlcixcbiAgICAgICAgICBzb3J0Q29sdW1uOiBjb2x1bW5zLmZpbmQoY29sID0+IGNvbC5kYXRhRmllbGQgPT09IHNvcnQuZGF0YUZpZWxkKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0U29ydChzb3J0RmllbGQsIHNvcnRPcmRlcikge1xuICAgICAgbGV0IHNvcnRDb2x1bW47XG4gICAgICBjb25zdCB7IGNvbHVtbnMgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCBzb3J0Q29sdW1ucyA9IGNvbHVtbnMuZmlsdGVyKGNvbCA9PiBjb2wuZGF0YUZpZWxkID09PSBzb3J0RmllbGQpO1xuICAgICAgaWYgKHNvcnRDb2x1bW5zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgc29ydENvbHVtbiA9IHNvcnRDb2x1bW5zWzBdO1xuXG4gICAgICAgIGlmIChzb3J0Q29sdW1uLm9uU29ydCkge1xuICAgICAgICAgIHNvcnRDb2x1bW4ub25Tb3J0KHNvcnRGaWVsZCwgc29ydE9yZGVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHNvcnRDb2x1bW47XG4gICAgfVxuXG4gICAgaGFuZGxlU29ydCA9IChjb2x1bW4pID0+IHtcbiAgICAgIGNvbnN0IHNvcnRPcmRlciA9IGRhdGFPcGVyYXRvci5uZXh0T3JkZXIoY29sdW1uLCB0aGlzLnN0YXRlLCB0aGlzLnByb3BzLmRlZmF1bHRTb3J0RGlyZWN0aW9uKTtcblxuICAgICAgaWYgKGNvbHVtbi5vblNvcnQpIHtcbiAgICAgICAgY29sdW1uLm9uU29ydChjb2x1bW4uZGF0YUZpZWxkLCBzb3J0T3JkZXIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNSZW1vdGVTb3J0KCkpIHtcbiAgICAgICAgaGFuZGxlU29ydENoYW5nZShjb2x1bW4uZGF0YUZpZWxkLCBzb3J0T3JkZXIpO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoe1xuICAgICAgICBzb3J0T3JkZXIsXG4gICAgICAgIHNvcnRDb2x1bW46IGNvbHVtblxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGxldCB7IGRhdGEgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCB7IHNvcnQgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCB7IHNvcnRPcmRlciwgc29ydENvbHVtbiB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIGlmICghaXNSZW1vdGVTb3J0KCkgJiYgc29ydENvbHVtbikge1xuICAgICAgICBjb25zdCBzb3J0RnVuYyA9IHNvcnRDb2x1bW4uc29ydEZ1bmMgPyBzb3J0Q29sdW1uLnNvcnRGdW5jIDogKHNvcnQgJiYgc29ydC5zb3J0RnVuYyk7XG4gICAgICAgIGRhdGEgPSBkYXRhT3BlcmF0b3Iuc29ydChkYXRhLCBzb3J0T3JkZXIsIHsgLi4uc29ydENvbHVtbiwgc29ydEZ1bmMgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTb3J0Q29udGV4dC5Qcm92aWRlclxuICAgICAgICAgIHZhbHVlPXsge1xuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHNvcnRPcmRlcixcbiAgICAgICAgICAgIG9uU29ydDogdGhpcy5oYW5kbGVTb3J0LFxuICAgICAgICAgICAgc29ydEZpZWxkOiBzb3J0Q29sdW1uID8gc29ydENvbHVtbi5kYXRhRmllbGQgOiBudWxsXG4gICAgICAgICAgfSB9XG4gICAgICAgID5cbiAgICAgICAgICB7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxuICAgICAgICA8L1NvcnRDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBQcm92aWRlcjogU29ydFByb3ZpZGVyLFxuICAgIENvbnN1bWVyOiBTb3J0Q29udGV4dC5Db25zdW1lclxuICB9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTIvc3JjL2NvbnRleHRzL3NvcnQtY29udGV4dC5qcyIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnZXZlbnRzJztcbmltcG9ydCBfIGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgRXh0ZW5kQmFzZSA9PlxuICBjbGFzcyBSZW1vdGVSZXNvbHZlciBleHRlbmRzIEV4dGVuZEJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICB0aGlzLnJlbW90ZUVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICB0aGlzLnJlbW90ZUVtaXR0ZXIub24oJ3BhZ2luYXRpb25DaGFuZ2UnLCB0aGlzLmhhbmRsZVJlbW90ZVBhZ2VDaGFuZ2UpO1xuICAgICAgdGhpcy5yZW1vdGVFbWl0dGVyLm9uKCdpc1JlbW90ZVBhZ2luYXRpb24nLCB0aGlzLmlzUmVtb3RlUGFnaW5hdGlvbik7XG4gICAgfVxuXG4gICAgZ2V0TmV3ZXN0U3RhdGUgPSAoc3RhdGUgPSB7fSkgPT4ge1xuICAgICAgbGV0IHNvcnRPcmRlcjtcbiAgICAgIGxldCBzb3J0RmllbGQ7XG4gICAgICBsZXQgcGFnZTtcbiAgICAgIGxldCBzaXplUGVyUGFnZTtcbiAgICAgIGxldCBzZWFyY2hUZXh0O1xuICAgICAgbGV0IGZpbHRlcnMgPSB7fTtcblxuICAgICAgaWYgKHRoaXMuc29ydENvbnRleHQpIHtcbiAgICAgICAgc29ydE9yZGVyID0gdGhpcy5zb3J0Q29udGV4dC5zdGF0ZS5zb3J0T3JkZXI7XG4gICAgICAgIHNvcnRGaWVsZCA9IHRoaXMuc29ydENvbnRleHQuc3RhdGUuc29ydENvbHVtbiA/XG4gICAgICAgICAgdGhpcy5zb3J0Q29udGV4dC5zdGF0ZS5zb3J0Q29sdW1uLmRhdGFGaWVsZCA6XG4gICAgICAgICAgbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZmlsdGVyQ29udGV4dCkge1xuICAgICAgICBmaWx0ZXJzID0gdGhpcy5maWx0ZXJDb250ZXh0LmN1cnJGaWx0ZXJzO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wYWdpbmF0aW9uQ29udGV4dCkge1xuICAgICAgICBwYWdlID0gdGhpcy5wYWdpbmF0aW9uQ29udGV4dC5jdXJyUGFnZTtcbiAgICAgICAgc2l6ZVBlclBhZ2UgPSB0aGlzLnBhZ2luYXRpb25Db250ZXh0LmN1cnJTaXplUGVyUGFnZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuc2VhcmNoQ29udGV4dCkge1xuICAgICAgICBzZWFyY2hUZXh0ID0gdGhpcy5wcm9wcy5zZWFyY2guc2VhcmNoVGV4dDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc29ydE9yZGVyLFxuICAgICAgICBzb3J0RmllbGQsXG4gICAgICAgIGZpbHRlcnMsXG4gICAgICAgIHBhZ2UsXG4gICAgICAgIHNpemVQZXJQYWdlLFxuICAgICAgICBzZWFyY2hUZXh0LFxuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZGF0YTogdGhpcy5wcm9wcy5kYXRhXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlzUmVtb3RlU2VhcmNoID0gKCkgPT4ge1xuICAgICAgY29uc3QgeyByZW1vdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgICByZXR1cm4gcmVtb3RlID09PSB0cnVlIHx8IChfLmlzT2JqZWN0KHJlbW90ZSkgJiYgcmVtb3RlLnNlYXJjaCkgfHwgdGhpcy5pc1JlbW90ZVBhZ2luYXRpb24oKTtcbiAgICB9XG5cbiAgICBpc1JlbW90ZVBhZ2luYXRpb24gPSAoZSA9IHt9KSA9PiB7XG4gICAgICBjb25zdCB7IHJlbW90ZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGUucmVzdWx0ID0gKHJlbW90ZSA9PT0gdHJ1ZSB8fCAoXy5pc09iamVjdChyZW1vdGUpICYmIHJlbW90ZS5wYWdpbmF0aW9uKSk7XG4gICAgICByZXR1cm4gZS5yZXN1bHQ7XG4gICAgfVxuXG4gICAgaXNSZW1vdGVGaWx0ZXJpbmcgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7IHJlbW90ZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgIHJldHVybiByZW1vdGUgPT09IHRydWUgfHwgKF8uaXNPYmplY3QocmVtb3RlKSAmJiByZW1vdGUuZmlsdGVyKSB8fCB0aGlzLmlzUmVtb3RlUGFnaW5hdGlvbigpO1xuICAgIH1cblxuICAgIGlzUmVtb3RlU29ydCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHsgcmVtb3RlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgcmV0dXJuIHJlbW90ZSA9PT0gdHJ1ZSB8fCAoXy5pc09iamVjdChyZW1vdGUpICYmIHJlbW90ZS5zb3J0KSB8fCB0aGlzLmlzUmVtb3RlUGFnaW5hdGlvbigpO1xuICAgIH1cblxuICAgIGlzUmVtb3RlQ2VsbEVkaXQgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7IHJlbW90ZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgIHJldHVybiByZW1vdGUgPT09IHRydWUgfHwgKF8uaXNPYmplY3QocmVtb3RlKSAmJiByZW1vdGUuY2VsbEVkaXQpO1xuICAgIH1cblxuICAgIGhhbmRsZVJlbW90ZVBhZ2VDaGFuZ2UgPSAocGFnZSwgc2l6ZVBlclBhZ2UpID0+IHtcbiAgICAgIHRoaXMucHJvcHMub25UYWJsZUNoYW5nZSgncGFnaW5hdGlvbicsIHRoaXMuZ2V0TmV3ZXN0U3RhdGUoeyBwYWdlLCBzaXplUGVyUGFnZSB9KSk7XG4gICAgfVxuXG4gICAgaGFuZGxlUmVtb3RlRmlsdGVyQ2hhbmdlID0gKGZpbHRlcnMpID0+IHtcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0geyBmaWx0ZXJzIH07XG4gICAgICBpZiAodGhpcy5pc1JlbW90ZVBhZ2luYXRpb24oKSkge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5wcm9wcy5wYWdpbmF0aW9uLm9wdGlvbnMgfHwge307XG4gICAgICAgIG5ld1N0YXRlLnBhZ2UgPSBfLmlzRGVmaW5lZChvcHRpb25zLnBhZ2VTdGFydEluZGV4KSA/IG9wdGlvbnMucGFnZVN0YXJ0SW5kZXggOiAxO1xuICAgICAgfVxuICAgICAgdGhpcy5wcm9wcy5vblRhYmxlQ2hhbmdlKCdmaWx0ZXInLCB0aGlzLmdldE5ld2VzdFN0YXRlKG5ld1N0YXRlKSk7XG4gICAgfVxuXG4gICAgaGFuZGxlUmVtb3RlU29ydENoYW5nZSA9IChzb3J0RmllbGQsIHNvcnRPcmRlcikgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5vblRhYmxlQ2hhbmdlKCdzb3J0JywgdGhpcy5nZXROZXdlc3RTdGF0ZSh7IHNvcnRGaWVsZCwgc29ydE9yZGVyIH0pKTtcbiAgICB9XG5cbiAgICBoYW5kbGVSZW1vdGVDZWxsQ2hhbmdlID0gKHJvd0lkLCBkYXRhRmllbGQsIG5ld1ZhbHVlKSA9PiB7XG4gICAgICBjb25zdCBjZWxsRWRpdCA9IHsgcm93SWQsIGRhdGFGaWVsZCwgbmV3VmFsdWUgfTtcbiAgICAgIHRoaXMucHJvcHMub25UYWJsZUNoYW5nZSgnY2VsbEVkaXQnLCB0aGlzLmdldE5ld2VzdFN0YXRlKHsgY2VsbEVkaXQgfSkpO1xuICAgIH1cblxuICAgIGhhbmRsZVJlbW90ZVNlYXJjaENoYW5nZSA9IChzZWFyY2hUZXh0KSA9PiB7XG4gICAgICB0aGlzLnByb3BzLm9uVGFibGVDaGFuZ2UoJ3NlYXJjaCcsIHRoaXMuZ2V0TmV3ZXN0U3RhdGUoeyBzZWFyY2hUZXh0IH0pKTtcbiAgICB9XG4gIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyL3NyYy9wcm9wcy1yZXNvbHZlci9yZW1vdGUtcmVzb2x2ZXIuanMiXSwic291cmNlUm9vdCI6IiJ9
//# sourceMappingURL=react-bootstrap-table-next.js.map