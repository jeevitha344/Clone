// import axios from 'axios'

// export default async function handler(req, res) {
//   try {
//     const response = await axios.get(
//       'https://api.themoviedb.org/3/discover/tv',
//       {
//         params: {
//           api_key: process.env.TMDB_API_KEY,
//           with_networks: 213
//         }
//       }
//     )

//     res.status(200).json(response.data)
//   } catch (error) {
//     res.status(500).json({ message: 'TMDB error' })
//   }
// }
