import { Item } from "../../App";
import "./CharacterGrid.scss";
import CharacterItem from "../CharacterItem/CharacterItem";
import Spinner from "../Spinner/Spinner";

interface Props {
  isLoading: boolean;
  items: Item[];
}

const CharacterGrid = ({ isLoading, items }: Props) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className='cards'>
      {items.map((item) => (
        <CharacterItem key={item.char_id} item={item} />
      ))}
    </section>
  );
};

export default CharacterGrid;
