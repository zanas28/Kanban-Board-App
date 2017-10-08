import React from 'react';
import ReactDOM from 'react-dom';
import KanbanBoard from './components/KanbanBoard';
import cardsList from './components/app';
import BankAppContainer from './Redux/App';

ReactDOM.render(
    // <KanbanBoard cards={cardsList}/>,
    <BankAppContainer />,
    document.getElementById('root')
)