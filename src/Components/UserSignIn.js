import React from "react";
import { useFormik } from 'formik';

function UserSignIn() {

    const formik = useFormik({
        initialValues: {
            fname: '',
            lname: '',
            mail: '',
            pw1: '',
        },
        onSubmit: values => {
            console.log(values);
        }
    })


  return (
      <div>
        <form action="http://localhost:5000/register" method="POST">

                <label htmlFor="fname">Adınız : </label> 
                <input type="text" id="fname" name="fname" /> 
                <br/>
                <label htmlFor="lname">Soyadınız : </label>
                <input type="text" id="lname" name="lname" /> 
                <br/>
                <label htmlFor="mail">E-mail : </label> 
                <input type="email" id="mail" name="mail" /> 
                <br/>
                <label htmlFor="pw1">Şifre : </label> 
                <input type="password" id="pw1" name="pw1" />
                <br/>
                <button type="submit"> Kayıt Ol </button>
            
        </form>
      </div>
  )
}

export default UserSignIn;
