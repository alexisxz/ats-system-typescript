import { useContext, useState } from 'react';

import * as Styled from './styles'

// types
import { Column } from '../../types/Column'
import { Applicant } from '../../types/Applicant';

// utils
import { AppContext } from '../../utils/appContext';


type Props = {
    item: Applicant
}

export const SelectMove = ({ item }: Props) => {
    const { moveApplicant, cancelApplicantUpdate } = useContext(AppContext)

    const [selectColumn, setSelectColumn] = useState<string>(item.column);

    const handleMoveButton = (applicantId: string) => {
        if (!selectColumn || !applicantId) return;
        cancelApplicantUpdate()
        moveApplicant(applicantId, selectColumn)

    }
    return (
        <Styled.Container>
            <select value={selectColumn} onChange={(e) => setSelectColumn(e.target.value)}>
                <option value={Column.Applied}>{Column.Applied}</option>
                <option value={Column.PreScreening}>{Column.PreScreening}</option>
                <option value={Column.Interview}>{Column.Interview}</option>
                <option value={Column.Probetag}>{Column.Probetag}</option>
                <option value={Column.Accepted}>{Column.Accepted}</option>
                <option value={Column.Rejected}>{Column.Rejected}</option>
            </select>
            <button onClick={() => handleMoveButton(item.id)}>Move</button>
        </Styled.Container>
    )
}