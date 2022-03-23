import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";


export const autoParkService = {
    getAll: () => axiosService.get(urls.auto_parks).then(value => value.data),
    create: (autoPark) => axiosService.post(`${urls.auto_parks}/`, autoPark).then(value => value.data),
    update: (id, newAutoPark) => axiosService.patch(`${urls.auto_parks}/${id}/`,newAutoPark),
    deleteById: (id) => axiosService.delete(`${urls.auto_parks}/${id}/`).then(value => value.data)
}