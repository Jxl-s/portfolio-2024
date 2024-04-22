const soundCache = new Map<string, HTMLAudioElement>();
export function playSound(sound: string) {
    if (!soundCache.has(sound)) {
        const audio = new Audio(`/sounds/${sound}`);
        soundCache.set(sound, audio);
    }

    soundCache.get(sound)!.play();
}
