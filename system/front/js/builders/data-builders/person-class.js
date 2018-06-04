class person{
  constructor(){

  }
  setBasics(id){
    this.personId=id;
    var tmpDate=new Date();
    var tmp=tmpDate.now();
    this.created=tmp;
    this.updated=tmp;
  }
  update(){
    var tmpDate=new Date();
    var tmp=tmpDate.now();
    this.updated=tmp;
  }
  setNames(firstname, lastname){
    this.names={};
    this.names.firstname=firstname;
    this.names.lastname=lastname;
  }
  getNames(){
    return this.names;
  }
  printNames(){
    return this.names.firstname+" "+this.names.lastname;
  }
}
