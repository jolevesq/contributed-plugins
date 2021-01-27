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
    private static processMultipleValue;
    /**
     * Process linked table data
     * @param {String} chartType the type of chart (pie, bar, line)
     * @param {Any} layerConfig the plugin config for the layer
     * @param {Any} feature the clicked feature
     * @param {Any} data the related data from the link table
     */
    private static processLinkedData;
    /**
     * Populate the selector control, the control will launch the chart creation
     * @param {String} chartType the type of chart (pie, bar, line)
     * @param {Any} layerConfig the plugin config for the layer
     * @param {Any} feature the clicked feature
     */
    private static populateSelect;
}
