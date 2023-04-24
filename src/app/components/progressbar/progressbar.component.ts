import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss'],
})
export class ProgressbarComponent {
  @Input() data: { title: string; progress: number; color: string } | null =
    null;

    get progressBarStyle() {
      console.log("call function");
      return {
        width: this.data ? `${this.data.progress}%` : '',
        height: '100%',
        transition: 'width ease-in-out .26s',
        backgroundColor: this.data ? this.data.color : '',
      };
    }


}
