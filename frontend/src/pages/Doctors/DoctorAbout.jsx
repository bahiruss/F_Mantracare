/* eslint-disable no-unused-vars */
import React from 'react'
import { formateDate } from '../../utils/formateDate'


const DoctorAbout = () => {
// const {userId, userName, password, email, name, dateOfBirth, phoneNumber, registration, profilePic, therapistId, role, address, specialization, experience, rating };
  return (
    <div>
        <div>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex itmes-center gap-2 '>
                About
                <span className="text-irisBlueColor font-bold text-[24px] leading-9">
                    {/* {name} */}
                </span>
            </h3>
            <p className="text__para">
                Hi everyone again am bahiru, A Therapist graduated from addis ababa university at sefere selam, i am qualified therapist with great reference and i am ready to help you out with anything related to therephy and i hope you chose me. Thank you!!!
            </p>
        </div>

        <div className='mt-5'>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex itmes-center gap-2 '>
                Specialization
                <span className="text-irisBlueColor font-bold text-[24px] leading-9">
                    {/* {specialization} */}
                </span>
            </h3>
            <p className="text__para">
Professional therapist
</p>
        </div>

        


        <div className="mt-12">
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
                Education
            </h3>
            <ul className="pt-4 md:p-5">
                <li className="flex flex-col sm:flex-row sm:justify-between sm:itmes-end md:gap-5 mb-[30px]">
                    <div>
<span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
{formateDate("07-04-2014")} - {formateDate("12-04-2016")}
</span>

<p className='text-[16px] leading-6 font-medium text-textColor'>PHD in Surgeon</p>
                    </div>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>Yekatit 22, Addis Ababa</p>

                    
                </li>
                <li className="flex flex-col sm:flex-row sm:justify-between sm:itmes-end md:gap-5 mb-[30px]">
                    <div>
<span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
{formateDate("12-04-2010")} - {formateDate("12-04-2015")}
</span>

<p className='text-[16px] leading-6 font-medium text-textColor'>PHD in Surgeon</p>
                    </div>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>Yekatit 22, Addis Ababa</p>

                    
                </li>

            </ul>
        </div>
<div className='mt-12'>
<h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
Experience
            </h3>
    
    <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
<li className="p-4 rounded bg-[#fff9ea]">
    <span className='text-yellowColor text-[15px] leading-6 font-semibold'>

    {formateDate("12-04-2010")} - {formateDate("12-04-2010")}

    </span>
    <p className='text-[16px] leading-6 font-medium text-textColor'>
        Sr. Therapy
    </p>
    <p className='text-[15px] leading-6 font-medium text-textColor'>
        Yekatit 22, Addis ababa
    </p>

</li>
    </ul>

    <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
<li className="p-4 rounded bg-[#fff9ea]">
    <span className='text-yellowColor text-[15px] leading-6 font-semibold'>

    {formateDate("12-04-2010")} - {formateDate("12-04-2010")}

    </span>
    <p className='text-[16px] leading-6 font-medium text-textColor'>
        Sr. Therapy
    </p>
    <p className='text-[15px] leading-6 font-medium text-textColor'>
        Yekatit 22, Addis ababa
    </p>

</li>
    </ul>
</div>

<div className="mt-12">
<h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
    Availability for live Session
    </h3>
<ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
<li className="p-4 rounded bg-[#fff9ea]">
    <span className='text-yellowColor text-[15px] leading-6 font-semibold'>

    

    </span>
    <p className='text-[16px] leading-6 font-medium text-textColor'>
       
    </p>
    <p className='text-[15px] leading-6 font-medium text-textColor'>
        Time is precious!!!
    </p>

</li>
    </ul>
    
</div>

    </div>
  )
}

export default DoctorAbout