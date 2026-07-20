# Coding Conventions

## Comment Preservation

- **Never silently delete an existing comment** when editing a file, even if
  rewriting the surrounding code. If a comment seems outdated or wrong, flag
  it in your response and ask before removing it — don't just drop it.
- Comments explaining *why* something is done a certain way (workarounds,
  non-obvious business logic, "don't change this because...") are especially
  important to preserve. These often can't be recovered from the code alone
  after a memory reset.
- When writing new non-obvious code, add a brief comment explaining the
  reasoning — not what the code does (that should be readable from the code
  itself), but why this approach was chosen if it isn't the first thing
  someone would try.
- TODO comments should be preserved and, when resolved, either removed with
  a note in `progress.md` or updated to reflect new status — not silently deleted.
