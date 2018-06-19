const participantTeam=require("./team-class.js");

module.exports=class solistWomanTeam extends participantTeam{
  setType(){
    return "solo-woman";
  }
  teamRequirements(){
    return {
      count:1,
      gender:"F"
    }
  }
}
