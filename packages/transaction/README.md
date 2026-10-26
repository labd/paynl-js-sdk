# @labdigital/paynl-transaction

[![npm](https://img.shields.io/npm/v/@labdigital/paynl-transaction)](https://www.npmjs.com/package/@labdigital/paynl-transaction)

Typed client for the [Pay.](https://www.pay.nl) Transaction Gateway Unit API (`https://rest.pay.nl/v2`).
It covers creating a transaction in redirect mode, fetching transaction details and getting the
status of a transaction. It is generated from Pay.'s OpenAPI definition with the
[`api`](https://api.readme.dev) generator and uses [`@readme/api-core`](https://www.npmjs.com/package/@readme/api-core).

## Installation

```sh
pnpm add @labdigital/paynl-transaction
# or
npm install @labdigital/paynl-transaction
```

## Requirements

- Node.js >= 22
- ESM only (`import`, no `require`)

## Usage

The default export is a ready-to-use client instance. Authenticate with an AT code (username) and
its token (password), or with an SL code (username) and its secret (password).

```ts
import paynl from "@labdigital/paynl-transaction";

paynl.auth("AT-1234-5678", process.env.PAYNL_API_TOKEN ?? "");

// Create a transaction and send the payer to the payment page
const { data: transaction } = await paynl.postTransactions({
	serviceId: "SL-1234-5678",
	amount: { value: 1250, currency: "EUR" }, // amount in cents
	description: "Order 1234",
	reference: "order1234",
	returnUrl: "https://example.com/checkout/complete",
	exchangeUrl: "https://example.com/api/paynl/exchange",
});
console.log(transaction.id, transaction.paymentUrl);

// Get the status of a transaction
const { data: status } = await paynl.getTransactionsTransactionidStatus({
	transactionId: "EX-1234-1234-1234",
});
console.log(status.status?.action); // e.g. "PAID"

// Get all details of a transaction
const { data: details } = await paynl.getTransactionsTransactionid({
	transactionId: "EX-1234-1234-1234",
});
```

Every method returns a promise for `{ data, status, headers, res }`. For error responses (for
example 400 or 422) the promise rejects with a `FetchError` from `@readme/api-core` that has
`status` and `data` properties.

### Types

Request and response types are exported from `@labdigital/paynl-transaction/types`:

```ts
import type {
	PostTransactionsBodyParam,
	TransactionStatus,
} from "@labdigital/paynl-transaction/types";
```

### Multiple clients

The `SDK` class is exported from `@labdigital/paynl-transaction/sdk` if you need more than one
client, for example with different credentials:

```ts
import SDK from "@labdigital/paynl-transaction/sdk";

const client = new SDK();
client.auth("SL-1234-5678", process.env.PAYNL_SERVICE_SECRET ?? "");
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
paynl.server("https://rest.letspay.nl/v2");
```

## Development and release

See the [repository README](https://github.com/labd/paynl-js-sdk#readme).

## License

MIT
