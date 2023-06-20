import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import styles from "../../scss/Community/community.module.scss";

function ChatSelectorItem(props) {
    return(
        <NavLink to={`/community/${props.url}`} className={styles['chat-selector__item']}>
            <img src={props.image} alt={`${props.title} image`} ></img> 

            <div className={styles["chat-selector__item-title"]}>
                {props.title} 
            </div>
        </NavLink>
    );
}

function MessageItem(props) {
    return(
        <div className={styles['chat__message']}>
            <span className={styles['chat__message-text']}>{props.text}</span>
        </div>
    )
}

function Chat(props) {
    let messages = props.raw_messages.map((el) => <MessageItem text={el.message}/>);
    let newChatMessage = React.createRef();

    return(
        <div className={styles['chat']}>
            <div className={styles['chat__messages']}>
                {messages}
            </div>
            <div className={styles['chat__input']}>
                <textarea 
                    onChange={() => props.updateMessage(props.chatID, newChatMessage.current.value)}
                    value={props.tmp_message} 
                    ref={newChatMessage}/>   
                <button onClick={() => props.sendMessage(props.chatID)}>&gt;</button>
            </div>
        </div>
    );
}

function Community(props) {
    let selectors = props.selectors.map((el) => <ChatSelectorItem 
        url= {el.url}
        title= {el.title}
        image= {el.image}/>)

    let chats = props.chats.map((el) => <Route path={el.url} element={<Chat 
        chatID={el.url}
        raw_messages={el.messages}
        tmp_message={el.tmp_message}
        updateMessage={props.updateMessage}
        sendMessage={props.sendMessage}
        />}/>);

    chats.push(<Route path={'/'} element={
        <div className={`${styles["chat-plug"]}`}>
            <p>Select your chat</p>
        </div>
    }/>);

    return(
            <div className={`${styles['main__community']} ${styles['mt-large']} ${styles['mb-large']}`}>

                <div className={`${styles["title"]} ${styles['community_title']}`}>
                    <h2>Enjoy <span className="accent">our</span> community!</h2>
                </div>
                <div className={styles['chat-selector']}>
                    {selectors}
                </div>
                <div className={styles['chat-box']}>
                    <Routes>
                        {chats}
                    </Routes>
                </div>
            </div>

    )
}

export default Community;