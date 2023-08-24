import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';


export default function Loginform() {

    let navigate = useNavigate();
    const initialInput = {
        firstname: '',
        lastname: '',
        email: '',
        address: '',
        phone: '',
        password: '',
        gender: '',
        hobby: [],
        country: '',
        type: '',
        dob: '',
        id: ''
    };
    const [items, setItems] = useState([]);
    const [inputData, setInputData] = useState(initialInput);
    const [id1, setId] = useState('');

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('items')) || [];
        if (items) {
            setItems(items);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newinput = ({ ...inputData, id: uuidv4() });
        const checkEmptyInput = !Object.values(newinput).some(res => res === "");
        const items = JSON.parse(localStorage.getItem('items')) || [];

        const checkmail = items?.map((item) => {
            if (item.id !== inputData.id) {
                return item.email;
            }
            return false;
        });

        if (!checkEmptyInput) {
            toast.warn('All filed are Required!');

        }
        else if ((checkmail?.includes(inputData.email))) {

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
                navigate("/login", { replace: true });

            }
            setInputData(initialInput);
            setId('');
        }
    }

    const deleteRows = (data) => {
        const Items = JSON.parse(localStorage.getItem('items'));
        const rows = Items.filter((item) => {
            if (item.email !== data.email) {
                return item;
            }
            return false;
        });
        setItems(rows);
        localStorage.setItem('items', JSON.stringify(rows));
        toast.success('Deleted Successfully!');
    }

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

    const editRows = (data) => {
        setInputData(data);
        setId(data.id);
    }

    return (
        <>
            <div>
                <form>
                    <div className="col m-5">
                        <div className="col" style={{ display: "flex", justifyContent: "space-around" }}>
                            <div className="form-outline mt-2" style={{ width: "48%" }}>
                                <label className="form-label" htmlFor="form6Example1">First name</label>
                                <input type="text" name="firstname" id="form6Example1" placeholder="First name" className="form-control" value={inputData.firstname} onChange={handleChange} />
                            </div>
                            <div className="form-outline mt-2" style={{ width: "48%" }}>
                                <label className="form-label" htmlFor="form6Example2">Last name</label>
                                <input type="text" name="lastname" id="form6Example2" placeholder="Last name" className="form-control" value={inputData.lastname} onChange={handleChange} />
                            </div>
                        </div>

                        <div className="col" style={{ display: "flex", justifyContent: "space-around" }}>
                            <div className="form-outline mt-2" style={{ width: "48%" }}>
                                <label className="form-label" htmlFor="form6Example5">Email</label>
                                <input type="email" id="form6Example5" name="email"  placeholder="Email" className="form-control" value={inputData.email} onChange={handleChange} />
                            </div>
                            <div className="form-outline mt-2" style={{ width: "48%" }}>
                                <label className="form-label" htmlFor="form6Example4">Address</label>
                                <textarea className="form-control" name="address" placeholder="Address" id="exampleFormControlTextarea1" rows="1" value={inputData.address} onChange={handleChange}></textarea>
                            </div>
                        </div>

                        <div className="col" style={{ display: "flex", justifyContent: "space-around" }}>
                            <div className="form-outline mt-2 " style={{ width: "48%" }}>
                                <label className="form-label" htmlFor="form6Example6">Phone No.</label>
                                <input type="number" id="form6Example6" name="phone" placeholder="Phone No." className="form-control" value={inputData.phone} onChange={handleChange} />
                            </div>
                            <div className="form-outline mt-2" style={{ width: "48%" }}>
                                <label className="form-label" htmlFor="form6Example6">Password</label>
                                <input type="password" className="form-control" name="password" id="inputPassword" placeholder="Password" value={inputData.password} onChange={handleChange} />
                            </div>
                        </div>

                        <div className="col" style={{ display: "flex", justifyContent: "space-around" }}>
                            <div className="form-outline mt-2 " style={{ width: "48%" }}>
                                <legend className="col-form-label col-sm-2 pt-0 mt-2" >Gender:</legend>
                                <div className="form-check form-check-inline mt-2">
                                    <input className="form-check-input" type="radio" name="gender" id="inlineRadio1" checked={inputData.gender === "Male" ? true : false} value="Male" onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                                </div>
                                <div className="form-check form-check-inline mt-2">
                                    <input className="form-check-input" type="radio" name="gender" id="inlineRadio2" checked={inputData.gender === "Female" ? true : false} value="Female" onChange={handleChange} />

                                    <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                                </div>
                            </div>
                            <div className="form-outline mt-2 " style={{ width: "48%" }}>
                                <legend className="col-form-label col-sm-2 pt-0 mt-2" >Hobby:</legend>

                                <div className="form-check form-check-inline mt-2">
                                    <input className="form-check-input" type="checkbox" name="hobby" id="gridCheck1" value="Cricket " checked={inputData.hobby?.includes("Cricket ")} onChange={handleChange1} />
                                    <label className="form-check-label" name="hobby" htmlFor="gridCheck1">Cricket</label>
                                </div>

                                <div className="form-check form-check-inline mt-2">
                                    <input className="form-check-input" type="checkbox" name="hobby" id="gridCheck2" value="Dancing " checked={inputData.hobby?.includes("Dancing ")} onChange={handleChange1} />
                                    <label className="form-check-label" name="hobby" htmlFor="gridCheck2">Dancing</label>

                                </div>
                                <div className="form-check form-check-inline mt-2">
                                    <input className="form-check-input" type="checkbox" name="hobby" id="gridCheck3" value="Singing " checked={inputData.hobby?.includes("Singing ")} onChange={handleChange1} />
                                    <label className="form-check-label" name="hobby" htmlFor="gridCheck3">Singing</label>

                                </div>
                            </div>
                        </div>

                        <div className="col" style={{ display: "flex", justifyContent: "space-around" }}>
                            <div className="form-outline mt-2 " style={{ width: "48%" }}>
                                <label className="form-label" htmlFor="form6Example6" >Country:</label>
                                <select className="form-control" id="exampleFormControlSelect1" name="country" value={inputData.country} onChange={handleChange}>
                                    <option>Select</option>
                                    <option>India</option>
                                    <option>UK</option>
                                    <option>Australia</option>
                                    <option>Rasia</option>
                                </select>
                            </div>
                            <div className="form-outline mt-2 " style={{ width: "48%" }}>
                                <label className="form-label" htmlFor="form6Example6">User Type::</label>
                                <select className="form-control" id="exampleFormControlSelect11" name="type" value={inputData.type} onChange={handleChange}>
                                    <option>Select</option>
                                    <option>User</option>
                                    <option>Admin</option>
                                    <option>Superadmin</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-outline mt-2 " style={{ width: "48%" }}>
                            <legend className="col-form-label col-sm-2 pt-0 mt-2" style={{ marginLeft: "20px" }} name="dob">DOB:</legend>
                            <input className="mt-2" type="date" id="dob" name="dob" style={{ width: "20%" }} value={inputData.dob} onChange={handleChange}
                            />
                        </div>

                        <div className="col" style={{ display: "flex", justifyContent: "space-around" }}>
                            <button type="submit" className="btn btn-dark btn-block mt-5 " onClick={handleSubmit} style={{ marginRight: "150px", width: "150px" }}>{id1 ? "Update" : "Submit"} <i className="fa fa-send-o"></i></button>
                        </div>

                        <hr style={{marginTop: "65px"}}></hr>
                    </div>
                </form>
            </div>

            <div style={{ marginRight: "60px", marginLeft: "60px" }}>
                <h2 className="mb-3" style={{ display: "flex", justifyContent: "center" }}><i className="fa fa-user" style={{ fontSize: "35px", color: "red", marginRight: "8px", marginTop: "3px" }}> </i> User Data   </h2>
                <div>
                {items.length > 0 &&
                    <table className="table table-dark table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Address</th>
                                <th scope="col">Phone no.</th>
                                <th scope="col">Password</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Hobby</th>
                                <th scope="col">Country</th>
                                <th scope="col">DOB</th>
                                <th scope='col' colSpan={2}>Action</th>
                            </tr>
                        </thead>
                        <tbody>{
                            items.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{data.firstname}</td>
                                        <td>{data.lastname}</td>
                                        <td>{data.email}</td>
                                        <td>{data.address}</td>
                                        <td>{data.phone}</td>
                                        <td>{data.password}</td>
                                        <td>{data.gender}</td>
                                        <td>{data.hobby?.join(", ")}</td>
                                        <td>{data.country}</td>
                                        <td>{data.dob}</td>
                                        <td><i style={{ cursor: 'pointer' }} className="fa fa-edit" onClick={() => editRows(data)}></i></td>
                                        <td><i style={{ cursor: 'pointer' }} className="fa fa-trash" onClick={() => deleteRows(data)}></i></td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                }
                </div>
            </div>
        </>
    )
}
