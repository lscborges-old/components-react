import {Button} from './Button'
import {GenreResponseProps} from '../App'
import '../styles/sidebar.scss';

interface SideBarProps{
  genres: GenreResponseProps[],
  selectedGenreId: number,
  handleClickButton: (genre:number) => void,
}

export function SideBar(props:SideBarProps) {
const {genres,selectedGenreId,handleClickButton} = props;

  return(
    <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {genres.map(genre => (
        <Button
          id={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => handleClickButton(genre.id)}
          selected={selectedGenreId === genre.id}
        />
      ))}
    </div>

  </nav>
  )
}