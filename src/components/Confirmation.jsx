import {Modal,Button,Row,Col} from 'react-bootstrap'
import {useState} from 'react'
import React from 'react'

const Confirmation = ({show,handleClose,data}) => {

  
    return (
      <>  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body className="show-grid">
            {[...data].map(e=><table> <tbody> <td>name</td> <td>{e.name}</td>  </tbody></table>)}
            </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>)

}

export default Confirmation
