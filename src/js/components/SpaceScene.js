import Dancer from './Dancer';
import dancerData from '../Helpers/dancerData';
import { massToRadius } from '../Helpers/Helpers';

const SpaceScene = () => (
  <a-scene>
    <a-assets>
      <img id="outer-space" crossOrigin src="http://i.imgur.com/gNIwweI.jpg" />
    </a-assets>
    {dancerData.map((dancer, index) => (
        <Dancer key={index} mass={dancer.mass} position={dancer.position}
           velocity={dancer.velocity}
           light={dancer.light} material={dancer.material}
        />
      )
    )}
    <a-camera wasd-controls="fly: true" id="player" position="0 1.8 0" />
    <a-sky src="#outer-space" material="shader: flat"/>
    <a-entity light="type: ambient; color: #555"></a-entity>
  </a-scene>
);

module.exports = SpaceScene;
