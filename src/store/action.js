

const update_user = () => {
    return (dispatch) => {
                    // console.log("snapshot.data =>>", snapshot.data());
                    dispatch({
                        type: 'SET_USER',
                        user: { isLogin: true }
                    })
    }
}

const remove_user = () => {
    return (dispatch) => {
            dispatch({
                type: 'REMOVE_USER',
                user: { isLogin: false }
            })
    }
}

const restaurant_list = () => {
    return (dispatch) => {
            // console.log('Restaurant List', restaurantList);
            dispatch({
                type: 'RESTAURANT_LIST',
                restaurantList: 'restaurantList',
            })
    }
}

const order_request = () => {
    return (dispatch) => {
                    dispatch({
                        type: 'ORDER_REQUEST',
                        orderRequest: 'orderRequest',
                    })
    }
}

const my_order = () => {
    return (dispatch) => {
                    dispatch({
                        type: 'MY_ORDER',
                        myOrder: 'myOrder',
                    })
    }
}

const my_foods = () => {
    return (dispatch) => {
                    dispatch({
                        type: 'MY_FOODS',
                        myFoods: 'myFoods',
                    })
    }
}


export {
    update_user,
    remove_user,
    restaurant_list,
    order_request,
    my_order,
    my_foods,
}