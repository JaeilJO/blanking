'use client';

import EditorJS from '@editorjs/editorjs';

import { useEffect, useRef } from 'react';

import style from './index.module.scss';

import axios from 'axios';

import { EDITOR_JS_TOOLS } from '@/lib/editorJs/editorJsTools';

function EditorJs({
    subkey,
    data,
    pagename,
    groupname,
}: {
    subkey?: string;
    data: any;
    pagename?: string;
    groupname?: string;
}) {
    const ref = useRef<any>(null);

    useEffect(() => {
        if (!ref.current) {
            const editor = new EditorJS({
                holder: 'editor',
                data: data[0],
                tools: EDITOR_JS_TOOLS,

                onChange: async () => {
                    const outputData = await ref.current.save();
                    await axios.patch(
                        `${process.env.NEXT_PUBLIC_SITE_URL}/api/userpage/${subkey}/${groupname}/${pagename}/content`,
                        {
                            data: {
                                new_content: outputData,
                            },
                        }
                    );
                },
            });

            ref.current = editor;
        }

        return () => {
            if (ref.current && ref.current.destroy) {
                ref.current.destroy();
            }
        };
    }, [data]);

    return (
        <>
            <div id="editor" className={style.editor} />
        </>
    );
}

export default EditorJs;
