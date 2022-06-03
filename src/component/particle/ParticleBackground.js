import Particles from "react-tsparticles"
// import PartcleConfig from "./config/PartcleConfig"

import { loadFull } from "tsparticles";
import PartcleConfig from "./config/PartcleConfig";
const ParticleBackground = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
      };
    
      const particlesLoaded = (container) => {
      };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={PartcleConfig}
    />
  )
}

export default ParticleBackground
