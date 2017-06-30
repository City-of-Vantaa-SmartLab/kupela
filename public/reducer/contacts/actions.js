import contacts from '../../JSON/contacts';
export const LOAD_CONTACTS = 'LOAD_CONTACTS';

export function getContacts() {
    return {
        type: LOAD_CONTACTS,
        contacts
    }
}