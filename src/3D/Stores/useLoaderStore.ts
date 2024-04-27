import { DRACOLoader, GLTF, GLTFLoader } from "three/examples/jsm/Addons.js";
import * as THREE from "three";
import { create } from "zustand";
import numberWithCommas from "../../util/numberWithCommas";
import { ASSETS, AssetName, AssetType } from "../Data/assetList";

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

type TAsset = GLTF | THREE.Texture | HTMLAudioElement;
const ASSET_LIST: {
    [key in AssetName]?: TAsset;
} = {};

export function getAsset<T extends TAsset>(name: AssetName): T | undefined {
    return ASSET_LIST[name] as T;
}

let startedLoading = false;
export function startLoading(textureSize: number) {
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
                const skipAsset =
                    "textureSize" in asset.data &&
                    asset.data.textureSize !== textureSize;

                // If the texture size isn't good, we skip
                if (skipAsset) {
                    incrementLoaded(asset.size);
                    break;
                }

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
