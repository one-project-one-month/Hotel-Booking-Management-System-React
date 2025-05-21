import CardContainer from "@/components/card-container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Mail, Phone } from "lucide-react";

interface UserInfoCardProps {
    name: string;
    email: string;
    phone: string;
    profilePicture: string;
}

export default function UserInfoCard({ name, email, phone, profilePicture }: UserInfoCardProps) {
    return (
        <CardContainer >
            <div className="flex flex-col items-center gap-4 ">
                <Avatar className="w-24 h-24 overflow-hidden">
                    <AvatarImage
                        src={profilePicture}
                        alt="@user-profile"
                        className="object-cover w-full h-full"
                    />
                    <AvatarFallback>User</AvatarFallback>
                </Avatar>
                <section className="flex flex-col gap-2 w-full">
                    <div className="flex items-center justify-center gap-2">
                        <User className="text-gray-500 w-5 h-5" />
                        <h2 className="text-xl font-semibold">{name}</h2>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <Mail className="text-gray-500 w-5 h-5" />
                        <p className="text-gray-600">{email}</p>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <Phone className="text-gray-500 w-5 h-5" />
                        <p className="text-gray-600">{phone}</p>
                    </div>
                </section>
            </div>
        </CardContainer>
    )
}
