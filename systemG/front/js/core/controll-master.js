const ipc = require('electron').ipcRenderer;
const $ = require('jquery');
const loadingControll = require("../controllers/loading-controll.js")
console.log("CONTROLL MASTER ready")
window.controllMaster={
  loadingControll: new loadingControll("elements/loading-screen.html", "body")
}
/*
var controllers={};
var builders={};
var phase={status:'raw',ready:false};

function startSystem(){
  phasesSupervisor([
    {
      timing:1000,
      eventType:'timer',
      eventFunct:function(){

      }
    },
    {
      eventType:'permament',
      eventFunct:function(){

      }
    }
  ]);
}
function phasesSupervisor(eventObjectArray){
  if(eventObjectArray.length){
    var tmp=eventObjectArray[0];
    switch(tmp.eventType){
      case "min-timer":
      tmp.eventFunct(phase, controllers, builders)
      eventObjectArray=eventObjectArray.slice(1);
      setTimeout(function(){phasesSupervisor(eventObjectArray)}, tmp.timing);
      break;
      case "timer":
      tmp.eventFunct(phase, controllers, builders)
      eventObjectArray=eventObjectArray.slice(1);
      setTimeout(function(){phasesSupervisor(eventObjectArray)}, tmp.timing);
      break;
      case "max-timer":
      tmp.eventFunct(phase, controllers, builders)
      eventObjectArray=eventObjectArray.slice(1);
      setTimeout(function(){phasesSupervisor(eventObjectArray)}, tmp.timing);
      break;
      case "permament":
      tmp.eventFunct(phase, controllers, builders)
      eventObjectArray=eventObjectArray.slice(1);
      break;
    }
  }
}
*/
