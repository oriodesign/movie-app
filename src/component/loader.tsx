import * as React from "react";
import './loader.scss';
import {ReactNode} from 'react';

/**
 * Loader Component
 * @returns {ReactNode}
 * @constructor
 */
export function Loader(): JSX.Element {
    return (
        <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>);
}
