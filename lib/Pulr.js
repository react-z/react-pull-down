'use strict';

var pulr = function pulr(opts) {

    var Hammer = require("hammerjs");

    /**
     * the default parameters for the module
     * @type {object}
     */
    var defaults = {
        // ID of the pannable content area
        element: 'pulr',
        // Drag resistance level
        resistance: 1
    };

    /**
     * the module options
     * @type {object}
     */
    var options = {};

    /**
     * Pan event parameters
     * @type {object}
     */
    var pan = {
        distance: 0,
        pulrHeight: 50
    };

    /**
     * Initialize pulr to refresh, hammer, and bind pan events.
     * @param {object=} params - Setup parameters for pull to refresh
     */
    var init = function init(opts) {
        opts = opts || {};

        options = {
            element: opts.element || document.getElementById(defaults.element),
            resistance: opts.resistance || defaults.resistance
        };

        if (!options.element) {
            return false;
        }

        var h = new Hammer(options.element);
        h.get('pan').set({ direction: Hammer.DIRECTION_VERTICAL });
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
        pan.distance = pan.pulrHeight + e.deltaY / options.resistance;
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
        pan.distance = pan.pulrHeight + e.deltaY / options.resistance;
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
        var el = document.getElementById("pulr");
        pan.pulrHeight = el.offsetHeight;
    };

    /* initialize pulr */
    init(opts);
};

module.exports = pulr;