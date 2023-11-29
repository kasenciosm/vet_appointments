import React from 'react'
import maiu from '/miau.jpeg?url'

const AppointmentsList = ({ appointments, onRemove, onEdit }) => {
    if (appointments.length === 0) {
        return (
            <section className='no__appointments'>
                <h2> Lista de Pacientes</h2>
                <p>No hay citas</p>
                <img src={maiu} alt="miau" width='300px' />
            </section>
        )
    }
    return (
        <section className='appointments__list'>
            <h2> Lista de Pacientes</h2>
            <article>
                {appointments.map(appointment => {
                    return <div
                        className='appointments'
                        key={appointment.id}>
                        <div className='appointments__detail'>
                            <div className='detail'>
                                <h4 className='detail__title'>Mascota</h4>
                                <p><strong>Nombre: </strong> {appointment.petName}</p>
                                <p><strong>Edad: </strong> {appointment.petAge}</p>
                            </div>
                            <div className='detail'>
                                <h4 className='detail__title'>Dueño</h4>
                                <p><strong>Nombre: </strong> {appointment.owner}</p>
                            </div>
                            <div className='detail'>
                                <h4 className='detail__title'>Cita</h4>
                                <p><strong>Fecha: </strong> {appointment.date}</p>
                                <p><strong>Hora: </strong> {appointment.time}</p>
                            </div>
                        </div>
                        <div className='appointments__detail_symptoms'>
                            <p><strong>Sintomas: </strong> {appointment.symptoms}</p>
                        </div>
                        <div className='buttons'>
                            <button className='button__confirm'>Confirmar</button>
                            <button
                                className='button__edit'
                                onClick={() => onEdit(appointment)}>Editar</button>
                            <button
                                className='button__delete'
                                onClick={() => onRemove(appointment.id)}>Eliminar</button>
                        </div>
                    </div>
                })}
            </article>
        </section>
    )
}

export default AppointmentsList