import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import ProductRow from './ProductRow'
import TableNavbar from './TableNavbar'

class Table extends PureComponent {
    filter = ''
    onFilter = filter => {
        this.filter = filter
    }

    render(){
        const { items } = this.props;
        return(
            <div className="container">
            <TableNavbar onFilter={this.onFilter}/>
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

const mapStateToProps = state => ({ items: state.items })

export default connect(mapStateToProps)(Table)