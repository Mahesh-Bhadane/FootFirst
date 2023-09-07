import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/_axiom/logs",
    "/api/product",
    "/products(.*)",
    "/cart(.*)",
    "/product(.*)",
    "/checkout(.*)"
  ]
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)"]
};
