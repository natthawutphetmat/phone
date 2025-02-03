// app/not-found.js

export default function NotFound() {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>404 - Page Not Found</h1>
        <p style={styles.message}>
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <a href="/" style={styles.link}>Go Back to Homepage</a>
      </div>
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
      backgroundColor: "#f9f9f9",
      color: "#333",
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
    link: {
      padding: "10px 20px",
      backgroundColor: "#0070f3",
      color: "#fff",
      borderRadius: "5px",
      textDecoration: "none",
    },
  };
  