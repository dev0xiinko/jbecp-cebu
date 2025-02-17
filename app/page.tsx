import Image from "next/image"
import Link from "next/link"
import LogoMarquee from "@/components/Logo-marquee"

export default function Home() {
  return (
    <main>
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src="/jbecp.png"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        {/*<div className="relative z-10 text-center text-white mt-16">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Site</h1>
          <p className="text-xl mb-8">Discover amazing things with us</p>
          <Link
            href="/about"
            className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300"
          >
            Learn More
          </Link>
        </div>*/}
        
      </section>
      <section>
          <LogoMarquee />
      </section>
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src="/TRADE_bg(1).png"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        {<div className="relative z-10 text-center text-white mt-16">
          <h1 className="text-5xl font-bold mb-4">A student-led organization.</h1>
          <p className="text-xl mb-8">Discover amazing things with us</p>
          <Link
            href="/about"
            className="bg-[#fdd10a] text-lg font-bold text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition duration-300"
          >
            Join Us
          </Link>
        </div>}
        <h2 className="z-10">
        </h2>
      </section>
      {/*<section
        className="relative h-screen flex items-center justify-center bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/2.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20 backdrop:filter backdrop-blur-sm"></div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-blue-0">Welcome to our community.</h2>
          <p className="text-xl mb-8">
            A community of 100+ talented individuals.
          </p>
          <Link
            href="/explore"
            className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300"
          >
            Start Exploring
          </Link>
        </div>
      </section>*/}
     {/* <section>
        <div className="flex justify-center p-4">
          <h2 className="text-white text-3xl font-bold">
              Community Members
          </h2>
        </div>
        <AnimatedTooltipPreview />
      </section>
      */}
    </main>
  )
}

