import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

function Articles() {
    return (
        <div>
            <Link to='/articles/article-one'>Artikel 1</Link>
            <Link to='/articles/article-two'>Artikel 2</Link>
            <Link to='/articles/article-three'>Artikel 3</Link>
        </div>
    );
}

export default Articles;
