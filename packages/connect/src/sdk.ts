import type * as types from './types.js';
import type { ConfigOptions, FetchResponse } from '@readme/api-core/types';
import APICore from '@readme/api-core';
import definition from '../openapi.json';

export default class SDK {
  core: APICore;

  constructor() {
    this.core = new APICore(definition, 'paynl-connect/1 (api/7.0.0-beta.8)');
  }

  /**
   * Optionally configure various options that the SDK allows.
   *
   * @param config Object of supported SDK options and toggles.
   * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
   * should be represented in milliseconds.
   */
  config(config: ConfigOptions) {
    this.core.setConfig(config);
  }

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
  auth(...values: string[] | number[]) {
    this.core.setAuth(...values);
    return this;
  }

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
  server(url: string, variables = {}) {
    this.core.setServer(url, variables);
  }

  /**
   * Create an order on this TGU. An order represents the total order as it exists in your
   * shop and can be fulfilled through one or more payments.
   *
   * @summary Order:Create
   * @throws FetchError<400, types.ErrorOutput> Bad request, see response body for more information
   * @throws FetchError<401, types.ErrorOutput> Unauthorized. Supplied credentials are invalid
   * @throws FetchError<403, types.ErrorOutput> Forbidden. Supplied credentials have no rights
   * @throws FetchError<405, types.ErrorOutput> Used HTTP method is not allowed
   * @throws FetchError<406, types.ErrorOutput> Not acceptable. The supplied content type in the accept parameter in the header is not
   * supported
   * @throws FetchError<422, types.ErrorOutput> Unprocessable Content. The request was well-formed but was unable to be followed due to
   * semantic errors.
   * @throws FetchError<429, types.ErrorOutput> Rate limit reached.
   * @throws FetchError<500, types.ErrorOutput> An internal error occurred.
   * @throws FetchError<503, types.ErrorOutput> The server is currently unable to handle your request
   */
  api_create_order(body: types.OrderInput): Promise<FetchResponse<201, types.OrderOutput>> {
    return this.core.fetch('/v1/orders', 'post', body);
  }

  /**
   * Capture a specific amount on an order that has an active reservation (Status 95).
   * Reservations are commonly used for CreditCard and Buy now, Pay later payments. With this
   * API, you can capture a specific amount from the order while the reservation remains
   * active.
   *
   * @summary Order:CaptureAmount
   * @throws FetchError<400, types.ErrorOutput> Bad request, see response body for more information
   * @throws FetchError<401, types.ErrorOutput> Unauthorized. Supplied credentials are invalid
   * @throws FetchError<403, types.ErrorOutput> Forbidden. Supplied credentials have no rights
   * @throws FetchError<404, types.ErrorOutput> Resource not found
   * @throws FetchError<405, types.ErrorOutput> Used HTTP method is not allowed
   * @throws FetchError<406, types.ErrorOutput> Not acceptable. The supplied content type in the accept parameter in the header is not
   * supported
   * @throws FetchError<422, types.ErrorOutput> Unprocessable Content. The request was well-formed but was unable to be followed due to
   * semantic errors.
   * @throws FetchError<429, types.ErrorOutput> Rate limit reached.
   * @throws FetchError<500, types.ErrorOutput> An internal error occurred.
   * @throws FetchError<503, types.ErrorOutput> The server is currently unable to handle your request
   */
  api_capture_amount(body: types.OrderCaptureAmountInputDto, metadata: types.ApiCaptureAmountMetadataParam): Promise<FetchResponse<200, types.OrderOutput>> {
    return this.core.fetch('/v1/orders/{id}/capture/amount', 'patch', body, metadata);
  }

  /**
   * Capture an order that has an active reservation (Status 95). Reservations are commonly
   * used for CreditCard and Buy now, Pay later payments. By using this API, the entire order
   * will be captured.
   *
   * @summary Order:CaptureProducts
   * @throws FetchError<400, types.ErrorOutput> Bad request, see response body for more information
   * @throws FetchError<401, types.ErrorOutput> Unauthorized. Supplied credentials are invalid
   * @throws FetchError<403, types.ErrorOutput> Forbidden. Supplied credentials have no rights
   * @throws FetchError<404, types.ErrorOutput> Resource not found
   * @throws FetchError<405, types.ErrorOutput> Used HTTP method is not allowed
   * @throws FetchError<406, types.ErrorOutput> Not acceptable. The supplied content type in the accept parameter in the header is not
   * supported
   * @throws FetchError<422, types.ErrorOutput> Unprocessable Content. The request was well-formed but was unable to be followed due to
   * semantic errors.
   * @throws FetchError<429, types.ErrorOutput> Rate limit reached.
   * @throws FetchError<500, types.ErrorOutput> An internal error occurred.
   * @throws FetchError<503, types.ErrorOutput> The server is currently unable to handle your request
   */
  api_capture_products(body: types.OrderCaptureProductsInputDto, metadata: types.ApiCaptureProductsMetadataParam): Promise<FetchResponse<200, types.OrderOutput>> {
    return this.core.fetch('/v1/orders/{id}/capture/products', 'patch', body, metadata);
  }

