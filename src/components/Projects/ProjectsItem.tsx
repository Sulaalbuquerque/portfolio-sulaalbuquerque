import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { ProjetoContainer } from './styles';

interface ProjectProps {
  title: string;
  type: string;
  slug: string;
  img: string;
}

export default function ProjectItem({ title, type, slug, img }: ProjectProps) {
  return (
    <ProjetoContainer imgUrl={img} data-aos="fade-up">
      <section>
        <div className="overlay" />
        <div className="text">
          <h1># {title}</h1>
          <h2>- {type}</h2>
        </div>
      </section>
      <button type="button">
        <Link href={`/projects/${slug}`}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a>
            Ver mais <AiOutlineRightCircle />
          </a>
        </Link>
      </button>
    </ProjetoContainer>
  );
}
