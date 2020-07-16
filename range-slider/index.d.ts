export default class RangeSlider {
    private _button;
    /**
    * Plugin init
    * @function init
    * @param {Any} mapApi the viewer api
    */
    init(mapApi: any): void;
    /**
    * Event to fire on side menu item click. Open/Close the panel
    * @function onMenuItemClick
    * @return {function} the function to run
    */
    onMenuItemClick(): () => void;
    /**
     * Set layer properties for added layer
     * @function setLayer
     * @param {Any} mapApi the viewer api
     * @param {Any} config the slider configuration
     */
    setLayer(layer: any, config: any): void;
    /**
     * Set slider bar
     * @function setSliderBar
     */
    setSliderBar(): void;
    /**
     * Set slider bar controls
     * @function setBarControls
     * @param {String[]} the array of controls to initialize
     */
    setBarControls(controls: string[]): void;
}
export interface Range {
    min: number;
    max: number;
}
export default interface RangeSlider {
    mapApi: any;
    _RV: any;
    translations: any;
    panel: any;
    config: any;
    extendConfig: any;
    panelOptions: any;
    layerOptions: any;
    slider: any;
}
