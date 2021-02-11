export default class Chart {
    private _mapApi;
    private _panel;
    private _panelDetails;
    private _loader;
    private _panelOptions;
    /**
    * Plugin init
    * @function init
    * @param {Object} mapApi the viewer api
    */
    init(mapApi: any): void;
    /**
    * Set details panel value
    * @function findDetailsconfig
    * @param {String} id the layer id for this feature
    * @param {Object[]} layersConfig the chart layers configuration array
    * @returns {Object} the details panel values
    */
    findDetailsconfig(id: string, layersConfig: object[]): object;
}
export default interface Chart {
    _RV: any;
    config: any;
    translations: any;
}
