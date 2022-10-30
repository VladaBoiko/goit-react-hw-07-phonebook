import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { ContactItem } from '../ContactItem/ContactItem';
import { List } from './ContactsList.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const filtered = (contacts, filter) => {
  let filterContacts = null;
  if (filter === '') {
    filterContacts = contacts;
    return filterContacts;
  }
  const normalizedFilter = filter.toLowerCase();
  filterContacts = contacts.filter(contact =>
    contact.text.name.toLowerCase().includes(normalizedFilter)
  );
  if (filterContacts.length < 1) {
    Notify.warning('No matches =(');
  }
  return filterContacts;
};

export const ContactList = () => {
  const states = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = filtered(states.contacts, filter.filter);
  return (
    <List>
      {visibleContacts.map(state => {
        console.log(state);
        return (
          <ContactItem
            name={state.text.name}
            key={state.id}
            number={state.text.number}
            id={state.id}
          />
        );
      })}{' '}
    </List>
  );
};
