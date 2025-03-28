import Image from "next/image";

interface UserCardProps {
    type: string;
    date?: string;
    count?: number;
}

const UserCard = ({ type, date = "2025/03/28", count = 12 }: UserCardProps) => {
    return (
        <div className="rounded-2xl odd:bg-purple even:bg-yellow p-4 flex-1 flex flex-col justify-between gap-4 text-center shadow-lg bg-white">
            <div className="flex justify-between items-center">
                <span>{date}</span>
                <Image src="/more.png" alt="More options" width={20} height={20} />
            </div>
            <h1>{count}</h1>
            <h2>{type}</h2>
        </div>
    );
};

export default UserCard;