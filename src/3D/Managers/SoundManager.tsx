import { useEffect } from "react";
import { getAsset, useLoaderStore } from "../Stores/useLoaderStore";

export default function SoundManager() {
    const musicPaused = useLoaderStore((state) => state.musicPaused);

    // Get the audio assets
    const backgroundAudio = getAsset("backgroundAudio") as HTMLAudioElement;
    const rainAudio = getAsset("rainAudio") as HTMLAudioElement;

    // Set sound properties
    backgroundAudio.volume = 0.5;
    backgroundAudio.loop = true;

    rainAudio.volume = 0.1;
    rainAudio.loop = true;

    // Handle audio pausing
    useEffect(() => {
        if (musicPaused) {
            backgroundAudio.pause();
            rainAudio.pause();
        } else {
            backgroundAudio.play();
            rainAudio.play();
        }
    }, [musicPaused, backgroundAudio, rainAudio]);

    return null;
}
