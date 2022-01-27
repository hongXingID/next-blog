import Link from '../Link'
import SocialIcon from '../SocialIcons'
type dataType = {
    email: string,
    github:string,
    facebook:string,
    youtube:string,
    linkedin:string,
    twitter:string,
    author:string,
    title:string
}
const siteMetadata: dataType = {
    email: '/email',
    github:'/github',
    facebook:'/facebook',
    youtube:'/youtube',
    linkedin:'/linkedin',
    twitter:'/twitter',
    author:'Eric',
    title:'阿星的博客'

}


const Footer: React.FC = () => {
    return (<footer>
        <div className="flex flex-col items-center mt-16">
            <div className="flex mb-3 space-x-4">
                <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
                <SocialIcon kind="github" href={siteMetadata.github} size="6" />
                <SocialIcon kind="facebook" href={siteMetadata.facebook} size="6" />
                <SocialIcon kind="youtube" href={siteMetadata.youtube} size="6" />
                <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
                <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
            </div>
            <div className="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <div>{siteMetadata.author}</div>
                <div>{` • `}</div>
                <div>{`© ${new Date().getFullYear()}`}</div>
                <div>{` • `}</div>
                <Link href="/">{siteMetadata.title}</Link>
            </div>
            <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
                <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
                    Tailwind Nextjs Theme
                </Link>
            </div>
        </div>
    </footer>)
}

export default Footer;

