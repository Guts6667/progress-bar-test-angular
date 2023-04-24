import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss'],
})
export class ProgressbarComponent {

  private _data : any= null;


  @Input()
  set data(value : { title: string; progress: number; color: string }){
      this._data = value;
      console.log(value);

  }
  get data(){
    return this._data;
  }


}
