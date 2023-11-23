import {useState,useEffect} from "react"
import {Formik,Form,Field} from "formik"
import signUpSchema from "../../schemas"
import "./index.css"
const initialValues={
    name:"",password:"",email:"",cpassword:""
}
const Registration=()=>{
    const [data,setData]=useState([])

    useEffect(() => {
        console.log(data);
      }, [data]);
    
    const onSubmit=(values,actions,)=>{
        actions.resetForm()
        setData(values)
        
    }
    
    
    return(
        <div>
            <Formik validationSchema={signUpSchema} onSubmit={onSubmit} initialValues={initialValues}>
                {({errors,touched})=>(
                    <Form className="form-container">
                        <div className="label-container">
                            <label>Name</label>
                            <Field type="text" name="name"/>
                            <div>{errors.name && touched.name && <p>{errors.name}</p>}</div>
                        </div>
                        <div className="label-container">
                            <label>Email</label>
                            <Field type="email" name="email"/>
                            <div>{errors.email && touched.email && <p>{errors.email}</p>}</div>
                        </div>
                        <div className="label-container">
                            <label>Password</label>
                            <Field type="password" name="password"/>
                            <div>{errors.password && touched.password && <p>{errors.password}</p>}</div>
                        </div>
                        <div className="label-container">
                            <label>CPassword</label>
                            <Field type="password" name="cpassword"/>
                            <div>{errors.cpassword && touched.cpassword && <p>{errors.cpassword}</p>}</div>
                        </div>
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Registration