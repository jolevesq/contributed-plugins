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
     * Launch init for no config layers
     * @function launchInit
     * @param {Layer[]} layers array of layers to init
     * @param {String} name the layer name for description
     * @param {String} field the field name for description
     */
    launchInit(layers: Layer[], name: string, field: string): void;
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
     * Initialize slider creation when all layers are loaded
     * @function initializeSlider
     * @param {Layer[]} layers the array of layer and layerInfo
     */
    initializeSlider(layers: Layer[]): void;
    /**
     * Launch the attributesAdded subscription event
     * @function startAttributesEvent
     * @param {LayerInfo} layerInfo the info to get the attributes
     * @param {Number} nbLayers the number of layers to check
     */
    startAttributesEvent(layerInfo: LayerInfo, nbLayers: number): void;
    /**
     * Set attributes from the resolve event of startAttributesEvent. Wween need to launch
     * startAttributesEvent for every needed layer
     * @function setAttributes
     * @param {AttributePipe} attrPipe the object returned by the attributesAdded event
     * @param {LayerInfo} layerInfo the info to get the attributes
     * @param {Number} nbLayers the number of layers to check
     */
    setAttributes(attrPipe: AttributePipe, layerInfo: LayerInfo, nbLayers: number): void;
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
interface Layer {
    layer: any;
    layerInfo: LayerInfo;
}
interface LayerInfo {
    id: string;
    field: string;
}
interface AttributePipe {
    layer: any;
    attributes: object[];
}
export {};
