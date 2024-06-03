import { Component } from '@angular/core';
import { TodosService } from '../services/todosservice.service';
import { UserDetailsService } from '../services/user-details.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


interface User {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})

export class TodosComponent {
  users: User[] = [];
  filteredUsers: User[] = [];
  searchTerm: string = '';
  selectedUser: User | null = null;

  constructor(private todosService: TodosService, private userDetails: UserDetailsService ) {}

  ngOnInit() {
    this.todosService.getTodos().subscribe(data => {
      this.users = data;
      this.filteredUsers = data;
    });
  }


  onSearch() {
    if (this.searchTerm.trim() === '') {
      this.filteredUsers = this.users;
    } else {
      this.filteredUsers = this.users.filter(user => 
        user.title.toLowerCase().includes(this.searchTerm.toLowerCase()));
    }
  }
  showDetail(id: number) {
    this.userDetails.getUser(id).subscribe(data => {
      this.selectedUser = data;
    });
  }
  
  hideDetail() {
    this.selectedUser = null;
  }
}
