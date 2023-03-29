{
  /**
   * Let's make a calculator
   */

  // function calculate(calc: string, num1: number, num2: number): number {
  //   if (calc === 'add') {
  //     return num1 + num2
  //   } else if (calc === 'substract') {
  //     return num1 - num2
  //   } else if (calc === 'multiply') {
  //     return num1 * num2
  //   } else if (calc === 'divide') {
  //     return num1 / num2
  //   } else if (calc === 'remainder') {
  //     return num1 % num2
  //   }
  // }

  type Command = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';
  
  function calculate(calc: Command, num1: number, num2: number):number {
    switch (calc) {
      case 'add':
        return num1 + num2;
      case 'substract':
        return num1 - num2;
      case 'multiply':
        return num1 * num2;
      case 'divide':
        return num1 / num2;
      case 'remainder':
        return num1 % num2;
      default:
        throw Error('unknown command');
        
    }
  }
  console.log(calculate('add', 1, 3))
  console.log(calculate('substract', 3, 1))
  console.log(calculate('multiply', 4, 2))
  console.log(calculate('divide', 4, 2))
  console.log(calculate('remainder', 5, 2))
  

}