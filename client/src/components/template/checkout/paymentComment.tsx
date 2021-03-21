import {FC} from 'react';
import {TextArea} from 'components/common';

export const PaymentComment:FC =()=>{

    return (
        <article className='comment'>
            <h4 className='comment__title'>Your Comment</h4>
            <TextArea></TextArea>
        </article>
    )
}