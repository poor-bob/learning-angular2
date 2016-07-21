System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var VoteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            VoteComponent = (function () {
                function VoteComponent() {
                }
                VoteComponent.prototype.clickVoteUp = function () {
                    this.voteHandler(1);
                };
                VoteComponent.prototype.clickVoteDown = function () {
                    this.voteHandler(-1);
                };
                VoteComponent.prototype.voteHandler = function (val) {
                    if (this.isVotedUp || this.isVotedDown) {
                        this.score += (this.isVotedDown) ? 1 : -1;
                        this.isVotedUp = false;
                        this.isVotedDown = false;
                    }
                    else {
                        (val > 0) ? this.isVotedUp = true : this.isVotedDown = true;
                        this.score += val;
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VoteComponent.prototype, "score", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], VoteComponent.prototype, "isVotedUp", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], VoteComponent.prototype, "isVotedDown", void 0);
                VoteComponent = __decorate([
                    core_1.Component({
                        selector: 'votes',
                        template: "\n        <div class=\"voter\">\n        <i\n            class=\"glyphicon glyphicon-menu-up vote-button\"\n            [class.highlighted]=\"isVotedUp\"\n            (click)=\"clickVoteUp()\">       \n\n        </i>\n        <span>{{score}}</span>\n        <i\n            class = \"glyphicon glyphicon-menu-down vote-button\"\n            [class.highlighted]=\"isVotedDown\"\n            (click)=\"clickVoteDown()\">\n        </i>\n        </div>\n        ",
                        styles: ["\n            .voter {\n                width: 20px;\n                text-align: center;\n                color: #999;\n            }\n\n            .vote-count {\n                font-size: 1.2em;\n            }\n\n            .vote-button {\n                cursor: pointer;\n            }\n\n            .highlighted {\n                font-weight: bold;\n                color: orange;\n            }\n        "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], VoteComponent);
                return VoteComponent;
            }());
            exports_1("VoteComponent", VoteComponent);
        }
    }
});
//# sourceMappingURL=vote.component.js.map