import { PidRegistryModel } from "./pidRegistry.model";

export class StoragesModel {
  constructor(
  public pid: number,
  public pidRegistryEntity: PidRegistryModel,
  public capacity: number,
  public pricePerGb: number,
  public type: string,
  public cache: number,
  public formFactor: string,
  public interfaces: string,
  public nvme: boolean,
  public ssdNandFlashType: string,
  public hybridSsdCache: string,
  public ssdController: string,
  public powerLossProtection: boolean
  ) {}
}
