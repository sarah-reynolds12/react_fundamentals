const Contact = (props) => {
        return <>
    <h3>{props.name}</h3>
    <p>{props.age}, {props.school}, {props.graduationYear}</p>
    </>
}

export default Contact

//create a component names Contacts
//pass name, age, school, graduationYear props into it <p>
//return an h3 with name, and a p  with remaining information