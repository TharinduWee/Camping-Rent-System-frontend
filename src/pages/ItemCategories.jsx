import React from 'react';
import './ItemCategories.css';
import TentImage from '../images/items/tent.jpeg';
import BBQGrillsImage from '../images/items/grill m.jpeg';

export const ItemCategories = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <div className="item-categories">
        <div className="selection-box" onClick={() => console.log('Camping Tents Selected')}>
          <img src={TentImage} alt="Camping Tents" />
          <h3>Camping Tents</h3>
        </div>
        <div className="selection-box" onClick={() => console.log('BBQ Grills Selected')}>
          <img src={BBQGrillsImage} alt="BBQ Grills" />
          <h3>BBQ Grills</h3>
        </div>
        <div className="selection-box" onClick={() => console.log('Lamps Selected')}>
          <h3>Lamps</h3>
        </div>
        <div className="selection-box" onClick={() => console.log('Stoves Selected')}>
          <h3>Stoves</h3>
        </div>
        <div className="selection-box" onClick={() => console.log('Mattresses Selected')}>
          <h3>Mattresses</h3>
        </div>
        <div className="selection-box" onClick={() => console.log('Gas Canisters Selected')}>
          <h3>Gas Canisters</h3>
        </div>
        <div className="selection-box" onClick={() => console.log('BBQ Charcoal Selected')}>
          <h3>BBQ Charcoal</h3>
        </div>
        <div className="selection-box" onClick={() => console.log('Cooking Pots Selected')}>
          <h3>Cooking Pots</h3>
        </div>
        <div className="selection-box" onClick={() => console.log('Hammock Selected')}>
          <h3>Hammock</h3>
        </div>
        <div className="selection-box" onClick={() => console.log('Hammock Selected')}>
          <h3>Hammock</h3>
        </div>
        <div className="selection-box" onClick={() => console.log('Hammock Selected')}>
          <h3>Hammock</h3>
        </div>
        
      </div>
    </div>
  );
};
