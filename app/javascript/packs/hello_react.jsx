// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import GlobalStyle from '../src/global.css'
import Style from '../src/hello_react.css'

const Hello = props => (
  <div onClick={() => console.log(Date.now())} className={Style.graf}>Hello {props.name}! <span className={GlobalStyle.paragraph}>(From Hello ReactComponent!)</span></div>
)

Hello.defaultProps = {
  name: 'David'
}

Hello.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello name="New Application v1.0.2-rc.n" />,
    document.body.appendChild(document.createElement('div')),
  )
})
