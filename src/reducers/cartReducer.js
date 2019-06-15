import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING, SUB_SHIPPING } from '../actions/action-types/cart-actions'
import Api from "../api"

const initState = {
    items: Api.fetchProducts(),
    cart: [],
    total: 0
}

function set(cart, cartItem) {
    return cart.map(item => item.id === cartItem.id ? {...cartItem} : item)
}

function removeItem(state, action) {
    const cartItem = state.cart.find(item => item.id === action.id)
    if (! cartItem) {
        return state;
    }
    return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.id),
        total: state.total - (cartItem.item.price * cartItem.quantity)
    }
}

const cartReducer = (state = initState, action) => {
    if (action.type === ADD_TO_CART) {
        let cart = state.cart
        let cartItem = cart.find(item => item.id === action.id)
        if (cartItem) {
            cartItem.quantity += 1
            cart = set(cart, cartItem)
        } else {
            let item = state.items.find(item => item.id === action.id)
            cartItem = {
                id: item.id,
                item: item,
                quantity: 1
            }
            cart.push(cartItem)
        }
        return {
            ...state,
            cart,
            total: state.total + cartItem.item.price
        }
    }
    
    if (action.type === REMOVE_ITEM) {
        return removeItem(state, action)
    }
    
    if (action.type === ADD_QUANTITY) {
        let cartItem = state.cart.find(item => item.id === action.id)
        if (! cartItem) {
            return state
        }
        cartItem.quantity += 1
        let newTotal = state.total + cartItem.item.price
        return {
            ...state,
            cart: set(state.cart, cartItem),
            total: newTotal
        }
    }

    if (action.type === SUB_QUANTITY) {
        let cartItem = state.cart.find(item => item.id === action.id)
        if (!cartItem) {
            return state
        }
        let quantity = cartItem.quantity - 1
        if (quantity <= 0) {
            return removeItem(state, action)
        } else {
            cartItem.quantity = quantity
            return {
                ...state,
                cart: set(state.cart, cartItem),
                total: state.total - cartItem.item.price
            }
        }
    }

    if (action.type === ADD_SHIPPING) {
        return {
            ...state,
            total: state.total + 6
        }
    }

    if (action.type === SUB_SHIPPING) {
        return {
            ...state,
            total: state.total - 6
        }
    }

    return state
}

export default cartReducer