import StickyHeader from "~/components/sticky-header";
import Tab from "~/components/tab";
import Foryou from "./for-you";

export default function Home() {
    return (
        <>


            <Tab activeTab="for-you">
                <StickyHeader title="Anasayfa">
                    <Tab.Items>

                        <Tab.Item id="for-you ">
                            Sana Özel
                        </Tab.Item>

                        <Tab.Item id="followings">
                            Takip Edilenler
                        </Tab.Item>


                    </Tab.Items>
                </StickyHeader>
                <Tab.Content id="for-you">
                    <Foryou />
                </Tab.Content>

                <Tab.Content id="followings">
                    2.content
                </Tab.Content>

            </Tab>

        </>
    )
}