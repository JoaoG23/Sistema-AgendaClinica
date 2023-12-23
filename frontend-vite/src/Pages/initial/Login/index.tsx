import { Formulario } from "./Formulario";

export const Login: React.FC = () => {
  return (
    <main className="grid  sm:md:grid-cols-1 lg:grid-cols-4">
      <section className="bg-purple-600 lg:col-span-3"></section>
      <section className="h-screen flex justify-center items-center bg-gray-50">
        <section className="w-5/6">
          <h3 className="text-3xl font-bold text-gray-500 text-center">
            Login
          </h3>
          <h5 className="text-gray-500 text-center">
            Acesse o seu cadastro aqui
          </h5>
          <Formulario />
        </section>
      </section>
    </main>
  );
};
