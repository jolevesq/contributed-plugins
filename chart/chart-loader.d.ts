/**
 * Creates and manages charts.
 */
export declare class ChartLoader {
    private _chart;
    private _config;
    private _mapApi;
    private _panel;
    private _slider;
    private _barChartOptions;
    private _pieChartOptions;
    static defaultColors: string[];
    /**
     * Chart loader constructor
     * @constructor
     * @param {Any} mapApi the viewer api
     * @param {Any} config the slider configuration
     */
    constructor(mapApi: any, config: any);
    /**
     * Initialize the slider
     * @function initSlider
     * @param {Number} min minimum value for slider
     * @param {Number} max maximum value for slider
     */
    initSlider(min: number, max: number): void;
    /**
     * Parse the graph value with the range from the slider
     * @function parseRange
     * @param {Date} minYear minimum value to filter
     * @param {Date} maxYear maximum value to filter
     * @param {Any} data data to filter
     */
    parseRange(minYear: Date, maxYear: Date, data: any): object[];
    /**
     * Destroy the slider
     * @function destroySlider
     */
    destroySlider(): void;
    /**
     * Destroy the chart
     * @function destroyChart
     */
    destroyChart(): void;
    /**
     * Create pie chart
     * @function createPieChart
     * @param {Object} attrs attributes to use for the graph
     */
    createPieChart(attrs: object): void;
    /**
     * Create bar chart
     * @function createBarChart
     * @param {Object} attrs attributes to use for the graph
     */
    createBarChart(attrs: object): void;
    /**
     * Draw the chart
     * @function draw
     * @param {Any} opts the chart options
     */
    draw(opts: any): void;
    /**
     * Get global options fot all charts
     * @function getGlobalOptions
     * @param {String} title the chart title
     * @return {Object} the global options
     */
    getGlobalOptions(title: string): object;
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
export interface ChartLoader {
    defaultColors: string[];
}
