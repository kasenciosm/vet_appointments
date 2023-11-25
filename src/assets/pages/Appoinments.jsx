import { useEffect, useState } from 'react'
import AppoinmentsForm from '../../components/appoinment/AppoinmentsForm'
import AppointmentsList from '../../components/appoinment/AppointmentsList'

const Appoinments = () => {


    const [appointments, setAppointments] = useState([])
    const [appointmentSelected, setAppointmentSelected] = useState({})


    const handleSaveAppointment = (form) => {
        setAppointments([...appointments, form])
    }

    const handleRemove = (id) => {
        const newAppointments = appointments.filter(appointment => appointment.id !== id)
        setAppointments(newAppointments)
    }

    const handleEdit = (appointment) => {
        setAppointmentSelected(appointment)
    }

    // const handleEdit = (editedAppointment) => {
    //     const updatedAppointments = appointments.map(appointment => {
    //         if (appointment.id === editedAppointment.id) {
    //             return editedAppointment
    //         }
    //         return appointment
    //     })

    //     setAppointmentSelected(updatedAppointments)
    // }

    return (
        <>
            <AppoinmentsForm
                onSaveAppointment={handleSaveAppointment}
                appointment={appointmentSelected} />

            <AppointmentsList
                appointments={appointments}
                appointmentSelected={appointmentSelected}
                onRemove={handleRemove}
                onEdit={handleEdit} />
        </>
    )
}

export default Appoinments