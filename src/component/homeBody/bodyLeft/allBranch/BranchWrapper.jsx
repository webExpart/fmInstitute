import React from 'react'
import BranchCard from './branchCard/BranchCard'
import { BranchData } from '../../../allInfo/BranchData'

function BranchWrapper() {
  return (
        <div className="branchCard-wrapper" id='Branch' >
            <h4 className='text-2'>Our Branch</h4>
            <div className="branch-cards">
            {   
                BranchData.map((item)=> (
                    <BranchCard key={item.id} branchName={item.branchName} phone = {item.phone} gmail = {item.gmail} address = {item.address}/>
                )) 
                }
            </div>
        </div>
  )
}

export default BranchWrapper