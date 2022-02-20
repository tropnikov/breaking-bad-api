import { Item } from "../../App";
import "./CharacterItem.scss";
interface Props {
  item: Item;
}

const CharacterItem = ({ item }: Props) => {
  return (
    <div className='card'>
      <div className='card-container'>
        <div className='card-front'>
          <img src={item.img} alt='Character' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <span className='heading'>Actor Name:</span> {item.portrayed}
            </li>
            <li>
              <span className='heading'>Nickname:</span> {item.nickname}
            </li>
            <li>
              <span className='heading'>Birthday:</span> {item.birthday}
            </li>
            <li>
              <span className='heading'>Status:</span> {item.status}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
