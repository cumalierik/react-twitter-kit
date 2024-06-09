import SidebarSection from "~/components/sidebarsection";
import { useAccount } from "~/store/auth/hooks";
import { whoFollowUsers } from "~/mock";
import Button from "~/components/button";
import UserCard from "~/components/user-card";


export default function WhoFollow() {

    const account = useAccount()

    return (
        <SidebarSection
            title="Kimi takip etmeli"
            more={`/connect_people?user_id=${account.id}`}
        >
            {whoFollowUsers.map(user => <UserCard user={user} key={user.id}/>)}
        </SidebarSection>
    )
}