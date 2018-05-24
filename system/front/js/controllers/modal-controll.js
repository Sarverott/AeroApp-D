const $ = require("jquery");
const ipc = require("electron").ipcRender;

const sectionControll = require("./section-controll.js");
const modalBuild = require("../builders/modal-build.js");

module.exports = class modalControll extends sectionControll{
  beforeInit(){
    this.modalBuild = new modalBuild("../../html/templates/modal.html");
  }
  afterInit(){
    $("#modal-container").html(this.modalBuild.printModals([
      {
        id:"error-modal",
        titletext:"wystąpił błąd",
        titlelangtag:"errors.erroroccurred",
        titlesize:4,
        body:"../../html/elements/modals/error.html",
        buttons:[
          {
            text:"zamknij",
            langtag:"common.close",
            classes:[
              "btn-danger"
            ]
          },
          {
            text:"wyślij zgłoszenie",
            langtag:"errors.sendissue",
            classes:[
              "btn-basic"
            ]
          }
        ]
      },
      {
        id:"info-modal",
        titletext:"informacje",
        titlelangtag:"info.informations",
        titlesize:1,
        body:"../../html/elements/modals/info.html",
        buttons:[
          {
            text:"ok",
            langtag:"common.ok",
            classes:[
              "btn-basic"
            ]
          }
        ]
      }
    ]));
  }
}
