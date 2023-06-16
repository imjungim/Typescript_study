//Java : Exception
//JavaScript : Error => 전혀 예상하지 못한 이슈

//ex)
//const array = new Array(100000000000000000); //RangeError: Invalid array length

//Error(Exception) Handling : try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === 'not exist!') {
    throw new Error(`file not exist! ${fileName}`)
  }
  return 'file contents'
}

function closeFile(file: string) {
  //
}

 const fileName = 'not exist!';
// console.log(readFile(fileName));
// closeFile(fileName);

// try {
//   console.log(readFile(fileName));
// } catch (error) {
//   console.log(`catched!!`)
// } finally {
//   closeFile(fileName);
//   console.log(`finally!! 무조건 호출 성공실패상관없음`)
//   //마지막에 마무리할 것이 있다면 finally안에서 실행
//   //
// }

// console.log(`!?!`)
// closeFile(fileName)

function run() {
  try {
    //에러가 발생하는 부분만 감싸서 catch, finally
  console.log(readFile(fileName));
} catch (error) {
    console.log(`catched!!`)
    return;
} finally {
  closeFile(fileName);
  console.log(`finally!! 무조건 호출 성공,실패 상관없이 호출!`)
  //마지막에 마무리할 것이 있다면 finally안에서 실행
  //catch에서 return을 했음에도 finally가 호출
}
}

run()