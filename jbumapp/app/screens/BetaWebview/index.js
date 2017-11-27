import React, { Component } from 'react';
import { WebView, View } from 'react-native';
import { Header, Icon } from 'react-native-elements';

class BetaWebview extends Component {
    render() {
        return (
                <WebView
                    source={{uri: 'https://jbum.meteorapp.com/beta'}}
                    renderError={() => this.props.navigation.navigate('Welcome')}
                    injectedJavaScript={'this.setState({index:++index})'}
                />
        );
    }
}

export default BetaWebview;