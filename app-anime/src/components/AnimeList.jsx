export default function AnimeList({ animes, onSelectedAnime }) {
    return (
        <ul className="list list-anime">
            {animes?.map((anime) => (
                <li key={anime.mal_id} onClick={() => onSelectedAnime(anime.mal_id)}>
                <img src={anime.image} alt={`${anime.title} cover`} />
                <h3>{anime.title}</h3>
                <div>
                    <p>
                    <span>{anime.year}</span>
                    </p>
                </div>
                </li>
            ))}
        </ul>
    )
}