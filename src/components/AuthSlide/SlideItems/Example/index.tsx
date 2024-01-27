'use client';

import { useEffect, useRef } from 'react';
import SlideItemWrapper from '../../SlideItemWrapper';
import style from './index.module.scss';

import EditorJS from '@editorjs/editorjs';
import { EDITOR_JS_TOOLS } from '@/lib/editorJs/editorJsTools';
import data from './example_data';

function Example() {
    const ref = useRef<any>(null);

    useEffect(() => {
        if (!ref.current) {
            const editor = new EditorJS({
                holder: 'example_editor',
                data: data,
                tools: EDITOR_JS_TOOLS,
                autofocus: true,
            });

            ref.current = editor;
        }
        return () => {
            if (ref.current && ref.current.destroy) {
                ref.current.destroy();
            }
        };
    }, []);

    return (
        <SlideItemWrapper>
            <div id="example_editor" className={style.editor} />
            <div className={style['empty-box']}></div>
        </SlideItemWrapper>
    );
}

export default Example;
