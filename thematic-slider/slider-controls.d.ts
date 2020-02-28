/// <reference types="jquery" />
export declare class SliderControls {
    private _mapApi;
    private _panelControls;
    readonly controls: any[];
    /**
     * Controllers constructor
     * @constructor
     * @param {Any} mapApi the viewer api
     * @param {SliderPanel} slider the slider panel class access play and step functions
     * @param {String} controls the controls to enable
     */
    constructor(mapApi: any, panel: any, slider: any);
    /**
     * Compile template to link controller and html
     * @function compileTemplate
     * @param {String} template measure control
     * @return {JQuery<HTMLElement>} temp compile template
     */
    compileTemplate(template: any): JQuery<HTMLElement>;
}
