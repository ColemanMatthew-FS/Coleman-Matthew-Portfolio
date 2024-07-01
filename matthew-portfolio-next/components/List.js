import React from "react";
import styles from './List.module.css';


export default function Text_Block( { header, items }) {
    const listItems = items.map((item) => <li>{item}</li>)
    return(
        <div className="max-w-lg">
            {/* Ternary operator to check and display an <h3> if a header exists. */}
            { header ? (
                <>
                    <h3 className="font-bold text-2xl md:text-5xl">{header}</h3>
                </>
            ) : (
                <></>
            )}
            <ul className="text-lg mt-6 mb-12">{listItems}</ul>
        </div>
    )
}