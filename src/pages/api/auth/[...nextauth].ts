import { NextApiHandler } from 'next'
import NextAuth from 'next-auth'
import Adapters from 'next-auth/adapters'
import Providers from 'next-auth/providers'

import prisma from '@/libs/prisma'

const options = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Providers.Facebook({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
  ],
  adapter: Adapters.Prisma.Adapter({ prisma }),
  secret: process.env.SECRET,
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
    newUser: null,
  },
}

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options)

export default authHandler
