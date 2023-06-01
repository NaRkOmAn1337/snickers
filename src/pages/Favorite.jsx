import React from "react";

import { useDispatch, useSelector } from "react-redux"
import Header from "../components/Header";
import Card from "../components/Card";

const Favorite = () => {
    const dispatch = useDispatch()
    const favorite = useSelector(state => state.favorite)
    return(
        <>
            <Header />
            <div className="Content">
                <div className="ds-f">
                {favorite.map((item, index) => (
                    <Card key={index} favorite={true} {...item} />
                ))}
                </div>
            </div>
        </>
    )
}

export default Favorite