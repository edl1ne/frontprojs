// 10.3 
const contactBook = {
    contacts: [
        {
            name: "Artem Shevchenko",
            phone: "123-456-7890",
            email: "dostor19@gmail.com"
        },
        {
            name: "Tim Cook",
            phone: "444-444-444",
            email: "apple@apple.com"
        }
    ],

    findContactByName: function(name) {
        return this.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
    },

    addContact: function(name, phone, email) {
        this.contacts.push({ name, phone, email });
    }
};

contactBook.addContact("Mihailo Kovalenko", "111-222-3333", "mihkov@gmail.com");

const contact = contactBook.findContactByName("Tim Cook");

if (contact) {
    console.log(`Finded contact: ${contact.name}, Phone number: ${contact.phone}, Email: ${contact.email}`);
} else {
    console.log("Contact not finded.");
}

console.log("All contacts:", contactBook.contacts);
