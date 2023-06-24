import "./App.css";
// HOOKS
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addStays } from "./redux/slice/staysSlice";
// COMPONENTS
import Card from "./components/Card";
import Stays from "./components/Stays";
import Loading from "./components/Loading";
import Search from "./components/Edit/Search";
import Navbar from "./components/Navbar/Navbar";
// UTILS
import { stays } from "./utils/stays";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(addStays(stays));
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <Navbar />
          <Search />
          <Stays />
          <Card />
        </>
      )}
    </main>
  );
}

export default App;
