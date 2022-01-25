import { ProjetosContainer } from '../../styles/ProjectsStyles'
import Header from '../../components/Header'
import ProjectItem from '../../components/ProjectItem'

export default function Projects() {
    return (
        <ProjetosContainer>
            <Header/>

            <main className='container'>
                
                <ProjectItem
                    title='Projeto 01'
                    type='Website'
                    slug='teste'
                    imgUrl='https://images.prismic.io/slicemachine-blank/dcea6535-f43b-49a7-8623-bf281aaf1cb2_roller-skating.png?auto=compress,format'
                />
                <ProjectItem
                    title='Projeto 01'
                    type='Website'
                    slug='teste'
                    imgUrl='https://images.prismic.io/slicemachine-blank/dcea6535-f43b-49a7-8623-bf281aaf1cb2_roller-skating.png?auto=compress,format'
                />
                <ProjectItem
                    title='Projeto 01'
                    type='Website'
                    slug='teste'
                    imgUrl='https://images.prismic.io/slicemachine-blank/dcea6535-f43b-49a7-8623-bf281aaf1cb2_roller-skating.png?auto=compress,format'
                />
                <ProjectItem
                    title='Projeto 01'
                    type='Website'
                    slug='teste'
                    imgUrl='https://images.prismic.io/slicemachine-blank/dcea6535-f43b-49a7-8623-bf281aaf1cb2_roller-skating.png?auto=compress,format'
                />
            </main>
        </ProjetosContainer>
    )
}