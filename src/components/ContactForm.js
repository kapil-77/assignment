import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../styles/ContactForm.css'

const ContactForm = () => {
  const [contacts, setContacts] = useState([])
  const [form, setForm] = useState({
    createdAt: '',
    first_name: '',
    last_name: '',
    emailId: '',
    age: 0,
    gender: 'Male',
    mobilenumber: '',
    pan_no: '',
    adhaar_no: '',
    status: true,
  })
  const [editing, setEditing] = useState(false)
  const [currentId, setCurrentId] = useState(null)

  useEffect(() => {
    axios
      .get('https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile')
      .then((response) => setContacts(response.data))
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editing) {
      axios
        .put(
          `https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile/${currentId}`,
          form
        )
        .then((response) => {
          setContacts(
            contacts.map((contact) =>
              contact.id === currentId ? response.data : contact
            )
          )
          setEditing(false)
          setForm({
            createdAt: '',
            first_name: '',
            last_name: '',
            emailId: '',
            age: 0,
            gender: 'Male',
            mobilenumber: '',
            pan_no: '',
            adhaar_no: '',
            status: true,
          })
        })
    } else {
      axios
        .post(
          'https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile',
          form
        )
        .then((response) => setContacts([...contacts, response.data]))
    }
  }

  const handleEdit = (id) => {
    const contact = contacts.find((contact) => contact.id === id)
    setForm(contact)
    setEditing(true)
    setCurrentId(id)
  }

  const handleDelete = (id) => {
    axios
      .delete(
        `https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile/${id}`
      )
      .then(() => setContacts(contacts.filter((contact) => contact.id !== id)))
  }

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="first_name"
          value={form.first_name}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          name="last_name"
          value={form.last_name}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
        <input
          type="email"
          name="emailId"
          value={form.emailId}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="number"
          name="age"
          value={form.age}
          onChange={handleChange}
          placeholder="Age"
          required
        />
        <input
          type="text"
          name="gender"
          value={form.gender}
          onChange={handleChange}
          placeholder="Gender"
          required
        />
        <input
          type="text"
          name="mobilenumber"
          value={form.mobilenumber}
          onChange={handleChange}
          placeholder="Mobile Number"
          required
        />
        <input
          type="text"
          name="pan_no"
          value={form.pan_no}
          onChange={handleChange}
          placeholder="PAN Number"
          required
        />
        <input
          type="text"
          name="adhaar_no"
          value={form.adhaar_no}
          onChange={handleChange}
          placeholder="Aadhaar Number"
          required
        />
        <button type="submit">{editing ? 'Update' : 'Submit'}</button>
      </form>
      <div className="contacts-list">
        {contacts.map((contact) => (
          <div key={contact.id} className="contact-item">
            {contact.first_name} {contact.last_name}
            <button className="edit" onClick={() => handleEdit(contact.id)}>
              Edit
            </button>
            <button className="delete" onClick={() => handleDelete(contact.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ContactForm
