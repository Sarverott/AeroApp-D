module.exports = class buttonBuild{
  constructor(skeleton){
    this.fillSkeleton=skeleton
  }
  printButtons(dataObjectsArray){
    var tmp="";
    for(var i in dataObjectsArray){
      tmp+=this.fillSkeleton(dataObjectsArray[i]);
    }
    return tmp;
  }
}
