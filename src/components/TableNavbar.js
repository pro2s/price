import React from 'react';

const TableNavbar = (props) => {
    const { onFilter } = props;
    return(
        <div className="nav-wrapper">
            <label >
                <input name="group3" type="radio" defaultChecked onChange={onFilter('*')}/>
                <span>All</span>
            </label>
            <label >
                <input name="group3" type="radio" onChange={onFilter('shoe')} />
                <span>Shoe</span>
            </label>
            <label >
                <input name="group3" type="radio" onChange={onFilter('lace')} />
                <span>Lace</span>
            </label>
            <label >
                <input name="group3" type="radio" onChange={onFilter('isole')} />
                <span>Isole</span>
            </label>
        </div>
    )
}

export default TableNavbar;