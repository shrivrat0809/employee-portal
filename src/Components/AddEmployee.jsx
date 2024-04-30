import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function AddEmployee(props) {
  const [show, setShow] = useState(false);
  const [employeeName, setName] = useState("");
  const [employeeRole, setRole] = useState("");
  const [employeeImg, setImg] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setImg("")
    setName("")
    setRole("")
  }

  return (
    <>
      <div className="flex justify-center">
        <button
          onClick={handleShow}
          className="px-4 py-1 text-sm mt-5 text-blue-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
        >
          + Add Employee
        </button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={employeeName}
                autoFocus
                placeholder="ex-jhon doe"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Role</Form.Label>
              <Form.Control
                type="text"
                value={employeeRole}
                autoFocus
                placeholder="ex-fsd"
                onChange={(e) => setRole(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                value={employeeImg}
                autoFocus
                placeholder="ex-a.png"
                onChange={(e) => setImg(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            ></Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={(e) => {
              e.preventDefault(),
                props.addEmployee(employeeName, employeeRole, employeeImg);
              handleClose();
            }}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddEmployee;