  /**
   * Retrieve the current status of an order along with its corresponding payment attempts.
   *
   * @summary Order:Status
   * @throws FetchError<400, types.ErrorOutput> Bad request, see response body for more information
   * @throws FetchError<401, types.ErrorOutput> Unauthorized. Supplied credentials are invalid
   * @throws FetchError<403, types.ErrorOutput> Forbidden. Supplied credentials have no rights
   * @throws FetchError<404, types.ErrorOutput> Resource not found
   * @throws FetchError<405, types.ErrorOutput> Used HTTP method is not allowed
   * @throws FetchError<410, types.ErrorOutput> Indicates that this resource is no longer available for use
   * @throws FetchError<422, types.ErrorOutput> Unprocessable Content. The request was well-formed but was unable to be followed due to
   * semantic errors.
   * @throws FetchError<429, types.ErrorOutput> Rate limit reached.
   * @throws FetchError<500, types.ErrorOutput> An internal error occurred.
   * @throws FetchError<503, types.ErrorOutput> The server is currently unable to handle your request
   */
  api_get_status(metadata: types.ApiGetStatusMetadataParam): Promise<FetchResponse<200, types.OrderOutput>> {
    return this.core.fetch('/v1/orders/{id}/status', 'get', metadata);
  }

  /**
   * Approve an order that is flagged for a risk check by the Verify module, continuing the
   * regular order flow.
   *
   * @summary Order:Approve
   * @throws FetchError<400, types.ErrorOutput> Bad request, see response body for more information
   * @throws FetchError<401, types.ErrorOutput> Unauthorized. Supplied credentials are invalid
   * @throws FetchError<403, types.ErrorOutput> Forbidden. Supplied credentials have no rights
   * @throws FetchError<404, types.ErrorOutput> Resource not found
   * @throws FetchError<405, types.ErrorOutput> Used HTTP method is not allowed
   * @throws FetchError<406, types.ErrorOutput> Not acceptable. The supplied content type in the accept parameter in the header is not
   * supported
   * @throws FetchError<422, types.ErrorOutput> Unprocessable Content. The request was well-formed but was unable to be followed due to
   * semantic errors.
   * @throws FetchError<429, types.ErrorOutput> Rate limit reached.
   * @throws FetchError<500, types.ErrorOutput> An internal error occurred.
   * @throws FetchError<503, types.ErrorOutput> The server is currently unable to handle your request
   */
  api_approve_order(metadata: types.ApiApproveOrderMetadataParam): Promise<FetchResponse<200, types.OrderOutput>> {
    return this.core.fetch('/v1/orders/{id}/approve', 'patch', metadata);
  }

  /**
   * Decline an order that is flagged for a risk check by the Verify module, refunding all
   * payments made on this order.
   *
   * @summary Order:Decline
   * @throws FetchError<400, types.ErrorOutput> Bad request, see response body for more information
   * @throws FetchError<401, types.ErrorOutput> Unauthorized. Supplied credentials are invalid
   * @throws FetchError<403, types.ErrorOutput> Forbidden. Supplied credentials have no rights
   * @throws FetchError<404, types.ErrorOutput> Resource not found
   * @throws FetchError<405, types.ErrorOutput> Used HTTP method is not allowed
   * @throws FetchError<406, types.ErrorOutput> Not acceptable. The supplied content type in the accept parameter in the header is not
   * supported
   * @throws FetchError<422, types.ErrorOutput> Unprocessable Content. The request was well-formed but was unable to be followed due to
   * semantic errors.
   * @throws FetchError<429, types.ErrorOutput> Rate limit reached.
   * @throws FetchError<500, types.ErrorOutput> An internal error occurred.
   * @throws FetchError<503, types.ErrorOutput> The server is currently unable to handle your request
   */
  api_decline_order(metadata: types.ApiDeclineOrderMetadataParam): Promise<FetchResponse<200, types.OrderOutput>> {
    return this.core.fetch('/v1/orders/{id}/decline', 'patch', metadata);
  }

