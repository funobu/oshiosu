import { NextPage } from "next";
import { useForm } from "react-hook-form";

type Form = {
  email: string;
  password: string;
};

const failure = (response: any) => {
  console.log(response);
};

const Login: NextPage = () => {
  const { register, handleSubmit } = useForm<Form>();
  const onSubmit = (data: Form) => {
    getSession(data);
  };

  const getSession = (data: Form) => {
    fetch("http://localhost:8000/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    }).then(
      function (response) {
        console.log(response);
      },
      function (error) {
        alert(error);
      }
    );
  };

  const getUser = () => {
    fetch("http://localhost:8000/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then(
      function (response) {
        alert(response);
      },
      function (error) {
        alert(error);
      }
    );
  };

  const FormInput = ({
    type,
    placeholder,
  }: {
    type: keyof Form;
    placeholder: string;
  }) => {
    return (
      <input
        type={type}
        {...register(type)}
        placeholder={placeholder}
        className="block mx-auto w-full max-w-lg bg-white rounded-2xl shadow-lg outline-none px-8 py-4 mb-8"
      />
    );
  };

  return (
    <div className="container mx-auto min-h-screen">
      <main>
        <h2 className="text-3xl text-center pt-48">Login to OcOsu</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-14">
          <FormInput type="email" placeholder="メールアドレスを入力" />
          <FormInput type="password" placeholder="パスワードを入力" />
          <button
            type="submit"
            className="block mx-auto mt-14 font-semibold bg-yellow-400 text-white px-16 py-3 rounded-xl shadow-lg"
          >
            ログイン
          </button>
        </form>
        <button onClick={getUser}>取得</button>
      </main>
    </div>
  );
};

export default Login;
