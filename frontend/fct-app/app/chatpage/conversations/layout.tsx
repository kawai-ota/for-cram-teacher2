import Sidebar from "../components/sidebar/Sidebar";
import ConversationList from "./components/ConversationList";
import getConversations from "../actions/getConversations";
import Header from "@/app/components/Header";

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversations();
  return (
    <Sidebar>
      <div className="h-full">
        {children}
        <ConversationList initialItems={conversations} />
      </div>
    </Sidebar>
  );
}