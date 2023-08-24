import React from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'react-bootstrap';
import Modal from "react-bootstrap/Modal";
import { v4 as uuidv4 } from 'uuid';


export default function Modal1(props) {
    const { setItems, type, setInputData, setShow, setId, id1, show, inputData, initialInput } = props;



    const handleClose = () => {
        setInputData(initialInput);
        setShow(false);
    };

    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newinput = ({ ...inputData, id: uuidv4() });
        const checkEmptyInput = !Object.values(newinput).some(res => res === "");
        const items = JSON.parse(localStorage.getItem('items'));

        const checkmail = items.map((item) => {
            if (item.id !== inputData.id) {
                return item.email;
            }
            return false;
        });

        if (!checkEmptyInput) {
            toast.warn('All filed are Required!');
        }
        else if ((checkmail.includes(inputData.email))) {
            toast.warn('This email are already in use!');
        }

        else {

            if (id1) {
                const updateData = items.map((data) => {

                    if (data.id === id1) {
                        return newinput;
                    } else {
                        return data;
                    }
                })
                setItems(updateData);
                localStorage.setItem('items', JSON.stringify(updateData));
                toast.success('Update Successfully!');

            }
            else {
                const newData = [...items, newinput]
                setItems(newData);
                localStorage.setItem('items', JSON.stringify(newData));
                toast.success('Your Data Successfully Saved');
            }

            setInputData(initialInput);
            setId('');
            handleClose();
        }
    };

    const handleChange = (e) => {

        const newInput = (data) => ({ ...data, [e.target.name]: e.target.value })
        setInputData(newInput);

    }

    const handleChange1 = (e) => {
        const { value, checked } = e.target;
        const { hobby } = inputData;
        if (checked) {
            setInputData({ ...inputData, hobby: [...hobby, value] });
        } else {
            setInputData({ ...inputData, hobby: hobby.filter((e) => e !== value) })
        }

    }


    return (
        <>
            <button type="button" className="btn btn-primary pull-right mt-2" onClick={handleShow} style={{ marginRight: "47px", marginTop: "5px" }}><i className="fa fa-plus" /> Add {type}</button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add {type} <i className="fa fa-check" style={{ fontSize: "30px", color: "green" }}></i></Modal.Title>
                </Modal.Header>
                <Modal.Body>  <form>

                    <div className="col m-2">
                        <div className="col">
                            <div className="form-outline mt-2">
                                <label className="form-label" htmlFor="form6Example1">First name</label>
                                <input type="text" name="firstname" id="form6Example1" placeholder="First name" className="form-control" value={inputData.firstname} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-outline mt-2">
                                <label className="form-label" htmlFor="form6Example2">Last name</label>
                                <input type="text" name="lastname" id="form6Example2" placeholder="Last name" className="form-control" value={inputData.lastname} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="form-outline mt-2 ">
                            <label className="form-label" htmlFor="form6Example5">Email</label>
                            <input type="email" id="form6Example5" name="email" placeholder="Email" className="form-control" value={inputData.email} onChange={handleChange} />
                        </div>

                        <div className="form-outline mt-2">
                            <label className="form-label" htmlFor="form6Example4">Address</label>
                            <textarea className="form-control" name="address" placeholder="Address" id="exampleFormControlTextarea1" rows="3" value={inputData.address} onChange={handleChange}></textarea>
                        </div>

                        <div className="form-outline mt-2 ">
                            <label className="form-label" htmlFor="form6Example6">Phone No.</label>
                            <input type="number" id="form6Example6" name="phone" placeholder="Phone No." className="form-control" value={inputData.phone} onChange={handleChange} />
                        </div>

                        <div className="form-outline mt-2">
                            <label className="form-label" htmlFor="form6Example6">Password</label>
                            <input type="password" className="form-control" name="password" id="inputPassword" placeholder="Password" value={inputData.password} onChange={handleChange} />
                        </div>

                        <legend className="col-form-label col-sm-2 pt-0 mt-2" >Gender:</legend>
                        <div className="form-check form-check-inline mt-2">
                            <input className="form-check-input" type="radio" name="gender" id="inlineRadio1" checked={inputData.gender === "Male" ? true : false} value="Male" onChange={handleChange} />
                            <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                        </div>
                        <div className="form-check form-check-inline mt-2">
                            <input className="form-check-input" type="radio" name="gender" id="inlineRadio2" checked={inputData.gender === "Female" ? true : false} value="Female" onChange={handleChange} />
                            <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                        </div>


                        <div className="form-outline mt-2 ">
                            <legend className="col-form-label col-sm-2 pt-0 mt-2" >Hobby:</legend>

                            <div className="form-check form-check-inline mt-2">
                                <input className="form-check-input" type="checkbox" name="hobby" id="gridCheck1" value="Cricket " checked={inputData.hobby.includes("Cricket ")} onChange={handleChange1} />
                                <label className="form-check-label" name="hobby" htmlFor="gridCheck1">Cricket</label>
                            </div>

                            <div className="form-check form-check-inline mt-2">
                                <input className="form-check-input" type="checkbox" name="hobby" id="gridCheck2" value="Dancing " checked={inputData.hobby.includes("Dancing ")} onChange={handleChange1} />
                                <label className="form-check-label" name="hobby" htmlFor="gridCheck2">Dancing</label>

                            </div>
                            <div className="form-check form-check-inline mt-2">
                                <input className="form-check-input" type="checkbox" name="hobby" id="gridCheck3" value="Singing " checked={inputData.hobby.includes("Singing ")} onChange={handleChange1} />
                                <label className="form-check-label" name="hobby" htmlFor="gridCheck3">Singing</label>

                            </div>
                        </div>

                        <div className="form-outline mt-2 ">
                            <legend className="col-form-label col-sm-2 pt-0 mt-2" >Country:</legend>
                            <select className="form-control" id="exampleFormControlSelect1" name="country" value={inputData.country} onChange={handleChange}>
                                <option>Select</option>
                                <option>India</option>
                                <option>UK</option>
                                <option>Australia</option>
                                <option>Rasia</option>
                            </select>
                        </div>

                        <div className="form-outline mt-2 ">
                            <legend className="col-form-label col-sm-2 pt-0 mt-2" >Type:</legend>
                            <select className="form-control" id="exampleFormControlSelect1" name="type" value={inputData.type} onChange={handleChange}>
                                <option>Select</option>
                                <option>{type}</option>
                            </select>
                        </div>


                        <div className="form-outline mt-2 ">
                            <legend className="col-form-label col-sm-2 pt-0 mt-2" name="dob">DOB:</legend>
                            <input type="date" id="dob" name="dob" value={inputData.dob} onChange={handleChange}
                            />
                        </div>

                    </div>
                </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        <i className="fa fa-close"></i> Close
                    </Button>
                    <Button type="submit" className="btn btn-dark btn-block " onClick={handleSubmit}>{id1 ? "Update" : "Submit"}  <i className="fa fa-send-o"></i></Button>
                </Modal.Footer>
            </Modal>




        </>
    )
}
