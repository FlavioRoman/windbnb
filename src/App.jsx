import "./App.css";
import Navbar from "./components/Navbar";
import Stays from "./components/Stays";
import Loading from "./components/Loading";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  });
  return (
    <main>
      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <Navbar />
          <Stays />{" "}
        </>
      )}
    </main>
  );
}

export default App;
