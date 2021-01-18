import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// interface is used to define the structure of an object
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo; // response.data to have same structure as Todo
  const { id, title, completed } = todo;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with id: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
  `);
};
