import { expect, it, describe } from "vitest"
import { Action, appReducer, State } from "./appReducer"

// types
import { Applicant } from "../types/Applicant";
import { Column } from "../types/Column";

describe('App Reducer', () => {

    describe('ADD_APPLICANT', () => {
        it('should add applicant to the state', () => {
            // Arrange 
            const form: Applicant = { id: '1abc', name: 'Alexis', description: 'Dev', nationality: 'Brazilian', age: 25, column: Column.Applied }
            const action: Action = { type: "CREATE_APPLICANT", payload: { form: form } };
            const emptyState: State = []

            // Act
            const result = appReducer(emptyState, action);

            // Assert
            expect(result).toHaveLength(1);
            expect(result[0]).toBeDefined();
            expect(result[0].name).toBe('Alexis')
        })

        it('should not add applicant to the state - empty name', () => {
            // Arrange 
            const form: Applicant = { id: '1abc', name: '', description: 'Dev', nationality: 'Brazilian', age: 0, column: Column.Applied }
            const action: Action = { type: 'CREATE_APPLICANT', payload: { form: form } };
            const state: State = []

            // Act
            const result = appReducer(state, action);

            // Assert
            expect(result).toHaveLength(0);
            expect(result[0]).not.toBeDefined();
        })
    });

    describe('UPDATE_APPLICANT', () => {
        it('should update the applicant', () => {
            // Arrange
            const selectedApplicantIndex: number = 0;
            const applicant: Applicant = { id: '1abc', name: 'Alexis', description: 'Dev', nationality: 'Brazilian', age: 25, column: Column.Applied }
            const updatedApplicant: Applicant = { id: '1abc', name: 'Nelson', description: 'Dev', nationality: 'Brazilian', age: 25, column: Column.Applied }
            const action: Action = { type: "UPDATE_APPLICANT", payload: { selectedApplicantIndex: selectedApplicantIndex, updatedApplicant: updatedApplicant } }
            const state: State = [applicant]

            // Act
            const result = appReducer(state, action);

            // Assert
            expect(result).toHaveLength(1);
            expect(result[0].name).toBe(updatedApplicant.name);
            expect(result[0].name).not.toBe(applicant.name);
        })

        it('should not update the applicant - empty name', () => {
            // Arrange
            const selectedApplicantIndex: number = 0;
            const applicant: Applicant = { id: '1abc', name: 'Alexis', description: 'Dev', nationality: 'Brazilian', age: 25, column: Column.Applied }
            const updatedApplicant: Applicant = { id: '1abc', name: '', description: 'Dev', nationality: 'Brazilian', age: 25, column: Column.Applied }
            const action: Action = { type: "UPDATE_APPLICANT", payload: { selectedApplicantIndex: selectedApplicantIndex, updatedApplicant: updatedApplicant } }
            const state: State = [applicant]

            // Act
            const result = appReducer(state, action);

            // Assert
            expect(result).toHaveLength(1);
            expect(result[0].name).toBe(applicant.name);
            expect(result[0].name).not.toBe(updatedApplicant.name);
        })

        describe('DELETE_APPLICANT', () => {
            it('shoud delete the applicant', () => {
                // Arrange
                const applicantId = '1abc'
                const applicant: Applicant = { id: '1abc', name: 'Alexis', description: 'Dev', nationality: 'Brazilian', age: 25, column: Column.Applied }
                const action: Action = { type: "DELETE_APPLICANT", payload: { applicantId: applicantId } }
                const state: State = [applicant]

                // Act
                const result = appReducer(state, action);

                // Assert
                expect(result).toHaveLength(0);
                expect(result[0]).not.toBeDefined();
            })

            it('should not delete the applicant - different id', () => {
                // Arrange
                const applicantId = '2abc'
                const applicant: Applicant = { id: '1abc', name: 'Alexis', description: 'Dev', nationality: 'Brazilian', age: 25, column: Column.Applied }
                const action: Action = { type: "DELETE_APPLICANT", payload: { applicantId: applicantId } }
                const state: State = [applicant]

                // Act
                const result = appReducer(state, action);

                // Assert
                expect(result).toHaveLength(1);
                expect(result[0]).toBeDefined();
            })
        })

        describe('MOVE_APPLICANT', () => {
            it('should move the applicant', () => {
                // Arrange
                const applicantId = '1abc'
                const newColumn = Column.Accepted
                const applicant: Applicant = { id: '1abc', name: 'Alexis', description: 'Dev', nationality: 'Brazilian', age: 25, column: Column.Applied }
                const action: Action = { type: "MOVE_APPLICANT", payload: { applicantId: applicantId, newColumn: newColumn } }
                const state: State = [applicant]

                // Act
                const result = appReducer(state, action)

                // Assert
                expect(result).toHaveLength(1);
                expect(result[0].column).toBe(newColumn);
            })

            it('shoud not move the applicant - wrong id', () => {
                // Arrange
                const applicantId = '2abc'
                const newColumn = Column.Accepted
                const applicant: Applicant = { id: '1abc', name: 'Alexis', description: 'Dev', nationality: 'Brazilian', age: 25, column: Column.Applied }
                const action: Action = { type: "MOVE_APPLICANT", payload: { applicantId: applicantId, newColumn: newColumn } }
                const state: State = [applicant]

                // Act
                const result = appReducer(state, action)

                // Assert
                expect(result).toHaveLength(1);
                expect(result[0].column).not.toBe(newColumn);
            })
        })
    })

    it("should be true", () => {
        expect(true).toBeTruthy()
    })
})