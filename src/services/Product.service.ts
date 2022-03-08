import httpReq from "./http.services";

class ProductService {
  async getAllProducts(): Promise<IProduct[]> {
    const { data } = await httpReq.get("/product");
    return data;
  }
}

export default new ProductService();
