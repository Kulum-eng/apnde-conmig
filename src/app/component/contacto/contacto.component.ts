import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  map: L.Map | undefined;

  ngOnInit(): void {
    this.initMap();
  }

  initMap(): void {
    
    this.map = L.map('map', {
      center: [16.749, -93.1165], 
      zoom: 13, 
      scrollWheelZoom: true 
    });

   
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(this.map);
  }
}
