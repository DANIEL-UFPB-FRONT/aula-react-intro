import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//#0 Default code by vite
// import App from './App.jsx'
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

//#1 Sample without jsx
// const myElement = React.createElement('h1',{},'I do not use JSX!')
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(myElement)

//#2 Sample with jsx
// const myElement = <h1> I Love JSX </h1>; 
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(myElement)


//#3 Add expression
// const myElement = <h1> React is {5+5} times better with JSX </h1>; 
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(myElement)


//#4 call function on expressions
// function formatName(user) {
//   return user.firstName + ' ' + user.lastName
// }
// const user = {
//   firstName : 'Daniel',
//   lastName : 'Souza'
// }
// const myElement = <h1> Hello, {formatName(user)} </h1>; 
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(myElement)

//#5 () for multiple lines and one root element (fragments)
// const myElement = (
//   <div>
//     <h1> I am a section  </h1>
//     <p> I am a paragraph  </p>
//   </div>
// ); 
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(myElement)

// Fragment
// const myElement = (
//     <>
//       <h1> I am a section  </h1>
//       <p> I am a paragraph  </p>
//     </>
// ); 
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(myElement)

//#6 register function to trigger on events
// function shoot(a,e) {
//   alert(e.type)
// }
// const myElement = <button onClick={(event) => shoot('Goal!', event)}>Take a shot!</button>
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(myElement)



//#7 conditional if
// import Goal from './Goal';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <Goal isGoal={false}/>
// );

//#8 ternary operator
// import Goal from './Goal';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <Goal isGoal={true}/>
// );

// #9 conditional &&
// import Garage from './Garage';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// const cars = ['Ford', 'BMW', 'Audi']
// root.render(
//     <Garage cars={cars}/>
// );

// #10 laços
// import ListCars from './ListCars.jsx';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// const cars = ['Ford', 'BMW', 'Audi']
// root.render(
//     <ListCars cars={cars}/>
// );

// #11 creating components
// import CarSet from './CarSet';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <CarSet />
// );

// #12 creating components via children
// import CarSetChildren from './CarSetChildren';
// import Car from './components/Car.jsx';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <CarSetChildren>
//       <Car color='red' brand='Audi'/>
//       <Car color='green' brand='BMW'/>
//     </CarSetChildren>
// );


// #13 Style
import Header from './Header';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Header />
);
