import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    };

    activateEditMode = () => {
        // setState асинхроний
        this.setState({
           editMode: true
        });
    };
    deactivateEditMode = () => {
        this.setState( {
            editMode: false
        });
        this.props.updateStatus(this.state.status);
debugger;
    };
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({state: this.props.status})
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <div>
                        <span onDoubleClick={this.activateEditMode}>
                            {this.state.status || this.props.status}
                        </span>
                      </div>
                    : <div>
                        <input value={this.state.status}
                               autoFocus={true}
                               onChange={this.onStatusChange}
                               onBlur={this.deactivateEditMode}
                              />
                      </div>
                }
                <div><h2>{this.props.status}</h2></div>
            </div>
        )
    }
}

export default ProfileStatus;