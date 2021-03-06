import httpReq from "./http.services";

class AuthService {
  async login(payload: ILoginData): Promise<IAuthUser> {
    const { data } = await httpReq.post("/auth/login", payload);
    return data;
  }
}

export default new AuthService();
