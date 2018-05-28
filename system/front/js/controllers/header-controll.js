const ipc = require('electron').ipcRenderer;
const $ = require('jquery');

const sectionControll=require('./section-controll.js');
const cardControll=require('./card-controll.js')

const buttonBuild = require('../builders/button-build.js');

module.exports = class headerControll extends sectionControll{
  afterInit(){
    var tmp="";
    tmp+=this.cardButtonBuild.printButtons([
      {
        text:"zawody",
        classes:["btn-primary","button-read-card","header-button-item"],
        cardfile:"main",
        langtag:"head.buttons.turnament"
      },
      {
        text:"zawodnicy",
        classes:["btn-primary","button-read-card","header-button-item"],
        cardfile:"participants",
        langtag:"head.buttons.participants"
      },
      {
        text:"trenerzy",
        classes:["btn-primary","button-read-card","header-button-item"],
        cardfile:"coaches",
        langtag:"head.buttons.coaches"
      },
      {
        text:"solistki",
        classes:["btn-primary","button-read-card","header-button-item"],
        cardfile:"solo-woman",
        langtag:"head.buttons.soloistees"
      },
      {
        text:"soliści",
        classes:["btn-primary","button-read-card","header-button-item"],
        cardfile:"solo-man",
        langtag:"head.buttons.solists"
      },
      {
        text:"pary",
        classes:["btn-primary","button-read-card","header-button-item"],
        cardfile:"peers",
        langtag:"head.buttons.pairs"
      },
      {
        text:"trójki",
        classes:["btn-primary","button-read-card","header-button-item"],
        cardfile:"threes",
        langtag:"head.buttons.threes"
      },
      {
        text:"klasyfikacja uczelniana",
        classes:["btn-primary","button-read-card","header-button-item"],
        cardfile:"universities",
        langtag:"head.buttons.universities"
      }
    ]);
    tmp+=this.modalButtonBuild.printButtons([
      {
        text:"Ustawienia",
        classes:['header-button-item', "button-modal-open"],
        target:"#settings",
        langtag:"head.buttons.settings"
      }
    ]);
    tmp+=this.cardButtonBuild.printButtons([
      {
        text:"historia",
        classes:["btn-primary","button-read-card","header-button-item"],
        cardfile:"logs",
        langtag:"head.buttons.history"
      }
    ]);
    $('#header-menu-buttons').html(tmp);
  }
  beforeInit(){
    this.cardButtonBuild=new buttonBuild(function(fillObject){
      var tmp='';
      tmp+='<button type="button" class="btn ';
      tmp+=fillObject.classes.join(" ");
      tmp+='" data-readcard="';
      tmp+=fillObject.cardfile;
      tmp+='"  data-filltext="';
      tmp+=fillObject.langtag;
      tmp+='">';
      tmp+=fillObject.text;
      tmp+='</button>';
      return tmp;
    });
    this.modalButtonBuild=new buttonBuild(function(fillObject){
      var tmp='';
      tmp+='<button type="button" class="btn ';
      tmp+=fillObject.classes.join(" ");
      tmp+='" data-toggle="modal" data-target="';
      tmp+=fillObject.target;
      tmp+='"  data-filltext="';
      tmp+=fillObject.langtag;
      tmp+='">';
      tmp+=fillObject.text;
      tmp+='</button>';
      return tmp;
    });
  }
  addEventListeners(){
    var controller=this;
    $(".button-read-card").off();
    $(".button-read-card").on("click", function(){
      var additonalRequirement=require("../extenders/cards-extenders/"+$(this).data("readcard")+"-card-extender.js");
      window.controllers.cardControll=new cardControll("elements/cards/"+$(this).data("readcard")+".html", "#cards-root", additonalRequirement);
    });
  }
}
