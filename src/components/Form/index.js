import { useState } from "react";

const CurriculumForm =({ onSave }) => {
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [phone, setPhone] = useState('')
    const [job, setJob] = useState('')
    const [history, setHistory] = useState('')

    const curriculumSave = () => {
        const form = {
            name,
            mail,
            phone,
            job,
            history,
        }

        onSave(form)
        curriculumClear()
    }

    const curriculumClear = () => {
        setName('')
        setMail('')
        setPhone('')
        setJob('')
        setHistory('')
    }

    return (
        <>
            <input type="text" value={name} placeholder="Nome"
                onChange={event => setName(event.target.value)} />

            <br />

            <input type="text" value={mail} placeholder="E-mail"
                onChange={event => setMail(event.target.value)} />

            <br />

            <input type="text" value={phone} placeholder="Telefone"
                onChange={event => setPhone(event.target.value)} />

            <br />

            <input type="text" value={job} placeholder="Cargo"
                onChange={event => setJob(event.target.value)} />

            <br />

            <input type="text" value={history} placeholder="Histórico"
                onChange={event => setHistory(event.target.value)} />

            <br />

            <input type="button" value="Salvar" onClick={curriculumSave} />
        </>
    )
}

export default CurriculumForm;
