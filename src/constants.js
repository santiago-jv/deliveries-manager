const initialState = {
    authorized:sessionStorage.getItem('user')?true:false,
    user:JSON.parse(sessionStorage.getItem('user')),
};

const activeStyles = {
    color:"#ffa460"
}
const theme = {
    primaryTextColor:"#333",
    secondaryColor:"#ffa460"
}

const hours = [
    "07:00","08:00","09:00","10:00","11:00","12:00", "13:00", "14:00","15:00","16:00","17:00","18:00","19:00"
]

export { initialState, theme, activeStyles,hours};
