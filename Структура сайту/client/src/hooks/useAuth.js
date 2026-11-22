import { useState } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
});

function getErrorMessage(error) {
  return error.response?.data?.message || error.message || "Не вдалося виконати запит.";
}

export default function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const authenticate = async (endpoint, credentials) => {
    setLoading(true);
    setError(null);

    try {
      const { data } = await api.post(endpoint, credentials);
      if (!data?.token) {
        throw new Error("Сервер не повернув токен авторизації.");
      }

      localStorage.setItem("token", data.token);
      setUser(data.user || null);
      return data;
    } catch (requestError) {
      setError(getErrorMessage(requestError));
      throw requestError;
    } finally {
      setLoading(false);
    }
  };

  const login = (credentials) => authenticate("/auth/login", credentials);
  const register = (details) => authenticate("/auth/register", details);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setError(null);
  };

  return { user, loading, error, login, register, logout };
}
