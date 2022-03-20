import React from "react";
import {Tag} from '../../../Utils/Utilities'
import Blocks from "./Blocks";
const MatchesHome = ()=> {
    return (
        <div className="home_matches_wrapper">
            <div className="container">
                
                <Tag 
                    bck="#0e1731"
                    fontSize='50px'
                    color='#ffffff'
                >
                Matches
                </Tag>
                <Blocks />

                <Tag 
                    fontSize='22px'
                    color='black'
                >
                Matches
                </Tag>
            </div>
        </div>
    )
}
export default MatchesHome