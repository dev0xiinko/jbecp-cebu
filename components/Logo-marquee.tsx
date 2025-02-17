import Image from "next/image"

const logos = [
  { src: "/bybit.png", alt: "Logo 1" },
  { src: "/bybit.png", alt: "Logo 2" },
  { src: "/bybit.png", alt: "Logo 3" },
  { src: "/bybit.png", alt: "Logo 4" },
  { src: "/bybit.png", alt: "Logo 5" },
  { src: "/bybit.png", alt: "Logo 6" },
]

const LogoMarquee = () => {
  return (
    <div className="bg-blue-500 py-8 overflow-hidden backdrop-filter backdrop-blur-lg border-y-4 border-black">
      <div className="flex animate-marquee">
        {logos.concat(logos).map((logo, index) => (
          <div key={index} className="flex-shrink-0 w-48 mx-8">
            <Image src={logo.src || "/bybit.png"} alt={logo.alt} width={100} height={50} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default LogoMarquee

