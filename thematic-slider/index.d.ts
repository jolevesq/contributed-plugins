export default class ThematicSlider {
    private _button;
    private _panel;
    /**
    * Plugin init
    * @function init
    * @param {Object} mapApi the viewer api
    */
    init(mapApi: any): void;
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
