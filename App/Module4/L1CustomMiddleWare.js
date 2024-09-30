

const delayMiddleware = (store) => (next) => (action) => {
    console.warn("delayMiddleware")

    if (action.type == "todos/todosAddeds") {
        console.log("middle ware called !!")


        next(action)
    }

}
// const delayMiddleware = (store) => {
    // console.warn("delayMiddleware")
    // return function (next) {
    //     return function (action = { type: "" }) {
    //         if (action.type == "todos/todosAddeds") {
    //             console.log("middle ware called !!")
    //         }
    //     }
    // }
// }

export {
    delayMiddleware
 }