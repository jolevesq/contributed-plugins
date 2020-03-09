/// <reference types="jquery" />
import { SliderBar } from './slider-bar';
export declare class SliderControls {
    /**
     * Slider controls constructor
     * @constructor
     * @param {Any} mapApi the viewer api
     * @param {Any} panelManager the Panel Manager class
     * @param {String[]} templates the controls template
     * @param {SliderBar} slider the slider bar
     */
    constructor(mapApi: any, panelManager: any, templates: string[], slider: SliderBar);
    /**
     * Compile template to link controller and html
     * @function compileTemplate
     * @param {String} template measure control
     * @return {JQuery<HTMLElement>} temp compile template
     */
    compileTemplate(template: string): JQuery<HTMLElement>;
}
export interface SliderControls {
    mapApi: any;
}
