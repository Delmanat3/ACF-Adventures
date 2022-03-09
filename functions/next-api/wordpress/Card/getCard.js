// import {initializeNextApiApollo} from '@/lib/next-api/connector'

// export default async function getCards() {
//   // Check data values.


//   const apolloClient = initializeNextApiApollo()

//   return apolloClient
//   .query({
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
//   })
//     .then(
//       (response) =>{
      
//       const posts = response?.data.posts.edges
//       .map(({ node }) => node)
//       .map((post) => {
//         return {
//           ...post,
//           path: `/posts/${post.slug}`,
//         };
//       });
//       const page = {
//         ...response?.data.generalSettings,
//       };
//       return {
//         props: {
//           page,
//           posts,
//         },
//       };
//     }
//     )
//     .catch((error) => {
//       return {
//         error: true,
//         errorMessage: error.message
//       }
//     })
// }
