import { ProjetoContainer } from './styles'
import Link from 'next/link'
import { AiOutlineRightCircle } from 'react-icons/ai'

interface ProjectProps{
    title: string;
    type: string;
    slug: string;
    img: string;
}

export default function ProjectItem({ title, type, slug, img }: ProjectProps) {
    return (
        <ProjetoContainer imgUrl={img}>
            <section>
                <div className='overlay'/>
                <div className='text'>
                    <h1># {title}</h1>
                    <h2>- {type}</h2>
                </div>
            </section>
            <button type='button'>
                <Link href={`/projects/${slug}`}>
                    <a>
                        Ver mais <AiOutlineRightCircle/>
                    </a>
                </Link>
            </button>
        </ProjetoContainer>
    )
}