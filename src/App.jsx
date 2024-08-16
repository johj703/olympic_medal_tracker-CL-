import useState from "react";
import Header from "./Components/Header";
import Input from "./Components/Input";
import Table from "./Components/Table";

function App() {
  const [countries, setCountries] = useState([]);
  const [formData, setFormData] = useState({
    countries: "",
    gold: "",
    silver: "",
    bronze: "",
  });

  return (
    <>
      <Header />
      <form>
        <Input />
      </form>
      <Table countries={countries} />
    </>
  );
}

export default App;
