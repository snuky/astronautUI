import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AstronautService } from 'src/app/shared/astronaut.service';

@Component({
  selector: 'app-astronaut',
  templateUrl: './astronaut.component.html',
  styleUrls: ['./astronaut.component.css']
})
export class AstronautComponent implements OnInit {

  constructor(public service : AstronautService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form? :NgForm){
    if (form != null){
      form.resetForm();
    }
    this.service.formData = {
      id : null,
      name : '',
      surname : '',
      superpower : '',
      dateOfBirth : null
    }
  }

  onSubmit(form : NgForm){
    if (form.value.id == null){
    this.insertRecord(form);
    }
    else{
      this.updateRecord(form);
    }
  }


  insertRecord(form: NgForm){
    this.service.postAstronaut(form.value).subscribe(res =>{
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  updateRecord(form: NgForm){
    this.service.updateAstronaut(form.value).subscribe(res =>{
      this.resetForm(form);
      this.service.refreshList();
    });
  }
}
