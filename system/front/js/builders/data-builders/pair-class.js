const participantTeam=require("./team-class.js");

module.exports=class pairTeam extends participantTeam{
  setType(){
    return "pair";
  }
  teamRequirements(){
    return {
      count:2,
      gender:["M", "F"]
    }
  }
}
