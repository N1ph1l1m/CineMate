import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-content-switcher',
  imports: [],
  templateUrl: './content-switcher.html',
  styleUrl: './content-switcher.scss'
})
export class ContentSwitcher {
@Input() contentItems!:any
@Output() selectionChange = new EventEmitter<string>()

selectedValue:string = '';


  ngOnInit() {
    if (this.contentItems && this.contentItems.items.length > 0) {
      this.selectedValue = this.contentItems.items[0].value;
      this.selectionChange.emit(this.selectedValue);
    }
  }

onSelect(value:string){
  this.selectedValue = value;
  this.selectionChange.emit(value)
}

}
