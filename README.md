# Digital Waterside Frontend

Frontend monorepo for the customer marketplace, vendor dashboard, and admin dashboard.

## Requirements

- Node.js 20+
- pnpm 9+

## Development

```sh
pnpm install
pnpm dev
```

The apps run on ports 3000 (marketplace), 3001 (vendor), and 3002 (admin).
Set `NEXT_PUBLIC_API_URL` to the backend API URL when connecting to the API.
