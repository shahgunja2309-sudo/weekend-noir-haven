<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application architecture
- Shared navigation, theme switching, search and newsletter dialog live in SiteShell around the root Outlet so every public page uses the same controls.
- Each main section is a top-level public route with its own head metadata because the artist archive pages must be independently shareable.
- Artist content and asset references are centralized in artist-data so album, timeline and search content stay consistent.
- Public submission functions validate with shared Zod schemas before using a server-only privileged client for insert-only capture; visitors cannot read private submissions.
- Fan photos stay in private Cloud storage and are linked to unapproved submissions so user uploads never publish automatically.
