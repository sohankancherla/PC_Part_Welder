import { ColorCodesModel } from "./colorCodes.model";
import { ManufacturerCodesModel } from "./manufacturerCodes.model";
import { PricingModel } from "./pricing.model";

export class PidRegistryModel {
  constructor(
  public pid: number,
  public pricingEntities: PricingModel[],
  public productType: string,
  public productName: string,
  public manufacturer: number,
  public manufacturerCodesEntity: ManufacturerCodesModel,
  public partNumber: string,
  public color: number,
  public colorCodesEntity: ColorCodesModel,

  public lowestPricingEntity: PricingModel
  ) {}
}
