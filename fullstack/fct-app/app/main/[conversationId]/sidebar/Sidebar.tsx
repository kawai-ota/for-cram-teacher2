import getCurrentUser from "@/app/chatpage/actions/getCurrentUser";
import DesktopSidebar from "@/app/chatpage/components/sidebar/DesktopSidebar";

async function Sidebar({ children }: { children: React.ReactNode }) {
  const currentUser = await getCurrentUser();
  return (
    <div className="h-full">
      <DesktopSidebar currentUser={currentUser!} />
      <main className="lg:pl-20 h-full">{children}</main>
    </div>
  );
}
export default Sidebar;
