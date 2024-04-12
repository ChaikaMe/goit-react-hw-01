import css from "./Profile.module.css"
import clsx from "clsx";

export default function Profile(props) {
    return (
        <div className={css.profileContainer}>
            <div className={css.userData}>
                <img
                    className={css.image}
                    src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
                    alt="User avatar"
                />
                <p className={clsx(css.text, css.textBald)}>{props.name}</p>
                <p className={clsx(css.text, css.textGray)}>@{props.tag}</p>
                <p className={clsx(css.text, css.textGray)}>{props.location}</p>
            </div>

            <ul className={clsx(css.text, css.list)}>
                <li className={css.listItem}>
                    <span>Followers</span>
                    <span className={css.textBald}>{props.stats.followers}</span>
                </li>
                <li className={css.listItem}>
                    <span>Views</span>
                    <span className={css.textBald}>{props.stats.views}</span>
                </li>
                <li className={css.listItem}>
                    <span>Likes</span>
                    <span className={css.textBald}>{props.stats.likes}</span>
                </li>
            </ul>
        </div>
    );
}