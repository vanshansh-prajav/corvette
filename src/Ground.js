import React, { useEffect } from 'react'
import { MeshReflectorMaterial } from '@react-three/drei'
import { planeGeometry, RepeatWrapping, TextureLoader } from 'three'
import { useFrame, useLoader } from '@react-three/fiber'
import { LinearEncoding } from '@react-three/drei/helpers/deprecated'
const Ground = () => {
    const [roughness, normal] = useLoader(TextureLoader, [
        process.env.PUBLIC_URL + "textures/Marble Tiles_Roughness.jpeg",
        process.env.PUBLIC_URL + "textures/Marble Tiles_Normal.jpeg"
    ]);

    useEffect(() => {
        [normal, roughness].forEach((t) => {
            t.wrapS = RepeatWrapping;
            t.wrapT = RepeatWrapping;
            t.repeat.set(20, 20);
        })
        normal.encoding = LinearEncoding;
    }, [normal, roughness])

    useFrame((state, delta) => {
        let t = state.clock.getElapsedTime() * 0.68;
        roughness.offset.set(0, t);
        normal.offset.set(0, t);
    })
    return (
        <mesh rotation-x={-Math.PI * 0.5} rotation-y={0} castShadow receiveShadow>
            <planeGeometry args={[30, 30]}/>
            <MeshReflectorMaterial
                envMapIntensity={0}
                normalMap={normal}
                normalScale={[0.9, 0.9]}
                roughnessMap={roughness}
                dithering={true}
                color={[0.015, 0.015, 0.03]}
                roughness={0.7}
                blur={[1000, 400]}
                mixBlur={30}
                mixStrength={80}
                mixContrast={1}
                resolution={1024}
                mirror={0}
                depthScale={0.01}
                minDepthThreshold={0.9}
                maxDepthThreshold={1}
                depthToBlurRatioBias={0.25}
                debug={0}
                reflectoroffset={0.2} />
        </mesh>
    )
}

export default Ground