import React from 'react';
import Recipe from './Recipe'

function CartTableContainer(props) {
    return (
        <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Control</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.children}
                        </tbody>
                    </table>
                </div>
                <Recipe />
        </div>
    );
}

export default CartTableContainer
            