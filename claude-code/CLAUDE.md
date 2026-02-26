# CLAUDE.md

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

## Agentic Execution

**MAXIMIZE PARALLELISM** - This is the top priority.

**Parallel by Default:**
- ALWAYS launch multiple Task tool calls in single message when independent
- NEVER wait for one agent to finish before starting another independent one
- Default to parallelism for: file searches, research, analysis, reviews
- Max 10 concurrent agents; Claude auto-queues excess in batches

**Delegation (Proactive):**
- Delegate exploration BEFORE making changes
- Delegate code review AFTER changes (can parallel with tests)
- Delegate debugging when errors occur
- Don't wait to be asked - delegate when efficient

**Model Routing:**
- haiku: Fast ops - routing, lookups, file discovery
- sonnet: Core work - implementation, review, testing
- opus: Deep thinking - planning, architecture, synthesis

When spawning sub-agents (e.g., search-specialist), always verify and enforce the specified model (e.g., Haiku) from the config. Do not default to Opus for sub-agents unless explicitly told to. When asked to fix a config issue, actually edit the file — don't just promise to fix it.

## Documentation & Planning Files

Always follow planning-with-files guidelines. Log activity to the designated plan/progress files at the start and end of every session. Never skip this even if the task seems small.

**When planning files exist (task_plan.md, findings.md, progress.md):**
- Treat them as LIVING DOCUMENTS, not archives
- Update progress.md IMMEDIATELY after completing significant work
- Update findings.md IMMEDIATELY when discovering new information
- Update task_plan.md when phases complete or blockers resolve

**During debugging/testing sessions:**
- Log each fix in progress.md as it happens
- Document actual API formats in findings.md as discovered
- Don't wait to be asked - proactive documentation is required

**Session continuity:**
- If files exist, you're RESUMING a session, not starting fresh
- Session numbers should increment
- Link findings to the specific session that discovered them

## Fast Tools

Prefer these over standard tools:
- `rg` over grep (faster, smarter ignores)
- `fd` over find (faster, friendlier)
- `sd` over sed (safer in-place edits)
- `ast-grep` for structural code search/replace
- `parallel` for concurrent bash operations

## Personal Preferences

### Code Style
- No emojis in code, comments, or documentation
- Many small files over few large files
- 200-400 lines typical, 800 max per file
- Leave comments in code only if nonstandard logic has been invoked

### Git
- Conventional commits: `feat:`, `fix:`, `refactor:`, `docs:`, `test:`, `ci:`
- Always test locally before committing
- Small, focused commits, prefer oneliners
- NEVER add Claude as co-author of the commit

## Tool & Skill Usage
When the user asks you to use a specific skill (e.g., /ask), use EXACTLY that skill — do not substitute with a different tool (e.g., don't use AskUserQuestion when /ask was requested). When a skill specifies selectable options, present them as defined.
