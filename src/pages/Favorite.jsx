import React from "react";

import Header from "../components/Header";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux"

const Favorite = () => {

    const dispatch = useDispatch()
    const isFovarites = useSelector(state => state.isFovarites)
    

    return(
        <>
            <Header />
            <div className="Content">
                <div className="ds-f">
                    {isFovarites.map((elem, index) => (
                        <Card key={index} isFovarites={true} {...elem} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Favorite