'use client';

// Utils
import { useEffect, useRef } from 'react';
import { EDITOR_JS_TOOLS } from '@/lib/editorJs/editorJsTools';
import exampleData from './example_data';

// Style
import style from './index.module.scss';

// Components
import SlideItemWrapper from '../../SlideItemWrapper';
import EditorJS from '@editorjs/editorjs';

function Example() {
    const ref = useRef<any>(null);

    useEffect(() => {
        if (!ref.current) {
            const editor = new EditorJS({
                holder: 'example_editor',
                data: exampleData,
                tools: EDITOR_JS_TOOLS,
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
            <div tabIndex={-1} id="example_editor" className={style.editor} />
            <div className={style['empty-box']}></div>
        </SlideItemWrapper>
    );
}

export default Example;
