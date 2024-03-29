'use client'
import BookmarksMovies from '@/components/Bookmark/BookmarksMovies'
import { useRouter } from 'next/navigation'
import PocketBase from 'pocketbase';
import { useEffect, useState } from 'react';

const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);

export default function Bookmarks() {
	const [isLoading, setIsLoading] = useState(true);
	const router = useRouter();

	useEffect(() => {
		if (!pb.authStore.isValid) {
			router.push('/');
		} else {
			setIsLoading(false);
		}
	}, []);

	if (isLoading) {
		return null;
	}
	return (
		<BookmarksMovies />
	)
}