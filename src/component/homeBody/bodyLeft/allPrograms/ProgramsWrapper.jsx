import React from 'react'
import ProgramsCard from './programsCard/ProgramsCard'
import { ProgramsData } from '../../../allInfo/ProgramsData'

function ProgramsWrapper() {
  return (
    <>
     <div className="programs-card-wrapper" id='AllPrograms'>
            <h4 className='text-2'>Programs</h4>
            <div className="programs-cards">
                {   
                ProgramsData.map((item)=> (
                    <ProgramsCard 
                    key={item.id} 
                    id = {item.id}
                    name={item.name} 
                    buttonText = {item.buttonText}
                    />
                )) 
                }
            </div>
        </div>
    </>
  )
}

export default ProgramsWrapper