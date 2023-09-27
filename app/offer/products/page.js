import { HomeGrid } from "@/components/HomeGrid";

export default function Products() {
  const items = [
    {
      title: "Зернові",
      categories: ["Пшениця", "Кукурудза", "Просо", "Ячмінь", "Овес", "Гречка" ],
      img: "/photos/zernovi.jpg",
    },
    {
      title: "Технічні",
      categories: ["Ріпак", "Соняшник"],
      img: "/photos/tehnic.jpg",
    },
    {
      title: "Бобові",
      categories: ["Горох", "Нут", "Боби", "Соя"],
      img: "/photos/boby.jpg",
    },
    {
      title: "Овочі свіжі",
      categories: ["Цибуля ріпчата", "Буряк"],
      img: "/photos/ovochi.jpg",
    },
    {
      title: "Фрукти свіжі",
      categories: ["Яблука", "Груша"],
      img: "/photos/frukty.jpg",
    },
    {
      title: "Переробка",
      categories: ["Пелети соломʼяні"],
      img: "/photos/pererobka.jpg",
    }
  ];
  return (
    <>
      <main className="flex flex-col items-center w-full p-5 bg-stone-200">
        <div className="flex flex-col">
        <h1 className="text-3xl md:text-5xl font-bold mb-5 pl-5 pt-5">Продукція</h1>
        <HomeGrid products={items}/>
        </div>
      </main>
    </>
  )
}