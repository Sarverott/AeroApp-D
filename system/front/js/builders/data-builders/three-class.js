const participantTeam=require("./team-class.js");

module.exports=class threesTeam extends participantTeam{
  constructor(){

  }
  setType(){
    this.teamType="three";
  }
}
