import Image from "next/image";

const UserCard = ({type}:{type:string}) => {
    return (
        <div className="rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow flex-1 p-4 w-full md:w-[130px] shadow-lg">
            <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">2025/03/31</span>
                <Image src="/more.png" alt="" width={20} height={20} />
            </div>
            <h1 className="text-2xl font-semibold my-4">40</h1>
            <h2 className="capitalize text-sm font-medium">{type}</h2>
        </div>
    )
}
export default UserCard;