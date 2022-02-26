import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import './search.scss'
import {useCallback, useMemo, useState} from "react";

const Search = () => {
    const [input, setInput] = useState('');

    const handleInput = useCallback((value) => {
        setInput(value.target.value)
    }, [])

    const handleOnKeyDown = useCallback((e) => {
        if (e.key === 'Enter') {
            window.open(`https://www.google.com/search?q=${input}`, '_blank');
            setInput('');
        }
    }, [input])

    return useMemo(() => (
        <div className='search'>
            <table className='elementsContainer'>
                <tr>
                    <td>
                        <input
                            type="text"
                            name="q"
                            placeholder='Search'
                            className='search__input'
                            value={input}
                            onChange={handleInput}
                            onKeyDown={handleOnKeyDown}
                            autocomplete="off"
                        />
                    </td>
                    <td>
                        <a href="#"><FontAwesomeIcon className='material-icons' icon={faSearch}>search</FontAwesomeIcon></a>
                    </td>
                </tr>
            </table>
        </div>
    ), [handleInput, handleOnKeyDown, input])
}

export default Search