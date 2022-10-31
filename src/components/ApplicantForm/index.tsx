import { useContext, useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'

// styles
import * as Styled from './styles'

// types
import { Column } from '../../types/Column'
import { Applicant } from '../../types/Applicant'

// utils
import { AppContext } from '../../utils/appContext'

// props types
type Props = {
    selectApplicant: Applicant;
    selectApplicantIndex: number;
    btnStatus: boolean;
}

export const ApplicantForm = ({ selectApplicant, btnStatus, selectApplicantIndex }: Props) => {
    const { createApplicant, cancelApplicantUpdate, updateApplicant } = useContext(AppContext)

    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [nationality, setNationality] = useState<string>('');
    const [age, setAge] = useState<number>(0);

    useEffect(() => {
        setName(selectApplicant.name);
        setDescription(selectApplicant.description);
        setNationality(selectApplicant.nationality);
        setAge(selectApplicant.age);
    }, [btnStatus])

    // handle functions
    const handleCreateButton = (name: string, description: string, nationality: string, age: number) => {
        if (!name || !description || !nationality || !age) return alert('Please, complete the form');

        const newApplicant: Applicant = {
            id: uuid(),
            name: name,
            description: description,
            nationality: nationality,
            age: age,
            column: Column.Applied,
        }
        createApplicant(newApplicant);

        setName('');
        setDescription('');
        setNationality('');
        setAge(0)
    }

    const handleCancelButton = () => {
        setName('');
        setDescription('');
        setNationality('');
        setAge(0)
        cancelApplicantUpdate()
    }

    const handleUpdateButton = async () => {
        if (!name || !description || !nationality || !age) return alert('Please, fill up all fields');
        const updatedApplicant: Applicant = {
            id: selectApplicant.id,
            name: name,
            description: description,
            nationality: nationality,
            age: age,
            column: selectApplicant.column,
        }

        await updateApplicant(selectApplicantIndex, updatedApplicant)
        setName('');
        setDescription('');
        setNationality('');
        setAge(0)
    }

    return (
        <Styled.Container>
            <div>
                <input type="text" name='name' value={name} placeholder='Applicant name' onChange={e => setName(e.target.value)} />
                <input type="text" name='description' value={description} placeholder='Description' onChange={e => setDescription(e.target.value)} />
                <input type="text" name='nationality' value={nationality} placeholder='Nationality' onChange={e => setNationality(e.target.value)} />
                <input type="number" name='age' value={age} placeholder='Age' onChange={e => setAge(+e.target.value)} />
                {btnStatus ? (
                    <div>
                        <button onClick={() => handleCreateButton(name, description, nationality, age)}>Create</button>
                    </div>
                ) : (
                    <div>
                        <button onClick={() => handleUpdateButton()}>Update</button>
                        <button onClick={handleCancelButton}>Cancel</button>
                    </div>
                )}
            </div>
        </Styled.Container>
    )
}