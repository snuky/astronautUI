import { Component, OnInit } from '@angular/core';
import { Astronaut } from 'src/app/shared/astronaut.model';
import { AstronautService } from 'src/app/shared/astronaut.service';

@Component({
  selector: 'app-astronaut-list',
  templateUrl: './astronaut-list.component.html',
  styleUrls: ['./astronaut-list.component.css']
})
export class AstronautListComponent implements OnInit {

  constructor(public service : AstronautService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(emp : Astronaut){
    emp.dateOfBirth = emp.dateOfBirth.split('T')[0];
    this.service.formData = Object.assign({},emp);
  }

  onDelete(id :number){
    if (confirm("DO you really want to delete this record?")){
    this.service.deleteAstronaut(id).subscribe(res =>{
      this.service.refreshList();
      });
  }
  }

  isHeaderVisible(): Boolean {
    return this.service.list.length >0 
  }

}
