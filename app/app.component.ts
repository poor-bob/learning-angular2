import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {StarComponent} from './star.component';
import {LikeComponent} from './like.component';
import {VoteComponent} from './vote.component';
import {MediaComponent} from './media.component';
import {ZippyComponent} from './zippy.component';
import {ContactFormComponent} from './contact-form.component';

@Component({
    selector: 'my-app',
    template: `
        <div class="container">
            <contact-form></contact-form>
        </div>
        
        `,
    directives: [CoursesComponent, ContactFormComponent, AuthorsComponent, ZippyComponent, VoteComponent, StarComponent, LikeComponent, MediaComponent]
})
export class AppComponent {
    isActive = true;
    title = "Angular App";
    imageUrl = "http://lorempixel.com/200/200";

    onClick($event){
        $event.stopPropagation();
    }
    onDivClick(){
        console.log("Handled by div.");
    }
    onFavoriteChange($event){
        console.log($event);
    }

    tweet = {
        totalLikes: 10,
        liked: false
    }
    vote = {
        startingScore: 10,
        isVotedUp: false,
        isVotedDown: false
    }

    media = {
        title: "Test",
        imgUrl: "lorempixel.com/200/200",
        userId: "Test UserID"
    }
 }

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