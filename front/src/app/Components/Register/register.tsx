"use client";
import { useAuthActions } from "@/app/helpers/auth.helper";
import { RegisterProps } from "@/app/types";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterComp() {
  const {register} = useAuthActions()
  const router = useRouter();
  const [dataUser, setDataUser] = useState<RegisterProps>({
    email: "",
    password: "",
    name: "",
    address: "",
    phone: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setDataUser({
      ...dataUser,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    const response = await register(dataUser);
    window.alert(`User ${dataUser.name} successfully created`);
    router.push("/login");
  }

  const handleCheck = () => {
    if (
      !dataUser.name ||
      !dataUser.email ||
      !dataUser.password ||
      !dataUser.phone ||
      !dataUser.address
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <main className="container flex flex-col justify-center items-center bg-white mx-auto p-10 ">
      <h2 className="text-[#373737] text-6xl my-5">Register</h2>
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={handleSubmit}
      >
        <input
          id="name"
          name="name"
          type="text"
          className=" rounded my-3 h-8 w-72 border border-[#373737] p-1"
          placeholder="Name"
          value={dataUser.name}
          onChange={handleChange}
          required
        />
        <input
          id="email-address"
          name="email"
          type="email"
          className=" rounded my-3 h-8 w-72 border border-[#373737] p-1"
          placeholder="E-mail"
          value={dataUser.email}
          onChange={handleChange}
          required
        />
        <input
          id="phone"
          name="phone"
          type="text"
          className=" rounded my-3 h-8 w-72 border border-[#373737] p-1"
          placeholder="Phone"
          value={dataUser.phone}
          onChange={handleChange}
          required
        />
        <input
          id="address"
          name="address"
          type="text"
          className=" rounded my-3 h-8 w-72 border border-[#373737] p-1"
          placeholder="Address"
          value={dataUser.address}
          onChange={handleChange}
          required
        />
        <input
          id="password"
          name="password"
          type="password"
          className="border rounded my-3 h-8 w-72 border border-[#373737] p-1"
          placeholder="Password"
          value={dataUser.password}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="bg-[#373737] text-white text-xl h-10 w-24 rounded-lg my-3"
          disabled={handleCheck()}
        >
          Sign Up
        </button>
      </form>

      <img
        src="https://static.eway.ca/content/landingpage/251/en/Profesisonal_appleforbusiness_headerbanner.jpg"
        alt=""
      />
    </main>
  );
}
