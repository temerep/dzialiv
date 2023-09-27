import { HomeGrid } from "@/components/HomeGrid";

export default function Services() {
  const services = [
    {
      title: "Очищення/cушіння зерна",
      img: "/placeholder.png",
    },
    {
      title: "Телескопічний навантажувач",
      img: "/placeholder.png",
    },
    {
      title: "Зважування (до 80т.)",
      img: "/placeholder.png",
    }
  ];
  return (
    <>
      <main className="flex flex-col items-center w-full p-5 bg-stone-200">
        <div className="flex flex-col">
        <h1 className="text-3xl md:text-5xl font-bold mb-5 pl-5 pt-5">Послуги</h1>
        <HomeGrid products={services}/>
        </div>
      </main>
    </>
  )
}