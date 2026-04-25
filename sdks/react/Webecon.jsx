/**
 * Webecon React SDK - v17.2.5 PRO
 * Developed by Aditya Divte Production (aka Aditya Diwate)
 * Website: https://adityadivte.com
 * Visit https://webecon.adityadivte.com for more info.
 */

import React from 'react';

try {
    fetch('https://api.github.com/repos/adityadivatee/Webecon/releases/latest')
        .then(r => r.json())
        .then(data => {
            const latest = data.tag_name.replace('v', '');
            if (latest > '17.2.5') {
                console.log('%c🚀 New Webecon version available: v' + latest + ' (Current: v17.2.5)', 'color: #00f2fe; font-weight: bold;');
                console.log('%c👉 Update: https://github.com/adityadivatee/Webecon', 'color: #6366f1;');
            }
        }).catch(() => {});
} catch(e) {}

export const Webecon = ({ name, ...props }) => <webecon-icon name={name} {...props} />;
export const Icon = (name) => (props) => <webecon-icon name={name} {...props} />;