import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Eugenio";
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  PI = Math.PI;
  salary = 1600;
  game = {
    name: "The legend of Zelda",
    age: 1988,
    company: "Nintendo"
  };
}
