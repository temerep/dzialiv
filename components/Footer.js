import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-emerald-600">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="flex flex-col min-[1080px]:flex-row justify-between">
          <div className="flex flex-col mb-6 md:mb-0">
            <Link href="/" className="flex items-center mb-5">
              <h1 className="text-2xl font-bold ml-3 text-white">ФГ "Дзялів"</h1>
            </Link>
            <span className="text-sm text-white">
              © 2023{" "}
              <Link href="/" className="text-green-200">
                ФГ "Дзялів"
              </Link>
              . Всі права захищені.
            </span>
          </div>
          <div className="grid grid-cols-2 gap-12">
            <div className="text-white">
              <h2 className="mb-4 text-xl font-semibold text-white/70">Про нас</h2>
              <p className="">23163 Вінницька обл.</p>
              <p className="mb-4">с. Кам'яногірка, вул. Перемоги 3</p>
            </div>
            <div className="text-white">
              <h2 className="mb-4 text-xl font-semibold text-white/70">Контакти</h2>
              <p className="">Телефон: <a href="tel:+380000000000" className="underline underline-offset-4 decoration-green-300">+380000000000</a></p>
              <p className="">E-mail: <a href="mailto:info@dzialiv.vn.ua" className="underline underline-offset-4 decoration-green-300">dzialiv@gmail.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };