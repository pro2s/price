import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'
import ProductFilter from './ProductFilter'

class ProductCard extends Component{
    complexItems = []

    handleClick = (id) => {
        this.props.addToCart(id)
        this.complexItems.map(id => this.props.addToCart(id))
    }

    onUpdate = (filterId, id) =>  {
        let parsedId = parseInt(id)
        if (!isNaN(id)) {
            this.complexItems[filterId] = parsedId;     
        }
    }

    render() {
        const { item } = this.props;
        return(
            <tr>
                <td>{item.title}</td>
                <td>{item.desc}</td>
                <td>{item.price}$</td>
                <td>
                    { item.complex ? <ProductFilter onUpdate={this.onUpdate} filter={item.complex.filter} />  : '' }
                </td>
                <td>
                    <span className="btn-floating waves-light btn-small" onClick={()=>{this.handleClick(item.id)}}>
                        <i className="material-icons" >add</i>
                    </span>
                </td>
            </tr>
        )
    }
}

const mapDispatchToProps= (dispatch) => ({   
    addToCart: (id) => {dispatch(addToCart(id))}
})

export default connect(null, mapDispatchToProps)(ProductCard)