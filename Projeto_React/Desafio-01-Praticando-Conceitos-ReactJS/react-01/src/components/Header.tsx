import Image from 'next/image';
import desafioTodoLogo from '../app/assets/desafio-todo-logo.svg';

export function Header() {
  return (
    <header className=" bg-gray-700 flex justify-center text-center p-20 py-0">
      <Image
        className=" h-12"
        src={desafioTodoLogo}
        alt="Logo do Desafio - Todo"
      />
    </header>
  );
}
