{
  /**
   * Enum 여러 상수값을 한곳에 모아서 정의할 수 있게 도와주는 타입
   * but 가능하면 쓰지않는것이 좋다.
   */
  //JavaScript 특정 고정값을 나타낼 때.
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  //서로 연관돼 있지만 따로 묶을 수 있는 타입이 존재하지 않는다.
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ "MONDAY": 0, "TUESDAY": 1, "WEDNESDAY": 2 }) //object를 한번만 정의하여 사용할 수 있게
  const dayOfToday = DAYS_ENUM.MONDAY; //0

  //TypeScript

  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday'
  enum Days { //앞글자만 대문자
    Monday = 1, //기본0
    Tuesday, //1
    Wednesday, //2
    Thursday, //3
    Friday, //4
    Saturday, //5
    Sunday, //6
  }
  console.log(Days.Monday);
  let day = Days.Saturday
  day = Days.Friday;
  day = 1; //🤔❗다시 어떤 숫자든 할당이 가능 타입이 정확히 지정되지 않는다.
  console.log(day)

  //🙆‍♂️union type으로 사용하면 타입을 보장하면서 사용이 가능.
  let dayOfWeek: DaysOfWeek = 'Monday';
  dayOfWeek = 'Tuesday' //union type에 지정된 값만 할당이 가능.
}