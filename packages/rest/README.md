# @labdigital/paynl-rest

[![npm](https://img.shields.io/npm/v/@labdigital/paynl-rest)](https://www.npmjs.com/package/@labdigital/paynl-rest)

Typed client for the [Pay.](https://www.pay.nl) REST API (`https://rest.pay.nl/v2`). It covers the
management side of Pay.: merchants, services, authentication tokens, clearing accounts, contact
methods, licenses, trademarks, direct debits, invoices and reference data such as countries and
currencies. It is generated from Pay.'s OpenAPI definition with the [`api`](https://api.readme.dev)
generator and uses [`@readme/api-core`](https://www.npmjs.com/package/@readme/api-core).

## Installation

```sh
pnpm add @labdigital/paynl-rest
# or
npm install @labdigital/paynl-rest
```

## Requirements

- Node.js >= 22
- ESM only (`import`, no `require`)

## Usage

The default export is a ready-to-use client instance. The API supports HTTP basic auth and
bearer tokens.

```ts
import paynl from "@labdigital/paynl-rest";

paynl.auth("AT-1234-5678", process.env.PAYNL_API_TOKEN ?? "");

// List the authentication tokens of your own merchant
const { data: tokens } = await paynl.getAuthenticationtokens();

// Get a merchant
const { data: merchant } = await paynl.getMerchantsMerchantcode({
	merchantCode: "M-1234-5678",
});

// Reference data
const { data: countries } = await paynl.getCountries();
```

Method names follow the HTTP method and path of the endpoint, for example
`getMerchantsMerchantcode` for `GET /merchants/{merchantCode}`. See `src/sdk.ts` or your editor's
autocomplete for the full list.

Every method returns a promise for `{ data, status, headers, res }`. For error responses the
promise rejects with a `FetchError` from `@readme/api-core` that has `status` and `data`
properties.

### Types

Request and response types are exported from `@labdigital/paynl-rest/types`:

```ts
import type { Merchant } from "@labdigital/paynl-rest/types";
```

### Multiple clients

The `SDK` class is exported from `@labdigital/paynl-rest/sdk` if you need more than one client:

```ts
import SDK from "@labdigital/paynl-rest/sdk";

const client = new SDK();
client.auth("AT-1234-5678", process.env.PAYNL_API_TOKEN ?? "");
```

## Configuration

```ts
// Override the default 30 second request timeout (milliseconds) and pass extra `fetch` options
paynl.config({
	timeout: 10_000,
	init: { headers: { "x-request-id": "abc123" } },
});
```

`auth()` accepts up to two values: a username and password for HTTP basic auth, or a single
bearer token. `server()` selects a different base URL.

## Development and release

See the [repository README](https://github.com/labd/paynl-js-sdk#readme).

## License

MIT
