import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FilterState, RootState } from '../store/types';
import { filterTasks } from '../store/actions';

const FilterOptions: React.FC = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.filter);

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const filterOption = event.target.value as FilterState;
    dispatch(filterTasks(filterOption));
  };

  return (
    <div>
      <label htmlFor="filter-select">Фильтр:</label>
      <select id="filter-select" value={filter} onChange={handleFilterChange}>
        <option value="all">Все</option>
        <option value="completed">Выполненные</option>
        <option value="uncompleted">Невыполненные</option>
      </select>
    </div>
  );
};

export default FilterOptions;
