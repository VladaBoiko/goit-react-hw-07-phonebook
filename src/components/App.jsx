import { AddForm } from 'components/Form/Form';
import { MainTitle } from './MainTitle/MainTitle';
import { Section } from './SectionWithTitle/SectionWithTitle';
import { ContactList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
export default function App() {
  return (
    <div
      style={{
        width: '1000px',
        margin: '0 auto',
        padding: '0 50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <MainTitle />
      <AddForm />
      <Filter />
      <Section title="Contacts">
        <ContactList />
      </Section>
    </div>
  );
}
