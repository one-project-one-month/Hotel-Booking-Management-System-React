import { type Room, rooms } from "@/mock/rooms.ts";
import PopularRoom from "@/features/home/components/PopularRoom.tsx";
<<<<<<< HEAD
import PopularRoomCarousel from "./components/PopularRoomCarousel";


export default function Home() {
  return (
      <>
           <PopularRoomCarousel />
           <div className={"container px-4 mx-auto"}>
                <div className={"grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg"}>
                    {rooms.slice(0,3).map((room: Room,index:number) => (
                        <PopularRoom room={room} key={index}/>
                    ))}
                </div>
           </div>
      </>
  )

=======
import Login from "../auth/Login";

export default function Home() {
  return (
    <>
      <h1 className={"text-center py-5"}>Home Page</h1>
      {/* <div className={"container px-4 mx-auto"}>
        <div
          className={"grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg"}
        >
          {rooms.slice(0, 3).map((room: Room, index: number) => (
            <PopularRoom room={room} key={index} />
          ))}
        </div>
      </div> */}
      <Login/>
    </>
  );
>>>>>>> 091b505 (add login,signup form and room details page)
}
