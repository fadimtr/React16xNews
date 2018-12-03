import React , { lazy, Suspense } from 'react';
const LazyImport = lazy(() => import('./lazyImport'));

class Hello extends React.Component {

    state = { render : false};

    componentDidMount = () => {
        setTimeout(() => {
            this.setState({render:true});
        },3000);
    }

    render() {
        return <Suspense fallback={<div>Loading...</div>}>
            {this.state.render && <LazyImport/>}
        </Suspense>
    }
}

export default Hello;