import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { LoginProps, RegisterProps } from "../types";

const { token, setToken } = useAuth();

const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function login(userData: LoginProps) {
  const response = await fetch(`${API_URL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Login failed");
  }
}

async function register(userData: RegisterProps) {
  const response = await fetch(`${API_URL}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Registration failed");
  }
}

async function generateOrder(product: []) {
  try {
    if (!token) {
      throw new Error("No token provided");
    }
    const response = await axios.post(
      `${API_URL}/orders`,
      { product },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function getOrder() {
  try {
    if (!token) {
      throw new Error("No token provided");
    }
    const response = await axios.get(`${API_URL}/users/orders`, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {}
}

export { login, register, getOrder, generateOrder };
