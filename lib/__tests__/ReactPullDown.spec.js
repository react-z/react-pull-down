"use strict";

var _enzyme = require("enzyme");

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _ReactPullDown = _interopRequireDefault(require("../ReactPullDown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* setup enzyme */
(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact.default()
});
/* setup jsdom */

var jsdom = require('jsdom');

var JSDOM = jsdom.JSDOM;
var window = new JSDOM('').window;
global.window = window;
global.document = window.document;
test('PullDown renders correctly and matches snapshot', function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_ReactPullDown.default, null));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('PullDown renders the correct elements', function () {
  var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_ReactPullDown.default, null));
  expect(wrapper.find('div').length).toEqual(2);
  expect(wrapper.find('#pull-down').length).toEqual(1);
  expect(wrapper.find('svg').length).toEqual(1);
});