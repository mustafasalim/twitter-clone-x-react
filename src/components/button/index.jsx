import classNames from 'classnames'
import React, { createElement } from 'react'
import PropTypes from "prop-types"

function Button({ as, size, children, className, variant, ...props }) {
    return createElement(as, {
        type: "button",
        className: classNames("rounded-full flex justify-center items-center font-bold transition-all", {
            "px-4 h-8 text-sm": size === "normal",
            "px-4 h-9": size === "small",
            "px-4 text-[17px] h-[52px] w-full": size === "large",
            "bg-[color:var(--color-primary)] hover:opacity-90] text-white": variant === "primary",
            "bg-[#eff3f4] hover:bg-[#d7dbdc] text-black": variant === "white",
            "border border-[#536471] hover:border-[#67070f] hover:bg-[#f4212e1a] hover:text-[#f4212e]": variant === "white-outline",
            [className]: true
        }
        ), ...props
    }, children)
}

Button.propTypes = {
    as: PropTypes.any,
    size: PropTypes.oneOf(["small", "normal", "large"]),
    variant: PropTypes.oneOf(["primary", "white", "white-outline"]),
    className: PropTypes.string

}

Button.defaultProps = {
    as: "button",
    size: "normal",
    variant: "primary"
}

export default Button
