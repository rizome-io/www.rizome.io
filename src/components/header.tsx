/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from "react"

import { Link } from 'gatsby'
import Logo from '../../assets/svg/logo_with_name.svg'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

export const Header = () =>
  <div sx={{
    position: 'fixed',
    width: '100%',
    variant: 'styles.header',
  }}>
    <header
      sx={{
      display: 'flex',
      alignItems: 'center',
      mx: ['1em', '2em', '8em', '5em', '14em']
    }}>
    <Link
      to="/"
      sx={{
        variant: 'styles.navlink', p: 0,
      }}>
      <div sx={{ position: 'relative' }}>
        <Logo sx={{ position: 'absolute', top: -10 }}/>
      </div>
    </Link>
    <div sx={{ mx: 'auto' }} />
    <AnchorLink
      to="/#about"
      sx={{
        variant: 'styles.navlink',
      }}>
      About
    </AnchorLink>
    <AnchorLink
      to="/#vision"
      sx={{
        variant: 'styles.navlink',
      }}>
      Vision
    </AnchorLink>
    <AnchorLink
      to="/#pool"
      sx={{
        variant: 'styles.navlink',
      }}>
      Pool
    </AnchorLink>
    <AnchorLink
      to="/#contact"
      sx={{
        variant: 'styles.navlink',
      }}>
      Contacts
    </AnchorLink>
  </header>
</div>
