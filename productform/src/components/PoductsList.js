import React from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
export default props => {
    const { removeFromDom } = props;
    const deleteProduct = (proId) => {
        axios.delete(`http://localhost:8000/api/product/${proId}` )
            .then(res => {removeFromDom(proId)})
    }
    return (

        <div>
            {props.product.map((prod, idx) => {
                return (
                    <div key={idx}>
                    <p >
                        <Link to={"/api/product/" + prod._id}>
                            {prod.title},{prod.price},{prod.description}
                        </Link>
                    </p>
                    <button  onClick={(e) => { deleteProduct(prod._id) }}>
                        Delete
                    </button>
                    </div>
                )
            })}
        </div>
    );
}