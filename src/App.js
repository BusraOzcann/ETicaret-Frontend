import axios from "axios";
import { useEffect, useState } from "react";

import UserSignIn from "./Components/UserSignIn";

function App() {
  const [api, setApi] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((res) => {
        setApi(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      {api != null ? api["data"] : "..."}
      <UserSignIn />
    </div>
  );
}

export default App;
