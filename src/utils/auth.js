export const checkRole = (role) => {
  try {
    const userStr = localStorage.getItem('userInfo')
    const user = JSON.parse(userStr)
    const currentRoles = user.auth.split(',')
    console.log(currentRoles)
    if (currentRoles.includes(role)) {
      return true;
    }
  } catch (err) {
  }
  return false;
}