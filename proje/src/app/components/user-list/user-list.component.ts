import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { User } from 'src/app/user';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/services/registration.service';
import { extend, Internationalization } from '@syncfusion/ej2-base';
import {
  ScheduleComponent, EventSettingsModel, View, TimelineMonthService,
  ResizeService, EventRenderedArgs, DragAndDropService, CellTemplateArgs, getWeekNumber, TimeScaleModel,getWeekLastDate
} from '@syncfusion/ej2-angular-schedule';
import { headerRowData } from './data';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css'],
    providers: [TimelineMonthService,ResizeService,DragAndDropService]
})
export class UserListComponent implements OnInit {

  public scheduleObj: ScheduleComponent;
  public selectedDate: Date = new Date(2018, 0, 1);
  public eventSettings: EventSettingsModel = { dataSource: <Object[]>extend([], headerRowData, null, true) };
  public currentView: View = 'TimelineMonth';
  public instance: Internationalization = new Internationalization();
  public timeScale: TimeScaleModel = {
      enable: true,
      slotCount: 4 
  };

  getMonthDetails(value: CellTemplateArgs): string {
    return this.instance.formatDate((value as CellTemplateArgs).date, { skeleton: 'yMMMM' });
}

getWeekDetails(value: CellTemplateArgs): string {
    return 'Week ' + getWeekNumber(getWeekLastDate(value.date, 0));
}     
getMajorTime(date: Date): string {
     return this.instance.formatDate(date, { skeleton: 'ms' }).replace(':00', '');
}
getMinorTime(date: Date): string {
    return this.instance.formatDate(date, { skeleton: 'ms' }).replace(':00', '');
}
getDateHeaderText(value: Date) :string {
    return this.instance.formatDate(value, { skeleton: 'Ed' });
};
onEventRendered(args: EventRenderedArgs): void {
    const categoryColor: string = args.data.CategoryColor as string;
    if (!args.element || !categoryColor) {
        return;
    }
    if (this.currentView === 'Agenda') {
        (args.element.firstChild as HTMLElement).style.borderLeftColor = categoryColor;
    } else {
        args.element.style.backgroundColor = categoryColor;
    }
}

  constructor(private userService:UserService,
    private alertifyService:AlertifyService,
    private registrationService:RegistrationService,
    private router:Router) { }
    users:User[]
    filterText = ''


    
  ngOnInit(): void {
    this.getAllUser()
    console.log(this.getAllUser())
    
  }



  isLoggedIn() {
     return this.registrationService.isLoggedIn();
  }

  getAllUser() {
      this.userService.getAllUsers().subscribe(data=>{
        
        this.users = data
      })
  }

  deleteUser(id:number) {
    this.userService.deleteUser(id).subscribe(data=>{
      this.getAllUser();
    },
    
    error=>console.log(error))
  }

  userDetail(event:any, id:number) { 
    if(event!=null && event.target.nodeName=='SPAN'){
      event.preventDefault();
      return;
    }

    this.router.navigate(['details',id])
  }

 



}
