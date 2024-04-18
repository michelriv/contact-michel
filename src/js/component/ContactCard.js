import React from 'react';
import { Context } from '../store/appContext';
import { useContext } from 'react';


const ContactCard = ({ contact, editContact }) => {

  const { actions } = useContext(Context)

  
  const { full_name, email, phone, address, id } = contact;

  const idForeditContact = (id)=>{
    editContact()
    actions.updateId(id)
  }
 


  return (
    <div className="card focusCard col-md-12 mb-5">
      <div className="row g-0">
        </div>
        <div className="col-md-6 text-start">
          <div className="card-body">
            <h5 className="card-title mt-3">{full_name}</h5>
            <p className="card-text">
              <strong>Email:</strong> {email}
            </p>
            <p className="card-text">
              <strong>Phone:</strong> {phone}
            </p>
            <p className="card-text">
              <strong>Address:</strong> {address}
            </p>
          </div>
        </div>
        <div className="col-md-2 card-footer d-flex justify-content-center align-items-center">
            <button className="btn btn-light bg-transparent  me-2" onClick={()=>idForeditContact(id)}>
              <box-icon class='bx  bx-tada-hover' size="lg" color="white" type='solid' name='pencil'></box-icon>
              </button>
            <button className="btn btn-light bg-transparent" onClick={()=>actions.deleteContact(id)}>
            <box-icon class='bx bx-tada-hover' size="lg" color="white" type='solid' name='trash-alt'></box-icon>
              </button>
        </div>
      </div>
  );
};

export default ContactCard;