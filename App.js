import React from 'react';
import {DangerZone} from 'expo';
import {StyleSheet, Text, View} from 'react-native';

const {Branch} = DangerZone;

export default class App extends React.Component {
    state = {
        showBranch: false,
    };
    componentDidMount() {
        Branch.subscribe(({ error}) => {
            if (error) {

                return;
            }

            this.displayBranchLink();
        })
    }
    displayBranchLink = () => {
        this.setState({
            showBranch: true,
        });

        setTimeout(() => {
            this.setState({
                showBranch: false,
            });
        }, 3500)
    };
    render() {
        const {showBranch} = this.state;

        return (
            <View style={styles.container}>
                <Text>Branch.io Testing</Text>
                {showBranch && <View style={styles.branchBubble}>
                    <Text style={styles.branchText}>Branch Link opened</Text>
                </View>}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    branchBubble: {
        backgroundColor: '#0063ff',
        padding: 20,
    },
    branchText: {
        color: '#fff',
    }
});
