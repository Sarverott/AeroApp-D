module.exports=class participantTeam{
/*
  edit (detronized for remake) - 2018-06-07 17:00
*/
//  constructor(participantsArray, coach){
//    var teamCorrection=this.isTeamIncorrect(participantsArray);
//    if(!teamCorrection){
//      this.teamType=setType();
//    }else{
//
//    }
//  }
/*
  edit (detronized for remake) - 2018-06-07 17:00
*/
//  isTeamIncorrect(participantsArray){
//    if(participantsArray.length==this.teamRequirements().count){
//      if(teamRequirements().gender!="N"){
//        if(typeof(teamRequirements().gender)=="Array"){
//          if(teamRequirements().gender.length==participantsArray.length){
//            var tmp=true;
//            for(var i in participantsArray){
//              if(participantsArray[i].gender!=teamRequirements().gender[i]){
//                tmp=false;
//                break;
//              }
//            }
//            if(tmp){
//
//            }else{
//              return "someone in team have inncorrect gender for this competition";
//            }
//          }else{
//            return "wrong number of persons in team";
//          }
//        }else if(typeof(teamRequirements().gender)=="String"){
//          var tmp=true;
//          for(var i in participantsArray){
//            if(participantsArray[i].gender!=teamRequirements().gender){
//              tmp=false;
//              break;
//            }
//          }
//          if(tmp){
//
//          }else{
//            return "someone in team have inncorrect gender for this competition";
//          }
//        }
//      }else{
//
//      }
//    }else{
//      return "wrong number of persons in team";
//    }
//  }
  isTeamReady(){
    var tmp=false;
    for(var i in this.squad){
      if(this.squad[i].myUniversity!=this.university){
        tmp="wrong_university";
        break;
      }
      if(this.teamRequirements().gender=="N"||this.squad[i].me.gender!=this.teamRequirements().gender){
        tmp="wrong_gender";
        break;
      }
    }
    if(tmp=="wrong_university"){
      return false;
    }else if(tmp=="wrong_gender"){
      return false;
    }else{
      if(typeof(this.teamRequirements().count)=="Number"){
        if(this.squad.length==this.teamRequirements().count){
          return true;
        }else{
          return false;
          //wrong number of participants
        }
      }else{
        if(this.squad.length>=this.teamRequirements().count[0]&&this.squad.length<=this.teamRequirements().count[1]){
          return true;
        }else{
          return false;
          //wrong number of participants
        }
      }
    }
  }
  setType(){
    return "rawteam";
  }
  teamRequirements(){
    return {
      count:0,
      gender:"N"
    };
  }
  getStatus(){
    return {
      requirements:teamRequirements(),
      type:setType(),
      squad:this.squad,
      university:this.university,
      coach:this.coach
    };
  }
}
