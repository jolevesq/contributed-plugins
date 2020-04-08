export class FeatureLayer {
    private _mapApi: any;

    /**
     * Feature layer constructor
     * @constructor
     */
    constructor(mapApi: any) {
        this._mapApi = mapApi;
    }

    identify(layer: any) {
        // // TODO add full documentation for options parameter

        // // early kickout check. not loaded/error; not visible; not queryable; off scale
        // if (!shared.layerLoaded(this.state) ||
        //     !this.visibility ||
        //     !this.isQueryable() ||
        //     this.isOffScale(opts.map.getScale()).offScale) {

        //     // TODO verifiy this is correct result format if layer should be excluded from the identify process
        //     return { identifyResults: [], identifyPromise: Promise.resolve() };
        // }

        // const identifyResult = new shared.IdentifyResult(this.getProxy());
        // const tolerance = opts.tolerance || this.clickTolerance;

        // // run a spatial query
        // const qry = new this._apiRef.layer.Query();
        // qry.outFields = ['*']; // this will result in just objectid fields, as that is all we have in feature layers

        // // more accurate results without making the buffer if we're dealing with extents
        // // polygons from added file need buffer
        // // TODO further investigate why esri is requiring buffer for file-based polygons. logic says it shouldnt
        // if (this.getGeomType() === 'esriGeometryPolygon' && this.dataSource() === shared.dataSources.ESRI) {
        //     qry.geometry = opts.geometry;
        // } else {
        //     // TODO investigate why we are using opts.clickEvent.mapPoint and not opts.geometry
        //     qry.geometry = this.makeClickBuffer(opts.clickEvent.mapPoint, opts.map, tolerance);
        // }

        // // a big promise chain. resolves when all the asynch parts of identify are done.
        // // has no result parameter, instead updates contents of identifyResult object
        // const identifyPromise = Promise.all([
        //         // first asynch step. do identify on the layer, and ensure layer metadata is downloaded.
        //         Promise.resolve(this._layer.queryFeatures(qry)),
        //         this.getLayerData()

        //     ]).then(([queryResult, layerData]) => {
        //         // second asynch step. do any additional filtering on local layer results.
        //         // then fetch full attribute values for all the identify results

        //         let validResults;
        //         if (this.dataSource() === shared.dataSources.ESRI) {
        //             // because server-sourced layers use definition expression, the results are automatically filtered
        //             validResults = queryResult.features;
        //         } else {
        //             // file / wfs
        //             // the query will return items that are invisible due to filters. banish them.
        //             validResults = queryResult.features.filter(f => {
        //                 const objId = f.attributes[layerData.oidField];
        //                 const graphic = this._layer.graphics.find(g => {
        //                     return g.attributes[layerData.oidField] === objId;
        //                 });
        //                 if (graphic) {
        //                     return graphic.visible;
        //                 } else {
        //                     // couldn't find this graphic. should never happen
        //                     return false;
        //                 }
        //             });
        //         }

        //         // get the attributes using fetchGraphic (will pick most efficient route to attributes)
        //         // bundle all requests in promises
        //         const vAttribPromises = validResults.map(feat => {
        //             // grab the object id of the feature we clicked on.
        //             return new Promise(resolve => {
        //                 const objId = feat.attributes[layerData.oidField];
        //                 const graphicPromise = this.fetchGraphic(objId, { attribs: true });
        //                 graphicPromise.then(graphicBundle => {
        //                     resolve({
        //                         oid: objId,
        //                         attributes: graphicBundle.graphic.attributes
        //                     });
        //                 });
        //             });
        //         });

        //         // tack on the layer data, as we need it for next section
        //         vAttribPromises.push(Promise.resolve(layerData));

        //         return Promise.all(vAttribPromises);

        //     }).then(validAttributes => {
        //         // third async step (this part is all synch, so is final part).
        //         // transform attributes of identify results into objects containing info
        //         // the details panel reqires.
        //         //
        //         // each feature will have its attributes converted into a table
        //         // placeholder for now until we figure out how to signal the panel that
        //         // we want to make a nice table

        //         const layerData = validAttributes.pop();

        //         identifyResult.data = validAttributes.map(vAtt => {
        //             return {
        //                 name: this.getFeatureName(vAtt.oid.toString(), vAtt.attributes),
        //                 data: this.attributesToDetails(vAtt.attributes, layerData.fields),
        //                 oid: vAtt.oid,
        //                 symbology: [
        //                     { svgcode: this._apiRef.symbology.getGraphicIcon(vAtt.attributes, layerData.renderer) }
        //                 ]
        //             };
        //         });
        //         identifyResult.isLoading = false;
        //     });

        // return { identifyResults: [identifyResult], identifyPromise };
    }
}

