import { IAlert } from "../../../components/Alert/types";

export interface IAlertContext {
    alertData: IAlert,
    setAlertData: React.Dispatch<React.SetStateAction<IAlert>>
    alertRender: number,
    setAlertRender: React.Dispatch<React.SetStateAction<number>>
};