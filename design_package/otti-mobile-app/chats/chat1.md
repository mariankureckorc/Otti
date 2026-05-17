# Otti Logo Design

_Started 2026-05-14 10:06 UTC_

---

## User

<system-info comment="Only acknowledge these if relevant">
Project title is now "Otti Mobile App"
Current date is now May 14, 2026
</system-info>

<default aesthetic>
If no references, art direction or design systems were provided, use this default professional modern, minimal aesthetic as a base. Declare your choice out loud so you stick to it. Guidance:
- Choose a type pairing from web-safe set or Google Fonts. Helvetica is a good choice. Avoid hard-to-read or overly stylized fonts. Use 1-3 fonts only.
- Foreground and background: choose a color tone (warm, cool, neutral, something in-between). Use subtly-toned whites and blacks; avoid saturations above 0.02 for whites.
- Accents: choose 0-2 additional accent colors using oklch. All accents should share same chroma and lightness; vary hue.
- NEVER write out an SVG yourself that's more complicated than a square, circle, diamond, etc.
- For imagery, never hand-draw SVGs; use subtly-striped SVG placeholders instead with monospace explainers for what should be dropped there (e.g. “product shot”)

CRITICAL: ignore default aesthetic entirely if given other aesthetic instructions like reference images, design systems or guidance, or if there are files in the project already.
</default aesthetic>

<attached_files>
- uploads/Otti_log.svg
</attached_files>

<pasted_text name="Pasted text (71 lines)">
I'm building a mobile app called Otti and need a full set of UI mockups. The logo and mascot are attached — use them as supplied, don't redraw them.
Context. Otti is a mobile app for parents of children with cochlear implants. It helps parents log how long their child wears the implant each day, track progress against an age-appropriate daily target, get reminders, share experience in a community forum, and read educational content. Audience is parents (mostly young parents of young children) using the app daily, often when tired. The product is built for SJID, an organisation working with families of children with hearing loss.
Goal. A full set of high-fidelity mockup screens, suitable for sharing with the client to align on look, feel, and structure before development begins. Treat the mascot as the visual heart of the product — present at emotional moments, never overused.
Screens to include
Auth and onboarding

Splash / welcome
Sign in (email, Google, Apple)
Blocked login state for an email not on the SJID approved list — gentle copy and a "contact SJID" action
First-run onboarding — set up child profile (name, age, implant side: left / right / both), invite second parent

Core daily use

Home / today — large progress indicator showing wear time against the daily target as a percentage, mascot near the ring with a contextual message ("Great start", "Almost there", "Target met")
Log session — manual entry with start/stop timer plus a total-minutes alternative
History — daily, weekly, monthly view of wear time versus target
Edit or correct an entry

Reminders

Notification permission request
Reminder settings — frequency, quiet hours

Community forum

Forum landing (categories or recent threads)
Thread view
New post composition

Articles

Article list with categories
Article detail

Account and settings

Profile and child profile management
Notification preferences
Privacy and consent
Invite or manage second parent
About / version
Sign out

Mascot-led moments

Empty state when history is opened for the first time
Daily target met — mascot celebrating
Streak or milestone — first week of consistent wear

Design direction

Family-friendly, warm, encouraging — never clinical
Palette aligned with sjid.org as a starting point, extended with softer or brighter accents where needed
Logo and mascot used exactly as supplied — embed the attached files, don't re-illustrate
Mascot appears at emotionally meaningful moments (onboarding, achievements, empty states), not on every screen
Generous whitespace, large touch targets, calm typography
Accessibility — colour contrast at WCAG AA minimum, large readable text, no critical information conveyed by colour alone

Output format
Single HTML artifact, all screens shown as iPhone-size phone-frame mockups arranged on a scrollable page (3–4 per row on desktop, one per row on mobile). Each screen labelled clearly with its name. Use realistic placeholder content — sample child name "Mia", plausible article titles, believable forum threads — rather than lorem ipsum. Keep the same fictional family across the screens for continuity.
Avoid

Clinical, medical, hospital aesthetic
Charts that emphasise deficit or illness
Framing the child as a patient rather than a kid
Generic SaaS dashboard look
Stock photography — use the mascot or no imagery
Lorem ipsum

If anything in the spec is unclear or you'd recommend restructuring, flag it before generating rather than guessing.
End of prompt ↑
</pasted_text>

<!-- The user explicitly selected the following skills for this project, as attachments to their message. These are not optional context — they define how you work. Use them. -->
<attached-skill name="Hi-fi design">
Create a high-fidelity, polished design. Follow the instructions about design in your system prompt, particularly the 'How to do design work' section. Use the design_canvas starter component, or make a full-bleed prototype and offer options via Tweaks.
</attached-skill>

<attached-skill name="Interactive prototype">
Create a fully interactive prototype with realistic state management and transitions. Use React useState/useEffect for dynamic behavior. Include hover states, click interactions, form validation, animated transitions, and multi-step navigation flows. It should feel like a real working app, not a static mockup.
</attached-skill>


<system-reminder>Auto-injected reminder (ignore if not relevant): do not recreate copyrighted or branded UI unless the user's email domain matches that company. Create original designs instead.</system-reminder>

## Assistant

_[tool: read_file]_

_[tool: copy_starter_component]_

I'll dive in. Quick flags first, then I'll build:

