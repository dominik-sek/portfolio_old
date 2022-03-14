import styled from 'styled-components';
import {AiFillGithub} from 'react-icons/ai'
import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [active, setActive] = useState([false, false, false, false, false]);

    const toggleActive = (index) => {
        let newActive = [false, false, false, false, false];
        newActive[index] = true;
        setActive(newActive);
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {

          const home = document.querySelector("#home");
          const about = document.querySelector("#about");
          const projects = document.querySelector("#projects");
          const contact = document.querySelector("#contact");
        
          //this is just in case the user changes height
          const homeOffset = home.offsetTop;
          const aboutOffset = about.offsetTop;
          const projectsOffset = projects.offsetTop;
          const contactOffset = contact.offsetTop;
          
        //   console.log(`home: ${homeOffset}, about: ${aboutOffset}, project: ${projectsOffset}, contact: ${contactOffset}`)
          const currentScroll = window.scrollY;
        //   console.log(`current scroll: ${currentScroll}`)

          if (currentScroll >= homeOffset - 100 && currentScroll < aboutOffset - 100) {
            toggleActive(0);
          }
          if (currentScroll >= aboutOffset - 100 && currentScroll < projectsOffset - 100) {
            toggleActive(1);
          }
          if (currentScroll >= projectsOffset - 100 && currentScroll < contactOffset - 100) {
            toggleActive(2);
          }
          if (currentScroll >= contactOffset - 100) {
            toggleActive(3);
          }
          
        })}, []);


    const scrollToTop = () =>{
        document.documentElement.scrollTo({
            top:0,
            behavior: 'smooth'
        })
    }

    return(
        <Body>
            <ul>
            <li>Dominik Sęk</li>
                <li><a className={active[0] ? 'active' : 'inactive'} onClick={scrollToTop} href="#home">home</a></li>
                <li><a className={active[1] ? 'active' : 'inactive'} href="#about">about</a></li>
                <li><a className={active[2] ? 'active' : 'inactive'} href="#projects">projects</a></li>
                <li><a className={active[3] ? 'active' : 'inactive'} href="#contact">contact</a></li>
                <li><a target="_blank" rel="noreferrer" href="https://github.com/gothic459"><AiFillGithub/></a></li>
            </ul>
        </Body>
    )
}

const Body = styled.nav`
    background-color: var(--clr-primary);
    height:4rem;
    position: sticky;
    top:0;
    z-index:2;

    
    ul{
        display: flex;
        justify-content: flex-end;
        width:100%;
        
        & > li{
        color:white;
        height:3rem;
        width:6.875rem;
        font-size:1.125rem;
        display: flex;
        align-items: center;
        position: relative;
            &+li{
                margin-left: 5%;
            }
            &:not(:first-child){
                justify-content: center;
                
                &::after{
                content:'';
                opacity: 0;
                box-shadow:0px 2px 0px white;
                width:0;
                height:1px;
                position:absolute;
                bottom:0;
                left: 0;
                transition:all 0.3s ease-in-out;

                 }
                 &:hover{
                     & > a{
                        color:'#A4A4A4';
                     }
                    &::after{
                        width:100%;
                        opacity: 1;
                    }
                }
            }
        
            &> a{
                text-decoration: none;
                color:white;
            }
            
            &:first-child{
                flex:1;
                font-size:1.5rem;
            }

            & .active{
                box-shadow:0px 2px 0px white;
            }

            
        }



    }

    @media (min-width: 768px){
        /* padding-top: 5rem; */
    }

`

export default Navbar;