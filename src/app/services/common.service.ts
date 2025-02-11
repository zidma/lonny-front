import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConnectComponent } from '../dialogs/connect/connect.component';

@Injectable({
  providedIn: 'root'
})
export class CommonService  {

  constructor(private dialog:MatDialog) { }
  displayConnectDialog(data:any){
  const _connect=  this.dialog.open(ConnectComponent,{
      width:'450px',
      enterAnimationDuration:'800ms',
      exitAnimationDuration:'800ms',
      disableClose:true,
      data:{
        content:data
      }
    })
    _connect.afterClosed().subscribe(data=>{
      if(data!==false){
        switch(data.component){
          case 'user':
            switch(data.operation){
              case'add':
              break;
              case 'update':
                break;
                default:
                  break;
            }
            break;
          case 'classe':
            switch(data.operation){
              case'add':
              break;
              case 'update':
                break;
                default:
                  break;
            }
              break;
          case 'lesson':
            switch(data.operation){
              case'add':
              break;
              case 'update':
                break;
                default:
                  break;
            }
            break;
          case 'prof':
            switch(data.operation){
              case'add':
              break;
              case 'update':
                break;
                default:
                  break;
            }
            break;
          case 'ecole':
            switch(data.operation){
              case'add':
              break;
              case 'update':
                break;
                default:
                  break;
            }
            break;
            default:
              switch(data.operation){
                case'add':
                break;
                case 'update':
                  break;
                  default:
                    break;
              }
              break;    
        }
      }
    })
  }

}
