// import React, { Component } from 'react'
// import ReactDOM from 'react-dom';


// export default class check extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { toggle: true, data: localStorage.getItem("data"), counter: 0 };
//     }

//     componentDidMount() {
//         console.log(ReactDOM.findDOMNode(this));
//         localStorage.setItem("data", ReactDOM.findDOMNode(this).value)
//         // set el height and width etc.
//     };

//     toggleHandler = (prevState) => {
//         this.setState({ ...prevState, toggle: !prevState.toggle, counter: prevState.counter + 1 })
//         console.log(this.state.toggle, this.state.data);
//     }

//     render() {
//         return (
//             this.state.toggle
//                 ? <div>
//                     <button onClick={this.toggleHandler}>toggle</button>
//                     <h1>{this.state.counter}</h1>
//                 </div>
//                 : this.state.data
//         )
//     }
// }


// useEffect(() => {
//     if (myRef.current) {
//         console.log(myRef.current);
//         localStorage.setItem("movie", myRef.current);
//     }
// }, [myRef.current])