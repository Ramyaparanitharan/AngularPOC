import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

  @Injectable({
        providedIn : "root"
    })

export class Connectservice {
 apiurl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";
 constructor(private http : HttpClient){}
 loadDetails() {
    return this.http.get(this.apiurl)
 }
}
