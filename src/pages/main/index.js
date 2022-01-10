import Header from '../.././components/header/index.js';
import Hero from '../.././components/hero/index.js';
import MovieCard from '../.././components/movie_card/index.js';
import Button from '../.././components/helpers/button/index.js';
import Footer from '../.././components/footer/index.js';
import Spacer from '../.././components/helpers/spacer/index.js';

function Main ({data, tokenInfoData}) {
  return(
    <>
    <Header btnInfo={tokenInfoData ? 'Sign Out' : 'Sign In'} link={ tokenInfoData ? '/logout' : '/login'} />
    {tokenInfoData ? null : <Hero / >}
    <hr className="seperator"/>
    <Spacer />
    <MovieCard data={data} />
    <Spacer />
    {tokenInfoData ?
      null :
      <Button btnInfo={'Get More Content'} link={'/login'}/>
    }
    <Spacer />
    <Footer />
    </>
  );
}

export default Main;
