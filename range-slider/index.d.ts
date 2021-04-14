export default class RangeSlider {
    /**
    * Plugin init
    * @function init
    * @param {Any} mapApi the viewer api
    */
    init(mapApi: any): void;
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
