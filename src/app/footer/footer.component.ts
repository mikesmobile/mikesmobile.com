import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
  constructor() {}

  groupOptionsSelect = [];
  ngOnInit() {
    this.groupOptionsSelect = [
      { value: '', label: 'DOOR AND WINDOW SCREENS', group: true },
      { value: '1', label: 'Retractable Screen Doors' },
      { value: '2', label: 'Sliding Screen Doors' },
      { value: '3', label: 'Swinging Screen Doors' },
      { value: '4', label: 'Pet Doors' },
      { value: '5', label: 'Window Screen Repair' },
      { value: '6', label: 'Solar Screens' },
      { value: '', label: 'CHIMNEY SERVICES', group: true },
      { value: '7', label: 'Chimney Inspection' },
      { value: '8', label: 'Chimney Cleaning' },
      { value: '9', label: 'Chimney Repair' },
      { value: '10', label: 'Masonry Services' },
      { value: '11', label: 'Dryer Vent Cleaning' },
      { value: '', label: 'Security Screen Doors and Windows', group: true },
      { value: '12', label: 'Titan Security Screen Doors' },
      { value: '13', label: 'Viewguard' },
      { value: '14', label: 'Tru-View' },
      { value: '15', label: 'Tru-Frame' },
      { value: '16', label: 'Sliding Security Screen Doors' },
      { value: '17', label: 'CRL Guarda Quick Escape' },
      { value: '18', label: 'CRL Guarda Fixed' },
      //{ value: '19', label: 'CRL Guarda Casement' },
      { value: '', label: 'AWNINGS', group: true },
      { value: '20', label: 'Retractable Patio Awnings' },
      { value: '21', label: 'Drop Roll Sunscreens' }
    ];
  }
}
