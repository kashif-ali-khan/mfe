import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from '@angular/material/list';


@Component({
  selector: 'app-signal',
  imports: [FormsModule, MatButtonModule, MatListModule],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss'
})
export class SignalComponent {

  todos = signal<string[]>([]);
  name = ''
  insertElement(value:string) {
   this.todos.update((prev) => [...prev, value]); 
   this.name = ''; 
    
  }

}
