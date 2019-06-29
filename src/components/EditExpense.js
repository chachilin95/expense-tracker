import React from 'react';

export default class EditExpense extends React.Component {
    
    constructor(props) {
        super(props);

        console.log(props);
    }

    render() {
        return (
            <div>
                Editing the expense with id of {this.props.match.params.id}
            </div>
        );
    }
}