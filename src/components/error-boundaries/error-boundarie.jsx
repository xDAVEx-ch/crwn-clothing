import React from 'react';

import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText} from './error-boundaries.styles';

class ErrorBoundary extends React.Component{

    state = {
        hasError: false
    }

    static getDerivedStateFromError(error){
        return { hasError: true }
    }

    componentDidCatch(error, info){
        console.log(error);
    }

    render(){
        if(this.state.hasError){
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl={'https://i.imgur.com/oCkEbrA.png'} />
                    <ErrorImageText>Sorry, this page is broken</ErrorImageText>
                </ErrorImageOverlay>
            );
        }

        return this.props.children;
    }

}

export default ErrorBoundary;