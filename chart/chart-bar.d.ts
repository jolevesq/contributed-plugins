/**
 * Creates bar and line charts.
 */
export declare class ChartBar {
    private _data;
    private _range;
    /**
     * get datasets
     * @property datasets
     * @return {Object} original datasets (not filtered one)
     */
    readonly datasets: object[];
    /**
     * get range
     * @property range
     * @return {Object} the min and max values for the datasets
     */
    readonly range: any;
    /**
     * Chart bar constructor
     * @constructor
     * @param {Any} config the slider configuration
     * @param {Object} attrs the feature attributes
     */
    constructor(config: any, attrs: object);
    /**
     * Set the chart data
     * @function setData
     * @param {Object} layerData the layer data provided by configuration
     * @param {Object} attrs the feature attributes
     * @param {String[]} colors the array of colors to use
     * @param {String} xType the x axis type, date or linear
     */
    setData(layerData: object, attrs: object, colors: string[], xType: string): void;
    /**
     * Set the chart axis
     * @function setAxis
     * @param {String} axe the axis to set (xAxes or yAxes)
     * @param {Any} config the chart configuration
     * @param {Object} attrs the feature attributes
     * @return {Object} the axis object
     */
    setAxis(axe: string, config: any, attrs: object): {
        [k: string]: any;
    };
}
export interface ChartBar {
    options: any;
    type: string;
    data: any;
    title: string;
    ranges: any;
}
