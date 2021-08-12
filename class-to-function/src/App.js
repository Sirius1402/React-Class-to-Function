import React, { useState } from "react";
import "./App.css";
import CardList from "./ColorCard/ListOfCards.js";
import Searchbar from "./Searchbar/Searchbar.js";

const App = ()=>{

  const [search, setSearch] = useState('')
  

  const welcome = ()=>{
    alert("Hello!")
  }

  

  return (
      <div onClick={welcome}>
        <Searchbar
        setSearch={setSearch} />
        <CardList 
         search={search} />
      </div>

  );
}

export default App


// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       search: "",
//     };
//     this.setState = this.setState.bind(this);
//   }

//   componentDidMount() {
//     document.addEventListener("click", this.welcome);
//   }

//   componentWillUnmount() {
//     document.removeEventListener("click", this.welcome);
//   }

//   welcome = () => {
//     alert("Hello!");
//   };

//   render() {
//     return (
//       <div>
//         <Searchbar search={this.setState} />
//         <CardList search={this.state.search} />
//       </div>
//     );
//   }
// }

// export default App;

