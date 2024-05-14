import React from "react";
import styles from './List.module.css';


export default function Text_Block( { header, items }) {
    const listItems = items.map((item) => <li>{item}</li>)
    return(
        <div>
            { header ? (
                <>
                    <h2>{header}</h2>
                </>
            ) : (
                <></>
            )}
            <ul>{listItems}</ul>
        </div>
    )
}