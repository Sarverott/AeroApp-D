const ipc = require('electron').ipcRenderer;
const $ = require('jquery');

const sectionControll=require('./section-controll.js');

const buttonBuild = require('../builders/button-build.js');

module.exports = class headerControll extends sectionControll{
  afterInit(){
    var tmp="";
    tmp+=this.cardButtonBuild.printButtons([
      {
        text:"zawody",
        classes:["btn-primary","button-read-card","header-button-item"],
        cardfile:"main.html",
        langtag:"head.buttons.turnament"
      },
      {
        text:"zawodnicy",
        classes:[],
        cardfile:"participants.html",
        langtag:"head.buttons.participants"
      },
      {
        text:"trenerzy",
        classes:[],
        cardfile:"coaches.html",
        langtag:"head.buttons.coaches"
      },
      {
        text:"solistki",
        classes:[],
        cardfile:"solo_woman.html",
        langtag:"head.buttons.soloistees"
      },
      {
        text:"soliści",
        classes:[],
        cardfile:"solo_man.html",
        langtag:"head.buttons.solists"
      },
      {
        text:"pary",
        classes:[],
        cardfile:"peers.html",
        langtag:"head.buttons.pairs"
      },
      {
        text:"trójki",
        classes:[],
        cardfile:"threes.html",
        langtag:"head.buttons.threes"
      },
      {
        text:"klasyfikacja uczelniana",
        classes:[],
        cardfile:"universities.html",
        langtag:"head.buttons.universities"
      }
    ]);
    tmp+=this.modalButtonBuild.printButtons([
      {
        text:"Ustawienia",
        classes:[],
        target:"#settings",
        langtag:"head.buttons.settings"
      }
    ]);
    tmp+=this.cardButtonBuild.printButtons([
      {
        text:"historia",
        classes:["btn-primary","button-read-card","header-button-item"],
        cardfile:"logs.html",
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
}
