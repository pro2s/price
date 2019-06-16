import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { removeItem, addQuantity, subtractQuantity } from '../../actions/cartActions'

class CartTableRow extends PureComponent {

    //to remove the item completely
    handleRemove = (id) => {
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id) => {
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id) => {
        this.props.subtractQuantity(id);
    }
    render() {
        const { item } = this.props
        return (
            <tr key={item.id}>
                <td className="title">{item.item.title}</td>
                <td>{item.item.desc}</td>
                <td><b>{item.item.price}$</b></td>
                <td>
                    <button className="btn-flat btn-small">
                        <i className="material-icons" onClick={() => { this.handleAddQuantity(item.id) }}>arrow_drop_up</i>
                    </button>
                    <b>{item.quantity}</b>
                    <button className="btn-flat btn-small">
                        <i className="material-icons" onClick={() => { this.handleSubtractQuantity(item.id) }}>arrow_drop_down</i>
                    </button>
                    </td>
                <td>
                    <button className="waves-effect waves-light btn pink remove" onClick={() => { this.handleRemove(item.id) }}>Remove</button>
                </td>
            </tr>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => { dispatch(removeItem(id)) },
        addQuantity: (id) => { dispatch(addQuantity(id)) },
        subtractQuantity: (id) => { dispatch(subtractQuantity(id)) }
    }
}

export default connect(null, mapDispatchToProps)(CartTableRow)