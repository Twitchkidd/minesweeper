import { useState } from 'react';
import Head from 'next/head';
import { SuperCenter } from '@/components/Layout';
import StartScreen from '@/components/StartScreen';
import Game from '@/components/Game';

// todo name

export default function Home() {
	const [playing, setPlaying] = useState(false);
	return (
		<SuperCenter as='main'>
			<Head>
				<title>Minesweeper!</title>
				<meta name='description' content='Minesweeper game clone' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			{!playing ? <StartScreen /> : <Game />}
		</SuperCenter>
	);
}
