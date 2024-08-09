import type * as types from './types.js';
import type { ConfigOptions, FetchResponse } from '@readme/api-core/types';
import APICore from '@readme/api-core';
import definition from '../openapi.json';

export default class SDK {
  core: APICore;

  constructor() {
    this.core = new APICore(definition, 'paynl-connect/v2.0 (api/7.0.0-beta.8)');
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
   * Use your username and password from my.pay.nl to exchange your credentials for a bearer
   * token. You will receive an access token and refresh token. Use the access token to make
   * API calls and use the refresh token to refresh both of the tokens (See
   * Authenticate:Refresh). The access token is valid for 1 hour, the refresh token is valid
   * for 2 hours
   *
   * @summary Authenticate
   */
  postAuthenticate(): Promise<FetchResponse<200, types.PostAuthenticateResponse200>> {
    return this.core.fetch('/authenticate', 'post');
  }

  /**
   * Get the details of a specific authentication token. Note you need to have access to the
   * merchant if the authentication token is not available under your own merchant
   * registration
   *
   * @summary AuthenticationTokens:Get
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   * @throws FetchError<422, types.Error> Unprocessable entity, see response body for more information
   */
  getAuthenticationtokensAuthenticationtokencode(metadata: types.GetAuthenticationtokensAuthenticationtokencodeMetadataParam): Promise<FetchResponse<200, types.AuthenticationToken>> {
    return this.core.fetch('/authenticationtokens/{authenticationTokenCode}', 'get', metadata);
  }

  /**
   * Deletes an authentication token. Note you need to have access to the merchant if the
   * authentication token is not available under your own merchant registration
   *
   * @summary AuthenticationTokens:Delete
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   */
  deleteAuthenticationtokensAuthenticationtokencode(metadata: types.DeleteAuthenticationtokensAuthenticationtokencodeMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/authenticationtokens/{authenticationTokenCode}', 'delete', metadata);
  }

  /**
   * Get all authentication tokens. If you do not supply a merchantCode we return the
   * authentication tokens that are available under your own merchant registration. If you
   * supply a merchantCode you need to have access to that merchant
   *
   * @summary 	AuthenticationTokens:Browse
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   * @throws FetchError<422, types.Error> Unprocessable entity, see response body for more information
   */
  getAuthenticationtokens(metadata?: types.GetAuthenticationtokensMetadataParam): Promise<FetchResponse<200, types.GetAuthenticationtokensResponse200>> {
    return this.core.fetch('/authenticationtokens', 'get', metadata);
  }

  /**
   * Creates a new authentication token under a merchant. You can also specify which
   * authorisation groups needs to be linked to the token. You can also supply a
   * merchantCode. If a merchantCode is supplied then you need to have access to that
   * merchant. You need to authenticate with an AT-code as username and a token as password
   *
   * @summary AuthenticationTokens:Create
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   * @throws FetchError<422, types.Error> Unprocessable entity, see response body for more information
   */
  postAuthenticationtokens(body: types.PostAuthenticationtokensBodyParam): Promise<FetchResponse<201, types.AuthenticationToken>> {
    return this.core.fetch('/authenticationtokens', 'post', body);
  }

  /**
   * Undelete an authentication token that was recently deleted. This can only be done within
   * a 15 minute time window
   *
   * @summary AuthenticationTokens:Undelete
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   * @throws FetchError<422, types.Error> Unprocessable entity, see response body for more information
   */
  postAuthenticationtokensAuthenticationtokencodeUndelete(metadata: types.PostAuthenticationtokensAuthenticationtokencodeUndeleteMetadataParam): Promise<FetchResponse<201, types.AuthenticationToken>> {
    return this.core.fetch('/authenticationtokens/{authenticationTokenCode}/undelete', 'post', metadata);
  }

  /**
   * Get a list of all (public) authorisation groups. If your account has rights to create
   * own groups we will also return the groups you have defined yourself
   *
   * @summary AuthorisationGroups
   */
  getAuthorisationgroups(): Promise<FetchResponse<200, types.GetAuthorisationgroupsResponse200>> {
    return this.core.fetch('/authorisationgroups', 'get');
  }

  /**
   * Gives an overview of the active balance of a merchant, including information about the
   * next and the previous clearing. You can supply a merchant code. If you are a partner and
   * you have access to that merchant code we will provide you the data. If no merchant code
   * is provided your own balance information returned
   *
   * @summary Balance:Dashboard
   */
  getBalance(metadata?: types.GetBalanceMetadataParam): Promise<FetchResponse<200, types.Balance>> {
    return this.core.fetch('/balance', 'get', metadata);
  }

  /**
   * A Pay. invoice contains multiple billing lines which are grouped. This API returns all
   * groups that we have available, including a description of the billing lines that can
   * appear in that group
   *
   * @summary BillingLineTypes
   */
  getBillinglinetypes(): Promise<FetchResponse<200, types.GetBillinglinetypesResponse200>> {
    return this.core.fetch('/billinglinetypes', 'get');
  }

  /**
   * A Pay. invoice contains multiple invoice lines, each invoice line can have his own unit
   * (e.g. per quantity or per percentage). This API returns all units that are in use by
   * Pay.
   *
   * @summary BillingUnitTypes
   */
  getBillingunittypes(): Promise<FetchResponse<200, types.GetBillingunittypesResponse200>> {
    return this.core.fetch('/billingunittypes', 'get');
  }

  /**
   * When all documents for a merchant are delivered to Pay and the merchant data is ready to
   * be reviewed by our boarding department you can call this endpoint to notify our boarding
   * department to review your merchant. Note you need to have access to the merchant to call
   * this endpoint
   *
   * @summary Merchant:ToReview
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   * @throws FetchError<422, types.Error> Unprocessable entity, see response body for more information
   */
  patchBoardingMerchantcodeReady(metadata: types.PatchBoardingMerchantcodeReadyMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/boarding/{merchantCode}/ready', 'patch', metadata);
  }

  /**
   * Get all categories that can be used to onboard new sales locations or 
   * check the Payment methods that are available for a specific category.
   *
   * @summary Categories
   */
  getCategories(): Promise<FetchResponse<200, types.GetCategoriesResponse200>> {
    return this.core.fetch('/categories', 'get');
  }

  /**
   * Get the details of a specific clearing account. Note you need to have access to the
   * merchant if the clearing account is not available under your own merchant registration
   *
   * @summary ClearingAccounts:Get
   */
  getClearingaccountsClearingaccountcode(metadata: types.GetClearingaccountsClearingaccountcodeMetadataParam): Promise<FetchResponse<200, types.MerchantBankAccount>> {
    return this.core.fetch('/clearingaccounts/{clearingAccountCode}', 'get', metadata);
  }

  /**
   * Deletes a clearing account. Note you need to have access to the merchant if the clearing
   * account is not available under your own merchant registration
   *
   * @summary ClearingAccounts:Delete
   */
  deleteClearingaccountsClearingaccountcode(metadata: types.DeleteClearingaccountsClearingaccountcodeMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/clearingaccounts/{clearingAccountCode}', 'delete', metadata);
  }

  /**
   * Updates a clearing account under a merchant. You can only update the clearing account if
   * the account is not yet approved by our boarding department. You can also update a
   * clearing account for your merchant, but you need to have access to that merchant.
   *
   * @summary ClearingAccounts:Update
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   * @throws FetchError<422, types.Error> Unprocessable entity, see response body for more information
   */
  patchClearingaccountsClearingaccountcode(body: types.PatchClearingaccountsClearingaccountcodeBodyParam, metadata: types.PatchClearingaccountsClearingaccountcodeMetadataParam): Promise<FetchResponse<200, types.MerchantBankAccount>>;
  patchClearingaccountsClearingaccountcode(metadata: types.PatchClearingaccountsClearingaccountcodeMetadataParam): Promise<FetchResponse<200, types.MerchantBankAccount>>;
  patchClearingaccountsClearingaccountcode(body?: types.PatchClearingaccountsClearingaccountcodeBodyParam | types.PatchClearingaccountsClearingaccountcodeMetadataParam, metadata?: types.PatchClearingaccountsClearingaccountcodeMetadataParam): Promise<FetchResponse<200, types.MerchantBankAccount>> {
    return this.core.fetch('/clearingaccounts/{clearingAccountCode}', 'patch', body, metadata);
  }

  /**
   * Get all clearing accounts. If you do not supply a merchantCode we return the clearing
   * accounts that are available under your own merchant registration. If you supply a
   * merchantCode you need to have access to that merchant
   *
   * @summary ClearingAccounts:Browse
   */
  getClearingaccounts(metadata?: types.GetClearingaccountsMetadataParam): Promise<FetchResponse<200, types.GetClearingaccountsResponse200>> {
    return this.core.fetch('/clearingaccounts', 'get', metadata);
  }

  /**
   * Creates a new clearing account for a merchant. The clearing accounts needs to be a
   * business clearing account, private accounts are not accepted. You can also supply a
   * merchantCode. If a merchantCode is supplied then you need to have access to that
   * merchant
   *
   * @summary ClearingAccounts:Create
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   * @throws FetchError<422, types.Error> Unprocessable entity, see response body for more information
   */
  postClearingaccounts(body?: types.PostClearingaccountsBodyParam): Promise<FetchResponse<201, types.MerchantBankAccount>> {
    return this.core.fetch('/clearingaccounts', 'post', body);
  }

  /**
   * Undelete a clearing account that was recently deleted. This can only be done within a 15
   * minute time window.
   *
   * @summary ClearingAccounts:Undelete
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   * @throws FetchError<422, types.Error> Unprocessable entity, see response body for more information
   */
  postClearingaccountsClearingaccountcodeUndelete(metadata: types.PostClearingaccountsClearingaccountcodeUndeleteMetadataParam): Promise<FetchResponse<201, types.MerchantBankAccount>> {
    return this.core.fetch('/clearingaccounts/{clearingAccountCode}/undelete', 'post', metadata);
  }

  /**
   * A Pay. clearing contains multiple clearing lines. This API returns all clearing lines
   * for a specified period. If you are a partner and you have rights to your merchants you
   * can retrieve the clearing lines also for your merchants
   *
   * @summary Clearing:Lines
   */
  getClearinglines(metadata?: types.GetClearinglinesMetadataParam): Promise<FetchResponse<200, types.GetClearinglinesResponse200>> {
    return this.core.fetch('/clearinglines', 'get', metadata);
  }

  /**
   * A Pay. clearing contains multiple clearing lines which are grouped. This API returns all
   * groups that we have available, including a description of the clearing lines that can
   * appear in that group
   *
   * @summary ClearingLineTypes
   */
  getClearinglinetypes(): Promise<FetchResponse<200, types.GetClearinglinetypesResponse200>> {
    return this.core.fetch('/clearinglinetypes', 'get');
  }

  /**
   * Get all company types
   *
   * @summary CompanyTypes
   */
  getCompanytypes(): Promise<FetchResponse<200, types.GetCompanytypesResponse200>> {
    return this.core.fetch('/companytypes', 'get');
  }

  /**
   * Get the details of a specific contact method. Note you need to have access to the
   * merchant if the contact method is not available under your own merchant registration
   *
   * @summary ContactMethods:Get
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   */
  getContactmethodsContactmethodcode(metadata: types.GetContactmethodsContactmethodcodeMetadataParam): Promise<FetchResponse<200, types.MerchantContactMethod>> {
    return this.core.fetch('/contactmethods/{contactMethodCode}', 'get', metadata);
  }

  /**
   * Deletes a contact method. Note you need to have access to the merchant if the contact
   * method is not available under your own merchant registration
   *
   * @summary ContactMethods:Delete
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   */
  deleteContactmethodsContactmethodcode(metadata: types.DeleteContactmethodsContactmethodcodeMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/contactmethods/{contactMethodCode}', 'delete', metadata);
  }

  /**
   * Updates a contact method for a merchant. All fields for the request are optional. Note
   * you need to have access to the merchant if the contact method that you want to update is
   * not available under your own merchant registration
   *
   * @summary ContactMethods:Update
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   * @throws FetchError<422, types.Error> Unprocessable Entity, see response body for more information
   */
  patchContactmethodsContactmethodcode(body: types.PatchContactmethodsContactmethodcodeBodyParam, metadata: types.PatchContactmethodsContactmethodcodeMetadataParam): Promise<FetchResponse<200, types.MerchantContactMethod>>;
  patchContactmethodsContactmethodcode(metadata: types.PatchContactmethodsContactmethodcodeMetadataParam): Promise<FetchResponse<200, types.MerchantContactMethod>>;
  patchContactmethodsContactmethodcode(body?: types.PatchContactmethodsContactmethodcodeBodyParam | types.PatchContactmethodsContactmethodcodeMetadataParam, metadata?: types.PatchContactmethodsContactmethodcodeMetadataParam): Promise<FetchResponse<200, types.MerchantContactMethod>> {
    return this.core.fetch('/contactmethods/{contactMethodCode}', 'patch', body, metadata);
  }

  /**
   * Get all contact methods. If you do not supply a merchantCode we return the contact
   * methods that are available under your own merchant registration. If you supply a
   * merchantCode you need to have access to that merchant
   *
   * @summary ContactMethods:Browse
   */
  getContactmethods(metadata?: types.GetContactmethodsMetadataParam): Promise<FetchResponse<200, types.GetContactmethodsResponse200>> {
    return this.core.fetch('/contactmethods', 'get', metadata);
  }

  /**
   * Creates a new contact method for a merchant. You can indicate per contact method if the
   * contact details are public. If they are public they can be used in communication with
   * end users. You can also supply a merchantCode. If a merchantCode is supplied then you
   * need to have access to that merchant
   *
   * @summary ContactMethods:Create
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   * @throws FetchError<422, types.Error> Unprocessable Entity, see response body for more information
   */
  postContactmethods(body?: types.PostContactmethodsBodyParam): Promise<FetchResponse<201, types.MerchantContactMethod>> {
    return this.core.fetch('/contactmethods', 'post', body);
  }

  /**
   * Undelete a contact method that was recently deleted. This can only be done within a 15
   * minute time window
   *
   * @summary ContactMethods:Undelete
   * @throws FetchError<422, types.Error> Unprocessable entity, see response body for more information
   */
  postContactmethodsContactmethodcodeUndelete(metadata: types.PostContactmethodsContactmethodcodeUndeleteMetadataParam): Promise<FetchResponse<201, types.ContactMethod>> {
    return this.core.fetch('/contactmethods/{contactMethodCode}/undelete', 'post', metadata);
  }

  /**
   * Get a list of countries
   *
   * @summary Countries
   */
  getCountries(): Promise<FetchResponse<200, types.GetCountriesResponse200>> {
    return this.core.fetch('/countries', 'get');
  }

  /**
   * Get all currencies.
   *
   * @summary Currencies
   */
  getCurrencies(): Promise<FetchResponse<200, types.GetCurrenciesResponse200>> {
    return this.core.fetch('/currencies', 'get');
  }

  /**
   * Create a recurring debit.
   *
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   * @throws FetchError<422, types.Error> Unprocessable entity, see response body for more information
   */
  postDirectdebitsIncassoorderidDebits(body: types.PostDirectdebitsIncassoorderidDebitsBodyParam, metadata: types.PostDirectdebitsIncassoorderidDebitsMetadataParam): Promise<FetchResponse<200, types.PostDirectdebitsIncassoorderidDebitsResponse200>> {
    return this.core.fetch('/directdebits/{incassoOrderId}/debits', 'post', body, metadata);
  }

  /**
   * Fetch a directdebit order.
   *
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   * @throws FetchError<422, types.Error> Unprocessable entity, see response body for more information
   */
  getDirectdebitsIncassoorderid(metadata: types.GetDirectdebitsIncassoorderidMetadataParam): Promise<FetchResponse<200, types.GetDirectdebitsIncassoorderidResponse200>> {
    return this.core.fetch('/directdebits/{incassoOrderId}', 'get', metadata);
  }

  /**
   * Delete a directdebit order.
   *
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   * @throws FetchError<422, types.Error> Unprocessable entity, see response body for more information
   */
  deleteDirectdebitsIncassoorderid(metadata: types.DeleteDirectdebitsIncassoorderidMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/directdebits/{incassoOrderId}', 'delete', metadata);
  }

  /**
   * Update a directdebit order.
   *
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   * @throws FetchError<422, types.Error> Unprocessable entity, see response body for more information
   */
  patchDirectdebitsIncassoorderid(body: types.PatchDirectdebitsIncassoorderidBodyParam, metadata: types.PatchDirectdebitsIncassoorderidMetadataParam): Promise<FetchResponse<200, types.PatchDirectdebitsIncassoorderidResponse200>> {
    return this.core.fetch('/directdebits/{incassoOrderId}', 'patch', body, metadata);
  }

  /**
   * Create a new directdebit order. After creation the newly created order needs to be set
   * to to allow recurring in the admin panel.
   *
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   * @throws FetchError<422, types.Error> Unprocessable entity, see response body for more information
   */
  postDirectdebits(body: types.PostDirectdebitsBodyParam): Promise<FetchResponse<200, types.PostDirectdebitsResponse200>> {
    return this.core.fetch('/directdebits', 'post', body);
  }

  /**
   * Upload a (compliance) document as base64. Uploading is done based on a document code,
   * the content of the document needs to be encoded to base64. You can also specify the
   * filename.
   *
   * You need to authenticate with an AT code (as username) and the corresponding token (as
   * password) or you can authenticate with an AL code (as username) and the corresponding
   * secret (as password)
   *
   * @summary Documents:Add
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   * @throws FetchError<422, types.Error> Unprocessable Entity, see response body for more information
   */
  postDocuments(body: types.PostDocumentsBodyParam): Promise<FetchResponse<201, types.Document>> {
    return this.core.fetch('/documents', 'post', body);
  }

  /**
   * Attach a veriff session id to a onboarding document.
   *
   * @summary Documents:AddVeriffSession
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   * @throws FetchError<422, types.Error> Unprocessable entity, see response body for more information
   */
  postDocumentsDocumentidVeriff(body: types.PostDocumentsDocumentidVeriffBodyParam, metadata: types.PostDocumentsDocumentidVeriffMetadataParam): Promise<FetchResponse<201, types.PostDocumentsDocumentidVeriffResponse201>> {
    return this.core.fetch('/documents/{documentId}/veriff', 'post', body, metadata);
  }

  /**
   * Get all integrations.
   *
   * @summary Integrations
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   */
  getIntegrations(): Promise<FetchResponse<200, types.GetIntegrationsResponse200>> {
    return this.core.fetch('/integrations', 'get');
  }

  /**
   * A Pay. invoice contains multiple invoice lines. This API returns all invoice lines for a
   * specified period. If you are a partner and you have rights to your merchants you can
   * retrieve the invoice lines also for your merchants
   *
   * @summary Invoice:Lines
   */
  getInvoicelines(metadata?: types.GetInvoicelinesMetadataParam): Promise<FetchResponse<200, types.GetInvoicelinesResponse200>> {
    return this.core.fetch('/invoicelines', 'get', metadata);
  }

  /**
   * Get all IP addresses that are in use by Pay.
   *
   * @summary IpAddresses
   */
  getIpaddresses(): Promise<FetchResponse<200, types.GetIpaddressesResponse200>> {
    return this.core.fetch('/ipaddresses', 'get');
  }

  /**
   * Return status 200 if the ip provided is an ip owned by Pay, otherwise it will return a
   * 404.
   *
   * @summary IsPay
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   */
  getIspayIp(metadata: types.GetIspayIpMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/ispay/ip', 'get', metadata);
  }

  /**
   * Get all issuers.
   *
   * @summary Issuers
   */
  getIssuers(): Promise<FetchResponse<200, types.GetIssuersResponse200>> {
    return this.core.fetch('/issuers', 'get');
  }

  /**
   * Get all languages
   *
   * @summary Languages
   */
  getLanguages(): Promise<FetchResponse<200, types.GetLanguagesResponse200>> {
    return this.core.fetch('/languages', 'get');
  }

  /**
   * Get a specific license linked to a merchant.
   *
   * @summary Licenses:Get
   */
  getLicensesLicensecode(metadata: types.GetLicensesLicensecodeMetadataParam): Promise<FetchResponse<200, types.PersonLicense>> {
    return this.core.fetch('/licenses/{licenseCode}', 'get', metadata);
  }

  /**
   * Remove a license from a merchant. You can unsuspend within a 15 minute time window.
   *
   * @summary Licenses:Delete
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   */
  deleteLicensesLicensecode(metadata: types.DeleteLicensesLicensecodeMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/licenses/{licenseCode}', 'delete', metadata);
  }

  /**
   * Updates a license under a merchant. You can indicate if the license is authorized to
   * sign or an UBO and you can indicate which rights the account should have. You need to
   * have access to that merchant to update the license. You need to authenticate with an
   * AT-code as username and a token as password.
   *
   * @summary Licenses:Update
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   */
  patchLicensesLicensecode(body: types.PatchLicensesLicensecodeBodyParam, metadata: types.PatchLicensesLicensecodeMetadataParam): Promise<FetchResponse<200, types.PatchLicensesLicensecodeResponse200>>;
  patchLicensesLicensecode(metadata: types.PatchLicensesLicensecodeMetadataParam): Promise<FetchResponse<200, types.PatchLicensesLicensecodeResponse200>>;
  patchLicensesLicensecode(body?: types.PatchLicensesLicensecodeBodyParam | types.PatchLicensesLicensecodeMetadataParam, metadata?: types.PatchLicensesLicensecodeMetadataParam): Promise<FetchResponse<200, types.PatchLicensesLicensecodeResponse200>> {
    return this.core.fetch('/licenses/{licenseCode}', 'patch', body, metadata);
  }

  /**
   * Get all licenses linked to a merchant.
   *
   * @summary Licenses:Browse
   */
  getLicenses(metadata: types.GetLicensesMetadataParam): Promise<FetchResponse<200, types.GetLicensesResponse200>> {
    return this.core.fetch('/licenses', 'get', metadata);
  }

  /**
   * Create a new license and a Pay account under a merchant. You can indicate if the license
   * is authorized to sign or an UBO and you can indicate which rights the account should
   * have. You can also supply a merchant. If a merchant is supplied then you need to have
   * access to that merchant. You need to authenticate with an AT-code as username and a
   * token as password.
   *
   * @summary Licenses:Create
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   * @throws FetchError<422, types.Error> Unprocessable entity, see response body for more information
   */
  postLicenses(body: types.PostLicensesBodyParam): Promise<FetchResponse<201, types.PostLicensesResponse201>> {
    return this.core.fetch('/licenses', 'post', body);
  }

  /**
   * Unsuspend a license that was recently deleted. This can only be done within a 15 minute
   * time window.
   *
   * @summary Licenses:Undelete
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   * @throws FetchError<422, types.Error> Unprocessable entity, see response body for more information
   */
  postLicensesLicensecodeUndelete(metadata: types.PostLicensesLicensecodeUndeleteMetadataParam): Promise<FetchResponse<201, types.PersonLicense>> {
    return this.core.fetch('/licenses/{licenseCode}/undelete', 'post', metadata);
  }

  /**
   * Retrieve a handshake to redirect a user to the Pay platform so that a user can access
   * the Pay platform without entering login credentials. Note that the user needs to have
   * the correct rights to use this feature. You need to authenticate this API with the
   * AT-code as username and the token as password
   *
   * @summary Authenticate:Login
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   * @throws FetchError<422, types.Error> Unprocessable entity, see response body for more information
   */
  postLoginAuthenticate(body: types.PostLoginAuthenticateBodyParam): Promise<FetchResponse<201, types.PostLoginAuthenticateResponse201>> {
    return this.core.fetch('/login/authenticate', 'post', body);
  }

  /**
   * Get all MCCs.
   *
   * @summary Mcc
   */
  getMcc(): Promise<FetchResponse<200, types.GetMccResponse200>> {
    return this.core.fetch('/mcc', 'get');
  }

  /**
   * Get a list of all merchants that are changed. The API uses pagination. The number of
   * merchants returned for one page equals the limit that you can supply as query parameter.
   * If you do not supply a limit, the limit will be defaulted to 100. You can retrieve the
   * next page by supplying a page number as query parameter
   *
   * @summary Merchants:Changelist
   * @throws FetchError<422, types.Error> Unprocessable Entity, see response body for more information
   */
  getMerchantsChangelist(metadata?: types.GetMerchantsChangelistMetadataParam): Promise<FetchResponse<200, types.GetMerchantsChangelistResponse200>> {
    return this.core.fetch('/merchants/changelist', 'get', metadata);
  }

  /**
   * Get the details of a specific merchant
   *
   * @summary Merchants:Get
   */
  getMerchantsMerchantcode(metadata: types.GetMerchantsMerchantcodeMetadataParam): Promise<FetchResponse<200, types.GetMerchantsMerchantcodeResponse200>> {
    return this.core.fetch('/merchants/{merchantCode}', 'get', metadata);
  }

  /**
   * Delete a merchant. The merchant is not able to process payments anymore and cannot login
   * to Pay anymore
   *
   * @summary Merchant:Delete
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   */
  deleteMerchantsMerchantcode(metadata: types.DeleteMerchantsMerchantcodeMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/merchants/{merchantCode}', 'delete', metadata);
  }

  /**
   * Update the merchant data. If you want to update the relating objects (e.g.
   * authentication tokens or accounts etc) you can use the specific endpoints for that. You
   * need to have access to the merchantCode that you supply or it needs to be your own
   * merchantCode. You need to authenticate with an AT-code as username and the corresponding
   * token as password.
   *
   * @summary Merchant:Update
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   * @throws FetchError<422, types.Error> Unprocessable Entity, see response body for more information
   */
  patchMerchantsMerchantcode(body: types.PatchMerchantsMerchantcodeBodyParam, metadata: types.PatchMerchantsMerchantcodeMetadataParam): Promise<FetchResponse<200, types.PatchMerchantsMerchantcodeResponse200>> {
    return this.core.fetch('/merchants/{merchantCode}', 'patch', body, metadata);
  }

  /**
   * Get a list of all merchants
   *
   * @summary Merchants:Browse
   */
  getMerchants(): Promise<FetchResponse<200, types.GetMerchantsResponse200>> {
    return this.core.fetch('/merchants', 'get');
  }

  /**
   * Register a merchant so that the merchant is able to use Pay. to process payments
   *
   * @summary Merchants:Create
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   * @throws FetchError<422, types.Error> Unprocessable Entity, see response body for more information
   */
  postMerchants(body: types.PostMerchantsBodyParam): Promise<FetchResponse<201, types.PostMerchantsResponse201>> {
    return this.core.fetch('/merchants', 'post', body);
  }

  /**
   * Get the details of a specific merchant
   *
   * @summary Merchants:Info
   */
  getMerchantsMerchantcodeInfo(metadata: types.GetMerchantsMerchantcodeInfoMetadataParam): Promise<FetchResponse<200, types.GetMerchantsMerchantcodeInfoResponse200>> {
    return this.core.fetch('/merchants/{merchantCode}/info', 'get', metadata);
  }

  /**
   * Update the package. If a merchantCode is supplied then you need to have access to that
   * merchant. You need to authenticate with an AT-code as username and the corresponding
   * token as password.
   *
   * @summary Merchants:UpdatePackage
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   * @throws FetchError<422, types.Error> Unprocessable entity, see response body for more information
   */
  patchMerchantsMerchantcodePackage(body: types.PatchMerchantsMerchantcodePackageBodyParam, metadata: types.PatchMerchantsMerchantcodePackageMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/merchants/{merchantCode}/package', 'patch', body, metadata);
  }

  /**
   * Undelete a merchant that was recently deleted. This can only be done within a 15 minute
   * time window
   *
   * @summary Merchant:Undelete
   * @throws FetchError<422, types.Error> Unprocessable entity, see response body for more information
   */
  postMerchantsMerchantcodeUndelete(metadata: types.PostMerchantsMerchantcodeUndeleteMetadataParam): Promise<FetchResponse<201, types.PostMerchantsMerchantcodeUndeleteResponse201>> {
    return this.core.fetch('/merchants/{merchantCode}/undelete', 'post', metadata);
  }

  /**
   * Get the packages (sign up profiles) that are configured for the merchant/partner. The CP
   * code or the action code can be used to register a merchant so that the correct settings
   * are configured when the merchant is created.
   *
   * @summary Packages
   */
  getPackages(): Promise<FetchResponse<200, types.GetPackagesResponse200>> {
    return this.core.fetch('/packages', 'get');
  }

  /**
   * Get a list of partners that are registered at Pay. We have various types of partnerships
   * (e.g. Alliance, ISO or Business partner). Per partner we indicate which types of
   * partnerships (can be multiple) are applicable.
   *
   * @summary Partners:Get
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   * @throws FetchError<422, types.Error> Unprocessable entity, see response body for more information
   */
  getPartners(): Promise<FetchResponse<200, types.GetPartnersResponse200>> {
    return this.core.fetch('/partners', 'get');
  }

  /**
   * A payment can be secured by different methods. On a card present transaction (via a
   * terminal) it is know as the Card Verification Method (CVM). 
   * iDEAL transactions can be verified by the desktop, a QR code or by APP2APP payment. 
   * We combine all these options in the Payment Verification Methods
   *
   * @summary PaymentVerification
   */
  getPaymentverificationmethods(): Promise<FetchResponse<200, types.GetPaymentverificationmethodsResponse200>> {
    return this.core.fetch('/paymentverificationmethods', 'get');
  }

  /**
   * Create a new clearing based on the revenue group linked to the provided service.
   *
   * @summary Payout:Clearing
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   * @throws FetchError<422, types.Error> Unprocessable entity, see response body for more information
   */
  postPayoutClearing(body: types.PostPayoutClearingBodyParam): Promise<FetchResponse<201, types.PostPayoutClearingResponse201>> {
    return this.core.fetch('/payout/clearing', 'post', body);
  }

  /**
   * Send a payment to an IBAN number, based on the settings in the ServiceLocation the
   * transaction can be send via SCT (Sepa Credit Transfer) in 24 hours or SICT (Sepa Instant
   * Credit Transfer in 15 seconds)
   *
   * @summary Payout:Create
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   * @throws FetchError<422, types.Error> Unprocessable entity, see response body for more information
   */
  postPayout(body: types.PostPayoutBodyParam): Promise<FetchResponse<201, types.PostPayoutResponse201>> {
    return this.core.fetch('/payout', 'post', body);
  }

  /**
   * Get all product types
   *
   * @summary ProductTypes
   */
  getProducttypes(): Promise<FetchResponse<200, types.GetProducttypesResponse200>> {
    return this.core.fetch('/producttypes', 'get');
  }

  /**
   * Decode a Qr code.
   *
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   * @throws FetchError<422, types.Error> Unprocessable entity, see response body for more information
   */
  postQrDecode(body: types.PostQrDecodeBodyParam): Promise<FetchResponse<200, types.Qr>> {
    return this.core.fetch('/qr/decode', 'post', body);
  }

  /**
   * Encode a Qr code.
   *
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   * @throws FetchError<422, types.Error> Unprocessable entity, see response body for more information
   */
  postQrEncode(body: types.PostQrEncodeBodyParam): Promise<FetchResponse<200, types.Qr>> {
    return this.core.fetch('/qr/encode', 'post', body);
  }

  /**
   * Validate a Qr code.
   *
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   * @throws FetchError<422, types.Error> Unprocessable entity, see response body for more information
   */
  postQrValidate(body: types.PostQrValidateBodyParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/qr/validate', 'post', body);
  }

  /**
   * Calling this endpoint will provide you with a new access and refresh token. You can only
   * use the refresh token once
   *
   * @summary Authenticate:Refresh
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   */
  postRefresh(body: types.PostRefreshBodyParam): Promise<FetchResponse<200, types.PostRefreshResponse200>> {
    return this.core.fetch('/refresh', 'post', body);
  }

  /**
   * Fetch a refund.
   *
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   * @throws FetchError<422, types.Error> Unprocessable entity, see response body for more information
   */
  getRefundsRefundid(metadata: types.GetRefundsRefundidMetadataParam): Promise<FetchResponse<200, types.Refund>> {
    return this.core.fetch('/refunds/{refundId}', 'get', metadata);
  }

  /**
   * Get for a specific terminal linked to your account the contract details, active terminal
   * brands and the actual status of the terminal
   *
   * @summary Terminals:Get
   */
  getTerminalsTerminalcode(metadata: types.GetTerminalsTerminalcodeMetadataParam): Promise<FetchResponse<200, types.GetTerminalsTerminalcodeResponse200>> {
    return this.core.fetch('/terminals/{terminalCode}', 'get', metadata);
  }

  /**
   * Remove a terminal from a merchant. You can undelete within a 15 minute time window
   *
   * @summary Terminals:Delete
   */
  deleteTerminalsTerminalcode(metadata: types.DeleteTerminalsTerminalcodeMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/terminals/{terminalCode}', 'delete', metadata);
  }

  /**
   * Get a list of all terminals linked to your account. Including the contract details, 
   * active terminal brands and the actual status of a terminal
   *
   * @summary Terminals:Browse
   */
  getTerminals(metadata?: types.GetTerminalsMetadataParam): Promise<FetchResponse<200, types.GetTerminalsResponse200>> {
    return this.core.fetch('/terminals', 'get', metadata);
  }

  /**
   * Create a terminal for a service location from a merchant so that the terminal can be
   * used.
   *
   * @summary Terminals:Create
   */
  postTerminals(body: types.PostTerminalsBodyParam): Promise<FetchResponse<200, types.PostTerminalsResponse200>> {
    return this.core.fetch('/terminals', 'post', body);
  }

  /**
   * Undelete a terminal that was rececently deleted. This can only be done witin a 15 minute
   * time window
   *
   * @summary Terminals:Undelete
   */
  postTerminalsTerminalcodeUndelete(metadata: types.PostTerminalsTerminalcodeUndeleteMetadataParam): Promise<FetchResponse<200, types.PostTerminalsTerminalcodeUndeleteResponse200>> {
    return this.core.fetch('/terminals/{terminalCode}/undelete', 'post', metadata);
  }

  /**
   * Get a specific trademark.
   *
   * @summary Trademarks:Get
   */
  getTrademarksTrademarkcode(metadata: types.GetTrademarksTrademarkcodeMetadataParam): Promise<FetchResponse<200, types.Trademark>> {
    return this.core.fetch('/trademarks/{trademarkCode}', 'get', metadata);
  }

  /**
   * A suspended trademark will not be used in any communication. You can unsuspend within a
   * 15 minute time window.
   *
   * @summary Trademarks:Suspend
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   */
  deleteTrademarksTrademarkcode(metadata: types.DeleteTrademarksTrademarkcodeMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/trademarks/{trademarkCode}', 'delete', metadata);
  }

  /**
   * Get all trademarks.
   *
   * @summary Trademarks:Browse
   */
  getTrademarks(): Promise<FetchResponse<200, types.GetTrademarksResponse200>> {
    return this.core.fetch('/trademarks', 'get');
  }

  /**
   * Create a trademark for a merchant. This trademark can be assigned to a sales location.
   * Trademarks will be shown on the statement of the payer.
   *
   * @summary Trademarks:Create
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   * @throws FetchError<422, types.Error> Unprocessable entity, see response body for more information
   */
  postTrademarks(body: types.PostTrademarksBodyParam): Promise<FetchResponse<201, types.Trademark>> {
    return this.core.fetch('/trademarks', 'post', body);
  }

  /**
   * Unsuspend a Trademark that was recently deleted. This can only be done within a 15
   * minute time window.
   *
   * @summary Trademarks:Unsuspend
   * @throws FetchError<422, types.Error> Unprocessable entity, see response body for more information
   */
  postTrademarksTrademarkcodeUnsuspend(metadata: types.PostTrademarksTrademarkcodeUnsuspendMetadataParam): Promise<FetchResponse<201, types.Trademark>> {
    return this.core.fetch('/trademarks/{trademarkCode}/unsuspend', 'post', metadata);
  }

  /**
   * Get the details of a specific turnover group. Note you need to have access to the
   * merchant if the turnover group is not available under your own merchant registration
   *
   * @summary TurnoverGroups:Get
   */
  getTurnovergroupsTurnovergroupcode(metadata: types.GetTurnovergroupsTurnovergroupcodeMetadataParam): Promise<FetchResponse<200, types.TurnoverGroup>> {
    return this.core.fetch('/turnovergroups/{turnoverGroupCode}', 'get', metadata);
  }

  /**
   * Deletes a turnover group. Note you need to have access to the merchant if the turnover
   * group is not available under your own merchant registration
   *
   * @summary TurnoverGroups:Delete
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   */
  deleteTurnovergroupsTurnovergroupcode(metadata: types.DeleteTurnovergroupsTurnovergroupcodeMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/turnovergroups/{turnoverGroupCode}', 'delete', metadata);
  }

  /**
   * Get all turnover groups. If you do not supply a merchantCode we return the turnover
   * groups that are available under your own merchant registration. If you supply a
   * merchantCode you need to have access to that merchant
   *
   * @summary TurnoverGroups:Browse
   */
  getTurnovergroups(metadata?: types.GetTurnovergroupsMetadataParam): Promise<FetchResponse<200, types.GetTurnovergroupsResponse200>> {
    return this.core.fetch('/turnovergroups', 'get', metadata);
  }

  /**
   * If you want to group your revenue to get better insights or you want to use multiple
   * clearing accounts, you can create a turnovergroup. You can link a turnovergroup to a
   * clearingaccount. You can also supply a merchantCode. If a merchantCode is supplied then
   * you need to have access to that merchant
   *
   * @summary TurnoverGroups:Create
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   * @throws FetchError<422, types.Error> Unprocessable entity, see response body for more information
   */
  postTurnovergroups(body: types.PostTurnovergroupsBodyParam): Promise<FetchResponse<201, types.TurnoverGroup>> {
    return this.core.fetch('/turnovergroups', 'post', body);
  }

  /**
   * Undelete a turnover group that was recently deleted. This can only be done within a 15
   * minute time window
   *
   * @summary TurnoverGroups:Undelete
   * @throws FetchError<422, types.Error> Unprocessable entity, see response body for more information
   */
  postTurnovergroupsTurnovergroupcodeUndelete(metadata: types.PostTurnovergroupsTurnovergroupcodeUndeleteMetadataParam): Promise<FetchResponse<201, types.TurnoverGroup>> {
    return this.core.fetch('/turnovergroups/{turnoverGroupCode}/undelete', 'post', metadata);
  }

  /**
   * Activate a card.
   *
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   * @throws FetchError<422, types.Error> Unprocessable entity, see response body for more information
   */
  patchVouchersCardnumberActivate(body: types.PatchVouchersCardnumberActivateBodyParam, metadata: types.PatchVouchersCardnumberActivateMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/vouchers/{cardNumber}/activate', 'patch', body, metadata);
  }

  /**
   * Return balance on card.
   *
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   * @throws FetchError<422, types.Error> Unprocessable entity, see response body for more information
   */
  patchVouchersCardnumberBalance(body: types.PatchVouchersCardnumberBalanceBodyParam, metadata: types.PatchVouchersCardnumberBalanceMetadataParam): Promise<FetchResponse<200, types.PatchVouchersCardnumberBalanceResponse200>> {
    return this.core.fetch('/vouchers/{cardNumber}/balance', 'patch', body, metadata);
  }

  /**
   * Charge a card.
   *
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   * @throws FetchError<422, types.Error> Unprocessable entity, see response body for more information
   */
  patchVouchersCardnumberCharge(body: types.PatchVouchersCardnumberChargeBodyParam, metadata: types.PatchVouchersCardnumberChargeMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/vouchers/{cardNumber}/charge', 'patch', body, metadata);
  }

  /**
   * To capture funds of a giftcard via a point of sale or eCommerce environment you can call
   * this API. The giftcard must be activated on the sales location.
   *
   * @summary Voucher:Create
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   * @throws FetchError<422, types.PostVouchersTransactionResponse422> Unprocessable Entity, see response body for more information
   */
  postVouchersTransaction(body: types.PostVouchersTransactionBodyParam): Promise<FetchResponse<201, types.PostVouchersTransactionResponse201>> {
    return this.core.fetch('/vouchers/transaction', 'post', body);
  }

  /**
   * Get all payment methods groups.
   *
   * @summary PaymentMethodGroups
   */
  getPaymentmethodgroups(): Promise<FetchResponse<200, types.GetPaymentmethodgroupsResponse200>> {
    return this.core.fetch('/paymentmethodgroups', 'get');
  }

  /**
   * Get all payment methods.
   *
   * @summary PaymentMethods
   */
  getPaymentmethods(): Promise<FetchResponse<200, types.GetPaymentmethodsResponse200>> {
    return this.core.fetch('/paymentmethods', 'get');
  }

  /**
   * Get the complete configuration of a service location. you can use this to create your
   * own checkout. You need to authenticate with an AT code (as username) and the
   * corresponding token (as password) or you can authenticate with a SL code (as username)
   * and the corresponding secret (as password).
   *
   * @summary Service:GetConfig
   */
  getServicesConfig(metadata?: types.GetServicesConfigMetadataParam): Promise<FetchResponse<200, types.ServiceConfig>> {
    return this.core.fetch('/services/config', 'get', metadata);
  }

  /**
   * Return a list of all services linked to the current merchant.
   *
   */
  getServices(): Promise<FetchResponse<200, types.GetServicesResponse200>> {
    return this.core.fetch('/services', 'get');
  }

  /**
   * Fetch a service.
   *
   */
  getServicesServiceid(metadata: types.GetServicesServiceidMetadataParam): Promise<FetchResponse<200, types.Service>> {
    return this.core.fetch('/services/{serviceId}', 'get', metadata);
  }

  /**
   * You can create a payment page for invoice payments & donations
   *
   * @summary PaymentLink:Create
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   * @throws FetchError<422, types.Error> Unprocessable entity, see response body for more information
   */
  postServicesServiceidPaymentlink(body: types.PostServicesServiceidPaymentlinkBodyParam, metadata: types.PostServicesServiceidPaymentlinkMetadataParam): Promise<FetchResponse<200, types.PaymentLink>> {
    return this.core.fetch('/services/{serviceId}/paymentlink', 'post', body, metadata);
  }

  /**
   * Returnsa list of all available payment options for a service, including the list of any
   * specific settings this payment option requires.
   *
   */
  getServicesServiceidPaymentmethods(metadata: types.GetServicesServiceidPaymentmethodsMetadataParam): Promise<FetchResponse<200, types.GetServicesServiceidPaymentmethodsResponse200>> {
    return this.core.fetch('/services/{serviceId}/paymentmethods', 'get', metadata);
  }

  /**
   * Transactions that have the status verify (which implies that a transaction needs to be
   * checked) can be approved to collect the funds and to set the payment state to PAID
   * (100). You can use the EX code or the order ID to approve the transaction
   *
   * @summary Verify:Approve
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   * @throws FetchError<422, types.Error> Unprocessable entity, see response body for more information
   */
  patchTransactionsTransactionidApprove(metadata: types.PatchTransactionsTransactionidApproveMetadataParam): Promise<FetchResponse<200, types.TransactionStatus>> {
    return this.core.fetch('/transactions/{transactionId}/approve', 'patch', metadata);
  }

  /**
   * Transactions that have the status pending (which implies that the payment is waiting for
   * an action) can be cancelled. If you cancel a transaction a new processing action cannot
   * be started. A cancel of the transaction will not stop the money flow. The payment state
   * of the transaction will be set to CANCEL (-90). You can use the EX code or the order ID
   * to cancel the transaction
   *
   * @summary Transaction:Cancel
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   * @throws FetchError<422, types.Error> Unprocessable entity, see response body for more information
   */
  patchTransactionsTransactionidCancel(metadata: types.PatchTransactionsTransactionidCancelMetadataParam): Promise<FetchResponse<200, types.TransactionStatus>> {
    return this.core.fetch('/transactions/{transactionId}/cancel', 'patch', metadata);
  }

  /**
   * Transactions that have the status authorize (is used by credit card payments or Buy now,
   * Pay later payments) needs an extra action to convert the payment state to a PAID (100)
   * transaction. This can be achieved by capturing the transaction. You can use the EX code
   * or the order Id to capture the transaction
   *
   * @summary Authorisation:Capture
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   * @throws FetchError<422, types.Error> Unprocessable entity, see response body for more information
   */
  patchTransactionsTransactionidCapture(body: types.PatchTransactionsTransactionidCaptureBodyParam, metadata: types.PatchTransactionsTransactionidCaptureMetadataParam): Promise<FetchResponse<200, types.TransactionStatus>>;
  patchTransactionsTransactionidCapture(metadata: types.PatchTransactionsTransactionidCaptureMetadataParam): Promise<FetchResponse<200, types.TransactionStatus>>;
  patchTransactionsTransactionidCapture(body?: types.PatchTransactionsTransactionidCaptureBodyParam | types.PatchTransactionsTransactionidCaptureMetadataParam, metadata?: types.PatchTransactionsTransactionidCaptureMetadataParam): Promise<FetchResponse<200, types.TransactionStatus>> {
    return this.core.fetch('/transactions/{transactionId}/capture', 'patch', body, metadata);
  }

  /**
   * Transactions that have the status verify (which implies that a transaction needs to be
   * checked) can be declined to release the authorisation on a card or to refund the
   * original transaction. The payment state is set to CANCEL (-64). You can use the EX code
   * or the order ID to decline the transaction
   *
   * @summary Verify:Decline
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   * @throws FetchError<422, types.Error> Unprocessable entity, see response body for more information
   */
  patchTransactionsTransactionidDecline(metadata: types.PatchTransactionsTransactionidDeclineMetadataParam): Promise<FetchResponse<200, types.TransactionStatus>> {
    return this.core.fetch('/transactions/{transactionId}/decline', 'patch', metadata);
  }

  /**
   * Load a transaction which has been started, so that the transaction can be finalized on
   * another device. The transaction can only be loaded if a transaction has the status 20,
   * 50 and 90 (PENDING)
   *
   * @summary Transaction:Load
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   */
  getTransactionsTransactionidLoad(metadata: types.GetTransactionsTransactionidLoadMetadataParam): Promise<FetchResponse<200, types.TransactionLoad>> {
    return this.core.fetch('/transactions/{transactionId}/load', 'get', metadata);
  }

  /**
   * Load a transaction which has been started, so that the transaction can be finalized on
   * another device. The transaction can only be loaded if a transaction has the status 20,
   * 50 and 90 (PENDING). You need to authenticate with the orderid (as username) and the
   * entrancecode (as password) or only the uuid (as username) of the transaction
   *
   * @summary Transaction:LoadUUID
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   */
  getTransactionsLoad(): Promise<FetchResponse<200, types.TransactionLoad>> {
    return this.core.fetch('/transactions/load', 'get');
  }

  /**
   * Submit a new WeChat Quick Pay/Alipay barcode on an existing transaction.
   *
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   * @throws FetchError<422, types.Error> Unprocessable entity, see response body for more information
   */
  patchTransactionsTransactionidQr(body: types.PatchTransactionsTransactionidQrBodyParam, metadata: types.PatchTransactionsTransactionidQrMetadataParam): Promise<FetchResponse<200, types.Transaction>> {
    return this.core.fetch('/transactions/{transactionId}/qr', 'patch', body, metadata);
  }

  /**
   * Add a recurring transaction. Ask Pay.nl to activate this option for you. When succesful
   * returns followup links in _links property.
   *
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   * @throws FetchError<422, types.Error> Unprocessable entity, see response body for more information
   */
  postTransactionsTransactionidRecurring(body: types.PostTransactionsTransactionidRecurringBodyParam, metadata: types.PostTransactionsTransactionidRecurringMetadataParam): Promise<FetchResponse<number, unknown>>;
  postTransactionsTransactionidRecurring(metadata: types.PostTransactionsTransactionidRecurringMetadataParam): Promise<FetchResponse<number, unknown>>;
  postTransactionsTransactionidRecurring(body?: types.PostTransactionsTransactionidRecurringBodyParam | types.PostTransactionsTransactionidRecurringMetadataParam, metadata?: types.PostTransactionsTransactionidRecurringMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/transactions/{transactionId}/recurring', 'post', body, metadata);
  }

  /**
   * Add a refund for a transaction. You can use the EX code or the order ID to refund the
   * transaction
   *
   * @summary Transaction:Refund
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   * @throws FetchError<422, types.Error> Unprocessable Entity, see response body for more information
   */
  patchTransactionsTransactionidRefund(body: types.PatchTransactionsTransactionidRefundBodyParam, metadata: types.PatchTransactionsTransactionidRefundMetadataParam): Promise<FetchResponse<200, types.PatchTransactionsTransactionidRefundResponse200>>;
  patchTransactionsTransactionidRefund(metadata: types.PatchTransactionsTransactionidRefundMetadataParam): Promise<FetchResponse<200, types.PatchTransactionsTransactionidRefundResponse200>>;
  patchTransactionsTransactionidRefund(body?: types.PatchTransactionsTransactionidRefundBodyParam | types.PatchTransactionsTransactionidRefundMetadataParam, metadata?: types.PatchTransactionsTransactionidRefundMetadataParam): Promise<FetchResponse<200, types.PatchTransactionsTransactionidRefundResponse200>> {
    return this.core.fetch('/transactions/{transactionId}/refund', 'patch', body, metadata);
  }

  /**
   * Pay existing transaction by card token only usable with a creditcard profile.
   *
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   * @throws FetchError<422, types.Error> Unprocessable entity, see response body for more information
   */
  patchTransactionsTransactionidTokenize(body: types.PatchTransactionsTransactionidTokenizeBodyParam, metadata: types.PatchTransactionsTransactionidTokenizeMetadataParam): Promise<FetchResponse<200, types.Transaction>>;
  patchTransactionsTransactionidTokenize(metadata: types.PatchTransactionsTransactionidTokenizeMetadataParam): Promise<FetchResponse<200, types.Transaction>>;
  patchTransactionsTransactionidTokenize(body?: types.PatchTransactionsTransactionidTokenizeBodyParam | types.PatchTransactionsTransactionidTokenizeMetadataParam, metadata?: types.PatchTransactionsTransactionidTokenizeMetadataParam): Promise<FetchResponse<200, types.Transaction>> {
    return this.core.fetch('/transactions/{transactionId}/tokenize', 'patch', body, metadata);
  }

  /**
   * Transactions that have the status authorize (is used by credit card payments or Buy now,
   * Pay later payments) can be voided to reverse the authorisation and to set the the
   * payment state to CANCEL (-90). You can use the EX Code or the order Id to void the
   * transaction
   *
   * @summary Authorisation:Void
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   * @throws FetchError<422, types.Error> Unprocessable entity, see response body for more information
   */
  patchTransactionsTransactionidVoid(metadata: types.PatchTransactionsTransactionidVoidMetadataParam): Promise<FetchResponse<200, types.TransactionStatus>> {
    return this.core.fetch('/transactions/{transactionId}/void', 'patch', metadata);
  }
}
