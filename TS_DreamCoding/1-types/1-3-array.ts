{
  //Array
  const fruits: string[] = ['🍓', '🍌']
  //또는
  const scores: Array<number> = [1, 2, 3]
  //차이가 있다면
  //object의 불변성을 유지하기 위해 readonly 사용시
  function printArray(fruits: readonly string[]) {
    //fruits.push -> error readonly
  }

  //Tuple : 서로 다른 타입을 함께 가질 수 있는 배열 -> interface, type alias, class로 대체하여 사용
  //❗튜플사용을 권장하지는 않는다.
  // - 데이터에 접근할 때 인덱스로 접근하는게 가독성이 매우 떨어진다.
  let student: [string, number]; //고정된 사이즈의 서로 다른 타입지정
  student = ['name', 23];
  student[0] //name
  student[1] //23
  const [name, age] = student; //react useState
}