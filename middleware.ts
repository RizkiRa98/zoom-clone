import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Create protected route to log in first
const protectedRoutes = createRouteMatcher([
  "/",
  "/upcoming",
  "/previous",
  "/recording",
  "/personal-room",
  "/meeting(.*)", // match all the meeting routes
]);

export default clerkMiddleware((auth, req) => {
  if (protectedRoutes(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/(api|trpc)(.*)"],
};
