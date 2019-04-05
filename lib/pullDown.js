"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _hammerjs = _interopRequireDefault(require("hammerjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pullDown = function pullDown(opts) {
  /**
   * the default parameters for the module
   * @type {object}
   */
  var defaults = {
    element: 'pull-down',
    resistance: 1
    /**
     * the module options
     * @type {object}
     */

  };
  var options = {};
  /**
   * Pan event parameters
   * @type {object}
   */

  var pan = {
    distance: 0,
    pullHeight: 50
    /**
     * Initialize pull, hammer, and bind pan events.
     * @param {object=} params - Setup parameters for pull to refresh
     */

  };

  var init = function init(opts) {
    opts = opts || {};
    options = {
      element: opts.element || document.getElementById(defaults.element),
      resistance: opts.resistance || defaults.resistance
    };

    if (!options.element) {
      return false;
    }

    var h = new _hammerjs.default(options.element);
    h.get('pan').set({
      direction: _hammerjs.default.DIRECTION_VERTICAL
    });
    h.on('panstart', panStart);
    h.on('pandown', panDown);
    h.on('panup', panUp);
    h.on('panend', panEnd);
  };
  /**
   * Determine whether pan events should apply based on scroll position on panstart
   *
   * @param {object} e - Event object
   */


  var panStart = function panStart(e) {};
  /**
   * Handle element on screen movement when the pandown events is firing.
   * @param {object} e - Event object
   */


  var panDown = function panDown(e) {
    e.preventDefault();
    pan.distance = pan.pullHeight + e.deltaY / options.resistance;
    setHeight();
  };
  /**
   * Handle element on screen movement when the pandown events is firing.
   * @param {object} e - Event object
   */


  var panUp = function panUp(e) {
    e.preventDefault();

    if (pan.distance === 0) {
      return;
    }

    pan.distance = pan.pullHeight + e.deltaY / options.resistance;
    setHeight();
  };
  /**
   * Set the CSS transform on the content element to move it on the screen.
   */


  var setHeight = function setHeight() {
    options.element.style.height = pan.distance + 'px';
  };
  /**
   * Determine how to animate and position elements when the panend event fires.
   * @param {object} e - Event object
   */


  var panEnd = function panEnd(e) {
    e.preventDefault();
    pan.pullHeight = options.element.offsetHeight;
  };

  init(opts);
};

var _default = pullDown;
exports.default = _default;