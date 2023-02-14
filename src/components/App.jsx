import { ToastContainer } from 'react-toastify';
import { notificationParams } from 'settings/settings';
import 'react-toastify/dist/ReactToastify.css';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';



// const useLocalStorage = (key, defaultValue) => {
//   const [state, setState] = useState(() => {
//     return JSON.parse(window.localStorage.getItem(key)) || defaultValue;
//   });

//   useEffect(() => {
//     window.localStorage.setItem(key, JSON.stringify(state));
//   }, [key, state]);

//   return [state, setState];
// };

export default function App() {
  // const [contacts, setContacts] = useLocalStorage('contacts', []);

  // const [filter, setFilter] = useState('');

  // const changeFilter = event => {
  //   setFilter(event.target.value);
  // };

  // const deleteContact = contactId => {
  //   if (window.confirm('Do you really want to delete the contact?')) {
  //     setContacts(contacts.filter(contact => contact.id !== contactId));
  //     toast.success('The contact was deleted succsesfully!');
  //   } else return;
  // };

  // const formSubmitHandler = newContactData => {
  //   const isContactNameInContactsList = contacts.some(
  //     contact => contact.name === newContactData.name
  //   );

  //   if (isContactNameInContactsList) {
  //     toast.warning(`${newContactData.name} is already in contacts!`, {
  //       notificationParams,
  //     });
  //   } else {
  //     setContacts(prevState => {
  //       const newContact = {
  //         id: shortid.generate(),
  //         ...newContactData,
  //       };
  //       toast.success(`${newContactData.name} added to your contacts!`);
  //       return [newContact, ...prevState];
  //     });
  //   }
  // };
  // const filteredContacts = contacts.filter(value =>
  //   value.name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <div>
      <h1 style={{ textAlign: 'center', fontWeight: '700' }}>Phonebook</h1>
      <ContactForm />
      <h2 style={{ textAlign: 'center', fontWeight: '700' }}>Contacts</h2>
      <Filter />
      <ContactList />
      <ToastContainer
        theme="colored"
        autoClose={notificationParams.autoClose}
      />
    </div>
  );
}
