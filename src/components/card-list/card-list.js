import React, {Fragment} from 'react';
import './card-list.css';
import {Card} from '../card/card';
export const CardList = props => {
    console.log(props);
    return (
        <Fragment>
            <section className="card-list">
                {props
                    .monsters
                    .map(monster => (<Card key={monster.id} monster={monster}/>))
}
            </section>
        </Fragment>
    );
}