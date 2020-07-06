import React from 'react';
import { useParams } from 'react-router-dom';

function Article() {
    let { id } = useParams();

    console.log(id);
    return (
        <div>
            <h1>Judulnya: {id}</h1>
        </div>
    );
}

export default Article;
