import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavLinkContainer } from './styles';

/* typescript */
interface Props {
  title: string;
  path: string;
  // eslint-disable-next-line react/require-default-props
  includes?: boolean;
}

export default function NavLink({ title, path, includes = false }: Props) {
  const router = useRouter(); /* nextjs */

  function verifyIfIsActive() {
    if (includes) {
      return router.pathname.includes(path);
    }
    return path === router.pathname;
  }

  const isActive = verifyIfIsActive();

  return (
    <NavLinkContainer isActive={isActive}>
      <Link href={path}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>{title}</a>
      </Link>
    </NavLinkContainer>
  );
}
