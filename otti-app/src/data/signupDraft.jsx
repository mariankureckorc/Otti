// Otti — signup wizard draft
// Lives across step transitions so pressing Back from Step 2 doesn't
// lose the Step 1 values, and so the verification screen can commit
// the final draft to the children store before resetting.

const SIGNUP_DRAFT_INITIAL = {
  // Step 1 — account
  oauthProvider: null,  // 'apple' | 'google' | null
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',

  // Step 2 — child
  childName: '',
  dob: '',                  // YYYY-MM-DD
  hospital: '',
  leftEar: 'none',          // 'none' | 'hearing-aid' | 'bahs' | 'cochlear-implant'
  rightEar: 'none',
  inviteEmail: '',
};

const signupDraft = {
  state: { ...SIGNUP_DRAFT_INITIAL },
  listeners: new Set(),
  subscribe(fn) { this.listeners.add(fn); return () => this.listeners.delete(fn); },
  emit() { this.listeners.forEach(fn => fn()); },
  set(patch) { Object.assign(this.state, patch); this.emit(); },
  reset() { this.state = { ...SIGNUP_DRAFT_INITIAL }; this.emit(); },
};

function useSignupDraft() {
  const [, force] = React.useReducer(x => x + 1, 0);
  React.useEffect(() => signupDraft.subscribe(force), []);
  return {
    draft: signupDraft.state,
    set: (patch) => signupDraft.set(patch),
    reset: () => signupDraft.reset(),
  };
}

// — Sample dropdown options used by Step 2 —
const HOSPITAL_OPTIONS = [
  'St. Joseph Institute for the Deaf',
  "Children's Hospital of Philadelphia",
  "UNC Children's Cochlear Implant Center",
  "Boston Children's Hospital",
  'Mayo Clinic Hearing Program',
  'Other',
  'Not currently affiliated',
];

const EAR_DEVICE_OPTIONS = [
  { value: 'none',             label: 'None' },
  { value: 'hearing-aid',      label: 'Hearing aid' },
  { value: 'bahs',             label: 'Bone anchored hearing system' },
  { value: 'cochlear-implant', label: 'Cochlear implant' },
];

// — Validation helpers —
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidEmail(v) { return EMAIL_RE.test(String(v || '').trim()); }
function isValidPassword(v) { return String(v || '').length >= 8; }
function nonEmpty(v) { return String(v || '').trim().length > 0; }

Object.assign(window, {
  signupDraft, useSignupDraft,
  HOSPITAL_OPTIONS, EAR_DEVICE_OPTIONS,
  isValidEmail, isValidPassword, nonEmpty,
});
