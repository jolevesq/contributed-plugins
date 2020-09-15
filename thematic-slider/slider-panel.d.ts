import { Observable, BehaviorSubject } from 'rxjs';
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
    static _playState: BehaviorSubject<boolean>;
    static getPlayState(): Observable<boolean>;
    private static setPlayState;
    static _description: BehaviorSubject<object>;
    static getDescription(): Observable<object>;
    private static setDescription;
    static _legendState: BehaviorSubject<boolean>;
    static getLegendState(): Observable<boolean>;
    private static setLegendState;
    static _end: BehaviorSubject<string>;
    static getLastStep(): Observable<string>;
    private static setLastStep;
    private readonly active;
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
     * Add controls (slider bar and description)
     * @function addControls
     * @param {String} controls the controls to add
     */
    private addControls;
    /**
     * Set the panel info with the active layer
     * @function setPanelInfo
     */
    private setPanelInfo;
    /**
     * Get the symbology stack to add to legend section
     * @function getSymbology
     * @param {Object} stack symbology stack from legend entry block
     * @return {String} the html to add to legend section
     */
    getSymbology(stack: any): string;
    /**
     * Step the panel information and layer visibility up or down
     * @function step
     * @param {String} direction the direction to step
     * @return {Boolean} true if last or first element of the array, false otherwise
     */
    step(direction?: string): boolean;
    /**
     * Set layers visibility
     * @function setLayerVisibility
     */
    private setLayerVisibility;
    /**
     * Set play or pause state. Play will call step function with up value at the interval from the configuration
     * @function play
     * @param {Boolean} isPlaying state to put the slider to
     */
    play(isPlaying: boolean): void;
    /**
     * Set play (call step) with the proper interval
     * @function setPlayInterval
     * @param {SliderPanel} that the slider class to access within the interval function
     */
    private setPlayInterval;
}
export interface SliderDescription {
    desc: string;
    index: string;
}
export interface SliderPanel {
    description: SliderDescription;
}
