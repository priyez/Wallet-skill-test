import React from 'react'

const Icon = ({ icon, width = 25, height = 25, fill = "red" }) => {
    const icons = {
        back: (
            <svg xmlns="http://www.w3.org/2000/svg"
                height={height} width={width} fill={fill} viewBox="0 0 11.28 19.2">
                <g id="Layer_2" data-name="Layer 2"><g id="WALLET"><g id="HEADER"><g id="ICON_MENU" data-name="ICON MENU"><g id="ICON_BACK" data-name="ICON BACK">
                    <path class="cls-1" d="M4.1,9.6l6.68-6.7a1.68,1.68,0,0,0,0-2.4,1.68,1.68,0,0,0-2.4,0L.5,8.4a1.68,1.68,0,0,0,0,2.4l7.88,7.9a1.7,1.7,0,0,0,2.4-2.4Z" />
                </g></g></g></g></g></svg>
        ),
        wallet: (
            <svg xmlns="http://www.w3.org/2000/svg"
                height={height} width={width} fill={fill} viewBox="0 0 21.12 20.88">
                <g id="Layer_2" data-name="Layer 2"><g id="WALLET"><g id="ICON_WALLET" data-name="ICON WALLET"><g id="ICON_WALLET-2" data-name="ICON WALLET">
                    <path class="cls-1" d="M18.72,5.76H4.32a1.44,1.44,0,1,1,0-2.88h10A1.32,1.32,0,0,0,15.6,1.56V1.32A1.32,1.32,0,0,0,14.28,0H2.4A2.39,2.39,0,0,0,0,2.4V18.48a2.39,2.39,0,0,0,2.4,2.4H18.72a2.39,2.39,0,0,0,2.4-2.4V8.16A2.39,2.39,0,0,0,18.72,5.76Zm-2.4,9.36a1.92,1.92,0,1,1,1.92-1.92A1.92,1.92,0,0,1,16.32,15.12Z" /></g></g></g></g>
            </svg>
        ),
        explore: (
            <svg xmlns="http://www.w3.org/2000/svg"
                height={height} width={width} fill={fill} viewBox="0 0 21.12 21.12">
                <g id="Layer_2" data-name="Layer 2"><g id="WALLET"><g id="ICON_EXPLORE_COINS" data-name="ICON EXPLORE COINS">
                    <g id="ICON_EXPLORE_COINS-2" data-name="ICON EXPLORE COINS">
                        <path class="cls-1" d="M10.75,8.83a1.54,1.54,0,1,0,1.54,1.54A1.53,1.53,0,0,0,10.75,8.83ZM10.56,0A10.56,10.56,0,1,0,21.12,10.56,10.52,10.52,0,0,0,10.56,0Zm5.53,5.55-2.57,7.71a.42.42,0,0,1-.26.26L5.55,16.09s-.09,0-.13,0A.4.4,0,0,1,5,15.7a.17.17,0,0,1,0-.13L7.6,7.86a.42.42,0,0,1,.26-.26L15.57,5s.09,0,.13,0a.4.4,0,0,1,.43.43A.17.17,0,0,1,16.09,5.55Z" /></g></g></g></g></svg>
        ),
        notification: (
            <svg xmlns="http://www.w3.org/2000/svg"
                height={height} width={width} fill={fill} viewBox="0 0 17.28 20.64">
                <g id="Layer_2" data-name="Layer 2"><g id="WALLET"><g id="ICON_NOTIFICATION" data-name="ICON NOTIFICATION"><g id="ICON_NOTIFICATION-2" data-name="ICON NOTIFICATION">
                    <path class="cls-1" d="M16.27,12.72a2.54,2.54,0,0,1-.53-.58l0,0A9.55,9.55,0,0,1,15.11,9l0-.38v0a11,11,0,0,0-1.8-4.87,5.74,5.74,0,0,0-3-2.23A1.64,1.64,0,0,0,7,1.52,5.74,5.74,0,0,0,4,3.75a11.11,11.11,0,0,0-1.8,4.88v0c0,.12,0,.25,0,.38a9,9,0,0,1-.61,3.06l0,0a2.33,2.33,0,0,1-.53.58,2.21,2.21,0,0,0-.68,3,1.19,1.19,0,0,0,.87.61H16.08a1.17,1.17,0,0,0,.87-.61A2.21,2.21,0,0,0,16.27,12.72ZM10.35,18H6.87a.38.38,0,0,0-.29.15.73.73,0,0,0-.07.59h0a2.19,2.19,0,0,0,2.13,1.89,2.21,2.21,0,0,0,2.14-2v0a.56.56,0,0,0-.08-.48A.45.45,0,0,0,10.35,18Z" />
                </g></g></g></g></svg>
        ),
        settings: (
            <svg xmlns="http://www.w3.org/2000/svg"
                height={height} width={width} fill={fill} viewBox="0 0 21.13 21.13">
                <g id="Layer_2" data-name="Layer 2"><g id="WALLET"><g id="ICON_SETTINGS" data-name="ICON SETTINGS"><g id="ICON_SETTINGS-2" data-name="ICON SETTINGS">
                    <path class="cls-1" d="M19.86,8.69a2.9,2.9,0,0,1-1.57-1.33,3,3,0,0,1,.17-2.05A2.09,2.09,0,0,0,18,3.09a2.09,2.09,0,0,0-2.21-.43,3,3,0,0,1-2.05.18,2.89,2.89,0,0,1-1.33-1.58A2.12,2.12,0,0,0,10.56,0,2.11,2.11,0,0,0,8.69,1.26,2.93,2.93,0,0,1,7.36,2.84a3,3,0,0,1-2.05-.18,2.11,2.11,0,0,0-2.22.43,2.11,2.11,0,0,0-.43,2.22,2.88,2.88,0,0,1,.17,2.05A2.83,2.83,0,0,1,1.26,8.69,2.11,2.11,0,0,0,0,10.56a2.12,2.12,0,0,0,1.26,1.88,2.83,2.83,0,0,1,1.57,1.33,2.88,2.88,0,0,1-.17,2.05A2.09,2.09,0,0,0,3.09,18a2.09,2.09,0,0,0,2.22.43,2.94,2.94,0,0,1,2.05-.17,2.93,2.93,0,0,1,1.33,1.58,2.11,2.11,0,0,0,1.87,1.26,2.12,2.12,0,0,0,1.88-1.26,2.92,2.92,0,0,1,1.32-1.58,3,3,0,0,1,2.06.17,2,2,0,0,0,2.64-2.64,2.94,2.94,0,0,1-.17-2.05,2.9,2.9,0,0,1,1.57-1.33,2.11,2.11,0,0,0,1.27-1.88A2.11,2.11,0,0,0,19.86,8.69Zm-9.3,5.75a3.88,3.88,0,1,1,3.88-3.87A3.87,3.87,0,0,1,10.56,14.44Z" />
                </g></g></g></g></svg>
        ),
        menu: (
            <svg xmlns="http://www.w3.org/2000/svg"
                height={height} width={width} fill={fill}
                viewBox="0 0 4.08 19.2"><g id="Layer_2" data-name="Layer 2"><g id="WALLET"><g id="HEADER"><g id="ICON_MORE" data-name="ICON MORE"><g id="ICON_MORE-2" data-name="ICON MORE"><path class="cls-1" d="M2,3.93a2,2,0,0,0,2-2A2,2,0,0,0,2,0,2,2,0,0,0,0,2,2,2,0,0,0,2,3.93ZM2,15.27A2,2,0,1,0,2,19.2a2,2,0,1,0,0-3.93ZM2,7.56a2,2,0,1,0,0,3.93A2,2,0,1,0,2,7.56Z" /></g></g></g></g></g></svg>
        ),
        more: (
            <svg xmlns="http://www.w3.org/2000/svg"
                height={height} width={width} fill={fill} viewBox="0 0 26.16 7.92">
                <g id="Layer_2" data-name="Layer 2"><g id="WALLET"><g id="BITCOIN_WALLET" data-name="BITCOIN WALLET"><g id="ICON_ARROW_DOWN_DETAILED_STATISTIC_" data-name="ICON ARROW DOWN (DETAILED STATISTIC)">
                    <path class="cls-1" d="M26,1.2A1.83,1.83,0,0,0,23.67.12l-10.6,4L2.5.16A1.85,1.85,0,0,0,1.19,3.61L12.33,7.8a1.79,1.79,0,0,0,.82.11,1.79,1.79,0,0,0,.72-.12L25,3.58A1.85,1.85,0,0,0,26,1.2Z" />
                </g></g></g></g></svg>
        ),
        dollar:
            (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height={height} width={width} fill={fill}
                    version="1.1"
                    viewBox="0 0 31.371 31.371"
                    xmlSpace="preserve"
                >
                    <path d="M24.26 20.34c0 3.42-2.423 6.342-6.845 7.111v3.92h-3.768v-3.648c-2.578-.117-5.076-.811-6.537-1.654l1.154-4.5c1.615.886 3.883 1.693 6.383 1.693 2.191 0 3.691-.848 3.691-2.385 0-1.461-1.23-2.389-4.077-3.348-4.112-1.385-6.921-3.306-6.921-7.033 0-3.386 2.385-6.035 6.499-6.845V0h3.767v3.383c2.576.115 4.309.652 5.576 1.268l-1.115 4.348c-.997-.424-2.767-1.311-5.536-1.311-2.5 0-3.307 1.076-3.307 2.154 0 1.268 1.346 2.074 4.613 3.307 4.579 1.613 6.423 3.728 6.423 7.191z"></path>
                </svg>

            )

    }
    return icons[icon] || null;
}
export default Icon
