import SDK from './sdk.js';
import './types.js';
import '@readme/api-core/types';
import '@readme/api-core';

/**
 * PAY. Transaction Gateway Unit API's
 *
 * A restful journey to your payments.
 *
 * @author <support@pay.nl>
 * @see {@link https://www.pay.nl/en/terms-conditions Terms of Service}
 */
declare const createSDK: SDK;

export { createSDK as default };
