import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Layout } from "./layout";

const routes: Routes = [
  {
    path: "",
    component: Layout,
    children: [
      {
        path: "",
        redirectTo: "contact-us",
        pathMatch: "full",
      },
      {
        path: "contact-us",
        loadChildren: () =>
          import("../modules/contact/contact-module").then(
            (m) => m.ContactModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
