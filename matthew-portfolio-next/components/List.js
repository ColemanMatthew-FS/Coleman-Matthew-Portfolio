import React from "react";
import styles from './List.module.css';


export default function Text_Block( { header, items }) {
    const listItems = items.map((item) => <li>{item}</li>)
    return(
        <div>
            { header ? (
                <>
                    <h3 className="font-bold text-2xl">{header}</h3>
                </>
            ) : (
                <></>
            )}
            <ul className="text-lg mt-6">{listItems}</ul>
        </div>
    )
}