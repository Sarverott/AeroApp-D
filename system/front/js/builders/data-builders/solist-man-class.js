const participantTeam=require("./team-class.js");

module.exports=class solistManTeam extends participantTeam{
  setType(){
    return "solo-man";
  }
  teamRequirements(){
    return {
      count:1,
      gender:"M"
    }
  }
}
