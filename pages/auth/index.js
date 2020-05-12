import React from 'react';
import Router from 'next/router';
import User from '../../components/User';

const authIndexPage = (props) => {
    return (
        <div>
            <h1>The Auth Index Page {props.appName}</h1>
            <User name="André" age="28"></User>
            <button onClick={() => { Router.push('/') }}>Go to Index</button>
        </div>
    );
}

authIndexPage.getInitialProps = (context) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ appName: 'Super App (Auth)' })
        }, 5000);
    })

    return promise
}

export default authIndexPage;