import React from "react";
import styles from './Text_Block.module.css';

export default function Text_Block( { header, text }) {
    return(
        <div>
            { header ? (
                <>
                    <h2>{header}</h2>
                </>
            ) : (
                <></>
            )}
            <p>{ text} </p>
        </div>
    )
}