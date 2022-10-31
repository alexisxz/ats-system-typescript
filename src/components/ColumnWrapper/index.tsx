import { useContext } from 'react'
import { Applicant } from '../../types/Applicant'
import { AppContext } from '../../utils/appContext'
import { SelectMove } from '../SelectMove'
import * as Styled from './styles'

type Props = {
    column: string,
    applicants: Applicant[]
}

export const ColumnWrapper = ({ column, applicants }: Props) => {
    const { deleteApplicant, selectApplicant, cancelApplicantUpdate } = useContext(AppContext)

    // handle functions
    const handleSelectButton = async (item: Applicant, index: number) => {
        await cancelApplicantUpdate()
        selectApplicant(item, index, false)
    }
    return (
        <Styled.Container>
            <Styled.Column>
                <h2>{column}</h2>
                {
                    applicants.map((item, index) => {
                        if (item.column !== column) return;
                        return (
                            <div key={index}>
                                <h3>{item.name} |</h3>
                                <p>{item.age} years |</p>
                                <p>{item.nationality} |</p>
                                <p>{item.description}</p>
                                <button onClick={() => handleSelectButton(item, index)}>Select</button>
                                <button onClick={() => deleteApplicant(item.id)}>Delete</button>

                                <div>
                                    <SelectMove item={item} />
                                </div>
                            </div>
                        )
                    })
                }
            </Styled.Column>
        </Styled.Container>
    )
}