  /**
   * Capture an order that has an active reservation (Status 95). Reservations are commonly
   * used for CreditCard and Buy now, Pay later payments. By using this API, the entire order
   * will be captured.
   *
   * @summary Order:Capture
   * @throws FetchError<400, types.ErrorOutput> Bad request, see response body for more information
   * @throws FetchError<401, types.ErrorOutput> Unauthorized. Supplied credentials are invalid
   * @throws FetchError<403, types.ErrorOutput> Forbidden. Supplied credentials have no rights
   * @throws FetchError<404, types.ErrorOutput> Resource not found
   * @throws FetchError<405, types.ErrorOutput> Used HTTP method is not allowed
   * @throws FetchError<406, types.ErrorOutput> Not acceptable. The supplied content type in the accept parameter in the header is not
   * supported
   * @throws FetchError<422, types.ErrorOutput> Unprocessable Content. The request was well-formed but was unable to be followed due to
   * semantic errors.
   * @throws FetchError<429, types.ErrorOutput> Rate limit reached.
   * @throws FetchError<500, types.ErrorOutput> An internal error occurred.
   * @throws FetchError<503, types.ErrorOutput> The server is currently unable to handle your request
   */
  api_capture_order(metadata: types.ApiCaptureOrderMetadataParam): Promise<FetchResponse<200, types.OrderOutput>> {
    return this.core.fetch('/v1/orders/{id}/capture', 'patch', metadata);
  }

  /**
   * Cancel an order with an active reservation (Status 95), voiding all payments made for
   * that order as well.
   *
   * @summary Order:Void
   * @throws FetchError<400, types.ErrorOutput> Bad request, see response body for more information
   * @throws FetchError<401, types.ErrorOutput> Unauthorized. Supplied credentials are invalid
   * @throws FetchError<403, types.ErrorOutput> Forbidden. Supplied credentials have no rights
   * @throws FetchError<404, types.ErrorOutput> Resource not found
   * @throws FetchError<405, types.ErrorOutput> Used HTTP method is not allowed
   * @throws FetchError<406, types.ErrorOutput> Not acceptable. The supplied content type in the accept parameter in the header is not
   * supported
   * @throws FetchError<422, types.ErrorOutput> Unprocessable Content. The request was well-formed but was unable to be followed due to
   * semantic errors.
   * @throws FetchError<429, types.ErrorOutput> Rate limit reached.
   * @throws FetchError<500, types.ErrorOutput> An internal error occurred.
   * @throws FetchError<503, types.ErrorOutput> The server is currently unable to handle your request
   */
  api_void_order(metadata: types.ApiVoidOrderMetadataParam): Promise<FetchResponse<200, types.OrderOutput>> {
    return this.core.fetch('/v1/orders/{id}/void', 'patch', metadata);
  }

  /**
   * Abort an order, halting the regular order flow and voiding any payment attempts made to
   * fulfill this order.
   *
   * @summary Order:Abort
   * @throws FetchError<400, types.ErrorOutput> Bad request, see response body for more information
   * @throws FetchError<401, types.ErrorOutput> Unauthorized. Supplied credentials are invalid
   * @throws FetchError<403, types.ErrorOutput> Forbidden. Supplied credentials have no rights
   * @throws FetchError<404, types.ErrorOutput> Resource not found
   * @throws FetchError<405, types.ErrorOutput> Used HTTP method is not allowed
   * @throws FetchError<406, types.ErrorOutput> Not acceptable. The supplied content type in the accept parameter in the header is not
   * supported
   * @throws FetchError<422, types.ErrorOutput> Unprocessable Content. The request was well-formed but was unable to be followed due to
   * semantic errors.
   * @throws FetchError<429, types.ErrorOutput> Rate limit reached.
   * @throws FetchError<500, types.ErrorOutput> An internal error occurred.
   * @throws FetchError<503, types.ErrorOutput> The server is currently unable to handle your request
   */
  api_abort_order(metadata: types.ApiAbortOrderMetadataParam): Promise<FetchResponse<200, types.OrderOutput>> {
    return this.core.fetch('/v1/orders/{id}/abort', 'patch', metadata);
  }
}
