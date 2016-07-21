import {Component, EventEmitter, Input, Output} from 'angular2/core';

@Component({
    selector: 'star',
    templateUrl: 'app/star.template.html',
    styles: [`
        .glyphicon-star {
            color: orange;
        }
    `],
    directives: []
})
export class StarComponent {
    @Input() isFavorite = true;
    //starValue: String = "glyphicon-star";

    @Output() change = new EventEmitter();
    onClick($event){
        $event.stopPropagation();
        this.switchStar();
        this.change.emit({newValue: this.isFavorite});
    }
    switchStar(){
        this.isFavorite = !this.isFavorite;
        //this.starValue = this.isActive == true ? "glyphicon-star": "glyphicon-star-empty";
    }
    
}