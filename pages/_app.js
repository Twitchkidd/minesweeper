import { PancakeStack } from '@/components/Layout';
import Global from '@/components/Global';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function MyApp({ Component, pageProps }) {
	return (
		<PancakeStack full>
			<Global />
			<Header />
			<Component {...pageProps} />
			<Footer />
		</PancakeStack>
	);
}

export default MyApp;
