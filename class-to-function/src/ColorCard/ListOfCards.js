import React, { useState, useEffect } from "react";
import Card from "./Card.js";
import colors from "../data/colors.json";


const CardList = ({search})=>{

  const [results, setResults] = useState ([])
  const [display, setDisplay] = useState(false)

  useEffect(()=>{
    if(search){
    let copyColors = [...colors]
    copyColors = copyColors.filter(color=>color.name.includes(search) ||
    color.hex.includes(search))
    setResults(copyColors)
    setDisplay(true)
  }else{
    setResults(colors)
  }
  },[search])

    
  return (
    <div className="container" >
        {display && results.map((color, index) => (
          <Card key={index} color={color} />
          ))}
    </div>
  );
}

export default CardList


// class CardList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       results: [],
//     };
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.search !== this.props.search) {
//       const results = colors.filter(
//         (color) =>
//           color.name.includes(this.props.search) ||
//           color.hex.includes(this.props.search)
//       );
//       this.setState({ results });
//     }
//   }

//   render() {
//     return (
//       <div className="container">
//         {this.state.results.map((color, index) => (
//           <Card key={index} color={color} />
//         ))}
//       </div>
//     );
//   }
// }

// export default CardList;


