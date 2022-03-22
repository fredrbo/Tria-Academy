import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [
    trigger('snack-visiblity', [
      state('hidden',style({
        opacity: 0,
        bottom: '0px'
      })),
      state('visible',style({
        opacity: 1,
      bottom: '60px'
      })),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-out')),
    ])
  ]
})
export class SnackbarComponent implements OnInit {

  message: string = "O usuário Frederico Rabelo foi adicionado com sucesso."
  snackVisiblity: string = "hidden"

  constructor() { }
  ngOnInit(): void {
  }

   toggleSnack(){
    this.snackVisiblity = this.snackVisiblity === 'hidden' ? 'visible': 'hidden'
  }

}
