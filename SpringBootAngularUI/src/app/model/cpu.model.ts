import { CoreFamilyCodesModel } from "./coreFamilyCodes.model";
import { IntegratedGraphicsCodesModel } from "./integratedGraphicsCodes.model";
import { MicroarchitectureCodesModel } from "./microarchitectureCodes.model";
import { PackagingCodesModel } from "./packagingCodes.model";
import { PidRegistryModel } from "./pidRegistry.model";
import { SeriesCodesModel } from "./seriesCodes.model";
import { SocketCodesModel } from "./socketCodes.model";

export class CpuModel {
  constructor(
  public pid: number,
  public pidRegistryEntity: PidRegistryModel,
  public coreCount: number,
  public coreClock: number,
  public boostClock: number,
  public tdp: number,
  public series: number,
  public seriesCodesEntity: SeriesCodesModel,
  public microarchitecture: number,
  public microarchitectureCodesEntity: MicroarchitectureCodesModel,
  public coreFamily: number,
  public coreFamilyCodesEntity: CoreFamilyCodesModel,
  public socket: number,
  public socketCodesEntity: SocketCodesModel,
  public maximumSupportedMemory: number,
  public eccSupport: boolean,
  public packaging: number,
  public packagingCodesEntity: PackagingCodesModel,
  public includesCpuCooler: boolean,
  public l1Cache: string,
  public l2Cache: string,
  public l3Cache: string,
  public lithography: number,
  public simultaneousMultithreading: boolean,
  public integratedGraphics: number,
  public integratedGraphicsCodesEntity: IntegratedGraphicsCodesModel
  ) {}
}
