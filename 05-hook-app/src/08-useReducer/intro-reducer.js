
const initialState = [{
    is: 1,
    todo: 'Comprar pan',
    done: false,
}];

const todoReducer = (state = initialState, action = {}) => {

    if(action.type === '[TODO] Add todo') {
        return [...state, action.payload];
    }

    return state;
};

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Comprar croquetas',
    done: false,
}

const addTodoAction = {
    type: '[TODO] Add todo',
    payload: newTodo
}

todos = todoReducer(todos, addTodoAction);

console.log(todos);
