/**
 * Component File for Main Layout
 * @version 1.0
 * @author Alexander Anserud <alean378@student.liu.se>
 */

/* Imports */
import { Component, OnInit } from "@angular/core";

/* Declare route data for all pages (used in menu also) */
export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: "/frontpage", title: "Ny anmälan", icon: "nc-badge", class: "" },
  {
    path: "/fetchcase",
    title: "hämta ärende",
    icon: "nc-single-copy-04",
    class: ""
  },
  {
    path: "/information",
    title: "information",
    icon: "nc-alert-circle-i",
    class: ""
  },
  ,
];

/* Component metadata  */
@Component({
  selector: "app-content",
  templateUrl: "./content.component.html"
})

/* Component Class Holder */
export class ContentComponent implements OnInit {
  ngOnInit() {}
}
