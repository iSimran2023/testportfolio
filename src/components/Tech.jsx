import React, { createRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const allTech = technologies.flatMap((group) => group.items);

// Views only redraw their own box, so wipe the whole canvas first each frame
// (priority 0 runs before the views) to avoid trails while scrolling.
const ClearCanvas = () => {
  useFrame(({ gl }) => {
    gl.setScissorTest(false);
    gl.clear(true, true);
  }, 0);
  return null;
};

const Tech = () => {
  const refs = useMemo(() => allTech.map(() => createRef()), []);

  return (
    <>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {allTech.map((technology, i) => (
          <div
            ref={refs[i]}
            className='w-28 h-28'
            key={technology.name}
            title={technology.name}
          />
        ))}
      </div>

      {/* One shared full-screen canvas (below the z-20 navbar); each ball draws only inside its div's box. */}
      <Canvas
        style={{ position: "fixed", inset: 0, zIndex: 10, pointerEvents: "none" }}
        dpr={[1, 2]}
      >
        <ClearCanvas />
        {allTech.map((technology, i) => (
          <BallCanvas key={technology.name} track={refs[i]} icon={technology.icon} />
        ))}
      </Canvas>
    </>
  );
};

export default SectionWrapper(Tech, "");
