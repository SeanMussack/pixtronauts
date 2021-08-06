import React, { Component, Fragment } from 'react';

class Planemo extends Component {
    constructor(props) {
        super(props);
        this.props = {
            planemo: null
        }
    }
    render() {
        return (
            <div
                className="planemo-orbit"
                style={{
                    position: 'absolute',
                    left: this.props.planemo.left,
                    top: this.props.planemo.top,
                }}
            >
                <div
                    className="planemo"
                    style={{
                        position: 'relative',
                        top: -(this.props.planemo.height / 2),
                        left: -(this.props.planemo.height / 2)
                    }}
                >
                    <img 
                        src={this.props.planemo.image}
                        alt={this.props.planemo.name + ": " + this.props.planemo.desc}
                    />
                    {this.props.planemo.rings
                        ?<img
                            src={this.props.planemo.rings}
                            alt={this.props.planemo.name + "'s rings"}
                            style={{
                                position: 'absolute',
                                left: -((this.props.planemo.ringsWidth - this.props.planemo.height) / 2)
                            }}
                        />
                        :<Fragment/>
                    }
                </div>
            </div>
        );
    }
}

export default Planemo;