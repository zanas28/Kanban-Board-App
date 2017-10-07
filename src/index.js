import React from 'react';
import ReactDOM from 'react-dom';
import KanbanBoard from './components/KanbanBoard';
import cardsList from './components/app';

ReactDOM.render(
    <KanbanBoard cards={cardsList}/>,
    document.getElementById('root')
)