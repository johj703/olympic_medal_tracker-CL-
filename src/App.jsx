import useState from "react";
import Header from "./Components/Header";
import Input from "./Components/Input";
import Table from "./Components/Table";

function App() {
  const [country, setCountry] = useState([]);
  return (
    <>
      <Header />
      <Input />
      <Table country={country} />
    </>
  );
}

export default App;
