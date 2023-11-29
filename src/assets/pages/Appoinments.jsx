import { useEffect, useState } from 'react'
import AppoinmentsForm from '../../components/appoinment/AppoinmentsForm'
import AppointmentsList from '../../components/appoinment/AppointmentsList'

const Appoinments = () => {


    const [appointments, setAppointments] = useState([])
    const [appointmentSelected, setAppointmentSelected] = useState({})


    const handleSaveAppointment = (form) => {
        form.id = crypto.randomUUID()
        setAppointments([...appointments, form])
    }

    const handleRemove = (id) => {
        const isDelete = confirm('Estás seguro que eliminar esta cita?')
        if (isDelete) {
            const newAppointments = appointments.filter(appointment => appointment.id !== id)
            setAppointments(newAppointments)
        } else {
            return
        }
    }

    const handleEdit = (appointment) => {
        setAppointmentSelected(appointment)
    }

    const handleUpdate = (form) => {
        let newForm = appointments.map(el => el.id === form.id ? form : el)
        setAppointments(newForm)
    }


    return (
        <>
            <AppoinmentsForm
                onSaveAppointment={handleSaveAppointment}
                appointment={appointmentSelected}
                update={handleUpdate} />

            <AppointmentsList
                appointments={appointments}
                appointmentSelected={appointmentSelected}
                onRemove={handleRemove}
                onEdit={handleEdit} />
        </>
    )
}

export default Appoinments