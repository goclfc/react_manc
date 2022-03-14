import React from "react";
import { easeBackInOut } from "d3-ease";
import { Animate } from "react-move";
import { easePolyOut } from "d3-ease";

let stripeState = [
    {
        id:1,
        background:'#98c5e8',
        left:120,
        rotate:25,
        top:-260,
        delay:0
    },
    {
        id:2,
        background:'white',
        left:360,
        rotate:25,
        top:-394,
        delay:200
    },
    {
        id:3,
        background:'#98c5e8',
        left:600,
        rotate:25,
        top:-498,
        delay:400
    }
]
const Stripes =()=> {
    console.log(stripeState)
    const handleShowStripes = () => (
        stripeState.map((item) =>(
            <Animate 
                key={item.id}
                show={true}
                start={{
                    background:'#ffffff',
                    opacity:0,
                    left:0,
                    rotate:0,
                    top:0
                }}
                enter={{
                    background:`${item.background}`,
                    opacity:[1],
                    left:`${item.left}`,
                    rotate:`${item.rotate}`,
                    top:`${item.top}`,
                    timing:{

                        delay:item.delay,
                        duration:200,
                        ease:easePolyOut
                    }

                }}
            
            >
                { ( { opacity, left, rotate, top, background} )=>(
                    <div className="stripe"
                        style={{
                            background,
                            opacity,
                            transform:`rotate(${rotate}deg) translate(${left}px,${top}px )`
                        }}
                    >
                        
                    </div>
                ) }

            </Animate>
        ))
    )
    return (
        <div className="featured_stripes">
            <div> 
            {handleShowStripes()}
            </div>
        </div>
    )
}

export default Stripes