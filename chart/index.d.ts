/// <reference types="jquery" />
import { Observable, BehaviorSubject } from 'rxjs';
export default class Chart {
    private _mapApi;
    private _panel;
    private _panelDetails;
    private _loader;
    private _panelOptions;
    private _isCharts;
    private _chartAttrs;
    static _charts: BehaviorSubject<string>;
    static getCharts(): Observable<string>;
    private static setCharts;
    /**
    * Plugin init
    * @function init
    * @param {Object} mapApi the viewer api
    */
    init(mapApi: any): void;
    setChartsArray(key: string, type: string, feat: any): void;
    /**
    * Create the chart
    * @function createChart
    * @param {String} type type of chart ot create
    * @param {Object} feat the feature
    */
    createChart(type: string, feat: any): void;
    /**
    * Set details panel value
    * @function findDetailsconfig
    * @param {String} id the layer id for this feature
    * @param {Object[]} layersConfig the chart layers configuration array
    * @returns {Object} the details panel values
    */
    findDetailsconfig(id: string, layersConfig: object[]): object;
    /**
     * Compile template to link controller and html
     * @function compileTemplate
     * @param {String} template measure control
     * @return {JQuery<HTMLElement>} temp compile template
     */
    compileTemplate(template: string): JQuery<HTMLElement>;
}
export default interface Chart {
    _RV: any;
    config: any;
    translations: any;
}
