import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard';

const users = [
    {
        userName: 'jacurtido',
        name: 'José Antonio Curtido',
        isFollowing: true,
    },
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: false,
    },
    {
        userName: 'pacohdezs',
        name: 'Paco Hernádez',
        isFollowing: true,
    },
    {
        userName: 'elosmusk',
        name: 'elon Musk',
        isFollowing: false,
    }
]

export function App () {
    return (
        <section className='App'>
            {
                users.map(({ userName, name, isFollowing }) =>
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}>
                            {name}
                    </TwitterFollowCard>
                )
            }
        </section>
    )
}