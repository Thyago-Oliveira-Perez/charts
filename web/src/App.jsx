import { useEffect, useState } from "react";
import Api from "./api/api";

export default function App() {
  const [data, setData] = useState([]);
  const api = new Api();

  useEffect(() => {
    api.get("infos").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div style={{ border: "2px solid red" }}>
      <h1>Cyber Security Charts</h1>
      <ul>
        {data.map((d, i) => (
          <li key={i}>{d.dst_ip}</li>
        ))}
      </ul>
    </div>
  );
}
