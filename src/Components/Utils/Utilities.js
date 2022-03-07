
import React from 'react'
import mcitylogo from '../../Resources/images/logos/manchester_city_logo.png'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
export const CityLogo = (props) => {
    const template = <div
    className='img_cover'
    style={{
        width:props.width,
        height:props.height,
        background:`url(${mcitylogo}) no-repeat`
    }}
    >
    </div>
    if(props.link){
        return (

        <Link className='link_logo' to={props.linkTo}>
            {template}
        </Link>
        )
    }else {
        return template
    }
    
    }

export const showToast = (msg)=>{
    toast(msg)
}