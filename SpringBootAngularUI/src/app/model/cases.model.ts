import { PidRegistryModel } from "./pidRegistry.model";
import { SidePanelWindowCodesModel } from "./sidePanelWindowCodes.model";
import { TypeCodesModel } from "./typeCodes.model";

export class CasesModel {
  constructor(
  public pid: number,
  public pidRegistryEntity: PidRegistryModel,
  public type: number,
  public typeCodesEntity: TypeCodesModel,
  public powerSupply: number,
  public sidePanelWindow: number,
  public sidePanelWindowCodesEntity: SidePanelWindowCodesModel,
  public powerSupplyShroud: boolean,
  public fullHeightExpansionSlots: number,
  public halfHeightExpansionSlots: number,
  public internal25Bays: number,
  public internal35Bays: number,
  public maxGraphicsCardLength: number,
  public maxGraphicsCardLengthNoDriveBay: number,
  public length: number,
  public width: number,
  public height: number,
  public external525Bays: number,
  public external35Bays: number,
  public external525SlimSlotLoadBays: number,
  public external25Bays: number,
  public external525Slimbays: number,
  public internal525Bays: number,
  public internal525SlimSlotLoadBays: number
  ) {}
}
