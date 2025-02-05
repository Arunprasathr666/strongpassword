import React from "react";

 export const PasswordGenerator = () => {
    return <div className="password-generator">
        <h2>Strong Password Generator</h2>
        <div className="input-group">
            <label htmlFor="num">Password Length:</label>
            <input type="Number" id="num"/>
        </div>
        <div className="checkbox-group">
            <input type="checkbox"id="upper" />
            <label htmlFor="upper">Include Uppercase</label>
        </div>
        <div className="checkbox-group">
            <input type="checkbox"id="lower" />
            <label htmlFor="lower">Include Lowercase</label>
        </div>
        <div className="checkbox-group">
            <input type="checkbox"id="numbers" />
            <label htmlFor="number">Include Numbers</label>
        </div>
        <div className="checkbox-group">
            <input type="checkbox"id="symbol" />
            <label htmlFor="symbol">Include Symbol</label>
        </div>
        <button className="generate-btn" > Generate Password</button>
        <div className="generated-password">
            <input type="text" readOnly />
            <button className="copy-btn">Copy</button>
        </div>
    </div>
};

