import React , {useState} from "react";
import { Fade } from "react-awesome-reveal";
import { CircularProgress } from "@material-ui/core";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { showErrorToast, showSuccesToast } from "../../Utils/tools";
import { promotionsCollection } from "../../../firebase";
const Enroll = () => {
    const [loading,setLoading] = useState(false)
    const formik = useFormik({
        initialValues:{email:''},
        validationSchema:Yup.object({
            email:
            Yup.string()
            .email('Invalid Email')
            .required('The email is required')
        })
        
        ,
        onSubmit:( values )=> {
            setLoading(true)
        }
    })
    return (
        <Fade>
            <div className="enroll_wrapper">
                <form onSubmit={formik.handleSubmit}>
                    <div className="enroll_title">
                        Enter Your Email
                    </div>
                    <div className="enroll_input">
                        <input 
                            name='email'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            placeholder="Enter Your Email"
                        />
                        { formik.touched.email && formik.errors.email ?
                        <div className="error_label"> {formik.errors.email} </div>
                        :null
                    }
                    { loading ? 
                        <CircularProgress color="secondary" className="progress"/>
                    :
                    <button 
                    type="submit" >
                        Enroll
                    </button>
                
                }
                        
                    </div>
                </form>

            </div>
        </Fade>
    )
}
export default Enroll