const dataFetchMiddleWare = (store) => (next) => async (action) => {
    // console.warn("fetchDataMiddleWare-------------")
    // // console.log("store: ", store)
    // // console.log("next: ", next)
    // console.log("action: ", typeof action)
    // // if (typeof action == "function") {

    // //     console.log("FUnction type")
    // // }
    next(action);

}

export { dataFetchMiddleWare }