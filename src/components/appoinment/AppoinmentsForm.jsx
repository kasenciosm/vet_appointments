import { useEffect, useState } from 'react'

const AppoinmentsForm = ({ onSaveAppointment, appointment, update }) => {

    const INITIAL_FORM_STATE = {
        id: null,
        petName: '',
        petAge: '',
        owner: '',
        date: '',
        time: '',
        symptoms: ''
    }


    const [form, setForm] = useState(INITIAL_FORM_STATE)
    const [editing, setEditing] = useState(false)

    useEffect(() => {
        if (Object.keys(appointment).length > 0) {
            setForm(appointment)
        } else {
            setForm(INITIAL_FORM_STATE)
        }
    }, [appointment])

    const handleChange = (event) => {
        const { name, value } = event.target

        setForm({ ...form, [name]: value })
    }


    const handleSubmit = (event) => {
        event.preventDefault()

        if (form.id === null) {
            onSaveAppointment(form)
        } else {
            update(form)
        }

        setForm(INITIAL_FORM_STATE)
    }


    return (
        <>
            <section className='form__register'>
                <h2> Nuevo Paciente</h2>
                <form className='form'
                    onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name='petName'
                        value={form.petName}
                        placeholder='Nombre de mi mascota'
                        required
                        onChange={handleChange}
                    />

                    <input
                        type="number"
                        name='petAge'
                        min='0'
                        max='20'
                        value={form.petAge}
                        placeholder='Edad de mi mascota'
                        required
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name='owner'
                        value={form.owner}
                        placeholder='Dueño de la mascota'
                        required
                        onChange={handleChange}
                    />

                    <input
                        type="date"
                        name='date'
                        value={form.date}
                        placeholder='Fecha de la cita'
                        required
                        onChange={handleChange}
                    />

                    <input
                        type="time"
                        name='time'
                        value={form.time}
                        placeholder='Hora de la cita'
                        required
                        onChange={handleChange}
                    />

                    <textarea
                        type="text"
                        name='symptoms'
                        value={form.symptoms}
                        placeholder='Sintomas'
                        required
                        onChange={handleChange}
                    />

                    <button
                        type='submit'>Guardar</button>
                </form>
            </section>

        </>
    )
}

export default AppoinmentsForm