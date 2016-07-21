import {Component, Input} from 'angular2/core';

@Component({
    selector: 'votes',
    template:
        `
        <div class="voter">
        <i
            class="glyphicon glyphicon-menu-up vote-button"
            [class.highlighted]="isVotedUp"
            (click)="clickVoteUp()">       

        </i>
        <span>{{score}}</span>
        <i
            class = "glyphicon glyphicon-menu-down vote-button"
            [class.highlighted]="isVotedDown"
            (click)="clickVoteDown()">
        </i>
        </div>
        `,
        styles[`
            .voter {
                width: 20px;
                text-align: center;
                color: #999;
            }

            .vote-count {
                font-size: 1.2em;
            }

            .vote-button {
                cursor: pointer;
            }

            .highlighted {
                font-weight: bold;
                color: orange;
            }
        `]
})
export class VoteComponent {
    @Input() score;
    @Input() isVotedUp: boolean;
    @Input() isVotedDown: boolean;
    clickVoteUp(){
        this.voteHandler(1)
    }
    clickVoteDown(){
        this.voteHandler(-1)
    }
    voteHandler(val: int){
        if (this.isVotedUp || this.isVotedDown){
            this.score += (this.isVotedDown) ? 1: -1
            this.isVotedUp = false;
            this.isVotedDown = false; 
        }else{
            (val > 0) ? this.isVotedUp = true : this.isVotedDown = true;
            this.score += val;
        }
    }
}
