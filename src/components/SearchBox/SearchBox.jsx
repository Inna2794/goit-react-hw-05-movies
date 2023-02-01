import { Input, SearchBtn, SearchForm } from './SearchBox.styled';

const SearchBox = ({ onSubmit }) => {
  return (
    <SearchForm onSubmit={onSubmit}>
      <Input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies..."
      ></Input>
      <SearchBtn type="submit">Search</SearchBtn>
    </SearchForm>
  );
};
export default SearchBox;
