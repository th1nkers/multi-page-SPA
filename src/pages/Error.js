import React from 'react';
import PageContent from './PageContent';
// import { useRouteError } from './react-router-dom';

const error = () => {

    // const Error = useRouteError();

    let title = 'An error occurred!';
    let message = 'Something went wrong!';

    if(Error.status === 500){
        message= Error.data.message;
    }
    if(Error.status === 404){
        title = 'Not found!';
        message = 'Could not find resource or page.'
    }

    return (
        <>
            <PageContent title={title}/>
            <h1>error occured.</h1>
        </>
    )
}

export default error