import SectionContainer from './SectionContainer'
import Link from '../Link'
import Footer from './Footer'
import ThemeSwitch from '../ThemeSwitch'

type linkType ={
    title:string,
    href:string
}

type dataType ={
    headerTitle:string|number
}


const headerNavLinks:linkType[]= [
 {
     title:'归档',
     href:'/blog'
 },
 {
    title:'项目',
    href:'/blog'
},
{
    title:'关于',
    href:'/blog'
},
{
    title:'留言',
    href:'/blog'
}
]

const siteMetadata:dataType = {
    headerTitle:'阿星的博客'
}

const LayoutWrapper: React.FC = ({ children }) => {
    return (<SectionContainer>
        <div className="flex flex-col justify-between h-screen">
            <header className="flex items-center justify-between py-10">
                <div>
                    <Link href="/" aria-label="Tailwind CSS Blog">
                        <div className="flex items-center justify-between">
                            <div className="mr-3">
                                {/* <Logo /> */}
                                <h1>logo</h1>
                            </div>
                            {typeof siteMetadata.headerTitle === 'string' ? (
                                <div className="hidden h-6 text-2xl font-semibold sm:block">
                                    {siteMetadata.headerTitle}
                                </div>
                            ) : (
                                siteMetadata.headerTitle
                            )}
                        </div>
                    </Link>
                </div>
                <div className="flex items-center text-base leading-5">
                    <div className="hidden sm:block">
                        {headerNavLinks.map((link) => (
                            <Link
                                key={link.title}
                                href={link.href}
                                className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100"
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>
                    <ThemeSwitch />
                    {/* <MobileNav /> */}
                </div>
            </header>
            <main className="mb-auto">{children}</main>
            <Footer />
        </div>
    </SectionContainer>)
}

export default LayoutWrapper