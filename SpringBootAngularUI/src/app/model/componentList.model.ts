import { PidRegistryModel } from "./pidRegistry.model";
import { PricingModel } from "./pricing.model";

export class ComponentListModel {
  constructor(
    public cid: number,
    public pid: number,
    public merchant: number,
    public count: number,
    public pidRegistryEntity?: PidRegistryModel,
    public pricingEntity?: PricingModel
  ) {}
}
