# @labdigital/paynl-connect

[![npm](https://img.shields.io/npm/v/@labdigital/paynl-connect)](https://www.npmjs.com/package/@labdigital/paynl-connect)

Typed client for the [Pay.](https://www.pay.nl) Connect order API (`https://connect.pay.nl`).
It covers creating orders and managing them afterwards: get the status, approve, decline,
capture (fully, by amount or by products), void and abort. It is generated from Pay.'s OpenAPI
definition with the [`api`](https://api.readme.dev) generator and uses
[`@readme/api-core`](https://www.npmjs.com/package/@readme/api-core).

## Installation

```sh
pnpm add @labdigital/paynl-connect
# or
npm install @labdigital/paynl-connect
```

## Requirements

- Node.js >= 22
- ESM only (`import`, no `require`)

## Usage

The default export is a ready-to-use client instance. The API supports HTTP basic auth (for
example an AT code and its token) and bearer tokens.

```ts
import paynl from "@labdigital/paynl-connect";

paynl.auth("AT-1234-5678", process.env.PAYNL_API_TOKEN ?? "");

// Create an order
const { data: order } = await paynl.api_create_order({
	serviceId: "SL-1234-5678",
	amount: { value: 1250, currency: "EUR" }, // amount in cents
	description: "Order 1234",
	reference: "order1234",
	returnUrl: "https://example.com/checkout/complete",
});
console.log(order.id, order.links);

// Get the status of an order
const { data: current } = await paynl.api_get_status({ id: order.id ?? "" });
console.log(current.status?.action); // e.g. "PENDING"

// Capture part of the amount
await paynl.api_capture_amount({ amount: 500 }, { id: order.id ?? "" });
```

Available methods:

| Method | Endpoint |
| --- | --- |
| `api_create_order(body)` | `POST /v1/orders` |
| `api_get_status({ id })` | `GET /v1/orders/{id}/status` |
| `api_approve_order({ id })` | `PATCH /v1/orders/{id}/approve` |
| `api_decline_order({ id })` | `PATCH /v1/orders/{id}/decline` |
| `api_capture_order({ id })` | `PATCH /v1/orders/{id}/capture` |
| `api_capture_amount(body, { id })` | `PATCH /v1/orders/{id}/capture/amount` |
| `api_capture_products(body, { id })` | `PATCH /v1/orders/{id}/capture/products` |
| `api_void_order({ id })` | `PATCH /v1/orders/{id}/void` |
| `api_abort_order({ id })` | `PATCH /v1/orders/{id}/abort` |

Every method returns a promise for `{ data, status, headers, res }`. For error responses the
promise rejects with a `FetchError` from `@readme/api-core` that has `status` and `data`
properties.

### Types

Request and response types are exported from `@labdigital/paynl-connect/types`:

```ts
import type { OrderInput, OrderOutput } from "@labdigital/paynl-connect/types";
```

### Multiple clients

The `SDK` class is exported from `@labdigital/paynl-connect/sdk` if you need more than one
client:

```ts
import SDK from "@labdigital/paynl-connect/sdk";

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

```ts
// Use the alternative server from the OpenAPI definition
paynl.server("https://connect.payments.nl");
```

## Development and release

See the [repository README](https://github.com/labd/paynl-js-sdk#readme).

## License

MIT
