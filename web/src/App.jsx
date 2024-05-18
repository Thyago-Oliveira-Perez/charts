import Api from "./api/api";

export default function App() {
  const api = new Api();

  const getInfos = async () => {
    const response = await api.get("infos");
    console.log(response);
  };

  return <>Hello World!</>;
}
