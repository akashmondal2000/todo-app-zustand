import { create } from "zustand";

// hare create a zustand store
const useTodoStore = create((set)=>({
    todos : [], // is a state
    
    // is an action that adds a new todo item to the list.
    addTodo:(text)=>set((state =>({
        todos:[...state.todos,{text, done:false}]
    }))),

    // is an action that toggles the completion status of a todo item.
    toggleTodo:(index)=>set((state =>{
        const todos = [...state.todos];
        todos[index].done = !todos[index].done;
        return {todos}
    })),

}))

export default useTodoStore;