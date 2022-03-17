import styled from 'styled-components';
import {AiFillGithub} from 'react-icons/ai'
import React, { useState, useEffect } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'
import { device } from 'device';
import {MdOutlineArrowBackIosNew} from 'react-icons/md'
const Navbar = () => {
    const [active, setActive] = useState([false, false, false, false, false]);
    const [openDrawer, setOpenDrawer] = useState(false);
    const [width, setWitdh] = useState(window.innerWidth);

    const checkWidth = () =>{
        setWitdh(window.innerWidth);
    }
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
          const offsetCalc = 200;
          
        //   console.log(`home: ${homeOffset}, about: ${aboutOffset}, project: ${projectsOffset}, contact: ${contactOffset}`)
          const currentScroll = window.scrollY;
        //   console.log(`current scroll: ${currentScroll}`)

          if (currentScroll >= homeOffset - offsetCalc && currentScroll < aboutOffset - offsetCalc) {
            toggleActive(0);
          }
          if (currentScroll >= aboutOffset - offsetCalc && currentScroll < projectsOffset - offsetCalc) {
            toggleActive(1);
          }
          if (currentScroll >= projectsOffset - offsetCalc && currentScroll < contactOffset - offsetCalc) {
            toggleActive(2);
          }
          if (currentScroll >= contactOffset - offsetCalc) {
            toggleActive(3);
          }
          
        })}, []);

    const scrollToTop = () =>{
        document.documentElement.scrollTo({
            top:0,
            behavior: 'smooth'
        })
    }

    const toggleDrawer = () => {
        setOpenDrawer(!openDrawer);
    }

    useEffect(()=>{
        if(!openDrawer) document.body.style.overflow = 'visible';
        if(openDrawer) document.body.style.overflow = 'hidden';
    },[openDrawer])

    useEffect(()=>{
        window.addEventListener('resize', checkWidth);
        if(width/16 >= 40.0625){
            setOpenDrawer(false);
        }
    },[width])

    return(
        <Body>
            <ul className='desktop'>
                <li>Dominik Sęk</li>
                <li><a className={active[0] ? 'active' : 'inactive'} onClick={scrollToTop} href="#home">home</a></li>
                <li><a className={active[1] ? 'active' : 'inactive'} href="#about">about</a></li>
                <li><a className={active[2] ? 'active' : 'inactive'} href="#projects">projects</a></li>
                <li><a className={active[3] ? 'active' : 'inactive'} href="#contact">contact</a></li>
                <li className='social-link'><a target="_blank" rel="noreferrer" href="https://github.com/gothic459"><AiFillGithub/></a></li>
            </ul>
            <StyledGiHamburgerMenu onClick={toggleDrawer} size={'2rem'} />

            <Drawer className='mobile' open={openDrawer}>
                <ul className='mobile-drawer'>
                    <li  onClick={toggleDrawer}><MdOutlineArrowBackIosNew/></li>
                    <li><a className={active[0] ? 'active' : 'inactive'} onClick={toggleDrawer} href="#home">home</a></li>
                    <li><a className={active[1] ? 'active' : 'inactive'} onClick={toggleDrawer} href="#about">about</a></li>
                    <li><a className={active[2] ? 'active' : 'inactive'} onClick={toggleDrawer} href="#projects">projects</a></li>
                    <li><a className={active[3] ? 'active' : 'inactive'} onClick={toggleDrawer} href="#contact">contact</a></li>
                </ul>
            </Drawer>
        </Body>
    )
}
const StyledGiHamburgerMenu = styled(GiHamburgerMenu)`
    @media ${device.tablet} {
        display:none;
    }
`
const Drawer = styled.div`
    position: absolute;
    left:0;
    top:0;
    background: var(--clr-primary);
    width:100%;
    height:100vh;
    z-index: 3;
    transform:translateX(${props => props.open ? '0' : '-100%'});    
    transition:transform 0.3s ease-in-out;

    & .mobile-drawer{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 100vh;
        & li{
            width:100%;
            height:25vh;
            display: flex;
            align-items:center;
            justify-content: center;
            font-size: 2rem;
            +li{
                border-top:1px solid white;
            }
            & a{
                text-decoration: none;
                color:white;
            }
        }
    }

`
const Body = styled.nav`
    background-color: var(--clr-primary);
    position: sticky;
    top:0;
    z-index:2;
    display: flex;
    align-items: center;
    color:white;
    height:3rem;
    
    .desktop{
        display:none;
    }

    @media ${device.tablet} {
        height:4rem;
        .mobile{
            display:none;
        }
        .desktop{
        display: flex;
        }
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
        position:relative;
        
            &.social-link{
                transform: scale(1.5);
                transition: transform 0.3s ease-in-out;
                &:hover{
                    transform:scale(2);
                }
            }
            &+li{
                margin-left: 5%;
            }
            &:not(:first-child):not(:last-child){
                justify-content: center;
                
                &::after{
                    content:'';
                    opacity: 0;
                    box-shadow:0px 1px 0px white;
                    width:0;
                    height:0;
                    position:absolute;
                    bottom:0;
                    left:0;
                    transition:all 0.5s ease-in-out;
                 }

                 &:hover{
                     & > a{
                        color:'#A4A4A4';
                     }
                    &::after{
                        width:100%;
                        height: 1px;
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
                box-shadow:0px 1px 0px white;
            }
            
        }
    }
    }
    

`



export default Navbar;