import { AvailabilityCodesModel } from "./availabilityCodes.model";
import { MerchantCodesModel } from "./merchantCodes.model";
import { PidRegistryModel } from "./pidRegistry.model";

export class PricingModel {
  constructor(
    public pid: number,
    public pidRegistryEntity: PidRegistryModel,
    public merchant: number,
    public merchantCodesEntity: MerchantCodesModel,
    public availability: number,
    public availabilityCodesEntity: AvailabilityCodesModel,
    public total: number,
    public pidRegistryPricingEntity: PidRegistryModel
  ) {}
}
