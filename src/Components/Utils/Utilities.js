
import React from 'react'
import mcitylogo from '../../Resources/images/logos/manchester_city_logo.png'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { firebase} from '../firebase'

export const Tag =(props)=> {
    const template = <div className='tag_wrapper'
        style={{
            background:props.bck ? props.bck:"#ffffff",
            fontSize:props.fontSize ? props.fontSize:"15px",
            color:props.color ? props.color :"black",
            padding:'5px 10px',
            fontFamily:"Righteous",
            display:'inline-block',
            ...props.add
        }}
    >
        {props.children}
            </div>

            if(props.link){
                return <Link to={props.linkTo}>
                        {template}
                    </Link>
            }
            else {
                return template
            }
}






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

export const logOutHandler = ()=>{
    firebase.auth().signOut()
    .then(()=>{
        toast("Wow so easy!")
        
    })
    .catch(error =>{
        alert (error)
    })
}