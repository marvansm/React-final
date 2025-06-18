import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { PostUser } from "../../../Services/Users";
import { Mail } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const { isPending, mutate } = useMutation({
    mutationFn: (Form: any) => PostUser("auth/local/", Form),
    onError: () => {
      alert("Error:");
    },
    onSuccess: (data: {
      jwt: string;
      user: { id: number; username: string; email: string };
    }) => {
      sessionStorage.setItem("jwt", data.jwt);
      sessionStorage.setItem("user", JSON.stringify(data.user));
      SetForm({ identifier: "", password: "" });
      navigate("/");
      window.location.reload();
    },
  });

  const [Form, SetForm] = useState({
    identifier: "",
    password: "",
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
    <div className="bg-[#fff]">
      <div className="container mx-auto px-4 ">
        <div className="flex items-center justify-center ">
          <div className="bg-white w-[690px] h-[434px] my-40 rounded-[10px] p-[16px]">
            <div className="pb-[10px]">
              <h1 className="text-[24px] font-extrabold uppercase  text-black">
                Sign In
              </h1>
              <p className="text-[14px] text-[#1c1c1f]">
                Insert your account information:
              </p>
            </div>
            <div>
              <form onSubmit={SubmitForm}>
                <div className="flex items-start flex-col gap-[13px] mb-[10px]">
                  <input
                    onChange={ChangeEvents}
                    value={Form.identifier}
                    name="identifier"
                    type="email"
                    placeholder="Enter your email..."
                    required
                    className="p-[16px]  text-[16px] leading-[16px]  font-normal bg-[#fff] text-[#696969] border border-gray-300 hover:border-blue-400 duration-300 w-full"
                  />
                </div>

                <div className="flex items-start flex-col  mb-[16px]">
                  <input
                    required
                    onChange={ChangeEvents}
                    value={Form.password}
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="p-[16px]  text-[16px] leading-[16px]  font-normal bg-[#fff] text-[#696969] border border-gray-300 hover:border-blue-400 duration-300 w-full"
                  />
                </div>
                <div className="flex items-center gap-1 pb-3">
                  <Mail size={14} color="blue" />
                  <p className="text-[12px]">
                    Forgot your <span className="font-bold">Password</span> ?
                  </p>
                </div>
                <div className="text-[12px] font-normal pb-3">If you don't have an account, please Register Here</div>
                <button
                  disabled={isPending}
                  className="p-[16px] disabled:opacity-50 disabled:cursor-not-allowed  text-[16px] leading-[16px] bg-[#2d6fde]  font-normal  text-[#fff]  duration-300 w-full cursor-pointer"
                >
                  Login
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
