export default class ThematicSlider {
    private _button;
    private _panel;
    private _panelDetails;
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
    /**
    * Disable main app bar toc buttons to avoid collision
    * @function setButtonState
    * @param {Boolean} disable disable or not the buttons
    */
    setButtonState(disable: boolean): void;
}
export default interface ThematicSlider {
    mapApi: any;
    _RV: any;
    config: any;
    translations: any;
}
