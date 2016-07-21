System.register(['angular2/core', './like.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, like_component_1;
    var MediaComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            }],
        execute: function() {
            MediaComponent = (function () {
                function MediaComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MediaComponent.prototype, "title", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MediaComponent.prototype, "userId", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MediaComponent.prototype, "headline", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MediaComponent.prototype, "likeCount", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MediaComponent.prototype, "isLiked", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MediaComponent.prototype, "imgUrl", void 0);
                MediaComponent = __decorate([
                    core_1.Component({
                        selector: 'media-block',
                        template: "\n    <div class = \"container\">\n        <div class=\"media\">\n            <div class=\"media-left\">\n                <a href=\"#\">\n                {{title}}\n                <img class=\"media-object\" src=\"{{imgUrl}}\" alt=\"Imgage_not_loaded\">\n                </a>\n            </div>\n            <div class=\"media-body\">\n                <h4 class=\"\"></h4>\n                {{headline}}\n                <likes [likes]=\"likeCount\" [isLiked]=\"isLiked\"></likes>\n            </div>\n        </div>\n    </div>\n    ",
                        directives: [like_component_1.LikeComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MediaComponent);
                return MediaComponent;
            }());
            exports_1("MediaComponent", MediaComponent);
        }
    }
});
//# sourceMappingURL=media.component.js.map