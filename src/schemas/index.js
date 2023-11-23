import * as Yup from "yup" 

const passwordRgx = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

const signUpSchema= Yup.object({
    name:Yup.string().min(3).required("Please Enter Name"),
    email:Yup.string().email("Please Enter Valid Email").required("Please Enter Your Email"),
    password:Yup.string().matches(passwordRgx,"Please Enter Valid Password").required("Please Enter Password"),
    cpassword:Yup.string().oneOf([Yup.ref("password")],"Password do not Match").required("Please Enter Confirm Password")

})

export default signUpSchema