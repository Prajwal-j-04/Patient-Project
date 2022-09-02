const PatientSearchCount = (props) => {

    return (
        <div style={{ border: '5px solid purple' }}>
        <br />

        <center> 
            Patient Count: {props.patients && props.patients.length} 
        </center>

        Patient List:

        <ol> 
        {props.patients && props.patients.map( (item,key) => <li key={key}> {item.name} </li> )}
        </ol>

        <ol> 
        {props.searchedPatients && props.searchedPatients.map( (item,key) => <li key={key}> {item.name} </li> )}
        </ol>

        <br/><br/>

        </div>
    )
}

export default PatientSearchCount;

