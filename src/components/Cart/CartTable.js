import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import CartTableContainer from './CartTableContainer'
import CartTableRow from './CartTableRow'
import CartTableEmptyRow from './CartTableEmptyRow'

class CartTable extends PureComponent {
    render() {
        const { items } = this.props
        let cartTableRows = items.map(item => <CartTableRow key={item.id} item={item} />)
        if (!items.length) {
            cartTableRows = <CartTableEmptyRow />
        } 
        return (
            <CartTableContainer>{ cartTableRows }</CartTableContainer>
        )
    }
}

const mapStateToProps = (state) => ({
    items: state.cart,
})

export default connect(mapStateToProps)(CartTable)