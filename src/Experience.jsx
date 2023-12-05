import { useGLTF, Environment, Float, 
    PresentationControls, ContactShadows, Html, Text } from '@react-three/drei'

import { useState, useRef } from 'react'
import Mac from './Mac';
import Model from './Model';
import { useSpring } from "@react-spring/core";

export default function Experience()
{
    // const computer = useGLTF('https://threejs-journey.com/resources/models/macbook_model.gltf');
    // This flag controls open state, alternates between true & false
    const [open, setOpen] = useState(false);
    const laptopRef = useRef(null);
    const props = useSpring({ open: Number(open) });
    // console.log(computer);
    return <>

        <Environment preset='city'/>

        <color args={['#111111']} attach="background"/>

        {/* <OrbitControls makeDefault /> */}
        <PresentationControls global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{mass:2, tension: 400}}
        snap={{mass:4, tension: 400}}>

            <Float rotationIntensity={0.4}>

            <rectAreaLight
                width={ 2.5 }
                height={ 1.65 }
                intensity={ 65 }
                color={ '#f5efe6' }
                rotation={ [ - 0.1, Math.PI, 0 ] }
                position={ [ 0, 0.55, - 1.15 ] }
            />
            <group
                position-y={-0.1}
                onClick={(e) => (e.stopPropagation(), setOpen(!open))}
            >
                <Mac scale={0.3} open={open} hinge={props.open.to([0, 1], [1.575, -0.425])}/>
                {/* <Model open={open}/> */}
            </group>
            </Float> 
        </PresentationControls>

        <ContactShadows position-y={-1.4}
        opacity={0.4}
        scale={5}
        blur={2.4}/>

    </>
}