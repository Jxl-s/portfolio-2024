import {
    DRACOLoader,
    GLTF,
    GLTFLoader,
    // RGBELoader,
} from "three/examples/jsm/Addons.js";
import * as THREE from "three";
import { create } from "zustand";

interface LoaderState {
    percentage: number;
    setPercentage: (percentage: number) => void;

    isLoaded: boolean;
    setLoaded: (isLoaded: boolean) => void;
}

export const useLoaderStore = create<LoaderState>((set) => ({
    percentage: 0,
    setPercentage: (percentage: number) => set({ percentage }),

    isLoaded: false,
    setLoaded: (isLoaded: boolean) => set({ isLoaded }),
}));

export enum AssetType {
    Gltf,
    Texture,
    Hdr,
}

// Size is estimated in bytes
export const ASSETS = [
    // Scene and ground
    {
        type: AssetType.Gltf,
        url: "models/scene.glb",
        name: "sceneModel",
        size: 381,
    },
    {
        type: AssetType.Gltf,
        url: "models/sceneGround.glb",
        name: "sceneGround",
        size: 1,
    },

    // Textures for the scene
    {
        type: AssetType.Texture,
        url: "textures/bakedScene_4096x4096.jpg",
        name: "sceneTexture",
        size: 4300,
    },
    {
        type: AssetType.Texture,
        url: "textures/bakedSceneNight_4096x4096.jpg",
        name: "sceneTextureNight",
        size: 2000,
    },
    {
        type: AssetType.Texture,
        url: "textures/bakedGround_2048x2048.jpg",
        name: "groundTexture",
        size: 100,
    },
    {
        type: AssetType.Texture,
        url: "textures/bakedGroundNight_2048x2048.jpg",
        name: "groundTextureNight",
        size: 92,
    },

    // Other textures
    {
        type: AssetType.Texture,
        url: "textures/tvGithub_938x596.jpg",
        name: "tvGithub",
        size: 60,
    },
    {
        type: AssetType.Texture,
        url: "textures/tvLinkedin_938x596.jpg",
        name: "tvLinkedin",
        size: 56,
    },

    // Env map
    // {
    //     type: AssetType.Hdr,
    //     url: "textures/envMap.hdr",
    //     name: "envMap",
    //     size: 1500,
    // },
] as const;

export type AssetName = (typeof ASSETS)[number]["name"];

const ASSET_LIST: {
    [key in AssetName]?: GLTF | THREE.Texture;
} = {};

export function getAsset(name: AssetName): GLTF | THREE.Texture | undefined {
    return ASSET_LIST[name];
}

let startedLoading = false;
export function startLoading() {
    if (startedLoading) return;
    startedLoading = true;

    // Initiate GLTF loader
    const gltfLoader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco/");
    gltfLoader.setDRACOLoader(dracoLoader);

    // Initiate texture loader
    const textureLoader = new THREE.TextureLoader();
    // const rgbeLoader = new RGBELoader();

    // Handle all loads
    let loadedSizes = 0;
    const totalSizes = ASSETS.reduce((acc, asset) => acc + asset.size, 0);

    const incrementLoaded = (size: number) => {
        loadedSizes += size;

        const isLoaded = loadedSizes === totalSizes;
        useLoaderStore.setState({
            percentage: Math.round((loadedSizes / totalSizes) * 100),
            isLoaded,
        });

        console.log(
            `Loaded ${loadedSizes} of ${totalSizes} bytes (${Math.round(
                (loadedSizes / totalSizes) * 100
            )}%)`
        );
    };

    for (const asset of ASSETS) {
        switch (asset.type) {
            case AssetType.Gltf:
                gltfLoader.load(asset.url, (gltf) => {
                    ASSET_LIST[asset.name] = gltf;

                    console.log(`Loaded ${asset.url}`);
                    incrementLoaded(asset.size);
                });
                break;
            case AssetType.Texture:
                textureLoader.load(asset.url, (texture) => {
                    ASSET_LIST[asset.name] = texture;

                    console.log(`Loaded ${asset.url}`);
                    incrementLoaded(asset.size);
                });
                break;
            // case AssetType.Hdr:
            //     rgbeLoader.load(asset.url, (texture) => {
            //         ASSET_LIST[asset.name] = texture;

            //         console.log(`Loaded ${asset.url}`);
            //         incrementLoaded(asset.size);
            //     });
            //     break;
        }
    }
}
