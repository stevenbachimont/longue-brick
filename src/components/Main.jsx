// import "./main.css";
// import "./main-animation.css";

// import React, { useState } from "react";


// function Main ({ lombric})  {
//   const [lombricList, setlombricList] = useState(0); 


//  const click = (lombricIndex) =>{
//   setlombricList(lombricIndex)
//   }



//     return (  
//         <div className="container">
//           <img className="image-main" src={lombric[lombricList].image} alt="oups" />
          
//           <div class="orbit">
//           {lombric.map((lombricItem, index) => (
//             <button className="bouton" key={index} onClick={() => click(index)}>{lombricItem.name}</button>
//           ))}
//           </div>
//         </div>
//       );
      
// }

// export default Main;


import React, { useState } from "react";
import Bouton from "./Bouton";

function Main({ lombric }) {
  const [lombricList, setLombricList] = useState(0);

  const click = (lombricIndex) => {
    setLombricList(lombricIndex);
  };

  return (
    <div className="container">
      <img className="image-main" src={lombric[lombricList].image} alt="oups" />

      <div className="orbit">
        {lombric.map((lombricItem, index) => (
          <Bouton
            key={index}
            index={index}
            name={lombricItem.name}
            click={click}
          />
        ))}
      </div>
    </div>
  );
}

export default Main;
