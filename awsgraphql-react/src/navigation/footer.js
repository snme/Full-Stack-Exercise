import React from "react";

class Footer extends React.Component {
  render() {
    return (

      <div className="row">



<footer className="page-footer blue" bottom="0">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 class="white-text center">Created for BuildOps by Sathya Edamadaka</h5>
                <p className="grey-text text-lighten-4">Prioritized for reusability—can extend footer here.</p>
              </div>
              <div className="col l6 s12">
                <h5 class="white-text center">Contact me through the following!</h5>
                <p className="grey-text text-lighten-4">sathya@buildops.com</p>
              </div>
            </div>
          </div>
          
          <div className="footer-copyright">
            <div className="container">
            <a className="grey-text text-lighten-4 left" href="https://github.com/snme/Full-Stack-Exercise">https://github.com/snme/Full-Stack-Exercise</a>
            <a className="grey-text text-lighten-4 right" href="https://buildops.atlassian.net/l/c/STmhfDtx">Confluence Pages</a>
            </div>
          </div>
        </footer>
      </div> 
    );
  }
}

export default Footer;