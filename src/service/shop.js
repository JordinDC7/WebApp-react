import axios from "axios";


const rockShowService = {
    developement: "https://localhost:7286/api",
    production: "https://oracleillusions.azurewebsites.net/api"
}

const getAll = () => {
    const config = {
        method: "GET",
        url: `${rockShowService.production}/RockShow`,
        withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type": "application/json"},
    };
    return axios(config);
}


const rockShow = {getAll};
export default rockShow;