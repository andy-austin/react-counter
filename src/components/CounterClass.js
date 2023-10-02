import React from 'react';

class CounterClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
    }

    componentDidMount() {
        console.log('Component mounted');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Component updated');
    }

    componentWillUnmount() {
        console.log('Component will unmount');
    }

    incrementCount = () => {
        this.setState({count: this.state.count + 1});
    };

    render() {
        return (
            <>
                <button onClick={this.incrementCount}>Increment</button>
                <p>Count: {this.state.count}</p>
            </>
        );
    }
}

export default CounterClass;