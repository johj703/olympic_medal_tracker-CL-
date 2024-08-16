import useState from "react";
import Header from "./Components/Header";
import Input from "./Components/Input";
import Table from "./Components/Table";

function App() {
  // 사용하게 될 state들 생성(국가들, 입력하게 될 국가 및 금은동 메달)
  const [countries, setCountries] = useState([]);
  const [formData, setFormData] = useState({
    countries: "",
    gold: "",
    silver: "",
    bronze: "",
  });

  // 국가 추가 함수
  const addCountries = () => {
    setCountries([...countries, formData]),
      setCountries((prevCountries) =>
        [...prevCountries].sort((a, b) => b.gold - a.gold)
      );

    setFormData({
      countries: "",
      gold: "",
      silver: "",
      bronze: "",
    });
  };

  // 국가 업데이트 함수
  const updateCountries = () => {
    const index = countries.findIndex(
      (countries) => countries.countries === formData.countries
    );

    if (index == 1) {
      const miniUpdatedCountries = [...countries];
    }
  };

  // 국가 삭제 함수
  const deleteCountries = (index) => {
    setCountries(countries.filter((_, i) => i !== index));
  };

  return (
    <>
      <Header />
      <form onSubmit={(e) => e.preventDefault()}>
        <Input addCountries={addCountries} updateCountries={updateCountries} />
      </form>
      <Table
        countries={countries}
        addCountries={addCountries}
        deleteCountries={deleteCountries}
      />
    </>
  );
}

export default App;
