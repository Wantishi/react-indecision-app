
class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide details' : 'Show details'}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>Here are my details!</p>
                    </div>
                )}

            </div>
        )
    }
}


ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))

// const appRoot = document.getElementById('app')

// let visible = false;

// const toggleText = () => {
//     visible = !visible;
//     render();
// }



// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleText}>
//                 {visible ? 'Hide details' : 'Show details'}
//             </button>
//             {visible && <p>Here are my details!</p>}
//         </div>
//     )
//     ReactDOM.render(template, appRoot)
// }

// render();
