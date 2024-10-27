'use client';

import { useState } from "react";
import MiriBogiContainer from "./type/MiriBogiContainer";
import PostDivContainer from "./type/PosDivContainer";

interface Propsype {
    color : string, 
    type : string
};

export default function ColContainer({color, type} : Propsype){

    const [widthState, setWidthState] = useState(["100px", "100px", 0]);

    function setReturnComponent (type : string){
        if(type === "1"){ 
            return <MiriBogiContainer />
        }else if (type === "2"){
            return <PostDivContainer />
        }
    }

    return (
        <div 
            className="box-container power-center mb-3" 
            style={{
                background : color, 
                borderRadius : 20,
                width: widthState[0], 
                height : widthState[1],
            }}
            onClick={() => {
                setWidthState(["100%", "auto", 1]);
            }}
        >
            <div className="text-center text-white">
                {
                    widthState[2] === 0?
                    <h2 className="fw-bold m-0">{type}</h2> :
                    setReturnComponent(type)
                }
            </div>
        </div>
    )
}