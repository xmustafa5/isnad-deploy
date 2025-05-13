import { chain } from "@/middlewares/chain";
import { i18Middleware } from "@/middlewares/i18n.middleware";
import { authMiddleware } from "@/middlewares/auth.middleware";

export default chain([i18Middleware, authMiddleware]);

// applies this middleware only to files in the app directory
export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
