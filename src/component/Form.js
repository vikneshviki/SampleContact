import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleFormData = (e) => {
    e.preventDefault();
    console.log("form data", formData);
    axios
      .post("http://localhost:8080/create", formData)
      .then((res) => console.log("success response", res.data))
      .catch((error) => {
        console.error(
          "Error:",
          error.response ? error.response.data : error.message
        );
      });
  };

  const handleFormValue = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <form onSubmit={handleFormData} class="row g-3 needs-validation" novalidate>
      <div class="col-md-4">
        <label for="validationCustom01" class="form-label">
          First name
        </label>
        <input
          type="text"
          class="form-control"
          id="validationCustom01"
          name="name"
          placeholder="First name"
          onChange={handleFormValue}
          value={formData.name}
          required
        />
      </div>
      <div class="col-md-4">
        <label for="validationCustom02" class="form-label">
          Contact
        </label>
        <input
          type="text"
          class="form-control"
          id="validationCustom02"
          value={formData.phone}
          name="phone"
          onChange={handleFormValue}
          required
        />
      </div>
      <div class="col-md-4">
        <label for="validationCustomUsername" class="form-label">
          Email
        </label>
        <div class="input-group has-validation">
          <span class="input-group-text" id="inputGroupPrepend">
            @
          </span>
          <input
            type="text"
            class="form-control"
            id="validationCustomUsername"
            aria-describedby="inputGroupPrepend"
            value={formData.email}
            name="email"
            onChange={handleFormValue}
            required
          />
        </div>
      </div>
      <div class="col-md-6">
        <label for="validationCustom03" class="form-label">
          Address
        </label>
        <input
          type="text"
          class="form-control"
          id="validationCustom03"
          name="address"
          value={formData.address}
          onChange={handleFormValue}
          required
        />
        <div class="invalid-feedback">Please provide a valid city.</div>
      </div>
      <div class="col-12">
        <button class="btn btn-primary" type="submit">
          Submit form
        </button>
      </div>
    </form>
  );
};

export default Form;
