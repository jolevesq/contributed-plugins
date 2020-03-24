/**
 * Creates and manages charts.
 */
export declare class ChartLoader {
    private _chart;
    private _mapApi;
    private _panel;
    static defaultColors: string[];
    /**
     * Chart loader constructor
     * @constructor
     * @param {Any} mapApi the viewer api
     * @param {Any} config the slider configuration
     * @param {Object} attrs the feature attributes
     */
    constructor(mapApi: any, config: any, attrs: object);
    /**
     * Draw the chart
     * @function draw
     * @param {ChartOptions} opts the chart options
     */
    draw(opts: chartOptions): void;
    /**
     * Get global options fot all charts
     * @function getGlobalOptions
     * @param {String} title the chart title
     * @return {Object} the global options
     */
    getGlobalOptions(title: string): object;
    /**
     * Destroy the chart
     * @function destroy
     */
    destroy(): void;
    /**
     * Parse feature datasets
     * @function parse
     * @param {Any} config the configuration
     * @param {Any} attrs the feature attributes
     * @param {String[]} colors the array of colors to use
     * @return {Object} the parse datasets
     */
    static parse(config: any, attrs: any, colors?: string[]): {
        datasets: any[];
    };
    /**
     * Get chart labels
     * @function getLabels
     * @param {Any} config the configuration
     * @param {Any} attrs the feature attributes
     * @param {Number} index the index to start initialize to 0 if not provided
     * @return {String[]} the array of labels
     */
    static getLabels(config: any, attrs: any, index?: number): string[];
}
interface chartOptions {
    title: string;
    type: string;
    data: object;
    options: object;
}
export interface ChartLoader {
    defaultColors: string[];
}
export {};
