import Sidebar from "../components/sidebar/Sidebar";
import ConversationList from "./components/ConversationList";

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Sidebar>
      <ConversationList initialItems={[]} />
      <div className="h-full">{children}</div>
    </Sidebar>
  );
}
