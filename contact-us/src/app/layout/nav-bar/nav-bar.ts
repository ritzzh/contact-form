import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.html",
  styleUrl: "./nav-bar.scss",
  standalone: false,
})
export class NavBar {
  constructor(private router: Router) {}

  redirectToFormDisplay() {
    this.router.navigate(["contact-us/read-feedbacks"]);
  }

  redirectToFormFill() {
    this.router.navigate(["contact-us"]);
  }
}
