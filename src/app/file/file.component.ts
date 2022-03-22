import { Component, OnInit } from '@angular/core';
import { File } from './file.model';
@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

  files: File[] = [
    {
      name: "Acessibilidade na Web", date: "13/10/2021",
      tags: [
        { id: 9, label: 'Livros' },
        { id: 4, label: 'Tria Software' },
        { id: 1, label: 'Outubro' },
        { id: 11, label: 'Web' },
        { id: 7, label: 'Versão' }],
      extension: "PDF",
      fileName: "Arquivo 6.pdf"
    },

    {
      name: "Acessibilidade na Web", date: "13/10/2021",
      tags: [
        { id: 9, label: 'Livros' },
        { id: 4, label: 'Tria Software' }],
      extension: "PDF",
      fileName: "Arquivo 5.pdf"
    },

    {
      name: "Acessibilidade na Web", date: "13/10/2021",
      tags: [
        { id: 9, label: 'Livros' },
        { id: 4, label: 'Tria Software' },
        { id: 1, label: 'Outubro' }],
      extension: "PDF",
      fileName: "Arquivo 4.pdf"
    },

    {
      name: "Acessibilidade na Web", date: "13/10/2021",
      tags: [
        { id: 9, label: 'Livros' }],
      extension: "PDF",
      fileName: "Arquivo 3.pdf"
    },

    {
      name: "Acessibilidade na Web", date: "13/10/2021",
      tags: [
        { id: 9, label: 'Livros' },
        { id: 4, label: 'Tria Software' }],
      extension: "PDF",
      fileName: "Arquivo 2.pdf"
    },

    {
      name: "Acessibilidade na Web", date: "13/10/2021",
      tags: [
        { id: 9, label: 'Livros' },
        { id: 4, label: 'Tria Software' },
        { id: 1, label: 'Outubro' }],
      extension: "PDF",
      fileName: "Arquivo 1.pdf"
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

  tags = [
    "#8D1818", "#CB6E2B",
    "#CB9E2B", "#A6CB2B",
    "#2BCB3B", "#2BCB9B",
    "#2BA5CB", "#2B88CB",
    "#2B4ECB", "#5E2BCB",
    "#A12BCB", "#CB2BBB",
  ]

  getCor(id: number): string {
    let color = this.tags[id - 1]
    return color
  }
}
