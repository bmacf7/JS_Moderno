import html from './app.html?raw';
import todoStore from '../store/todo.store';
import { renderTodos } from './use-cases';

const ElementIDs = {
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
}

/**
 * 
 * @param {String} elementId
 */

export const App = (elementId) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos( ElementIDs.TodoList, todos );
    }

    // When app function is called
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })();

    // HTML reference
    const newDescriptionInput = document.querySelector( ElementIDs.NewTodoInput );
    const todoListUl = document.querySelector( ElementIDs.TodoList );
    

    // Listeners
    newDescriptionInput.addEventListener('keyup', (e) => {
      if (e.keyCode != 13) return;
      if (e.target.value.trim().length === 0) return;

      todoStore.addTodo( e.target.value );
      displayTodos();
      e.target.value = '';
    });

    todoListUl.addEventListener('click', (e) => {
      const selectedElement = e.target.closest('[data-id]');
      todoStore.toggleTodo( selectedElement.getAttribute('data-id') );
      displayTodos();
    });

    todoListUl.addEventListener('click', (e) => {
      const isDestroyElement = e.target.className === 'destroy';
      const selectedElement = e.target.closest('[data-id]');

      if ( !e || !isDestroyElement ) return;
      todoStore.deleteTodo( selectedElement.getAttribute('data-id') );
      displayTodos();
    });
    
}
