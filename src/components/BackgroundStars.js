import React, {Component} from 'react';

const STARS = [
    "star-03px-blue",
    "star-03px-orange",
    "star-03px-red",
    "star-03px-white",
    "star-03px-yellow",
    "star-04px-blue",
    "star-04px-orange",
    "star-04px-red",
    "star-04px-white",
    "star-04px-yellow",
]

//getRandomInt() has been copied from devstudioonline.com
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function RenderRandomStar() {
    function getRandomSrc() {
        const randomInt = getRandomInt(0, STARS.length - 1);
        return (STARS[randomInt]);
    }
    function getRandomSize() {
        const shapeMultiplyer = (thisSrc.includes("03px") ? 1 : 2);
        const thisRandomInt = getRandomInt(1, 3);
        return (`${1 * shapeMultiplyer * thisRandomInt}px`);
    }
    const thisSrc = getRandomSrc();
    const thisSize = getRandomSize();
    return (
        <img 
            className={"background-star"}
            src={"stars/" + thisSrc + 
            ".png"}
            alt="A randomly-generated background star"
            style={{
                top: (Math.random() * window.screen.availHeight),
                left: (Math.random() * window.screen.availWidth),
                transform: `rotate(${Math.random() * 90}deg)`,
                height: thisSize,
                width: thisSize
            }}
        />
    );
}


function RenderRandomStars(numStars) {
    let starsArray = [];
    for (let i = 0; i < numStars; i++) {
        starsArray.push(RenderRandomStar());
    }
    return starsArray;
}
function RenderDistantStars() {
    return (
        <div className="background-stars-distant">
            {RenderRandomStars(20)}
        </div>
    );
}
function RenderMediumStars() {
    return (
        <div className="background-stars-medium">
            {RenderRandomStars(20)}
        </div>
    );
}
function RenderNearbyStars() {
    return (
        <div className="background-stars-nearby">
            {RenderRandomStars(20)}
        </div>
    );
}
class BackgroundStars extends Component {
    render() {
        return (
            <div className="background-stars">
                <RenderDistantStars/>
                <RenderMediumStars/>
                <RenderNearbyStars/>
            </div>
        );
    }
}

export default BackgroundStars;