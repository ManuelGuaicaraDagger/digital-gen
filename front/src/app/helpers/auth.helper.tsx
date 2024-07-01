import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { LoginProps, RegisterProps } from "../types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useAuthActions = () => {
  const { token, setToken } = useAuth();

  const login = async (userData: LoginProps) => {
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
  };

  const register = async (userData: RegisterProps) => {
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
  };

  const generateOrder = async (product: []) => {
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
  };

  const getOrder = async () => {
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
    } catch (error) {
      throw error;
    }
  };

  return { login, register, generateOrder, getOrder };
};
