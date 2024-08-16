const Input = (addCountries) => {
  return (
    <>
      <div>
        <p>국가명</p>
        <input />
      </div>
      <div>
        <p>금메달</p>
        <input />
      </div>
      <div>
        <p>은메달</p>
        <input />
      </div>
      <div>
        <p>동메달</p>
        <input />
      </div>
      <div>
        <button onClick={addCountries}>국가 추가</button>
        <button>업데이트</button>
      </div>
    </>
  );
};

export default Input;
