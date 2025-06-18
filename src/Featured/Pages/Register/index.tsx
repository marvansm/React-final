import React, { useState } from "react";
import { PostUser } from "../../../Services/Users";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";

const Register = () => {
  const navigate = useNavigate();
  const { isPending, mutate } = useMutation({
    mutationFn: (Form: any) => PostUser("auth/local/register", Form),
    onError: () => {
      alert("Error:");
    },
    onSuccess: () => {
      navigate("/login");
    },
  });

  const [Form, SetForm] = useState({
    email: "",
    password: "",
    username: "",
  });

  const ChangeEvents = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetForm({
      ...Form,
      [e.target.name]: e.target.value,
    });
  };
  const SubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(Form);
  };
  return (
    <div className="">
      <div className="container mx-auto px-4 ">
        <div className="flex items-center justify-center mt-30">
          <h2 className="text-[#222] font-extrabold text-[30px]">Create Account</h2>
        </div>
        <div className="flex items-center justify-center ">
          <div className="bg-white w-[690px] h-[534px] my-20 rounded-[10px] p-[16px]">
            <div>
              <form onSubmit={SubmitForm}>
                <div className="flex items-start flex-col gap-[15px] mb-[16px]">
                  <input
                    onChange={ChangeEvents}
                    value={Form.email}
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    className="p-[16px]  text-[16px] leading-[16px]  font-normal bg-[#ffff] text-[#696969] border border-gray-300 duration-300 w-full"
                  />
                </div>
                <div className="flex items-start flex-col gap-[15px] mb-[16px]">
                  <input
                    onChange={ChangeEvents}
                    value={Form.username}
                    name="username"
                    type="text"
                    placeholder="Username"
                    required
                    className="p-[16px]  text-[16px] leading-[16px]  font-normal bg-[#fff] text-[#696969] border border-gray-300 duration-300 w-full"
                  />
                </div>
                <div className="flex items-start flex-col gap-[15px] mb-[16px]">
                  <input
                    required
                    onChange={ChangeEvents}
                    value={Form.password}
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="p-[16px]  text-[16px] leading-[16px]  font-normal bg-[#ffff] text-[#696969] border border-gray-300 duration-300 w-full"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-1.5">
                    <input type="checkbox" name="" id="" />
                    <p className="text-[#5b5b5f] text-[12px]">
                      Sign up for our newsletter
                    </p>
                  </div>
                  <p className="text-[13px] pb-4">
                    If you have an account, please Login Here
                  </p>
                </div>
                <button
                  disabled={isPending}
                  className="p-[16px] disabled:opacity-50 disabled:cursor-not-allowed  text-[16px] leading-[16px]  font-normal bg-[#2d6fde] text-[#fff]  duration-300 w-full cursor-pointer"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
