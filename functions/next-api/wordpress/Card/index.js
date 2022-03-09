// import Head from "next/head";
// import Link from "next/link";
// import { gql } from "@apollo/client";
// import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

// import styles from "../styles/Home.module.css";

// export default function Home({ page, posts }) {
//   const { heading, image, footer } = posts;
//   const { title, description } = page;

//   console.log(posts);
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>{title}</title>
//         <meta name="description" content={description} />
//         <link rel="icon" href="/favicon.ico" />
//         <script src="https://cdn.tailwindcss.com"></script>
//       </Head>

//       <main className={styles.main}>
//         <h1 className={styles.title}>{heading}</h1>

//         <p className={styles.description}>{heading}</p>

//         <ul className={styles.grid}>
//           {posts &&
//             posts.length > 0 &&
//             posts.map((post) => {
//               return (
//                 <div className={styles.numba1}>
//                   <div
//                     className={`${styles.innyoutty}  max-w-sm rounded overflow-hidden shadow-lg`}
//                   >
//                     <img
//                       className={`${styles.notHathaway}  rounded-full`}
//                       src={post.card.image}
//                     />
//                     <div className="px-6 py-4">
//                       <div
//                         style={{ color: "white" }}
//                         className="font-bold text-xl,"
//                       >
//                         {post.card.heading}
//                       </div>
//                       <p style={{ color: "white" }} className="text-xs">
//                         {post.card.footer}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}

//           {!posts ||
//             (posts.length === 0 && (
//               <li>
//                 <p>Oops, no posts found!</p>
//               </li>
//             ))}
//         </ul>
//       </main>
//     </div>
//   );
// }

// export async function getStaticProps() {
//   const client = new ApolloClient({
//     link: new HttpLink({
//       uri: process.env.GRAPH,
//     }),
//     cache: new InMemoryCache(),
//   });

//   const data = await client.query({
//     query: gql`
//       query posts {
//         generalSettings {
//           title
//         }

//         posts {
//           edges {
//             node {
//               slug
//               card {
//                 footer
//                 fieldGroupName
//                 heading
//                 image
//               }
//             }
//           }
//         }
//       }
//     `,
//   });
//   console.log(data);

//   const posts = data?.data.posts.edges
//     .map(({ node }) => node)
//     .map((post) => {
//       return {
//         ...post,
//         path: `/posts/${post.slug}`,
//       };
//     });

//   const page = {
//     ...data?.data.generalSettings,
//   };

//   return {
//     props: {
//       page,
//       posts,
//     },
//   };
// }
