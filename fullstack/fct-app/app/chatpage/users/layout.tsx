import getUsers from "../actions/getUsers";

export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const users = await getUsers();
  return <div>{children}</div>;
}
