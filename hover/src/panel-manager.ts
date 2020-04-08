import { FeatureLayer } from './feature-layer';
import { DynamicLayer } from './dynamic-layer';

const showdown  = require('showdown');

export class PanelManager {
    private _mapApi: any;
    private _config: any;

    private _panelHover: any;
    private _closeEvent: any;

    private _featLayer: FeatureLayer;
    private _dynaLayer: DynamicLayer;

    private mapPoint;

    private _converter: any;

    /**
     * Hover panel constructor
     * @constructor
     * @param {Any} mapApi the viewer api
     * @param {Any} config the slider configuration
     */
    constructor(mapApi: any, config: any) {
        this._mapApi = mapApi;
        this._config = config;

        // create panel
        this._panelHover = this._mapApi.panels.create('hoverLayer');

        // create layer type class
        this._featLayer = new FeatureLayer(this._mapApi);
        this._dynaLayer = new DynamicLayer(this._mapApi);

        // create markdown converter
        this._converter = new showdown.Converter();
    }

    setupPanel(mapPoint, x, y) {
        // get position buffer for the identify
        const geom = this.makeClickBuffer(mapPoint);

        this.mapPoint = mapPoint;

        // for each layer call a identify, getFeatureinfo
        // make an array of promise and resolve all of them to create the panel
        // create on class by type of layer
        const that = this;
        const promises = [];
        for (let layer of that._config.layers) {
            let layerMap = that._mapApi.layersObj.allLayers.find(l => l.id === layer.id);

            if (layerMap.type === 'esriFeature' || layerMap.type === 'esriDynamic') {
                const url = (layerMap.type === 'esriFeature') ? layerMap.esriLayer.url : `${layerMap.esriLayer.url}/${layerMap.layerIndex}`;
                let options = {
                    geometry: geom,
                    url: url,
                    outFields: ['*'],
                    returnGeometry: true
                };

                // if it is a file based layer, we need to add the layer to query
                if (typeof layerMap._viewerLayer.initialConfig.fileType !== 'undefined') {
                    (<any>options).featureLayer = layerMap.esriLayer;
                }

                // get the promises for the layer
                promises.push((<any>window).RAMP.GAPI.query.queryGeometry(options));
            } else if (layerMap.type === 'wms') {

            }
        }

        Promise.all(promises).then(layers => {
            let item;
            for (let i in layers) {
                let layer = layers[i];
                if (typeof layer.features[0] !== 'undefined') {
                    item = { i, feature: layer.features[0] };
                    break;
                }
            }

            if (typeof item !== 'undefined') {
                let config = this._config.layers[item.i];
                // feature.attributes
                this._panelHover.element.css({ top: `${y}px`, left: `${x}px` });

                // parse the attributes inside the detail value and convert to html
                const text = this.parseAttributes(config.description, item.feature);
                const html = this._converter.makeHtml(text);

                this._panelHover.body = `<div class="rv-tooltip-content">${html}</div>`; //new DOMParser().parseFromString(html, 'text/html').body; 
                this._panelHover.open();

                // const toolTip = new Tooltip(ref.followMapStrategy, ref.containInsideStrategy, content, tooltipScope);
                // referenceService.panels.shell.append(toolTip.node);
                // toolTip.position(point.x, point.y);
            }
        });

        // create mouse move event to close the panel
        this._closeEvent = this.close();
    }

    /**
    * Take the details string for the panel and replace by attribute values if need be
    * @function parseAttributes
    * @param {String} description string to parse for feature attributes
    * @param {Any} feature feature to get attributes
    * @return {String} the parsed description string
    */
    parseAttributes(description: string, feature: any): string {
        for (let key of Object.keys(feature.attributes)) {
            if (description.indexOf(`{{${key}}}`) !== -1) {
                description = description.replace(`{{${key}}}`, feature.attributes[key]);
            }
        }

        return description;
    }

    /**
     * Create an extent centered around a point, that is appropriate for the current map scale.
     *
     * @function makeClickBuffer
     * @param {NAnyumber} mapPoint       map point for extent center
     * @param {Integer} tolerance  optional. distance in pixels from mouse point that qualifies as a hit. default is 5
     * @return {Object} an extent of desired size and location
     */
    makeClickBuffer (mapPoint, tolerance = 5) {
        // take pixel tolerance, convert to map units at current scale. x2 to turn radius into diameter
        const buffSize = 2 * tolerance * this._mapApi.esriMap.extent.getWidth() / this._mapApi.esriMap.width;

        // build tolerance envelope of correct size
        const cBuff = (<any>window).RAMP.GAPI.Map.Extent(0, 0, buffSize, buffSize, mapPoint.spatialReference);

        // move the envelope so it is centered around the point
        return cBuff.centerAt(mapPoint);
    }

    close() {
        const events = [
            this._mapApi.esriMap.on('mouse-move', () => {
                this._panelHover.close();
                this._closeEvent[0].remove();
            }),
            this._mapApi.esriMap.on('pan-start', () => {
                this._panelHover.close();
                this._closeEvent[1].remove();
            }),
            this._mapApi.esriMap.on('zoom-start', () => {
                this._panelHover.close();
                this._closeEvent[2].remove();
            })
        ];
        return events;
    }
}





// /**
//      * Run a getFeatureInfo on a WMS layer, return the result as a promise.
//      * Options:
//      * - clickEvent {Object} an event object from the mouse click event, where the user wants to identify.
//      *
//      * @param {Object} opts     additional arguemets, see above.
//      * @returns {Object} an object with identify results array and identify promise resolving when identify is complete; if an empty object is returned, it will be skipped
//      */
//     identify (opts) {
//         // TODO add full documentation for options parameter

//         // TODO consider having a constants area in geoApi / better place for this definition
//         const infoMap = {
//             'text/html;fgpv=summary': 'HTML',
//             'text/html': 'HTML',
//             'text/plain': 'Text',
//             'application/json': 'EsriFeature'
//         };

//         // ignore layers with no mime type, not loaded, not visible, not queryable
//         if (this.state === shared.states.ERROR ||
//             this.state === shared.states.LOADING ||
//             this.state === shared.states.NEW ||
//             !this.visibility ||
//             !this.isQueryable() ||
//             !infoMap.hasOwnProperty(this.config.featureInfoMimeType)) {
//             // TODO verifiy this is correct result format if layer should be excluded from the identify process
//             return { identifyResults: [], identifyPromise: Promise.resolve() };
//         }

//         const identifyResult = new shared.IdentifyResult(this.getProxy());

//         const identifyPromise = this._apiRef.layer.ogc
//             .getFeatureInfo(
//                 this._layer,
//                 opts.clickEvent,
//                 this.config.layerEntries.map(le => le.id),
//                 this.config.featureInfoMimeType)
//             .then(data => {
//                 identifyResult.isLoading = false;

//                 // TODO: check for French service
//                 // check if a result is returned by the service. If not, do not add to the array of data
//                 if (data) {
//                     if (typeof data !== 'string') {
//                         // likely json or an image
//                         identifyResult.data.push(data);
//                     } else if (data.indexOf('Search returned no results') === -1 && data !== '') {
//                         identifyResult.data.push(data);
//                     } 
//                 }

//                 // console.info(data);
//             });

//         return { identifyResults: [identifyResult], identifyPromise };
//     }