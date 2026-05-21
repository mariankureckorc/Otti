/* Signup wizard — 2 steps + verification waiting screen */

// — Shared atoms scoped to the signup screens ————————————

function StepIndicator({ step, total = 2 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <div style={{
        fontSize: 11, fontWeight: 700, color: OTTI.navy,
        letterSpacing: 0.8, textTransform: 'uppercase',
      }}>
        Step {step} of {total}
      </div>
      <div style={{ display: 'flex', gap: 4 }}>
        {Array.from({ length: total }, (_, i) => (
          <div key={i} style={{
            width: 24, height: 4, borderRadius: 2,
            background: i < step ? OTTI.navy : OTTI.navyTint,
          }} />
        ))}
      </div>
    </div>
  );
}

function FormField({ label, value, onChange, type = 'text', placeholder, error, autoFocus, autoComplete }) {
  const hasError = !!error;
  const focused = value && value.length > 0;
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ fontSize: 13, fontWeight: 600, color: OTTI.ink2, marginBottom: 6 }}>{label}</div>
      <input
        type={type}
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoFocus={autoFocus}
        autoComplete={autoComplete}
        style={{
          width: '100%', height: 50, borderRadius: 14,
          background: '#fff',
          border: `1.5px solid ${hasError ? OTTI.coral : (focused ? OTTI.navy : OTTI.lineSolid)}`,
          padding: '0 16px', fontSize: 16, fontWeight: 500, color: OTTI.ink,
          fontFamily: SANS, outline: 'none', boxSizing: 'border-box',
        }}
      />
      {hasError && (
        <div style={{ fontSize: 12, color: OTTI.coral, marginTop: 4, fontWeight: 500 }}>{error}</div>
      )}
    </div>
  );
}

function SelectField({ label, value, onChange, options, placeholder, error }) {
  const hasError = !!error;
  const focused = value && value.length > 0;
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ fontSize: 13, fontWeight: 600, color: OTTI.ink2, marginBottom: 6 }}>{label}</div>
      <div style={{ position: 'relative' }}>
        <select
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          style={{
            width: '100%', height: 50, borderRadius: 14,
            background: '#fff',
            border: `1.5px solid ${hasError ? OTTI.coral : (focused ? OTTI.navy : OTTI.lineSolid)}`,
            padding: '0 40px 0 14px', fontSize: 16, fontWeight: 500,
            color: value ? OTTI.ink : OTTI.ink3,
            fontFamily: SANS, outline: 'none', boxSizing: 'border-box',
            appearance: 'none', WebkitAppearance: 'none', MozAppearance: 'none',
            cursor: 'pointer',
          }}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map(opt => {
            const v = typeof opt === 'string' ? opt : opt.value;
            const l = typeof opt === 'string' ? opt : opt.label;
            return <option key={v} value={v}>{l}</option>;
          })}
        </select>
        <div style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
          {Icon.chevDown(OTTI.ink3, 18)}
        </div>
      </div>
      {hasError && (
        <div style={{ fontSize: 12, color: OTTI.coral, marginTop: 4, fontWeight: 500 }}>{error}</div>
      )}
    </div>
  );
}

// — Step 1: Create your account ————————————————————

