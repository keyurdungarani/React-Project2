import React from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import _ from 'lodash';

export default function Table(props) {
    const { type, items, setItems, setInputData, setId, setShow } = props;

    const dixit = _.filter(items, (item) => {
        if (item.type === type) {
            return item;
        }
    })

    const deleteRows = (data) => {
        const Items = JSON.parse(localStorage.getItem('items'));
        const rows = _.filter(Items, (item) => { if (item.email !== data.email) return item; })
        setItems(rows);
        localStorage.setItem('items', JSON.stringify(rows));
        toast.success('Deleted Successfully!');
    }

    const editRows = (data) => {
        setInputData(data);
        setId(data.id);
        setShow(true);
    }

    return (
        <>
            <div>
                <hr style={{ marginTop: "65px" }}></hr>
                <h2 className="mb-3" style={{ marginTop: "25px", display: "flex", justifyContent: "center" }}><i className="fa fa-user" style={{ fontSize: "35px", color: "red", marginRight: "8px", marginTop: "3px" }}> </i>{type} Data</h2>
                <div style={{ marginRight: "60px", marginLeft: "60px" }}>
                    {dixit.length > 0 &&
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
                                    <th scope="col">Type</th>
                                    <th scope="col">DOB</th>
                                    <th scope='col' colSpan={2}>Action</th>
                                </tr>
                            </thead>
                            <tbody>{
                                dixit.map((data, index) => {
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
                                            <td>{data.type}</td>
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
                <hr style={{ marginTop: "65px" }}></hr>
            </div>
        </>
    )
}
