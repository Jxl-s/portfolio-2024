// import { Text3D } from "@react-three/drei";
import MacbookModel from "./models/Macbook";
import StageLayout from "./StageLayout";
// import * as THREE from "three";

// const indigoMaterial = new THREE.MeshStandardMaterial({ color: "#6f55b7" });
// const whiteMaterial = new THREE.MeshStandardMaterial({ color: "#b7556f" });

export default function PreviewScene() {
    return (
        <>
            <StageLayout box={[4, 2, 4]} offset={[0, 1.5, 0]}>
                {/* <Text3D
                    font={"/fonts/Montserrat Black_Regular.json"}
                    position-y={1}
                    position-x={2}
                    position-z={-1}
                    material={indigoMaterial}
                    scale={[0.5, 0.5, 0.5]}
                >
                    3D
                </Text3D>
                <Text3D
                    font={"/fonts/Montserrat Black_Regular.json"}
                    position-y={1}
                    position-x={-3}
                    position-z={-1}
                    material={indigoMaterial}
                    scale={[0.5, 0.5, 0.5]}
                >
                    For
                </Text3D>
                <Text3D
                    font={"/fonts/Montserrat Black_Regular.json"}
                    position-y={3}
                    position-x={-2}
                    position-z={-1}
                    material={whiteMaterial}
                    scale={[0.5, 0.5, 0.5]}
                >
                    Click Here
                </Text3D> */}
                <MacbookModel />
            </StageLayout>
        </>
    );
}
