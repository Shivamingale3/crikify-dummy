type Listener = () => void;
let listeners: Listener[] = [];

export function onLogout(cb: Listener) {
  listeners.push(cb);
  return () => {
    listeners = listeners.filter((l) => l !== cb);
  };
}

export function emitLogout() {
  listeners.forEach((cb) => cb());
}
