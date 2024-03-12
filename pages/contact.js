import React, { useState } from "react";
import styles from "../styles/contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("formData", formData);
    const apiUrl = "http://localhost:3000/api/postcontact";
    postData(apiUrl, formData).then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
    });
    setFormData({});
  };

  // Example POST method implementation:
  async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  return (
    <div className={styles.formContainer}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className={styles.formControl}
            id="name"
            name="name"
            aria-describedby="nameHelp"
            placeholder="Enter name"
            value={formData.name || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className={styles.formControl}
            id="email"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={formData.email || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="exampleInputEmail1">Phone</label>
          <input
            type="phone"
            className={styles.formControl}
            id="phone"
            name="phone"
            aria-describedby="phoneHelp"
            placeholder="Enter phone number"
            value={formData.phone || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="desc">Elaborate your concern</label>
          <textarea
            className={styles.formControl}
            id="desc"
            name="desc"
            rows="3"
            value={formData.desc || ""}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className={styles.btn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
