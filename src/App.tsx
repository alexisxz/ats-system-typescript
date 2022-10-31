import { useEffect, useMemo, useReducer, useState } from 'react'
import { v4 as uuid } from 'uuid'

// style
import * as Styled from './App.styles'

// components
import { ApplicantForm } from './components/ApplicantForm'
import { Board } from './components/Board'

// types
import { Applicant } from './types/Applicant'
import { Column } from './types/Column'

// utils
import { AppContext } from './utils/appContext'
import { appReducer } from './utils/appReducer'

export const initialState: Applicant[] = [
  { id: uuid(), name: 'Alexis', description: 'Junior Dev', nationality: 'Brazilian', age: 26, column: Column.Applied },
  { id: uuid(), name: 'Bruna', description: 'Senior Dev', nationality: 'Brazilian', age: 30, column: Column.PreScreening }
]

export const initialSelectState: Applicant = { id: '', name: '', description: '', nationality: '', age: 0, column: Column.Applied }

export const App = () => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  const [selectApplicant, setSelectApplicant] = useState<Applicant>(initialSelectState);
  const [selectApplicantIndex, setSelectApplicantIndex] = useState<number>(0);
  const [btnStatus, setBtnStatus] = useState<boolean>(true);


  const contextValue = useMemo(() => {

    const createApplicant = (item: Applicant) => {
      dispatch({ type: "CREATE_APPLICANT", payload: { form: item } })
    }

    const selectApplicant = (item: Applicant, index: number) => {
      dispatch({ type: "SELECT_APPLICANT", payload: {} })

      setSelectApplicant(item);
      setSelectApplicantIndex(index);
      setBtnStatus(false);
    }

    const updateApplicant = (selectedApplicantIndex: number, updatedApplicant: Applicant) => {
      dispatch({ type: "UPDATE_APPLICANT", payload: { selectedApplicantIndex, updatedApplicant } })

      setBtnStatus(true);
    }

    const deleteApplicant = (applicantId: string) => {
      dispatch({ type: "DELETE_APPLICANT", payload: { applicantId } })
    }

    const cancelApplicantUpdate = () => {
      dispatch({ type: "CANCEL_UPDATE", payload: {} })

      setBtnStatus(true)
      setSelectApplicant(initialSelectState)
    }

    const moveApplicant = (applicantId: string, newColumn: string) => {
      dispatch({ type: "MOVE_APPLICANT", payload: { applicantId, newColumn } })
    }

    return {
      createApplicant: createApplicant,
      selectApplicant: selectApplicant,
      deleteApplicant: deleteApplicant,

      updateApplicant: updateApplicant,
      cancelApplicantUpdate: cancelApplicantUpdate,

      moveApplicant: moveApplicant,
    }
  }, [])


  return (
    <AppContext.Provider value={contextValue}>
      <Styled.Container>
        <Styled.Area>

          <ApplicantForm btnStatus={btnStatus} selectApplicant={selectApplicant} selectApplicantIndex={selectApplicantIndex} />

          <Board applicants={state} />

        </Styled.Area>
      </Styled.Container>
    </AppContext.Provider>
  )
}