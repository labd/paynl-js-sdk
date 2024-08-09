import { GetTransactionsTransactionidMetadataParam, Transaction, PostTransactionsBodyParam, PostTransactionsResponse201, GetTransactionsTransactionidStatusMetadataParam, TransactionStatus } from './types.cjs';
import { ConfigOptions, FetchResponse } from '@readme/api-core/types';
import APICore from '@readme/api-core';

declare class SDK {
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    auth(...values: string[] | number[]): this;
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    server(url: string, variables?: {}): void;
    /**
     * Get all detailed information of a transaction. You can use the EX code or the order ID
     * to retrieve the detailed transaction information
     *
     * @summary Transaction:Info
     */
    getTransactionsTransactionid(metadata: GetTransactionsTransactionidMetadataParam): Promise<FetchResponse<200, Transaction>>;
    /**
     * This endpoint is used to create a transaction in redirect mode. By calling this
     * endpoint, you get a transactionID and a paymentUrl which can be used to redirect the
     * payer. After the payment, the payer will be redirected to the provided returnUrl, where
     * you can check the status and process the order.
     *
     * You need to authenticate with an AT code (as username) and the corresponding token (as
     * password) or you can authenticate with a SL code (as username) and the corresponding
     * secret (as password)
     *
     * @summary Transaction:Create
     * @throws FetchError<400, types.Error> Bad request, see response body for more information
     * @throws FetchError<422, types.Error> Unprocessable Entity, see response body for more information
     */
    postTransactions(body: PostTransactionsBodyParam): Promise<FetchResponse<201, PostTransactionsResponse201>>;
    /**
     * Get the status of a transaction. You can use the EX code or
     * the order ID to retrieve the status of a transaction. If you want more detailed
     * information about the transaction,
     * call the Transaction:Info API.
     *
     * @summary Transaction:Status
     */
    getTransactionsTransactionidStatus(metadata: GetTransactionsTransactionidStatusMetadataParam): Promise<FetchResponse<200, TransactionStatus>>;
}

export = SDK;
