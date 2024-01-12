import React, { useState, useRef, useEffect } from "react"
import clsx from "clsx"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Chevron from "@mui/icons-material/ChevronRight"

import { products, compare } from "./items"

import Card from "../Card"
import CardItem from "../CardItem"

const HeaderNavbarProduct = () => {
  const [active, setActive] = useState(false)
  const wrapperRef = useRef(null);

  const onClick = (ev) => {
    ev.preventDefault()
    setActive((prev) => !prev)
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target) && !event.target.className?.includes?.('active')) {
        setActive(false)
      }
    }

    if (active) document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [active]);

  return (
      <>
        <Link className={clsx("global-header-link", active && "active")} to="#" onClick={onClick}>
          Product
          <Chevron className="menu-chevron" fontSize="small" />
        </Link>
        <Card customRef={wrapperRef} show={active}>
          <CardItem title="PRODUCT" onlyContent items={products} />
          <CardItem title="COMPARE" items={compare} />
          <CardItem className="hide-on-mobile" title="CASE STUDY">
            <StaticImage className="container-image" src="../../../images/CONNECT&GO.png" width={270} height={170} alt="book" />
            <Link
              target="_blank"
              to="/customers/connectngo"
              className="cta-button"
          >
              Read Customer Story
          </Link>
          </CardItem>
        </Card>
      </>
  )
}

export default HeaderNavbarProduct