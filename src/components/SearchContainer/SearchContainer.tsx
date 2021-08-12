import { useState, FC, BaseSyntheticEvent } from "react";
import RSC from "react-scrollbars-custom";
import "./SearchContainer.css";
import AddressInfo from "../AddressInfo/AddressInfo";

const SearchContainer: FC = () => {
  const [list, setList] = useState<any[]>([]);
  const [inputText, setInput] = useState<string>("");
  const listHength = list.length > 10 ? "100vh" : "60vh";
  const styleClass = list.length > 10 ? "info-wrap" : "info-container";

  const sendReq = (e: BaseSyntheticEvent) => {
    setInput(e.target.value);
    if (e.target.value.length >= 3) {
      fetch(
        `https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address`,
        {
          method: "post",
          body: JSON.stringify({
            count: 20,
            query: inputText,
          }),
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            Authorization: "Token 64ce5e2f9a1aa153c07ca55c6ce55d67cdeaa68d",
          },
        }
      )
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          setList(data.suggestions);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <section className="search-section">
      <div className="search-container">
        <h1 className="search-section__title">Поиск адресов</h1>
        <p className="search-section__subtitle">
          Введите интересующий вас адрес
        </p>
        <div className="search">
          <input
            type="text"
            className="search__input"
            placeholder="Введите интересующий вас адрес"
            autoComplete="off"
            onChange={sendReq}
            value={inputText}
          />

          <button className="search__button">Поиск</button>
        </div>
        {list.length > 0 && (
          <div className="search-wrapper">
            <RSC
              id="RSC-Example"
              thumbYProps={{ className: "search-wrapper__thumb" }}
              style={{ width: "100%", height: listHength }}
            >
              <h2 className="search-wrapper__title">Адреса</h2>
              <hr className="search-wrapper__trait" />
              {list.length > 0 ? (
                <section className={styleClass}>
                  {list.map((item, index) => {
                    return <AddressInfo key={index} title={item.value} />;
                  })}
                </section>
              ) : null}
            </RSC>
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchContainer;
