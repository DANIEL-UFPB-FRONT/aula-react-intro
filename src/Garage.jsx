function Garage(props){
    return (
    <>
        <h1>Garage</h1>
        {
            props.cars.length > 0 &&
            <h2>
                You have {props.cars.length} cars in your garage
            </h2>
        }
    </>
    )
}

export default Garage
