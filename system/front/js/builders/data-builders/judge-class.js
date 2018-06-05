module.exports=class judge{
  constructor(person, type, code){
    this.me=person;
    this.type=type;
    this.typeCode=code;
  }
  getTypeId(){
    return this.typeCode;
  }
  
}
