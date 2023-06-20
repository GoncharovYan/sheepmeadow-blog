import React from "react";
import * as axios from 'axios';
import styles from "../../scss/User/user.module.scss";

class User extends React.Component {

    componentDidMount() {
        console.log("Mounting...");

        axios.get("http://localhost:3000/messages").then(res => {
            console.log(res.data.messages);
        });
    }

    componentDidUpdate() {
        console.log("Updating...")
    }

    componentWillUnmount() {
        console.log("Unmounting...");
    }

    render() {
        return(
            <div className={styles['main__user']}>
                <div className={styles['user__userTop']}>
                    <div className={styles['userTop-avatar']}>
                        <img src={this.props.avatar} alt="" />
                    </div>
                    <div className={styles["userTop-nickname"]}>
                        <span>{this.props.nickname}</span>
                    </div>
                    <div className={styles["userTop-online"]}>
                        <span>{`${this.props.online ? "online" : "offline"}`}</span>
                    </div>
                </div>

                <div className={styles["user__userBot"]}>
                    <div className={styles["userBot__stat"]}>
                    <div className={styles["userBot__stat-status"]}>
                            <p>{this.props.status}</p>
                            <p className={styles["statName"]}>Status</p>
                        </div>
                        <div className={styles["userBot__stat-messages"]}>
                            <p>33</p>
                            <p className={styles["statName"]}>Messages</p>
                        </div>
                        <div className={styles["userBot__stat-join"]}>
                            <p>{this.props.join}</p>
                            <p className={styles["statName"]}>Club member since</p>
                        </div>
                    </div>
                    <div className={styles["userBot-quote"]}>
                        <span className={styles["quote"]}>{this.props.quote}<span className={styles["copyright"]}> ©</span></span>
                    </div>
                </div>
            </div>
        );        
    }

}

export default User;