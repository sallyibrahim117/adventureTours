import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-deals-and-discounts',
  standalone: true,
  imports: [],
  templateUrl: './deals-and-discounts.component.html',
  styleUrl: './deals-and-discounts.component.scss'
})
export class DealsAndDiscountsComponent {
 allimgs=signal<any[]>([{im:"/assets/imgs/costa-rica-531x354.jpg",name:"Discover Costa Rica",
    parag:"Platea rutrum. Enim quam montes Porttitor nam,",price:"299",oldPrice:"111"}
    ,
  {im:"/assets/imgs/tropical-rainforest-parrot-531x354.jpg",name:"Amazon Cruise",
    parag:"Mattis interdum nunc massa. Velit. Nonummy penatibus",price:"8952"}
    ,
    {im:"/assets/imgs/lake-tahoe-531x354.jpg",name:"Lake Tahoe Adventure",
    parag:"Magna. Lectus. Ligula habitasse ut morbi velit",price:"258",oldPrice:"211"}
    ,
    {im:"/assets/imgs/lake-moraine-531x354.jpg",name:"Canadian Rockies",
    parag:"Semper penatibus bibendum lorem magnis aenean rutrums",price:"957"}

  ])
}
