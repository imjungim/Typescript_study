{
  type ToDo = {
    title: string;
    description: string;
  };
  //불변성 유지 
  function display(todo: Readonly<ToDo>) {
    //todo.title = 'jaja';
  }
}
