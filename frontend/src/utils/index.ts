// Archivo para centralizar la URL base del backend

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL ||
  (typeof window !== "undefined" && window.location.hostname === "localhost"
    ? "http://localhost:5000"
    : "https://pruebahola.onrender.com");

export default BACKEND_URL;
