const jsonProcedor=require("../procedors/json-procedor.js");

const person=require("../builders/data-builders/person-class.js");

const coach=require("../builders/data-builders/coach-class.js");
const person=require("../builders/data-builders/participant-class.js");
const judge=require("../builders/data-builders/judge-class.js");
const university=require("../builders/data-builders/university-class.js");

const three=require("../builders/data-builders/three-class.js");
const pair=require("../builders/data-builders/pair-class.js");
const solistMan=require("../builders/data-builders/solist-man-class.js");
const solistWoman=require("../builders/data-builders/solist-woman-class.js");

module.exports=class tournamentControll{
  constructor(judgeTypes){
    this.judgeTypes=judgeTypes;
    this.people=[];
    this.universities=[];
    this.judges=[];
    this.teams=[];
    this.participants=[];
    this.coaches=[];
    this.scoreObject={};
  }
  addCoach(firstname, lastname, gender){
    this.coaches.push(new coach(addPerson(firstname, lastname, gender)));
  }
  addPerson(firstname, lastname, gender){
    var branNewPerson=new person(firstname, lastname, gender);
    this.people.push(branNewPerson);
    return branNewPerson;
  }
  addJudge(firstname, lastname, gender, type){
    this.judges.push(new judge(addPerson(firstname, lastname, gender), type));
  }
  addUniversity(name, address){
    this.universities.push(new university(name, address));
  }
  addParticipant(firstname, lastname, gender, university){
    this.participants.push(new participant(addPerson(firstname, lastname, gender), university));
  }
  addTeam(team){
    switch(team.type){
      case "three":
        new three();
      break;
      case "pair":
        new pair();
      break;
      case "solo-man":
        new solistMan();
      break;
      case "solo-woman":
        new solistWoman();
      break;
      case ""
      default:
        throw "unregistered team type";
    }
  }
  getUniversities(){

  }
  getTeamsFromUniversity(university){
    return university.teams;
  }
  getTeams(type=false, university=false){
    if(type){
      if(university){

      }else{

      }
    }else{
      if(university){
        this.
      }else{
        return this.teams;
      }
    }
  }
}
