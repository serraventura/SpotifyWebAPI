/**
 * You might be saying, "Why not just use jquery(document).ready".
 * Unfotunately that doesn't actually work, or it does and it takes forever to actually fire on ie9.
 * This method is pretty foolproof, just a small check every two frames. Super cheap and even older browsers
 * can handle it without much overhead.
 */
export default function ready(fn) {

    let id = setInterval(() => {

        if(document.readyState !== "loading"){
            clearInterval(id);
            fn();
        }

    }, 32);

}
