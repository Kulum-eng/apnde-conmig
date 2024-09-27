import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { StudentComponent } from '../student/student.component';
import { StudentService, Student } from '../../services/student.service';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, CardComponent, StudentComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  students : Student[] = [];
  constructor(private studentService : StudentService){}

  receiveMessage($event:string){
    alert($event)
  }

  addStudent() {
    let student : Student = {
      firstName : "ali",
      lastName : "lopez",
      age : 40
    }
    this.studentService.addStudent(student)
  }

  getAll() {
    this.students = this.studentService.getStudents();
  }
}
