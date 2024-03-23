import { Todo } from '../todos/models/todo.model';

const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    todos: [
        new Todo('Soul Stone'),
        new Todo('Reality Stone'),
        new Todo('Time Stone')
    ],
    filter: Filters.All
}

const initStore = () => {
    console.log(state);
    console.log('initStore 🥑');
}

export default {
    initStore,
}