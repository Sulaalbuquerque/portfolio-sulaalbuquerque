import { NavLinkContainer } from './styles'
import Link from 'next/link'
import { useRouter } from 'next/router';

/*typescript */
interface Props{
    title: string;
    path: string;
}

export default function NavLink({ title, path }: Props) {
    const router = useRouter()/*nextjs */

    const isActive = router.pathname === path

    return (
        <NavLinkContainer isActive={isActive}>
            <Link href={path}>
            <a>{title}</a>
            </Link>
        </NavLinkContainer>
    )
}