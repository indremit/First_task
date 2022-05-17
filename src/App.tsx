import { Table } from "./Table";
import { useEffect, useState } from "react";
import axios from "axios";
import './App.css';


export default function App() {

  const [data, setData] = useState([]);

  let dataArray: any = [];

  useEffect(() => {
    axios("https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole")
      .then((res) => {
        setData(res.data);
        dataArray = res.data;
      })
      .catch((err) => console.log(err))
  }, []);

  return (
    <div className="App">
      <Table data = {data} />
    </div>
  );
}
