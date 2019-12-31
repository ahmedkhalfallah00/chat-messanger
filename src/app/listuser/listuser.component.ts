import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
  user: User;
  users: any;
  constructor(private userService: UserService) { }
  
    ngOnInit() {
    
      this.userService.read_Users().subscribe(data => {
  
        this.users = data.map(e => {
          return {
           id: e.payload.doc.id,
  
           pseudo: e.payload.doc.data()['pseudo'],

  
          };
        });
        console.log(this.users);
  
      });
    }
  }

