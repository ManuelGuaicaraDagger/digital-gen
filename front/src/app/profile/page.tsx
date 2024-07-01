"use client";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";

export default function Profile() {
  const { token, setToken } = useAuth();
  const router = useRouter();
  const [name, setUser] = useState<string | null>(null);

  useEffect(() => {
    const namex = sessionStorage.getItem("name");
    if (namex) {
      setUser(namex);
    }
  }, []);
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const emailx = sessionStorage.getItem("email");
    if (emailx) {
      setEmail(emailx);
    }
  }, []);
  const [phone, setPhone] = useState<string | null>(null);

  useEffect(() => {
    const phonex = sessionStorage.getItem("phone");
    if (phonex) {
      setPhone(phonex);
    }
  }, []);
  const [address, setAdress] = useState<string | null>(null);

  useEffect(() => {
    const addressx = sessionStorage.getItem("address");
    if (addressx) {
      setAdress(addressx);
    }
  }, []);

  const handleLogOut = () => {
    sessionStorage.clear();
    console.log(token);
    setToken(null);
    router.push("/login");
  };

  return (
    <div className="container flex flex-col justify-center items-center bg-white mx-auto p-10 ">
      <h2 className="text-[#373737] text-6xl my-5">Profile</h2>
      <ul className="text-xl ">
        <li className="my-2">
          <b>Name:</b> {name}
        </li>
        <li className="my-2">
          <b>E-mail:</b> {email}
        </li>
        <li className="my-2">
          <b>Phone:</b> {phone}
        </li>
        <li className="my-2">
          <b>Adress:</b> {address}
        </li>
      </ul>
      <button
        onClick={handleLogOut}
        className="bg-[#373737] text-white text-xl h-10 w-24 rounded-lg mt-6"
      >
        Log out
      </button>
      <img
        src="https://static.eway.ca/content/landingpage/251/en/Profesisonal_appleforbusiness_headerbanner.jpg"
        alt="Banner"
      />
    </div>
  );
}
