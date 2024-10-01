

const CustomMiddleWare = (store) => (next) => (action) => {
    console.warn("CustomMiddleWare-------------")


    console.log("store: ", store)
    console.log("next: ", next)
    console.log("action: ", action)

    // if (action.type == "todos/todosAddeds") {
    //     console.log("middle ware called !!")
    //     // next(action)
    // }

    next(action);
}

const delayMiddleWare = (store) => (next) => (action) => {
    setTimeout(() => {
        console.warn("delayMiddleWare-------------")
        console.log("store: ", store)
        console.log("next: ", next)
        console.log("action: ", action)
    }, 3000)
    next(action);
}

const fetchDataMiddleWare = (store) => (next) => async (action) =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
    const todos = await response.json();

    if (ActionSheetIOS.type == "") { 
        store.dispatch({
            type: "todos/todoLoaded",
    
        })
    }
    next(action);

}

export {
    CustomMiddleWare, delayMiddleWare ,fetchDataMiddleWare
}