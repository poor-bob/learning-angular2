import {Component, Input} from 'angular2/core'

@Component({
    selector: 'likes',
    template: 
        `
        <i 
            class="glyphicon glyphicon-heart"
            [style.color]="!isLiked ? '#ccc' : 'deeppink'"
            (click)="onClick($event)">
        </i>
        <span>{{likes}}</span>
    `,
    styles: [`
        .glyphicon-heart {
            color: #ccc;
            cursor: pointer;
        }
    `]

})
export class LikeComponent{
    @Input()likes;
    @Input() isLiked;
    onClick($event){
        this.isLiked ? this.likes -=1 : this.likes +=1;
        this.isLiked = !this.isLiked;
    }
}