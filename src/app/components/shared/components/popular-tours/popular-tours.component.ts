import { Component, signal } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
@Component({
  selector: 'app-popular-tours',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './popular-tours.component.html',
  styleUrl: './popular-tours.component.scss'
})
export class PopularToursComponent {
products:any[] | undefined;

    responsiveOptions: any[] | undefined;

   allimgs=signal<any[]>([{im:"/assets/imgs/1.jpg",name:"niagara falls",
    parag:"Nullam. Facilisi tempus dignissim felis adipiscing vestibulum nam mollis faucibus",price:"299"}
    ,
  {im:"/assets/imgs/2.jpg",name:"hot air balloning",
    parag:"Nullam. Facilisi tempus dignissim felis adipiscing vestibulum nam mollis faucibus",price:"8952"}
    ,
    {im:"/assets/imgs/3.jpg",name:"surfing",
    parag:"Nullam. Facilisi tempus dignissim felis adipiscing vestibulum nam mollis faucibus",price:"258"}
    ,
    {im:"/assets/imgs/4.jpg",name:"paragliding",
    parag:"Nullam. Facilisi tempus dignissim felis adipiscing vestibulum nam mollis faucibus",price:"957"}
     ,
    {im:"/assets/imgs/6.jpg",name:"rafting",
    parag:"Nullam. Facilisi tempus dignissim felis adipiscing vestibulum nam mollis faucibus",price:"997"}
     ,
    {im:"/assets/imgs/5.jpg",name:"niagara falls",
    parag:"Nullam. Facilisi tempus dignissim felis adipiscing vestibulum nam mollis faucibus",price:"107"}
  ])


    ngOnInit() {


        this.responsiveOptions = [
            {
                breakpoint: '1199px',
                numVisible: 3,
                numScroll: 1
            },
            {
                breakpoint: '991px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }


}
