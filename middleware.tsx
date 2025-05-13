// middleware.ts
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/"], // hanya "/" yang public
});

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"], // menerapkan middleware ke semua route kecuali resource statis
};
