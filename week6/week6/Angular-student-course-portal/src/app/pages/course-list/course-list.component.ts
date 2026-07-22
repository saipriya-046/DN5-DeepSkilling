import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [NgFor, NgIf, CourseCardComponent],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent implements OnInit {
  isLoading = true;
  selectedCourseId: number | null = null;

  courses: Course[] = [
    { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed' },
    { id: 2, name: 'Database Systems', code: 'CS102', credits: 3, gradeStatus: 'pending' },
    { id: 3, name: 'Operating Systems', code: 'CS103', credits: 4, gradeStatus: 'failed' },
    { id: 4, name: 'Computer Networks', code: 'CS104', credits: 3, gradeStatus: 'passed' },
    { id: 5, name: 'Web Technologies', code: 'CS105', credits: 2, gradeStatus: 'pending' }
  ];

  ngOnInit(): void {
    // Simulated async load, per HandsOn 3 Task 1 spec
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  // trackBy avoids re-rendering every card on array changes -- Angular
  // only re-renders items whose identity (id) actually changed.
  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }

  onEnroll(courseId: number): void {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }
}
