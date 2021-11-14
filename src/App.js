import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import Container from "./components/Container/Container.js";
import { fetchContacts } from "./redux/phonebook/phonebook-operations";

import Loader from "react-loader-spinner";
import { getContacts, getLoading } from "./redux/phonebook/phonebook-selectors";
import Section from "./components/Section/Section";

export default function App() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      {isLoading ? (
        <Loader type="Rings" color="#00BFFF" height={80} width={80} />
      ) : null}
      {contacts.length ? (
        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      ) : null}
    </Container>
  );
}
