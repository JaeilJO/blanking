'use client';

// Utils
import { Player } from '@lottiefiles/react-lottie-player';
import loadingAnimation from '@/public/loading.json';

// Style
import style from './index.module.scss';

function AuthorizedLoading() {
    return (
        <div className={style.background}>
            <Player loop src={loadingAnimation} autoplay style={{ width: '500px' }} />;
        </div>
    );
}

export default AuthorizedLoading;
