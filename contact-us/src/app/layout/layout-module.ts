import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LayoutRoutingModule } from "./layout-routing-module";
import { NavBar } from "./nav-bar/nav-bar";
import { RouterModule } from "@angular/router";
import { Layout } from "./layout";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDividerModule } from "@angular/material/divider";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";

@NgModule({
  declarations: [Layout, NavBar],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    RouterModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    MatMenuModule,
    MatButtonModule,
    MatTooltipModule,
  ],
})
export class LayoutModule {}
