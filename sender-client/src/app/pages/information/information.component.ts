import { Component, OnInit } from "@angular/core";

/**
 * Page that shows information
 * for the application.
 */
@Component({
  selector: "app-information",
  templateUrl: "./information.component.html",
  styleUrls: ["./information.component.scss"]
})
export class InformationComponent implements OnInit {
  /**
   * The paragraphs of text to display
   * OBS! Not used at the moment, only using dummy text traight in the HTML
   */
  private paragraphs = {
    par1: {
      titel: "En applikation för bildhatering vid brännskadeolyckor",
      text:
        "Lorem ipsum dolor sit amet, summo postulant evertitur vel ne. Cu erat propriae definiebas duo, sale singulis hendrerit eu duo, vocent mediocritatem sea ei. Te has nisl vocent perpetua, agam porro eu vim, id sed odio ceteros sententiae. Discere accommodare ne eum. Qui possit suscipit ut. Est ut probo dolorem."
    },
    par2: {
      titel: "Med enkelhet och snabbhet i fokus",
      text:
        "Lorem ipsum dolor sit amet, summo postulant evertitur vel ne. Cu erat propriae definiebas duo, sale singulis hendrerit eu duo, vocent mediocritatem sea ei. Te has nisl vocent perpetua, agam porro eu vim, id sed odio ceteros sententiae. Discere accommodare ne eum. Qui possit suscipit ut. Est ut probo dolorem."
    },
    par3: {
      titel: "För säker och högkvalitativ vård",
      text:
        "Lorem ipsum dolor sit amet, summo postulant evertitur vel ne. Cu erat propriae definiebas duo, sale singulis hendrerit eu duo, vocent mediocritatem sea ei. Te has nisl vocent perpetua, agam porro eu vim, id sed odio ceteros sententiae. Discere accommodare ne eum. Qui possit suscipit ut. Est ut probo dolorem."
    }
  };

  constructor() {}

  ngOnInit() {}
}
