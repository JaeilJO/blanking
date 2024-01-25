import style from './index.module.scss';

function GetPagesLoading() {
    return (
        <div className={style['getpagesloading-wrapper']}>
            <div className={style['getpagesloading-box-wrapper']}>
                <div className={style['getpagesloading-box']}></div>
                <div className={style['getpagesloading-infobox']}>
                    <div className={style['getpagesloading-titlebox']}></div>
                    <div className={style['getpagesloading-toolbox']}>
                        <div className={style['getpagesloading-toolbox-button']}></div>
                        <div className={style['getpagesloading-toolbox-button']}></div>
                    </div>
                </div>
            </div>
            <div className={style['getpagesloading-box-wrapper']}>
                <div className={style['getpagesloading-box']}></div>
                <div className={style['getpagesloading-infobox']}>
                    <div className={style['getpagesloading-titlebox']}></div>
                    <div className={style['getpagesloading-toolbox']}>
                        <div className={style['getpagesloading-toolbox-button']}></div>
                        <div className={style['getpagesloading-toolbox-button']}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetPagesLoading;
