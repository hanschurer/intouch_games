import { Modal, Button,Table } from 'react-bootstrap'
import React from 'react'

const Confirmation = ({ show, handleClose, handleConfirmed, data }) => {


  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body className='container-fluid' >
          <Table className='striped bordered hover'>
            <tbody>
              <tr><td>name</td> <td>{data.username}</td></tr>
              <tr><td>email</td> <td>{data.email}</td></tr>
              <tr><td>phone</td> <td>{data.phone}</td></tr>
              <tr><td>Date of Birth</td> <td>{data.DOB}</td></tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
          <Button variant="primary" onClick={handleConfirmed}>
            Sign Up
            </Button>
        </Modal.Footer>
      </Modal>
    </>)

}

export default Confirmation
