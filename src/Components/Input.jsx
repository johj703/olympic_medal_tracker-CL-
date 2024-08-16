const Input = (addCountries) => {
  return (
    <>
      <div>
        <p>국가명</p>
        <input
          type="text"
          name="country"
          placeholder="국가 입력"
          value={FormData.countries}
          required
        />
      </div>
      <div>
        <p>금메달</p>
        <input
          type="number"
          name="gold"
          placeholder="금메달 수"
          value={FormData.gold}
          required
        />
      </div>
      <div>
        <p>은메달</p>
        <input
          type="number"
          name="silver"
          placeholder="은메달 수"
          value={FormData.silver}
          required
        />
      </div>
      <div>
        <p>동메달</p>
        <input
          type="number"
          name="bronze"
          placeholder="동메달 수"
          value={FormData.bronze}
          required
        />
      </div>
      <div>
        <button onClick={addCountries}>국가 추가</button>
        <button>업데이트</button>
      </div>
    </>
  );
};

export default Input;
