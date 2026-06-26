// ─────────────────────────────────────────────────────────────────────────────
// Intro gate — single source of truth for "has the load intro already played?"
//
// WHY THIS EXISTS (read before changing):
// The intro must play ONCE per tab session — on the very first page load — and
// never again on refresh or while navigating between pages. The flag therefore
// CANNOT live in a plain variable (e.g. `window.__introDone`): in-memory state
// is destroyed on every hard reload, so the intro would replay on each refresh.
// That was the bug this module fixes. It must stay in `sessionStorage` so the
// "played" flag survives reloads within the same tab but resets for a fresh
// session. Do not "simplify" this back to a window global or React state.
//
// Scope: sessionStorage = once per tab session. (Swap to localStorage only if
// the intent changes to "play exactly once per browser, forever.")
// ─────────────────────────────────────────────────────────────────────────────

const STORAGE_KEY = 'bizznest:introPlayed'

// Storage access can throw (Safari private mode, disabled cookies). Treat any
// failure as "not played" so the intro still works rather than crashing.
export function hasIntroPlayed() {
  try {
    return window.sessionStorage.getItem(STORAGE_KEY) === 'true'
  } catch {
    return false
  }
}

export function markIntroPlayed() {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, 'true')
  } catch {
    // Storage unavailable — the intro just won't be suppressed on reload.
  }
}
