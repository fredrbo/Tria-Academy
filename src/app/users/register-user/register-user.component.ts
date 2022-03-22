import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {


  form: FormGroup;
  text: string = "Clique aqui para realizar o upload da imagem."
  imgPath: string;
  isLoad: boolean;
  placeholder: string =" Selecione o tipo de permissão do usuário"


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, Validators.required],
      company: [null, Validators.required],
      permit: [ '', Validators.required],
      img: [null, Validators.required],
    })

  }

f
  load(e): string {
    this.isLoad = true
    this.imgPath = '../../../assets/users/loading.gif'
    //loading
    setTimeout(() => {
      if (!e.target.file) {
        var reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = (event: any) => {
          this.imgPath = event.target.result;
        }
      }
    },1250)

    this.text = this.form.value.img.substr(12, this.form.value.img.length)//formantando path string
    console.log(this.form.value)
    return (this.text)
  }

}