function ScreenSignupStep1({ nav }) {
  const { draft, set } = useSignupDraft();
  const [errors, setErrors] = React.useState({});
  const [oauthLoading, setOauthLoading] = React.useState(null); // 'apple' | 'google' | null

  function simulateOauth(provider) {
    if (oauthLoading) return;
    setOauthLoading(provider);
    setTimeout(() => {
      set({
        oauthProvider: provider,
        firstName: 'Alex',
        lastName: 'Smith',
        email: 'alex.smith@example.com',
        password: '',
        confirmPassword: '',
      });
      setOauthLoading(null);
      nav('signupStep2');
    }, 800);
  }

  function validate() {
    const next = {};
    if (!nonEmpty(draft.firstName)) next.firstName = 'First name is required.';
    if (!nonEmpty(draft.lastName)) next.lastName = 'Last name is required.';
    if (!nonEmpty(draft.email)) next.email = 'Email is required.';
    else if (!isValidEmail(draft.email)) next.email = 'Enter a valid email address.';
    if (!nonEmpty(draft.password)) next.password = 'Password is required.';
    else if (!isValidPassword(draft.password)) next.password = 'At least 8 characters.';
    if (!nonEmpty(draft.confirmPassword)) next.confirmPassword = 'Confirm your password.';
    else if (draft.password !== draft.confirmPassword) next.confirmPassword = 'Passwords don’t match.';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function onContinue() {
    if (validate()) {
      set({ oauthProvider: null });
      nav('signupStep2');
    }
  }

  return (
    <Phone bg={OTTI.cream}>
      <div style={{ position: 'absolute', inset: 0, overflow: 'auto' }}>
        <div style={{ paddingTop: 70, padding: '70px 24px 0' }}>
          <StepIndicator step={1} />
          <div style={{ marginTop: 14, fontSize: 28, fontWeight: 800, color: OTTI.navyDeep, letterSpacing: -0.6, lineHeight: 1.15 }}>
            Create your account
          </div>
          <div style={{ marginTop: 6, fontSize: 14, color: OTTI.ink2, lineHeight: 1.45 }}>
            Use Apple, Google, or your email to get started.
          </div>

          {/* OAuth */}
          <div style={{ marginTop: 22, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <Btn
              kind="secondary"
              icon={Icon.apple(20)}
              onClick={() => simulateOauth('apple')}
              style={oauthLoading === 'apple' ? { opacity: 0.6 } : {}}
            >
              {oauthLoading === 'apple' ? 'Signing in…' : 'Continue with Apple'}
            </Btn>
            <Btn
              kind="secondary"
              icon={Icon.google(20)}
              onClick={() => simulateOauth('google')}
              style={oauthLoading === 'google' ? { opacity: 0.6 } : {}}
            >
              {oauthLoading === 'google' ? 'Signing in…' : 'Continue with Google'}
            </Btn>
          </div>

          {/* Divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '22px 0' }}>
            <div style={{ flex: 1, height: 1, background: OTTI.lineSolid }} />
            <div style={{ fontSize: 12, color: OTTI.ink3, fontWeight: 600, letterSpacing: 0.4 }}>or</div>
            <div style={{ flex: 1, height: 1, background: OTTI.lineSolid }} />
          </div>

          {/* Email form */}
          <FormField
            label="First name"
            value={draft.firstName}
            onChange={(v) => set({ firstName: v })}
            placeholder="Sam"
            autoComplete="given-name"
            error={errors.firstName}
          />
          <FormField
            label="Last name"
            value={draft.lastName}
            onChange={(v) => set({ lastName: v })}
            placeholder="Harper"
            autoComplete="family-name"
            error={errors.lastName}
          />
          <FormField
            label="Email"
            value={draft.email}
            onChange={(v) => set({ email: v })}
            type="email"
            placeholder="sam.harper@example.com"
            autoComplete="email"
            error={errors.email}
          />
          <FormField
            label="Password"
            value={draft.password}
            onChange={(v) => set({ password: v })}
            type="password"
            placeholder="At least 8 characters"
            autoComplete="new-password"
            error={errors.password}
          />
          <FormField
            label="Confirm password"
            value={draft.confirmPassword}
            onChange={(v) => set({ confirmPassword: v })}
            type="password"
            placeholder="Re-enter password"
            autoComplete="new-password"
            error={errors.confirmPassword}
          />

          <div style={{ marginTop: 12 }}>
            <Btn onClick={onContinue}>Continue</Btn>
          </div>

          <div style={{ marginTop: 18, marginBottom: 36, textAlign: 'center', fontSize: 14, color: OTTI.ink2 }}>
            Already have an account?{' '}
            <span onClick={() => nav('signIn')} style={{ color: OTTI.navy, fontWeight: 700, cursor: 'pointer' }}>
              Sign in
            </span>
          </div>
        </div>
      </div>
    </Phone>
  );
}

// — Step 2: Tell us about your child ————————————————————

function ScreenSignupStep2({ nav }) {
  const { draft, set } = useSignupDraft();
  const { addChild } = useChildren();
  const [errors, setErrors] = React.useState({});

  // Default DOB max = today, min = 18 years ago
  const todayStr = React.useMemo(() => new Date().toISOString().slice(0, 10), []);
  const minDobStr = React.useMemo(() => {
    const d = new Date();
    d.setFullYear(d.getFullYear() - 18);
    return d.toISOString().slice(0, 10);
  }, []);

  function validate() {
    const next = {};
    if (!nonEmpty(draft.childName)) next.childName = "Your child's first name is required.";
    if (!nonEmpty(draft.dob)) next.dob = 'Date of birth is required.';
    const hasDevice = (draft.leftEar && draft.leftEar !== 'none') || (draft.rightEar && draft.rightEar !== 'none');
    if (!hasDevice) next.ears = 'Set a device for at least one ear.';
    if (draft.inviteEmail && !isValidEmail(draft.inviteEmail)) next.inviteEmail = 'Enter a valid email address.';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function onContinue() {
    if (!validate()) return;
    // "Save" the new child profile — adds to childrenStore and sets it active.
    addChild({
      name: draft.childName.trim(),
      dob: draft.dob,
      hospital: draft.hospital || null,
      leftEar: draft.leftEar,
      rightEar: draft.rightEar,
    });
    nav('verifyWaiting');
  }

  return (
    <Phone bg={OTTI.cream}>
      <div style={{ position: 'absolute', inset: 0, overflow: 'auto' }}>
        <div style={{ paddingTop: 70, padding: '70px 24px 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <button onClick={() => nav('signupStep1')} style={{
              width: 36, height: 36, border: 'none', cursor: 'pointer', padding: 0,
              background: OTTI.navyTint, borderRadius: 18,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>{Icon.back(OTTI.navy, 18)}</button>
            <StepIndicator step={2} />
            <div style={{ width: 36 }} />
          </div>

          <div style={{ marginTop: 14, fontSize: 28, fontWeight: 800, color: OTTI.navyDeep, letterSpacing: -0.6, lineHeight: 1.15 }}>
            Tell us about your child
          </div>
          <div style={{ marginTop: 6, fontSize: 14, color: OTTI.ink2, lineHeight: 1.45 }}>
            Otti uses age and devices to suggest a wear-time goal.
          </div>

          <div style={{ marginTop: 22 }}>
            <FormField
              label="Child's first name"
              value={draft.childName}
              onChange={(v) => set({ childName: v })}
              placeholder="Mia"
              autoComplete="off"
              error={errors.childName}
            />

            {/* Date picker — native input type=date */}
            <div style={{ marginBottom: 14 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: OTTI.ink2, marginBottom: 6 }}>Date of birth</div>
              <input
                type="date"
                value={draft.dob || ''}
                onChange={(e) => set({ dob: e.target.value })}
                max={todayStr}
                min={minDobStr}
                style={{
                  width: '100%', height: 50, borderRadius: 14,
                  background: '#fff',
                  border: `1.5px solid ${errors.dob ? OTTI.coral : (draft.dob ? OTTI.navy : OTTI.lineSolid)}`,
                  padding: '0 16px', fontSize: 16, fontWeight: 500, color: draft.dob ? OTTI.ink : OTTI.ink3,
                  fontFamily: SANS, outline: 'none', boxSizing: 'border-box',
                }}
              />
              {errors.dob && (
                <div style={{ fontSize: 12, color: OTTI.coral, marginTop: 4, fontWeight: 500 }}>{errors.dob}</div>
              )}
            </div>

            <SelectField
              label="Hospital / Institute"
              value={draft.hospital}
              onChange={(v) => set({ hospital: v })}
              options={HOSPITAL_OPTIONS}
              placeholder="Select an institute"
            />

            {/* Hearing technology */}
            <div style={{ marginBottom: 6, fontSize: 12, fontWeight: 700, color: OTTI.ink3, letterSpacing: 0.6, textTransform: 'uppercase' }}>
              Hearing technology
            </div>
            <SelectField
              label="Left ear"
              value={draft.leftEar}
              onChange={(v) => set({ leftEar: v })}
              options={EAR_DEVICE_OPTIONS}
            />
            <SelectField
              label="Right ear"
              value={draft.rightEar}
              onChange={(v) => set({ rightEar: v })}
              options={EAR_DEVICE_OPTIONS}
            />
            {errors.ears && (
              <div style={{ fontSize: 12, color: OTTI.coral, marginTop: -4, marginBottom: 12, fontWeight: 500 }}>
                {errors.ears}
              </div>
            )}

            {/* Optional invite */}
            <div style={{ marginTop: 6, marginBottom: 8, fontSize: 12, fontWeight: 700, color: OTTI.ink3, letterSpacing: 0.6, textTransform: 'uppercase' }}>
              Invite another parent (optional)
            </div>
            <FormField
              label="Their email"
              value={draft.inviteEmail}
              onChange={(v) => set({ inviteEmail: v })}
              type="email"
              placeholder="partner@example.com"
              autoComplete="email"
              error={errors.inviteEmail}
            />
            <div style={{ marginTop: -8, marginBottom: 14, fontSize: 12, color: OTTI.ink3, lineHeight: 1.4 }}>
              They'll receive an invite to share this child's profile. You can also do this later.
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: 10, marginTop: 6, marginBottom: 36 }}>
              <Btn kind="secondary" onClick={() => nav('signupStep1')}>Back</Btn>
              <Btn onClick={onContinue}>Continue</Btn>
            </div>
          </div>
        </div>
      </div>
    </Phone>
  );
}

// — Post-signup: verification waiting ————————————————————

function ScreenVerifyWaiting({ nav }) {
  const { reset } = useSignupDraft();

  const finish = React.useCallback(() => {
    reset();
    nav('home');
  }, [nav, reset]);

  React.useEffect(() => {
    const t = setTimeout(finish, 8000);
    return () => clearTimeout(t);
  }, [finish]);

  return (
    <Phone bg={OTTI.cream}>
      {/* Keyframes for the dot pulse */}
      <style>{`
        @keyframes ottiPulse {
          0%, 80%, 100% { opacity: 0.25; transform: scale(0.85); }
          40%           { opacity: 1;    transform: scale(1.05); }
        }
        @keyframes ottiRing {
          0%   { transform: scale(0.9); opacity: 0.45; }
          80%  { transform: scale(1.6); opacity: 0;    }
          100% { transform: scale(1.6); opacity: 0;    }
        }
      `}</style>

      <div style={{
        position: 'absolute', inset: 0, padding: '0 28px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center',
      }}>
        {/* Mascot in a pulsing halo */}
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <div style={{
            position: 'absolute', inset: -28, borderRadius: '50%', background: OTTI.greenSoft,
            animation: 'ottiRing 2.6s ease-out infinite',
          }} />
          <div style={{ position: 'relative' }}>
            <Mascot size={160} />
          </div>
        </div>

        <div style={{ marginTop: 28, fontSize: 24, fontWeight: 800, color: OTTI.navyDeep, letterSpacing: -0.5, lineHeight: 1.2 }}>
          We're verifying your account
        </div>
        <div style={{ marginTop: 12, fontSize: 15, color: OTTI.ink2, lineHeight: 1.55, maxWidth: 320 }}>
          Thanks for signing up! Our team is checking your details. You'll be notified by email when your account is approved — this usually takes one business day.
        </div>

        {/* Animated dots */}
        <div style={{ marginTop: 22, display: 'flex', gap: 8 }}>
          {[0, 1, 2].map(i => (
            <div key={i} style={{
              width: 10, height: 10, borderRadius: 5, background: OTTI.navy,
              animation: 'ottiPulse 1.4s ease-in-out infinite',
              animationDelay: `${i * 0.18}s`,
            }} />
          ))}
        </div>
      </div>

      {/* Demo skip — anchored at bottom */}
      <div style={{
        position: 'absolute', bottom: 28, left: 0, right: 0, textAlign: 'center',
      }}>
        <button
          onClick={finish}
          style={{
            background: 'transparent', border: 'none', cursor: 'pointer',
            fontFamily: SANS, fontSize: 13, fontWeight: 600, color: OTTI.ink3,
            padding: '8px 16px',
          }}
        >
          Skip verification (demo only)
        </button>
      </div>
    </Phone>
  );
}

Object.assign(window, { ScreenSignupStep1, ScreenSignupStep2, ScreenVerifyWaiting });
