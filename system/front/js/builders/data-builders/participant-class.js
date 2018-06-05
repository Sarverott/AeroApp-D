module.exports=class participant{
  constructor(person, university, coach){
    this.me=person;
    this.myUniversity=university;
    university.participants.push(this);
    this.myCoach=coach;
    coach.mentees.push(this);
  }
}
