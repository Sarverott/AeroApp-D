module.exports=class university{
  constructor(name, address){
    this.address=address;
    this.name=name;
    this.participants=[];
    this.coatches=[];
    this.teams=[];
  }
  addStudent(participantObject){
    var tmpFlag=true;
    for(var i in this.participants){
      if(participantObject===this.participants[i]){
        tmpFlag=false;
      }
    }
    if(tmpFlag){
      this.participants.push(participantObject);
      return true;
    }else{
      return false;
    }
  }
  addCoatch(coatchObject){
    var tmpFlag=true;
    for(var i in this.coatches){
      if(coatchObject===this.coatches[i]){
        tmpFlag=false;
      }
    }
    if(tmpFlag){
      this.coatches.push(coatchObject);
      return true;
    }else{
      return false;
    }
  }
  addTeam(teamObject){
    var tmpFlag=true;
    for(var i in this.teams){
      if(teamObject===this.teams[i]){
        tmpFlag=false;
      }
    }
    if(tmpFlag){
      this.teams.push(teamObject);
      return true;
    }else{
      return false;
    }
  }
  deleteCoach(hookVar){
    switch(typeof(hookVar)){
      case "number":
        this.coaches.splice(hookVar, 1);
      break;
      case "object":
        for(var i in this.coaches){
          if(hookVar===this.coaches[i]){
            this.coaches.splice(i, 1);
            break
          }
        }
      break;
    }
  }
  deleteTeam(hookVar){
    switch(typeof(hookVar)){
      case "number":
        this.teams.splice(hookVar, 1);
      break;
      case "object":
        for(var i in this.teams){
          if(hookVar===this.teams[i]){
            this.teams.splice(i, 1);
            break
          }
        }
      break;
    }
  }
  deleteStudent(hookVar){
    switch(typeof(hookVar)){
      case "number":
        this.participants.splice(hookVar, 1);
      break;
      case "object":
        for(var i in this.participants){
          if(hookVar===this.participants[i]){
            this.participants.splice(i, 1);
            break
          }
        }
      break;
    }
  }
}
