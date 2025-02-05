import { Component, computed, OnInit } from '@angular/core';
import { User } from '../../model/model.user';
import { UsersService } from '../../services/users.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { UserAddEditComponent } from '../user-add-edit/user-add-edit.component';

@Component({
  selector: 'app-users',
  imports: [MatCardModule,MatTableModule,MatIconModule,MatButtonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
openUserDialog(element: any) {
if(element){
      this.dialog.open(UserAddEditComponent,{
          width:'500px',
          enterAnimationDuration:'900ms',
          exitAnimationDuration:'900ms',
          disableClose:true,
          data:{
            edit:true,
            user:element
          }
      })
  }else{
    this.dialog.open(UserAddEditComponent,{
      width:'500px',
      enterAnimationDuration:'900ms',
      exitAnimationDuration:'900ms',
      disableClose:true,
      data:{
        edit:false,
        user:null
      }
  })
  }
}
delete(arg0: any) {
throw new Error('Method not implemented.');
}
  displayedColumns:string[]=['id','userName','role', 'action']
users=computed<User[]>(()=>this.us.getUsers())
dataSource!:any
formOpened: any;
ngOnInit(): void {
 this.dataSource=new MatTableDataSource(this.users()) 
}
constructor(private us:UsersService,private dialog  :MatDialog){
    
}
}
