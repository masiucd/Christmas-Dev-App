import * as React from 'react';

interface Props<T> {
  children: React.ReactNode;
  onPlaceholder: string;
  value: T;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props<string>> = ({
  children,
  value,
  onChange,
  onPlaceholder,
}) => {
  return (
    <div>
      <label htmlFor='search'>{children}</label>
      <input
        type='text'
        id='search'
        value={value}
        onChange={onChange}
        placeholder={onPlaceholder}
      />
    </div>
  );
};
export default Search;
