var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return(
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are few example location to try...</p>
      <ol>
        <li>
          <Link to='/?location=Colombo'>Colombo, SL</Link>
        </li>
        <li>
          <Link to='/?location=Mumbai'>Mumbai, India</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
