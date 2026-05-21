// Otti — current parent (signed-in user)
// Tiny singleton + hook. Defaults to the demo user; gets updated when
// the signup flow completes (see ScreenEmailVerified.finish).

const currentUser = {
  state: {
    email: 'sam.harper@gmail.com',
    firstName: 'Sam',
    lastName: 'Harper',
  },
  listeners: new Set(),
  subscribe(fn) { this.listeners.add(fn); return () => this.listeners.delete(fn); },
  emit() { this.listeners.forEach(fn => fn()); },
  setEmail(email) {
    if (!email || email === this.state.email) return;
    this.state = { ...this.state, email };
    this.emit();
  },
  setName(firstName, lastName) {
    this.state = { ...this.state, firstName: firstName || this.state.firstName, lastName: lastName || this.state.lastName };
    this.emit();
  },
};

function useCurrentUser() {
  const [, force] = React.useReducer(x => x + 1, 0);
  React.useEffect(() => currentUser.subscribe(force), []);
  return {
    user: currentUser.state,
    setEmail: (e) => currentUser.setEmail(e),
    setName: (f, l) => currentUser.setName(f, l),
  };
}

Object.assign(window, { currentUser, useCurrentUser });
