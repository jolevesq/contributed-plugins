import { Observable, BehaviorSubject } from 'rxjs';
export declare class ChartParser {
    static _chartAttrs: any[];
    private static _nbFeats;
    static _charts: BehaviorSubject<object>;
    static getCharts(): Observable<object>;
    private static setCharts;
    /**
     * Reset the chart control because another feature has been clicked
     */
    static resetChart(): void;
    /**
     * Process the feature click event to gat the data
     * @param {Any} config the plugin configuration
     * @param {Any} feature the clicked feature
     */
    static processClick(config: any, feature: any): void;
    /**
     * Process link data when a field contains different elements to split into his own element
     * @param {Any} config the plugin config
     * @param {Any} feature the clicked feature
     * @param {Any} data the related data from the link
     * @preturn {Any} feature the updated feature
     */
    private static processMultipleValue;
    /**
     * Process linked table data. Add a new field to the feature who mimic
     * the format needed with the value fomr the data linked table
     * @param {Any} config the plugin config
     * @param {Any} feature the clicked feature
     * @param {Any} data the related data from the link table
     * @param {String} attrValue optional attribute value to parse info inside linked data array
     * @preturn {Any} feature the updated feature
     */
    private static processLinkedData;
    /**
     * Get the value layers config section f0r the specified layer
     * @param {Any} config the configuration
     * @param {String} layerId the layer id to find
     * @returns {Any} the layer's configuration
     */
    private static getLayerConfig;
    /**
     * Get the value to add to the selector control
     * @param {Any} feature the feature to get na field value from
     * @param {String}nameField the field who holds the name
     * @returns {String} the value
     */
    private static getSelectValue;
    /**
     * Populate the selector control, the control will launch the chart creation
     * @param {String} chartType the type of chart (pie, bar, line)
     * @param {Any} layerConfig the plugin config for the layer
     * @param {Any} feature the clicked feature
     * @param {String} nameField the name to add to the selector
     */
    private static populateSelect;
}
