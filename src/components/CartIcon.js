import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class CartIcon extends React.PureComponent {
    render() {
      const { count } = this.props;
      return (
        <Link to="/cart">
            <i className="material-icons">shopping_cart</i>
            {( count ? <span className="new badge notification">{count}</span> : '' )}
        </Link>
      );
    }
}

const mapStateToProps = state => ({ count: state.addedItems.length })

export default connect(mapStateToProps)(CartIcon);