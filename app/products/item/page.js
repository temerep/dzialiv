import Image from "next/image";

export default function Item() {
  return (
    <>
      <main className="flex min-h-[80vh] flex-col w-full p-5 bg-white">
        <div className="flex flex-col lg:flex-row space-x-5">
          <Image src="/placeholder.png" width={500} height={1000} alt="" />
          <div className="flex flex-col">
            <h1 className="text-5xl font-bold mb-5">Продукція</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a nunc eu turpis molestie blandit. Nulla facilisi. Nunc a porttitor sem, vitae hendrerit turpis. Pellentesque tincidunt
              rutrum enim sit amet dictum. Aenean semper pulvinar quam, quis porta est sollicitudin nec. Nunc a malesuada sapien. Nam suscipit mollis lorem vel accumsan. Morbi suscipit ultrices
              vestibulum. Fusce vulputate, mauris consectetur euismod euismod, arcu elit sollicitudin tortor, nec consectetur sapien augue sit amet augue. Maecenas egestas nulla a purus finibus
              sagittis. Mauris mattis mauris est, a accumsan nibh vehicula id. Phasellus metus lorem, interdum ullamcorper nulla eget, placerat pretium neque. Fusce maximus et lorem nec consequat.
              Aenean ornare at felis et vulputate. Phasellus dui ex, lacinia a hendrerit sit amet, rhoncus id enim. Suspendisse vulputate nisl elementum scelerisque feugiat. Nam congue efficitur
              pharetra. Aenean sit amet commodo nibh. Pellentesque dapibus faucibus sem. Fusce volutpat risus massa, ut auctor augue tempus sed. Donec id neque eget magna accumsan aliquam id at enim.
              Suspendisse sit amet felis lorem.{" "}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
