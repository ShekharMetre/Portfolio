import React from "react";

import "./style.scss";

const Section = ({ children, id, className, title, background }) => {
    return (
        <div
            id={id || ""}
            className={`section ${className ? className : ""} ${
                background === "dark" ? "dark" : "light"
            } section bg-black dark:bg-black dark:text-white p-50 md:p-100 flex justify-center`}
        >
            <div className="content w-full px-20 md:w-1200 flex items-center flex-col">
                {title && (
                    <div className="section-title text-white text-center max-w-500section-title ">
                        <h2 className="section-title text-white text-center max-w-500">{title}</h2>
                    </div>
                )}
                {children}
            </div>
        </div>
    );
};

export default Section;
