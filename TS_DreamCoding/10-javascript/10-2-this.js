//누가 부르는지에 따라 결정

console.log(this); //window

function simpleFunc() {
  console.log(this);
}
window.simpleFunc(); //window
console.clear();
class Counter {
  count = 0;
  increase = () => {
     console.log(this);
  };
}
const counter = new Counter();
counter.increase(); //this : counter
const caller = counter.increase;
//const caller = counter.increase.bind(counter);
caller(); //undefined

class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run(); //this : bob
