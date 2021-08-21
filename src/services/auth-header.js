
const authHeader = () => {
  const user =  JSON.parse(sessionStorage.getItem('user'))
  if(user && user.accessToken) {
      return {
          Authorization: "Bearer " + (user.accessToken)
      }
  }
  return {
      
  }
}

export default authHeader
