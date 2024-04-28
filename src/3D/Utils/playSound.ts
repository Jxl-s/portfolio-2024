import { SoundName, getAsset } from "../Stores/useLoaderStore";

function playSound(sound: SoundName) {
    const soundObj = getAsset<HTMLAudioElement>(sound);
    if (sound === "whooshAudio") soundObj.currentTime = 0.5;

    soundObj.play();
}

export default playSound;
