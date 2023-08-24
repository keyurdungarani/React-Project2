import React, { useEffect,useState} from 'react'
import Modal1 from './Modal1';
import Table from './Table';

export default function Layout(props) {
    const {type} = props;
    const [items, setItems] = useState([]);
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
    const [inputData, setInputData] = useState(initialInput);
    const [id1, setId] = useState('');
    const [show, setShow] = useState(false);
    
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('items'));
    
        if (items) {
            setItems(items);
        }
    }, []);

    return (
        <>
        <Modal1 
        setItems={setItems} 
        type={type}
        setInputData={setInputData}
        setShow={setShow}
        setId={setId}
        id1={id1}
        show={show}
        inputData={inputData}
        initialInput={initialInput}/>

        <Table
         setItems={setItems} 
         type={type}
         setInputData={setInputData}
         setShow={setShow}
         setId={setId}
         inputData={inputData}
         items={items}
         />
            </>
    )
}
