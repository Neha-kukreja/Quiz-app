declare module 'use-sound' {
  interface Options {
    volume?: number;
    playbackRate?: number;
    loop?: boolean;
    soundEnabled?: boolean;
    interrupt?: boolean;
    
    // Add any other options based on the library's documentation
  }

  const useSound: (url: string | string[], options?: Options) => [() => void, object];
  export default useSound;
}