// /**
//      * Run a query on a feature layer, return the result as a promise.
//      * Options:
//      * - clickEvent {Object} an event object from the mouse click event, where the user wants to identify.
//      * - map {Object}        map object. A geoApi wrapper, such as esriMap, not an actual esri api map
//      * - geometry {Object}   geometry (in map coordinates) to identify against
//      * - tolerance {Integer} an optional click tolerance for the identify
//      *
//      * @function identify
//      * @param {Object} opts    additional arguemets, see above.
//      * @returns {Object} an object with identify results array and identify promise resolving when identify is complete; if an empty object is returned, it will be skipped
//      */
//     identify (opts) {
//         // TODO add full documentation for options parameter

//         // early kickout check. not loaded/error; not visible; not queryable; off scale
//         if (!shared.layerLoaded(this.state) ||
//             !this.visibility ||
//             !this.isQueryable() ||
//             this.isOffScale(opts.map.getScale()).offScale) {

//             // TODO verifiy this is correct result format if layer should be excluded from the identify process
//             return { identifyResults: [], identifyPromise: Promise.resolve() };
//         }

//         const identifyResult = new shared.IdentifyResult(this.getProxy());
//         const tolerance = opts.tolerance || this.clickTolerance;

//         // run a spatial query
//         const qry = new this._apiRef.layer.Query();
//         qry.outFields = ['*']; // this will result in just objectid fields, as that is all we have in feature layers

//         // more accurate results without making the buffer if we're dealing with extents
//         // polygons from added file need buffer
//         // TODO further investigate why esri is requiring buffer for file-based polygons. logic says it shouldnt
//         if (this.getGeomType() === 'esriGeometryPolygon' && this.dataSource() === shared.dataSources.ESRI) {
//             qry.geometry = opts.geometry;
//         } else {
//             // TODO investigate why we are using opts.clickEvent.mapPoint and not opts.geometry
//             qry.geometry = this.makeClickBuffer(opts.clickEvent.mapPoint, opts.map, tolerance);
//         }

//         // a big promise chain. resolves when all the asynch parts of identify are done.
//         // has no result parameter, instead updates contents of identifyResult object
//         const identifyPromise = Promise.all([
//                 // first asynch step. do identify on the layer, and ensure layer metadata is downloaded.
//                 Promise.resolve(this._layer.queryFeatures(qry)),
//                 this.getLayerData()

//             ]).then(([queryResult, layerData]) => {
//                 // second asynch step. do any additional filtering on local layer results.
//                 // then fetch full attribute values for all the identify results

//                 let validResults;
//                 if (this.dataSource() === shared.dataSources.ESRI) {
//                     // because server-sourced layers use definition expression, the results are automatically filtered
//                     validResults = queryResult.features;
//                 } else {
//                     // file / wfs
//                     // the query will return items that are invisible due to filters. banish them.
//                     validResults = queryResult.features.filter(f => {
//                         const objId = f.attributes[layerData.oidField];
//                         const graphic = this._layer.graphics.find(g => {
//                             return g.attributes[layerData.oidField] === objId;
//                         });
//                         if (graphic) {
//                             return graphic.visible;
//                         } else {
//                             // couldn't find this graphic. should never happen
//                             return false;
//                         }
//                     });
//                 }

//                 // get the attributes using fetchGraphic (will pick most efficient route to attributes)
//                 // bundle all requests in promises
//                 const vAttribPromises = validResults.map(feat => {
//                     // grab the object id of the feature we clicked on.
//                     return new Promise(resolve => {
//                         const objId = feat.attributes[layerData.oidField];
//                         const graphicPromise = this.fetchGraphic(objId, { attribs: true });
//                         graphicPromise.then(graphicBundle => {
//                             resolve({
//                                 oid: objId,
//                                 attributes: graphicBundle.graphic.attributes
//                             });
//                         });
//                     });
//                 });

//                 // tack on the layer data, as we need it for next section
//                 vAttribPromises.push(Promise.resolve(layerData));

//                 return Promise.all(vAttribPromises);

//             }).then(validAttributes => {
//                 // third async step (this part is all synch, so is final part).
//                 // transform attributes of identify results into objects containing info
//                 // the details panel reqires.
//                 //
//                 // each feature will have its attributes converted into a table
//                 // placeholder for now until we figure out how to signal the panel that
//                 // we want to make a nice table

//                 const layerData = validAttributes.pop();

//                 identifyResult.data = validAttributes.map(vAtt => {
//                     return {
//                         name: this.getFeatureName(vAtt.oid.toString(), vAtt.attributes),
//                         data: this.attributesToDetails(vAtt.attributes, layerData.fields),
//                         oid: vAtt.oid,
//                         symbology: [
//                             { svgcode: this._apiRef.symbology.getGraphicIcon(vAtt.attributes, layerData.renderer) }
//                         ]
//                     };
//                 });
//                 identifyResult.isLoading = false;
//             });

//         return { identifyResults: [identifyResult], identifyPromise };
//     }