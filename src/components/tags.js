import React from 'react';
import Chip from 'react-materialize/lib/Chip';
import './tags.css';

export default class Tags extends React.Component {
    render(){
        const {infoTags} = this.props;

        function TagsList({infoTags}) {
            return infoTags.map(infoTag => (                
                <Chip>{infoTag}</Chip>
            ));
        }
        return(
            <div>
                <TagsList infoTags = {infoTags}/>
            </div>
        );
    }
}