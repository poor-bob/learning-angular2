System.register(['angular2/core', './courses.component', './authors.component', './star.component', './like.component', './vote.component', './media.component', './zippy.component', './contact-form.component'], function(exports_1, context_1) {
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
    var core_1, courses_component_1, authors_component_1, star_component_1, like_component_1, vote_component_1, media_component_1, zippy_component_1, contact_form_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (star_component_1_1) {
                star_component_1 = star_component_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            },
            function (vote_component_1_1) {
                vote_component_1 = vote_component_1_1;
            },
            function (media_component_1_1) {
                media_component_1 = media_component_1_1;
            },
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            },
            function (contact_form_component_1_1) {
                contact_form_component_1 = contact_form_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.isActive = true;
                    this.title = "Angular App";
                    this.imageUrl = "http://lorempixel.com/200/200";
                    this.tweet = {
                        totalLikes: 10,
                        liked: false
                    };
                    this.vote = {
                        startingScore: 10,
                        isVotedUp: false,
                        isVotedDown: false
                    };
                    this.media = {
                        title: "Test",
                        imgUrl: "lorempixel.com/200/200",
                        userId: "Test UserID"
                    };
                }
                AppComponent.prototype.onClick = function ($event) {
                    $event.stopPropagation();
                };
                AppComponent.prototype.onDivClick = function () {
                    console.log("Handled by div.");
                };
                AppComponent.prototype.onFavoriteChange = function ($event) {
                    console.log($event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <div class=\"container\">\n            <contact-form></contact-form>\n        </div>\n        \n        ",
                        directives: [courses_component_1.CoursesComponent, contact_form_component_1.ContactFormComponent, authors_component_1.AuthorsComponent, zippy_component_1.ZippyComponent, vote_component_1.VoteComponent, star_component_1.StarComponent, like_component_1.LikeComponent, media_component_1.MediaComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//<votes [score]="vote.startingScore" [isVotedDown]="vote.isVotedDown" [isVotedUp]="vote.isVotedUp"></votes>
//<likes [likes]="tweet.totalLikes" [isLiked]="tweet.liked"></likes>
//<star (change)="onFavoriteChange($event)"></star>
/*
<input type="text" [value]="title" (input)="title = $event.target.value" />
       Preview: {{title}}
       <input type="text" [(ngModel)]="title" />

       <input type="button" (click)="title = ''" value="Clear"/>
*/
/*
<img src="{{imageUrl}}" />
       <courses></courses>
       <authors></authors>
*/
/*
    <div>
            <button class="btn btn-primary"
            [style.backgroundColor]="isActive ? 'blue' : 'gray'">Submit</button>
        </div>
*/
/*
<div (click)="onDivClick()">
            <button (click)="onClick($event)">Submit</button>
        </div>
*/ 
//# sourceMappingURL=app.component.js.map