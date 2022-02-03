import React from "react";
import PropTypes from "prop-types";
import { Contacts, Contact, Button } from "./Contacts.styled";
import {
  deleteContact,
  contactsSelector,
} from "../../redux/contacts/contacts-slice";
import { useDispatch, useSelector } from "react-redux";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelector);
  return (
    <Contacts>
      {contacts.map((contact) => (
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
