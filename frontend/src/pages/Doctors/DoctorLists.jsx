/* eslint-disable no-unused-vars */
import React from 'react'
import { doctors } from './../../assets/data/doctors'
import  DoctorCard  from '../../components/Doctors/DoctorCard'

 const DoctorLists = () => {
  return (
    <div className='grid grid-cols-l sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
      {doctors.map(doctor => (
        <DoctorCard key={doctor.id} doctor={doctor} />
        
      ))}
    </div>
  )
}
export default DoctorLists;
 