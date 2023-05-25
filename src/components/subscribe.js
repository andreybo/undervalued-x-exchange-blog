import * as React from "react";

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
        //const checked = target.checked;
        this.setState({
          [name]: value,
        });
        
      }
    
      handleSubmit = event => {
        event.preventDefault();
        this.submitData({
          'EMAIL': `${this.state.EMAIL}`
        })
        //.then(() => navigate("/thank-you/"))
        .catch(error => alert(error))
      }
    
      submitData = async data => {
        const url = '/api/sendinblue';
    
        
    
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
          console.log('Error ocurred when trying to submit data\n', e);
        }
      }
    
      clearStateData = () => {
        this.setState({
          EMAIL: "",
          isSubmitting: false,
        });
      }

render() {
  return(
    <div className="post__subscribe">
        <h3>Subscribe to the hottest content in mobile</h3>
        
      {this.state.submitSuccess &&
        <p className="post__success">Thank you for subscribing</p>
      }
        <div className={!this.state.submitSuccess ? 'post__hide enabled' : 'post__hide disabled'}>
          <form id="sib-form" className="cform" name="contact-form"
              onSubmit={this.handleSubmit}>
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact-form" />
              <div className="cform__label floating-label">
                  <input
                  className="cform__input"
                  type="text"
                  placeholder="Email"
                  name="EMAIL"
                  id="EMAIL"
                  autoComplete="off"
                  data-required="true"
                  required
                  value={this.state.EMAIL} onChange={this.handleInputChange}
                  />
                  <label htmlFor="EMAIL">Email</label>
              </div>
              <button id={this.props.buttonId} className="main_cta" type="submit" name="submit">
                <span>SUBSCRIBE</span>
              </button>
          </form>
        <p className="post__subscribe--terms">
          By subscribing, I confirm that I have read and understood the <a href="/privacy">Privacy Policy</a>.
        </p>
      </div>
    </div>
  )
}
}

const Subscirbe = ({buttonId}) => {
  return (
      <TheFormComponent buttonId={buttonId}/>
  )
}

export default Subscirbe;