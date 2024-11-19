import React from 'react'
import Image from "next/image"


export default function Herosection() {
    return (
        <>
        <div className="flex justify-center">

        <div className="w-[80%]">
            <h1 className="text-center mt-20 text-3xl font-bold text-blue-600 mb-4">Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur Developing Billion-Dollar Valued Developers and Solopreneurs</h1>
            <p className="text-center text-lg">The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other team members.</p>
        </div>
        </div>
        <div className="flex m-5 gap-4 flex-col lg:justify-evenly lg:flex-row">
        <Image
            src="/1.jpg"
            alt="Window icon"
            width={400}
            height={400}
          />
            <Image
            src="/2.jpg"
            alt="Window icon"
            width={400}
            height={400}
          />
            <Image
            src="/3.jpg"
            alt="Window icon"
            width={400}
            height={400}
          />
        </div>
        </>
    )
}
