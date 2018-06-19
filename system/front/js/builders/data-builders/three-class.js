const participantTeam=require("./team-class.js");

module.exports=class threeTeam extends participantTeam{
  setType(){
    return "three";
  }
  teamRequirements(){
    return {
      count:3,
      gender:"N"
    }
  }
}
