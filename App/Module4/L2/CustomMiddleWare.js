const fetchDataMiddleWare = (store) => (next) => async (action) => {
    console.warn("fetchDataMiddleWare-------------")
    console.log("store: ", store)
    console.log("next: ", next)
    console.log("action: ", action)
    if (action.type == "todos/fetchTodos") {

        
    }
    next(action);

}

export { fetchDataMiddleWare }