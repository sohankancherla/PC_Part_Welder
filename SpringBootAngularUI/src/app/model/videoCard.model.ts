import { ChipsetCodesModel } from "./chipsetCodes.model";
import { FrameSyncCodesModel } from "./frameSyncCodes.model";
import { InterfaceCodesModel } from "./interfaceCodes.model";
import { MemoryTypeCodesModel } from "./memoryTypeCodes.model";
import { PidRegistryModel } from "./pidRegistry.model";

export class VideoCardModel {
  constructor(
  public pid: number,
  public pidRegistryEntity: PidRegistryModel,
  public chipset: number,
  public chipsetCodesEntity: ChipsetCodesModel,
  public memory: number,
  public memoryType: number,
  public memoryTypeCodesEntity: MemoryTypeCodesModel,
  public coreClock: number,
  public boostClock: number,
  public effectiveMemoryClock: number,
  public interfaces: number,
  public interfaceCodesEntity: InterfaceCodesModel,
  public frameSync: number,
  public frameSyncCodesEntity: FrameSyncCodesModel,
  public length: number,
  public tdp: number,
  public dviPorts: number,
  public hdmiPorts: number,
  public miniHdmiPorts: number,
  public displayPortPorts: number,
  public miniDisplayPortPorts: number,
  public expansionSlotWidth: number,
  public cooling: number,
  public externalPower: number,
  public displayPort: number,
  public hdmi: number,
  public dvidDualLink: number,
  public vga: number,
  public dviiDualLink: number,
  public virtualLink: number,
  public dvidSingleLink: number,
  public dvi: number,
  public miniDisplayPort: number,
  public miniHdmi: number,
  public sVideo: number,
  public vHdci: number,
  public dviiSingleLink: number,
  public dviA: number
  ) {}
}
