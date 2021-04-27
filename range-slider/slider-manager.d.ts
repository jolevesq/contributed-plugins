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
    /**
     * Setup configured layers
     * @function setupConfiguredLayer
     * @param {Layer[]} layers Array of layers to setup
     */
    setupConfiguredLayer(layers: Layer[]): void;
    /**
     * Setup limits and range object
     * @function setupLimits
     * @param {Layer[]} layers Array of layers to setup limit and range
     */
    setupLimits(layers: Layer[]): void;
    /**
     * Set non time aware service from service metadata (ESRI layer)
     * @function settNotTimeAwareLimits
     * @param {Layer} item the layer item to set limit for
     * @returns {Promise<Object>} a promise with the limits and range info
     */
    settNotTimeAwareLimits(item: Layer): Promise<Object>;
    /**
     * Set time aware service from service metadata (ESRI layer)
     * @function setTimeESRILimits
     * @param {Layer} item the layer item to set limit for
     * @returns {Promise<Object>} a promise with the limits and range info
     */
    setTimeESRILimits(item: Layer): Promise<Object>;
    /**
     * Set time aware service from service getCapabilites (WMS-T layer)
     * @function setTimeWMSLimits
     * @param {Layer} item the layer item to set limit for
     * @returns {Promise<Object>} a promise with the limits and range info
     */
    setTimeWMSLimits(item: Layer): Promise<Object>;
    /**
     * Get WMS dimension information. Loop trought layers and extract
     * @function getDimensionsWMS
     * @param {String[]} ids arrays of id
     * @param {object} layer getCapabilities layer object
     * @param {object[]} dimensions array of dimensions info
     * @param {String} dimensionName the dimension name to get info for (optional, time by default)
     * @returns the dimensions object array
     */
    getDimensionsWMS(ids: string[], layer: any, dimensions: any[], dimensionName?: string): object[];
    /**
     * Set the dimension definition
     * @function setDimensionLayerDefinition
     * @param {object} layer getCapabilities layer object
     * @param String} dimensionName the dimension name to get info for
     * @returns the dimension object
     */
    setDimensionLayerDefinition(layer: any, dimensionName: any): object;
    /**
     * Process time interval (limits, static items and used interval)
     * @function processWMSExtent
     * @param {object} extent the dimension extent information
     * @returns the setup extent limits object
     */
    processWMSExtent(extent: any): object;
    /**
     * Check if it is a discrete or range extent
     * @function isDiscreteExtent
     * @param {string} strExtent the time extent string
     * @returns a boolean, true if discrete, false otherwise
     */
    isDiscreteExtent(strExtent: string): boolean;
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
    onMenuItemClick(): any;
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
