import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

// ICONS
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

    if (location.pathname === rootPath || location.pathname === blogPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
              display:'flex',
              justifyContent:'center'
            }}
            to={location.pathname === blogPath ? `/blog/` : `/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/blog/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <header>{header}</header>
          <main>{children}</main>
        </div>
        <Footer>
          <div style={{
          display:'flex', 
          justifyContent:'space-around'
          }}>
          {/*}© {new Date().getFullYear()}, Built with
          {` `}*/}

          <a href="mailto:facundoarenas29@gmail.com">
            <EmailIcon color='action' fontSize='large'/>
          </a>

          <a href="https://www.linkedin.com/in/facundo-arenas">
            <LinkedInIcon color='action' fontSize='large'/>
          </a>

          <a href="https://www.github.com/zfaka">
            <GitHubIcon color='action' fontSize='large'/>
          </a>
          </div>
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
