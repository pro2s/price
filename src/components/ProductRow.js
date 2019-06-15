import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addItem, removeItem, subtractQuantity, addQuantity } from '../actions/cartActions'
import ProductFilter from './ProductFilter'

class ProductRow extends Component {
    complexItems = []

    plus = (item) => {
        if (item.quantity) {
            this.props.addQuantity(item.id)
        } else {
            this.props.addToCart(item.id)
        }
       
        this.complexItems.map(id => this.props.addToCart(id))
    }

    minus = (item) => {
        this.props.subtractQuantity(item.id)
    }

    onUpdate = (filterId, id) =>  {
        let parsedId = parseInt(id)
        if (!isNaN(id)) {
            this.complexItems[filterId] = parsedId;     
        }
    }

    render() {
        const { item, cartItem } = this.props
        console.log('update')
        return(
            <tr>
                <td>{item.title}</td>
                <td>{item.desc}</td>
                <td>{item.price}$</td>
                <td>
                    { item.complex ? <ProductFilter onUpdate={this.onUpdate} filter={item.complex.filter} />  : '' }
                </td>
                <td className="truncate">
                    <button className="btn-floating waves-light btn-small" onClick={()=>{this.minus(item)}}>
                        <i className="material-icons" >-</i>
                    </button>
                    <span>{cartItem.quantity}</span>
                    <button className="btn-floating waves-light btn-small" onClick={()=>{this.plus(item)}}>
                        <i className="material-icons" >+</i>
                    </button>
                </td>
            </tr>
        )
    }
}

const mapDispatchToProps= (dispatch) => ({   
    addToCart: (id) => {dispatch(addItem(id))},
    removeItem: (id) => {dispatch(removeItem(id))},
    subtractQuantity: (id) => {dispatch(subtractQuantity(id))},
    addQuantity: (id) => {dispatch(addQuantity(id))}
})

const mapStateToProps = (state, props) => ({ 
    cartItem: state.cart.find(item => item.id === props.item.id) || {quantity: ''} 
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductRow)