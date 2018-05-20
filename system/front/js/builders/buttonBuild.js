class buttonBuild{
  constructor(skeleton){
    this.fillSkeleton=skeleton
  }
  printButtons(dataObjectsArray){
    var tmp="";
    for(i in dataObjectsArray){
      tmp+=fillSkeleton(dataObjectsArray[i]);
    }
    return tmp;
  }
}
