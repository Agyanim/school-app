import React from 'react'
interface paramsType{
  params:{
    userId:string
  }
}
const userProfilePage = ({params}:paramsType) => {
  
  return (
    <div>userProfilePage{params.userId}</div>
  )
}

export default userProfilePage