import { CSSTransitionGroup } from 'react-transition-group';
import './a.less';

class Test extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      test: false,
    };
  }

  render() {
    let component;
    const { test } = this.state;

    if (test) {
      component = (
        <div key="step-a" className="transition blue">
          <button onClick={() => this.setState({ test: false })}>i hurt</button>
        </div>
      );
    } else {
      component = (
        <div key="step-b" className="transition red">
          <button onClick={() => this.setState({ test: true })}>explain me</button>
        </div>
      );
    }

    return (
      <div className="rel">
        <CSSTransitionGroup
          transitionName="slide"
          className="forward"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {component}
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default Test;
