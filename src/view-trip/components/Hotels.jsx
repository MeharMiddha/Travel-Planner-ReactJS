import React from 'react'

function Hotels({ trip }) {
  return (
    <div>
        <h2 className='font-bold text-xl mt-5'>Hotel Recommendation</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {trip?.tripData?.hotel.map((item,index)=>(
                <div>
                    <img src="/placeholder.jpg" className='rounded-xl' alt="" />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Hotels