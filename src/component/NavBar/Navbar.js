import React, { useState, useEffect } from 'react';
import classes from './NavBar.module.css'
import { debounce } from '../../utilities/helpers';  
import IconCroix from '../Icons/Croix/Croix'
import IconMenu from '../Icons/List/List'
import IconCart from '../Icons/Cart/Cart'
import IconCartPastille from '../Icons/Cart/CartPastille/CartPastille'
import ContainerPanier from '../ContainerPanier/ContainerPanier'

const Navbar = (props) => {
    const [prevScrollPos, setPrevScrollPos] = useState(0); 
    const [visible, setVisible] = useState(true);  
    let [visiblePanier, setBoolean] = useState(false)

    const handleScroll = debounce(() => {
      const currentScrollPos = window.pageYOffset;

      setVisible(
        (prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 50) 
        || currentScrollPos < 20
      );

      setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll]);

  return (
      <>
          <div 
            className={window.pageYOffset < 855 ? classes.navbarTransparent : classes.navbarWhite}
            style={{top: visible ? '0' : '-80px' }}
          >
              <div></div>
              <IconMenu classIconList={classes.iconList} />
              <div className={classes.title}>Ibzar</div>
              {
                props.quantitePanier ?
                <IconCartPastille classIconCartPastille={classes.iconCart} clic={() => setBoolean(!visiblePanier)}/>
                :
                <IconCart classIconCart={classes.iconCart} clic={() => setBoolean(!visiblePanier)}/>
              }
              <div></div>
          </div>
          <div>
            <ContainerPanier 
              panierVisible={visiblePanier}
              croix={<IconCroix class={classes.iconCroix} clicCroix={() => setBoolean(visiblePanier = false)}/>}
              {...props}
              supprimerArticlePanier={props.supprimerArticlePanier}
              modifierQuantiteArticle={props.modifierQuantiteArticle}
              />
          </div>
      </>
  )
};

export default Navbar;
