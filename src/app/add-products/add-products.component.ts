import { Component } from '@angular/core';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {
  title =""
  description=""
  price=""
  category=""
  image=""
  rating=""
  rate=""
  count=""
  seller=""
  quantity=""



  readValue = () =>
  {
    let data:any = {"title":this.title,"price":this.price,"description":this.description,"category":this.category,"image":this.image,"rating":{"rate":this.rate,"count":this.count},"seller":this.seller,"quantity":this.quantity}
    console.log(data)
  }


}
