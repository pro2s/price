import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import ProductRow from './ProductRow'
import TableNavbar from './TableNavbar'
import { withRouter } from 'react-router-dom'

class Table extends PureComponent {
    render() {
        const { items, match } = this.props
        const filter = match && match.params && match.params.filter
        return(
            <div className="container">
            <TableNavbar active={filter}/>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Configure</th>
                    <th>Add</th>
                </tr>
                </thead>
                <tbody>
                    { items.map(item => <ProductRow key={item.id} item={item} />) }
                </tbody>
            </table>
            </div>
        )
    }
}

const filter = (item, filter) => {
    console.log(filter)
    if (filter && filter !== '*') {
        return filter === item.type
    }
    return true
}

const mapStateToProps = (state, {match}) => ({ 
    items: state.items.filter(item => (filter(item, match && match.params && match.params.filter)))
})

export default withRouter(connect(mapStateToProps)(Table))