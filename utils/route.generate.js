import { ApiService } from '../common/config'
export const dynamicRoutes = async () => {
  const PostsRoute = await ApiService.get('posts').then((res) => {
    return res.data.map((post) => {
      return {
        route: '/posts/' + post.slug,
        payload: post,
      }
    })
  })
  const CategorieRoute = await ApiService.get('categories').then((res) => {
    return res.data.map((category) => {
      return {
        route: '/categories/' + category.slug,
        payload: category,
      }
    })
  })
  const routes = PostsRoute.concat(CategorieRoute)
  return routes
}
