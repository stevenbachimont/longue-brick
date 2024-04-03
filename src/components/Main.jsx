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



import Bouton from "./Bouton";

function Main({ lombric, lombricList, setLombricList}) {
  console.log('%c⧭', 'color: #917399', lombric);

  const click = (lombricIndex) => {
    setLombricList(lombricIndex);
  };

  return (
    <main className="main">
    <div className="container">
      <img className="image-main" src={lombric[lombricList].image} alt="oups" />
      <p className="name">{lombric[lombricList].name}</p>

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
    </main>
  );
}

export default Main;
