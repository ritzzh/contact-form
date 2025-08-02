import { DatePipe } from "@angular/common";
import { Component, Inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-maximized-view",
  templateUrl: "./maximized-view.html",
  styleUrls: ["./maximized-view.scss"],
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    DatePipe,
  ],
})
export class MaximizedView {
  constructor(
    public dialogRef: MatDialogRef<MaximizedView>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}
