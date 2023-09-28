import Link from "next/link";

export default function ProductLayout({ children }) {
  return (
    <>
      <aside className="hidden sm:block sticky overflow-hidden left-0 top-34 w-96 bg-white border-r border-stone-300">
        <div className="flex flex-col">

          <button className="text-white bg-emerald-700">
          <Link href="/offer/products">
            <div className="flex items-center justify-between h-12 px-3 text-xl font-bold">
              <span className="truncate">Продукція</span>
            </div>
            </Link>
            </button>

          <button className="group border-b border-stone-300 bg-white focus:outline-none">
            <div className="flex items-center justify-between h-12 px-3 font-semibold hover:bg-stone-200 group-focus:bg-stone-200">
              <span className="truncate">Зернові</span>
              <svg className="h-5 w-5 duration-300 group-focus:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="max-h-0 overflow-hidden duration-300 group-focus:max-h-full">
              <Link className="flex items-center h-8 px-4 text-sm hover:bg-stone-200" href="/offer/item">
                - Пшениця
              </Link>
              <Link className="flex items-center h-8 px-4 text-sm hover:bg-stone-200" href="/offer/item">
                - Кукурудза
              </Link>
              <Link className="flex items-center h-8 px-4 text-sm hover:bg-stone-200" href="#">
                - Овес
              </Link>
              <Link className="flex items-center h-8 px-4 text-sm hover:bg-stone-200" href="#">
                - Просо
              </Link>
              <Link className="flex items-center h-8 px-4 text-sm hover:bg-stone-200" href="#">
                - Ячмінь
              </Link>
              <Link className="flex items-center h-8 px-4 text-sm hover:bg-stone-200" href="#">
                - Гречка
              </Link>
            </div>
          </button>
          <button className="group border-b border-stone-300 bg-white focus:outline-none">
            <div className="flex items-center justify-between h-12 px-3 font-semibold hover:bg-stone-200 group-focus:bg-stone-200">
              <span className="truncate">Технічні</span>
              <svg className="h-5 w-5 duration-300 group-focus:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="max-h-0 overflow-hidden duration-300 group-focus:max-h-40">
              <a className="flex items-center h-8 px-4 text-sm hover:bg-stone-200" href="#">
                - Ріпак
              </a>
              <a className="flex items-center h-8 px-4 text-sm hover:bg-stone-200" href="#">
                - Соняшник
              </a>
            </div>
          </button>
          <button className="group border-b border-stone-300 bg-white">
            <div className="flex items-center justify-between h-12 px-3 font-semibold hover:bg-stone-200 group-focus:bg-stone-200">
              <span className="truncate">Бобові</span>
              <svg className="h-5 w-5 duration-300 group-focus:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="max-h-0 overflow-hidden duration-300 group-focus:max-h-40">
              <a className="flex items-center h-8 px-4 text-sm hover:bg-stone-200" href="#">
                - Горох
              </a>
              <a className="flex items-center h-8 px-4 text-sm hover:bg-stone-200" href="#">
                - Боби
              </a>
              <a className="flex items-center h-8 px-4 text-sm hover:bg-stone-200" href="#">
                - Нут
              </a>
              <a className="flex items-center h-8 px-4 text-sm hover:bg-stone-200" href="#">
                - Соя
              </a>
            </div>
          </button>
          <button className="group border-b border-stone-300 bg-white focus:outline-none">
            <div className="flex items-center justify-between h-12 px-3 font-semibold hover:bg-stone-200 group-focus:bg-stone-200">
              <span className="truncate">Овочі свіжі</span>
              <svg className="h-5 w-5 duration-300 group-focus:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="max-h-0 overflow-hidden duration-300 group-focus:max-h-40">
              <a className="flex items-center h-8 px-4 text-sm hover:bg-stone-200" href="#">
                - Цибуля ріпчата
              </a>
              <a className="flex items-center h-8 px-4 text-sm hover:bg-stone-200" href="#">
                - Буряк
              </a>
            </div>
          </button>
          <button className="group border-b border-stone-300 bg-white focus:outline-none">
            <div className="flex items-center justify-between h-12 px-3 font-semibold hover:bg-stone-200 group-focus:bg-stone-200">
              <span className="truncate">Фрукти свіжі</span>
              <svg className="h-5 w-5 duration-300 group-focus:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="max-h-0 overflow-hidden duration-300 group-focus:max-h-40">
              <a className="flex items-center h-8 px-4 text-sm hover:bg-stone-200" href="#">
                - Яблука
              </a>
              <a className="flex items-center h-8 px-4 text-sm hover:bg-stone-200" href="#">
                - Груша
              </a>
            </div>
          </button>
          <button className="group border-b border-stone-300 bg-white focus:outline-none">
            <div className="flex items-center justify-between h-12 px-3 font-semibold hover:bg-stone-200 group-focus:bg-stone-200">
              <span className="truncate">Переробка</span>
              <svg className="h-5 w-5 duration-300 group-focus:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="max-h-0 overflow-hidden duration-300 group-focus:max-h-40">
              <a className="flex items-center h-8 px-4 text-sm hover:bg-stone-200" href="#">
                - Пелети соломʼяні
              </a>
            </div>
          </button>
          <button className="text-white bg-emerald-700">
          <Link href="/offer/services">
            <div className="flex items-center justify-between h-12 px-3 text-xl font-bold">
              <span className="truncate">Послуги</span>
            </div>
          </Link>
          </button>
          <button className="group border-b border-stone-300 bg-white focus:outline-none">
            <div className="flex items-center justify-between h-12 px-3 font-semibold hover:bg-stone-200 group-focus:bg-stone-200">
              <span className="truncate">Очищення/сушіння зерна</span>
            </div>
          </button>
          <button className="group border-b border-stone-300 bg-white focus:outline-none">
            <div className="flex items-center justify-between h-12 px-3 font-semibold hover:bg-stone-200 group-focus:bg-stone-200">
              <span className="truncate">Телескопічний навантажувач</span>
            </div>
          </button>
          <button className="group border-b border-stone-300 bg-white focus:outline-none">
            <div className="flex items-center justify-between h-12 px-3 font-semibold hover:bg-stone-200 group-focus:bg-stone-200">
              <span className="truncate">Зважування (до 80 т.)</span>
            </div>
          </button>
        </div>
      </aside>
      {children}
    </>
  );
}
