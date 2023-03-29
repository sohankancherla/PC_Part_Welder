import { ChipsetCodesModel } from "./chipsetCodes.model";
import { MemoryTypeCodesModel } from "./memoryTypeCodes.model";
import { MotherboardFormFactorCodesModel } from "./motherboardFormFactorCodes.model";
import { PidRegistryModel } from "./pidRegistry.model";
import { SocketCodesModel } from "./socketCodes.model";

export class MotherboardModel {
  constructor(
  public pid: number,
  public pidRegistryEntity: PidRegistryModel,
  public chipset: number,
  public chipsetCodesEntity: ChipsetCodesModel,
  public memoryMax: number,
  public memoryType: number,
  public memoryTypeCodesEntity: MemoryTypeCodesModel,
  public memorySlots: number,
  public pciex16Slots: number,
  public pciex8Slots: number,
  public pciex4Slots: number,
  public pciex1Slots: number,
  public pciSlots: number,
  public m2Slots: string,
  public miniPcie: number,
  public halfMiniPcieSlots: number,
  public mSataSlots: number,
  public onBoardEthernet: string,
  public sata6Gb: number,
  public onBoardVideo: string,
  public usb20Headers: number,
  public usb20HeadersSinglePort: number,
  public usb30gen1Headers: number,
  public usb32Gen1Headers: number,
  public usb32Gen2x2Headers: number,
  public supportsEcc: boolean,
  public wirelessNetworking: string,
  public raidSupport: boolean,
  public memorySpeedMin: number,
  public memorySpeedMax: number,
  public socket: number,
  public socketCodesEntity: SocketCodesModel,
  public motherboardFormFactor: number,
  public motherboardFormFactorCodesEntity: MotherboardFormFactorCodesModel,
  public pata100: number,
  public sata3Gb: number,
  public u2: number,
  public pata133: number,
  public sas12Gb: number,
  public sas3Gb: number,
  public sas6Gb: number,
  public sata15: number
  ) {}
}
