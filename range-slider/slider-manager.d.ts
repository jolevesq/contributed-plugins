interface Layer {
    layer: any;
    layerInfo: LayerInfo;
}
interface LayerInfo {
    id: string;
    field: string;
    isTimeAware: boolean;
}
/**
 * Manage slider panel and bar creation.
 */
export declare class SliderManager {
    private _mapApi;
    private _panel;
    private _config;
    private _myBundle;
    private _slider;
    private _attRead;
    private _button;
    private _xmlParser;
    /**
    * Slider manager constructor
    * @constructor
    * @param {Any} mapApi the viewer api
    * @param {Any} panel the slider panel
    * @param {Any} config the slider configuration
    * @param {Any} myBundle the esri dependencies bundle
    */
    constructor(mapApi: any, panel: any, config: any, myBundle: any);
    setupConfiguredLayer(layers: any[]): void;
    setupLimits(layers: Layer[]): void;
    settNotTimeAwareLimits(item: Layer): Promise<any>;
    setTimeESRILimits(item: Layer): Promise<unknown>;
    setTimeWMSLimits(item: Layer): Promise<unknown>;
    getDimensionsWMS(ids: any, layer: any, dimensions: any, dimensionName?: string): any;
    setDimensionLayerDefinition(layer: any, dimensionName: any): any;
    processWMSExtent(extent: any): {
        extent: any[];
        static: any[];
        interval: any;
    };
    isDiscreteExtent(strExtent: string): any;
    sortNumbersAsc(a: any, b: any): number;
    addDuration(dateStart: any, arrDuration: any): any;
    buildTimeStampsArrayFromInterval(strDateStart: any, strDateEnd: any, strIsoInterval: any): any[];
    getTimestampsArrayFromExtent(arrExtent: any): any[];
    getRangeAndLimitFromExtent(arrExtent: any): {
        limit: any;
        range: {
            min: any;
            max: any;
        };
    };
    /**
     * Initialize slider creation when all layers are loaded
     * @function initializeSlider
     */
    initializeSlider(): void;
    /**
     * Create the menu button once slider is initialized
     * @function createButtonMenu
     */
    createButtonMenu(): void;
    /**
     * Event to fire on side menu item click. Open/Close the panel
     * @function onMenuItemClick
     * @return {function} the function to run
     */
    onMenuItemClick(): () => void;
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
export {};
