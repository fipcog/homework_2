import s from './Loader.module.css'
import loaderImage from './LoaderImage.png'

export const Loader = () => <div className={s.loader}><img src={loaderImage}/></div>
