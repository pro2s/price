import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import ProductCard from './ProductCard'

 class Home extends PureComponent {
    render(){
        const { items } = this.props;
        return(
            <div className="container">
                <h3 className="center">Our items</h3>
                <div className="box">
                    { items.map(item => <ProductCard key={item.id} item={item} />) }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ items: state.items })

export default connect(mapStateToProps)(Home)