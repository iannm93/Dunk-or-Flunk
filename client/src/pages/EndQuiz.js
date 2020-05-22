import React from "react";
import { SocialIcon } from 'react-social-icons';


class EndQuiz extends React.Component {
    render() {
      return (
    <div>
        <div className='uk-heading-medium uk-text-center uk-margin-large-top'>
            <h1>Nice game!</h1>
        </div>
        <div className='uk-flex uk-flex-center'>
            <div className="uk-margin-top uk-card uk-card-primary uk-card-body uk-width-3-4">
                <h1 className="uk-text-center">Score: 6</h1>
            </div>   
        </div>
        
        <div className='uk-text-center uk-margin-medium-top'>
            <a className="uk-link" href="#">Play Again?</a>
        </div>

       <div className='uk-text-center uk-margin-top'>
            <SocialIcon network='twitter' url=" https://twitter.com/intent/tweet?url=https%3A%2F%2Fplaceholder.com%2F&text=I%20scored%205%20on%20Dunk%20or%20Flunk%21%20Play%20it%20now%21" target="_blank" className='uk-margin-small-right' />
            <SocialIcon url="https://facebook.com/" target="_blank" />
        </div>

    </div>

      );
    }
  }

  export default EndQuiz