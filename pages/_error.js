import React from 'react';
import Link from 'next/link';

const errorPage = () => {
    return (
        <div>
            <h1>Oop, something went wrong!</h1>
            <p><Link href="/"><a>GO BACK</a></Link></p>
        </div>
    );
}

export default errorPage;