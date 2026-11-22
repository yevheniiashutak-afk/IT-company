import { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

function getErrorMessage(error) {
  if (error.response?.data?.message) {
    return error.response.data.message;
  }

  if (error.response?.status === 404) {
    return "Маршрут API не знайдено (404). Перевірте адресу та перезапустіть сервер.";
  }

  return error.message || "Не вдалося виконати запит.";
}

export default function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const lastRequest = useRef(null);
  const optionsRef = useRef(options);
  optionsRef.current = options;

  const request = useCallback(async (config = {}) => {
    const requestConfig = typeof config === "string" ? { url: config } : config;
    const token = localStorage.getItem("token");
    const requestOptions = { ...requestConfig };

    if (token) {
      requestOptions.headers = {
        ...requestConfig.headers,
        Authorization: `Bearer ${token}`,
      };
    }

    lastRequest.current = requestConfig;
    setLoading(true);
    setError(null);

    try {
      const response = await axios({
        baseURL: API_BASE_URL,
        method: "GET",
        ...requestOptions,
      });
      setData(response.data);
      return response.data;
    } catch (requestError) {
      setError(getErrorMessage(requestError));
      throw requestError;
    } finally {
      setLoading(false);
    }
  }, []);

  const refetch = useCallback(() => {
    if (!lastRequest.current) {
      return Promise.reject(new Error("Ще немає запиту для повторного виконання."));
    }
    return request(lastRequest.current);
  }, [request]);

  useEffect(() => {
    if (url) {
      request({ ...optionsRef.current, url }).catch(() => {});
    }
  }, [url, request]);

  return { data, loading, error, request, refetch };
}
