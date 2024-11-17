import React from "react";

const ContactList = ({ list }) => {
  return list.length > 0 ? (
    list.map((i) => (
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{i.name}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">{i.address}</h6>
          <p class="card-text">
            {i.email} | {i.phone}
          </p>
        </div>
      </div>
    ))
  ) : (
    <h2>No Product Found</h2>
  );
};

export default ContactList;
