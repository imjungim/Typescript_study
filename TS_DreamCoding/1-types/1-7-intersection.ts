{
  /**
   * Intersection Types: & 모든것을 다 합한 and와 같은
   * 다양한 타입을 묶어서 하나
   */

  type Student = {
    name: string;
    score: number;
  }

  type Worker = {
    employeeId: number;
    work: () => void;
  }

  function internWork(person: Student & Worker) { //두가지 타입을 하나로 묶어서 선언.
    console.log(person.name, person.score, person.employeeId, person.work());
  }

  internWork({
    name: 'Hong',
    score: 5,
    employeeId: 123,
    work: () => {}
  })
}