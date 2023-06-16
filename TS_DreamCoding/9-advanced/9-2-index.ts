{
  const obj = {
    name: 'ellie',
  };
  obj.name; // ellie
  obj['name']; // ellie

  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
  };

  type Name = Animal['name']; // string
  const text: Name = 'hello';

  type Gender = Animal['gender']; //'male' | 'female'

  type Keys = keyof Animal; // 'name' | 'age' | 'gender' union type으로 할당
  const key: Keys = 'gender';  // 'name' | 'age' | 'gender' 이 세가지만 할당 가능.

  type Person = {
    name: string;
    gender: Animal['gender']; //'male' | 'female'
  };
  const person: Person = {
    name: 'ellie',
    gender: 'female',
  };
}
