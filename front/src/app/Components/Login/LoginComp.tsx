"use client";

import { useAuthActions } from "@/app/helpers/auth.helper";
import { LoginProps } from "@/app/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginComp() {
  const { login } = useAuthActions(); // Usa el hook personalizado
  const router = useRouter();
  const [dataUser, setDataUser] = useState<LoginProps>({
    email: "",
    password: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setDataUser({
      ...dataUser,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const response = await login(dataUser);
      sessionStorage.setItem("token", response.token);
      sessionStorage.setItem("name", response.user.name);
      sessionStorage.setItem("email", response.user.email);
      sessionStorage.setItem("phone", response.user.phone);
      sessionStorage.setItem("address", response.user.address);
      window.alert("Successfully logged in");
      router.push("/products");
    } catch (error: any) {
      window.alert(`${error.message}: incorrect email or password`);
    }
  }

  return (
    <main className="container flex flex-col justify-center items-center bg-white mx-auto p-10 ">
      <h2 className="text-[#373737] text-6xl my-5">Sign in</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center"
      >
        <input
          id="email-address"
          name="email"
          type="email"
          value={dataUser.email}
          onChange={handleChange}
          className="rounded my-3 h-8 w-72 border border-[#373737] p-1"
          placeholder="E-mail"
          required
        />
        <input
          id="password"
          name="password"
          type="password"
          value={dataUser.password}
          onChange={handleChange}
          className="border rounded my-3 h-8 w-72 border-[#373737] p-1"
          placeholder="Password"
          required
        />
        <button
          type="submit"
          className="bg-[#373737] text-white text-xl h-10 w-20 rounded-lg my-3"
        >
          Login
        </button>
      </form>
      <span className="text-[#373737] my-2">
        Dont have an account yet?{" "}
        <Link href={"/register"} className="border-b border-[#373737]">
          Sign up
        </Link>
      </span>
      <img
        src="https://static.eway.ca/content/landingpage/251/en/Profesisonal_appleforbusiness_headerbanner.jpg"
        alt=""
      />
    </main>
  );
}
