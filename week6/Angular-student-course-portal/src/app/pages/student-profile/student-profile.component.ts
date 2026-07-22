import { Component } from '@angular/core';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  templateUrl: './student-profile.component.html',
  styleUrl: './student-profile.component.css'
})
export class StudentProfileComponent {
  studentName = 'Akshay';
  studentId = 'VLITS-CSE-2026-001';
}
