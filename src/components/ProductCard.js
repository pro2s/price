import React, { Component } from 'react';
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
            <div className="card">
                <div className="card-image">
                    <img src={item.img} alt={item.title}/>
                    <span className="card-title">{item.title}</span>
                    <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.id)}}>
                        <i className="material-icons">add</i>
                    </span>
                </div>

                <div className="card-content">
                    <p>{item.desc}</p>
                    <p><b>Price: {item.price}$</b></p>
                </div>
                <div className="card-action">
                    { item.complex ? <ProductFilter onUpdate={this.onUpdate} filter={item.complex.filter} />  : '' }
                </div>
            </div>
        )
    }
}

const mapDispatchToProps= (dispatch) => ({   
    addToCart: (id) => {dispatch(addToCart(id))}
})

export default connect(null, mapDispatchToProps)(ProductCard)