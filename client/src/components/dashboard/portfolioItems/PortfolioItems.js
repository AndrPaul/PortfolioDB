import React from "react";

const PortfolioItems = ({ portfolioItem }) => {
  return (
    <React.Fragment>
     
        {

          portfolioItem.map((obj, i) => (
          <div className="item" key={i}>
          
          <p className='item-name'>{obj.name}</p>
              <p className='item-category'>Category: {obj.category}</p>
          <div className="button-wrapper">
              <button className="edit-delete-btn">Edit</button>
              <button className="edit-delete-btn">Delete</button>
              
          </div>
           
          </div>
          ))

        }
      
      </React.Fragment>
  );
}

export default PortfolioItems;