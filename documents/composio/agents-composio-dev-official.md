# Official agents.composio.dev instructions for Blair

Use the page origin as the API base:

- Base URL for agent identity/bootstrap endpoints: `https://agents.composio.dev`
- Do **not** use `https://api.composio.dev`; that hostname does not resolve publicly and is not the agent signup surface.
- Composio REST/API docs use `https://backend.composio.dev/api/v3` or `/api/v3.1` after credentials exist.

## Flow

0. Check for existing identity:
   - Look for `~/.composio/anonymous_user_data.json`.
   - If it exists, read `agent_key` and call:
     `GET https://agents.composio.dev/api/whoami`
     with `Authorization: Bearer <agent_key>`.
   - If that returns HTTP 200 with `status: "READY"`, reuse the saved credentials and skip signup.

1. Signup:
   - `POST https://agents.composio.dev/api/signup`
   - Default behavior waits for readiness and returns HTTP 201 with `agent_key`, `member_id`, `org_id`, `project_id`, `api_key`, and `user_api_key`.
   - Immediately save the full response to `~/.composio/anonymous_user_data.json`.

2. Install CLI:
   - `GET https://agents.composio.dev/api/cli`
   - Header: `Authorization: Bearer <agent_key>`.
   - Run the returned install/login text.

3. Optional claim:
   - `POST https://agents.composio.dev/api/claim` with `{ "email": "..." }` only when handing org admin to a human.

## Verified from this container

`agents.composio.dev`, `connect.composio.dev`, and `backend.composio.dev` resolve and are reachable from Blair's container. If `api.composio.dev` fails DNS, that is expected because it is the wrong hostname, not a container networking restriction.
