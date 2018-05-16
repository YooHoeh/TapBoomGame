import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableHighlight,
} from 'react-native';

class CountNum extends Component {
    state = {
        count: this.props.time,
        tap: false,
    };

    render() {
        const {count, tap} = this.state;
        return (
            <TouchableHighlight
                onpress={() => {
                    this.state.scroe = this.state.count;
                }}
            >
                <View>
                    {tap === false && count > 0 && <Text style={styles.countNum} onPress={this.tap}>{count}</Text>}
                </View>
            </TouchableHighlight>
        );
    }


    // 点击后使用回调将点击时候的值传给父组件
    tap = () => {
        this.setState({tap: true,});
        this.props.addScore && this.props.addScore(this.state.count);

    };

    componentWillReceiveProps(nextProps) {
        this.setState({
            count: nextProps.time,
            tap: nextProps.tap,
        });
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            const {count} = this.state;
            if (count === 0) return clearInterval(this.timer);
            this.setState({
                count: count - 1,
            });
        }, 500);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }


}

export class Game extends Component {

    state = {
        time1: 10,
        score: 0, //总分
    };

    componentWillMount() {
        // this.setState({
        //     time1: 30,
        // })
    }

    // 放置一个新的数字
    addANumber = () => {
        setTimeout(() => {
            alert('q');
            return (
                <CountNum time={this.state.time1} addScore={this.addScore}/>
            )
        }, 3000);
    };
// 返回一个随机位置
    randomPosition = () => {
        let screenWidth = 2;
        let x = Math.floor(Math.random() * screenWidth);
        return x;
    };
    // 将点击后的数字加到总分
    addScore = (param) => {
        this.setState({

            score: param + this.state.score,

        });
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.numView}>
                    {this.addANumber()}
                </View>
                <View style={styles.infoBoard}>
                    <View style={styles.leftBoard}>
                        <Text>点击数:{this.randomPosition()}</Text>
                        <Text>剩余时间:</Text>
                    </View>
                    <Text style={styles.score}>总分:{this.state.score}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#00b0e8',
    },
    numView: {
        flex: 10,
        margin: 10,
        backgroundColor: 'blue',
        flexWrap: 'wrap',
    },
    countNum: {
        fontSize: 30,
        width: 60,
        margin: 5,
    },
    infoBoard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'red',
        margin: 10,
    },
    score: {
        // fontSize: 40,
        flex: 1,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'flex-start',

        // height:100,
    },
    leftBoard: {
        flex: 1,
        marginLeft: 4,
    },


});