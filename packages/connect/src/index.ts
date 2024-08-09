import SDK from './sdk.js';

/**
 * Pay. Transaction Gateway Unit API
 *
 * The restful API for interacting with the Pay. Transaction Gateway Unit.
 *
 * @author Pay. <support@pay.nl>
 * @see {@link https://www.pay.nl}
 */
const createSDK = (() => { return new SDK(); })();

export default createSDK;
