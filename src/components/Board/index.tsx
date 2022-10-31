import * as Styled from './styles'
import { useContext, useState } from 'react'

// types
import { Applicant } from '../../types/Applicant'
import { Column } from '../../types/Column'

// Components
import { ColumnWrapper } from '../ColumnWrapper'

type Props = {
    applicants: Applicant[],
}

export const Board = ({ applicants }: Props) => {

    const columnList = Object.values(Column)

    return (
        <Styled.Container>
            {columnList.map((column, index) => (
                <ColumnWrapper applicants={applicants} column={column} key={index} />
            ))}
        </Styled.Container>
    )
}