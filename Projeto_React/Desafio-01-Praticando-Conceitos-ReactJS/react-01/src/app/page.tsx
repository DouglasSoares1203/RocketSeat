import { Header } from "@/components/Header";
import { Task } from "@/components/Task";


const tasks = [{

}]

export default function Home() {
  return (
    <>
      <Header />
      <div className=" block max-w-3xl m-auto mt-0 ">
        <main>
          <Task />
        </main>
      </div>
    </>
  );
}
