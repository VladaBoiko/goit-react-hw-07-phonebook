import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/contactsSlice';
import { Input, Label } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const changeFilter = e => {
    dispatch(addFilter(e.currentTarget.value));
  };
  return (
    <Label>
      Enter name...
      <Input type="text" value={filter.filter} onChange={changeFilter}></Input>
    </Label>
  );
};
