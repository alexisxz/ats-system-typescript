import { createContext } from "react";
import { Applicant } from "../types/Applicant";

const noop = () => { }

type Props = {
    createApplicant: (item: Applicant) => void;
    deleteApplicant: (applicantId: string) => void;
    selectApplicant: (item: Applicant, index: number, btnStatus: boolean) => void;

    updateApplicant: (selectApplicantId: number, updatedApplicant: Applicant) => void;
    cancelApplicantUpdate: () => void;

    moveApplicant: (applicantId: string, newColumn: string) => void;
}

export const AppContext = createContext<Props>({
    createApplicant: noop,
    deleteApplicant: noop,
    selectApplicant: noop,

    updateApplicant: noop,
    cancelApplicantUpdate: noop,

    moveApplicant: noop,
});