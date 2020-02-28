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
     * Add controls (slider bar and description
     * @function addControls
     * @param {String} controls the controls to add
     */
    private addControls;
    /**
     * Set the panel info with the active layer
     * @function setPanelInfo
     */
    private setPanelInfo;
}
export interface SliderDescription {
    desc: string;
    index: string;
}
export interface SliderPanel {
    description: SliderDescription;
}
