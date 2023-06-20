import React from 'react';
import Logo from "../sources/img/sheep.png";
import styles from "../scss/footer.module.scss";

function Footer() {

    return (
        <footer className={styles['footer']}>
            <div className='container'>
                <div className={styles["footer-body"]}>
                    <div className={styles['footer-left']}>
                        <div className={styles['footer__contacts']}>
                            <div className={styles['footer__contacts-title']}>Contacts:</div> 
                            <ul className={styles['footer__contacts-list']}>
                                <li>Gmail: sheepmeadow@gmail.com</li>
                                <li>Tester contact number:  +79062338842 (Vlad)</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles['footer-right']}>
                        <div className={styles['footer__company']}>
                            <div className={styles['footer__company-logo']}>
                                <img src={Logo} alt='Sheepmeadow logo'></img>
                            </div>
                            <div className={styles['footer__company-name']}>Sheepmeadow</div>
                        </div>
                        <div className={styles['footer__copyright']}>&copy; 2022 Sheepmeadow.</div>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer;