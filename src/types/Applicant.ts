import { Column } from "./Column"

export type Applicant = {
    id: string,
    name: string,
    description: string,
    nationality: string,
    age: number,
    column: string,
}