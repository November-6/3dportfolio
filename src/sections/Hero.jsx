import React, {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import HackerRoom from "../components/HackerRoom.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {useMediaQuery} from "react-responsive";
// import {calculateSizes} from "../constants/index.js";
import Cactus from "../components/Cactus.jsx";
import {useControls} from "leva";
import Camera from "../components/Camera.jsx";
import Pyramid from "../components/Pyramid.jsx";
import Box from "../components/Box.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import {Astronaut} from "../components/Astronaut.jsx";
import AstDum from "../components/AstDum.jsx";

const Hero = () => {

    // const controls = useControls('HackerRoom', {
    //     rotationX: {value: 2.5, min:-10, max:10},
    //     rotationY: {value: 2.5, min:-10, max:10},
    //     rotationZ: {value: 2.5, min:-10, max:10},
    //     positionX: {value: 2.5, min:-10, max:10},
    //     positionY: {value: 2.5, min:-10, max:10},
    //     positionZ: {value: 2.5, min:-10, max:10},
    //     scale: {value: 1, min:0.1 , max:9},
    //
    // })

    const isMobile = useMediaQuery({maxWidth: 768})
    //const isSmall = useMediaQuery({maxWidth: 440})

    // const sizes = calculateSizes(isSmall, isMobile)

    return (
        <section className={"min-h-screen w-full flex flex-col relative bg-black-100 z-1"}>
            <div className={"w-full mx-auto flex flex-col c-space gap-3"}>
                <p className={"sm:text-3xl text-xl font-medium text-white text-center font-generalsans"}>HELOOOOOO
                <span className={"waving-hand"}>👋</span>
                </p>
                <p className={"hero_tag text-emerald-400"}>Doing nothing since 2004</p>
            </div>


            <div className={"w-full h-full absolute inset-0"}>
                <Canvas className={"w-full h-full"}>
                    <Suspense fallback={<CanvasLoader/>}>

                    <PerspectiveCamera makeDefault={true} position={[0, 0, 25]}/>

                    <HeroCamera>

                        {/*<HackerRoom*/}
                        {/*    scale={isMobile ? 0.07 : 0.11}*/}
                        {/*    // position={[controls.positionX,controls.positionY, controls.positionZ]}*/}
                        {/*    position={[0.7, isMobile ? -2 : -7, -10]}*/}
                        {/*    rotation={[0, -Math.PI, 0]}/>*/}
                        {/*/!*rotation={[controls.rotationX,controls.rotationY,controls.rotationZ]}/>*!/*/}
                        {/*<ambientLight intensity={4}/>*/}
                        {/*<directionalLight position={[10, 10, 10]}/>*/}

                        {/*position={[controls.positionX,controls.positionY, controls.positionZ]}*/}
                        {/*rotation={[controls.rotationX,controls.rotationY,controls.rotationZ]}*/}
                        {/*scale={controls.scale*/}


                        <group>
                            <Cactus  position = {[-10, -1.9, 3.1]}
                                     rotation  = {[-4.7,-5.9, -3.3]}
                                     scale = {4.51}

                            />

                            <Camera  position = {[-10,-8.7, 0.9]}
                                     rotation={[-4.7, -5.7, -0.3]}
                                     scale = {7.21}
                            />

                            <Pyramid position={[9.5,0.9,3.9]}
                                     rotation={[4.5,-2.7,-2.3]}
                                     scale={9}
                            />

                            <Box position={[5.9,-4.7, 10]}
                                 scale = {7.5}
                            />
                            <Astronaut position={[-0.5, isMobile ? -2 : -7, -10]}/>



                        </group>
                     </HeroCamera>

                    </Suspense>
                </Canvas>


            </div>

        </section>
    )
}
export default Hero
