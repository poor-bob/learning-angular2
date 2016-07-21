import {Component, Input} from 'angular2/core';
import {LikeComponent} from './like.component';


@Component({
    selector: 'media-block',
    template: 
    `
    <div class = "container">
        <div class="media">
            <div class="media-left">
                <a href="#">
                {{title}}
                <img class="media-object" src="{{imgUrl}}" alt="Imgage_not_loaded">
                </a>
            </div>
            <div class="media-body">
                <h4 class=""></h4>
                {{headline}}
                <likes [likes]="likeCount" [isLiked]="isLiked"></likes>
            </div>
        </div>
    </div>
    `,
    directives: [LikeComponent]
})
export class MediaComponent{
    @Input() title;
    @Input() userId;
    @Input() headline;
    @Input() likeCount;
    @Input() isLiked;
    @Input() imgUrl;
}