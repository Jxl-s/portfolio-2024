import { DRACOLoader, GLTF, GLTFLoader } from "three/examples/jsm/Addons.js";
import * as THREE from "three";
import { create } from "zustand";
import numberWithCommas from "../../util/numberWithCommas";

interface LoaderState {
    percentage: number;
    setPercentage: (percentage: number) => void;

    isLoaded: boolean;
    setLoaded: (isLoaded: boolean) => void;

    isLDM: boolean;
    setLDM: (isLDM: boolean) => void;

    musicPaused: boolean;
    setMusicPaused: (musicPaused: boolean) => void;
}

export const useLoaderStore = create<LoaderState>((set) => ({
    percentage: 0,
    setPercentage: (percentage: number) => set({ percentage }),

    isLoaded: false,
    setLoaded: (isLoaded: boolean) => set({ isLoaded }),

    isLDM: false,
    setLDM: (isLDM: boolean) => set({ isLDM }),

    musicPaused: false,
    setMusicPaused: (musicPaused: boolean) => set({ musicPaused }),
}));

export enum AssetType {
    Gltf,
    Texture,
    Hdr,
    HtmlAudio,
}

// Size is estimated in bytes
export const ASSETS = [
    // Scene and ground
    {
        type: AssetType.Gltf,
        url: "models/scene.glb",
        name: "sceneModel",
        size: 390068,
    },
    {
        type: AssetType.Gltf,
        url: "models/sceneGround.glb",
        name: "sceneGround",
        size: 1016,
    },

    // Textures for the scene
    {
        type: AssetType.Texture,
        url: "textures/bakedScene_4096x4096.jpg",
        name: "sceneTexture",
        size: 1829507,
    },
    {
        type: AssetType.Texture,
        url: "textures/bakedSceneNight_4096x4096.jpg",
        name: "sceneTextureNight",
        size: 783169,
    },
    {
        type: AssetType.Texture,
        url: "textures/bakedGround_2048x2048.jpg",
        name: "groundTexture",
        size: 101930,
    },
    {
        type: AssetType.Texture,
        url: "textures/bakedGroundNight_2048x2048.jpg",
        name: "groundTextureNight",
        size: 94537,
    },

    // Other textures
    {
        type: AssetType.Texture,
        url: "textures/tvGithub_938x596.jpg",
        name: "tvGithub",
        size: 61014,
    },
    {
        type: AssetType.Texture,
        url: "textures/tvLinkedin_938x596.jpg",
        name: "tvLinkedin",
        size: 57589,
    },
    {
        type: AssetType.Texture,
        url: "textures/perlin.png",
        name: "perlin",
        size: 11280,
    },

    // Env audio
    {
        type: AssetType.HtmlAudio,
        url: "sounds/background.mp3",
        name: "backgroundAudio",
        size: 7187363,
    },
    {
        type: AssetType.HtmlAudio,
        url: "sounds/cans.mp3",
        name: "cansAudio",
        size: 7752,
    },
    {
        type: AssetType.HtmlAudio,
        url: "sounds/click.mp3",
        name: "clickAudio",
        size: 3024,
    },
    {
        type: AssetType.HtmlAudio,
        url: "sounds/fan_start.mp3",
        name: "fanStartAudio",
        size: 13374,
    },
    {
        type: AssetType.HtmlAudio,
        url: "sounds/fan_stop.mp3",
        name: "fanStopAudio",
        size: 9576,
    },
    {
        type: AssetType.HtmlAudio,
        url: "sounds/power_switch.mp3",
        name: "powerSwitchAudio",
        size: 9686,
    },
    {
        type: AssetType.HtmlAudio,
        url: "sounds/rain.mp3",
        name: "rainAudio",
        size: 629786,
    },
    {
        type: AssetType.HtmlAudio,
        url: "sounds/whoosh.mp3",
        name: "whooshAudio",
        size: 36218,
    },
] as const;

export type AssetName = (typeof ASSETS)[number]["name"];
type TAsset = GLTF | THREE.Texture | HTMLAudioElement;
const ASSET_LIST: {
    [key in AssetName]?: TAsset;
} = {};

export function getAsset(name: AssetName): TAsset | undefined {
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
            `Loaded ${numberWithCommas(loadedSizes)} of ${numberWithCommas(
                totalSizes
            )} bytes (${Math.round((loadedSizes / totalSizes) * 100)}%)`
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
            case AssetType.HtmlAudio:
                const audio = new Audio(asset.url);

                const onAudioLoad = () => {
                    ASSET_LIST[asset.name] = audio;

                    console.log(`Loaded ${asset.url}`);
                    incrementLoaded(asset.size);

                    audio.removeEventListener("canplaythrough", onAudioLoad);
                };

                audio.addEventListener("canplaythrough", onAudioLoad);
                audio.load();
        }
    }
}
