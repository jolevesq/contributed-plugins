import 'nouislider/distribute/nouislider.css';
import { Observable } from 'rxjs';
import { Range } from './index';
export declare class SliderBar {
    private _slider;
    private _mapApi;
    private _config;
    private _playInterval;
    private _playState;
    getPlayState(): Observable<boolean>;
    private setPlayState;
    private _gifImages;
    /**
     * Slider bar constructor
     * @constructor
     * @param {Any} mapApi the viewer api
     * @param {Any} config the slider configuration
     */
    constructor(mapApi: any, config: any);
    /**
     * Set ranges
     * @function setRanges
     * @param {Number} width display width
     * @param {limits} limit min and max limit to set
     * @param {Number} delta display width
     * @return {limits} range the updated limits
     */
    setRanges(width: number, limit: limits, delta: number): limits;
    /**
     * Set pips (slider labels) format
     * @function formatPips
     * @param {Any} value the value to display (number, string or date)
     * @param {String} field the type of field
     * @param {String} lang the language to use
     * @return {any} value the formated value
     */
    formatPips(value: any, field: string, lang: string): any;
    lock: boolean;
    loop: boolean;
    delay: number;
    export: boolean;
    /**
     * Set play or pause on the slider
     * @function play
     * @param {Boolean} play true if slider is playing, false otherwise
     */
    play(play: boolean): void;
    /**
     * Loop play until the max limit is reach
     * @function playInstant
     * @param {Number} limitmax the max limit
     */
    playInstant(limitmax: number): void;
    /**
     * Take a snapshot of the map for the export gif function
     * @function takeSnapShot
     * @param {Boolean} stop true if it is the last snapshot and it needs to export the gif, false otherwise
     */
    takeSnapShot(stop: boolean): void;
    /**
    * Set play on the slider
    * @function dataURItoBlob
    * @param {String} dataURI true if slider is playing, false otherwise
    * @return {Blob} blob the blob object (gif image) to save to file
    */
    dataURItoBlob(dataURI: string): Blob;
    /**
     * Set pause on the slider when play is call with false
     * @function pause
     */
    pause(): void;
    /**
     * Refresh the slider to default values
     * @function refresh
     */
    refresh(): void;
    /**
     * Step the silder
     * @function step
     * @param {String} direction up or down
     */
    step(direction: string): void;
    /**
     * Set left anchor
     * @function setLeftAnchor
     * @param {Number} values values to set anchors to
     * @param {String} direction up or down
     * @param {Number} step step value
     * @return {Number} Left anchor value
     */
    setLeftAnchor(values: number, direction: string, step: number): number;
    /**
     * Set right anchor
     * @function setRightAnchor
     * @param {Number} values values to set anchors to
     * @param {String} direction up or down
     * @param {Number} step step value
     * @return {Number} Left anchor value
     */
    setRightAnchor(values: number, direction: string, step: number): number;
    /**
     * Set definition query to filter the data
     * @function setDefinitionQuery
     * @param {Range} range range to use to filter
     */
    setDefinitionQuery(range: Range): void;
    /**
     * Set definition query to filter the data
     * @function setDefinitionQuery
     * @param {Range} range range to use to filter
     * @param {String} type type of date
     * @return {String[]} Array of string date  from date object
     */
    getDate(range: Range, type?: string): string[];
}
interface limits {
    min: number;
    max: number;
}
export {};
