import { Component, inject } from '@angular/core';
import { NOTES } from '../notes';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note-detail',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './note-detail.component.html',
  styleUrl: './note-detail.component.css',
})
export class NoteDetailComponent {
  activeRoute = inject(ActivatedRoute);
  id = Number(this.activeRoute.snapshot.paramMap.get('id'));
  note = NOTES.find((i) => i.id === this.id);

  deleteNote() {
    if (this.note) {
      const index = NOTES.indexOf(this.note, 0);
      if (index > -1) {
        NOTES.splice(index, 1);
        // Assuming you want to navigate back to the list after deleting
        this.router.navigate(['/']);
        // this.router.navigateByUrl('/');
      }
    }
  }
  editNote() {
    // Navigate to the edit page with the note id
    this.router.navigate(['/edit', this.id]);
  }

  constructor(private router: Router) {}
}
