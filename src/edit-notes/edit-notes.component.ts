import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NOTES } from '../notes';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-notes',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './edit-notes.component.html',
  styleUrl: './edit-notes.component.css',
})
export class EditNotesComponent {
  id: number;
  note: any;
  editNoteForm: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.note = NOTES.find((i) => i.id === this.id);

    this.editNoteForm = new FormGroup({
      title: new FormControl(this.note.title, Validators.required),
      text: new FormControl(this.note.text),
    });
  }

  saveChanges() {
    if (this.editNoteForm.valid) {
      const index = NOTES.findIndex((note) => note.id === this.id);
      if (index !== -1) {
        NOTES[index] = {
          ...NOTES[index],
          title: this.editNoteForm.value.title,
          text: this.editNoteForm.value.text,
        };
        this.router.navigate(['/note', this.id]);
      }
    }
  }
}
