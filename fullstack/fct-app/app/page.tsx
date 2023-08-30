import AuthForm from "./auth/AuthForm";

const Auth = () => {
  return (
    <div
      className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#FBF7F1" }}
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="mt-7 text-center text-5xl font-bold tracking-tight text-gray-900">
          For Cram Teacher
        </h1>
        <h2 className="mt-5 text-center text-2xl tracking-tight text-gray-700">
          ~先生方に活躍を、輝ける場所を~
        </h2>
      </div>
      <AuthForm />
    </div>
  );
};

export default Auth;
