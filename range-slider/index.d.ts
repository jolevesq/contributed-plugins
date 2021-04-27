export default class RangeSlider {
    /**
    * Plugin init
    * @function init
    * @param {Any} mapApi the viewer api
    */
    init(mapApi: any): void;
    /**
     * Parse and extend the configuration object for missing properties
     * @param {any} config the configuration object
     * @returns the extented config
     */
    parsePluginConfig(config: any): any;
}
export default interface RangeSlider {
    mapApi: any;
    _RV: any;
    translations: any;
    panel: any;
    panelOptions: any;
    layerOptions: any;
}
export interface Range {
    min: number;
    max: number;
    staticItems?: number[];
}