**Direction I'll take (declaring up front so we stay aligned):**
- **Palette from your logo**, not sjid.org. The logo gives me a strong, ownable system (Otti Navy `#163A78` + the green accent `#A8C83C`). I'll add warm cream backgrounds and a coral + sunny-yellow for emotional moments so it reads family-friendly, never clinical. This avoids leaning on another org's branded look.
- **Type**: Plus Jakarta Sans (warm, geometric, very legible for tired parents at 6am) with Fraunces for occasional display moments — actually I'll skip Fraunces, your system prompt flags it as overused. I'll use Plus Jakarta Sans throughout with weight variation.
- **Layout**: design_canvas with the 25 screens grouped into sections (Auth & Onboarding · Daily · Reminders · Community · Articles · Account · Mascot moments), iPhone-frame mockups, ~3-4 per row.
- **Continuity family**: Mia (4yo, bilateral implants), parent "Sam", second parent "Alex".

**Two small spec questions I'm answering myself rather than blocking on:**
- "Daily target" — I'll show 10 hours as the target (a common pediatric AV-therapy benchmark for under-5s); easy to tweak.
- "Blocked login" — I'll show it as a full screen state after submit, with friendly mascot-free copy ("We can't find your invite") and a "Contact SJID" mailto.

Let me get the starters and start building.

_[tool: copy_starter_component]_

_[tool: read_file]_

_[tool: write_file]_

Let me split the logo so I can use mascot-only at emotional moments and the full wordmark on splash/auth screens.

_[tool: write_file]_

_[tool: update_todos]_

Now I'll build the design system + all screens. Let me set up the file structure.

_[tool: write_file]_

_[tool: write_file]_

Now the auth & onboarding screens:

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: read_file]_

_[tool: grep]_

_[tool: write_file]_

Now the main app file that assembles everything:Now the index.html that wires everything together:

_[tool: write_file]_

_[tool: done]_

_[tool: fork_verifier_agent]_

Done — Otti mockups are ready to review.

**What's in the canvas (25 screens + 2 rationale cards):**
- **Intro** — The brief in one card · Design system overview
- **Auth & Onboarding** — Splash, Sign in, Blocked login, Child profile, Invite partner
- **Daily** — Home/Today, Log session, History, Edit entry
- **Reminders** — Notification permission, Reminder settings
- **Community** — Forum landing, Thread, New post
- **Articles** — List, Detail
- **Account** — Profile/settings hub, Notification prefs, Privacy & consent, Manage co-parent, About, Sign out
- **Mascot moments** — Empty history, Daily target met, First-week streak

**Choices worth flagging:**
- Palette is built from your logo (navy + green), extended with cream/coral/sun — I avoided pulling from sjid.org to stay clean of any third-party brand IP.
- Daily wear target shown as 10h (common pediatric guideline for under-5s) — easy to tune per child in the profile setup.
- Continuity family throughout: Sam & Alex Harper, daughter Mia (4, bilateral).
- Mascot kept rare on purpose — it shows up large only at onboarding, splash, achievements, empty states, sign-out and a few quiet "hello" moments (reminder settings, privacy hero). Not on most daily screens.

You can drag-reorder any artboard, inline-rename labels, and click the expand icon on any screen to view it fullscreen for closer comment.

**Quick next moves I'd suggest if you want them:**
- A dark-mode variant of the daily screens (parents using it pre-dawn)
- Tablet/iPad layouts for the same screens
- Animated transitions for the target-met and streak moments
- A printable spec-and-tokens handoff sheet for engineering

## User

on dark background show Otti logo in white color with i in green as it is now

## Assistant

_[tool: grep]_

_[tool: str_replace_edit]_

I'll inline the wordmark SVG so the "otti" letters can switch to white on dark backgrounds while the "i" stays green.Now apply `light` on the dark-bg uses (Splash + Brief card):

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: done]_

Done. On dark backgrounds (Splash, Brief intro card), the "otti" letters are now white while the "i" stem and dot stay green. Light-background uses (Sign in, About) keep the navy as before.

## User

Save this design as a PDF: index.html

## Assistant

_[tool: write_file]_

_[tool: write_file]_

_[tool: show_html]_

_[tool: show_html]_

_[tool: get_webview_logs]_

_[tool: save_screenshot]_

_[tool: save_screenshot]_

_[tool: str_replace_edit]_

_[tool: open_for_print]_

No errors. Let me add the auto-print script and open for printing.Print tab is open — when it loads, the system print dialog will appear automatically. Choose **Save as PDF**. If a popup blocker stopped it, [open the print view manually](https://019e25f3-df94-76df-a274-6146d784e878.claudeusercontent.com/v1/design/projects/019e25f3-df94-76df-a274-6146d784e878/serve/index-print.html?t=822327c1658ebe782ae949e25a6529c160c94ba2b35914d4a77d724e88f8b4e5.8c32bab4-f870-4121-81a5-0ddd12b91e2a.2b7d6c13-627d-47c9-9816-f672f6e93e74.1779029845&direct=1). For best results, pick **A3 Landscape** in the print dialog.

## User

Save as standalone HTML: index.html

## Assistant

_[tool: str_replace_edit]_

_[tool: copy_files]_

I need to lift one resource reference (`assets/mascot.svg` is used in JSX as a string).

_[tool: str_replace_edit]_

_[tool: super_inline_html]_

_[tool: show_html]_

_[tool: sleep]_

_[tool: get_webview_logs]_

Clean. Delivering:

_[tool: present_fs_item_for_download]_

Single-file, fully offline — works with no internet.

