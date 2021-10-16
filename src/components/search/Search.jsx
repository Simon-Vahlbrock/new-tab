import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import './search.scss'

const Search = () => {
    return <div className='search'>
        <table className='elementsContainer'>
            <tr>
                <td>
                    <form action="http://www.google.com/search" method="get">
                        <input
                            type="text"
                            name="q"
                            placeholder='Search'
                            className='search__input'
                        />
                    </form>
                </td>
                <td>
                    <a href="#"><FontAwesomeIcon className='material-icons' icon={faSearch}>search</FontAwesomeIcon></a>
                </td>
            </tr>
        </table>

    </div>
}

export default Search