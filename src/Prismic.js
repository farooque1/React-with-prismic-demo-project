import * as prismic from '@prismicio/client'

// Fill in your repository name
export const repositoryName = 'demo-prismi'
const endpoint = prismic.getEndpoint(repositoryName)

export const client = prismic.createClient(endpoint, {
  // If your repo is private, add an access token
  accessToken: 'MC5ZaWlTLWhFQUFDZ0FLdkh5.b--_vRbvv706Ku-_ve-_vXLvv71LOO-_vVVyEld5B0h577-9PnklOO-_ve-_vSvvv73vv73vv70',

  // This defines how you will structure URL paths in your project.
  // Update the types to match the Custom Types in your project, and edit
  // the paths to match the routing in your project.
  //
  // If you are not using a router in your project, you can change this
  // to an empty array or remove the option entirely.
  routes: [
    {
      type: 'austria',
      path: '/1',
    },
    {
      type: 'testpage',
      path: '/',
    },
  ],
})