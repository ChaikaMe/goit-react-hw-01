import clsx from "clsx"
import css from "./FriendListItem.module.css"

export default function FriendListItem({ avatar, name, isOnline } = friends) {
    return (
        <div className={css.container}>
            <img className={css.image} src={avatar} alt="Avatar" width="48" />
            <p className={clsx(css.text)}>{name}</p>
            <p className={clsx(css.text, isOnline ? css.textGreen : css.textRed)}>{isOnline ? "Online" : "Offline"}</p>
        </div>
    )
}