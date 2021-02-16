import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
export default props => {
    const [detail, setDetail] = useState({})
    useEffect(() => {
        console.log("hello")
        axios.get("http://localhost:8000/api/product/" + props.id)
            .then(res => {
                setDetail(res.data)
                console.log(res.data)
            }).catch(err => console.log(err))
    }, [])
    return (
        <div>
            <Link to={"/api/product/" + detail._id + "/edit"}>
                Edit
            </Link>
            <p>{detail.title}</p><br/>
            <p>{detail.price}</p><br/>
            <p>{detail.description}</p>
        </div>
    )
}