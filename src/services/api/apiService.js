export class ApiService {
  constructor(axios) {
    this._axios = axios;
    this._axios.interceptors.request.use(async (cfg) => {
      const token = sessionStorage.getItem("token");
      if (token) {
        cfg.headers["Authorization"] = "Bearer " + token;
      }
      return {
        ...cfg,
        withCredentials: true,
        headers: {
            "Accept":"*/*",
        //   "X-Accept-Cookie": true,
          ...cfg.headers,
        },
      };
    });
  }

  async getToken(username, password) {
    const resp = await this._axios.post(
      "/api/login/getToken",
      {
        username: username,
        password: password,
      },
      {
        validateStatus: (status) => status === 200 || status === 400,
      }
    );    
    sessionStorage.setItem("token", resp.data)
  }
  async getPrize(hccid) {
    const resp = await this._axios.get(
      `/api/prize/getPrize/${hccid}`,
       {
        validateStatus: (status) => status === 200 || status === 400,
      }
    );    
    return resp.data
  }
  async postUser(hccid,fullname) {
    const resp = await this._axios.post(
      `/api/users/register/`,
      {
        "hccId":parseInt(hccid),
        "fullname":fullname    
      }
      ,
       {
        validateStatus: (status) => status === 200 || status === 400,
      }
    );    
    return resp.data
  }
  async getRankList() {
    const resp = await this._axios.get(
      `/api/prize/getAllRank/`,
       {
        validateStatus: (status) => status === 200 || status === 400,
      }
    );    
    return resp.data
  }
}
