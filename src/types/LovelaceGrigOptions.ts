/**
 * Sizing in Sections view
 *
 * You can define a getGridOptions method that returns the min, max and default number of cells your card will take in the grid if your card is used in the sections view.
 * Each section is divided in 12 columns. If you don't define this method, the card will take 12 columns and will ignore the rows of the grid.
 *
 * A cell of the grid is defined with the following dimension:
 *  - width: width of the section divided by 12 (approximately 30px)
 *  - height: 56px
 *  - gap between cells: 8px
 *
 * For the number of columns, it's highly recommended to use multiple of 3 for the default value (3, 6, 9 or 12),
 * so your card will have better looking on the dashboard by default.
 **/
export type LovelaceGridOptions = {
  /**
   * Default number of rows the card takes. Do not define this value if you want your card to ignore the rows of the grid (not defined by default)
   **/
  rows?: number;

  /**
   * Minimal number of rows the card takes (1 by default)
   */
  min_rows?: number;

  /**
   * Maximal number of rows the card takes (not defined by default)
   */
  max_rows?: number;

  /**
   * Default number of columns the card takes. Set it to 'full' to enforce your card to be full width, (12 by default)
   */
  columns?: number | 'full';

  /**
   * Minimal number of columns the card takes (1 by default)
   */
  min_columns?: number;

  /**
   * Maximal number of columns the card takes (not defined by default)
   */
  max_columns?: number;
};
