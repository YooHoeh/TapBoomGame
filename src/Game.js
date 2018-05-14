import {
    React
} from 'react';
import {
    View,
    Text,

} from 'react-native';

class CountNum extends Componet {
    state = {
        count: this.props.time,
    };

    render() {
        const {count} = this.state;
        return (
            <View>{count > 0 && <Text>{count}</Text>}</View>
        );
    }
    componentDidMount(){
        this.timer = setInterval(()=>{
            const { count } = this.state;
            if (count === 0) return clearInterval(this.timer);
            this.setState({
                count: count -1,
            })
        },1000);
    }
    componetWillUnmount(){
        clearInterval(this.timer);
    }
}

export default class Game extends Componet {
    constructor(props) {
        super(props);
    }

    state
}