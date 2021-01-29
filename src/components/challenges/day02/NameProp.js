//Props- short for properties
//Parameters of a component function that get passed into the component to aid in its reuseability
//Dyanmic Data that can be assigned to child components.
//props are read only, a pure function, can't be changed

const NameProp = (props) => { //property returning React element
    return <h1>Hello, {props.name}</h1>
}

export default NameProp;

