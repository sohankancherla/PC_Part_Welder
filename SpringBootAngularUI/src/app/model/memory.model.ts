import { EccRegisteredCodesModel } from "./eccRegisteredCodes.model";
import { FormFactorCodesModel } from "./formFactorCodes.model";
import { MemoryTypeCodesModel } from "./memoryTypeCodes.model";
import { PidRegistryModel } from "./pidRegistry.model";

export class MemoryModel {
  constructor(
  public pid: number,
  public pidRegistryEntity: PidRegistryModel,
  public formFactor: number,
  public formFactorCodesEntity: FormFactorCodesModel,
  public modules: number,
  public pricePerGb: number,
  public firstWordLatency: number,
  public voltage: number,
  public eccRegistered: number,
  public eccRegisteredCodesEntity: EccRegisteredCodesModel,
  public heatSpreader: boolean,
  public memoryType: number,
  public memoryTypeCodesEntity: MemoryTypeCodesModel,
  public memorySpeed: number,
  public capacity: number,
  public cl: number,
  public trcd: number,
  public trp: number,
  public tras: number
  ) {}
}
