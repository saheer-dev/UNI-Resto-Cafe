import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const userContext = createContext();

const ContextApi = (props) => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios
      .get("https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099")
      .then((res) => {
        setDatas(res.data[0]);
        console.log(res.data[0]);
        console.log("datas", datas);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <userContext.Provider value={datas}>{props.children}</userContext.Provider>
  );
};

export { ContextApi, userContext };
