import SDK from './sdk.js';

/**
 * PAY. Global Management System API's
 *
 * A restful journey to your payments.
 *
 * @author <support@pay.nl>
 * @see {@link https://www.pay.nl/en/terms-conditions Terms of Service}
 */
const createSDK = (() => { return new SDK(); })();

export default createSDK;
