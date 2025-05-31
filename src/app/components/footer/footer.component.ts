import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
arrOfBlogs=signal<any[]>([{img:"/assets/imgs/packing-150x150.jpg",title:"before you Go",desc:"July 17, 2015"},
  {img:"/assets/imgs/costa-rica-volcano-150x150.jpg",title:"Costa Rica Parks",desc:"June 20, 2015"}])
}
