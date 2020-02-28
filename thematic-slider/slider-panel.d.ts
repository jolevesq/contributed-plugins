export declare class SliderPanel {
    private _mapApi;
    private _panelSlider;
    private _panelOptionsSlider;
    private _index;
    private _layers;
    private _playTimeout;
    private _layerNb;
    private _loop;
    private _stack;
    /**
     * Slider panel constructor
     * @constructor
     * @param {Any} mapApi the viewer api
     * @param {Any} config the slider configuration
     */
    constructor(mapApi: any, config: any);
    /**
     * Open the panel
     * @function open
     */
    open(): void;
    /**
     * Close the panel
     * @function close
     */
    close(): void;
    /**
     * Add controls (slider bar and description
     * @function addControls
     * @param {String} controls the controls to add
     */
    private addControls;
}
export interface SliderDescription {
    desc: string;
    index: string;
}
export interface SliderPanel {
    description: SliderDescription;
}
