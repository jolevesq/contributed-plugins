import { SliderPanel } from './slider-panel';
export declare class SliderControls {
    private _mapApi;
    private _panelControls;
    /**
     * Controllers constructor
     * @constructor
     * @param {Any} mapApi the viewer api
     * @param {SliderPanel} slider the slider panel class access play and step functions
     * @param {String} controls the controls to enable
     */
    constructor(mapApi: any, slider: SliderPanel, controls: string, panel: any);
    /**
     * Compile template to link controller and html
     * @function compileTemplate
     * @param {String} template measure control
     * @return {JQuery<HTMLElement>} temp compile template
     */
    private compileTemplate;
}
