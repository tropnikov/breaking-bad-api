import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header/Header";
import CharacterGrid from "./components/CharacterGrid/CharacterGrid";
import Search from "./components/Search/Search";
import Pagination from "./components/Pagination/Pagination";

export interface Item {
  appearance: number[];
  better_call_saul_appearance: number[];
  birthday: string;
  category: string;
  char_id: number;
  img: string;
  name: string;
  nickname: string;
  occupation: string[];
  portrayed: string;
  status: string;
}

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [charsPerPage, setCharsPerPage] = useState(8);

  useEffect(() => {
    axios
      .get(`https://www.breakingbadapi.com/api/characters?name=${searchQuery}`)
      .then((response) => {
        return response.status === 200
          ? response.data
          : Promise.reject(`Ошибка с кодом: ${response.status}`);
      })
      .catch((error) => console.log(error))
      .then((data) => {
        console.log(data);
        setItems(data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [searchQuery]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const indexOfLastChar: number = currentPage * charsPerPage;
  const indexOfFirstChar: number = indexOfLastChar - charsPerPage;
  const currentChars: Item[] = items.slice(indexOfFirstChar, indexOfLastChar);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='container'>
      <Header />
      <Search getQuery={(text: string) => setSearchQuery(text)} />
      <Pagination
        charsPerPage={charsPerPage}
        totalChars={items.length}
        paginate={paginate}
      />
      <CharacterGrid isLoading={isLoading} items={currentChars} />
    </div>
  );
};

export default App;
