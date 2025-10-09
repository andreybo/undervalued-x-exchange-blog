import * as React from "react";
import "../styles/subscribe.css";

class TheFormComponent extends React.Component {
    state = {
        EMAIL: "",
        isSubmitting: false,
        submitSuccess: false,
        submitFail: false,
    }

    handleInputChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value,
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.submitData({
            'EMAIL': `${this.state.EMAIL}`
        })
        .catch(error => alert(error))
    }

    submitData = async data => {
        const url = '/.netlify/functions/sendinblue/';

        try {
            this.setState({
                isSubmitting: true,
            });
            await fetch(url, {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                }
            });
            this.setState({
                submitSuccess: true,
            });
            this.clearStateData();
        } catch (e) {
            this.setState({
                isSubmitting: false,
            });
            this.setState({
                submitFail: true,
            });
            console.log('Error occurred when trying to submit data\n', e);
        }
    }

    clearStateData = () => {
        this.setState({
            EMAIL: "",
            isSubmitting: false,
        });
    }

    render() {
        return (
            <div className="subscribe-container" id="subscribe">
                <div className="subscribe-content">
                    <h3 className="subscribe-title">Stay Updated</h3>
                    <p className="subscribe-description">Get the latest real estate investment insights delivered to your inbox.</p>
                    
                    {this.state.submitSuccess && (
                        <p className="subscribe-success">Thank you for subscribing</p>
                    )}
                    
                    {!this.state.submitSuccess && (
                        <form onSubmit={this.handleSubmit} className="subscribe-form">
                            <input type="hidden" name="bot-field" />
                            <input type="hidden" name="form-name" value="contact-form" />
                            
                            <div className="input-container">
                                <input
                                    className="subscribe-input"
                                    type="email"
                                    placeholder="Email"
                                    name="EMAIL"
                                    id="EMAIL"
                                    autoComplete="email"
                                    required
                                    value={this.state.EMAIL}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            
                            <button 
                                id={this.props.buttonId}
                                className="subscribe-button"
                                type="submit"
                                disabled={this.state.isSubmitting}
                            >
                                {this.state.isSubmitting ? 'Subscribing...' : 'Subscribe to Newsletter'}
                            </button>
                            
                            <div className="privacy-container">
                                <input
                                    className="privacy-checkbox"
                                    type="checkbox"
                                    name="privacy-policy"
                                    id="privacy-policy"
                                    required
                                />
                                <label htmlFor="privacy-policy" className="privacy-label">
                                    By subscribing, I confirm that I have read and understood the{' '}
                                    <a href="/privacy" className="privacy-link">
                                        Privacy Policy
                                    </a>
                                    .
                                </label>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        )
    }
}

const Subscribe = ({buttonId}) => {
    return <TheFormComponent buttonId={buttonId} />
}

export default Subscribe;
