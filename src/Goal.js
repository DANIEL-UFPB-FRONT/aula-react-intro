
function MissedGoal(params) {
    return <h1>Missed!</h1>
}

function MadeGoal(params) {
    return <h1>Goal!</h1>
}


function Goal(props) {
    const isGoal = props.isGoal
    if(isGoal){
        return <MadeGoal />
    }
    return <MissedGoal/>
}

// Ternary
// function Goal(props) {
//     const isGoal = props.isGoal
    
//     return (
//         <>
//           {isGoal ? <MadeGoal /> : <MissedGoal/>}  
//         </>
//     )
// }

export default Goal