import { useForm } from "react-hook-form";

interface ILoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const { handleSubmit, register } = useForm<ILoginForm>();

  const handleLogin = (data: ILoginForm) => {
    console.log(data);
  };

  return (
    <div>
      <form
        className="bg-slate-300 p-2 my-2"
        onSubmit={handleSubmit(handleLogin)}
      >
        <input
          type="email"
          {...register("email")}
          placeholder="Email"
          className="block my-1"
        />
        <input
          type="password"
          {...register("password")}
          placeholder="Password"
          className="block my-1"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
