import type { FromSchema } from '@readme/api-core/types';
import type * as schemas from './schemas.js';

export type ApiAbortOrderMetadataParam = FromSchema<typeof schemas.ApiAbortOrder.metadata>;
export type ApiApproveOrderMetadataParam = FromSchema<typeof schemas.ApiApproveOrder.metadata>;
export type ApiCaptureAmountMetadataParam = FromSchema<typeof schemas.ApiCaptureAmount.metadata>;
export type ApiCaptureOrderMetadataParam = FromSchema<typeof schemas.ApiCaptureOrder.metadata>;
export type ApiCaptureProductsMetadataParam = FromSchema<typeof schemas.ApiCaptureProducts.metadata>;
export type ApiDeclineOrderMetadataParam = FromSchema<typeof schemas.ApiDeclineOrder.metadata>;
export type ApiGetStatusMetadataParam = FromSchema<typeof schemas.ApiGetStatus.metadata>;
export type ApiVoidOrderMetadataParam = FromSchema<typeof schemas.ApiVoidOrder.metadata>;
export type ErrorOutput = FromSchema<typeof schemas.ErrorOutput>;
export type OrderCaptureAmountInputDto = FromSchema<typeof schemas.OrderCaptureAmountInputDto>;
export type OrderCaptureProductsInputDto = FromSchema<typeof schemas.OrderCaptureProductsInputDto>;
export type OrderInput = FromSchema<typeof schemas.OrderInput>;
export type OrderInputAddress = FromSchema<typeof schemas.OrderInputAddress>;
export type OrderInputAmount = FromSchema<typeof schemas.OrderInputAmount>;
export type OrderInputCompany = FromSchema<typeof schemas.OrderInputCompany>;
export type OrderInputCustomer = FromSchema<typeof schemas.OrderInputCustomer>;
export type OrderInputIntegration = FromSchema<typeof schemas.OrderInputIntegration>;
export type OrderInputNotification = FromSchema<typeof schemas.OrderInputNotification>;
export type OrderInputOptimize = FromSchema<typeof schemas.OrderInputOptimize>;
export type OrderInputOptimizeCollectorAccount = FromSchema<typeof schemas.OrderInputOptimizeCollectorAccount>;
export type OrderInputOptimizeCollectorAccountIban = FromSchema<typeof schemas.OrderInputOptimizeCollectorAccountIban>;
export type OrderInputOptimizeCollectorCompany = FromSchema<typeof schemas.OrderInputOptimizeCollectorCompany>;
export type OrderInputOrder = FromSchema<typeof schemas.OrderInputOrder>;
export type OrderInputPaymentMethod = FromSchema<typeof schemas.OrderInputPaymentMethod>;
export type OrderInputProduct = FromSchema<typeof schemas.OrderInputProduct>;
export type OrderInputStats = FromSchema<typeof schemas.OrderInputStats>;
export type OrderOutput = FromSchema<typeof schemas.OrderOutput>;
export type OrderOutputCheckoutData = FromSchema<typeof schemas.OrderOutputCheckoutData>;
export type OrderOutputCheckoutDataCompany = FromSchema<typeof schemas.OrderOutputCheckoutDataCompany>;
export type OrderOutputPayment = FromSchema<typeof schemas.OrderOutputPayment>;
export type OrderPaymentMethodDirectDebit = FromSchema<typeof schemas.OrderPaymentMethodDirectDebit>;
export type OrderPaymentMethodGiftcard = FromSchema<typeof schemas.OrderPaymentMethodGiftcard>;
export type OrderPaymentMethodIDeal = FromSchema<typeof schemas.OrderPaymentMethodIDeal>;
export type OrderPaymentMethodKlarna = FromSchema<typeof schemas.OrderPaymentMethodKlarna>;
export type OrderPaymentMethodPayByBank = FromSchema<typeof schemas.OrderPaymentMethodPayByBank>;
export type OrderPaymentMethodPin = FromSchema<typeof schemas.OrderPaymentMethodPin>;
export type OrderPaymentMethodPrzelewy24 = FromSchema<typeof schemas.OrderPaymentMethodPrzelewy24>;
export type OrderPaymentMethodSprayPay = FromSchema<typeof schemas.OrderPaymentMethodSprayPay>;
export type ProductQuantityInputDto = FromSchema<typeof schemas.ProductQuantityInputDto>;
export type ViolationOutput = FromSchema<typeof schemas.ViolationOutput>;
