!function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){t.exports=i(1)},function(t,e,i){"use strict";i.r(e);i(2),i(5)},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(3),r=function(){function t(){}return t.prototype.init=function(e){this.mapApi=e,this.config=this._RV.getConfig("plugins").thematicSlider,this.config.language=this._RV.getCurrentLang(),this._button=this.mapApi.mapI.addPluginButton(t.prototype.translations[this._RV.getCurrentLang()].title,this.onMenuItemClick()),this.config.open&&(this._button.isActive=!0),this._panel=new n.SliderPanel(this.mapApi,this.config)},t.prototype.onMenuItemClick=function(){var t=this;return function(){t._button.isActive=!t._button.isActive,t._button.isActive?t._panel.open():t._panel.close()}},t}();e.default=r,r.prototype.translations={"en-CA":{title:"Thematic Slider",previous:"Previous",play:"Play",pause:"Pause",foward:"Next"},"fr-CA":{title:"Curseur thématique",previous:"Précédent",play:"Jouer",pause:"Pause",foward:"Prochain"}},window.thematicSlider=r},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(4),r=function(){function t(t,e){this._panelOptionsSlider={bottom:"0em",width:"400px",top:"50px"},this._index=0,this._layerNb=0,this._loop=!1,this._stack=!1,this._mapApi=t,this._panelSlider=this._mapApi.panels.create("thematicSlider"),this._panelSlider.element.css(this._panelOptionsSlider),this._panelSlider.body=n.SLIDER_TEMPLATE,this._mapApi.agControllerRegister("DescriptionCtrl",(function(t){console.log("in"),this.index="index",this.description="description"})),this._panelSlider.body.find(".rv-thematic-slider").append(this.compileTemplate(n.DESCRIPTION_TEMPLATE)),this.open()}return t.prototype.compileTemplate=function(t){var e=$(t);return this._mapApi.$compile(e),e},t.prototype.open=function(){this._panelSlider.open()},t.prototype.close=function(){this._panelSlider.close()},t.prototype.addControls=function(t){},t}();e.SliderPanel=r},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SLIDER_TEMPLATE='\n<div rv-focus-member class="rv-thematic-slider">\n</div>',e.DESCRIPTION_TEMPLATE='\n<div class="rv-thslider-desc-control" ng-controller="DescriptionCtrl as ctrl">\n    <div class="rv-thslider-desc">{{ ctrl.description }}</div>\n    <span class="rv-thslider-index">{{ ctrl.index }}</span>\n</div>'},function(t,e,i){}]);