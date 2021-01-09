import { Component, OnInit, VERSION } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, pipe } from "rxjs";
import { map, toArray, filter } from "rxjs/operators";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  productList: any = [];
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getAllProduct();
  }
  name = "Angular " + VERSION.major;
  getAllProduct() {
    let apiUrl = "http://sajjadweb.pythonanywhere.com/apiv1/blog_list_api";
    this.http.get(apiUrl).subscribe((respose: any) => {
      console.log(respose);
      this.getAllProduct = respose;
    });
  }
}
