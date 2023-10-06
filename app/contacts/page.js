export default function Contacts() {
  return (
    <>
      <div className="aboslute flex justify-center items-center w-screen h-screen/3 bg-emerald-300">
        <div className="container mx-auto my-4 px-4 lg:px-20">
          <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl bg-white">
            <div className="flex">
              <h1 className="font-bold text-5xl">
                Звʼяжіться з нами
              </h1>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" placeholder="Ваше імʼя" />
              <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" placeholder="Ваше прізвище" />
              <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="email" placeholder="E-mail" />
              <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" placeholder="Номер телефону" />
            </div>
            <div className="my-4">
              <textarea placeholder="Ваше повідомлення" className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <div className="my-2 w-1/2 lg:w-1/4">
              <button
                className="uppercase text-sm font-bold tracking-wide bg-emerald-600 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
              >
                Відправити
              </button>
            </div>
          </div>

          <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-5 ml-auto bg-emerald-700 rounded-2xl">
            <div className="flex flex-col text-white">
              <h1 className="font-bold text-4xl my-4">Де ми знаходимось?</h1>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt arcu diam, eu feugiat felis fermentum id. Curabitur vitae nibh viverra, auctor turpis sed, scelerisque ex.
              </p>

              <div className="flex my-4 w-2/3 lg:w-1/2">
                <div className="flex flex-col">
                  <i className="fas fa-map-marker-alt pt-2 pr-2" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl">Main Office</h2>
                  <p className="text-gray-400">5555 Tailwind RD, Pleasant Grove, UT 73533</p>
                </div>
              </div>

              <div className="flex my-4 w-2/3 lg:w-1/2">
                <div className="flex flex-col">
                  <i className="fas fa-phone-alt pt-2 pr-2" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl">Call Us</h2>
                  <p className="text-gray-400">Tel: xxx-xxx-xxx</p>
                  <p className="text-gray-400">Fax: xxx-xxx-xxx</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
