import {
    useGLTF, Environment, Float,
    PresentationControls, ContactShadows, Html, Text
} from '@react-three/drei'

import { useState, useRef } from 'react'
import { a as three } from "@react-spring/three";
import { a as web } from "@react-spring/web";

export default function Mac({ open, hinge, ...props }) {
    const group = useRef()
    // const computer = useGLTF('https://threejs-journey.com/resources/models/macbook_model.gltf');
    const { nodes, materials } = useGLTF("./mac-draco.glb");
    // This flag controls open state, alternates between true & false
    console.log(nodes);
    return <>

        {/* <primitive 
            open={open}
            object={computer.scene}
            position-y={-1.2} >
                <Html transform
                wrapperClass='htmlScreen'
                distanceFactor={1.17}
                position={[0, 1.56, -1.4]}
                rotation-x={-0.256}>
                    <iframe src='http://gnulitskaya.ru/' />
                </Html>
            </primitive> */}

        <group
            ref={group}
            {...props}
            dispose={null}
        >
            <three.group rotation-x={hinge} position={[0, -0.04, 0.41]}>
                <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>

                    <Html transform
                        wrapperClass={open ? "htmlScreen" : "hidden"}
                        distanceFactor={3.3}
                        position={[0, 0, -0.1]}
                        rotation-x={-1.56}>
                        <iframe src='http://gnulitskaya.ru/' />
                    </Html>

                    <mesh
                        material={materials.aluminium}
                        geometry={nodes["Cube008"].geometry}
                    />
                    <mesh
                        material={materials["matte.001"]}
                        geometry={nodes["Cube008_1"].geometry}
                    />
                    <mesh
                        material={materials["screen.001"]}
                        geometry={nodes["Cube008_2"].geometry}
                    />
                </group>
            </three.group>
            <mesh
                material={materials.keys}
                geometry={nodes.keyboard.geometry}
                position={[1.79, 0, 3.45]}
            />
            <group position={[0, -0.1, 3.39]}>
                <mesh
                    material={materials.aluminium}
                    geometry={nodes["Cube002"].geometry}
                />
                <mesh
                    material={materials.trackpad}
                    geometry={nodes["Cube002_1"].geometry}
                />
            </group>
            <mesh
                material={materials.touchbar}
                geometry={nodes.touchbar.geometry}
                position={[0, -0.03, 1.2]}
            />
        </group>

    </>
}