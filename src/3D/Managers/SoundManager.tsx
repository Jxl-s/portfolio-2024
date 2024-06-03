import { useEffect } from "react";
import { getAsset } from "../Stores/useLoaderStore";
import useExperienceStore from "../Stores/useExperienceStore";

export default function SoundManager() {
    const isAudioPaused = useExperienceStore((state) => state.isAudioPaused);

    // Get the audio assets
    const backgroundAudio = getAsset("backgroundAudio") as HTMLAudioElement;
    const rainAudio = getAsset("rainAudio") as HTMLAudioElement;

    // Set sound properties
    backgroundAudio.volume = 0.1;
    backgroundAudio.loop = true;

    rainAudio.volume = 0.1;
    rainAudio.loop = true;

    // Change sound properties for other sounds
    const whooshAudio = getAsset<HTMLAudioElement>("whooshAudio");
    whooshAudio.volume = 0.1;
    whooshAudio.playbackRate = 2;

    const cansAudio = getAsset<HTMLAudioElement>("cansAudio");
    cansAudio.volume = 0.1;

    // Handle audio pausing
    useEffect(() => {
        if (isAudioPaused) {
            backgroundAudio.pause();
            rainAudio.pause();
        } else {
            backgroundAudio.play();
            rainAudio.play();
        }
    }, [isAudioPaused, backgroundAudio, rainAudio]);

    return null;
}
