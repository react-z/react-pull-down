import Hammer from 'hammerjs'

const pullDown = function(opts) {
  /**
   * the default parameters for the module
   * @type {object}
   */
  const defaults = {
    element: 'pull-down',
    resistance: 1
  }

  /**
   * the module options
   * @type {object}
   */
  let options = {}

  /**
   * Pan event parameters
   * @type {object}
   */
  let pan = {
    distance: 0,
    pullHeight: 50
  }

  /**
   * Initialize pull, hammer, and bind pan events.
   * @param {object=} params - Setup parameters for pull to refresh
   */
  const init = function(opts) {
    opts = opts || {}

    options = {
      element: opts.element || document.getElementById(defaults.element),
      resistance: opts.resistance || defaults.resistance
    }

    if (!options.element) {
      return false
    }

    let h = new Hammer(options.element)
    h.get('pan').set({ direction: Hammer.DIRECTION_VERTICAL })
    h.on('panstart', panStart)
    h.on('pandown', panDown)
    h.on('panup', panUp)
    h.on('panend', panEnd)
  }

  /**
   * Determine whether pan events should apply based on scroll position on panstart
   *
   * @param {object} e - Event object
   */
  const panStart = function(e) {}

  /**
   * Handle element on screen movement when the pandown events is firing.
   * @param {object} e - Event object
   */
  const panDown = function(e) {
    e.preventDefault()
    pan.distance = pan.pullHeight + e.deltaY / options.resistance
    setHeight()
  }

  /**
   * Handle element on screen movement when the pandown events is firing.
   * @param {object} e - Event object
   */
  const panUp = function(e) {
    e.preventDefault()

    if (pan.distance === 0) {
      return
    }
    pan.distance = pan.pullHeight + e.deltaY / options.resistance
    setHeight()
  }

  /**
   * Set the CSS transform on the content element to move it on the screen.
   */
  const setHeight = function() {
    options.element.style.height = pan.distance + 'px'
  }

  /**
   * Determine how to animate and position elements when the panend event fires.
   * @param {object} e - Event object
   */
  const panEnd = function(e) {
    e.preventDefault()
    pan.pullHeight = options.element.offsetHeight
  }

  init(opts)
}

export default pullDown
