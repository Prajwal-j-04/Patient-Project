//Our Patient Presentation Component

import {useRef, useState} from 'react';

const PatientSearch = (props) => {

    let textRef = useRef();

    let [state, setState] = useState({search:" "});

    
    // const addNewPatient = () =>
    // {
    //     props.addPatient(textRef.current.value);
    // }


    const listofPatients = () =>
    {
        console.log("1. Inside Patient List Presentation Components");
        props.listPatients();
    }

    const handleChange = (event) =>
    {

        setState
        (
            {
                ...state,
                [event.target.name]: event.target.value 



            }
        );

        props.searchPatient(event.target.value);
    
    }

    

    return (
        <div style={{ border: '5px solid purple' }}>
        <br />

        Patient List:

        <ol> 
        {props.searchedPatients && props.searchedPatients.map( (item,key) => <li key={key}> {item.name} </li> )}
        </ol>

        <tr> 
        {props.searchedPatients && props.searchedPatients.map( (item,key) => <li key={key}> {item.name} </li> )}
        </tr>

        <td> 
        {props.searchedPatients && props.searchedPatients.map( (item,key) => <li key={key}> {item.email} </li> )}
        </td>


        <br/><br/>
        <input type="text" ref={textRef} name="search" value={state.search}
        onChange = {event => handleChange(event)} /> 
        {/* &nbsp; */}
        {/* <button onClick={addNewPatient} > Add Patient </button> */}

        {/* <br/><br/>
        <button onClick={listofPatients} > List Patients (External)  </button> */}
        
        <br/><br/>
        Current value of search:{state.search}

        </div>
    )
}

export default PatientSearch;