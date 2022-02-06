import React from "react";
import PropTypes from "prop-types";
import { Contacts, Contact, Button } from "./Contacts.styled";
import {
  deleteContact,
  contactsSelector,
} from "../../redux/contacts/contacts-slice";
import { filterSelector } from "../../redux/filter/filter-slice";
import { useDispatch, useSelector } from "react-redux";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelector);
  const filterValue = useSelector(filterSelector);

  const filteredContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  };

  return (
    <Contacts>
      {filteredContacts().map((contact) => (
        <Contact key={contact.id}>
          <span>
            {contact.name} : {contact.number}
          </span>
          <Button onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </Button>
        </Contact>
      ))}
    </Contacts>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
