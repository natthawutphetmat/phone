"use client"; // global-error.js ต้องเป็น client-side component

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error("Global Error:", error); // Log ข้อผิดพลาดเพื่อ debug
  }, [error]);

  return (
    <html>
      <body style={styles.container}>
        <h1 style={styles.title}>Something went wrong!</h1>
        <p style={styles.message}>
          We’re sorry, but an unexpected error occurred.
        </p>
        <div style={styles.actions}>
          <button onClick={() => reset()} style={styles.button}>
            Retry
          </button>
          <Link href="/" style={styles.link}>
            Go to Homepage
          </Link>
        </div>
      </body>
    </html>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
    backgroundColor: "#f8d7da",
    color: "#721c24",
    padding: "20px",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  message: {
    fontSize: "1.2rem",
    marginBottom: "30px",
  },
  actions: {
    display: "flex",
    gap: "20px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#f5c6cb",
    color: "#721c24",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  link: {
    padding: "10px 20px",
    backgroundColor: "#d4edda",
    color: "#155724",
    borderRadius: "5px",
    textDecoration: "none",
  },
};
