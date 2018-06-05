const coach=require("../builders/data-builders/coach-class.js");
const person=require("../builders/data-builders/person-class.js");
const judge=require("../builders/data-builders/judge-class.js");

const university=require("../builders/data-builders/university-class.js");

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
  addCoach(firstname, lastname){
    this.coaches.push(new coach(addPerson(firstname, lastname)));
  }
  addPerson(firstname, lastname){
    var branNewPerson=new person(firstname, lastname);
    this.people.push(branNewPerson);
    return branNewPerson;
  }
  addJudge(firstname, lastname, type){
    jsonProcedor.jsonRead()
    this.judges.push(new judge(addPerson(firstname, lastname), type));
  }
}
