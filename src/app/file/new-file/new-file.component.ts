import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-file',
  templateUrl: './new-file.component.html',
  styleUrls: ['./new-file.component.css']
})
export class NewFileComponent implements OnInit {

  form: FormGroup;
  isFileLoad: boolean = false;
  isCoverLoad: boolean = false;

  filePath: string = "Clique aqui para realizar o upload do arquivo.";
  coverPath: string = "Clique aqui para realizar o upload da capa"

  loadingPath: string

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      description: [null, Validators.required],
      extension: ['', Validators.required],
      file: [null, Validators.required],
      cover: [null, Validators.required]
    })
  }
  loadCover(e, input) {
    this.isCoverLoad = true
    this.loadingPath = '../../../assets/users/loading.gif'
    //loading
    setTimeout(() => {
      if (!e.target.file) {
        var reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = (event: any) => {
          this.loadingPath = event.target.result;
        }
      }
    }, 1250)
    console.log(this.form.value)
    this.coverPath = input.substr(12, input.length)//label ajustada

  }


  loadFile(input) {
    this.isFileLoad = true
    this.filePath = input.substr(12, input.length)
  }

}
