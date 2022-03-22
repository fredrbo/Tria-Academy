import { Component, OnInit } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


   users: User[] = [
    { name: 'Frederico Rabelo', email: 'fred.teste@triasoftware.com.br',
    phone: '+55 (12) 99744-4431' , company: 'Tria Software', imgPath: '../../assets/users/fred.jpg', permit: 'Administrador'},
    { name: 'Frederico Rabelo', email: 'fred.teste@triasoftware.com.br',
    phone: '+55 (12) 99744-4431' , company: 'Tria Software', imgPath: '../../assets/users/fred.jpg', permit: 'Administrador'},
    { name: 'Frederico Rabelo ', email: 'fred.teste@triasoftware.com.br',
    phone: '+55 (12) 99744-4431', company: 'Tria Software', imgPath: '../../assets/users/fred.jpg', permit: 'Administrador'},
    { name: 'Frederico Rabelo', email: 'fred.teste@triasoftware.com.br',
    phone: '+55 (12) 99744-4431' , company: 'Tria Software', imgPath: '../../assets/users/fred.jpg', permit: 'Administrador'},
    { name: 'Frederico Rabelo', email: 'fred.teste@triasoftware.com.br',
    phone: '+55 (12) 99744-4431' , company: 'Tria Software', imgPath: '../../assets/users/fred.jpg', permit: 'Administrador'},
    { name: 'Frederico Rabelo ', email: 'fred.teste@triasoftware.com.br',
    phone: '+55 (12) 99744-4431', company: 'Tria Software', imgPath: '../../assets/users/fred.jpg', permit: 'Administrador'},
    { name: 'Frederico Rabelo ', email: 'fred.teste@triasoftware.com.br',
    phone: '+55 (12) 99744-4431', company: 'Tria Software', imgPath: '../../assets/users/fred.jpg', permit: 'Administrador'},
    { name: 'Frederico Rabelo ', email: 'fred.teste@triasoftware.com.br',
    phone: '+55 (12) 99744-4431', company: 'Tria Software', imgPath: '../../assets/users/fred.jpg', permit: 'Administrador'},
    { name: 'Frederico Rabelo ', email: 'fred.teste@triasoftware.com.br',
    phone: '+55 (12) 99744-4431', company: 'Tria Software', imgPath: '../../assets/users/fred.jpg', permit: 'Administrador'},
    { name: 'Frederico Rabelo ', email: 'fred.teste@triasoftware.com.br',
    phone: '+55 (12) 99744-4431', company: 'Tria Software', imgPath: '../../assets/users/fred.jpg', permit: 'Administrador'},

  ]

  ngOnInit(): void {
  }


  constructor() { }



}
