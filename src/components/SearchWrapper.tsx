import * as React from 'react';
import Search from './Search';

interface Props {}

const SearchWrapper: React.FC<Props> = () => {
  const [searchText, setSearchText] = React.useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchText(e.target.value);
  };
  return (
    <div>
      <Search value={searchText} onChange={handleChange} onPlaceholder='search'>
        Search:
      </Search>

      <h3>Searching for {searchText ? searchText : '...'}</h3>
    </div>
  );
};
export default SearchWrapper;
