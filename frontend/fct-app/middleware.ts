import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/auth",
  },
});

export const config = {
  matcher: [
    "/main/:path*",
    "/chatpage/users/:path*",
    "/paidpage",
    "/teampage/:path*",
  ],
};
