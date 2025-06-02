import { Component, signal, Signal } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";

import { InfoComponent } from "../shared/components/info/info.component";
import { PopularToursComponent } from "../shared/components/popular-tours/popular-tours.component";
import { FooterComponent } from "../footer/footer.component";
import { DealsAndDiscountsComponent } from "../shared/components/deals-and-discounts/deals-and-discounts.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, InfoComponent, PopularToursComponent, FooterComponent, DealsAndDiscountsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
arrOfElments=signal<any[]>([
  {icon:"pi pi-globe",text:" diverse Destinations",parag:"Habitasse. Nunc mollis erat dapibus in commodo eu nisi. Odio purus magnis lorem."},
  {icon:"pi pi-wallet",text:" Value for Money",parag:"Nulla imperdiet dictum laoreet netus. Habitant ullamcorper. Auctor auctor cras."},
  {icon:"pi pi-camera",text:"	Support Team",parag:"Eu molestie Purus ac. Facilisis hac in metus nunc parturient ornare consequat enim."},
  {icon:"pi pi-calendar-clock",text:"	Fast Booking",parag:"Torquent egestas. Per integer placerat ipsum quam adipiscing vehicula nisi."},
  {icon:"pi pi-comments",text:" 	Support Team",parag:"Turpis accumsan. Proin id ligula suspendisse. Aliquet fringilla, aptent eu dignissim."},
  {icon:"pi pi-heart",text:" Passionate Travel",parag:"Metus cubilia aenean. Fusce, dapibus netus nullam interdum ut vehicula"},

])
 arrOfImgs=[{im:"/assets/imgs/im.jpg",text:"brazil"},
    {im:"/assets/imgs/im3.jpg",text:"canada"},
    {im:"/assets/imgs/im2.jpg",text:"costa rica"},
    {im:"/assets/imgs/im5.jpg",text:"USA"}
  ]
}
