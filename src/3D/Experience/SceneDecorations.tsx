import * as THREE from "three";

interface Props {
    nodes: {
        Circle1: THREE.Mesh;
        Circle2: THREE.Mesh;
        Circle3: THREE.Mesh;
        Circle4: THREE.Mesh;
        BarrelYellowTop: THREE.Mesh;
        BarrelWhiteTop: THREE.Mesh;
        BallsBlue: THREE.Mesh;
        BallsPurple: THREE.Mesh;
        BottomLight: THREE.Mesh;
    };
}

// Material for the circles next to the menu
const menuCircleMaterial = new THREE.MeshBasicMaterial({
    color: 0xffa5ff,
});

const whiteBarrelMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
});

const yellowBarrelMaterial = new THREE.MeshBasicMaterial({
    color: 0xfcf4a3,
});

const blueBallsMaterial = new THREE.MeshBasicMaterial({
    color: 0x99ccff,
});

const purpleBallsMaterial = new THREE.MeshBasicMaterial({
    color: 0xfcaaff,
});

const bottomLightMaterial = new THREE.MeshBasicMaterial({
    color: 0xfff9a4,
});

export default function SceneDecorations({ nodes }: Props) {
    return (
        <>
            {/* 4 circles next to menu (TODO: make them do something later on) */}
            <mesh
                geometry={nodes.Circle1.geometry}
                material={menuCircleMaterial}
                position={[-0.243, 2.032, -2.865]}
                rotation={[0, 0, -Math.PI / 2]}
            />
            <mesh
                geometry={nodes.Circle2.geometry}
                material={menuCircleMaterial}
                position={[-0.243, 1.762, -2.865]}
                rotation={[0, 0, -Math.PI / 2]}
            />
            <mesh
                geometry={nodes.Circle3.geometry}
                material={menuCircleMaterial}
                position={[-0.243, 1.486, -2.865]}
                rotation={[0, 0, -Math.PI / 2]}
            />
            <mesh
                geometry={nodes.Circle4.geometry}
                material={menuCircleMaterial}
                position={[-0.243, 1.202, -2.865]}
                rotation={[0, 0, -Math.PI / 2]}
            />
            {/* Barrel colors */}
            <mesh
                geometry={nodes.BarrelYellowTop.geometry}
                material={yellowBarrelMaterial}
                position={[1.039, 0.378, -2.078]}
            />
            <mesh
                geometry={nodes.BarrelWhiteTop.geometry}
                material={whiteBarrelMaterial}
                position={[1.164, 0.51, 1.642]}
            />
            {/* Balls */}
            <mesh
                geometry={nodes.BallsBlue.geometry}
                material={blueBallsMaterial}
                position={[0.187, 1.676, -0.031]}
            />
            <mesh
                geometry={nodes.BallsPurple.geometry}
                material={purpleBallsMaterial}
                position={[0.187, 1.676, -0.031]}
            />
            {/* Pole Light Bottoms */}
            <mesh
                geometry={nodes.BottomLight.geometry}
                material={bottomLightMaterial}
                position={[0.187, 1.676, -0.031]}
            />
        </>
    );
}
