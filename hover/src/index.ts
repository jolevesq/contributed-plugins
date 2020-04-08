import { PanelManager } from './panel-manager';

const Debounce = require('debounce');

export default class Hover {
    /**
    * Plugin init
    * @function init
    * @param {Object} mapApi the viewer api
    */
    init(mapApi: any) {
        this.mapApi = mapApi;

        // get hover config
        let config = this._RV.getConfig('plugins').hover;
        config.language = this._RV.getCurrentLang();

        // create the panel manager class
        const panel = new PanelManager(mapApi, config);

        // disable mouse event for feature layer so display field info will not be shown
        // make sure there is no side effect
        const ids = config.layers.map(layer => layer.id);
        this.mapApi.layersObj.layerAdded.subscribe((layer: any) => {
            // if it is the right layer, disable mouse event so there no info window display field
            if (ids.indexOf(layer.id) !== -1 && layer.type === 'esriFeature') {
                layer.esriLayer.disableMouseEvents();
            }
        });

        // setup the panel each time the mouse move and stop for 100 milliseconds
        this.mapApi.esriMap.on('mouse-move', Debounce((event) => {
            panel.setupPanel(event.mapPoint, event.clientX, event.clientY - 75);

            //tooltipService.addTooltip(x.screenPosition, {}, x.content);
        }, 50));
    }
}

export default interface Hover {
    mapApi: any,
    _RV: any
}

(<any>window).hover = Hover;