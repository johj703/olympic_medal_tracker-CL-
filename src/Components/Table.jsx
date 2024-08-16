/* eslint-disable react/prop-types */
const Table = ({ countries }) => {
  return (
    <>
      {countries.length === 0 ? (
        <p>아직 추가된 국가가 없습니다. 메달을 추적하세요!</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>국가명</th>
              <th>금메달</th>
              <th>은메달</th>
              <th>동메달</th>
              <th>액션</th>
            </tr>
          </thead>
          <tbody>
            {countries.map((counties, index) => (
              <tr key={index}>
                <th>{countries.countries}</th>
                <th>{countries.gold}</th>
                <th>{countries.silver}</th>
                <th>{countries.bronze}</th>
                <td>
                  <button className="deleteButton">삭제</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Table;
