import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from './services/contact.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
})
export class ContactoComponent {
  private formsBuilder = inject(FormBuilder);
  private contactoService = inject(ContactService);
  requestMessage = {
    show: false,
    message: '',
  };
  form: FormGroup;

  constructor() {
    this.form = this.formsBuilder.group({
      nombre: ['', Validators.required],
      correo: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  enviarConsulta() {
    if (this.form.invalid) return;

    const data = this.form.value;
    this.contactoService.sendMessage(data).subscribe({
      next: (res) => {
        if (res.success) {
          this.requestMessage = {
            show: true,
            message: res.message,
          };
          this.form.reset();
          setTimeout(() => {
            this.requestMessage = {
              show: false,
              message: '',
            };
          }, 3000);
          return;
        }
      },
    });
  }
}
