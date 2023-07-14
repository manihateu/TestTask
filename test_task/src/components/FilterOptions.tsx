import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/types';
import { filterTasks } from '../store/actions';
import styled from 'styled-components';

const FilterContainer = styled.div`
  margin-top: 16px;
`;

const FilterLabel = styled.label`
  margin-right: 8px;
  font-weight: bold;
`;

const FilterSelect = styled.select`
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline: none;
  transition: border-color 0.3s;
  appearance: none;
  background-color: #fff;
  cursor: pointer;

  &:hover {
    border-color: #007bff;
  }

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.2);
  }
`;

const FilterOption = styled.option`
  font-size: 16px;
  border-radius: 4px;
`;

const FilterOptions: React.FC = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.filter);

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const filterOption = event.target.value as RootState['filter'];
    dispatch(filterTasks(filterOption));
  };

  return (
    <FilterContainer>
      <FilterLabel htmlFor="filter-select">Фильтр:</FilterLabel>
      <FilterSelect id="filter-select" value={filter} onChange={handleFilterChange}>
        <FilterOption value="all">Все</FilterOption>
        <FilterOption value="completed">Выполненные</FilterOption>
        <FilterOption value="uncompleted">Невыполненные</FilterOption>
      </FilterSelect>
    </FilterContainer>
  );
};

export default FilterOptions;
