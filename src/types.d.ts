interface IProduct {
  _id?: string;
  name: string;
  category: string;
  description: string;
  image: string;
  price: number;
  store: string;
}

interface ILoginData {
  email: string;
  password: string;
}

interface IAuthUser {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  token: string;
}
