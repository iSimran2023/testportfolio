import React, { Suspense, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Decal, Float, View, useTexture } from "@react-three/drei";

const Ball = ({ imgUrl }) => {
	const mesh = useRef();
	const [decal] = useTexture([imgUrl]);

	useFrame((_, delta) => {
		mesh.current.rotation.y += delta * 0.8;
	});

	return (
		<Float speed={2} rotationIntensity={1} floatIntensity={2}>
			<ambientLight intensity={0.25} />
			<directionalLight position={[0, 0, 0.05]} />
			<mesh ref={mesh} castShadow receiveShadow scale={2.75}>
				<icosahedronGeometry args={[1, 1]} />
				<meshStandardMaterial
					color='#fff8eb'
					polygonOffset
					polygonOffsetFactor={-5}
					flatShading
				/>
				<Decal
					position={[0, 0, 1]}
					rotation={[2 * Math.PI, 0, 6.25]}
					scale={1}
					map={decal}
					flatShading
				/>
				<Decal
					position={[0, 0, -1]}
					rotation={[0, Math.PI, 0]}
					scale={1}
					map={decal}
					flatShading
				/>
			</mesh>
		</Float>
	);
};

// One ball drawn into the shared canvas, positioned over the `track` element.
// Each ball used to have its own <Canvas>, but browsers only keep ~16 WebGL
// contexts alive, so balls past that limit went blank.
const BallView = ({ track, icon }) => (
	<View track={track}>
		<Suspense fallback={null}>
			<Ball imgUrl={icon} />
		</Suspense>
	</View>
);

export default BallView;
