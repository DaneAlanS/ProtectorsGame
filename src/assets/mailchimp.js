import React from 'react';

function MailChimp() {
  return (
    <form action="https://protectorsgame.us8.list-manage.com/subscribe/post?u=408f654a9f9791a1f1b95643d&amp;id=4958427ca7&amp;f_id=00a56de0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate NewsletterForm" target="_blank" noValidate>
      <div id="mc_embed_signup_scroll">
        <h6>Subscribe To Our Newsletter to Keep Updated On The Development!</h6>
        <div className="mc-field-group">
          <label htmlFor="mce-EMAIL">Email Address  <span className="asterisk">*</span></label>
          <input type="email" defaultValue="" name="EMAIL" className="required email" id="mce-EMAIL" required />
          <span id="mce-EMAIL-HELPERTEXT" className="helper_text"></span>
        </div>
        <div id="mce-responses" className="clear foot">
          <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
          <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
        </div>
        <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_408f654a9f9791a1f1b95643d_4958427ca7" tabIndex="-1" value="" /></div>
        <div className="optionalParent">
          <div className="clear foot">
            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button submitButton" />          
          </div>
        </div>
      </div>
    </form>
  );
}

export default MailChimp;