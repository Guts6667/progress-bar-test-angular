import { Component } from '@angular/core';

@Component({
  selector: 'app-section-test',
  templateUrl: './section-test.component.html',
  styleUrls: ['./section-test.component.scss'],
})
export class SectionTestComponent {
  public datas: { progress: number; title: string; color: string }[] = [
    {
      progress: 25,
      title: 'Initialisation de la phase de développement',
      color: '#7160E8',
    },
    {
      progress: 50,
      title: 'Avancement de la phase de développement',
      color: '#7160E8',
    },
  ];
  colors = {
    color1: '#7160E8',
    color2: '#60ADE8',
    color3: '#60E8B6',
    color4: '#30DB63',
  };

  handleReset() {
    this.datas.map((data) => {
      data.progress = 0;
      console.log(data);
    });
  }
  incrementBy(amount: number) {
   this.datas =  this.datas.map((data) => {
      let total = data.progress + amount
      if (total <= 100) {
        data.progress += amount;
        if (data.progress < 25) {
          data.color = this.colors.color1;
        }
        if (data.progress > 25) {
          data.color = this.colors.color2;
        }
        if (data.progress > 50) {
          data.color = this.colors.color3;
        }
        if (data.progress > 75) {
          data.color = this.colors.color4;
        }
      }
      return data
    });
  }
}
