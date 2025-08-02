import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ContactRoutingModule } from "./contact-routing-module";
import { ContactForm } from "./pages/contact-form/contact-form";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ReactiveFormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatOptionModule } from "@angular/material/core";
import { ListFeedback } from "./pages/list-feedback/list-feedback";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [ContactForm, ListFeedback],
  imports: [
    CommonModule,
    ContactRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatOptionModule,
    MatCardModule,
  ],
})
export class ContactModule {}
