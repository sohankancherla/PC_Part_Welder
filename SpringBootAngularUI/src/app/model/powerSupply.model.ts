import { EfficiencyRatingCodesModel } from "./efficiencyRatingCodes.model";
import { FormFactorCodesModel } from "./formFactorCodes.model";
import { PidRegistryModel } from "./pidRegistry.model";
import { TypeCodesModel } from "./typeCodes.model";

export class PowerSupplyModel {
  constructor(
  public pid: number,
  public pidRegistryEntity: PidRegistryModel,
  public formFactor: number,
  public formFactorCodesEntity: FormFactorCodesModel,
  public efficiencyRating: number,
  public efficiencyRatingCodesEntity: EfficiencyRatingCodesModel,
  public wattage: number,
  public length: number,
  public type: number,
  public typeCodesEntity: TypeCodesModel,
  public fanless: boolean,
  public atxConnectors: number,
  public epsConnectors: number,
  public pcie12PinConnectors: number,
  public pcie8PinConnectors: number,
  public pcie62PinConnectors: number,
  public pcie6PinConnectors: number,
  public sataConnectors: number,
  public molex4PinConnectors: number,
  public output: string,
  public efficiency: string
  ) {}
}
