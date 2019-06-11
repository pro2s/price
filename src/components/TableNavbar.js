import React from 'react'
import { Link } from 'react-router-dom'

const TableNavbar = (fiter) => {
    return(
        <div className="section">
            <Link to="/table" className="waves-effect waves-light btn-small">
                All
            </Link> 
            <Link to="/table/shoe" className="waves-effect waves-light btn-small">
                Shoe
            </Link> 
            <Link to="/table/lace" className="waves-effect waves-light btn-small">
                Lace
            </Link> 
            <Link to="/table/isole" className="waves-effect waves-light btn-small">
                Isole
            </Link> 
        </div>
    )
}

export default TableNavbar;