export class DynamicLayer {
    private _mapApi: any;

    /**
     * Dynamic layer constructor
     * @constructor
     */
    constructor(mapApi: any) {
        this._mapApi = mapApi;
    }

    identify(layer: any) {
        console.log(layer.id)
    }
}