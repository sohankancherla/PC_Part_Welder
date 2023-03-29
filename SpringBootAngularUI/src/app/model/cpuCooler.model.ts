import { BearingCodesModel } from "./bearingCodes.model";
import { PidRegistryModel } from "./pidRegistry.model";

export class CpuCoolerModel {
  constructor(
  public pid: number,
  public pidRegistryEntity: PidRegistryModel,
  public height: number,
  public fanless: boolean,
  public fanRpmMin: number,
  public fanRpmMax: number,
  public noiseLevelMin: number,
  public noiseLevelMax: number,
  public bearing: number,
  public bearingCodesEntity: BearingCodesModel,
  public waterCoolerRadiator: number,
  ) {}
}
