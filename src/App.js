import bmth from './assets/img/image-menu.jpg';
import logo from './assets/img/INSTRUMENTAL.png';
import TButton from "./components/TButton.js";
import TInput from "./components/TInput.js";
import { HiOutlineKey } from "react-icons/hi";
import { useForm } from "react-hook-form";
import "./App.css";
import React from "react";


function App() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    console.log(data)
  };
  
  return (
    <div className="flex">
      <div className="w-0 lg:w-8/12 xl:w-8/12 h-screen relative">
        <div className="w-full h-full bg-yellow-400 opacity-10 top-0 left-0 z-50 absolute"></div>
        <img className="w-full h-full" src={bmth} alt="work" />
      </div>
      <div className="w-full lg:w-4/12 xl:w-4/12 h-screen flex items-center bg-primary z-100">
        <div className="w-full">
          <div className="w-full pt-16 lg:pt-5 xl:pt-5 h-48 flex justify-center">
            <img className="h-20 lg:h-28 xl:h-28" src={logo} alt="logo" />
          </div>
          <div className="w-full h-96 px-16">
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
              <TInput name="email" label="Email" rules={register({ required: "Email required" })} error={errors.email} placeholder="Enter your email..." />
              <div className="my-4">
                <TInput name="password" label="Password" rules={register({ required: "Password required", minLength: { value: 8, message: "Password no validate" } })}
                  error={errors.password} type="password" placeholder="Enter your password..." />
              </div>
              <div className="pt-4">
                <TButton type="submit" name="Sign in" />
              </div>
              <div className="flex text-sm justify-end items-center transition-colors text-general underline hover:text-danger pt-1">
                <HiOutlineKey className="" />
                <a className="px-1" href="/">Forget your password?</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
