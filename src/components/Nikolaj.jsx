import heroImg from "../assets/hero.png";
import reactImg from "../assets/react.svg";

export default function Nikolaj(){
    return(
     <>
        <div class = "max-w-screen">
            <div class = "bg-black-300 flex items-center justify-center">   
                <h1 class ="text-red-600 text-3xl">Nikolaj</h1>
            </div>
            <div class = "flex flex-row items-center justify-center flex-wrap">
                <img src={heroImg} />
                <img src={heroImg} />
                <img src={heroImg} />
                <img src={heroImg} />
                <img src={heroImg} />
                <img src={heroImg} />
            </div>
        </div>
    </>
    )
}