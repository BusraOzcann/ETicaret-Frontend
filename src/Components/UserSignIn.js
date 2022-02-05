import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

function UserSignIn() {
    let schema = yup.object().shape({
        fname: yup.string().required(),
        lname: yup.string().required(),
        mail: yup.string().required(),
        pw1: yup.string().required(),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => {
        axios.post("http://localhost:5000/register", data).then(res=> console.log(res))
    }

  return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="fname">Adınız : </label> 
                <input {...register("fname")} />
                {errors.fname && <span>This field is required.</span>}
                <br/>
                <label htmlFor="lname">Soyadınız : </label>
                <input {...register("lname")} />
                {errors.lname && <span>This field is required.</span>}
                <br/>
                <label htmlFor="mail"  >E-mail : </label> 
                <input {...register("mail")} />
                {errors.mail && <span>This field is required.</span>}
                <br/>
                <label htmlFor="pw1">Şifre : </label> 
                <input type="password"  {...register("pw1")} />
                {errors.pw1 && <span>This field is required.</span>}
                <br/>
                <button type="submit"> Kayıt Ol </button>   
        </form>
      </div>
  )
}

export default UserSignIn;
