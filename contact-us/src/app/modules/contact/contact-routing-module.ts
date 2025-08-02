import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactForm } from "./pages/contact-form/contact-form";
import { ListFeedback } from "./pages/list-feedback/list-feedback";

const routes: Routes = [
  {
    path: "",
    component: ContactForm,
  },
  {
    path: "read-feedbacks",
    component: ListFeedback,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactRoutingModule {}
