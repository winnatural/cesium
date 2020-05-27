/**
 * The direction to display an ImageryLayer relative to the {@link Scene#imagerySplitPosition}.
 *
 * @enum {number}
 *
 * @see ImageryLayer#splitDirection
 */
var ImagerySplitDirection = {
  /**
   * Display the ImageryLayer to the left of the {@link Scene#imagerySplitPosition}.
   *
   * @type {number}
   * @constant
   */
  LEFT: -1.0,

  /**
   *  Always display the ImageryLayer.
   *
   * @type {number}
   * @constant
   */
  NONE: 0.0,

  /**
   * Display the ImageryLayer to the right of the {@link Scene#imagerySplitPosition}.
   *
   * @type {number}
   * @constant
   */
  RIGHT: 1.0,
};
export default Object.freeze(ImagerySplitDirection);
