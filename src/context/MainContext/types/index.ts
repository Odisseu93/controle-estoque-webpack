import { IAlertContext } from "../../alert/types";
import { IFormContext } from "../../form/types";
import { TModal } from "../../modal/types";
import { TRenderContext } from "../../render/types";

export interface IMainContext extends IFormContext, TModal, TRenderContext, IAlertContext {};
