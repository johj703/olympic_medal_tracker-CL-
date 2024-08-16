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

  const addCountries = () => {
    setCountries([...countries, formData]),
      setCountries((prevCountries) =>
        [...prevCountries].sort((a, b) => b.gold - a.gold)
      );
  };

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
