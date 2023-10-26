//without a defined matcher, this one line applies next-auth
// to the entire project
export { default } from "next-auth/middleware";

// Applies next-auth only to matching routes - can be regex
// Ref: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
// export const config = { matcher: ["/joke", "/dashboard"] };

// import { withAuth } from "next-auth/middleware"

// // middleware is applied to all routes, use conditionals to select

// export default withAuth(
//   function middleware (req) {
//   },
//   {
//     callbacks: {
//       authorized: ({ req, token }) => {
//         if (
//           req.nextUrl.pathname.startsWith('/protected') &&
//           token === null
//         ) {
//           return false
//         }
//         return true
//       }
//     }
//   }
// )
