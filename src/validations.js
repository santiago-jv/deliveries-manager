

const validateDataInSignUp = (data) => {
  if (data.password === data.repeatedPassword ) {
    return true;
  }
  return false;
};


const validateDataInFormChangePassword = (state,data) => {
  if (data.currentPassword === state.credentials.password ) {
    return true;
  }
  return false;
};


export { validateDataInSignUp,validateDataInFormChangePassword };
