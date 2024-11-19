import Image from "next/image"


export default function NavBar(){
    return(
        <div className="bg-blue-800 flex justify-evenly px-5 text-white h-20 items-center">
            <div className="lg:mt-24 mt-20 ml-10">
            <Image
            src="/logo.png"
            alt="Window icon"
            width={100}
            height={100}
          />
            </div>
            <div>
                <h1 className="text-2xl font-bold text-blue-200 hidden lg:block">Tuition Free Education Program on Latest Technologies</h1>
            </div>
            <ul className="lg:flex lg:gap-5 text-xl hidden ">
                <li>Home</li>
                <li>Apply</li>
                <li>Jobs</li>
                <li>Result</li>
                <li>Courses</li>
            </ul>
        </div>
    )
}