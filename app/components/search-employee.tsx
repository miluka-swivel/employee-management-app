// SearchEmployee.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

interface SearchEmployeeProps {
  onSearch: (query: string) => void;
}

const SearchEmployee: React.FC<SearchEmployeeProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleSearch}
      placeholder="Search employees"
      className='form-control'
    />
  );
};

export default SearchEmployee;
