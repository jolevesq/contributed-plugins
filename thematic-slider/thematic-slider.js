!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";n.r(e);n(2),n(4)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),r=function(){function t(){}return t.prototype.init=function(e){var n;this.mapApi=e;this.config=this._RV.getConfig("plugins").thematicSlider,this.config.language=this._RV.getCurrentLang(),this._button=this.mapApi.mapI.addPluginButton(t.prototype.translations[this._RV.getCurrentLang()].title,this.onMenuItemClick()),(n=this.mapApi.panels.create("thematicSlider")).element.css({bottom:"0em",width:"400px",top:"50px"}),n.body=i.SLIDER_TEMPLATE,n.open(),this.mapApi.agControllerRegister("DescCtrl",(function(){this.b="what the ...",this.description="a",this.index="b"})),n.body.append(this.compileTemplate(i.SAMPLE_BUTTON)),this.mapApi.agControllerRegister("SampleCtrl1",(function(){this.sampleFunction=function(){console.log("click")}})),n.body.append(this.compileTemplate(i.SAMPLE_BUTTON1)),this.mapApi.agControllerRegister("SampleCtrl2",(function(t){console.log("in"),this.a="test"})),n.body.append(this.compileTemplate(i.DESCRIPTION_TEMPLATE)),this.config.open&&(this._button.isActive=!0)},t.prototype.compileTemplate=function(t){var e=$(t);return this.mapApi.$compile(e),e},t.prototype.onMenuItemClick=function(){var t=this;return function(){t._button.isActive=!t._button.isActive,t._button.isActive}},t}();e.default=r,r.prototype.translations={"en-CA":{title:"Thematic Slider",previous:"Previous",play:"Play",pause:"Pause",foward:"Next"},"fr-CA":{title:"Curseur thématique",previous:"Précédent",play:"Jouer",pause:"Pause",foward:"Prochain"}},window.thematicSlider=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SLIDER_TEMPLATE='\n<div rv-focus-member class="rv-thematic-slider">\n</div>',e.DESCRIPTION_TEMPLATE='\n<div class="" ng-controller="SampleCtrl2 as ctrl">\n    {{ ctrl.a }}\n</div>\n',e.SAMPLE_BUTTON='\n<div class="" ng-controller="DescCtrl as ctrl">\n    <div class="rv-thslider-desc">{{ ctrl.description }}</div>\n    <span class="rv-thslider-index">{{ ctrl.index }}</span>\n</div>\n',e.SAMPLE_BUTTON1='\n<div class="" ng-controller="SampleCtrl1 as ctrl">\n    <md-button\n        aria-label="{{ \'plugins.myFirstPlugin.placeHolder\' | translate }}"\n        class="rv-button-square md-button ng-scope md-ink-ripple"\n        ng-click="ctrl.sampleFunction()">\n            {{ \'plugins.myFirstPlugin.placeHolder\' | translate }}\n        <md-tooltip>{{ \'plugins.myFirstPlugin.placeHolder\' | translate }}</md-tooltip>\n    </md-button>\n</div>\n'},function(t,e,n){}]);