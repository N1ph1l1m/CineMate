import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonDetailServices } from '../../../data/services/person-detail/person-detail-services';
import { IPersonDetail } from '../../../interfaces/person-detail.interface';
import { ImagePipePipe } from '../../../pipes/image-pipe/image-pipe-pipe';
@Component({
  selector: 'app-person-detail',
  imports: [ImagePipePipe],
  templateUrl: './person-detail.html',
  styleUrl: './person-detail.scss'
})
export class PersonDetail {
route = inject(ActivatedRoute)
personDetailServices = inject(PersonDetailServices)
personDetailData?:IPersonDetail;
personId:string|null  = null

ngOnInit(){
  this.personId = this.route.snapshot.paramMap.get('id')
  this.personDetailServices.getPersonDetail(this.personId).subscribe((val:any)=>{
    console.log(val)
    this.personDetailData = val;
  })
}
}
