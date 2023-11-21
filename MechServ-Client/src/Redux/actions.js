import axios from "axios";

export const GET_SERVICES = "GET_SERVICES";



export const getServices = (service, order, direction) => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/services/search?orderBy=${order}&orderType=${direction}&keyWord=${service}`)
            const servicesList = response.data;
            dispatch({
                type: GET_SERVICES,
                payload: servicesList
            })
        } catch (error) {
            console.error("Error al obtener los servicios", error)
        }
    }
}