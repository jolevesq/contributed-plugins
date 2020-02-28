/// <reference types="jquery" />
export default class ThematicSlider {
    private _button;
    /**
    * Plugin init
    * @function init
    * @param {Object} mapApi the viewer api
    */
    init(mapApi: any): void;
    compileTemplate(template: any): JQuery<HTMLElement>;
    /**
    * Event to fire on side menu item click. Open/Close the panel
    * @function onMenuItemClick
    * @return {function} the function to run
    */
    onMenuItemClick(): () => void;
}
export default interface ThematicSlider {
    mapApi: any;
    _RV: any;
    config: any;
    translations: any;
}
