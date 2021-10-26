import { Component } from '@angular/core';
import { Aluno } from './model/arquivo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'agenda';
  alunos = [
    new Aluno('Nilzilene Simas de Araujo','3312120','Analise e Desenvolvimento de sistemas', '12/01/1986'),
    new Aluno('Gabriel','1319','Engenharia de Software', '13/11/1989'),
    new Aluno('Anne','1234','Analise e Desenvolvimento de sistemas', '12/05/1990'),
    new Aluno('Pamela','1234','Direito', '15/06/2000'),
    new Aluno('Meg','1234','Medicina', '05/09/2000')
  ]
}
