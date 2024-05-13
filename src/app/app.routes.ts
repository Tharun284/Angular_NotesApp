import { Routes } from '@angular/router';
import { NotesListComponent } from '../notes-list/notes-list.component';
import { AddNoteComponent } from '../add-note/add-note.component';
import { NoteDetailComponent } from '../note-detail/note-detail.component';
import { EditNotesComponent } from '../edit-notes/edit-notes.component';

export const routes: Routes = [
  { path: '', component: NotesListComponent },
  { path: 'new', component: AddNoteComponent },
  { path: 'note/:id', component: NoteDetailComponent },
  { path: 'edit/:id', component: EditNotesComponent },
];
