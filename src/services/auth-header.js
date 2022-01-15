
const authHeader = () => {
  const token = localStorage.getItem('token')
  if(token) {
      return {
          Authorization: "Bearer " + token
      }
  }
  return {
      
  }
}

export default authHeader
