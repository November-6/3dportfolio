import React, {useRef} from 'react'
import {useGLTF} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";
const Box = (props) => {
    const ref = useRef()
    useFrame(() => {

        if (ref.current)  {
            // ref.current.rotation.x += 0.01
            ref.current.rotation.y += 0.01
            ref.current.rotation.z += 0.01
        }
    })

    const { nodes, materials } = useGLTF('/models/level-react-draco.glb')
    return (
        <mesh
            ref={ref}
            castShadow
            receiveShadow
            geometry={nodes.React.geometry}
            material={materials.Cube}
            {...props}
        />
    )
}
export default Box
