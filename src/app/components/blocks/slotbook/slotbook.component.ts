import { Component, OnInit, DoCheck, Input } from '@angular/core';
import { SlotserviceService } from '../../../services/http/slotservice.service';

@Component({
  selector: 'app-slotbook',
  templateUrl: './slotbook.component.html',
  styleUrls: ['./slotbook.component.less']
})
export class SlotbookComponent implements OnInit {
    
    @Input() items: any;

    constructor(
        private slotData: SlotserviceService
    ) { }
    
    ngOnInit() {
    }
    
}
