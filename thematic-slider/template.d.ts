export declare const SLIDER_TEMPLATE = "\n<div rv-focus-member class=\"rv-thematic-slider\">\n</div>";
export declare const DESCRIPTION_TEMPLATE = "\n<div class=\"rv-thslider-desc-control\" ng-controller=\"DescriptionCtrl as ctrl\">\n    <md-button\n        class=\"md-icon-button rv-button-40 rv-icon-20\"\n        ng-click=\"ctrl.isLegend = !ctrl.isLegend\"\n        aria-label=\"{{ ctrl.isLegend ? 'toc.label.group.collapse' : 'toc.label.group.expand' | translate }}\">\n        <md-icon class=\"rv-transform-default rv-rotate--180\" ng-class=\"{ 'rv-rotate--180' : ctrl.isLegend }\" md-svg-src=\"hardware:keyboard_arrow_down\" role=\"img\" aria-hidden=\"true\" style=\"\">\n        <md-tooltip md-direction=\"top\">{{ ctrl.isLegend ? 'toc.label.group.collapse' : 'toc.label.group.expand' | translate }}</md-tooltip>\n    </md-button>\n    \n    <div ng-show=\"ctrl.isLegend\">\n        <div class=\"rv-thslider-legend\"></div>\n        <md-divider></md-divider>\n    </div>\n    <div class=\"rv-thslider-desc\">{{ ctrl.description }}</div>\n    <span class=\"rv-thslider-index\">{{ ctrl.index }}</span>\n</div>";
export declare const PLAY_BAR_TEMPLATE: string;
