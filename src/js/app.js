import 'aframe';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Dancer from './components/Dancer';
import dancerData from './Helpers/dancerData';
import { massToRadius } from './Helpers/Helpers';

const SpaceScene = () => (
  <a-scene>
    <a-assets>
      <img id="outer-space" crossOrigin src="http://i.imgur.com/gNIwweI.jpg" />
    </a-assets>
    {dancerData.map((dancer, index) => {
      if (dancer.mass >= 10000) {
        // dancer.material = "color: #FFF; shader: flat"
        // dancer.light = "color: #DDDDFF; distance: 5000; intensity: 2; type: point"
        return (
          <Dancer key={index} mass={dancer.mass} position={dancer.position}
             velocity={dancer.velocity} material={dancer.material}
             light={dancer.light}
          />
        );
      }
      return (
        <Dancer key={index} mass={dancer.mass} position={dancer.position}
           velocity={dancer.velocity} color={dancer.color}
           light={dancer.light} material={dancer.material}
        />
      )
    })}
    <a-camera wasd-controls="fly: true" id="player" position="0 1.8 0" />
    <a-sky src="#outer-space" material="shader: flat"/>
    <a-entity light="type: ambient; color: #555"></a-entity>
  </a-scene>
);

ReactDOM.render(<SpaceScene/>, document.querySelector('.scene-container'));
