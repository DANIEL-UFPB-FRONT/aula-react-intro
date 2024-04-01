import Car from "./components/Car"
function CarSet(props){
    return (
        <>
            <h1> My set of cars with colors</h1>
            {props.children}
        </>
    )
}

export default CarSet