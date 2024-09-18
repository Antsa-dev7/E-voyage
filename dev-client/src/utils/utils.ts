
export const authenticateApi = () => {
    const token = localStorage.getItem('token');
    if (token) {
        // http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        return {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }
    } 
}

export const getCurrentFullName = (user: any) => {
    return `${user.get('firstName')} ${user.get('lastName')}`
}