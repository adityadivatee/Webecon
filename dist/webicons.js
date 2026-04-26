/**
 * Webecon - Premium Animated Icon Engine v17.2.7 PRO
 * Developed by Aditya Divte Production (aka Aditya Diwate)
 * Website: https://adityadivte.com
 * Project Hub: https://webecon.adityadivte.com
 * 
 * Free for commercial use. Resale and branding removal forbidden.
 */
(function(){const icons={
    // Navigation
    'home': `<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>`,
    'menu': `<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>`,
    'chevron-left': `<polyline points="15 18 9 12 15 6"/>`,
    'chevron-right': `<polyline points="9 18 15 12 9 6"/>`,
    'chevron-up': `<polyline points="18 15 12 9 6 15"/>`,
    'chevron-down': `<polyline points="6 9 12 15 18 9"/>`,
    'arrow-left': `<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>`,
    'arrow-right': `<path d="m12 5 7 7-7 7"/><path d="M5 12h14"/>`,
    'arrow-up': `<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>`,
    'arrow-down': `<path d="m19 12-7 7-7-7"/><path d="M12 5v14"/>`,
    'external-link': `<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>`,
    'more-horizontal': `<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>`,
    'more-vertical': `<circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/>`,
    'grid': `<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>`,
    'list': `<line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/>`,
    'arrow-up-right': `<path d="M7 17L17 7"/><path d="M7 7h10v10"/>`,
    'arrow-up-left': `<path d="M17 17L7 7"/><path d="M17 7H7v10"/>`,
    'arrow-down-right': `<path d="M7 7l10 10"/><path d="M17 7v10H7"/>`,
    'arrow-down-left': `<path d="M17 7L7 17"/><path d="M7 7v10h10"/>`,
    'at-sign': `<circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/>`,

    // Actions
    'plus': `<path d="M5 12h14"/><path d="M12 5v14"/>`,
    'minus': `<path d="M5 12h14"/>`,
    'edit': `<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>`,
    'trash': `<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/>`,
    'save': `<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>`,
    'copy': `<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>`,
    'share': `<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/>`,
    'download': `<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>`,
    'upload': `<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>`,
    'refresh': `<path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/>`,
    'filter': `<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>`,
    'sort': `<path d="M11 5h10"/><path d="M11 9h7"/><path d="M11 13h4"/><path d="m3 17 3 3 3-3"/><path d="M6 18V4"/>`,
    'check': `<polyline points="20 6 9 17 4 12"/>`,
    'close': `<line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/>`,
    'star': `<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>`,
    'heart': `<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>`,
    'thumbs-up': `<path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L9.18 4.41a2 2 0 0 1 3.25-1.12Z"/>`,
    'bookmark': `<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"/>`,
    'search': `<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>`,
    'award': `<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>`,
    'bar-chart': `<line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/>`,

    // Communication
    'user': `<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>`,
    'users': `<path d="M16 21v-2a4 4 0 0 0-4-4H6a6 6 0 0 0-6 6v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="18" cy="11" r="3"/>`,
    'mail': `<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>`,
    'bell': `<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>`,
    'message-circle': `<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-12.7 8.19 8.19 0 0 1 4.9 1.5L21 3Z"/>`,
    'send': `<path d="m22 2-7 20-4-9-9-4 20-7z"/>`,
    'phone': `<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>`,
    'wifi': `<path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 10.59a16 16 0 0 1 21.16 0M8.59 14.41a6 6 0 0 1 6.82 0M12 18h.01"/>`,
    'video': `<path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/>`,
    'camera': `<path d="M14.5 4h-5L7 7H4.5A2.5 2.5 0 0 0 2 9.5v9A2.5 2.5 0 0 0 4.5 21h15a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 19.5 7H17l-2.5-3z"/><circle cx="12" cy="13" r="3"/>`,
    'mic': `<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/>`,

    // Content & Media
    'file': `<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/>`,
    'folder': `<path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93l-2.1-2.11A2 2 0 0 0 8.56 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z"/>`,
    'image': `<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>`,
    'music': `<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>`,
    'play': `<polygon points="5 3 19 12 5 21 5 3"/>`,
    'pause': `<rect width="4" height="16" x="6" y="4"/><rect width="4" height="16" x="14" y="4"/>`,
    'stop': `<rect width="16" height="16" x="4" y="4" rx="2"/>`,
    'eye': `<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>`,
    'monitor': `<rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/>`,

    // Status & Info
    'clock': `<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>`,
    'calendar': `<rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>`,
    'lock': `<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>`,
    'shield': `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`,
    'zap': `<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>`,

    // Finance & Crypto
    'bitcoin': `<circle cx="12" cy="12" r="10"/><path d="M12 6a2.5 2.5 0 1 1 0 5h2a2.5 2.5 0 1 1 0 5H8m2-12v2m4 0v2m-4 10v2m4 0v2"/>`,
    'wallet': `<path d="M20 12V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V12Z"/><path d="M16 12h4v3h-4z"/>`,
    'bank': `<path d="M3 21h18M3 10h18M5 10v11M9 10v11M13 10v11M17 10v11M12 3 2 10h20Z"/>`,
    'receipt': `<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z"/><path d="M16 8H8M16 12H8M13 16H8"/>`,
    'dollar': `<path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>`,
    'euro': `<path d="M19 5.91a8 8 0 1 0 0 12.18M7 10h10M7 14h10"/>`,
    'pound': `<path d="M18 5c0-2-3-3-4.5-3S9 4 9 7v11h6m-9-3h7M6 22h12"/>`,
    'coins': `<circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/>`,
    'piggy-bank': `<path d="M19 5c-1.5 0-2.8 1.4-3 2-2.5-.5-4.5.5-5 3-1.5 0-3 1-3 2.5S9.5 15 11 15c0 3 .5 4 2 4h4c1.5 0 2-1 2-4h2c2.5 0 3-4.5 1-6-.5-1.5-1.5-2-3-1.5.2-.6.5-1.5.5-2.5 0-2-1.5-3.5-3.5-3.5Z"/>`,
    'trending-up': `<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>`,

    // Food & Drink
    'coffee': `<path d="M17 8h1a4 4 0 1 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><path d="M6 1v3M10 1v3M14 1v3"/>`,
    'pizza': `<path d="M15 11s-2-2-5-2-5 2-5 2l5 10Z"/><circle cx="10" cy="13" r="1"/><circle cx="8" cy="11" r="1"/><circle cx="12" cy="11" r="1"/>`,
    'beer': `<path d="M17 11h1a3 3 0 0 1 0 6h-1M5 21h9V6H5v15z"/><path d="M5 6c0-2 2-3 4.5-3S14 4 14 6"/>`,
    'wine': `<path d="M8 22h8M12 15v7M19 3a7 7 0 0 1-14 0h14Z"/><path d="M12 15a7 7 0 0 0 7-7H5a7 7 0 0 0 7 7Z"/>`,
    'apple': `<path d="M12 12c4.97 0 9-3.048 9-6.81C21 11.432 17.151 8 12 8s-9 3.432-9 7.19c0 3.761 4.03 6.81 9 6.81Z"/><path d="M12 8c0-3.314 2.686-6 6-6"/>`,
    'apple-logo': `<path d="M12 22s-8-4.5-8-11.8A7.5 7.5 0 0 1 11.5 3a2.5 2.5 0 0 1 1 0 7.5 7.5 0 0 1 7.5 7.2c0 7.3-8 11.8-8 11.8Z"/><path d="M12 5V2"/>`,
    'cake': `<path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 13h16M12 11V8M10 8h4M12 4v2"/>`,
    'egg': `<path d="M12 22a8 8 0 0 0 8-8c0-5.5-3.5-12-8-12S4 8.5 4 14a8 8 0 0 0 8 8Z"/>`,
    'soup': `<path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"/><path d="M7 6v3M12 5v4M17 6v3"/>`,
    'utensils': `<path d="M3 2v7c0 1.1.9 2 2 2h4V2M15 2v20M15 2h2c2 0 2 3 2 3v17"/>`,
    'chef-hat': `<path d="M6 14v1a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-1"/><path d="M19 12a4 4 0 1 0-7.8-1.2A4 4 0 1 0 5 12c0 2 1.5 3 1 4h12c-.5-1 1-2 1-4Z"/>`,

    // Health & Fitness
    'heart-pulse': `<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M6 12h2l1-2 2 4 1-2h2"/>`,
    'stethoscope': `<path d="M5 21h14M16 10V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v5c0 3 8 3 8 8v3"/><circle cx="16" cy="14" r="4"/>`,
    'pills': `<path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/>`,
    'pills-capsule': `<circle cx="9" cy="9" r="5"/><circle cx="15" cy="15" r="5"/><line x1="6" x2="12" y1="6" y2="12"/><line x1="12" x2="18" y1="12" y2="18"/>`,
    'brain': `<path d="M9.5 2a2.5 2.5 0 0 1 0 5M22 17a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v5Z"/>`,
    'bone': `<path d="M17 10a3 3 0 1 1 5 2.4 3 3 0 1 1-5 2.4m-10-4.8a3 3 0 1 0-5 2.4 3 3 0 1 0 5 2.4M17 12H7M17 15H7"/>`,
    'syringe': `<path d="m18 2 4 4-11 11-4-4L18 2zM17 7l3-3M5 11l-2 2v2l2 2h2l2-2v-2l-2-2zM11 17l4 4"/>`,
    'microscope': `<path d="M6 18h8M3 22h18M12 6a4 4 0 1 0-8 0v12M12 6V3m0 16v-3M18 10a4 4 0 0 1-4 4"/>`,
    'dumbbell': `<path d="M18 7v10M6 7v10M2 9v6h4V9H2zm16 0v6h4V9h-4zM6 12h12"/>`,
    'activity': `<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>`,
    'thermometer': `<path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/>`,

    // Travel & Maps
    'plane': `<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3.5 20.5 3 18.5 3.5 17 5L13.5 8.5 5.3 6.7c-1.1-.3-2.2.3-2.5 1.4l-.1.4 8.7 3.5-3.5 3.5-4-.5c-.5-.1-1 .1-1.3.5l-.2.3 3 3 3 3 .3-.2c.4-.3.6-.8.5-1.3l-.5-4 3.5-3.5 3.5 8.7.4-.1c1-.3 1.6-1.4 1.4-2.5Z"/>`,
    'train': `<rect width="16" height="15" x="4" y="3" rx="2"/><path d="M4 11h16M8 15V3m8 12V3M18 11V3M6 11V3M8 18l-3 3M16 18l3 3"/>`,
    'bus': `<path d="M8 6V2h8v4M6 6h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zM9 13v4m6-4v4"/>`,
    'car': `<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12.4V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/><path d="M13 17H11"/>`,
    'ship': `<path d="M2 13h20M5 13 2 18h20l-3-5M12 9V2M8 9h8m-3-4h3"/>`,
    'mountain': `<path d="M8 20 2 10l6-6 4 6 4-6 6 10-6 10z"/>`,
    'compass': `<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>`,
    'luggage': `<path d="M6 20h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2zM9 6V2h6v4M12 6v14"/>`,
    'hotel': `<path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18M10 22v-4a2 2 0 0 1 4 0v4M7 8h2M15 8h2M7 12h2M15 12h2M7 16h2M15 16h2"/>`,
    'globe': `<circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20M2 12h20"/>`,

    // Development
    'git-branch': `<line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="9" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>`,
    'git-commit': `<circle cx="12" cy="12" r="3"/><line x1="3" x2="9" y1="12" y2="12"/><line x1="15" x2="21" y1="12" y2="12"/>`,
    'git-merge': `<circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/>`,
    'git-pull-request': `<circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><line x1="6" x2="6" y1="9" y2="21"/><path d="M18 15V6a3 3 0 0 0-3-3H6"/>`,
    'code': `<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>`,
    'terminal': `<polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/>`,
    'bug': `<path d="M8 2a3 3 0 0 1 8 0v4a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V2zM15 9l3 3m-9-3-3 3m12 1 3 3m-15-3-3 3m12 1 3 3M6 17l-3 3"/>`,
    'brackets': `<path d="M16 3h3v18h-3M8 21H5V3h3"/>`,
    'parentheses': `<path d="M8 21s-4-3-4-9 4-9 4-9m8 0s4 3 4 9-4 9-4 9"/>`,
    'curly-braces': `<path d="M8 3c-3 0-3 3-3 3s0 3 3 3 3 0 3 3-3 3-3 3s0 3 3 3m8-18c3 0 3 3 3 3s0 3-3 3-3 0-3 3 3 3 3 3s0 3-3 3"/>`,

    // Building/House
    'building': `<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4M8 6h2M14 6h2M8 10h2M14 10h2M8 14h2M14 14h2"/>`,
    'store': `<path d="M3 9 12 2l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"/><path d="M3 9h18M9 22V12h6v10"/>`,
    'factory': `<path d="M22 21H2M17 21v-7l-4-3v4l-4-3v10M2 21V10l4-3v3l4-3v14"/>`,
    'warehouse': `<path d="M22 21H2V9l10-6 10 6v12ZM7 21V13h10v8"/>`,
    'school': `<path d="m4 6 8-4 8 4v10l-8 4-8-4V6zM12 22v-6m-4 2h8"/>`,

    // General
    'rocket': `<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3.5 3.5L5 15l3.5-3.5L12 15zM22 2c-3 0-10 1-10 10l5 5c9 0 10-7 10-10zM9 18l-5 4M18 5c1 0 1 1 1 1"/>`,
    'sparkles': `<path d="m12 3 1.91 5.82L21 12l-7.09 3.18L12 21l-1.91-5.82L3 12l7.09-3.18L12 3z"/>`,
    'fire': `<path d="M12 2c0 3.6-2.4 4.8-1.2 8.4a7.2 7.2 0 0 1-10.8 4.8c1.2-2.4 1.2-4.8 0-7.2a12 12 0 0 1 12-6z"/><path d="M18.8 8.4A12 12 0 0 1 12 22a7.2 7.2 0 0 1-7.2-7.2c1.2 0 1.2-2.4 0-4.8a12 12 0 0 1 12-10c0 3.3-1.6 4.3-.8 8.4z"/>`,
    'snowflake': `<path d="M12 2v20M2 12h20m-4.22-5.78L4.22 17.78m13.56 0L4.22 6.22"/><path d="m8 4 4 4 4-4m-8 16 4-4 4 4m4-8-4-4 4-4m-16 8 4-4-4-4"/>`,
    'sun-dim': `<circle cx="12" cy="12" r="4"/><path d="M12 4V2m0 20v-2M4 12H2m20 0h-2M5 5l1.5 1.5M17.5 17.5 19 19M5 19l1.5-1.5M17.5 6.5 19 5"/>`,
    'moon-stars': `<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"/><path d="M19 3v4m-2-2h4"/>`,
    'cloud-rain': `<path d="M17.5 19c3 0 5.5-2.5 5.5-5.5 0-2.8-2.1-5.1-4.8-5.4A7 7 0 0 0 4.5 12c-2 0-3.5 1.5-3.5 4s1.5 4.5 4 4.5h2"/><path d="M8 14v4m4-2v4m4-4v4"/>`,
    'cloud-lightning': `<path d="M17.5 19c3 0 5.5-2.5 5.5-5.5 0-2.8-2.1-5.1-4.8-5.4A7 7 0 0 0 4.5 12c-2 0-3.5 1.5-3.5 4s1.5 4.5 4 4.5h2"/><path d="M13 11l-2 4h3l-2 4"/>`,
    'wind': `<path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2m13.4-6.4a2.5 2.5 0 1 0-1.8 4.3h4.6m-3.4 4.2a2.5 2.5 0 1 1 1.8 4.3H2"/>`,
    'life-buoy': `<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><path d="m4.93 4.93 4.24 4.24m5.66 5.66 4.24 4.24m-14.14 0 4.24-4.24m5.66-5.66 4.24-4.24"/>`,

    // Extended Social
    'tiktok': `<path d="M9 12a4 4 0 1 0 4 4V2a5 5 0 0 0 5 5"/>`,
    'discord': `<path d="M18.5 4a12 12 0 0 0-3.5-1 12 12 0 0 0-.5 1 12 12 0 0 0-5 0 12 12 0 0 0-.5-1 12 12 0 0 0-3.5 1 12 12 0 0 0-2 8c1 2 3.5 3 4.5 3 .5-.5.5-1 1-1.5-1-.5-2-1-3-2.5.5.5 1.5 1 2.5 1.5h6c1-.5 2-1 2.5-1.5-1 1.5-2 2-3 2.5.5.5.5 1 1 1.5 1 0 3.5-1 4.5-3 0-4-1-7-2-8ZM9 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>`,
    'telegram': `<path d="m22 2-21 8 8 3 10-7-7 8 8 3 4-15Z"/>`,
    'dribbble': `<circle cx="12" cy="12" r="10"/><path d="M8.5 2.2c1.7 2.2 2.6 5 2.5 7.8M4.1 15.5c4.2-1.2 8.1-1.2 12.3 0M12 21.8c-1.3-3.8-1.3-7.7 0-11.5"/>`,
    'behance': `<path d="M12 12h5v1h-5zM9 10c0-1.7-1.3-3-3-3H2v10h4c1.7 0 3-1.3 3-3v-4Zm-3 3H4v-1h2v1Zm0 3H4v-1h2v1ZM14 7h7M15 10c-1.7 0-3 1.3-3 3s1.3 3 3 3c1 0 2-.5 2.5-1.2l-1-.6c-.3.4-.8.8-1.5.8-1 0-1.8-.7-2-1.5h5c.1-.2.2-.5.2-.8s-1.3-2.7-3.2-2.7Zm1.8 2.2h-3.6c.2-.8.9-1.3 1.8-1.3s1.6.5 1.8 1.3Z"/>`,
    'patreon': `<circle cx="16" cy="11.5" r="7.5"/><rect width="3" height="19" x="3" y="2.5"/>`,
    'twitch': `<path d="M21 2H3l.5 16h5v4l4-4h5l4-4V2ZM19 15h-4l-3 3v-3H5V4h14v11Z"/><path d="M16 7h2v4h-2V7Zm-4 0h2v4h-2V7z"/>`,

    // Marketing & Analytics
    'target': `<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>`,
    'megaphone': `<path d="m3 11 18-5v12L3 13v-2Z"/><path d="M11.6 16.8 9 20M11 6l3-3"/>`,
    'chart-pie': `<path d="M21.2 15.6A10 10 0 1 0 8.4 2.8M22 12a10 10 0 0 0-10-10v10h10Z"/>`,
    'funnel': `<path d="M3 3h18l-7 9v6l-4 2v-8L3 3Z"/>`,
    'seo': `<circle cx="8" cy="10" r="3"/><path d="M11 10h10M11 14h6"/><circle cx="16" cy="14" r="3"/>`,
    'ranking': `<path d="M2 20h20M7 20V10M12 20V4M17 20V14"/>`,
    'hashtag': `<line x1="4" x2="20" y1="9" y2="9"/><line x1="4" x2="20" y1="15" y2="15"/><line x1="10" x2="8" y1="3" y2="21"/><line x1="16" x2="14" y1="3" y2="21"/>`,

    // Science & Education
    'atom': `<circle cx="12" cy="12" r="1"/><path d="M12 2a15 15 0 1 0 0 30 15 15 0 0 0 0-30Z"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(45 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-45 12 12)"/>`,
    'flask': `<path d="M9 3h6M10 3v6l-4 11a2 2 0 0 0 2 3h8a2 2 0 0 0 2-3L14 9V3"/><path d="M8.5 15h7"/>`,
    'dna': `<path d="M8 2s4 4 4 10-4 10-4 10M16 2s-4 4-4 10 4 10 4 10M12 5h4M8 8h8M8 12h8M8 16h8M8 19h4"/>`,
    'telescope': `<path d="m10 7 11 3-3 11-11-3 3-11ZM2 22l8-8M17 11l4-4"/>`,
    'graduation-cap': `<path d="M22 10L12 5 2 10l10 5 10-5Z"/><path d="M6 12v5a6 6 0 0 0 12 0v-5Z"/><path d="M18 10v7"/>`,
    'atom-simple': `<circle cx="12" cy="12" r="2"/><path d="M10.3 8.2a4.5 4.5 0 1 0 3.4 7.6M13.7 8.2a4.5 4.5 0 1 1-3.4 7.6"/>`,

    // Gaming & Fun
    'controller': `<rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="6" cy="12" r="2"/><circle cx="18" cy="10" r="1"/><circle cx="18" cy="14" r="1"/><circle cx="16" cy="12" r="1"/><circle cx="20" cy="12" r="1"/>`,
    'trophy': `<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M12 14V19M8 22h8M12 4a7 7 0 0 0-7 7v3h14v-3a7 7 0 0 0-7-7Z"/>`,
    'joystick': `<path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M12 12v6M6 21h12"/>`,
    'sword': `<path d="m14.5 17.5 3 3 3.5-3.5-3-3M2 22l5-5M8.5 8.5 18 18M11 2s9 9 9 9l-9 9-9-9 9-9Z"/>`,
    'ghost': `<path d="M18 11V7a6 6 0 0 0-12 0v4L4 14v7l3-2 3 2 3-2 3 2 3-2 3 2v-7l-2-3Z"/><circle cx="9" cy="10" r="1"/><circle cx="15" cy="10" r="1"/>`,
    'alien': `<path d="M12 2a9 9 0 0 0-9 9c0 5 4 9 9 9s9-4 9-9a9 9 0 0 0-9-9Z"/><circle cx="8" cy="11" r="2"/><circle cx="16" cy="11" r="2"/><path d="M10 16s1 1 2 1 2-1 2-1"/>`,

    // Weather (Pro)
    'sunrise': `<path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 19l1.5-1.5M17.5 6.5 19 5M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/><path d="M3 16h18"/>`,
    'sunset': `<path d="M12 2v4M12 20v2M2 12h2M20 12h2M5 19l1.5-1.5M17.5 6.5 19 5M12 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"/><path d="M3 13h18"/>`,
    'moon-crescent': `<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>`,
    'tornado': `<path d="M21 4H3M19 8H5M17 12H7M15 16H9M13 20H11"/>`,
    'hurricane': `<circle cx="12" cy="12" r="3"/><path d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2Z"/><path d="M12 2c2 4 2 16 0 20M2 12c4-2 16-2 20 0"/>`,

    // E-commerce
    'bag-shopping': `<path d="M6 19a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V8H6v11Z"/><path d="M9 8V5a3 3 0 0 1 6 0v3"/>`,
    'discount': `<circle cx="12" cy="12" r="10"/><path d="m15 9-6 6M9 9h.01M15 15h.01"/>`,
    'truck-delivery': `<path d="M2 17h16V7H2v10Z"/><path d="M18 17h4l-2-5h-2v5Z"/><circle cx="5" cy="19" r="2"/><circle cx="15" cy="19" r="2"/>`,
    'qr-code': `<rect width="6" height="6" x="3" y="3" rx="1"/><rect width="6" height="6" x="15" y="3" rx="1"/><rect width="6" height="6" x="15" y="15" rx="1"/><rect width="6" height="6" x="3" y="15" rx="1"/><path d="M10 3h2M3 10v2M10 12h2M12 15v2"/>`,

    // Security & Privacy
    'lock-unlocked': `<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V5a5 5 0 0 1 10 0"/>`,
    'face-id': `<path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M3 16v3a2 2 0 0 0 2 2h3M21 16v3a2 2 0 0 1-2 2h-3M8 8h.01M16 8h.01M9 12h6M10 16a4 4 0 0 1 4 0"/>`,
    'cctv': `<path d="M3 12h18M3 12l4-4h10l4 4M7 8V5c0-1 1-2 2-2h6c1 0 2 1 2 2v3M10 12v3M14 12v3"/>`,
    'verified': `<path d="M12 2l3 2 4-1 1 4 4 1-1 4 3 4-4 1-1 4-4-1-3 2-3-2-4 1-1-4-4-1 1-4-3-4 4-1 1-4 4 1 3-2Z"/><path d="m9 12 2 2 4-4"/>`,

    // Advanced UI
    'maximize': `<polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" x2="14" y1="3" y2="10"/><line x1="3" x2="10" y1="21" y2="14"/>`,
    'minimize': `<polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line x1="14" x2="21" y1="10" y2="3"/><line x1="10" x2="3" y1="14" y2="21"/>`,
    'drag-vertical': `<circle cx="9" cy="5" r="1"/><circle cx="9" cy="12" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="19" r="1"/>`,
    'rotate-ccw': `<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>`,
    'crosshair': `<circle cx="12" cy="12" r="9"/><line x1="12" x2="12" y1="3" y2="21"/><line x1="3" x2="21" y1="12" y2="12"/>`,

    // Health (Specialized)
    'ambulance': `<path d="M16 10h6v7h-2M2 17h14V7H2v10Z"/><circle cx="5" cy="19" r="2"/><circle cx="15" cy="19" r="2"/><path d="M8 10h4M10 8v4"/>`,
    'hospital': `<path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/><path d="M10 10h4M12 8v4"/>`,
    'pills-vials': `<circle cx="9" cy="9" r="5"/><circle cx="15" cy="15" r="5"/><line x1="6" x2="12" y1="6" y2="12"/><line x1="12" x2="18" y1="12" y2="18"/>`,

    // Nature & Environment
    'leaf': `<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.2A7 7 0 0 1 11 20Z"/><path d="M11 20l-5 2"/>`,
    'sprout': `<path d="M7 20h10M12 20V12M12 12c2-2 5-2 5-2s-3-2-5 2M12 12c-2-2-5-2-5-2s3-2 5 2"/>`,
    'recycle': `<path d="M7 11l5-5 5 5M12 6v12M17 13l-5 5-5-5"/>`,
    'solar-panel': `<rect width="18" height="12" x="3" y="4" rx="2"/><line x1="3" x2="21" y1="10" y2="10"/><line x1="9" x2="9" y1="4" y2="16"/><line x1="15" x2="15" y1="4" y2="16"/><path d="M8 16l-2 4h8l-2-4"/>`,

    // Productivity
    'paperclip': `<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>`,
    'clipboard-list': `<rect width="12" height="14" x="6" y="5" rx="2"/><path d="M9 3h6v4H9zM9 10h6M9 14h6M9 18h3"/>`,
    'briefcase': `<rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>`,

    // Architecture & Construction
    'crane': `<path d="M3 2h12l3 3H3V2ZM3 22h18M5 5v17M10 5v17M14 5v17M18 10v12"/>`,
    'hammer': `<path d="m15 5 4 4-2 2-4-4 2-2ZM2 22l7-7M11 11l2 2"/>`,
    'blueprint': `<rect width="18" height="14" x="3" y="5" rx="2"/><path d="M3 10h18M8 5v14M15 5v14"/>`,
    'bricks': `<rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="12" y2="12"/><line x1="7" x2="7" y1="5" y2="12"/><line x1="17" x2="17" y1="5" y2="12"/><line x1="12" x2="12" y1="12" y2="19"/>`,
    'hard-hat': `<path d="M2 18h20a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2ZM4 16c0-6 4-10 8-10s8 4 8 10"/>`,

    // Music & Instruments
    'guitar': `<path d="m14 7 6 6-2 2-6-6 2-2ZM2 22l6-6M9 13l2 2"/>`,
    'piano': `<rect width="20" height="16" x="2" y="4" rx="2"/><line x1="6" x2="6" y1="4" y2="20"/><line x1="10" x2="10" y1="4" y2="20"/><line x1="14" x2="14" y1="4" y2="20"/><line x1="18" x2="18" y1="4" y2="20"/>`,
    'drum': `<ellipse cx="12" cy="7" rx="9" ry="4"/><path d="M3 7v10a9 4 0 0 0 18 0V7"/>`,
    'headphones-pro': `<rect width="6" height="10" x="2" y="11" rx="2"/><rect width="6" height="10" x="16" y="11" rx="2"/><path d="M5 11c0-4 3-7 7-7s7 3 7 7"/>`,
    'vinyl': `<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>`,

    // Sports & Recreation
    'basketball': `<circle cx="12" cy="12" r="10"/><path d="M12 2a14 14 0 0 1 0 20M2 12a14 14 0 0 0 20 0M4.9 4.9l14.2 14.2M19.1 4.9 4.9 19.1"/>`,
    'football': `<path d="M2 12c0 5.5 4.5 10 10 10s10-4.5 10-10S17.5 2 12 2 2 6.5 2 12Z"/><path d="M12 2c2 4 2 16 0 20M2 12c4-2 16-2 20 0"/>`,
    'tennis-ball': `<circle cx="12" cy="12" r="10"/><path d="M5 12a14 14 0 0 1 14 0M12 5a14 14 0 0 0 0 14"/>`,
    'medal': `<circle cx="12" cy="14" r="6"/><path d="M8 2l2 6M16 2l-2 6M12 8l-4 4M12 8l4 4"/>`,
    'whistle': `<path d="M18 7H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4l4 4h4a2 2 0 0 0 2-2v-6c0-3.3-2.7-6-6-6Z"/><circle cx="8" cy="12" r="1"/>`,

    // Workshop & Tools
    'drill': `<path d="M10 5h6l4 4-4 4h-6V5ZM6 13l4 4v5h-4v-5l-2-2V13h2Z"/><path d="M12 9h2"/>`,
    'saw': `<path d="M3 12l3-3 3 3 3-3 3 3 3-3 3 3V18H3v-6Z"/><path d="M6 18v3M10 18v3M14 18v3"/>`,
    'anvil': `<path d="M3 12l3-2 10-2 5 2v4H3v-2Z"/><path d="M7 16l-2 4h14l-2-4"/>`,
    'wrench': `<path d="m14 7 6 6-2 2-6-6 2-2ZM2 22l6-6M9 13l2 2"/>`,

    // Advanced Logistics
    'helicopter': `<path d="M2 12h16c3 0 4 2 4 4s-1 4-4 4H4"/><path d="M8 12V3h8M3 3h18"/>`,
    'shuttle': `<path d="M12 2L8 10l-4 8 8 4 8-4-4-8L12 2Z"/><path d="M12 22v-4M8 18l4 4 4-4"/>`,
    'yacht': `<path d="M2 14h20l-3 6H5l-3-6Z"/><path d="M12 14V2l8 12H12Z"/>`,
    'tractor': `<rect width="8" height="6" x="2" y="10" rx="1"/><circle cx="18" cy="16" r="4"/><circle cx="6" cy="18" r="2"/><path d="M10 10V6h6v4"/>`,

    // Hardware & Tech
    'cpu': `<rect width="14" height="14" x="5" y="5" rx="2"/><path d="M9 5V2M15 5V2M9 19v3M15 19v3M5 9H2M5 15H2M19 9h3M19 15h3M9 9h6v6H9V9Z"/>`,
    'chip': `<rect width="16" height="16" x="4" y="4" rx="2"/><path d="M8 4V2M12 4V2M16 4V2M8 18v2M12 18v2M16 18v2M4 8H2M4 12H2M4 16H2M18 8h2M18 12h2M18 16h2"/>`,
    'motherboard': `<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h4v4H7V7ZM13 7h4v4h-4V7ZM7 13h10v4H7v-4Z"/>`,
    'database-pro': `<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/>`,

    // Social Media
    'reddit': `<circle cx="12" cy="12" r="10"/><circle cx="8" cy="11" r="1"/><circle cx="16" cy="11" r="1"/><path d="M10 16s1 1 2 1 2-1 2-1M12 6c0-1.5 1-2 2-2"/>`,
    'slack': `<circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/><path d="M6 10h12M10 6v12"/>`,
    'whatsapp': `<circle cx="12" cy="12" r="10"/><path d="M8 8a3 3 0 0 1 8 0v8a3 3 0 0 1-8 0V8Z"/><path d="M8 12h8"/>`,

    // Nature (Extreme)
    'cactus': `<path d="M12 22V6a3 3 0 0 0-6 0v4M12 10a3 3 0 0 1 6 0v6"/><path d="M12 22h-1"/>`,
    'sunflower': `<circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l1.5 1.5M17.5 17.5 19 19M5 19l1.5-1.5M17.5 6.5 19 5"/>`,
    'volcano': `<path d="M2 20h20L17 8h-2l-3-4-3 4h-2L2 20Z"/><path d="M10 8l-2-4M14 8l2-4"/>`,

    // Fashion & Lifestyle
    't-shirt': `<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M9 2a3 3 0 0 1 6 0"/>`,
    'gift-box': `<rect width="18" height="14" x="3" y="8" rx="2"/><path d="M3 12h18M12 8v14M8 2a4 4 0 0 1 8 0"/>`,
    'glasses': `<circle cx="7" cy="12" r="4"/><circle cx="17" cy="12" r="4"/><path d="M11 12h2M3 12h1M20 12h1"/>`,

    // Modern UI Symbols
    'layers': `<polygon points="12 2 2 7 12 12 22 7 12 2"/><polygon points="2 12 12 17 22 12"/><polygon points="2 17 12 22 22 17"/>`,
    'layout': `<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18M9 21V9"/>`,
    'pixel-grid': `<rect width="6" height="6" x="9" y="9" rx="1"/>`,

    // Professional Naming Overhaul (Replacing Generic/Numbered)
    'construction': `<path d="M12 2L2 7l10 5 10-5-10-5zM2 12l10 5 10-5M2 17l10 5 10-5"/>`,
    'music-file': `<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>`,
    'basketball-alt': `<circle cx="12" cy="12" r="10"/><path d="M12 2a14 14 0 0 1 0 20M2 12a14 14 0 0 0 20 0"/>`,
    'cpu-alt': `<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h10v10H7z"/>`,
    'tech-alt': `<path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 14a4 4 0 1 1 4-4 4 4 0 0 1-4 4Z"/>`,
    'fitness-watch': `<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 4"/>`,
    'diamond-shape': `<path d="M12 2l10 10-10 10L2 12z"/>`,
    'bullet-point': `<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="2"/>`,
    'grid-simple': `<rect width="18" height="18" x="3" y="3" rx="2"/><line x1="12" x2="12" y1="3" y2="21"/><line x1="3" x2="21" y1="12" y2="12"/>`,
    'triangle-dot': `<path d="M3 3h18l-9 18L3 3Z"/><circle cx="12" cy="10" r="1"/>`,
    'cross-lines': `<path d="M12 2v20M2 12h20M5.3 5.3l13.4 13.4M18.7 5.3L5.3 18.7"/>`,
    'star-solid': `<path d="M12 2l3 7h7l-6 5 2 7-6-5-6 5 2-7-6-5h7z"/>`,
    'check-circle-solid': `<circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/>`,
    'triangle-solid': `<path d="M12 2L2 22h20z"/>`,
    'rect-solid': `<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 12h18"/>`,
    'circle-split': `<circle cx="12" cy="12" r="10"/><path d="M12 2a15 15 0 0 1 0 20"/>`,
    'square-stack': `<path d="M4 4h16v16H4z"/><path d="M8 8h8v8H8z"/>`,
    'crosshairs-alt': `<circle cx="12" cy="12" r="10"/><path d="M12 2v6M12 16v6M2 12h6M16 12h22"/>`,
    'diamond-stack': `<path d="m12 2 4 4-4 4-4-4 4-4zM12 14l4 4-4 4-4-4 4-4z"/>`,
    'heartbeat-fast': `<path d="M22 12h-4l-3 9-5-18-3 9H2"/>`,
    'check-shield-alt': `<circle cx="12" cy="12" r="10"/><polyline points="8 12 11 15 16 9"/>`,
    'diamond-nested': `<path d="M12 2l10 10-10 10L2 12z"/><path d="M12 6l6 6-6 6-6-6 6-6z"/>`,
    'square-circle-alt': `<rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="12" cy="12" r="4"/>`,
    'shield-pro': `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`,
    'eye-pro': `<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>`,
    'circle-grid-alt': `<path d="M12 2v20M2 12h20"/><circle cx="12" cy="12" r="8"/>`,
    
    // Animals
    'lion': `<path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 0l-2 4h4l-2-4zm-8 4s1-4 4-4 4 4 4 4"/><path d="M12 2a10 10 0 0 0-10 10c0 5 4 9 9 9s9-4 9-9A10 10 0 0 0 12 2z"/>`,
    'dog': `<path d="M8 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-8 4v2m-4 4h8"/><path d="M12 2l-2 4-6 2v10l6 4h4l6-4V8l-6-2-2-4z"/>`,
    'cat': `<path d="M12 14l-2 2h4l-2-2zM8 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/><path d="M12 2l-4 4H4v10l8 6 8-6V6h-4l-4-4z"/>`,
    'bird': `<path d="M12 2s-4 4-4 10 4 10 4 10 4-4 4-10-4-10-4-10zM4 12h16"/><path d="M12 12l-2-2m4 4l-2-2"/>`,
    'fish': `<path d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8-10-8-10-8zm18 0l2 2v-4l-2 2z"/><circle cx="8" cy="12" r="1"/>`,
    'pine-tree': `<path d="M12 2l-6 6h4v6h-6l10 8 10-8h-6v-6h4l-6-6zM12 18v4"/>`,
    'blossom': `<circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M5 19l3-3M16 8l3-3"/>`,
    'leaf-modern': `<path d="M12 22s8-4.5 8-11.8A7.5 7.5 0 0 0 12.5 3 2.5 2.5 0 0 0 11.5 3a7.5 7.5 0 0 0-7.5 7.2c0 7.3 8 11.8 8 11.8z"/><path d="M12 22V10"/>`,
    'butterfly': `<path d="M12 6c0-2-2-4-4-4S4 4 4 6s2 4 4 4m4-4c0-2 2-4 4-4s4 2 4 4-2 4-4 4m-4 0v12m-4-6c0 2-2 4-4 4s-4-2-4-4 2-4 4-4m8 8c0 2 2 4 4 4s4-2 4-4-2-4-4-4"/>`,
    'bee': `<circle cx="12" cy="12" r="6"/><path d="M12 6l-2-4M12 6l2-4M6 12l-4-2M6 12l-4 2M18 12l4-2M18 12l4 2"/><line x1="8" x2="16" y1="10" y2="10"/><line x1="8" x2="16" y1="14" y2="14"/>`,

    // Tech Pro
    'microchip-pro': `<rect width="14" height="14" x="5" y="5" rx="2"/><path d="M9 5V2M15 5V2M9 19v3M15 19v3M5 9H2M5 15H2M19 9h3M19 15h3M12 9v6M9 12h6"/>`,
    'server-pro': `<rect width="20" height="8" x="2" y="3" rx="2"/><rect width="20" height="8" x="2" y="13" rx="2"/><circle cx="6" cy="7" r="1"/><circle cx="6" cy="17" r="1"/>`,
    'upload-cloud-alt': `<path d="M17.5 19c3 0 5.5-2.5 5.5-5.5 0-2.8-2.1-5.1-4.8-5.4A7 7 0 0 0 4.5 12c-2 0-3.5 1.5-3.5 4s1.5 4.5 4 4.5h2"/><path d="M12 12v9m-3-3l3-3 3 3"/>`,
    'download-cloud-alt': `<path d="M17.5 19c3 0 5.5-2.5 5.5-5.5 0-2.8-2.1-5.1-4.8-5.4A7 7 0 0 0 4.5 12c-2 0-3.5 1.5-3.5 4s1.5 4.5 4 4.5h2"/><path d="M12 21v-9m-3 6l3 3 3-3"/>`,
    'battery-bolt': `<rect width="16" height="10" x="2" y="7" rx="2"/><path d="M22 11v2M10 10l-2 4h4l-2 4"/>`,
    'database-backup-alt': `<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/><path d="M12 5v14"/>`,
    'cpu-circuit': `<path d="M20 7h-1a2 2 0 0 1-2-2V4m0 16v-1a2 2 0 0 0-2-2H4m16-11V6a2 2 0 0 0-2-2h-3m3 16h1a2 2 0 0 0 2-2v-3"/><path d="M9 9h6v6H9z"/>`,
    'planet-ringed': `<circle cx="12" cy="12" r="8"/><path d="M2 12h20M12 2a12 12 0 0 1 0 20"/>`,

    // Commerce Pro
    'cart-checkout': `<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.56-7.43H5.12"/>`,
    'price-tag-alt': `<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><circle cx="7" cy="7" r="1"/>`,
    'bank-pro': `<rect width="20" height="14" x="2" y="5" rx="2"/><path d="M2 10h20M7 15h2M11 15h4"/>`,
    'building-finance': `<path d="M3 21h18M3 10h18M5 10v11M9 10v11M13 10v11M17 10v11M12 3L2 10h20L12 3z"/><path d="M11 14h2"/>`,
    'wallet-pro': `<path d="M20 12V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4z"/><path d="M16 12h4v3h-4z"/>`,
    'gem-stone': `<path d="M6 3h12l4 6-10 12L2 9z"/><path d="M11 3v18M2 9h20M6 3l6 6 6-6"/>`,
    'vault-secure': `<rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="12" cy="12" r="4"/><path d="M12 10v2l2 2"/>`,
    'calculator-alt': `<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M8 6h8M8 10h2M14 10h2M8 14h2M14 14h2M8 18h2M14 18h2"/>`,
    'receipt-pro': `<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1z"/><path d="M16 8H8M16 12H8M13 16H8"/>`,
    'package-delivery': `<path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/><path d="M2 20h20M5 8v12M19 8v12M3 8h18"/>`,

    // UI Pro
    'mouse-pointer': `<rect width="14" height="20" x="5" y="2" rx="7"/><path d="M12 6v4"/>`,
    'keyboard-pro': `<rect width="20" height="12" x="2" y="6" rx="2"/><path d="M6 10h0M10 10h0M14 10h0M18 10h0M6 14h0M10 14h8"/>`,
    'biometric-id': `<path d="M2 12c0-5.5 4.5-10 10-10s10 4.5 10 10M5 12c0-3.9 3.1-7 7-7s7 3.1 7 7M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4M11 12c0-.6.4-1 1-1s1 .4 1 1"/><path d="M12 12v10"/>`,
    'magnify-plus': `<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3M11 8v6M8 11h6"/>`,
    'magnify-minus': `<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3M8 11h6"/>`,
    'sidebar-alt': `<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/>`,
    'google-brand': `<path d="M12 12h8a8 8 0 1 1-2.34-5.66l-2.83 2.83A4 4 0 1 0 12 16a4 4 0 0 0 4-4H12z"/>`,
    'microsoft-brand': `<rect width="9" height="9" x="2" y="2"/><rect width="9" height="9" x="13" y="2"/><rect width="9" height="9" x="2" y="13"/><rect width="9" height="9" x="13" y="13"/>`,
    'amazon-brand': `<path d="M3 14s2 2 6 2 6-2 6-2l-2-4H5l-2 4z"/><path d="M12 14V2"/><path d="M8 4l4-2 4 2"/>`,
    'spotify-brand': `<circle cx="12" cy="12" r="10"/><path d="M7 9s2-1 5-1 5 1 5 1M7 12s2-1 5-1 5 1 5 1M8 15s1.5-.5 4-.5 4 .5 4 .5"/>`,
    'netflix-brand': `<path d="M7 4h3l4 16h-3zM14 4h3l-4 16h-3zM7 4L17 20"/>`,
    'lamp-pro': `<path d="M12 2L8 10h8L12 2zM12 10v10M8 22h8"/>`,
    'chair-pro': `<path d="M7 4h10v10H7zM7 14l-2 8M17 14l2 8M7 18h10"/>`,
    'table-pro': `<path d="M4 10h16M6 10v12M18 10v12M8 10l-4-6h16l-4 6"/>`,
    'bed-pro': `<path d="M2 4v16M2 11h20M22 4v16M2 17h20"/><rect width="6" height="4" x="5" y="7" rx="1"/>`,
    'key-pro': `<circle cx="7" cy="12" r="4"/><path d="M11 12h11l-2-2-2 2-2-2-2 2"/>`,
    'door-pro': `<rect width="14" height="18" x="5" y="3" rx="2"/><circle cx="15" cy="12" r="1"/>`,
    'window-pro': `<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M12 3v18M3 12h18"/>`,
    'fan-pro': `<circle cx="12" cy="12" r="2"/><path d="M12 10c0-4 4-6 4-6s-2 2-2 6m-4 2c-4 0-6-4-6-4s2 2 6 2m2 4c0 4-4 6-4 6s2-2 2-6m4-2c4 0 6 4 6 4s-2-2-6-2"/>`,
    'speaker-pro': `<rect width="14" height="20" x="5" y="2" rx="2"/><circle cx="12" cy="7" r="3"/><circle cx="12" cy="15" r="4"/>`,
    'tv-pro': `<rect width="20" height="14" x="2" y="3" rx="2"/><path d="M8 21h8M12 17v4M17 19h2"/>`,

    // Servers & Datacenter
    'server-rack': `<rect width="20" height="20" x="2" y="2" rx="2"/><line x1="2" x2="22" y1="8" y2="8"/><line x1="2" x2="22" y1="14" y2="14"/><circle cx="6" cy="5" r="1"/><circle cx="6" cy="11" r="1"/><circle cx="6" cy="17" r="1"/>`,
    'server-node': `<rect width="18" height="6" x="3" y="2" rx="1"/><rect width="18" height="6" x="3" y="10" rx="1"/><rect width="18" height="6" x="3" y="18" rx="1"/><path d="M21 5h1M21 13h1M21 21h1"/>`,
    'cable-ethernet': `<path d="M6 8V2h12v6M9 8v4h6V8M12 12v10"/><rect width="8" height="4" x="8" y="4" rx="1"/>`,
    'firewall': `<path d="M3 3h18v18H3z"/><path d="M3 9h18M3 15h18M9 3v6M15 9v6M9 15v6"/>`,
    'cloud-network': `<path d="M17.5 19c3 0 5.5-2.5 5.5-5.5 0-2.8-2.1-5.1-4.8-5.4A7 7 0 0 0 4.5 12c-2 0-3.5 1.5-3.5 4s1.5 4.5 4 4.5h2"/><circle cx="12" cy="16" r="2"/><path d="M12 14v-2M10 16h-2M14 16h2"/>`,
    'database-backup': `<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M12 12v6m-3-3l3 3 3-3"/>`,
    'router-wifi': `<rect width="20" height="8" x="2" y="14" rx="2"/><path d="M6 14V6m12 8V2M12 14v-4"/><circle cx="6" cy="18" r="1"/><circle cx="10" cy="18" r="1"/>`,
    'load-balancer': `<circle cx="12" cy="12" r="3"/><path d="M12 2v7m0 6v7M2 12h7m6 0h7"/>`,
    'hard-drive': `<rect width="16" height="20" x="4" y="2" rx="2"/><circle cx="12" cy="6" r="1"/><path d="M4 14h16M12 14v6"/>`,
    'raid-disk': `<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><path d="M12 2v6m0 8v6M2 12h6m8 0h6"/>`,
    'datacenter': `<rect width="8" height="12" x="2" y="2" rx="1"/><rect width="8" height="12" x="14" y="2" rx="1"/><rect width="8" height="12" x="8" y="10" rx="1"/><path d="M6 6h0M18 6h0M12 14h0"/>`,
    'server-guard': `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><rect width="6" height="4" x="9" y="8" rx="1"/><path d="M12 12v2"/>`,
    'cluster': `<circle cx="12" cy="12" r="3"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><path d="M12 9L7 6m10 0l-5 3m0 6l-5 3m12-3l-5-3"/>`,
    'terminal-vps': `<rect width="18" height="14" x="3" y="5" rx="2"/><polyline points="7 12 10 9 7 6" transform="translate(0, 4)"/><line x1="12" x2="16" y1="17" y2="17"/>`,
    'bandwidth': `<path d="M2 18h20M2 12h20M2 6h20"/><path d="M6 18v-4m4 4V10m4 8V6m4 12V2"/>`,

    // Gadgets & Devices
    'smartwatch': `<rect width="12" height="14" x="6" y="5" rx="3"/><path d="M9 5V2h6v3m-6 14v3h6v-3"/><circle cx="12" cy="12" r="2"/>`,
    'headset': `<path d="M3 14h3v6H3zM18 14h3v6h-3z"/><path d="M6 17a6 6 0 1 1 12 0"/>`,
    'vr-goggles': `<path d="M2 10h20l-1 8H3l-1-8zm7 4h6m-3-10v3"/><circle cx="7" cy="14" r="1"/><circle cx="17" cy="14" r="1"/>`,
    'game-console': `<rect width="20" height="10" x="2" y="7" rx="2"/><circle cx="18" cy="12" r="1.5"/><path d="M5 12h2m-1-1v2"/><path d="M10 7v10m4-10v10"/>`,
    'stylus': `<path d="m15 5 4 4-12 12-4 1 1-4L15 5z"/><path d="M16 10h2l3-3"/>`,
    'foldable': `<rect width="10" height="18" x="2" y="3" rx="1"/><rect width="10" height="18" x="12" y="3" rx="1"/><path d="M12 3v18"/>`,
    'airpods-pro': `<path d="M8 6h2a2 2 0 0 1 2 2v12m4-14h-2a2 2 0 0 0-2 2v12"/><circle cx="8" cy="6" r="2"/><circle cx="16" cy="6" r="2"/>`,
    'drone': `<circle cx="12" cy="12" r="2"/><path d="M12 10V2m0 20v-8M2 12h8m12 0h-8"/><path d="M5 5l2 2m10 10l2 2m-14 10l2-2m10-10l2-2"/><circle cx="4" cy="4" r="1"/><circle cx="20" cy="4" r="1"/><circle cx="4" cy="20" r="1"/><circle cx="20" cy="20" r="1"/>`,
    'ar-glasses-pro': `<path d="M2 12h4l2 2h8l2-2h4M3 12a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2zm12 0a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2z"/>`,
    'magsafe-charger-alt': `<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><path d="M12 9v6m-3-3l3 3 3-3"/>`,
    'sim-card': `<path d="M4 2h10l6 6v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/><path d="M6 10h4v10H6z"/>`,

    // Vegetables & Fruits
    'carrot': `<path d="M12 2l-2 4 4 2-2-6zM3 21l14-14-3-3L1 18l2 3z"/><path d="M6 14l2 2m2-5l2 2"/>`,
    'tomato': `<circle cx="12" cy="14" r="8"/><path d="M12 6V2m-3 4l3-2 3 2"/>`,
    'broccoli': `<path d="M12 22v-6m-4-2c-2 0-4-2-4-4s2-4 4-4a5 5 0 0 1 8 0c2 0 4 2 4 4s-2 4-4 4h-4"/><circle cx="8" cy="10" r="1"/><circle cx="16" cy="10" r="1"/><circle cx="12" cy="7" r="1"/>`,
    'corn': `<path d="M12 22s-4-4-4-10 4-10 4-10 4 4 4 10-4 10-4 10z"/><path d="M10 6h4m-4 4h4m-4 4h4m-4 4h4"/><path d="M8 6C6 8 6 12 8 18m8-12c2 2 2 6 0 12"/>`,
    'pepper': `<path d="M12 6c-4 0-7 2-7 6s3 10 7 10 7-6 7-10-3-6-7-6z"/><path d="M12 6V2c2 0 3 1 3 2"/>`,
    'eggplant': `<path d="M12 4s-6 2-6 10 6 10 6 10 6-2 6-10-6-10-6-10z"/><path d="M12 4l-2-2m4 2l2-2"/>`,
    'cucumber': `<path d="M2 12s2-4 10-4 10 4 10 4-2 4-10 4-10-4-10-4z"/><circle cx="6" cy="12" r="1"/><circle cx="12" cy="11" r="1"/><circle cx="18" cy="12" r="1"/>`,
    'cabbage': `<circle cx="12" cy="14" r="8"/><path d="M12 6a8 8 0 0 0-8 8m8-8a8 8 0 0 1 8 8M12 6c-2 4-2 10 0 14"/><path d="M3 10c4-2 14-2 18 0"/>`,
    'onion': `<path d="M12 2s-8 4-8 10 8 10 8 10 8-4 8-10-8-10-8-10z"/><path d="M12 2v20m-4-2c-2-4-2-12 0-16m8 16c2-4 2-12 0-16"/>`,
    'mushroom': `<path d="M12 22v-8m-7 0c0-4 3-7 7-7s7 3 7 7H5z"/><circle cx="9" cy="10" r="1"/><circle cx="15" cy="10" r="1"/><circle cx="12" cy="8" r="1"/>`,
    'chili': `<path d="M12 22s-2-2-4-10c0-4 4-8 8-8s8 4 8 8c0 8-2 10-4 10"/><path d="M16 4V2"/>`,
    'avocado': `<path d="M12 2C8 2 5 6 5 12c0 5 3 10 7 10s7-5 7-10c0-6-3-10-7-10z"/><circle cx="12" cy="15" r="4"/>`,
    'potato': `<ellipse cx="12" cy="14" rx="9" ry="6"/><circle cx="8" cy="12" r="0.5"/><circle cx="16" cy="16" r="0.5"/><circle cx="12" cy="14" r="0.5"/>`,
    'garlic': `<path d="M12 2s-6 4-6 10c0 5 3 8 6 8s6-3 6-8c0-6-6-10-6-10z"/><path d="M12 2v18m-3-2c-1-2-1-6 0-8m6 8c1-2 1-6 0-8"/>`,
    'radish': `<path d="M12 16L9 22H7l5-10"/><circle cx="12" cy="10" r="6"/><path d="M12 4l-2-2m4 2l2-2"/>`,
    'strawberry': `<path d="M12 22s-7-4-7-10c0-4 3-8 7-8s7 4 7 8c0 6-7 10-7 10z"/><path d="M12 4V2m-3 3l3-1 3 1"/>`,
    'grapes': `<circle cx="12" cy="8" r="3"/><circle cx="9" cy="12" r="3"/><circle cx="15" cy="12" r="3"/><circle cx="12" cy="16" r="3"/><circle cx="9" cy="20" r="3"/><circle cx="15" cy="20" r="3"/><path d="M12 5V2"/>`,
    'lemon': `<ellipse cx="12" cy="12" rx="9" ry="6"/><path d="M21 12l2-2m-20 2l-2-2"/>`,
    'pineapple': `<path d="M12 22v-4m-4-2s2-4 4-4 4 4 4 4v2a4 4 0 0 1-8 0z"/><path d="M12 12V2m-4 4l4 2 4-2"/>`,
    'watermelon': `<path d="M2 12a10 10 0 0 0 20 0H2z"/><circle cx="7" cy="15" r="1"/><circle cx="12" cy="17" r="1"/><circle cx="17" cy="15" r="1"/>`,

    // UI Systems & Automation
    'sync': `<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M3 21v-5h5"/>`,
    'heartbeat': `<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>`,
    'analytics': `<path d="M3 3v18h18"/><path d="M7 16l4-4 4 4 4-10"/>`,
    'metrics': `<path d="M3 3v18h18"/><rect width="4" height="6" x="6" y="12"/><rect width="4" height="10" x="11" y="8\"/><rect width=\"4\" height=\"14\" x=\"16\" y=\"4\"/>`,
    'ping': `<path d="M2 12h20"/><polyline points="10 12 12 8 14 12 16 2 18 12"/>`,
    'api': `<rect width="18" height="14" x="3" y="5" rx="2"/><path d="M8 12h8m-2-2l2 2-2 2"/>`,
    'docker': `<path d="M2 12h20v4H2zM4 12V8h4v4M10 12V8h4v4M16 12V8h4v4"/><path d="M12 12c0-4 4-6 4-6"/>`,
    'kubernetes': `<path d="M12 2l9 4v12l-9 4-9-4V6l9-4z"/><circle cx="12" cy="12" r="3"/><path d="M12 2v7m10 3h-7m-3 10v-7m-10-3h7"/>`,
    'aws-cloud': `<path d="M12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/><path d="M4 14s2 2 8 2 8-2 8-2M12 14V8"/>`,
    'azure-cloud': `<path d="M2 18l6-14 8 14H2zm14 0l6-10-3-4-3 14z"/>`,
    'vercel-host': `<path d="M12 2L2 20h20L12 2z"/>`,
    'netlify-host': `<path d="M12 2l10 18H2L12 2z"/><circle cx="12" cy="13" r="3"/>`,
    'figma': `<path d="M8 2h4v4H8zM12 2h4v4h-4zM8 6h4v4H8zM12 6h4l-4 4V6zm-4 4h4v4H8z"/>`,
    'slack': `<circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/><path d="M6 10h12M10 6v12"/>`,
    'notion': `<rect width="16" height="16" x="4" y="4" rx="2"/><path d="M8 8v8m0-8l4 4m0 0l4-4m0 0v8"/>`,
    'zoom': `<rect width="14" height="10" x="2" y="7" rx="2"/><path d="m22 8-6 4 6 4V8z"/>`,

    // --- NEW TURBO EXPANSION (+100 ICONS) ---
    
    // Ecology & Nature
    'oak-tree': `<path d="M12 22V12m0 0a6 6 0 1 0 0-10 6 6 0 0 0 0 10zM12 12L8 8m4 4l4-4"/>`,
    'palm-tree': `<path d="M12 22V12m0 0s3-4 8-4m-8 4s-3-4-8-4m8 4s6 2 6 6m-6-6s-6 2-6 6"/>`,
    'rose': `<path d="M12 10a4 4 0 1 1-4-4 4 4 0 1 1 8 0 4 4 0 0 1-4 4zM12 22V10M7 15l5-2 5 2"/>`,
    'leaf-eco': `<path d="M11 20A7 7 0 0 1 5 12c0-5 5-10 10-10 0 5-2 10-4 10a7 7 0 0 1 0 8z"/>`,
    'mountain-range': `<path d="M2 20L8 4l6 16m-4-10l6-6 4 16H2z"/>`,
    'river': `<path d="M2 12c4-4 8 4 12 0s8 4 12 0m-24 4c4-4 8 4 12 0s8 4 12 0"/>`,
    'forest': `<path d="M7 22l-4-6h3V6l6-4 6 4v10h3l-4 6H7z"/>`,
    'flower-pro': `<circle cx="12" cy="12" r="2"/><path d="M12 7V2m0 15v5m-5-10H2m15 0h5m-15-5l4 4m6 0l4-4m-10 6l-4 4m10-4l4 4"/>`,
    'seedling-pro': `<path d="M12 22V12m0 0c2-2 5-2 5-2s-3-2-5 2m0-2c-2-2-5-2-5-2s3-2 5 2"/>`,
    'planet-jupiter': `<circle cx="12" cy="12" r="10"/><path d="M3 10h18M3 14h18M5 7h14M5 17h14"/>`,

    // Space & Astronomy
    'rocket-launch': `<path d="M4.5 16.5L2 22l5.5-2.5L21 4 15 2 4.5 16.5zM9 12l-3 3"/>`,
    'satellite-dish': `<path d="M4 11a8 8 0 0 1 8-8m-8 12a12 12 0 0 1 12-12M7 11l-3 3m16-10l-3 3M12 12l2 2"/>`,
    'galaxy': `<path d="M12 12m-10 0a10 10 0 1 0 20 0 10 10 0 1 0-20 0M12 6a6 6 0 1 0 0 12m0-6a3 3 0 1 0 0 6"/>`,
    'black-hole': `<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><path d="M12 2A10 10 0 0 1 22 12A10 10 0 0 1 12 22A10 10 0 0 1 2 12"/>`,
    'astronaut': `<circle cx="12" cy="10" r="8"/><rect width="10" height="6" x="7" y="7" rx="2"/><path d="M12 18v4M7 22h10"/>`,
    'ufo': `<ellipse cx="12\" cy=\"12\" rx=\"10\" ry=\"3\"/><path d=\"M8 12c0-3 2-5 4-5s4 2 4 5\"/><path d=\"M10 15l-1 5m5-5l1 5\"/>`,
    'constellation': `<circle cx=\"4\" cy=\"4\" r=\"1\"/><circle cx=\"12\" cy=\"8\" r=\"1\"/><circle cx=\"20\" cy=\"12\" r=\"1\"/><circle cx=\"14\" cy=\"18\" r=\"1\"/><path d=\"M4 4l8 4 8 4-6 6\"/>`,
    'moon-phase': `<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 2a10 10 0 0 0 0 20\"/>`,
    'comet': `<circle cx=\"18\" cy=\"6\" r=\"4\"/><path d=\"M14 10L2 22m4-8L2 18m8-4L6 22\"/>`,
    'telescope-pro': `<path d=\"m10 7 11 3-3 11-11-3 3-11ZM2 22l8-8\"/><circle cx=\"18\" cy=\"10\" r=\"1\"/>`,

    // Office & Business
    'briefcase-alt': `<rect width=\"20\" height=\"14\" x=\"2\" y=\"7\" rx=\"2\"/><path d=\"M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2m8 4h-8\"/>`,
    'clipboard-check': `<rect width=\"12\" height=\"14\" x=\"6\" y=\"5\" rx=\"2\"/><path d=\"M9 3h6v4H9zM9 14l2 2 4-4\"/>`,
    'target-goal': `<circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"12\" cy=\"12\" r=\"6\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/><path d=\"M12 2v2m0 16v2M2 12h2m16 0h2\"/>`,
    'award-medal': `<circle cx=\"12\" cy=\"8\" r=\"6\"/><path d=\"M8 12l-2 10 6-3 6 3-2-10\"/>`,
    'presentation': `<rect width=\"18\" height=\"12\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M12 15v4m-5 3h10M3 10h18\"/>`,
    'meeting': `<circle cx=\"12\" cy=\"7\" r=\"3\"/><path d=\"M12 10c-3 0-5 2-5 5v2h10v-2c0-3-2-5-5-5z\"/><circle cx=\"18\" cy=\"10\" r=\"2\"/><circle cx=\"6\" cy=\"10\" r=\"2\"/>`,
    'idea-bulb': `<path d=\"M12 2a7 7 0 0 0-7 7c0 3 2 5 2 8h10c0-3 2-5 2-8a7 7 0 0 0-7-7z\"/><path d=\"M9 22h6m-5-2h4\"/>`,
    'signature': `<path d=\"m15 5 4 4-12 12-4 1 1-4L15 5z\"/><path d=\"M2 22c10-2 12-6 12-6\"/>`,
    'safe-vault': `<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M12 10v2l2 2\"/>`,
    'stamp': `<path d=\"M12 12V2m-6 10h12v6H6v-6zm3 10h6\"/>`,

    // UI & Navigation
    'settings-pro': `<circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z\"/>`,
    'login': `<path d=\"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3\"/>`,
    'logout': `<path d=\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9\"/>`,
    'lock-secure-pro': `<rect width=\"18\" height=\"12\" x=\"3\" y=\"10\" rx=\"2\"/><path d=\"M7 10V7a5 5 0 0 1 10 0v3\"/><circle cx=\"12\" cy=\"16\" r=\"1\"/>`,
    'shield-alert': `<path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\"/><line x1=\"12\" x2=\"12\" y1=\"8\" y2=\"12\"/><circle cx=\"12\" cy=\"16\" r=\"0.5\"/>`,
    'bell-pro': `<path d=\"M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9z\"/><path d=\"M13.7 21a2 2 0 0 1-3.4 0\"/><circle cx=\"18\" cy=\"4\" r=\"2\"/>`,
    'expand-view': `<path d=\"M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7\"/>`,
    'shrink-view': `<path d=\"M4 14h6v6M20 10h-6V4M10 14l-7 7M14 10l7-7\"/>`,
    'drag-handle': `<circle cx=\"9\" cy=\"5\" r=\"1\"/><circle cx=\"9\" cy=\"12\" r=\"1\"/><circle cx=\"9\" cy=\"19\" r=\"1\"/><circle cx=\"15\" cy=\"5\" r=\"1\"/><circle cx=\"15\" cy=\"12\" r=\"1\"/><circle cx=\"15\" cy=\"19\" r=\"1\"/>`,
    'more-dots': `<circle cx=\"12\" cy=\"12\" r=\"1\"/><circle cx=\"12\" cy=\"5\" r=\"1\"/><circle cx=\"12\" cy=\"19\" r=\"1\"/>`,

    // Transportation
    'electric-car-pro': `<path d=\"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10l-2-2h-3L8 10s-2.7.6-3.5 1.1c-.8.2-1.5 1-1.5 1.9v3c0 .6.4 1 1 1h2\"/><circle cx=\"7\" cy=\"17\" r=\"2\"/><circle cx=\"17\" cy=\"17\" r=\"2\"/><path d=\"M12 2v4m-2-2h4\"/>`,
    'heavy-truck': `<path d=\"M2 17h14V7H2v10z\"/><path d=\"M16 17h4l2-4h-6v4z\"/><circle cx=\"5\" cy=\"19\" r=\"2\"/><circle cx=\"15\" cy=\"19\" r=\"2\"/><circle cx=\"18\" cy=\"19\" r=\"2\"/>`,
    'bicycle-eco': `<circle cx=\"6\" cy=\"16\" r=\"4\"/><circle cx=\"18\" cy=\"16\" r=\"4\"/><path d=\"M12 16V8l4-4m-4 4H8\"/><path d=\"M11 6h2\"/>`,
    'scooter': `<circle cx=\"6\" cy=\"18\" r=\"2\"/><circle cx=\"18\" cy=\"18\" r=\"2\"/><path d=\"M6 16V4h3m9 14h-8V6\"/>`,
    'high-speed-train': `<rect width=\"16\" height=\"12\" x=\"4\" y=\"4\" rx=\"2\"/><path d=\"M4 12h16M8 4l2 8m4-8l-2 8M9 20l-3 3m12-3l3 3\"/>`,
    'flight-takeoff': `<path d=\"m2 22 20-5-3-3H5L2 22zM12 12l4-4 4 4\"/>`,
    'flight-landing': `<path d=\"m2 17 20 5-3-3H5L2 17zM12 7l4 4 4-4\"/>`,
    'chopper': `<path d=\"M2 12h16c3 0 4 2 4 4s-1 4-4 4H4\"/><path d=\"M8 12V3h8M3 3h18\"/><circle cx=\"12\" cy=\"16\" r=\"2\"/>`,
    'shuttle-pro': `<path d=\"M12 2L8 10l-4 8 8 4 8-4-4-8L12 2Z\"/><path d=\"M12 22v-4M8 18l4 4 4-4\"/><path d=\"M10 6h4\"/>`,
    'cruise-ship': `<path d=\"M2 14h20l-3 6H5l-3-6Z\"/><rect width=\"12\" height=\"4\" x=\"6\" y=\"10\" rx=\"1\"/><path d=\"M12 10V6m-3 4V8m6 2V8\"/>`,

    // Hardcore Tech
    'ai-processor': `<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M12 8v8M8 12h8m-10-7h8m-8 14h8\"/>`,
    'graphic-card': `<rect width=\"20\" height=\"10\" x=\"2\" y=\"7\" rx=\"1\"/><circle cx=\"8\" cy=\"12\" r=\"3\"/><circle cx=\"16\" cy=\"12\" r=\"3\"/><path d=\"M2 10h4m12 0h4\"/>`,
    'ssd-drive-pro': `<rect width=\"14\" height=\"20\" x=\"5\" y=\"2\" rx=\"2\"/><path d=\"M9 18h6M9 14h6M9 10h6\"/>`,
    'usb-key-pro': `<rect width=\"8\" height=\"16\" x=\"8\" y=\"2\" rx=\"1\"/><path d=\"M10 18v4m4-4v4\"/><rect width=\"4\" height=\"4\" x=\"10\" y=\"4\"/>`,
    'curved-monitor': `<path d=\"M2 5c4-2 16-2 20 0v10c-4 2-16 2-20 0V5z\"/><path d=\"M8 21h8M12 17v4\"/>`,
    'gaming-pc-pro': `<rect width=\"12\" height=\"20\" x=\"6\" y=\"2\" rx=\"1\"/><circle cx=\"12\" cy=\"16\" r=\"2\"/><path d=\"M6 6h12M6 10h12\"/>`,
    'coding-laptop': `<rect width=\"16\" height=\"10\" x=\"4\" y=\"4\" rx=\"2\"/><path d=\"M2 14h20l-2 6H4l-2-6z\"/><polyline points=\"10 7 8 9 10 11m4-4l2 2-2 2\"/>`,
    'printer': `<path d=\"M6 18H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2\"/><rect width=\"12\" height=\"8\" x=\"6\" y=\"14\" rx=\"1\"/><path d=\"M6 7V2h12v5\"/>`,
    'scanner': `<rect width=\"20\" height=\"14\" x=\"2\" y=\"5\" rx=\"2\"/><path d=\"M2 12h20\"/><circle cx=\"6\" cy=\"16\" r=\"1\"/>`,
    'mouse-pro': `<rect width=\"12\" height=\"18\" x=\"6\" y=\"3\" rx=\"6\"/><path d=\"M12 3v6m-4 2h8\"/>`,

    // Socials 
    'linkedin': `<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M8 11v5m0-8v.01M12 16v-3a2 2 0 0 1 4 0v3\"/>`,
    'instagram': `<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"5\"/><circle cx=\"12\" cy=\"12\" r=\"4\"/><circle cx=\"17.5\" cy=\"6.5\" r=\"1\"/>`,
    'facebook': `<path d=\"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z\"/>`,
    'snapchat': `<path d=\"M12 3c-4 0-6 3-6 6 0 2 1 3 1 3s-2 1-2 3c0 2 3 3 3 3s1 2 4 2 4-2 4-2 3-1 3-3c0-2-2-3-2-3s1-1 1-3c0-3-2-6-6-6z\"/>`,
    'pinterest': `<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 6c0 3-1 5-2 9l-1 3m1-12c4 0 4 6 4 6s0 3-2 3\"/>`,
    'tumblr': `<path d=\"M10 21c-2 0-3-1-3-3v-7H5V7h2V3h4v4h4v4h-4v6c0 1 1 1 2 1h1v4h-4z\"/>`,
    'medium': `<ellipse cx=\"6\" cy=\"12\" rx=\"4\" ry=\"8\"/><ellipse cx=\"14\" cy=\"12\" rx=\"2\" ry=\"6\"/><ellipse cx=\"20\" cy=\"12\" rx=\"1\" ry=\"4\"/>`,
    'dev-to': `<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M7 8v8h2v-3h2v-2H9V8H7zm7 0v8h5v-2h-3v-1h2v-2h-2v-1h3V8h-5z\"/>`,
    'quora': `<circle cx=\"12\" cy=\"12\" r=\"8\"/><path d=\"M12 16s4-4 4-8-4-4-4-4\"/><path d=\"M14 18l4 4\"/>`,
    'reddit-brand': `<circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"8\" cy=\"11\" r=\"1\"/><circle cx=\"16\" cy=\"11\" r=\"1\"/><path d=\"M10 16s1 1 2 1 2-1 2-1M12 6c0-1.5 1-2 2-2\"/>`,

    // More Vegetables
    'pumpkin': `<path d=\"M12 22c4 0 7-3 7-8s-3-8-7-8-7 3-7 8 3 8 7 8z\"/><path d=\"M12 6V2c2 1 2 2 2 2\"/>`,
    'asparagus': `<path d=\"M10 22V6m4 16V4M7 22V8m10 14V8\"/><path d=\"M9 6l1-2 1 2m3 0l1-2 1 2\"/>`,
    'red-cabbage': `<circle cx=\"12\" cy=\"14\" r=\"8\"/><path d=\"M12 6s-4 4-4 8M12 6s4 4 4 8M5 10s4 2 7 2 7-2 7-2\"/>`,
    'sweet-potato': `<path d=\"M3 14c4-6 14-6 18 0l-9 6-9-6z\"/><circle cx=\"8\" cy=\"14\" r=\"0.5\"/><circle cx=\"16\" cy=\"14\" r=\"0.5\"/>`,
    'broccoli-alt': `<path d=\"M12 22v-6c-4 0-6-4-6-8a4 4 0 1 1 8 0 4 4 0 1 1 4 8c0 4-2 6-6 6z\"/>`,
    'cherry': `<circle cx=\"7\" cy=\"18\" r=\"4\"/><circle cx=\"17\" cy=\"18\" r=\"4\"/><path d=\"M10 16L14 2m4 16L14 2\"/>`,
    'pineapple-pro': `<rect width=\"10\" height=\"14\" x=\"7\" y=\"8\" rx=\"3\"/><path d=\"M12 8V2m-3 4l3-2 3 2\"/>`,
    'grape-bunch': `<circle cx=\"12\" cy=\"8\" r=\"2\"/><circle cx=\"10\" cy=\"11\" r=\"2\"/><circle cx=\"14\" cy=\"11\" r=\"2\"/><circle cx=\"8\" cy=\"14\" r=\"2\"/><circle cx=\"12\" cy=\"14\" r=\"2\"/><circle cx=\"16\" cy=\"14\" r=\"2\"/><path d=\"M12 6V2\"/>`,
    'lemon-pro': `<ellipse cx=\"12\" cy=\"12\" rx=\"9\" ry=\"6\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/>`,
    'watermelon-pro': `<path d="M2 12a10 10 0 0 0 20 0H2z"/><circle cx="7" cy="15" r="0.5"/><circle cx="12" cy="17" r="0.5"/><circle cx="17" cy="15" r="0.5"/>`,

    // --- GAME EXPANSION [v9.0] ---

    // Combat & Weapons
    'pistol': `<path d="M21 8H7l-2 2v2h4l1 4h3l1-4h7V8z"/><path d="M11 12v3M14 12v3"/>`,
    'rifle': `<path d="M2 14h6l2-2h12v2l-2 2H10l-2 2H2v-4z"/><path d="M12 12l1-3M16 12l1-3"/>`,
    'sniper': `<path d="M2 15h4l2-2h14v2l-1 1H8l-2 2H2v-3z"/><path d="M10 13l1-4h4l1 4"/><circle cx="13" cy="7" r="1"/>`,
    'shotgun': `<path d="M2 14h10l2-2h8v4h-8l-2-2H2v-4z"/><path d="M16 12v4"/>`,
    'submachine-gun': `<path d="M2 10h12v4h-2l-1 4h-3l-1-4H2v-4z"/><path d="M16 10h6v2l-2 2h-4v-4z"/>`,
    'rocket-launcher': `<rect width="16" height="4" x="2" y="10" rx="1"/><path d="M18 10l4 2-4 2"/><path d="M6 14v4M10 14v4"/>`,
    'grenade': `<path d="M12 22a5 5 0 0 0 5-5V9H7v8a5 5 0 0 0 5 5z"/><rect width="6" height="2" x="9" y="7" rx="1"/><path d="M12 7V4a2 2 0 0 1 2-2"/>`,
    'landmine': `<ellipse cx="12" cy="18" rx="10" ry="4"/><circle cx="12" cy="15" r="3"/><path d="M12 12v3"/>`,
    'c4': `<rect width="14" height="8" x="5" y="10" rx="1"/><path d="M8 10V6M16 10V6"/><rect width="6" height="4" x="9" y="4" rx="1"/>`,
    'knife-combat': `<path d="m18 2 4 4-11 11-4-4L18 2zM17 7l3-3M5 11l-2 2v2l2 2h2l2-2v-2l-2-2z"/>`,
    'dagger': `<path d="m12 2 2 4 0 10-2 2-2-2 0-10 2-4z"/><path d="M8 16h8"/><path d="M12 16v4M10 22h4"/>`,
    'axe-war': `<path d="M12 4c-4 0-6 3-6 6s2 6 6 6V4zM12 4c4 0 6 3 6 6s-2 6-6 6V4z"/><path d="M12 16v6"/>`,
    'mace': `<circle cx="12" cy="7" r="5"/><path d="M12 12v10M10 4l-2-2M14 4l2-2M10 10l-2 2M14 10l2-2"/>`,
    'spear': `<path d="m12 2 2 4-2 4-2-4 2-4zM12 10v12"/>`,
    'katana': `<path d="M20 4l2 2-16 16-2-2L20 4z"/><path d="M6 18l-3 3"/>`,
    'rapier': `<path d="M22 2L6 18"/><circle cx="5" cy="19" r="2"/><path d="M3 21l2-2"/>`,
    'brass-knuckles': `<circle cx="6" cy="8" r="2"/><circle cx="10" cy="8" r="2"/><circle cx="14" cy="8" r="2"/><circle cx="18" cy="8" r="2"/><path d="M4 10h16v4H4z"/>`,
    'longbow': `<path d="M8 2c-4 5-4 15 0 20"/><path d="M8 2l12 10-12 10"/>`,
    'crossbow': `<path d="M12 4v18M4 10s4-4 8-4 8 4 8 4"/><path d="M8 10l4 4 4-4"/>`,
    'arrow-head': `<path d="M12 2L8 8h8L12 2zM12 8v4"/>`,
    'quiver': `<rect width="6" height="16" x="9" y="6" rx="1"/><path d="M10 6l2-4 2 4M10 10h4"/>`,
    'flamethrower': `<path d="M4 14h12l2-2v4h-2l-2-2H4v-2z"/><path d="M18 12c2-2 4 0 6 2s-2 4-6 2"/>`,
    'laser-gun': `<rect width="12" height="6" x="6" y="8" rx="1"/><path d="M18 11h4M3 11h3"/><path d="M9 14v4h3"/>`,
    'shield-heavy': `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 22V2M4 10h16"/>`,
    'armor-plate': `<path d="M5 3h14l-2 16-5 3-5-3-2-16z"/><path d="M9 7h6M9 11h6M9 15h6"/>`,
    'helmet-tactical': `<path d="M12 2C7 2 3 6 3 11v4h18v-4c0-5-4-9-9-9z"/><rect width="14" height="4" x="5" y="11" rx="1"/><path d="M7 15v3M17 15v3"/>`,
    'bulletproof-vest': `<path d="M6 4h12l1 4v12H5V8l1-4z"/><path d="M9 4v4M15 4v4M5 12h14"/>`,
    'bayonet': `<path d="M18 6l4 4-6 6"/><path d="M6 18L18 6"/><path d="M4 20l2-2"/>`,
    'tomahawk': `<path d="M12 4l6 2-2 6-4-2V4z"/><path d="M12 10v12"/>`,
    'morning-star': `<circle cx="12" cy="7" r="4"/><path d="M12 11v11M8 4l1 1M15 4l-1 1M8 10l1-1M15 10l-1-1"/>`,
    'scimitar': `<path d="M4 20c8-4 16-16 16-16l2 2S14 18 4 22z"/><path d="M6 18l-2 2"/>`,
    'claymore': `<path d="M12 2L14 6L14 16L12 18L10 16L10 6L12 2z"/><path d="M8 16h8"/><path d="M12 18v4M10 22h4"/>`,
    'shuriken': `<path d="M12 2l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/>`,
    'kunai': `<path d="M12 2l3 5-3 10-3-10z"/><circle cx="12" cy="20" r="2"/><path d="M12 17v1"/>`,
    'nunchucks': `<rect width="2" height="10" x="6" y="10" rx="1"/><rect width="2" height="10" x="16" y="10" rx="1"/><path d="M7 10s2-4 5-4 5 4 5 4"/>`,
    'sai': `<path d="M12 2v20M8 14v-4M16 14v-4M8 14c0 3 8 3 8 0"/>`,
    'bo-staff': `<path d="M4 20L20 4"/><circle cx="4" cy="20" r="1"/><circle cx="20" cy="4" r="1"/>`,
    'halberd': `<path d="M12 2l2 4-2 4-2-4 2-4zM12 6h6l-2 6h-4M12 10v12"/>`,
    'warhammer': `<rect width="10" height="6" x="7" y="4" rx="1"/><path d="M12 10v12"/><path d="M7 7h10"/>`,
    'flail': `<circle cx="16" cy="6" r="3"/><path d="M8 22l2-10"/><path d="M10 12s2-4 6-4"/>`,
    'sling': `<path d="M12 12c-4 0-8 4-8 8s4-4 8-4 8 4 8-4-4-8-8-8z"/><circle cx="12" cy="12" r="2"/>`,
    'blowgun': `<path d="M4 20L20 4"/><path d="M4 20l2-2M18 6l2-2"/>`,
    'musket': `<path d="M2 16h16l2-4h2v6H4l-2-2z"/><path d="M14 12V8"/>`,
    'cannon': `<path d="M4 18h16v-4c0-2-2-4-4-4H8c-2 0-4 2-4 4v4z"/><circle cx="8" cy="18" r="2"/><circle cx="16" cy="18" r="2"/>`,
    'revolver': `<path d="M18 10h-8l-2 2v6h3l1-4h6V10z"/><circle cx="14" cy="12" r="2"/>`,
    'magnum': `<path d="M22 8H10l-2 2v8h4l1-6h9V8z"/><circle cx="14" cy="10" r="1"/>`,
    'uzi': `<path d="M6 8h10v6H6V8z"/><path d="M10 14v6h4v-6"/><path d="M16 10h4v2h-4"/>`,
    'mp5': `<path d="M4 8h12l1 4h5v4h-2l-1-4h-3v4h-4V8z"/>`,
    'ak47': `<path d="M2 14h6l2-2h10l2 2v2h-2l-2-2H10l-2 2H2v-4z"/><path d="M12 12v4"/>`,
    'm16': `<path d="M2 12h18l2 2v2h-4l-1-4H6v4H2v-6z"/>`,
    'bazooka': `<rect width="18" height="3" x="2" y="10" rx="1"/><path d="M4 13v4M12 13v4"/>`,
    'mortar': `<path d="M12 18L8 4h8l-4 14z"/><path d="M6 20h12"/>`,
    'depth-charge': `<circle cx="12" cy="12" r="8"/><path d="M12 4v16M4 12h16"/>`,
    'torpedo': `<path d="M2 12h16l4-2v4l-4-2H2v-4z"/>`,
    'missile': `<path d="M12 2l3 6v10l-3 4-3-4V8l3-6z"/><path d="M9 12h6"/>`,
    'nuke': `<path d="M12 2c4 0 7 4 7 9s-3 9-7 9-7-4-7-9 3-9 7-9z"/><path d="M8 20l-2 2h8l-2-2"/>`,
    'sabre': `<path d="M4 20s8-6 16-16l2 2S14 18 4 22z"/>`,
    'falchion': `<path d="M4 20L20 4l2 2L6 22H4v-2z"/>`,
    'gladius': `<path d="M12 2l2 4v12l-2 2-2-2V6l2-4z"/><path d="M8 18h8"/>`,
    'trident': `<path d="M12 2v20M7 8V4M17 8V4M7 8c0 4 10 4 10 0"/>`,

    // RPG & Fantasy Elements
    'wizard-hat': `<path d="M12 2L4 16h16L12 2z"/><path d="M2 18h20v2H2z"/><path d="M12 2c2 4 4 8 4 8"/>`,
    'magic-wand': `<path d="m15 5 4 4-12 12-4 1 1-4L15 5z"/><path d="M18 2v3M21 5h-3"/>`,
    'spellbook': `<path d="M4 19.5V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14.5a2.5 2.5 0 0 1-2.5 2.5H6a2.5 2.5 0 0 1-2.5-2.5z"/><path d="M8 7h8M8 11h8M8 15h5"/>`,
    'crystal-ball': `<circle cx="12" cy="10" r="8"/><path d="M8 18l-3 4h14l-3-4"/>`,
    'potion-health': `<path d="M9 3h6M10 3v4l-4 10a2 2 0 0 0 2 3h8a2 2 0 0 0 2-3l-4-10V3"/><path d="M10 14h4M12 12v3"/>`,
    'potion-mana': `<path d="M9 3h6M10 3v4l-4 10a2 2 0 0 0 2 3h8a2 2 0 0 0 2-3l-4-10V3"/><circle cx="12" cy="14" r="2"/>`,
    'potion-speed': `<path d="M9 3h6M10 3v4l-4 10a2 2 0 0 0 2 3h8a2 2 0 0 0 2-3l-4-10V3"/><path d="M8 13l4-2-2 4 4-2"/>`,
    'scroll-sealed': `<path d="M16 2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/><circle cx="16" cy="8" r="3"/><path d="M9 6h4M9 10h3M9 14h7M9 18h7"/>`,
    'amulet': `<circle cx="12" cy="14" r="6"/><path d="M12 8V2M12 14l2 2m-4 0l2-2"/>`,
    'ring-magic': `<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><path d="M12 6V2M12 22v-4M2 12h4m12 0h4"/>`,
    'treasure-chest': `<rect width="18" height="12" x="3" y="8" rx="2"/><path d="M3 12h18"/><path d="M10 8v4h4V8"/><path d="M12 12v2"/>`,
    'gold-ingot': `<path d="M2 18l3-10h14l3 10H2z"/><path d="M5 12h14"/>`,
    'coin-stack': `<ellipse cx="12" cy="6" rx="9" ry="3"/><path d="M3 6v4a9 3 0 0 0 18 0V6"/><path d="M3 10v4a9 3 0 0 0 18 0v-4"/><path d="M3 14v4a9 3 0 0 0 18 0v-4"/>`,
    'diamond-raw': `<path d="M12 2L2 12l10 10 10-10L12 2z"/><path d="M12 2v20M2 12h20"/>`,
    'jewelry-diamond': `<path d="M6 3h12l4 6-10 12L2 9z"/><path d="M11 3v18M2 9h20"/>`,
    'key-skeleton': `<circle cx="7" cy="12" r="4"/><path d="M11 12h11v4h-2v-4h-2v4h-2v-4"/>`,
    'helmet-knight': `<path d="M12 2C7 2 3 6 3 11v8h18v-8c0-5-4-9-9-9z"/><path d="M12 2v6M9 11h6M7 14h10"/>`,
    'gauntlet': `<path d="M6 8V4s2-2 6-2 6 2 6 2v4l2 10H4L6 8z"/><path d="M8 12h8M8 16h8"/>`,
    'greaves': `<path d="M6 2h4v20H6V2zm8 0h4v20h-4V2z"/>`,
    'boots-speed': `<path d="M4 4h6v12l8 2v4H4V4z"/><path d="M12 8l3-2-1 3 3-2"/>`,
    'cloak': `<path d="M12 2c-4 0-8 4-8 10v10l8-4 8 4V12c0-6-4-10-8-10z"/><path d="M12 2v4"/>`,
    'potion-strength': `<path d="M9 3h6M10 3v4l-4 10a2 2 0 0 0 2 3h8a2 2 0 0 0 2-3l-4-10V3"/><path d="M12 11h2l-3 5h-2l3-5z"/>`,
    'potion-invincibility': `<path d="M9 3h6M10 3v4l-4 10a2 2 0 0 0 2 3h8a2 2 0 0 0 2-3l-4-10V3"/><polygon points="12 11 13 13 15 13 13 14 14 16 12 15 10 16 11 14 9 13 11 13 12 11"/>`,
    'magic-lamp': `<path d="M2 16c6-2 12-2 18 0l2-4H2l2 4z"/><path d="M18 12s2-4 2-6"/><path d="M12 16v4M8 22h8"/>`,
    'magic-carpet': `<path d="M2 8s4-2 10-2 10 2 10 2v8s-4 2-10 2-10-2-10-2V8z"/><path d="M6 10l12 4M6 14l12-4"/>`,
    'staff-wizard': `<path d="M12 6L8 22m0-16l8 4"/><circle cx="16" cy="6" r="4"/><path d="M16 6l-2-2m4 4l-2-2"/>`,
    'orb-mystic': `<circle cx="12" cy="12" r="8"/><path d="M12 12c2 1 4 4 4 4m-8-8c2 1 4 4 4 4"/><path d="M12 4v2M12 18v2M4 12h2m12 0h2"/>`,
    'grimoire': `<path d="M4 19.5V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14.5a2.5 2.5 0 0 1-2.5 2.5H6a2.5 2.5 0 0 1-2.5-2.5z"/><path d="m12 7-3 5 6-2-6 2 3 5"/>`,
    'necromancer-skull': `<path d="M12 2a5 5 0 0 0-5 5v4h10V7a5 5 0 0 0-5-5z"/><path d="M9 16l-1 6h8l-1-6"/><circle cx="9" cy="8" r="1"/><circle cx="15" cy="8" r="1"/>`,
    'phoenix-feather': `<path d="M20 2s-8 4-12 12l-6 8 8-6c8-4 12-12 12-12z"/><path d="M14 6l-3 3M17 9l-3 3"/>`,
    'dragon-scale': `<path d="M12 2s-8 4-8 10 8 10 8 10 8-4 8-10-8-10-8-10z"/><path d="M12 8c2 2 4 4 4 4m-8 0c2 2 4 4 4 4"/>`,
    'unicorn-horn': `<path d="M12 2L8 14h8L12 2z"/><path d="M10 8h4M9 11h6"/>`,
    'fairy-wings': `<path d="M12 12c-4 0-8-4-8-8s4-2 8 8 8-4 8 8-4 8-8 8-8-4-8-8 4-8 8-8z"/>`,
    'goblin-mask': `<path d="M12 2c-4 0-7 4-7 8s3 8 7 8 7-4 7-8-3-8-7-8z"/><path d="M5 10l-3 2M19 10l3 2"/><circle cx="9" cy="9" r="1"/><circle cx="15" cy="9" r="1"/>`,
    'troll-club': `<path d="M18 6c2 4 0 10-6 10s-8-6-6-10 6-4 12 0z"/><path d="M10 16L6 22"/>`,
    'golem-heart': `<rect width="12" height="12" x="6" y="6" rx="2"/><path d="M8 8l8 8M16 8l-8 8"/>`,
    'vampire-fangs': `<path d="M4 10h16M6 10l1 4M17 10l1 4M12 10v2"/>`,
    'werewolf-claw': `<path d="M6 4l2 12M12 2l1 16M18 4l-2 12"/>`,
    'ghost-chain': `<path d="M12 2l-2 4 4 2-2-6z"/><path d="M6 8v12h12V8H6z"/><path d="M10 12h4M10 16h4"/>`,
    'skeleton-ribs': `<path d="M12 4v16M8 8h8M6 12h12M8 16h8"/>`,
    'zombie-hand': `<path d="M12 22V10l-2-2-4 2m8-2l4 2 2 8"/><path d="M10 6V2M14 6V2"/>`,
    'basilisk-eye': `<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><path d="M12 10v4"/>`,
    'kraken-tentacle': `<path d="M12 2c4 4-2 12-10 16l4 4c8-4 12-12 6-20z"/>`,
    'medusa-head': `<circle cx="12" cy="14" r="6"/><path d="M8 8s-2-2-2-4M12 6V2m4 6s2-2 2-4"/>`,
    'pegasus-wing': `<path d="M4 12c8-8 16 0 16 0s-8 16-16 0z"/><path d="M8 8l8 4M8 12l8 4"/>`,
    'centaur-bow': `<path d="M12 4v16M4 12l16-4-16-4z"/>`,
    'minotaur-horn': `<path d="M4 4c4 4 4 12 0 16m16-16c-4 4-4 12 0 16"/>`,
    'sphinx-riddle': `<path d="M12 2c6 0 10 4 10 10s-4 10-10 10-10-4-10-10 4-10 10-10z"/><path d="M12 16v2M10 7a2 2 0 1 1 3.4 1.4A4 4 0 0 0 12 12"/>`,
    'cerberus-collar': `<circle cx="12" cy="12" r="10"/><path d="M12 2l2 4-2 4-2-4 2-4zM6 12l4 2 4-2-4-2-4 2zM18 12l-4 2 4 4-4-2 4-4z"/>`,
    'hydra-head': `<path d="M12 22V10m-4 0l-4-4h4l4 4m4-4h4l-4 4"/>`,
    'manticore-tail': `<path d="M4 20c8-4 12-16 12-16s4 4 1 8"/>`,
    'chimera-breath': `<path d="M4 12h8l4-4v8l-4-4H4z"/><path d="M18 8l4 2-4 2"/>`,
    'valkyrie-spear': `<path d="M12 2l2 4-2 4-2-4 2-4zM12 10v12M8 12h8"/>`,
    'viking-helmet': `<path d="M12 2C7 2 3 6 3 11v4h18v-4c0-5-4-9-9-9z"/><path d="M3 11l-2-2M21 11l2-2"/>`,
    'pharaoh-mask': `<path d="M12 2c-4 0-8 4-8 10v10h16V12c0-6-4-10-8-10z"/><path d="M8 10h8M8 14h8"/>`,
    'anubis-statue': `<path d="M12 22V10l4-4 2 4-6 12zM8 10l-2-4-2 4 4 6"/>`,
    'mummy-wrap': `<rect width="14" height="18" x="5" y="3" rx="2"/><path d="M5 8h14M5 12h14M5 16h14"/>`,
    'djinn-bottle': `<path d="M12 2v4a4 4 0 0 0 4 4v8a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-8a4 4 0 0 0 4-4V2z"/>`,
    'excalibur': `<path d="M12 2L14 6L14 16L12 18L10 16L10 6L12 2z"/><path d="M8 16h8"/><path d="M12 18v4"/>`,
    'holy-grail': `<path d="M8 2h8v4a4 4 0 0 1-8 0V2z"/><path d="M12 6v12M8 22h8"/>`,

    // Game UI & Systems
    'health-bar': `<rect width="18" height="6" x="3" y="9" rx="1"/><path d="M3 12h12"/>`,
    'mana-bar': `<rect width="18" height="6" x="3" y="9" rx="1"/><path d="M3 12h10"/>`,
    'stamina-point': `<polygon points="12 2 15 8 22 8 17 12 19 19 12 15 5 19 7 12 2 8 9 8"/>`,
    'xp-star': `<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/><path d="M12 8v8M8 12h8"/>`,
    'level-up': `<path d="M12 2v20m-4-16l4-4 4 4"/><circle cx="12" cy="18" r="2"/>`,
    'rank-medal': `<circle cx="12" cy="8" r="6"/><path d="M8 12l-2 10 6-3 6 3-2-10"/><path d="M12 5v6"/>`,
    'boss-skull': `<path d="M12 2a5 5 0 0 0-5 5v4h10V7a5 5 0 0 0-5-5z"/><path d="M9 16l-2 6h10l-2-6"/><circle cx="9" cy="8" r="1"/><circle cx="15" cy="8" r="1"/>`,
    'map-waypoint': `<circle cx="12" cy="10" r="3"/><path d="M12 21l-8-11a8 8 0 1 1 16 0z"/>`,
    'quest-journal': `<path d="M4 19.5V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14.5a2.5 2.5 0 0 1-2.5 2.5H6a2.5 2.5 0 0 1-2.5-2.5z"/><polyline points="8 7 16 7 8 11 16 11 8 15 13 15"/>`,
    'inventory-bag': `<path d="M6 19a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V8H6v11Z"/><path d="M9 8V5a3 3 0 0 1 6 0v3M8 12h8"/>`,
    'skill-tree': `<path d="M12 2v4m0 8v4m0 4v2M5 10l7 4 7-4"/><rect width="4" height="4" x="10" y="6" rx="1"/><rect width="4" height="4" x="3" y="10" rx="1"/><rect width="4" height="4" x="17" y="10" rx="1"/>`,
    'cooldown-timer': `<circle cx="12" cy="12" r="10"/><path d="M12 12L12 6M12 12L16 16"/><path d="M12 2a10 10 0 0 1 10 10"/>`,
    'game-save': `<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><circle cx="12" cy="14" r="3"/><path d="M7 3h8v4H7z"/>`,
    'game-load': `<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="10 14 12 12 14 14"/><line x1="12" x2="12" y1="12" y2="18"/>`,
    'game-settings': `<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>`,
    'game-exit': `<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>`,
    'game-restart': `<path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.85.99 6.57 2.57L21 8M21 3v5h-5"/>`,
    'game-pause-alt': `<rect width="4" height="12" x="6" y="6" rx="1"/><rect width="4" height="12" x="14" y="6" rx="1"/>`,
    'game-play-alt': `<polygon points="7 4 19 12 7 20 7 4"/>`,
    'dialog-bubble': `<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-12.7 8.19 8.19 0 0 1 4.9 1.5L21 3Z"/><path d="M8 10h8M8 14h5"/>`,
    'narrative-text': `<path d="M4 4h16M4 8h16M4 12h12M4 16h8"/>`,
    'choice-branch': `<path d="M12 22V10m0 0l-5-5M12 10l5-5"/><circle cx="7" cy="5" r="2"/><circle cx="17" cy="5" r="2"/><circle cx="12" cy="22" r="2"/>`,
    'character-stats': `<path d="M4 20h16M4 16h12M4 12h8M4 8h16"/><circle cx="19" cy="14" r="3"/>`,
    'equipment-slots': `<rect width="6" height="6" x="3" y="3" rx="1"/><rect width="6" height="6" x="15" y="3" rx="1"/><rect width="6" height="6" x="9" y="15" rx="1"/>`,
    'loot-drop': `<path d="M12 2L8 8h8L12 2zM6 10l12 0-3 10H9L6 10z"/>`,
    'enemy-mob': `<path d="M12 2a6 6 0 0 0-6 6v4s2 2 6 2 6-2 6-2V8a6 6 0 0 0-6-6z"/><path d="M9 16l-1 6h8l-1-6"/>`,
    'boss-health-bar': `<rect width="20" height="4" x="2" y="10" rx="1"/><path d="M2 12h18"/><path d="M12 7V4a2 2 0 0 1 2-2"/>`,
    'mana-shield': `<circle cx="12" cy="12" r="10"/><path d="M12 7v10M7 12h10"/>`,
    'stamina-drain': `<path d="M12 2v20"/><path d="M8 6l4-4 4 4M8 18l4 4 4-4"/>`,
    'xp-boost': `<path d="M12 2l3 7h7l-6 5 2 7-6-5-6 5 2-7-6-5h7z"/><path d="M12 2v10m-3-3l3 3 3-3"/>`,
    'buff-strength': `<path d="M6 10v4h12l1-4h-5v-2h-4v2H6z"/><path d="M12 10V6"/>`,
    'buff-defense': `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v8M8 12h8"/>`,
    'debuff-poison': `<path d="M12 2L8 6v12a4 4 0 0 0 8 0V6L12 2z"/><circle cx="12" cy="12" r="1"/>`,
    'debuff-slow': `<circle cx="12" cy="12" r="10"/><path d="M12 12h6M12 12v6"/><path d="M8 8l8 8"/>`,
    'game-clock': `<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>`,
    'high-score': `<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M12 14V19M8 22h8M12 4a7 7 0 0 0-7 7v3h14v-3a7 7 0 0 0-7-7Z"/><path d="M10 8h4"/>`,
    'combo-counter': `<path d="M6 12h12M12 6v12"/><text x="14" y="20" font-size="8">×</text>`,
    'multiplier-x2': `<path d="M8 8l8 8M16 8l-8 8"/><text x="18" y="20" font-size="8">2</text>`,
    'checkpoint-flag': `<path d="M4 22V2l16 5-16 5"/>`,
    'finish-line': `<path d="M4 22V2M20 22V2M4 7h16M4 12h16M4 17h16"/>`,
    'game-over': `<path d="M4 12h16M2 2l20 20"/>`,
    'victory-trophy': `<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M12 14V19M8 22h8M12 4a7 7 0 0 0-7 7v3h14v-3a7 7 0 0 0-7-7Z"/><polyline points="9 11 11 13 15 9"/>`,
    'defeat-stone': `<path d="M12 2L2 22h20L12 2z"/><path d="M12 8v4m0 4h0"/>`,
    'matchmaking': `<circle cx="8" cy="12" r="4"/><circle cx="16" cy="12" r="4"/><path d="M10 12h4"/>`,
    'lobby-players': `<circle cx="7" cy="7" r="3"/><circle cx="17" cy="7" r="3"/><circle cx="12" cy="17" r="3"/>`,
    'chat-game': `<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-12.7 8.19 8.19 0 0 1 4.9 1.5L21 3Z"/>`,
    'mic-on': `<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/>`,
    'mic-off': `<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/><line x1="2" x2="22" y1="2" y2="22"/>`,
    'ping-signal': `<path d="M2 20h20"/><path d="M4 20v-4M9 20V12M14 20V8M19 20V4"/>`,
    'frame-rate': `<rect width="18" height="14" x="3" y="5" rx="2"/><text x="7" y="15" font-size="8">FPS</text>`,
    'latency-graph': `<path d="M3 21h18M3 15l4 4 4-10 4 8 4-12"/>`,
    'controller-config': `<rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="6" cy="12" r="2"/><path d="M14 12h4m-2-2v4"/>`,
    'keybindings-keyboard': `<rect width="20" height="12" x="2" y="6" rx="2"/><path d="M6 10h2M10 10h2M14 10h2M18 10h2M6 14h12"/>`,
    'mouse-sensitivity': `<rect width="12" height="18" x="6" y="3" rx="6"/><path d="M12 3v6"/><circle cx="12" cy="15" r="2"/>`,
    'audio-volume': `<path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14"/>`,
    'music-note-game': `<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>`,
    'sfx-sound': `<path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19 12l3-3m-3 3l3 3m-3-3l-3-3m3 3l-3 3"/>`,
    'brightness-gamma': `<circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 1 0 20Z" fill="currentColor"/>`,
    'language-globe': `<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20"/>`,
    'credits-reel': `<path d="M4 4h16v16H4V4z"/><path d="M8 8h8M8 12h8M8 16h8"/>`,

    // Industry & Engineering
    'oil-well': `<path d="M7 22l5-18 5 18M2 22h20M7 10h10M12 4v4"/>`,
    'wind-turbine-pro': `<path d="M12 22V12m0 0l-4-4m4 4l4-4m-4 4l-2 6"/>`,
    'nuclear-plant': `<path d="M3 22h18m-15-4c0-4 2-8 6-8s6 4 6 8M9 6h6"/>`,
    'conveyor-belt': `<rect width="20" height="6" x="2" y="14" rx="3"/><circle cx="6" cy="17" r="1"/><circle cx="12" cy="17" r="1"/><circle cx="18" cy="17" r="1"/>`,
    'robot-arm': `<path d="M4 22h4m-2 0V14l6-6 4 4"/><rect width="4" height="4" x="14" y="6" rx="1"/>`,
    'crane-pro': `<path d="M3 2h12l3 3H3V2zm2 20V5M10 22V5M14 22V5"/>`,
    'excavator': `<path d="M2 18h12v4H2z"/><path d="M14 18l4-8-4-4"/><rect width="4" height="4" x="16" y="2" rx="1"/>`,
    'forklift': `<rect width="10" height="8" x="2" y="10" rx="2"/><path d="M12 18h8M20 18V6"/><circle cx="5" cy="18" r="2"/><circle cx="9" cy="18" r="2"/>`,
    'dump-truck': `<path d="M2 18h14V8H2z"/><path d="M16 18h6v-6l-2-4h-4v10z"/><circle cx="5" cy="18" r="2"/><circle cx="13" cy="18" r="2"/>`,
    'blueprint-pro': `<rect width="18" height="14" x="3" y="5" rx="1"/><path d="M3 10h18M8 5v14M15 5v14"/>`,
    'circuit-board-pro': `<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h4v4H7zm6 0h4v4h-4zM7 13h10v4H7z"/>`,
    'welding-mask': `<path d="M6 4h12l1 6v10H5V10l1-4z"/><rect width="8" height="4" x="8" y="10" rx="1"/>`,
    'safety-goggles': `<circle cx="7" cy="12" r="4"/><circle cx="17" cy="12" r="4"/><path d="M11 12h2M3 12h1M20 12h1"/>`,
    'pliers': `<path d="m15 5 4 4-12 12-4 1 1-4L15 5z"/><path d="M12 12l2 2"/>`,
    'pipe-wrench': `<path d="M18 4h-4v4h4v8h-4v4h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM4 12h10"/>`,
    'saw-hand': `<path d="M3 12l3-3 3 3 3-3 3 3 3-3 3 3V18H3z"/><path d="M6 18v3"/>`,
    'chisel': `<path d="M10 2l4 2-8 18H4L10 2z"/>`,
    'lathe': `<rect width="18" height="4" x="3" y="16" rx="1"/><path d="M6 16V8h4v8m4 0V6h4v10"/>`,
    'milling-machine': `<rect width="18" height="4" x="3" y="18" rx="1"/><path d="M12 18V6m-4 0h8m-4 4v4"/>`,
    '3d-printer-pro': `<rect width="16" height="16" x="4" y="4" rx="2"/><path d="M8 8h8M8 12h8m-4 4v4"/>`,

    // Nature Extended
    'tsunami': `<path d="M2 18c4-4 8 4 12 0s8-12 10-4"/><path d="M2 22h22"/>`,
    'earthquake-crack': `<path d="M12 2l-2 6 4 4-4 4 2 6"/><path d="M2 22h20"/>`,
    'wildfire': `<path d="M12 2c0 4-4 6-4 10s4 8 4 8 4-4 4-8-4-6-4-10z"/><path d="M8 22h8"/>`,
    'glacier': `<path d="M2 20L8 4l6 8 4-4 4 12H2z"/><path d="M6 16h12"/>`,
    'canyon': `<path d="M2 4v16h20V4M8 4c0 4 4 8 0 12m8-12c0 4-4 8 0 12"/>`,
    'cliff': `<path d="M2 4h8c4 4 4 12 0 16H2V4z"/><path d="M16 22L22 10"/>`,
    'cave-entrance': `<path d="M2 22c0-8 4-12 10-12s10 4 10 12H2z"/><circle cx="12" cy="16" r="2"/>`,
    'waterfall': `<path d="M12 2v20m-4-16v12m8-12v12m-12 4h16"/>`,
    'oasis': `<circle cx="12" cy="18" r="4"/><path d="M12 14V6m0 0c2-2 4-2 4-2m-4 2c-2-2-4-2-4-2"/>`,
    'coral-reef': `<path d="M12 22V14m-4-2l4 4 4-4m-8-4l4 4 4-4m-4-8v4"/>`,
    'sea-shell': `<path d="M12 2c-4 0-8 4-8 10s4 10 8 10 8-4 8-10-4-10-8-10z"/><path d="M12 2v20m-4-2c-2-4-2-12 0-16m8 16c2-4 2-12 0-16"/>`,
    'starfish': `<polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9 12 2"/>`,
    'whale': `<path d="M2 12c4 4 12 4 16 0s4-10 4-10-10 2-14 6L2 12z"/><circle cx="16" cy="8" r="1"/>`,
    'shark': `<path d="M2 12c6-2 12-2 18 0l-2-6h-4l-12 6z"/><path d="M12 12l2 4m-4-4l-2 4"/>`,
    'dolphin': `<path d="M2 18c4-4 12-4 16 0l4-6-10-4-10 10z"/><circle cx="18" cy="10" r="1"/>`,
    'penguin': `<ellipse cx="12" cy="14" rx="6" ry="8"/><circle cx="12" cy="6" r="4"/><path d="M12 6l2 2m-4-2l-2 2"/>`,
    'polar-bear': `<path d="M12 20c-4 0-8-4-8-8s4-8 8-8 8 4 8 8-4 8-8 8z"/><circle cx="10" cy="10" r="1"/><circle cx="14" cy="10" r="1"/><path d="M9 16h6"/>`,
    'reindeer': `<path d="M12 20v-6m-4-2h8m-8-4L8 2m8 6l4-6"/><circle cx="12" cy="10" r="4"/>`,
    'owl': `<path d="M12 22a8 8 0 0 0 8-8V6L12 2 4 6v8a8 8 0 0 0 8 8z"/><circle cx="9" cy="10" r="1"/><circle cx="15" cy="10" r="1"/><path d="M12 14l-2-2h4l-2 2z"/>`,
    'eagle': `<path d="M12 2L2 12h20L12 2z"/><path d="M12 22v-10m-4 4l4-4 4 4"/>`,
    'volcano-active': `<path d="M2 20h20L17 8h-6L2 20z"/><path d="M12 8c0-4 2-6 4-6s4 2 4 6"/>`,
    'cloud-storm': `<path d="M17.5 19c3 0 5.5-2.5 5.5-5.5 0-2.8-2.1-5.1-4.8-5.4A7 7 0 0 0 4.5 12c-2 0-3.5 1.5-3.5 4s1.5 4.5 4 4.5h2"/><path d="M12 14l-2 4h4l-2 4"/>`,
    'rainbow': `<path d="M4 16a8 8 0 1 1 16 0m-14 0a6 6 0 1 1 12 0m-10 0a4 4 0 1 1 8 0"/>`,
    'meteor': `<circle cx="18" cy="6" r="4"/><path d="M14 10L2 22M10 14L4 20M16 8L10 14"/>`,
    'aurora': `<path d="M2 12c4 4 8-4 12 0s8 4 10 0m-24 4c4 4 8-4 12 0s8 4 10 0"/>`,
    'crescent-moon-pro': `<path d="M12 3a9 9 0 1 0 9 9 9 9 0 0 0-9-9z"/><path d="M12 3a7 7 0 1 1-7 7 7 7 0 0 1 7-7z"/>`,
    'full-moon-pro': `<circle cx="12" cy="12" r="10"/><circle cx="8" cy="8" r="1"/><circle cx="16" cy="14" r="2"/><circle cx="10" cy="16" r="1"/>`,
    'sun-bright-pro': `<circle cx="12" cy="12" r="5"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5.6 5.6l1.4 1.4m10 10l1.4 1.4M5.6 18.4l1.4-1.4m10-10l1.4-1.4"/>`,
    'cloud-sunny': `<path d="M17 12c0-2-2-4-4-4s-4 2-4 4 4 2 4 2"/><circle cx="18" cy="8" r="3"/><path d="M18 4h0M22 8h0M14 8h0M18 12h0"/>`,
    'fog-heavy': `<path d="M4 10h16M2 14h20M6 18h12M8 22h8"/>`,
    'hail-storm': `<path d="M17.5 19c3 0 5.5-2.5 5.5-5.5 0-2.8-2.1-5.1-4.8-5.4A7 7 0 0 0 4.5 12c-2 0-3.5 1.5-3.5 4s1.5 4.5 4 4.5h2"/><circle cx="8" cy="16" r="1"/><circle cx="12" cy="16" r="1"/><circle cx="16" cy="16" r="1"/>`,
    'desert-heat': `<path d="M2 20c10-2 12-2 20 0"/><circle cx="12" cy="10" r="5"/><path d="M12 2v2M5 5l1.5 1.5M19 5l-1.5 1.5"/>`,
    'wind-breeze': `<path d="M4 12h12a2 2 0 1 0-2-2m4 4H6a2 2 0 1 1 2-2M2 12h2"/>`,
    'autumn-leaf': `<path d="M12 22V12m0 0a6 6 0 1 0 0-10 6 6 0 0 0 0 10z"/><path d="M8 8l8 8M8 16l8-8"/>`,
    'winter-snowflake-pro': `<path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19"/><circle cx="12" cy="12" r="2"/>`,
    'spring-flower': `<circle cx="12" cy="12" r="3"/><path d="M12 6c0-4 4-4 4 0s-4 4-4 4m0-4c0-4-4-4-4 0s4 4 4 4m0 4c0 4-4 4-4 0s4-4 4-4m0 4c0 4 4 4 4 0s-4-4-4-4"/>`,
    'summer-sun-alt': `<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><path d="M12 2v20M2 12h20"/>`,
    'mountain-snow': `<path d="M2 20L8 4l6 16H2z"/><path d="M6 8h4"/>`,
    'mountain-snow': `<path d="M2 20L8 4l6 16H2z"/><path d="M6 8h4"/>`,

    // Food & Kitchen Extended
    'frying-pan': `<path d="M2 14c0 3 4 5 10 5s10-2 10-5H2z"/><path d="M12 19v3M8 22h8"/>`,
    'chef-knife': `<path d="M3 10l12-8v12L3 10z"/><path d="M15 8l6 2-2 4h-4"/>`,
    'bread-slice': `<path d="M7 2h10a2 2 0 0 1 2 2v12a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V4a2 2 0 0 1 2-2z"/>`,
    'cheese-wedge': `<path d="M3 8l16-4L21 20H3V8z"/><circle cx="7" cy="12" r="1"/><circle cx="12" cy="16" r="1"/><circle cx="16" cy="12" r="1"/>`,
    'meat-bone': `<path d="M17 10a3 3 0 1 1 5 2.4 3 3 0 1 1-5 2.4"/><path d="M7 12.4a3 3 0 1 0-5-2.4 3 3 0 1 0 5 2.4m10-2.8H7m10 3.2H7"/>`,
    'chicken-leg': `<path d="M12 14c-4 0-7-3-7-7s3-3 7-3 7 3 7 7-3 7-7 7z"/><path d="M12 14v4M10 22a2 2 0 1 1 4 0"/>`,
    'hot-dog': `<rect width="18" height="6" x="3" y="9" rx="3"/><path d="M3 12h18"/><path d="M6 9V7m12 2V7"/>`,
    'hamburger-pro': `<path d="M3 14h18a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2z"/><path d="M3 10a9 9 0 0 1 18 0v2H3v-2z"/><path d="M3 12h18"/>`,
    'taco': `<path d="M2 12s4-8 10-8 10 8 10 8H2z"/><circle cx="7" cy="10" r="0.5"/><circle cx="12" cy="9" r="0.5"/><circle cx="17" cy="10" r="0.5"/>`,
    'burrito': `<rect width="10" height="18" x="7" y="3" rx="5"/><path d="M7 8h10M7 13h10"/>`,
    'sushi-roll': `<ellipse cx="12" cy="7" rx="9" ry="4"/><path d="M3 7v10a9 4 0 0 0 18 0V7"/><circle cx="12" cy="7" r="3"/>`,
    'ramen-bowl': `<path d="M3 10a9 9 0 0 0 18 0H3z"/><path d="M7 10V2m10 8V2M12 10V4"/>`,
    'dumpling': `<path d="M4 14a8 8 0 0 1 16 0H4z"/><path d="M12 14v-4M8 12l2-2m6 2l-2-2"/>`,
    'croissant': `<path d="M4 16c4-8 12-8 16 0l-4 4H8l-4-4z"/><path d="M9 14l2-2m4 2l-2-2"/>`,
    'donut': `<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><path d="M12 2s-2 2-2 4m6 0s2-2 2-4"/>`,
    'cupcake': `<path d="M6 14h12l1 6H5l1-6z"/><path d="M12 2a6 6 0 0 0-6 6v6h12V8a6 6 0 0 0-6-6z"/>`,
    'ice-cream-cone': `<path d="M12 22L7 12h10l-5 10z"/><circle cx="12" cy="8" r="4"/>`,
    'cookie': `<circle cx="12" cy="12" r="10"/><circle cx="8" cy="8" r="1"/><circle cx="16" cy="10" r="1"/><circle cx="12" cy="14" r="1"/><circle cx="15" cy="18" r="1"/>`,
    'chocolate-bar': `<rect width="12" height="18" x="6" y="3" rx="1"/><path d="M6 8h12M6 13h12M12 3v18"/>`,
    'honey-pot': `<path d="M8 22c-4 0-4-10 0-10s8 0 8 10h-8z"/><path d="M7 10h10M8 6h8M12 10v4"/>`,

    // Music Extended
    'microphone-stage': `<path d="M12 2a4 4 0 0 0-4 4v6a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4z"/><path d="M12 18v4M8 22h8"/>`,
    'speaker-loud': `<rect width="14" height="20" x="5" y="2" rx="2"/><circle cx="12" cy="7" r="3"/><circle cx="12" cy="15" r="4"/><circle cx="12" cy="15" r="1"/>`,
    'waveform-path': `<path d="M2 12h4l2-8 4 16 4-12 4 4h4"/>`,
    'music-note-double': `<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/><path d="M9 10l12-2"/>`,
    'clef-treble': `<path d="M12 22a4 4 0 1 1 0-8c2 0 4-2 4-6s-4-6-4-6 4 2 4 6-2 6-4 6-4 2-4 4"/>`,
    'clef-bass': `<path d="M8 12a4 4 0 1 1 8 0c0 4-4 8-8 8"/><circle cx="18" cy="10" r="1"/><circle cx="18" cy="14" r="1"/>`,
    'metronome': `<path d="M12 2L6 22h12L12 2z"/><path d="M12 6l4 12"/>`,
    'tuning-fork': `<path d="M8 2v10a4 4 0 0 0 8 0V2"/><path d="M12 16v6"/>`,
    'synthesizer': `<rect width="20" height="12" x="2" y="6" rx="2"/><path d="M6 10v4m4-4v4m4-4v4m4-4v4"/><path d="M2 14h20"/>`,
    'turntable-pro': `<rect width="20" height="14" x="2" y="5" rx="2"/><circle cx="10" cy="12" r="6"/><path d="M18 7v10l-4-4"/>`,
    'mixer-board': `<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 7v10m4-14v14m4-10v10"/><circle cx="8" cy="12" r="1"/><circle cx="12" cy="8" r="1"/><circle cx="16" cy="14" r="1"/>`,
    'equalizer-bars': `<path d="M4 12V8m4 8v-6m4 10v-12m4 8V10m4 12v-8"/>`,
    'amplifier': `<rect width="18" height="14" x="3" y="5" rx="2"/><circle cx="8" cy="12" r="3"/><circle cx="16" cy="12" r="1"/><path d="M3 10h18"/>`,
    'megaphone-pro': `<path d="m3 11 18-5v12L3 13v-2z"/><path d="M11.6 16.8 9 20M11 6l3-3"/><path d="M21 9a4 4 0 0 1 0 6"/>`,
    'radio-vintage': `<rect width="18" height="12" x="3" y="8" rx="2"/><circle cx="15" cy="14" r="3"/><path d="M3 12h10M6 4l6 4M12 14h0"/>`,
    'cassette-tape': `<rect width="18" height="12" x="3" y="6" rx="2"/><circle cx="11" cy="12" r="2"/><circle cx="17" cy="12" r="2"/><path d="M7 18h10"/>`,
    'compact-disc': `<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><path d="M12 12l4 4m-8-8l-4-4"/>`,
    'ipod-classic': `<rect width="12" height="20" x="6" y="2" rx="2"/><circle cx="12" cy="14" r="4"/><path d="M6 8h12"/>`,
    'gramophone': `<path d="M16 4l6 4-6 4V4z"/><path d="M16 12s-4 4-8 4H4v4h16v-8h-4z"/>`,
    'accordion': `<path d="M4 4h4v16H4V4zm4 0h8l-4 8 4 8H8V4zm12 0h-4v16h4V4z"/>`,

    // Office Extended
    'stapler': `<path d="M4 20h16v-4H4v4z"/><path d="M4 16V8a2 2 0 0 1 2-2h14v10"/>`,
    'hole-puncher': `<rect width="18" height="8" x="3" y="14" rx="2"/><circle cx="8" cy="10" r="1"/><circle cx="16" cy="10" r="1"/><path d="M12 14V6"/>`,
    'paper-shredder': `<rect width="18" height="8" x="3" y="4" rx="2"/><path d="M6 12v8M10 12v8M14 12v8M18 12v8"/>`,
    'scanner-pro': `<rect width="20" height="12" x="2" y="8" rx="2"/><path d="M2 14h20M20 8l-4-4H8L4 8"/>`,
    'copier-machine': `<rect width="16" height="12" x="4" y="8" rx="2"/><path d="M6 8V4h12v4M4 14h16M8 22h8"/>`,
    'file-cabinet-pro': `<rect width="14" height="20" x="5" y="2" rx="2"/><path d="M5 8h14M5 14h14M5 20h14M10 5h4m-4 6h4m-4 6h4"/>`,
    'sticky-note': `<path d="M4 4h16v12l-4 4H4V4z"/><path d="M16 20v-4h4"/>`,
    'push-pin': `<path d="m15 5 4 4-12 12-4 1 1-4L15 5z"/><path d="M10 10l2 2"/>`,
    'scissors-cut': `<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4L8.12 15.88M20 20L8.12 8.12"/>`,
    'ruler-measure': `<rect width="20" height="6" x="2" y="9" rx="1"/><path d="M7 9v3M12 9v4M17 9v3"/>`,
    'protractor': `<path d="M2 12a10 10 0 0 1 20 0H2z"/><path d="M12 12V2m-7 7l1.5 1.5M19 9l-1.5 1.5"/>`,
    'compass-draw': `<path d="M12 2l-6 18m6-18l6 18m-9-6h6"/><circle cx="12" cy="2" r="1.5"/>`,
    'paint-brush-pro': `<path d="m15 5 4 4-12 12-4 1 1-4L15 5z"/><path d="M18 8l3-3"/>`,
    'palette-colors': `<path d="M12 22s-9-2-9-10S7 2 12 2s9 2 9 10-9 10-9 10z"/><circle cx="7" cy="10" r="1"/><circle cx="12" cy="7" r="1"/><circle cx="17" cy="10" r="1"/>`,
    'easel-canvas': `<rect width="14" height="10" x="5" y="4" rx="1"/><path d="M9 22l-2-8m6 8l2-8m-3 8v2"/>`,
    'pen-fountain': `<path d="m15 5 4 4-12 12-4 1 1-4L15 5z"/><path d="M12 12l2 2m-2-2h4"/>`,
    'ink-bottle': `<path d="M8 22c-4 0-4-10 0-10s8 0 8 10h-8z"/><path d="M10 6h4v6h-4V6z"/>`,
    'quill-pen': `<path d="M20 2s-8 4-12 12c-2 4-6 8-6 8s4-2 8-4l10-16z"/>`,
    'stamp-office': `<path d="M12 14V2m-6 12h12v4H6v-4zm3 8h6"/>`,
    'desk-pro': `<rect width="18" height="12" x="3" y="6" rx="1"/><path d="M6 18v4M18 18v4M3 10h18"/>`,
    'desk-pro': `<rect width="18" height="12" x="3" y="6" rx="1"/><path d="M6 18v4M18 18v4M3 10h18"/>`,

    // Science Extended
    'beaker-graduated': `<path d="M6 3h12v18H6V3z"/><path d="M6 7h12M6 11h8M6 15h12"/>`,
    'test-tubes': `<path d="M9 3v14a3 3 0 0 0 6 0V3M4 11h16"/>`,
    'pipette': `<path d="m15 5 4 4-12 12-4 1 1-4L15 5z"/><path d="M12 12l2 2"/>`,
    'petri-dish': `<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="7"/><path d="M10 10l1 2m3 1l1 2"/>`,
    'bunsen-burner': `<path d="M12 2v10m-4 10h8l-2-6h-4l-2 6z"/><path d="M6 22h12"/>`,
    'scales-lab': `<path d="M12 2v20M6 7H2a4 4 0 0 0 8 0H6zm16 0h-4a4 4 0 0 0 8 0h-4z"/>`,
    'centrifuge': `<circle cx="12" cy="12" r="10"/><path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19"/>`,
    'electromagnet': `<path d="M6 4v12a2 2 0 0 0 4 0V4m4 0v12a2 2 0 0 0 4 0V4"/><path d="M2 4h20"/>`,
    'prism-light': `<path d="M12 2L2 20h20L12 2z"/><path d="M2 12l10 2 10-6"/>`,
    'compass-magnetic': `<circle cx="12" cy="12" r="10"/><path d="M12 4v16M4 12h16"/><polyline points="12 12 14 8 16 12 12 12"/>`,
    'thermometer-pro': `<path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/><path d="M10 8h4"/>`,
    'barometer': `<circle cx="12" cy="12" r="10"/><path d="M12 12l4-4M12 2v2m10 8h-2M12 22v-2M2 12h2"/>`,
    'hygrometer': `<path d="M12 22a8 8 0 0 0 8-8c0-5.5-3.5-12-8-12S4 8.5 4 14a8 8 0 0 0 8 8Z"/><path d="M12 14v4M10 16l2-2 2 2"/>`,
    'anemometer': `<path d="M12 12V2m0 10l-6 6m6-6l6 6m-9-9c-2 0-4-2-4-4s2-4 4-4m6 0c2 0 4 2 4 4s-2 4-4 4"/>`,
    'rain-gauge': `<rect width="10" height="18" x="7" y="2" rx="1"/><path d="M7 6h10M7 10h10M7 14h10M7 18h10"/>`,
    'telescope-star': `<path d="m10 7 11 3-3 11-11-3 3-11ZM2 22l8-8"/><path d="M18 4v2m-1-1h2"/>`,
    'microscope-pro': `<path d="M6 18h8M3 22h18M12 6a4 4 0 1 0-8 0v12M12 6V3m0 16v-3M18 10a4 4 0 0 1-4 4"/>`,
    'dna-strand-pro': `<path d="M8 2s4 4 4 10-4 10-4 10M16 2s-4 4-4 10 4 10 4 10M12 5h4M8 8h8M8 12h8M8 16h8M8 19h4"/>`,
    'molecule-structure': `<circle cx="12" cy="12" r="3"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="12" cy="20" r="2"/><path d="M10 10L7 7m7 3l3-3m-5 7v3"/>`,
    'planet-saturn': `<circle cx="12" cy="12" r="6"/><path d="M2 12c0-3 10-6 20 0s-10 6-20 0z"/>`,

    // Household & Common
    'vacuum-cleaner': `<path d="M6 2h12v16H6V2z"/><path d="M12 18v4h8v-2h-4"/><path d="M6 6H2v6"/>`,
    'washing-machine': `<rect width="16" height="20" x="4" y="2" rx="2"/><circle cx="12" cy="12" r="5"/><path d="M8 6h2M14 6h2"/>`,
    'dryer-machine': `<rect width="16" height="20" x="4" y="2" rx="2"/><circle cx="12" cy="12" r="5"/><path d="M12 9v6"/>`,
    'dishwasher': `<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M4 8h16M8 12h8M8 16h8"/>`,
    'microwave-oven': `<rect width="20" height="14" x="2" y="5" rx="2"/><rect width="12" height="10" x="4" y="7" rx="1"/><path d="M18 9v6M12 7v4"/>`,
    'refrigerator-pro': `<rect width="14" height="20" x="5" y="2" rx="2"/><path d="M5 10h14M9 5h0M9 13h0"/>`,
    'toaster-pro': `<path d="M4 10h16v8H4v-8z"/><path d="M6 10V6a2 2 0 0 1 4 0v4m4 0V6a2 2 0 0 1 4 0v4"/><path d="M2 18h20"/>`,
    'kettle-electric': `<path d="M6 22h12V10a6 6 0 0 0-12 0v12z"/><path d="M18 12h2v6h-2"/><path d="M12 2v4"/>`,
    'blender-pro': `<path d="M8 22h8L14 8H10L8 22z"/><path d="M10 4h4v4h-4V4z"/>`,
    'coffee-maker-pro': `<path d="M6 2h12v20H6V2z"/><path d="M6 10h12M9 16h6M12 10v4"/>`,
    'iron-steam': `<path d="M4 18h16L18 8H6L4 18z"/><path d="M10 8V4h4v4"/>`,
    'hair-dryer': `<path d="M4 8h10l2 2v4l-2 2H4V8z"/><path d="M10 16v6"/>`,
    'flashlight-pro': `<rect width="6" height="16" x="9" y="6" rx="1"/><path d="M9 6c0-2 6-2 6 0M12 10h0"/>`,
    'candle-lit': `<rect width="8" height="12" x="8" y="10" rx="1"/><path d="M12 10V6c0-2 2-2 2-2s-2 0-2 2z"/>`,
    'matchstick': `<rect width="2" height="18" x="11" y="4" rx="1"/><circle cx="12" cy="4" r="2"/>`,
    'umbrella-open': `<path d="M12 4a10 10 0 0 1 10 10H2a10 10 0 0 1 10-10z"/><path d="M12 14v6a2 2 0 0 0 4 0"/>`,
    'luggage-pro': `<rect width="14" height="18" x="5" y="4" rx="2"/><path d="M9 4V2h6v2M5 10h14"/>`,
    'backpack-pro': `<path d="M6 20h12a2 2 0 0 0 2-2V8a6 6 0 0 0-12 0v10a2 2 0 0 0 2 2z"/><path d="M6 12h12M12 12v8"/>`,
    'wallet-leather': `<path d="M20 12V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V12Z"/><path d="M16 12h4v3h-4z"/>`,
    'watch-analog': `<circle cx="12" cy="12" r="6"/><path d="M12 2V6m0 12v4M9 12l3 3 4-4"/>`,

    // Symbols & Abstract
    'infinity-loop': `<path d="M7 9a3 3 0 1 1 0 6c-3 0-7-6-10-6a3 3 0 1 0 0 6c3 0 7-6 10-6z" transform="translate(12,12) scale(0.5) translate(-12,-12)"/>`,
    'yin-yang': `<circle cx="12" cy="12" r="10"/><path d="M12 2a5 5 0 0 0 0 10 5 5 0 0 1 0 10"/><circle cx="12" cy="7" r="2"/><circle cx="12" cy="17" r="2" fill="currentColor"/>`,
    'peace-sign': `<circle cx="12" cy="12" r="10"/><path d="M12 2v20M12 12l-7 7M12 12l7 7"/>`,
    'recycle-pro': `<path d="M7 11l5-5 5 5M12 6v12M17 13l-5 5-5-5"/>`,
    'warning-triangle-pro': `<path d="M12 2L2 22h20L12 2z"/><path d="M12 8v6m0 4h0"/>`,
    'info-circle-pro': `<circle cx="12" cy="12" r="10"/><path d="M12 16v-4m0-4h0"/>`,
    'question-diamond': `<path d="M12 2l10 10-10 10L2 12z"/><path d="M12 16v-1m0-2c0-2 2-2 2-4s-2-2-2-2-2 1-2 2"/>`,
    'exclamation-octagon': `<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/><path d="M12 8v6m0 4h.01"/>`,
    'ban-circle': `<circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 14.14 14.14"/>`,
    'check-shield-pro': `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>`,
    'user-pro-alt': `<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/><path d="M20 8l2-2m-2-2h4"/>`,
    'heart-crack': `<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5l-2 4 4 4-2 4"/>`,
    'star-half-filled': `<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/><path d="M12 2v15.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>`,
    'diamond-shine': `<path d="M6 3h12l4 6-10 12L2 9z"/><path d="M12 3L9 9l3 12 3-12zM2 9l20 0"/>`,
    'zap-fast': `<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/><path d="M17 2l-2 4m4 2l-2 4"/>`,
    'fire-hot': `<path d="M12 2c0 3.6-2.4 4.8-1.2 8.4a7.2 7.2 0 0 1-10.8 4.8c1.2-2.4 1.2-4.8 0-7.2a12 12 0 0 1 12-6z"/><path d="M18.8 8.4A12 12 0 0 1 12 22a7.2 7.2 0 0 1-7.2-7.2c1.2 0 1.2-2.4 0-4.8a12 12 0 0 1 12-10c0 3.3-1.6 4.3-.8 8.4z"/>`,
    'snowflake-cold': `<path d="M12 2v20M2 12h20m-4.22-5.78L4.22 17.78m13.56 0L4.22 6.22"/><circle cx="12" cy="12" r="2"/>`,
    'sun-bright-alt': `<circle cx="12" cy="12" r="5"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2"/><circle cx="12" cy="12" r="10"/>`,
    'moon-full-alt': `<circle cx="12" cy="12" r="10"/><circle cx="8" cy="8" r="2"/><circle cx="16" cy="12" r="1"/><circle cx="10" cy="18" r="3"/>`,
    'cloud-heavy-alt': `<path d="M17.5 19c3 0 5.5-2.5 5.5-5.5 0-2.8-2.1-5.1-4.8-5.4A7 7 0 0 0 4.5 12c-2 0-3.5 1.5-3.5 4s1.5 4.5 4 4.5h2"/><path d="M12 19v3m-4-3v2m8-2v3"/>`,
    'mountain-snow': `<path d="M2-20L8-4l6-16H2z"/><path d="M6 8h4"/>`,

    // --- ULTIMATE UTILITY EXPANSION [v9.2] ---

    // Computer Languages
    'logo-java': `<path d="M6 20c0 1.1 2.7 2 6 2s6-.9 6-2M3 17c0 1.1 4 2 9 2s9-.9 9-2M7 14c0 1 2.2 1.8 5 1.8s5-.8 5-1.8"/><path d="M12 2c0 4-4 6-4 10s4 8 4 8 4-4 4-8-4-6-4-10z"/>`,
    'logo-python': `<path d="M12 2a5 5 0 0 0-5 5v2h5V7h5V5a5 5 0 0 0-5-5zM7 22a5 5 0 0 0 5-5v-2h-5v2h-5v2a5 5 0 0 0 5 5z"/><circle cx="9" cy="5" r="0.5"/><circle cx="15" cy="19" r="0.5"/>`,
    'logo-javascript': `<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 15v2a2 2 0 0 1-2 2H9l1-2h3v-2h-2v2"/><circle cx="15" cy="9" r="1"/>`,
    'logo-typescript': `<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h10M12 7v12M15 15v2a2 2 0 0 1-2 2h-4l1-2h3v-2h-2v2"/>`,
    'logo-cpp': `<circle cx="12" cy="12" r="10"/><path d="M12 8a4 4 0 1 0 0 8"/><path d="M18 10h4M20 8v4M14 10h4M16 8v4"/>`,
    'logo-csharp': `<circle cx="12" cy="12" r="10"/><path d="M12 8a4 4 0 1 0 0 8"/><path d="M16 10h4M16 14h4M17 9v6M19 9v6"/>`,
    'logo-php': `<ellipse cx="12" cy="12" rx="10" ry="6"/><path d="M8 10v6m4-6v6m4-6v6m-8-3h8"/>`,
    'logo-ruby': `<path d="M12 2L2 9l10 13 10-13L12 2z"/><path d="M6 9l6 6 6-6M9 6h6"/>`,
    'logo-swift': `<path d="M22 2s-8 4-12 12c-2 4-6 8-6 8s4-2 8-4l10-16z"/><path d="M12 12l4 4-2-6"/>`,
    'logo-go': `<circle cx="12" cy="12" r="10"/><path d="M18 12H12l2 2m-2-6l4-4"/>`,
    'logo-rust': `<circle cx="12" cy="12" r="10"/><path d="M12 2l1 2m6 1l-2 1m4 6h-2m-1 6l-1-2m-6 3v-2m-6-1l1-2m-4-6h2m1-6l1 2"/><circle cx="12" cy="12" r="4"/>`,
    'logo-kotlin': `<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 21L21 3M3 3l18 18M12 12l9 0"/>`,
    'logo-dart': `<path d="M12 2L2 12l10 10 10-10L12 2z"/><path d="M12 6v12M6 12h12"/>`,
    'logo-html5': `<path d="M4 2l1.5 16 6.5 4 6.5-4L20 2H4z"/><path d="M7 8h10l-.5 4H8l.5 4 3.5 2 3.5-2 .5-2"/>`,
    'logo-css3': `<path d="M4 2l1.5 16 6.5 4 6.5-4L20 2H4z"/><path d="M7 8h10l-1 8-4 2-4-2 .5-2h6.5"/>`,
    'logo-sql': `<ellipse cx="12" cy="6" rx="9" ry="3"/><path d="M3 6v12a9 3 0 0 0 18 0V6"/><path d="M3 12a9 3 0 0 0 18 0"/><path d="M8 15h8"/>`,
    'logo-shell': `<polyline points="6 8 10 12 6 16"/><line x1="12" x2="18" y1="18" y2="18"/>`,
    'logo-markdown': `<rect width="20" height="14" x="2" y="5" rx="2"/><path d="M7 9v6l2-2 2 2V9m4 0v6m2-3l2 3m0-6l-2 3"/>`,
    'logo-git': `<rect width="12" height="12" x="6" y="6" rx="2" transform="rotate(45 12 12)"/><circle cx="12" cy="12" r="2"/><path d="M12 8v4M8 12h4"/>`,
    'logo-react': `<circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-60 12 12)"/>`,
    'logo-react': `<circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-60 12 12)"/>`,

    // Spoken Languages
    'lang-en': `<circle cx="12" cy="12" r="10"/><text x="12" y="15" text-anchor="middle" font-size="10" font-weight="bold">EN</text>`,
    'lang-hi': `<circle cx="12" cy="12" r="10"/><text x="12" y="15" text-anchor="middle" font-size="10" font-weight="bold">HI</text>`,
    'lang-es': `<circle cx="12" cy="12" r="10"/><text x="12" y="15" text-anchor="middle" font-size="10" font-weight="bold">ES</text>`,
    'lang-ru': `<circle cx="12" cy="12" r="10"/><text x="12" y="15" text-anchor="middle" font-size="10" font-weight="bold">RU</text>`,
    'lang-fr': `<circle cx="12" cy="12" r="10"/><text x="12" y="15" text-anchor="middle" font-size="10" font-weight="bold">FR</text>`,
    'lang-de': `<circle cx="12" cy="12" r="10"/><text x="12" y="15" text-anchor="middle" font-size="10" font-weight="bold">DE</text>`,
    'lang-zh': `<circle cx="12" cy="12" r="10"/><text x="12" y="15" text-anchor="middle" font-size="10" font-weight="bold">ZH</text>`,
    'lang-ja': `<circle cx="12" cy="12" r="10"/><text x="12" y="15" text-anchor="middle" font-size="10" font-weight="bold">JA</text>`,
    'lang-ar': `<circle cx="12" cy="12" r="10"/><text x="12" y="15" text-anchor="middle" font-size="10" font-weight="bold">AR</text>`,
    'lang-pt': `<circle cx="12" cy="12" r="10"/><text x="12" y="15" text-anchor="middle" font-size="10" font-weight="bold">PT</text>`,
    'lang-it': `<circle cx="12" cy="12" r="10"/><text x="12" y="15" text-anchor="middle" font-size="10" font-weight="bold">IT</text>`,
    'lang-ko': `<circle cx="12" cy="12" r="10"/><text x="12" y="15" text-anchor="middle" font-size="10" font-weight="bold">KO</text>`,
    'lang-vi': `<circle cx="12" cy="12" r="10"/><text x="12" y="15" text-anchor="middle" font-size="10" font-weight="bold">VI</text>`,
    'lang-tr': `<circle cx="12" cy="12" r="10"/><text x="12" y="15" text-anchor="middle" font-size="10" font-weight="bold">TR</text>`,
    'lang-pl': `<circle cx="12" cy="12" r="10"/><text x="12" y="15" text-anchor="middle" font-size="10" font-weight="bold">PL</text>`,
    'lang-pl': `<circle cx="12" cy="12" r="10"/><text x="12" y="15" text-anchor="middle" font-size="10" font-weight="bold">PL</text>`,

    // Global Currencies
    'curr-rupee': `<path d="M6 3h12M6 8h12M6 3l12 10M6 13h5c3 0 5-2 5-5s-2-5-5-5M11 13l6 9"/>`,
    'curr-yen': `<path d="M12 12V22M12 12L5 3M12 12l7-9M8 12h8M8 16h8"/>`,
    'curr-won': `<path d="M3 3l3 16 3-16 3 16 3-16 3 16 3-16M3 9h18M3 13h18"/>`,
    'curr-ruble': `<path d="M7 21V3h7c3 0 5 2 5 5s-2 5-5 5H7M6 13h12M6 17h8"/>`,
    'curr-lira': `<path d="M6 3v18h12M6 13h7M6 17h5M18 3l-6 10"/>`,
    'curr-franc': `<path d="M7 21V3h10M7 8h8M7 13h5"/>`,
    'curr-peso': `<path d="M7 21V3h7c3 0 5 2 5 5s-2 5-5 5H7M5 8h14M5 12h14"/>`,
    'curr-baht': `<path d="M7 21V3h7c3 0 5 2 5 5s-2 5-5 5H7M12 2v20"/>`,
    'curr-dong': `<path d="M7 21V3h7c3 0 5 2 5 5s-2 5-5 5H7M7 17h5M15 17h4"/>`,
    'curr-shekel': `<path d="M5 21V3h6a5 5 0 0 1 0 10H5M19 3v18h-6a5 5 0 0 1 0-10h6"/>`,
    'curr-shekel': `<path d="M5 21V3h6a5 5 0 0 1 0 10H5M19 3v18h-6a5 5 0 0 1 0-10h6"/>`,

    // Electric Appliances - Kitchen
    'app-fridge-pro': `<rect width="14" height="20" x="5" y="2" rx="2"/><path d="M5 10h14M9 5v2m0 6v3"/>`,
    'app-microwave-pro': `<rect width="20" height="14" x="2" y="5" rx="2"/><rect width="12" height="10" x="4" y="7" rx="1"/><path d="M18 9v6M12 7v4"/>`,
    'app-coffee-drip': `<path d="M6 2h12v20H6V2z"/><path d="M6 10h12M9 16h6m-3-6v4"/>`,
    'app-air-fryer': `<path d="M6 22h12a2 2 0 0 0 2-2V8a6 6 0 0 0-12 0v12a2 2 0 0 0 2 2z"/><rect width="10" height="6" x="7" y="12" rx="1"/><path d="M12 8h0"/>`,
    'app-rice-cooker': `<path d="M4 10a8 8 0 0 1 16 0v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10z"/><path d="M12 2v3m-4 5h8"/>`,
    'app-blender-high': `<path d="M8 22h8L14 8H10L8 22z"/><path d="M10 4h4v4h-4V4z"/><circle cx="12" cy="15" r="1"/>`,
    'app-toaster-mini': `<path d="M4 10h16v8H4v-8z"/><path d="M6 10V6a2 2 0 0 1 4 0v4m4 0V6a2 2 0 0 1 4 0v4"/>`,
    'app-kettle-goose': `<path d="M6 22h12V10a6 6 0 0 0-12 0v12z"/><path d="M18 12c4-4 4-8 0-8"/><path d="M12 2v4"/>`,
    'app-sandwich-maker': `<rect width="16" height="10" x="4" y="4" rx="1"/><rect width="16" height="10" x="4" y="10" rx="1"/><path d="M12 4v16"/>`,
    'app-waffle-iron': `<circle cx="12" cy="12" r="10"/><path d="M12 2v20M2 12h20M7 7l10 10M17 7L7 17"/>`,
    'app-food-processor': `<rect width="12" height="16" x="6" y="6" rx="2"/><path d="M18 10h2v10h-2V10z"/><path d="M12 6V2"/>`,
    'app-slow-juicer': `<path d="M8 22h8v-8H8v8z"/><path d="M12 14V6l6 2"/><circle cx="12" cy="18" r="1"/>`,
    'app-mixer-grinder': `<path d="M6 22h12l-2-12H8l-2 12z"/><rect width="8" height="6" x="8" y="4" rx="1"/>`,
    'app-induction-stove': `<rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>`,
    'app-wall-oven': `<rect width="18" height="18" x="3" y="3" rx="1"/><rect width="14" height="10" x="5" y="7" rx="1"/><path d="M3 10h18"/>`,
    'app-dishwasher-built': `<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M4 8h16M8 12h8M8 16h8"/><circle cx="12" cy="5" r="0.5"/>`,
    'app-mini-bar': `<rect width="12" height="16" x="6" y="4" rx="1"/><path d="M9 10h6M9 14h6M15 4v16"/>`,
    'app-wine-fridge': `<rect width="14" height="20" x="5" y="2" rx="2"/><path d="M5 7h14M5 12h14M5 17h14"/><circle cx="15" cy="4.5" r="0.5"/>`,
    'app-dehydrator': `<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 8h18M3 13h18M3 18h18M10 3v18"/>`,
    'app-range-hood': `<path d="M4 22V14l4-8h8l4 8v8H4z"/><path d="M10 6V2h4v4"/>`,
    'app-garbage-disposal': `<path d="M8 2h8v6l-2 4v10H10V12L8 8V2z"/><path d="M6 4h12"/>`,
    'app-ice-maker': `<rect width="16" height="18" x="4" y="3" rx="2"/><path d="M4 10h16M12 10v11l-4-4"/>`,
    'app-electric-grill': `<rect width="18" height="12" x="3" y="8" rx="2"/><path d="M3 12h18M6 8V4m12 4V4M12 8V4"/>`,
    'app-crepe-maker': `<circle cx="12" cy="14" r="9"/><path d="M12 5V2m0 3a10 10 0 0 1 0 18"/>`,
    'app-popcorn-machine': `<rect width="14" height="18" x="5" y="4" rx="2"/><path d="M5 14h14"/><circle cx="10" cy="10" r="1"/><circle cx="14" cy="9" r="1"/>`,
    'app-egg-boiler': `<path d="M4 14a8 8 0 0 1 16 0H4z"/><circle cx="8" cy="18" r="2"/><circle cx="16" cy="18" r="2"/>`,
    'app-milk-frother': `<path d="M12 22V10m0 0a4 4 0 0 1 4 4v8H8v-8a4 4 0 0 1 4-4z"/><path d="M12 6V2"/>`,
    'app-yogurt-maker': `<rect width="16" height="12" x="4" y="10" rx="2"/><circle cx="8" cy="6" r="3"/><circle cx="16" cy="6" r="3"/>`,
    'app-ice-cream-maker': `<rect width="14" height="18" x="5" y="4" rx="2"/><path d="M12 12V8m-3 8h6"/>`,
    'app-pasta-maker': `<rect width="18" height="12" x="3" y="10" rx="1"/><path d="M6 10V4h4v6m4 0V4h4v6"/>`,
    'app-pasta-maker': `<rect width="18" height="12" x="3" y="10" rx="1"/><path d="M6 10V4h4v6m4 0V4h4v6"/>`,

    // Electric Appliances - Laundry & Cleaning
    'app-washing-machine-alt': `<rect width="16" height="20" x="4" y="2" rx="2"/><circle cx="12" cy="12" r="5"/><path d="M12 9a3 3 0 0 0-3 3"/><path d="M8 5h8"/>`,
    'app-clothes-dryer': `<rect width="16" height="20" x="4" y="2" rx="2"/><circle cx="12" cy="12" r="5"/><path d="M12 9v6M9 12h6"/><path d="M8 5h2"/>`,
    'app-steam-iron': `<path d="M4 18h16L18 8H6L4 18z"/><path d="M10 8V4h4v4"/><path d="M6 18c0 2 2 2 4 2s4-1 4-2"/>`,
    'app-vacuum-stick': `<rect width="4" height="12" x="10" y="2"/><path d="M8 14h8l2 6H6l2-6z"/><path d="M12 22v-2"/>`,
    'app-robot-vacuum-alt': `<circle cx="12" cy="12" r="10"/><path d="M12 12m-2 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/><path d="M22 12h-2M2 12h2"/>`,
    'app-pressure-washer': `<rect width="12" height="16" x="6" y="4" rx="2"/><path d="M18 10h4v2h-4v-2z"/><circle cx="12" cy="20" r="2"/>`,
    'app-steam-mop': `<path d="M12 2v14m0 0l-4 6h8l-4-6z"/><path d="M10 4h4"/>`,
    'app-carpet-cleaner': `<rect width="14" height="16" x="5" y="4" rx="2"/><path d="M8 20v2m8-2v2M5 10h14"/>`,
    'app-trash-compactor': `<rect width="16" height="18" x="4" y="4" rx="2"/><path d="M4 12h16M8 8h0M16 8h0"/>`,
    'app-garment-steamer': `<path d="M12 4v14m-4 4h8"/><circle cx="12" cy="4" r="2"/><path d="M12 6c-2 0-4 2-4 4"/>`,
    'app-clothes-shaver': `<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><path d="M12 6V2"/>`,
    'app-electric-scrubber': `<rect width="6" height="16" x="9" y="4" rx="1"/><circle cx="12" cy="20" r="3"/><path d="M12 4V2"/>`,
    'app-shoe-polisher': `<rect width="18" height="10" x="3" y="10" rx="2"/><circle cx="8" cy="15" r="2"/><circle cx="16" cy="15" r="2"/>`,
    'app-water-purifier': `<path d="M12 2v10m-4 10h8l-2-6h-4l-2 6z"/><circle cx="12" cy="6" r="2"/>`,
    'app-water-dispenser': `<rect width="12" height="20" x="6" y="2" rx="1"/><path d="M9 10h6M12 10v4"/><circle cx="12" cy="6" r="2"/>`,
    'app-humidifier': `<rect width="16" height="14" x="4" y="6" rx="2"/><path d="M12 6V2m-3 4l3-2 3 2"/>`,
    'app-dehumidifier': `<rect width="16" height="14" x="4" y="6" rx="2"/><path d="M8 10h8M8 14h8m-4-8v8"/>`,
    'app-air-purifier-tower': `<rect width="10" height="20" x="7" y="2" rx="1"/><path d="M7 6h10M7 10h10M7 14h10M7 18h10"/>`,
    'app-table-fan': `<circle cx="12" cy="12" r="10"/><path d="M12 12c-4 0-6-4-6-4s2 2 6 2m0 0c0-4 4-6 4-6s-2 2-2 6"/><path d="M12 22v-4"/>`,
    'app-space-heater': `<rect width="14" height="18" x="5" y="4" rx="2"/><path d="M8 8h8M8 12h8M8 16h8"/>`,
    'app-space-heater': `<rect width="14" height="18" x="5" y="4" rx="2"/><path d="M8 8h8M8 12h8M8 16h8"/>`,

    // Electric Appliances - Smart Home & Devices
    'app-smart-speaker-alt': `<rect width="10" height="16" x="7" y="4" rx="5"/><circle cx="12" cy="16" r="2"/><path d="M12 4v4m-3-2l6 0"/>`,
    'app-projector-pro': `<rect width="18" height="10" x="3" y="6" rx="2"/><circle cx="8" cy="11" r="3"/><path d="M17 11h2"/>`,
    'app-set-top-box': `<rect width="18" height="6" x="3" y="14" rx="1"/><path d="M6 17h0M10 17h0"/><circle cx="18" cy="17" r="1"/>`,
    'app-game-console-handheld': `<rect width="20" height="10" x="2" y="7" rx="2"/><rect width="8" height="6" x="8" y="9" rx="1"/><circle cx="5" cy="12" r="1.5"/><path d="M17 10v4m-2-2h4"/>`,
    'app-curved-tv': `<path d="M2 5c4-2 16-2 20 0v12c-4 2-16 2-20 0V5z"/><path d="M8 21h8M12 17v4"/>`,
    'app-digital-camera-alt': `<rect width="18" height="12" x="3" y="6" rx="2"/><circle cx="12" cy="12" r="4"/><path d="M7 6V4h4v2"/>`,
    'app-camcorder-pro': `<rect width="12" height="10" x="4" y="8" rx="2"/><path d="M16 10l6-4v12l-6-4"/><circle cx="8" cy="13" r="2"/>`,
    'app-cctv-outdoor': `<path d="M3 12h14l4-4-4-4H3v8z"/><path d="M10 12v4m-3 4h6"/>`,
    'app-video-doorbell': `<rect width="8" height="18" x="8" y="3" rx="4"/><circle cx="12" cy="8" r="2"/><circle cx="12" cy="15" r="3"/>`,
    'app-smart-lock-alt': `<rect width="14" height="18" x="5" y="3" rx="2"/><circle cx="12" cy="9" r="3"/><path d="M12 12v4m-2-2h4"/>`,
    'app-thermostat-smart': `<circle cx="12" cy="12" r="10"/><text x="12" y="15" text-anchor="middle" font-size="8">22°</text>`,
    'app-smart-plug-alt': `<rect width="12" height="10" x="6" y="7" rx="2"/><path d="M10 7V3m4 4V3m-2 14v4"/>`,
    'app-smart-bulb-color': `<path d="M12 2a7 7 0 0 0-7 7c0 3 2 5 2 8h10c0-3 2-5 2-8a7 7 0 0 0-7-7z"/><path d="M9 22h6m-5-2h4"/><path d="M12 2v2m7 7h2M3 11h2"/>`,
    'app-led-strip': `<path d="M2 12h20"/><circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>`,
    'app-baby-monitor': `<rect width="12" height="18" x="6" y="3" rx="2"/><circle cx="12" cy="8" r="3"/><path d="M8 15h8m-8 3h4"/>`,
    'app-security-hub': `<rect width="18" height="14" x="3" y="5" rx="2"/><path d="M12 9v6m-3-3h6"/><circle cx="12" cy="12" r="8"/>`,
    'app-motion-sensor': `<circle cx="12" cy="12" r="10"/><path d="M12 8a4 4 0 0 1 0 8"/><circle cx="12" cy="12" r="2"/>`,
    'app-leak-detector': `<path d="M12 22a8 8 0 0 0 8-8c0-5.5-3.5-12-8-12S4 8.5 4 14a8 8 0 0 0 8 8Z"/><path d="M12 14l-2 2 2 2 2-2z"/>`,
    'app-smart-blind': `<rect width="18" height="16" x="3" y="4" rx="1"/><path d="M3 8h18M3 12h18M3 16h18"/>`,
    'app-solar-inverter': `<rect width="14" height="18" x="5" y="3" rx="2"/><path d="M8 8h8m-8 4h8m-8 4h8"/><path d="M5 6h14"/>`,
    'app-ev-charger-wall': `<rect width="12" height="16" x="6" y="4" rx="2"/><path d="M18 10h4v6h-4M12 12h0"/>`,
    'app-wifi-extender': `<rect width="10" height="14" x="7" y="8" rx="2"/><path d="M12 8V2m0 6l4-4m-8 0l4 4"/>`,
    'app-nas-storage': `<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M4 8h16M4 14h16M4 20h16M8 4h0M8 10h0M8 16h0"/>`,
    'app-power-bank-pro': `<rect width="10" height="18" x="7" y="3" rx="2"/><path d="M10 3V1m4 2V1m-2 15l-1 2h2l-1 2"/>`,
    'app-tablet-pro': `<rect width="16" height="20" x="4" y="2" rx="2"/><circle cx="12" cy="19" r="1"/><path d="M19 5v10"/>`,
    'app-tablet-pro': `<rect width="16" height="20" x="4" y="2" rx="2"/><circle cx="12" cy="19" r="1"/><path d="M19 5v10"/>`,

    // Electric Appliances - Personal Care & Fitness
    'app-electric-toothbrush': `<rect width="4" height="14" x="10" y="8" rx="1"/><path d="M10 8V4a2 2 0 0 1 4 0v4"/><circle cx="12" cy="12" r="0.5"/>`,
    'app-beard-trimmer': `<rect width="6" height="16" x="9" y="4" rx="1"/><path d="M8 4h8l-1 2H9L8 4z"/><circle cx="12" cy="14" r="1"/>`,
    'app-hair-dryer-alt': `<path d="M4 14h6l2 6h4l-2-6h6V8a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v6z"/><path d="M22 11h-2"/>`,
    'app-hair-straightener': `<path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/><path d="M10 18h4"/>`,
    'app-hair-curler-alt': `<rect width="4" height="18" x="10" y="3" rx="2"/><path d="M14 6c2 0 4 2 4 4s-2 4-4 4m-4-8c-2 0-4 2-4 4s2 4 4 4"/>`,
    'app-electric-shaver-alt': `<rect width="10" height="16" x="7" y="4" rx="3"/><circle cx="10" cy="7" r="2"/><circle cx="14" cy="7" r="2"/><circle cx="12" cy="10" r="2"/>`,
    'app-epilator': `<rect width="10" height="14" x="7" y="6" rx="3"/><path d="M8 6h8l-1 2H9L8 6z"/><path d="M12 14v2"/>`,
    'app-uv-sterilizer': `<rect width="18" height="12" x="3" y="6" rx="2"/><path d="M7 10h10M7 14h10"/><circle cx="12" cy="3" r="1"/>`,
    'app-bottle-warmer': `<path d="M8 22V8a4 4 0 0 1 8 0v14H8z"/><path d="M12 2v2"/><rect width="12" height="4" x="6" y="18"/>`,
    'app-breast-pump-electric': `<path d="M12 22V10m0 0l-4-4m4 4l4-4"/><rect width="8" height="8" x="8" y="10" rx="1"/>`,
    'app-electric-guitar-alt': `<path d="M9 16l-2 6 5-2 5 2-2-6h-6z"/><path d="M12 16V4l3-2"/>`,
    'app-digital-piano': `<rect width="20" height="4" x="2" y="10" rx="1"/><path d="M6 14v4m4-4v4m4-4v4m4-4v4"/>`,
    'app-guitar-amp-alt': `<rect width="14" height="16" x="5" y="4" rx="1"/><circle cx="12" cy="12" r="3"/><circle cx="8" cy="6" r="0.5"/><circle cx="12" cy="6" r="0.5"/><circle cx="16" cy="6" r="0.5"/>`,
    'app-treadmill-electric': `<path d="M4 20h16l2-4H2l2 4z"/><path d="M6 16V6l4-2"/><path d="M12 4h4"/>`,
    'app-elliptical-machine': `<circle cx="8" cy="16" r="4"/><circle cx="16" cy="16" r="4"/><path d="M8 12V4h8v8"/>`,
    'app-exercise-bike-smart': `<circle cx="6" cy="18" r="4"/><path d="M18 18h-8V6h4"/><circle cx="14" cy="4" r="2"/>`,
    'app-massage-chair': `<path d="M6 22V10a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12H6z"/><path d="M4 12h2m12 0h2m-10 2h4"/>`,
    'app-foot-massager': `<rect width="18" height="12" x="3" y="10" rx="4"/><path d="M7 10V6m10 4V6"/>`,
    'app-scalp-massager': `<path d="M12 4v4m-5 4c0-3 2-5 5-5s5 2 5 5M6 14l2 6m8-6l2 6"/>`,
    'app-facial-steamer': `<path d="M12 22V10a4 4 0 0 1 8 0v12H4V10a4 4 0 0 1 8 0z"/><path d="M12 6V2"/>`,
    'app-massage-gun': `<path d="M6 8h10l2 2v4l-2 2H6V8z"/><path d="M10 16v6h4v-6"/>`,
    'app-blood-pressure-monitor': `<rect width="14" height="14" x="5" y="5" rx="2"/><path d="M4 12h1m14 0h1"/><text x="12" y="15" text-anchor="middle" font-size="6">120</text>`,
    'app-glucose-meter': `<rect width="10" height="18" x="7" y="3" rx="2"/><text x="12" y="12" text-anchor="middle" font-size="6">95</text><path d="M12 19h0"/>`,
    'app-pulse-oximeter': `<rect width="12" height="12" x="6" y="6" rx="2"/><path d="M10 10l2 2 2-2"/><circle cx="12" cy="14" r="1"/>`,
    'app-smart-scale': `<rect width="18" height="18" x="3" y="3" rx="2"/><rect width="8" height="4" x="8" y="5" rx="1"/><text x="12" y="8" text-anchor="middle" font-size="4">0.0</text>`,

    // --- MILLENNIUM EXPANSION [v10.0] ---

    // Keyboard Suite (Base Frame for Keys: <rect width="20" height="20" x="2" y="2" rx="4"/>)
    'key-a': `<rect width="20" height="20" x="2" y="2" rx="4"/><text x="12" y="16" text-anchor="middle" font-size="12" font-weight="bold">A</text>`,
    'key-b': `<rect width="20" height="20" x="2" y="2" rx="4"/><text x="12" y="16" text-anchor="middle" font-size="12" font-weight="bold">B</text>`,
    'key-c': `<rect width="20" height="20" x="2" y="2" rx="4"/><text x="12" y="16" text-anchor="middle" font-size="12" font-weight="bold">C</text>`,
    'key-d': `<rect width="20" height="20" x="2" y="2" rx="4"/><text x="12" y="16" text-anchor="middle" font-size="12" font-weight="bold">D</text>`,
    'key-e': `<rect width="20" height="20" x="2" y="2" rx="4"/><text x="12" y="16" text-anchor="middle" font-size="12" font-weight="bold">E</text>`,
    'key-f': `<rect width="20" height="20" x="2" y="2" rx="4"/><text x="12" y="16" text-anchor="middle" font-size="12" font-weight="bold">F</text>`,
    'key-g': `<rect width="20" height="20" x="2" y="2" rx="4"/><text x="12" y="16" text-anchor="middle" font-size="12" font-weight="bold">G</text>`,
    'key-h': `<rect width="20" height="20" x="2" y="2" rx="4"/><text x="12" y="16" text-anchor="middle" font-size="12" font-weight="bold">H</text>`,
    'key-i': `<rect width="20" height="20" x="2" y="2" rx="4"/><text x="12" y="16" text-anchor="middle" font-size="12" font-weight="bold">I</text>`,
    'key-j': `<rect width="20" height="20" x="2" y="2" rx="4"/><text x="12" y="16" text-anchor="middle" font-size="12" font-weight="bold">J</text>`,
    'key-k': `<rect width="20" height="20" x="2" y="2" rx="4"/><text x="12" y="16" text-anchor="middle" font-size="12" font-weight="bold">K</text>`,
    'key-l': `<rect width="20" height="20" x="2" y="2" rx="4"/><text x="12" y="16" text-anchor="middle" font-size="12" font-weight="bold">L</text>`,
    'key-m': `<rect width="20" height="20" x="2" y="2" rx="4"/><text x="12" y="16" text-anchor="middle" font-size="12" font-weight="bold">M</text>`,
    'key-n': `<rect width="20" height="20" x="2" y="2" rx="4"/><text x="12" y="16" text-anchor="middle" font-size="12" font-weight="bold">N</text>`,
    'key-o': `<rect width="20" height="20" x="2" y="2" rx="4"/><text x="12" y="16" text-anchor="middle" font-size="12" font-weight="bold">O</text>`,
    'key-p': `<rect width="20" height="20" x="2" y="2" rx="4"/><text x="12" y="16" text-anchor="middle" font-size="12" font-weight="bold">P</text>`,
    'key-q': `<rect width="20" height="20" x="2" y="2" rx="4"/><text x="12" y="16" text-anchor="middle" font-size="12" font-weight="bold">Q</text>`,
    'key-r': `<rect width="20" height="20" x="2" y="2" rx="4"/><text x="12" y="16" text-anchor="middle" font-size="12" font-weight="bold">R</text>`,
    'key-s': `<rect width="20" height="20" x="2" y="2" rx="4"/><text x="12" y="16" text-anchor="middle" font-size="12" font-weight="bold">S</text>`,
    'key-t': `<rect width="20" height="20" x="2" y="2" rx="4"/><text x="12" y="16" text-anchor="middle" font-size="12" font-weight="bold">T</text>`,
    'key-u': `<rect width="20" height="20" x="2" y="2" rx="4"/><text x="12" y="16" text-anchor="middle" font-size="12" font-weight="bold">U</text>`,
    'key-v': `<rect width="20" height="20" x="2" y="2" rx="4"/><text x="12" y="16" text-anchor="middle" font-size="12" font-weight="bold">V</text>`,
    'key-w': `<rect width="20" height="20" x="2" y="2" rx="4"/><text x="12" y="16" text-anchor="middle" font-size="12" font-weight="bold">W</text>`,
    'key-x': `<rect width="20" height="20" x="2" y="2" rx="4"/><text x="12" y="16" text-anchor="middle" font-size="12" font-weight="bold">X</text>`,
    'key-y': `<rect width="20" height="20" x="2" y="2" rx="4"/><text x="12" y="16" text-anchor="middle" font-size="12" font-weight="bold">Y</text>`,
    'key-z': `<rect width="20" height="20" x="2" y="2" rx="4"/><text x="12" y="16" text-anchor="middle" font-size="12" font-weight="bold">Z</text>`,
    'key-shift': `<rect width="20" height="20" x="2" y="2" rx="4"/><polyline points="8 12 12 8 16 12"/><line x1="12" x2="12" y1="8" y2="16"/>`,
    'key-enter': `<rect width="20" height="20" x="2" y="2" rx="4"/><polyline points="16 8 16 12 8 12"/><polyline points="11 9 8 12 11 15"/>`,
    'key-space': `<rect width="20" height="20" x="2" y="2" rx="4"/><path d="M7 14h10"/>`,
    'key-esc': `<rect width="20" height="20" x="2" y="2" rx="4"/><text x="12" y="14" text-anchor="middle" font-size="8">ESC</text>`,
    'key-tab': `<rect width="20" height="20" x="2" y="2" rx="4"/><polyline points="10 8 7 11 10 14"/><line x1="7" x2="17" y1="11" y2="11"/><line x1="17" x2="17" y1="8" y2="14"/>`,
    'key-up': `<rect width="20" height="20" x="2" y="2" rx="4"/><polyline points="16 14 12 10 8 14"/>`,
    'key-down': `<rect width="20" height="20" x="2" y="2" rx="4"/><polyline points="8 10 12 14 16 10"/>`,
    'key-left': `<rect width="20" height="20" x="2" y="2" rx="4"/><polyline points="14 8 10 12 14 16"/>`,
    'key-right': `<rect width="20" height="20" x="2" y="2" rx="4"/><polyline points="10 16 14 12 10 8"/>`,
    'key-right': `<rect width="20" height="20" x="2" y="2" rx="4"/><polyline points="10 16 14 12 10 8"/>`,

    // Education & Learning
    'blackboard': `<rect width="18" height="12" x="3" y="3" rx="1"/><path d="M5 15l2 4m10-4l-2 4M3 15h18"/><circle cx="18" cy="12" r="0.5"/>`,
    'desk-lamp-pro': `<path d="M12 2L8 10h8L12 2z"/><path d="M12 10v10M8 22h8"/>`,
    'student-desk': `<path d="M4 18l2-10h12l2 10M6 8V4h12v4"/><path d="M9 12h6"/>`,
    'open-book-pages': `<path d="M2 3h10v18H2v-18zM12 3h10v18H12v-18z"/><path d="M6 7h2m-2 4h2m-2 4h2m10-8h2m-2 4h2m-2 4h2"/>`,
    'backpack-pro': `<rect width="12" height="14" x="6" y="6" rx="2"/><path d="M9 6V4a3 3 0 0 1 6 0v2"/><path d="M6 10h12M12 10v4"/>`,
    'diploma-ribbon': `<path d="M4 19.5V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14.5a2.5 2.5 0 0 1-2.5 2.5H6a2.5 2.5 0 0 1-2.5-2.5z"/><polyline points="12 3 12 10 15 8 18 10 18 3"/>`,
    'globe-stand': `<circle cx="12" cy="10" r="8"/><path d="M12 18v4m-8 0h16M12 2a10 10 0 0 1 10 10"/>`,
    'ruler-triangle': `<path d="M3 21L21 21L3 3z"/><path d="M7 18h2m-2-3h1m-1-3h2m-2-3h1"/>`,
    'abacus-classic': `<rect width="18" height="14" x="3" y="5" rx="1"/><path d="M3 10h18M3 15h18M8 5v5m0 5v5M16 5V20"/>`,
    'lecture-hall': `<path d="M2 22h20M4 18h16M7 14h10"/><circle cx="12" cy="14" r="2"/>`,
    'magnifying-glass-pro': `<circle cx="10" cy="10" r="7"/><path d="M21 21l-6-6M10 7v6m-3-3h6"/>`,
    'pencil-case': `<rect width="16" height="6" x="4" y="9" rx="2"/><path d="M4 12h16"/>`,
    'ink-well': `<path d="M8 22h8v-6h-8v6z"/><path d="M10 16L7 4h10l-3 12"/><circle cx="12" cy="4" r="2"/>`,
    'library-building': `<path d="M3 21h18M3 10h18M12 3L2 10h20L12 3z"/><path d="M7 10v11M12 10v11M17 10v11"/>`,
    'calculator-math': `<rect width="14" height="20" x="5" y="2" rx="2"/><path d="M8 6h8M8 10h2M14 10h2M8 14h2M14 14h2M8 18h8"/>`,
    'folder-education': `<path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93l-2.1-2.11A2 2 0 0 0 8.56 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z"/><path d="M12 10v4m0 0l-2-2m2 2l2-2"/>`,
    'graduation-cap-alt': `<path d="M22 10L12 5 2 10l10 5 10-5Z"/><path d="M6 12v5a6 6 0 0 0 12 0v-5"/><path d="M18 10v10l-2-2"/>`,
    'teacher-desk': `<rect width="18" height="10" x="3" y="12"/><path d="M5 12V4h14v8M9 8h6"/>`,
    'notebook-bound': `<rect width="14" height="18" x="6" y="3" rx="1"/><path d="M6 6h0M6 10h0M6 14h0M6 18h0"/>`,
    'paper-stack': `<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><path d="M8 2v2m12 12h2M8 22v2"/>`,
    'paper-stack': `<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><path d="M8 2v2m12 12h2M8 22v2"/>`,

    // Construction & Tools
    'cement-mixer': `<circle cx="12" cy="12" r="8"/><path d="M12 4v16M4 12h16"/><rect width="18" height="10" x="3" y="14" rx="1"/>`,
    'traffic-cone': `<path d="M12 2L6 20h12L12 2z"/><path d="M8 14h8m-10 6h12"/>`,
    'paint-roller-wall': `<rect width="14" height="6" x="5" y="4" rx="1"/><path d="M5 7V14a2 2 0 0 0 2 2h3m0 0l2 6"/><path d="M10 7h4"/>`,
    'level-bubble': `<rect width="18" height="6" x="3" y="9" rx="3"/><circle cx="12" cy="12" r="1.5"/><path d="M10 12h4"/>`,
    'ruler-r': `<rect width="20" height="6" x="2" y="9" rx="1"/><path d="M6 9v2m4-2v4m4-4v2m4-2v4"/>`,
    'toolbox-heavy': `<rect width="16" height="12" x="4" y="8" rx="2"/><path d="M9 8V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3"/><path d="M4 13h16"/>`,
    'safety-vest': `<path d="M6 4h12l2 6v12H4V10l2-6z"/><path d="M4 11h16M4 16h16M12 4v18"/>`,
    'cone-traffic': `<path d="M12 2L4 20h16L12 2z"/><path d="M7 14h10"/><path d="M2 22h20"/>`,
    'jack-hammer-pro': `<rect width="10" height="12" x="7" y="4" rx="1"/><path d="M12 16v6M10 4h4m-8 2h12"/>`,
    'wheel-barrow': `<path d="M4 10h12l4-6H4z"/><circle cx="6" cy="18" r="3"/><path d="M16 10l4 8H8"/>`,
    'wheel-barrow': `<path d="M4 10h12l4-6H4z"/><circle cx="6" cy="18" r="3"/><path d="M16 10l4 8H8"/>`,

    // Shopping & Groceries
    'shopping-basket-wire': `<path d="M22 10H2l2 10h16l2-10z"/><path d="M7 10V5a2 2 0 1 1 4 0v5m6 0V5a2 2 0 1 0-4 0v5"/><path d="M2 14h20M2 18h20"/>`,
    'cash-register-pro': `<rect width="16" height="12" x="4" y="8" rx="1"/><rect width="8" height="4" x="8" y="2" rx="1"/><path d="M4 14h16M8 12h8"/><circle cx="12" cy="5" r="0.5"/>`,
    'grocery-bag-filled': `<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4H6z"/><path d="M3 6h18M9 10v4m6-4v4"/>`,
    'milk-carton-pro': `<path d="M6 22h12V8l-6-6-6 6v14z"/><path d="M6 12h12M12 2v6"/>`,
    'egg-carton-case': `<rect width="18" height="10" x="3" y="10" rx="3"/><circle cx="7" cy="15" r="2"/><circle cx="12" cy="15" r="2"/><circle cx="17" cy="15" r="2"/>`,
    'bread-loaf-alt': `<path d="M3 14c0-4 4-6 9-6s9 2 9 6v4H3v-4z"/><path d="M7 8v2m5-2v2m5-2v2"/>`,
    'canned-box': `<rect width="12" height="16" x="6" y="4" rx="1"/><path d="M6 8h12M6 16h12"/><circle cx="12" cy="12" r="2"/>`,
    'supermarket-cart': `<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.56-7.43H5.12"/><path d="M8 8h10"/>`,
    'loyalty-badge': `<path d="M12 2l3 2 4-1 1 4 4 1-1 4 3 4-4 1-1 4-4-1-3 2-3-2-4 1-1-4-4-1 1-4-3-4 4-1 1-4 4 1 3-2Z"/><circle cx="12" cy="12" r="4"/>`,
    'sale-tag-pro': `<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><path d="M12 12l2-2m-2 0l-2 2m2-2v4"/>`,

    // Simplified Space & Transport
    'aeroplane': `<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3.5 20.5 3 18.5 3.5 17 5L13.5 8.5 5.3 6.7c-1.1-.3-2.2.3-2.5 1.4l-.1.4 8.7 3.5-3.5 3.5-4-.5c-.5-.1-1 .1-1.3.5l-.2.3 3 3 3 3 .3-.2c.4-.3.6-.8.5-1.3l-.5-4 3.5-3.5 3.5 8.7.4-.1c1-.3 1.6-1.4 1.4-2.5Z"/>`,
    'helicopter-pro': `<path d="M2 12h16c3 0 4 2 4 4s-1 4-4 4H4"/><path d="M8 12V3h8M3 3h18"/><circle cx="12" cy="16" r="2"/>`,
    'alien-simple': `<path d="M12 2a9 9 0 0 0-9 9c0 5 4 9 9 9s9-4 9-9a9 9 0 0 0-9-9Z"/><circle cx="8" cy="11" r="2"/><circle cx="16" cy="11" r="2"/>`,
    'planet-simple': `<circle cx="12" cy="12" r="8"/><path d="M2 12h20"/>`,
    'sun-simple': `<circle cx="12" cy="12" r="5"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2m-15.4-6.4l1.4 1.4m10.6 10.6l1.4 1.4m-12 0l1.4-1.4m10.6-10.6l1.4-1.4"/>`,
    'moon-simple': `<path d="M12 3a9 9 0 1 0 9 9 9 9 0 0 0-9-9z"/>`,
    'half-moon-shape': `<path d="M12 2a10 10 0 1 1 0 20V2z"/>`,
    'rocket-alt': `<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3.5 3.5L5 15l3.5-3.5L12 15zM22 2c-3 0-10 1-10 10l5 5c9 0 10-7 10-10z"/><circle cx="15" cy="9" r="1"/>`,
    'satellite-pro': `<rect width="12" height="4" x="2" y="10" rx="1"/><rect width="12" height="4" x="10" y="10" rx="1"/><path d="M12 10V2"/><circle cx="12" cy="2" r="1"/>`,
    'shuttle-v10': `<path d="M12 2L8 10l-4 8 8 4 8-4-4-8L12 2Z"/><path d="M10 6h4"/>`,

    // Brand Logos (Developer Ecosystem)
    'logo-python': `<path d="M12 2a5 5 0 0 0-5 5v2h5V7h5V5a5 5 0 0 0-5-5zM7 22a5 5 0 0 0 5-5v-2h-5v2h-5v2a5 5 0 0 0 5 5z"/><circle cx="9" cy="5" r="0.5"/><circle cx="15" cy="19" r="0.5"/>`,
    'logo-java': `<path d="M6 20c0 1.1 2.7 2 6 2s6-.9 6-2M3 17c0 1.1 4 2 9 2s9-.9 9-2M7 14c0 1 2.2 1.8 5 1.8s5-.8 5-1.8"/><path d="M12 2c0 4-4 6-4 10s4 8 4 8 4-4 4-8-4-6-4-10z"/>`,
    'logo-go': `<circle cx="12" cy="12" r="10"/><path d="M18 12H12l2 2m-2-6l4-4"/>`,
    'logo-rust': `<circle cx="12" cy="12" r="10"/><path d="M12 2l1 2m6 1l-2 1m4 6h-2m-1 6l-1-2m-6 3v-2m-6-1l1-2m-4-6h2m1-6l1 2"/><circle cx="12" cy="12" r="4"/>`,
    'logo-react': `<circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-60 12 12)"/>`,
    'logo-flutter': `<path d="M12 2L2 12l10 10 10-10L12 2z"/><path d="M12 6v12M6 12h12"/>`,
    'logo-swift': `<path d="M22 2s-8 4-12 12c-2 4-6 8-6 8s4-2 8-4l10-16z"/><path d="M12 12l4 4-2-6"/>`,
    'logo-kotlin': `<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 21L21 3M3 3l18 18M12 12l9 0"/>`,
    'logo-cpp': `<circle cx="12" cy="12" r="10"/><path d="M12 8a4 4 0 1 0 0 8"/><path d="M18 10h4M20 8v4M14 10h4M16 8v4"/>`,
    'logo-csharp': `<circle cx="12" cy="12" r="10"/><path d="M12 8a4 4 0 1 0 0 8"/><path d="M16 10h4M16 14h4M17 9v6M19 9v6"/>`,
    'logo-ruby': `<path d="M12 2L2 9l10 13 10-13L12 2z"/><path d="M6 9l6 6 6-6M9 6h6"/>`,
    'logo-typescript': `<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h10M12 7v12M15 15v2a2 2 0 0 1-2 2h-4l1-2h3v-2h-2v2"/>`,
    'logo-html5': `<path d="M4 2l1.5 16 6.5 4 6.5-4L20 2H4z"/><path d="M7 8h10l-.5 4H8l.5 4 3.5 2 3.5-2 .5-2"/>`,
    'logo-vscode': `<path d="M18.5 3L12 8.5 6 3 2 5l6 7-6 7 4 2 6-5.5 6.5 5.5 3-2V5l-3-2zM6 12l-2-2 2-2 2 2-2 2z"/>`,
};
window.webecon_all_icons = icons;
/**
 * @file webicons.js
 * @product    Webecon — Premium Animated Icon Engine
 * @author     Aditya Divte Production (aka Aditya Diwate)
 * @company    adityadivte.com
 * @watermark  Webecon by Aditya Divte Production (aka Aditya Diwate) — support@adityadivte.com
 * @license    Free for commercial use. Standalone asset resale strictly prohibited.
 * @version    17.2 PRO
 * @copyright  © 2026 Aditya Divte Production (aka Aditya Diwate). All rights reserved.
 * @see        https://adityadivte.com
 * @info       Visit webecon.adityadivte.com for more info
 */


// --- WEBECON PROFESSIONAL PROVENANCE & TELEMETRY ---
(function() {
    if (window.__WEBICONS_BRANDED__) return;
    window.__WEBICONS_BRANDED__ = true;

    const VERSION = '17.2 PRO';
    const BRAND   = 'Webecon by Aditya Divte Production (aka Aditya Diwate) — support@adityadivte.com';
    const msg = ` %c 🚀 WEBECON v${VERSION} %c © Webecon by Aditya Divte Production (aka Aditya Diwate) %c adityadivte.com `;
    console.log(msg,
        'color: #000; background: #00f2fe; padding: 5px 10px; border-radius: 4px 0 0 4px; font-weight: bold;',
        'color: #fff; background: #6366f1; padding: 5px 10px; font-weight: bold;',
        'color: #6366f1; background: #000; padding: 5px 10px; border-radius: 0 4px 4px 0; border: 1px solid #6366f1;');

    console.log(`[Webecon] ${BRAND}`);
    console.log(`[Webecon] Free for commercial use — credit appreciated but not required.`);
    console.log(`[Webecon] Standalone icon resale is strictly prohibited.`);

    try {
        const host = window.location.hostname;
        if (host && !['localhost', '127.0.0.1'].includes(host)) {
            console.log(`[Webecon] Authenticated for ${host}. ${BRAND}`);
        }
    } catch(e) {}
})();

console.log('[Webecon] Defining Webecon class...');
class Webecon extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this._iconData = null;
        this._animationStyles = null;
        this._clickHandler = this._handleClick.bind(this);
    }

    static get observedAttributes() {
        return ['name', 'size', 'color', 'secondary-color', 'secondary-opacity', 'stroke', 'animation', 'animation-mode', 'theme'];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        if (oldVal === newVal) return;
        if (['name', 'theme'].includes(name)) {
            this.render();
        } else {
            this._updateStyles();
        }
    }

    connectedCallback() {
        this.render();
        this.addEventListener('click', this._clickHandler);
    }

    disconnectedCallback() {
        this.removeEventListener('click', this._clickHandler);
    }

    _handleClick() {
        const mode = this.getAttribute('animation-mode') || 'infinite';
        if (mode !== 'click') return;

        const animation = this.getAttribute('animation') || 'none';
        if (animation === 'none') return;
        const motionWrapper = this.shadowRoot.querySelector('.motion-wrapper');
        if (!motionWrapper) return;
        
        // Force restart animation
        motionWrapper.style.animation = 'none';
        void motionWrapper.offsetWidth; // Trigger reflow
        
        const config = this._getAnimationConfig(animation);
        // Explicitly set 1 iteration for click mode
        motionWrapper.style.animation = `${animation} ${config.duration} ${config.timing} 1`;
        
        // Reset after duration to allow re-triggering
        setTimeout(() => {
            if (this.getAttribute('animation-mode') === 'click') {
                motionWrapper.style.animation = 'none';
            }
        }, parseFloat(config.duration) * 1000);
    }

    _getAnimationConfig(name) {
        const configs = {
            'spin': { duration: '2s', timing: 'linear' },
            'spin-slow': { duration: '4s', timing: 'linear' },
            'pulse': { duration: '2s', timing: 'ease-in-out' },
            'heartbeat': { duration: '1.2s', timing: 'ease-in-out' },
            'bounce': { duration: '1s', timing: 'ease-in-out' },
            'shake': { duration: '0.6s', timing: 'ease-in-out' },
            'ring': { duration: '2s', timing: 'ease-in-out' },
            'swing': { duration: '2s', timing: 'ease-in-out' },
            'float': { duration: '3s', timing: 'ease-in-out' },
            'flash': { duration: '1.5s', timing: 'ease-in-out' },
            'rubber-band': { duration: '1s', timing: 'ease-in-out' },
            'tada': { duration: '1s', timing: 'ease-in-out' },
            'jello': { duration: '1s', timing: 'ease-in-out' },
            'fade': { duration: '1.5s', timing: 'ease-in-out' },
            'flip': { duration: '1.5s', timing: 'ease-in-out' },
            'flip-v': { duration: '1.5s', timing: 'ease-in-out' },
            'rotate-90': { duration: '0.4s', timing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)' },
            'zoom-in': { duration: '0.5s', timing: 'ease-out' },
            'zoom-out': { duration: '0.5s', timing: 'ease-in' },
            'slide-up': { duration: '0.5s', timing: 'ease-out' }
        };
        return configs[name] || { duration: '1s', timing: 'ease-in-out' };
    }

    _updateStyles() {
        const color = this.getAttribute('color') || 'currentColor';
        const secondary = this.getAttribute('secondary-color') || 'rgba(255, 255, 255, 0.2)';
        const size = this.getAttribute('size') || '24';
        const stroke = this.getAttribute('stroke') || '2';
        const animation = this.getAttribute('animation') || 'none';
        const mode = this.getAttribute('animation-mode') || 'infinite';
        const config = this._getAnimationConfig(animation);

        this.style.width = `${size}px`;
        this.style.height = `${size}px`;
        this.style.color = color;
        this.style.setProperty('--webecon-primary', color);
        this.style.setProperty('--webecon-secondary', secondary);
        this.style.setProperty('--anim-name', animation);
        this.style.setProperty('--anim-duration', config.duration);
        this.style.setProperty('--anim-timing', config.timing);

        const motionWrapper = this.shadowRoot.querySelector('.motion-wrapper');
        if (motionWrapper) {
            motionWrapper.className = `motion-wrapper anim-${animation} mode-${mode}`;
        }

        const svgs = this.shadowRoot.querySelectorAll('svg');
        svgs.forEach(svg => svg.style.strokeWidth = stroke);

        const duoBg = this.shadowRoot.querySelector('.duo-layer-bg');
        if (duoBg) {
            duoBg.style.stroke = secondary;
            duoBg.style.strokeWidth = (parseFloat(stroke) * 1.5).toString();
        }

        const fillLayer = this.shadowRoot.querySelector('.fill-layer');
        if (fillLayer) {
            if (secondary === 'transparent' || secondary === 'none') {
                fillLayer.style.display = 'none';
            } else {
                fillLayer.style.display = 'block';
                fillLayer.style.fill = secondary;
                const opacity = this.getAttribute('secondary-opacity') || '0.35';
                fillLayer.style.fillOpacity = opacity;
            }
        }

        const bloby = this.shadowRoot.querySelector('.blobify');
        if (bloby) bloby.style.background = secondary;

        const halo = this.shadowRoot.querySelector('.halo-ring');
        if (halo) {
            halo.style.borderColor = color;
            halo.style.boxShadow = `0 0 15px ${color}`;
        }
    }

    render() {
        const name = this.getAttribute('name') || 'home';
        const theme = this.getAttribute('theme') || 'line';
        const iconPath = icons[name] || icons['home'];
        const gradId = `g-${Math.random().toString(36).substr(2, 5)}`;
        const maskId = `m-${Math.random().toString(36).substr(2, 5)}`;

        this.shadowRoot.innerHTML = `
            <style>
                :host { display: inline-flex; align-items: center; justify-content: center; cursor: pointer; position: relative; }
                
                .theme-wrapper { 
                    position: relative; width: 100%; height: 100%; 
                    display: flex; align-items: center; justify-content: center;
                }
                
                .motion-wrapper { 
                    position: relative; width: 100%; height: 100%; 
                    display: flex; align-items: center; justify-content: center; 
                    transform-origin: center;
                }

                svg { width: 100%; height: 100%; fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; transition: stroke 0.3s ease; }

                /* --- ADVANCED THEMES --- */
                
                :host([theme="neon"]) .motion-wrapper { filter: drop-shadow(0 0 5px currentColor) drop-shadow(0 0 15px currentColor); }
                
                .duo-layer-bg { display: none; position: absolute; inset: 0; opacity: 0.25; transition: stroke 0.3s ease; }
                :host([theme="duo"]) .duo-layer-bg { display: block; }

                .fill-layer { display: block; position: absolute; inset: 0; z-index: 0; opacity: var(--webecon-fill-opacity, 0.2); }
                .fill-layer path { stroke: none !important; }

                .glass-bg { display: none; position: absolute; inset: -15%; background: rgba(255,255,255,0.05); backdrop-filter: blur(8px); border-radius: 25%; border: 1px solid rgba(255,255,255,0.1); z-index: -1; }
                :host([theme="glass"]) .glass-bg { display: block; }

                :host([theme="shine"]) .main-svg { mask: url(#${maskId}); }
                .shine-gradient { animation: shine-move 2s infinite linear; }
                @keyframes shine-move { from { transform: translateX(-100%) translateY(-100%); } to { transform: translateX(100%) translateY(100%); } }

                :host([theme="3d"]) .theme-wrapper { transform: perspective(500px) rotateX(20deg) rotateY(-15deg); }
                :host([theme="3d"]) .motion-wrapper { filter: drop-shadow(4px 4px 0px rgba(0,0,0,0.3)); }

                :host([theme="solid"]) .main-svg { fill: currentColor; }
                :host([theme="brutalist"]) .motion-wrapper { stroke-width: 4 !important; filter: drop-shadow(4px 4px 0px #000); }
                
                :host([theme="cyberpunk"]) .motion-wrapper { filter: drop-shadow(-2px 0 #ff003c) drop-shadow(2px 0 #00f0ff); animation: glitch 0.4s infinite; }
                @keyframes glitch { 0%, 100% { transform: translate(0); } 20% { transform: translate(-1px, 1px); } 60% { transform: translate(1px, -1px); } }

                .halo-ring { display: none; position: absolute; inset: -10%; border: 2px solid currentColor; border-radius: 50%; opacity: 0.4; animation: halo-pulse 2s infinite; pointer-events: none; }
                @keyframes halo-pulse { 0% { transform: scale(0.8); opacity: 0.6; } 100% { transform: scale(1.5); opacity: 0; } }
                :host([theme="halo"]) .halo-ring { display: block; }

                .blobify { display: none; position: absolute; inset: -20%; background: currentColor; opacity: 0.15; border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; animation: blobify 6s infinite ease-in-out; z-index: -1; }
                @keyframes blobify { 0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; } 50% { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; } }
                :host([theme="blob"]) .blobify { display: block; }

                /* --- ANIMATION ENGINE --- */
                .mode-infinite { animation: var(--anim-name) var(--anim-duration) var(--anim-timing) infinite; }
                :host(:hover) .mode-hover { animation: var(--anim-name) var(--anim-duration) var(--anim-timing) infinite; }
                .mode-click { animation: none; } /* Click mode is handled via JS */

                @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.15); } }
                @keyframes heartbeat { 0%, 100% { transform: scale(1); } 20% { transform: scale(1.25); } 40% { transform: scale(1.15); } 60% { transform: scale(1.25); } }
                @keyframes bounce { 0%, 20%, 50%, 80%, 100% { transform: translateY(0); } 40% { transform: translateY(-30%); } 60% { transform: translateY(-15%); } }
                @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15%); } }
                @keyframes shake { 0%, 100% { transform: translateX(0); } 20%, 60% { transform: translateX(-10%); } 40%, 80% { transform: translateX(10%); } }
                @keyframes ring { 0%, 100% { transform: rotate(0); } 10%, 30%, 50%, 70%, 90% { transform: rotate(-10deg); } 20%, 40%, 60%, 80% { transform: rotate(10deg); } }
                @keyframes swing { 0%, 100% { transform: rotate(0); } 20% { transform: rotate(15deg); } 40% { transform: rotate(-10deg); } 60% { transform: rotate(5deg); } 80% { transform: rotate(-5deg); } }
                @keyframes flash { 0%, 50%, 100% { opacity: 1; } 25%, 75% { opacity: 0.2; } }
                @keyframes rubber-band { 0% { transform: scale(1); } 30% { transform: scaleX(1.25) scaleY(0.75); } 40% { transform: scaleX(0.75) scaleY(1.25); } 50% { transform: scaleX(1.15) scaleY(0.85); } 100% { transform: scale(1); } }
                @keyframes tada { 0% { transform: scale(1); } 10%, 20% { transform: scale(0.9) rotate(-3deg); } 30%, 50%, 70%, 90% { transform: scale(1.1) rotate(3deg); } 40%, 60%, 80% { transform: scale(1.1) rotate(-3deg); } 100% { transform: scale(1) rotate(0); } }
                @keyframes jello { 11.1% { transform: translate(0); } 22.2% { transform: skewX(-12.5deg) skewY(-12.5deg); } 33.3% { transform: skewX(6.25deg) skewY(6.25deg); } 44.4% { transform: skewX(-3.125deg) skewY(-3.125deg); } 55.5% { transform: skewX(1.5625deg) skewY(1.5625deg); } 100% { transform: translate(0); } }
                @keyframes fade { 0% { opacity: 0; } 100% { opacity: 1; } }
                @keyframes flip { from { transform: perspective(400px) rotateY(0); } to { transform: perspective(400px) rotateY(360deg); } }
                @keyframes flip-v { from { transform: perspective(400px) rotateX(0); } to { transform: perspective(400px) rotateX(360deg); } }
                @keyframes rotate-90 { to { transform: rotate(90deg); } }
                @keyframes zoom-in { from { transform: scale(0); opacity: 0; } to { transform: scale(1); opacity: 1; } }
                @keyframes zoom-out { from { transform: scale(1.2); opacity: 0; } to { transform: scale(1); opacity: 1; } }
                @keyframes slide-up { from { transform: translateY(20%); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
            </style>
            <div class="theme-wrapper">
                <div class="glass-bg"></div>
                <div class="blobify"></div>
                <div class="halo-ring"></div>
                
                <div class="motion-wrapper">
                    <svg class="fill-layer" viewBox="0 0 24 24">${iconPath}</svg>
                    <svg class="duo-layer-bg" viewBox="0 0 24 24">${iconPath}</svg>
                    <svg class="main-svg" viewBox="0 0 24 24">
                        <defs>
                            <mask id="${maskId}">
                                <rect width="100%" height="100%" fill="white" />
                                <rect class="shine-gradient" width="200%" height="200%" fill="url(#shine-grad)" transform="rotate(45)" />
                            </mask>
                            <linearGradient id="shine-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stop-color="white" stop-opacity="0" />
                                <stop offset="50%" stop-color="white" stop-opacity="0.8" />
                                <stop offset="100%" stop-color="white" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                        ${iconPath}
                    </svg>
                </div>
            </div>
        `;
        this._updateStyles();
    }
}
if (!customElements.get('webecon-icon')) { 
    console.log('[Webecon] Registering custom element <webecon-icon>...');
    customElements.define('webecon-icon', Webecon); 
}

})();