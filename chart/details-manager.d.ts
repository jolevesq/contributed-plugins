export declare class DetailsManager {
    private _panelDetails;
    private _panelTrigger;
    private _activeLayername;
    private _enabled;
    private _details;
    private _feature;
    layerName: string;
    enabled: boolean;
    details: string;
    feature: object[];
    /**
    * Details manager constructor
    * @constructor
    * @param {Any} mapApi the viewer api
    */
    constructor(mapApi: any);
    /**
    * Take the details string for the panel and replace by attribute values if need be
    * @function parseAttributes
    * @return {String} the parsed details string
    */
    parseAttributes(): string;
    /**
    * Function to apply when an item is click on the sidebar details panel menu or fired if there is only one layer
    * @function clickDetails
    * @param {Any} event the click event or an object that mimick it. Contains the activel layer name and the details to show
    */
    clickDetails(event: any): void;
}
