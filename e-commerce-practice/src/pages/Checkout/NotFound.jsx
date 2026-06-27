import { Header } from '../../components/Header'
import './NotFound.css'

export const NotFound = () => {

    return(
        <>
        <link rel="icon" type="image/svg+xml" href="home-favicon.png" />
        <Header/>
       <h1 className='Notfound-title'> 404 </h1>
       <p className='Notfound-message'>Try to reload again or try a different page.</p>
        </>
    )
}