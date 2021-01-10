import { NextSeo, NextSeoProps } from 'next-seo'

import Navbar from '@/components/navbar'

interface LayoutProps {
  navbar?: boolean
  metaTags: NextSeoProps
}

const Layout = ({
  navbar = true,
  metaTags,
  children,
}: React.PropsWithChildren<LayoutProps>) => {
  return (
    <>
      <NextSeo {...metaTags} />
      {navbar && <Navbar />}
      {children}
    </>
  )
}

export default Layout
