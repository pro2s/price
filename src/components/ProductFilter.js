import React, { PureComponent } from 'react';
import { connect } from 'react-redux'

 class ProductFilter extends PureComponent {
    render(){
        const { items, onUpdate, filter } = this.props;
        return(
            <div className="input-field col s12">
                <select className="browser-default" defaultValue="" onChange={event => onUpdate(filter.id, event.target.value)} >
                    <option value="">Choose your option</option>
                    { items.map(item => <option key={item.id} value={item.id}>{item.title}</option>) }
                </select>
            </div>
        )
    }
}

const filter = (item, filter) => {
    if (filter.field && filter.field in item) {
        return filter.value === item[filter.field]
    }
    return false
}

const mapStateToProps = (state, props) => ({ items: state.items.filter(item => (filter(item, props.filter))) })

export default connect(mapStateToProps)(ProductFilter)