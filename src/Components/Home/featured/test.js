import React ,{useState} from "react";
import { Animate } from "react-move";
import { easePolyOut } from "d3-ease";

const Test = (props) => {
    const [show,setShow] = useState(true)
    const [bck,setBck] = useState('blue')
    return (
        <div>
            <button onClick={()=>{
                setBck('green')
            }}> Update</button>
                <button onClick={()=>{
                setShow(false)
            }}> Leave </button>

            <button onClick={()=>{
                setShow(true)
            }}> Show Again </button>

            <Animate
                show={show}
                start ={{
                    backgroundColor:bck,
                    width:500,
                    height:500,
                    opacity:0
                }}
                enter={{
                    width:[100],
                    height:[200],
                    opacity:[1],
                    backgroundColor:bck,
                    timing:{
                        duration:1000,
                        delay:1000,
                        ease:easePolyOut
                    }
                }}
                update = {{
                    backgroundColor:bck,
                    opacity:[0.5],
                    timing: {
                        duration:2000,
                        ease:easePolyOut

                    }

                }}
                leave = {{
                    width:[1000],
                    opacity:[0],
                    timing:{
                        delay:100,
                        duration:500,
                        ease:easePolyOut
                    }
                }}
            
            >

                { ({width,height,backgroundColor,opacity}) => (
                    <div 
                        style={{
                            backgroundColor,
                            width,
                            height,
                            opacity
                        }}
                    >
                        Hello
                    </div>
                )}
            </Animate>

        </div>
    )
}
export default Test