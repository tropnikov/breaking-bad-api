import { useState } from "react";
import "./Search.scss";

interface Props {
  getQuery: Function;
}
const Search = ({ getQuery }: Props) => {
  const [query, setQuery] = useState("");
  const onChange = (text: string) => {
    setQuery(text);
    getQuery(text);
  };

  return (
    <section className='search'>
      <form>
        <input
          type='search'
          className='form-control'
          placeholder='Search characters...(registry dependent)'
          value={query}
          onChange={(evt) => onChange(evt.target.value)}
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
