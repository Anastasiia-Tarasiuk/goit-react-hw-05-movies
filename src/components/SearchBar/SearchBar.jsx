import { useState } from "react";
import { SearchButton, SearchForm } from "./SearchBar.styled";
import PropTypes from 'prop-types'; 

export const Searchbar = ({ onSubmit }) => {    

    const [inputValue, setInputValue] = useState('');
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit(inputValue);
        handleFormReset();
    }
    
    const handleInputChange = (e) => {
        const { value } = e.currentTarget;
        setInputValue(value);
    }

    const handleFormReset = () => {
        setInputValue('');
    }
  
    return (
        <SearchForm onSubmit={handleFormSubmit}>  
            <input
                onChange={handleInputChange}
                name="inputText"
                className="input"
                type="text"
                placeholder="Search images and photos"
                value={inputValue}
            />
            <SearchButton type="submit">Search</SearchButton>
        </SearchForm>
    )  
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,

}