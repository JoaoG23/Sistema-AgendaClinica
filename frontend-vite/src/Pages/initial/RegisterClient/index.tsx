import { Formulario } from "./Formulario";

export const Registrar: React.FC = () => {
  return (
    <main className="grid  grid-cols-1 md:grid-cols-1 lg:grid-cols-4">
      <section className="bg-purple-600 lg:col-span-3"></section>
      <section className="h-screen flex justify-center items-center bg-gray-50">
        <section className="w-5/6">
          <h3 className="text-3xl font-bold text-gray-500 text-center">
            Registre-se cliente
          </h3>
          <h5 className="text-gray-500 text-center">
            Crie o seu cadastro aqui cliente
          </h5>
          <Formulario />
        </section>
      </section>
    </main>
  );
};
