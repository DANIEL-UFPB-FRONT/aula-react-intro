export default function ListCars(props){
    return (
    <>
        <h1>Lista de Carros</h1>
        <ul>
            {
                props.cars.map((car, index) => {
                        return <h2 key={index}>{car}</h2>
                    }
                )
            }
        </ul>        
    </>
    )
}