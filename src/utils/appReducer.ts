import { Applicant } from "../types/Applicant";

export type Action = {
    type: "CREATE_APPLICANT",
    payload: { form: Applicant }
} | {
    type: "SELECT_APPLICANT",
    payload: {}
} | {
    type: "UPDATE_APPLICANT",
    payload: { selectedApplicantIndex: number, updatedApplicant: Applicant }
} | {
    type: "DELETE_APPLICANT"
    payload: { applicantId: string }
} | {
    type: "CANCEL_UPDATE",
    payload: {}
} | {
    type: "MOVE_APPLICANT"
    payload: { applicantId: string, newColumn: string }
}

export type State = Applicant[]

export const appReducer = (state: State, action: Action): State => {


    switch (action.type) {
        case "CREATE_APPLICANT": {
            const form = action.payload.form
            if (!form.name || !form.age || !form.description || !form.nationality) return state;

            const newApplicant: Applicant = form;
            if (!newApplicant) return state;

            return [...state, newApplicant]
        }

        case "SELECT_APPLICANT": {
            return state;
        }

        case "UPDATE_APPLICANT": {
            const newState = [...state];

            const applicantIndex = action.payload.selectedApplicantIndex;

            const updatedApplicant = action.payload.updatedApplicant
            if (!updatedApplicant.name || !updatedApplicant.age || !updatedApplicant.description || !updatedApplicant.nationality) return state;

            newState[applicantIndex] = updatedApplicant

            return newState;
        }

        case "DELETE_APPLICANT": {
            const applicantId = action.payload.applicantId;
            const newState = state.filter(item => item.id !== applicantId)
            if (!newState || !applicantId) return state;

            return newState
        }

        case "CANCEL_UPDATE": {
            return state;
        }

        case "MOVE_APPLICANT": {
            const newColumn = action.payload.newColumn;
            const applicantId = action.payload.applicantId;
            if (!newColumn || !applicantId) return state;

            const newState: Applicant[] = state.map(item => {
                if (item.id === applicantId) {
                    if (item.column === newColumn) return item;
                    return { ...item, column: newColumn }
                }
                return item
            })
            if (!newState) return state;

            return newState
        }

        default: return state
    }
}