'use client';

import classNames from 'classnames/bind';
import styles from './index.module.scss';

function ButtonComponent({ color = 'red' }: { color: string }) {
    //ClassNames를 이용한 조건부 스타일링

    /*
     * const cx = classNames.bind(styles);
     * styles는 scss파일을 import한 것
     * cx({className : 조건}) -> 이것을 이용해서 조건에 따라 className을 다르게 줄 수 있다
     */
    const cx = classNames.bind(styles);

    return (
        <button
            className={cx({
                button_example: true,
                red: color === 'red',
                blue: color === 'blue',
            })}
        >
            Button
        </button>
    );
}

export default ButtonComponent;
