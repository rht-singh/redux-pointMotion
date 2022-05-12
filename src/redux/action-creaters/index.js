export const addProductName = (array) =>{
    return (dispatch)=>{
        dispatch({
        type: "addProduct",
        payload: array
        })
    } 
}
