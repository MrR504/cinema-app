import Link from 'next/link';
import Image from 'next/image';
import { Dot } from 'lucide-react';
import { Movies } from '@/app/interfaces/movies.interface';

function getRatingColorClass(rating: number) {
	switch (true) {
		case rating >= 8:
			return 'fill-amber-300 text-amber-500 dark:text-amber-300';
		case rating > 7:
			return 'fill-green-500 text-green-700 dark:text-green-500';
		case rating <= 7:
			return 'fill-stone-400 text-stone-600 dark:text-stone-400';
		default:
			return 'fill-stone-400 text-stone-600 dark:text-stone-400';
	}
}

interface MovieCardProps {
	movie: Movies;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
	return (
		<>
			<div className="bg-cover bg-center rounded-lg h-fit transition-all hover:scale-[1.01]" style={{ backgroundImage: `url(${movie.posterUrl})` }}>
				<div className='dark:bg-zinc-900/50 bg-white dark:bg-gradient-to-r from-black via-black/70 backdrop-brightness-50 backdrop-blur-sm hover:backdrop-blur-none hover:border-zinc-600 p-5 border rounded-lg transition duration-150 ease-in-out hover:shadow-lg'>
					<Link href={`/movie/${movie.kinopoiskId}`} passHref>
						<div className='grid grid-cols-[auto_1fr_auto] gap-5'>
							<Image src={movie.posterUrl} width={72} height={108} alt={movie.nameRu} />
							<div>
								<h2 className='font-bold text-xl'>{movie.nameRu}</h2>
								<h3 className='text-sm mt-2'>{movie.nameOriginal ? `${movie.nameOriginal},` : ''} {movie.year}</h3>
								<h3 className='flex text-stone-400 text-sm mt-2'>{movie.countries.map(Сountry => Сountry.country).join(', ')}<Dot />{movie.genres.map(Genre => Genre.genre).join(', ')}</h3>
							</div>
							<div className='justify-self-end'>
								<span className={`text-base ${getRatingColorClass(movie.ratingKinopoisk)}`}>{movie.ratingKinopoisk}</span>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</>
	);
};

export default MovieCard;