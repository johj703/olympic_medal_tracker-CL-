import useState from "react";
import Header from "./Components/Header";
import Input from "./Components/Input";
import Table from "./Components/Table";

function App() {
  const [countries, setCountries] = useState([]);
  return (
    <>
      <Header />
      <Input />
      <Table country={countries} />
    </>
  );
}

export default App;
