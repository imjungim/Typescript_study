Array;

type Student = {
  passed: boolean;
}

const student: Student[] = [{ passed: true }, { passed: true }, { passed: false }]
const result = student.every(student => {
  return student.passed;
})
console.log(result); 