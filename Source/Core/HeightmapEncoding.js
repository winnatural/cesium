/**
 * The encoding that is used for a heightmap
 *
 * @enum {number}
 */
var HeightmapEncoding = {
  /**
   * No encoding
   *
   * @type {number}
   * @constant
   */
  NONE: 0,

  /**
   * LERC encoding
   *
   * @type {number}
   * @constant
   *
   * @see {@link https://github.com/Esri/lerc|The LERC specification}
   */
  LERC: 1,
};
export default Object.freeze(HeightmapEncoding);
