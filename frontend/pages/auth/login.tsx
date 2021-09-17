import { NextPage } from "next";
import { useForm } from "react-hook-form";

type Props = {

};

type Post = {
    email: string;
    password: string;
};





const failure = (response: any) => {
    console.log(response);
}

const Login: NextPage<Props> = () => {
    const { register, handleSubmit } = useForm<Post>();
    const onSubmit = (data: Post) => {
        getSession(data)
    };

    const getSession = (data: Post) => {
        fetch('http://localhost:8000/login', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                email: data.email,
                password: data.password,
            })
        }).then(function (response) {
            console.log(response)
        }, function (error) {
            alert(error)
        });
    }

    const getUser = () => {
        fetch('http://localhost:8000/user', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }).then(function (response) {
            alert(response)
        }, function (error) {
            alert(error)
        });
    }

    return (
        <div className="container mx-auto relative h-screen">
            <main className="h-full">
                <h2 className="text-3xl text-center pt-48">Googleログイン</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register("email")}
                    />
                    <input {...register("password")} />
                    <input type="submit" />
                </form>
                <button onClick={getUser}>取得</button>
            </main>
        </div>
    );
};

export default Login;
