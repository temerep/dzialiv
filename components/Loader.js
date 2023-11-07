import Image from "next/image"
import { BeatLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className="absolute t-0 l-0 w-full h-full bg-stone-900 z-50">
      <Image
      src="/logo.webp"
      width={100}
      height={100}
      alt=""
      style={{
        position: "absolute",
        top: "45%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 50,
      }}
      />
      <BeatLoader
        color="#36d7b7"
        loading={true}
        cssOverride={{ position: "absolute", left: "50%", top: "55%", transform: "translate(-50%, -50%)"}}
      />
    </div>
  );
}
export { Loader };