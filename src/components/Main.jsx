import lombric from "../../data";

function Main ({lombricName, lombricImage, lombric})  {
    console.log('%c⧭', 'color: #aa00ff', lombric);
    for (let i = 0; i < lombric.length; i++){

        console.log('%c⧭', 'color: #e50000', lombric[i]);
    }


    // console.log('%c⧭', 'color: #00e600', lombricImage);
    // console.log('%c⧭', 'color: #ff0000', lombricName);
    
    
        return (
            <div>
                <img src={lombric.lombricImage} alt="" />
                <p>{lombric.lombricName}</p>
                <p>coucou</p>
            </div>
        )
    }

    export default Main;