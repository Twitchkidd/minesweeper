import Head from 'next/head';
import { SuperCenter } from '@/components/Layout';

export default function Home() {
	return (
		<SuperCenter as='main'>
			<Head>
				<title>Create Next App Plus</title>
				<meta name='description' content='Nextjs starter repo' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<h1>Starter!</h1>
		</SuperCenter>
	);
}
