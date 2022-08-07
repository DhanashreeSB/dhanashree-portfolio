import React from "react";
import { Experience } from "../../components/Experience/Experience";
import { NavigationMenu } from "../../shared/NavigationMenu/NavigationMenu";

export const ExperiencePage = () => {
    return (
        <div>
            <NavigationMenu isSticky={true} />
            <Experience />
        </div>
    );
};
