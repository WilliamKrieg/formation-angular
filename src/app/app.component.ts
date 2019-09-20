import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public formation = false;
  public timeRemaining = 0;
  public timeInterval;

  public startAndStopFormation(statut: boolean = false) {
    this.formation = statut;
    if (this.formation) {
      this.timeRemaining = 20;
      this.timeInterval = setInterval(() => {
        this.timeRemaining--;
        if (this.timeRemaining === 0) {
          this.formation = false;
          window.clearInterval(this.timeInterval);
        }
      }, 1000);
    }
  }
}
