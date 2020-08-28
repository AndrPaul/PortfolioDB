import React from 'react';

// I am just learning how to insert JSON data to REACT COMPONENTS
// THIS CODE DO NOT WORK YET


const PortfolioFullView = () => {
        let aFFF;

        fetch(`http://localhost:3004/examples/`,
                                    {                                     "headers": {
                                         "Accept": "application/json",
                                         "Content-Type": "application/json"
                                     }, "method": "GET"})
                                     .then((response) => {
                                     if (!response.ok) {
                                        console.log("coudn't connect to database");
                                    } else {
                                        console.log("Your input is saved in DB. Continue editing")
                                    }
                                    return response.json();
                                    })
                                    .then(data => {aFFF = data;
                                        console.log(aFFF);});
                                    
      return (
        <div>
          <p>Life is always alive<br /><br /> Enjoy</p>
          <p></p>
          
          </div>
        
      );
    }
  export default PortfolioFullView;